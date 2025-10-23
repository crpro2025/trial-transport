import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'
import { cancelSubscription } from '@/lib/stripe-config'

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
    const { subscriptionId } = body

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Subscription ID required' },
        { status: 400 }
      )
    }

    // Cancel subscription in Stripe
    const canceledSubscription = await cancelSubscription(subscriptionId)

    // Update shipper profile
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { shipperProfile: true }
    })

    if (user?.shipperProfile) {
      await prisma.shipperProfile.update({
        where: { id: user.shipperProfile.id },
        data: {
          subscriptionStatus: 'CANCELLED'
        }
      })
    }

    // Create notification
    await prisma.notification.create({
      data: {
        userId: session.user.id,
        type: 'SYSTEM_ALERT',
        title: 'Subscription Cancelled',
        message: 'Your subscription has been cancelled. You can reactivate it anytime.',
        link: '/shipper/billing'
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'SUBSCRIPTION_CANCELLED',
        entity: 'Subscription',
        entityId: subscriptionId
      }
    })

    return NextResponse.json({
      message: 'Subscription cancelled successfully',
      subscription: canceledSubscription
    })

  } catch (error) {
    console.error('Subscription cancellation error:', error)
    return NextResponse.json(
      { error: 'Failed to cancel subscription' },
      { status: 500 }
    )
  }
}