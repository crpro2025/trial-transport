import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'
import { getOrCreateStripeCustomer, createSubscription, getPlanDetails } from '@/lib/stripe-config'

export async function POST(request: NextRequest) {
  try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

    const session = await getServerSession(authOptions)

    if (!session?.user?.id || session.user.role !== 'SHIPPER') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { plan } = body

    if (!plan) {
      return NextResponse.json(
        { error: 'Plan required' },
        { status: 400 }
      )
    }

    // Get user details
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { shipperProfile: true }
    })

    if (!user || !user.shipperProfile) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get or create Stripe customer
    const customer = await getOrCreateStripeCustomer(
      user.id,
      user.email,
      user.name
    )

    // Get plan details (hybrid model)
    const planDetails = getPlanDetails(plan)

    // Create subscription (skip for BASIC plan - it's free)
    let subscription = null
    let clientSecret = null

    if (plan !== 'BASIC' && planDetails.amount > 0) {
      subscription = await createSubscription(
        customer.id,
        planDetails.priceId,
        {
          userId: user.id,
          plan: planDetails.name
        }
      )
      clientSecret = (subscription.latest_invoice as any)?.payment_intent?.client_secret
    }

    // Update shipper profile with hybrid model data
    await prisma.shipperProfile.update({
      where: { id: user.shipperProfile.id },
      data: {
        subscriptionPlan: plan,
        subscriptionStatus: 'ACTIVE',
        discountRate: planDetails.discountRate,
        nextBillingDate: subscription ? new Date((subscription as any).current_period_end * 1000) : null
      }
    })

    // Allocate credits if plan includes them
    if (planDetails.includedCredits > 0) {
      // Calculate expiration date (90 days)
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 90)

      // Create credit transaction
      await prisma.creditTransaction.create({
        data: {
          shipperId: user.shipperProfile.id,
          type: 'ALLOCATION',
          amount: planDetails.includedCredits,
          balance: user.shipperProfile.creditsBalance + planDetails.includedCredits,
          description: `${planDetails.name} plan - Monthly credit allocation`,
          expiresAt
        }
      })

      // Update credit balance
      await prisma.shipperProfile.update({
        where: { id: user.shipperProfile.id },
        data: {
          creditsBalance: {
            increment: planDetails.includedCredits
          },
          creditsAllocated: {
            increment: planDetails.includedCredits
          }
        }
      })
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'SUBSCRIPTION_CREATED',
        entity: 'Subscription',
        entityId: subscription?.id || 'basic-plan',
        metadata: { 
          plan, 
          credits: planDetails.includedCredits,
          discount: planDetails.discountRate 
        }
      }
    })

    return NextResponse.json({
      subscriptionId: subscription?.id || null,
      clientSecret,
      customerId: customer.id,
      plan: planDetails.name,
      credits: planDetails.includedCredits,
      discount: Math.round(planDetails.discountRate * 100)
    })

  } catch (error) {
    console.error('Subscription creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}