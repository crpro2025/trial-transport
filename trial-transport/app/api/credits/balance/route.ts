import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
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

    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { userId: session.user.id },
      select: {
          userId: true,
        creditsBalance: true,
        creditsAllocated: true,
        creditsUsed: true,
        discountRate: true,
        subscriptionPlan: true,
        nextBillingDate: true
      }
    })

    if (!shipperProfile) {
      return NextResponse.json(
        { error: 'Shipper profile not found' },
        { status: 404 }
      )
    }

    // Get recent transactions
    const recentTransactions = await prisma.creditTransaction.findMany({
      where: { shipperId: shipperProfile.userId },
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    // Calculate expiring credits (90 days)
    const ninetyDaysFromNow = new Date()
    ninetyDaysFromNow.setDate(ninetyDaysFromNow.getDate() + 90)

    const expiringCredits = await prisma.creditTransaction.aggregate({
      where: {
        shipperId: shipperProfile.userId,
        type: 'ALLOCATION',
        expiresAt: {
          lte: ninetyDaysFromNow,
          gte: new Date()
        }
      },
      _sum: {
        amount: true
      }
    })

    return NextResponse.json({
      balance: shipperProfile.creditsBalance,
      allocated: shipperProfile.creditsAllocated,
      used: shipperProfile.creditsUsed,
      discountRate: shipperProfile.discountRate,
      discountPercentage: Math.round(shipperProfile.discountRate * 100),
      plan: shipperProfile.subscriptionPlan,
      nextBillingDate: shipperProfile.nextBillingDate,
      expiringCredits: expiringCredits._sum.amount || 0,
      recentTransactions: recentTransactions.map(t => ({
        id: t.id,
        type: t.type,
        amount: t.amount,
        balance: t.balance,
        description: t.description,
        date: t.createdAt,
        expiresAt: t.expiresAt
      }))
    })

  } catch (error) {
    console.error('Credit balance fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch credit balance' },
      { status: 500 }
    )
  }
}