import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
    if (!prisma) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      )
    }

  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id || session.user.role !== 'SHIPPER') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { amount, shipmentId, description } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Valid amount required' },
        { status: 400 }
      )
    }

    // Get shipper profile
    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { userId: session.user.id }
    })

    if (!shipperProfile) {
      return NextResponse.json(
        { error: 'Shipper profile not found' },
        { status: 404 }
      )
    }

    // Check if sufficient credits
    if (shipperProfile.creditsBalance < amount) {
      return NextResponse.json(
        { 
          error: 'Insufficient credits',
          balance: shipperProfile.creditsBalance,
          required: amount
        },
        { status: 400 }
      )
    }

    // Create credit transaction
    const transaction = await prisma.creditTransaction.create({
      data: {
        shipperId: shipperProfile.id,
        type: 'USAGE',
        amount: -amount,
        balance: shipperProfile.creditsBalance - amount,
        description: description || `Credit used for shipment`,
        shipmentId
      }
    })

    // Update shipper profile
    await prisma.shipperProfile.update({
      where: { id: shipperProfile.id },
      data: {
        creditsBalance: {
          decrement: amount
        },
        creditsUsed: {
          increment: amount
        }
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'CREDITS_USED',
        entity: 'CreditTransaction',
        entityId: transaction.id,
        metadata: { amount, shipmentId }
      }
    })

    return NextResponse.json({
      message: 'Credits used successfully',
      transaction,
      newBalance: shipperProfile.creditsBalance - amount,
      amountUsed: amount
    })

  } catch (error) {
    console.error('Credit usage error:', error)
    return NextResponse.json(
      { error: 'Failed to use credits' },
      { status: 500 }
    )
  }
}