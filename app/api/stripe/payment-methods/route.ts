import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'
import { 
  listPaymentMethods, 
  attachPaymentMethod, 
  setDefaultPaymentMethod,
  detachPaymentMethod,
  getOrCreateStripeCustomer 
} from '@/lib/stripe-config'

// Get payment methods
export async function GET(request: NextRequest) {
  try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user) {
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

    // List payment methods
    const paymentMethods = await listPaymentMethods(customer.id)

    return NextResponse.json({
      paymentMethods: paymentMethods.data.map(pm => ({
        id: pm.id,
        type: pm.type,
        card: pm.card ? {
          brand: pm.card.brand,
          last4: pm.card.last4,
          expMonth: pm.card.exp_month,
          expYear: pm.card.exp_year
        } : null
      }))
    })

  } catch (error) {
    console.error('Payment methods fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payment methods' },
      { status: 500 }
    )
  }
}

// Add payment method
export async function POST(request: NextRequest) {
  try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { paymentMethodId, setAsDefault } = body

    if (!paymentMethodId) {
      return NextResponse.json(
        { error: 'Payment method ID required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { shipperProfile: true }
    })

    if (!user) {
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

    // Attach payment method
    const paymentMethod = await attachPaymentMethod(paymentMethodId, customer.id)

    // Set as default if requested
    if (setAsDefault) {
      await setDefaultPaymentMethod(customer.id, paymentMethodId)
    }

    // Save to database if shipper
    if (user.shipperProfile) {
      await prisma.paymentMethod.create({
        data: {
          shipperId: user.shipperProfile.id,
          type: 'CREDIT_CARD',
          last4: paymentMethod.card?.last4 || '',
          brand: paymentMethod.card?.brand || '',
          expiryMonth: paymentMethod.card?.exp_month,
          expiryYear: paymentMethod.card?.exp_year,
          isDefault: setAsDefault || false,
          stripePaymentMethodId: paymentMethod.id
        }
      })
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'PAYMENT_METHOD_ADDED',
        entity: 'PaymentMethod',
        entityId: paymentMethod.id
      }
    })

    return NextResponse.json({
      message: 'Payment method added successfully',
      paymentMethod: {
        id: paymentMethod.id,
        card: paymentMethod.card
      }
    })

  } catch (error) {
    console.error('Payment method add error:', error)
    return NextResponse.json(
      { error: 'Failed to add payment method' },
      { status: 500 }
    )
  }
}

// Remove payment method
export async function DELETE(request: NextRequest) {
  try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const paymentMethodId = searchParams.get('paymentMethodId')

    if (!paymentMethodId) {
      return NextResponse.json(
        { error: 'Payment method ID required' },
        { status: 400 }
      )
    }

    // Detach from Stripe
    await detachPaymentMethod(paymentMethodId)

    // Remove from database
    await prisma.paymentMethod.deleteMany({
      where: {
        stripePaymentMethodId: paymentMethodId
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'PAYMENT_METHOD_REMOVED',
        entity: 'PaymentMethod',
        entityId: paymentMethodId
      }
    })

    return NextResponse.json({
      message: 'Payment method removed successfully'
    })

  } catch (error) {
    console.error('Payment method remove error:', error)
    return NextResponse.json(
      { error: 'Failed to remove payment method' },
      { status: 500 }
    )
  }
}