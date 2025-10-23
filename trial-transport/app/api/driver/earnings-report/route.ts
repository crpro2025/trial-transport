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

    if (!session?.user?.id || session.user.role !== 'DRIVER') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || 'month' // week, month, year
    const format = searchParams.get('format') || 'json' // json, csv

    // Get driver profile
    const driverProfile = await prisma.driverProfile.findUnique({
      where: { userId: session.user.id },
      include: { user: true }
    })

    if (!driverProfile) {
      return NextResponse.json(
        { error: 'Driver profile not found' },
        { status: 404 }
      )
    }

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()
    
    switch (period) {
      case 'week':
        startDate.setDate(startDate.getDate() - 7)
        break
      case 'month':
        startDate.setMonth(startDate.getMonth() - 1)
        break
      case 'year':
        startDate.setFullYear(startDate.getFullYear() - 1)
        break
    }

    // Get earnings data
    const earnings = await prisma.earning.findMany({
      where: {
        driverId: driverProfile.id,
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Get shipments data
    const shipments = await prisma.shipment.findMany({
      where: {
        driverId: driverProfile.id,
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      include: {
        shipper: {
          include: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Calculate summary statistics
    const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0)
    const deliveryEarnings = earnings.filter(e => e.type === 'DELIVERY').reduce((sum, e) => sum + e.amount, 0)
    const bonusEarnings = earnings.filter(e => e.type === 'BONUS').reduce((sum, e) => sum + e.amount, 0)
    const tipEarnings = earnings.filter(e => e.type === 'TIP').reduce((sum, e) => sum + e.amount, 0)

    const completedShipments = shipments.filter(s => s.status === 'DELIVERED').length
    const cancelledShipments = shipments.filter(s => s.status === 'CANCELLED').length
    const totalDistance = shipments.reduce((sum, s) => {
      // Calculate distance (simplified - in production use actual distance calculation)
      return sum + 50 // placeholder
    }, 0)

    // Calculate daily breakdown
    const dailyBreakdown = await prisma.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as deliveries,
        SUM(amount) as earnings
      FROM "Earning"
      WHERE driver_id = ${driverProfile.id}
        AND created_at >= ${startDate}
        AND created_at <= ${endDate}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `

    // Calculate earnings by type
    const earningsByType = await prisma.earning.groupBy({
      by: ['type'],
      where: {
        driverId: driverProfile.id,
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      _sum: {
        amount: true
      },
      _count: true
    })

    const reportData = {
      driver: {
        id: driverProfile.id,
        name: driverProfile.user.name,
        email: driverProfile.user.email,
        phone: driverProfile.user.phone
      },
      period: {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        type: period
      },
      summary: {
        totalEarnings: Math.round(totalEarnings * 100) / 100,
        deliveryEarnings: Math.round(deliveryEarnings * 100) / 100,
        bonusEarnings: Math.round(bonusEarnings * 100) / 100,
        tipEarnings: Math.round(tipEarnings * 100) / 100,
        completedShipments,
        cancelledShipments,
        totalDistance,
        averageEarningsPerDelivery: completedShipments > 0 
          ? Math.round((deliveryEarnings / completedShipments) * 100) / 100 
          : 0,
        onTimeRate: driverProfile.onTimeRate,
        tempComplianceRate: driverProfile.tempComplianceRate,
        rating: driverProfile.rating
      },
      earningsByType: earningsByType.map(e => ({
        type: e.type,
        amount: e._sum.amount || 0,
        count: e._count
      })),
      dailyBreakdown,
      earnings: earnings.map(e => ({
        id: e.id,
        date: e.createdAt,
        type: e.type,
        amount: e.amount,
        status: e.status,
        shipmentId: e.shipmentId
      })),
      shipments: shipments.map(s => ({
        id: s.id,
        trackingNumber: s.trackingNumber,
        date: s.createdAt,
        status: s.status,
        shipper: s.shipper.user.name,
        pickup: `${s.pickupCity}, ${s.pickupState}`,
        delivery: `${s.deliveryCity}, ${s.deliveryState}`,
        earnings: s.driverEarnings,
        priority: s.priority
      }))
    }

    // Return CSV format if requested
    if (format === 'csv') {
      const csv = generateCSV(reportData)
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="earnings-report-${period}-${Date.now()}.csv"`
        }
      })
    }

    return NextResponse.json(reportData)

  } catch (error) {
    console.error('Earnings report error:', error)
    return NextResponse.json(
      { error: 'Failed to generate earnings report' },
      { status: 500 }
    )
  }
}

function generateCSV(data: any): string {
  const lines = []
  
  // Header
  lines.push('Trial Transport - Driver Earnings Report')
  lines.push(`Driver: ${data.driver.name}`)
  lines.push(`Period: ${data.period.start} to ${data.period.end}`)
  lines.push('')
  
  // Summary
  lines.push('SUMMARY')
  lines.push('Metric,Value')
  lines.push(`Total Earnings,$${data.summary.totalEarnings}`)
  lines.push(`Delivery Earnings,$${data.summary.deliveryEarnings}`)
  lines.push(`Bonus Earnings,$${data.summary.bonusEarnings}`)
  lines.push(`Tip Earnings,$${data.summary.tipEarnings}`)
  lines.push(`Completed Shipments,${data.summary.completedShipments}`)
  lines.push(`Cancelled Shipments,${data.summary.cancelledShipments}`)
  lines.push(`Average Per Delivery,$${data.summary.averageEarningsPerDelivery}`)
  lines.push(`On-Time Rate,${data.summary.onTimeRate}%`)
  lines.push(`Temperature Compliance,${data.summary.tempComplianceRate}%`)
  lines.push(`Rating,${data.summary.rating}/5.0`)
  lines.push('')
  
  // Detailed earnings
  lines.push('DETAILED EARNINGS')
  lines.push('Date,Type,Amount,Status,Shipment ID')
  data.earnings.forEach((e: any) => {
    lines.push(`${e.date},${e.type},$${e.amount},${e.status},${e.shipmentId || 'N/A'}`)
  })
  
  return lines.join('\n')
}