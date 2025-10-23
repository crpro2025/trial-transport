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

    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Get shipment statistics
    const totalShipments = await prisma.shipment.count()
    const recentShipments = await prisma.shipment.count({
      where: {
        createdAt: {
          gte: startDate
        }
      }
    })

    const shipmentsByStatus = await prisma.shipment.groupBy({
      by: ['status'],
      _count: true
    })

    // Get revenue statistics
    const revenueData = await prisma.shipment.aggregate({
      _sum: {
        totalPrice: true
      },
      where: {
        status: 'DELIVERED',
        createdAt: {
          gte: startDate
        }
      }
    })

    const totalRevenue = await prisma.shipment.aggregate({
      _sum: {
        totalPrice: true
      },
      where: {
        status: 'DELIVERED'
      }
    })

    // Get user statistics
    const totalUsers = await prisma.user.count()
    const usersByRole = await prisma.user.groupBy({
      by: ['role'],
      _count: true
    })

    // Get active drivers
    const activeDrivers = await prisma.driverProfile.count({
      where: {
        isAvailable: true
      }
    })

    // Get top performing drivers
    const topDrivers = await prisma.driverProfile.findMany({
      take: 10,
      orderBy: {
        totalEarnings: 'desc'
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    // Get daily shipment counts for chart
    const dailyShipments = await prisma.$queryRaw<Array<{ date: Date; count: number }>>`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as count
      FROM "Shipment"
      WHERE created_at >= ${startDate}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `

    // Get daily revenue for chart
    const dailyRevenue = await prisma.$queryRaw<Array<{ date: Date; revenue: number }>>`
      SELECT 
        DATE(created_at) as date,
        SUM(total_price) as revenue
      FROM "Shipment"
      WHERE created_at >= ${startDate}
        AND status = 'DELIVERED'
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `

    // Calculate growth rates
    const previousPeriodStart = new Date(startDate)
    previousPeriodStart.setDate(previousPeriodStart.getDate() - days)

    const previousShipments = await prisma.shipment.count({
      where: {
        createdAt: {
          gte: previousPeriodStart,
          lt: startDate
        }
      }
    })

    const previousRevenue = await prisma.shipment.aggregate({
      _sum: {
        totalPrice: true
      },
      where: {
        status: 'DELIVERED',
        createdAt: {
          gte: previousPeriodStart,
          lt: startDate
        }
      }
    })

    const shipmentGrowth = previousShipments > 0 
      ? ((recentShipments - previousShipments) / previousShipments) * 100 
      : 0

    const revenueGrowth = previousRevenue._sum.totalPrice 
      ? ((revenueData._sum.totalPrice || 0) - previousRevenue._sum.totalPrice) / previousRevenue._sum.totalPrice * 100
      : 0

    // Get average delivery time
    const avgDeliveryTime = await prisma.$queryRaw<Array<{ avg_hours: number | null }>>`
      SELECT 
        AVG(EXTRACT(EPOCH FROM (actual_delivery_time - actual_pickup_time)) / 3600) as avg_hours
      FROM "Shipment"
      WHERE actual_delivery_time IS NOT NULL
        AND actual_pickup_time IS NOT NULL
        AND created_at >= ${startDate}
    `

    // Get temperature compliance rate
    const tempCompliance = await prisma.$queryRaw<Array<{ compliance_rate: number | null }>>`
      SELECT 
        COUNT(CASE WHEN current_temp BETWEEN 2 AND 8 THEN 1 END) * 100.0 / COUNT(*) as compliance_rate
      FROM "Shipment"
      WHERE current_temp IS NOT NULL
        AND created_at >= ${startDate}
    `

    return NextResponse.json({
      overview: {
        totalShipments,
        recentShipments,
        totalRevenue: totalRevenue._sum.totalPrice || 0,
        recentRevenue: revenueData._sum.totalPrice || 0,
        totalUsers,
        activeDrivers,
        shipmentGrowth: Math.round(shipmentGrowth * 10) / 10,
        revenueGrowth: Math.round(revenueGrowth * 10) / 10,
        avgDeliveryTime: avgDeliveryTime[0]?.avg_hours || 0,
        tempComplianceRate: tempCompliance[0]?.compliance_rate || 0
      },
      shipmentsByStatus: shipmentsByStatus.map(s => ({
        status: s.status,
        count: s._count
      })),
      usersByRole: usersByRole.map(u => ({
        role: u.role,
        count: u._count
      })),
      topDrivers: topDrivers.map(d => ({
        id: d.id,
        name: d.user.name,
        email: d.user.email,
        totalEarnings: d.totalEarnings,
        totalDeliveries: d.totalDeliveries,
        onTimeRate: d.onTimeRate,
        rating: d.rating
      })),
      charts: {
        dailyShipments,
        dailyRevenue
      },
      period: {
        days,
        startDate,
        endDate: new Date()
      }
    })

  } catch (error) {
    console.error('Analytics fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}