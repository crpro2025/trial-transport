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

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { shipperId, amount, description, expiresInDays = 90 } = body

    if (!shipperId || !amount) {
      return NextResponse.json(
        { error: 'Shipper ID and amount required' },
        { status: 400 }
      )
    }

    // Get shipper profile
    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { id: shipperId }
    })

    if (!shipperProfile) {
      return NextResponse.json(
        { error: 'Shipper profile not found' },
        { status: 404 }
      )
    }

    // Calculate expiration date
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + expiresInDays)

    // Create credit transaction
    const transaction = await prisma.creditTransaction.create({
      data: {
        shipperId,
        type: 'ALLOCATION',
        amount,
        balance: shipperProfile.creditsBalance + amount,
        description: description || 'Monthly credit allocation',
        expiresAt
      }
    })

    // Update shipper profile
    await prisma.shipperProfile.update({
      where: { id: shipperId },
      data: {
        creditsBalance: {
          increment: amount
        },
        creditsAllocated: {
          increment: amount
        }
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: shipperProfile.userId,
        action: 'CREDITS_ALLOCATED',
        entity: 'CreditTransaction',
        entityId: transaction.id,
        metadata: { amount, expiresAt }
      }
    })

    return NextResponse.json({
      message: 'Credits allocated successfully',
      transaction,
      newBalance: shipperProfile.creditsBalance + amount
    })

  } catch (error) {
    console.error('Credit allocation error:', error)
    return NextResponse.json(
      { error: 'Failed to allocate credits' },
      { status: 500 }
    )
  }
}