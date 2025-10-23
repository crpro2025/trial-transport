import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const shipmentSchema = z.object({
  specimenType: z.string(),
  quantity: z.number().positive(),
  temperatureReq: z.string(),
  priority: z.enum(['STANDARD', 'URGENT', 'CRITICAL']),
  pickupName: z.string(),
  pickupPhone: z.string(),
  pickupEmail: z.string().email().optional(),
  pickupAddress: z.string(),
  pickupCity: z.string(),
  pickupState: z.string(),
  pickupZip: z.string(),
  pickupDate: z.string(),
  pickupTimeStart: z.string(),
  pickupTimeEnd: z.string(),
  pickupInstructions: z.string().optional(),
  deliveryName: z.string(),
  deliveryPhone: z.string(),
  deliveryEmail: z.string().email().optional(),
  deliveryAddress: z.string(),
  deliveryCity: z.string(),
  deliveryState: z.string(),
  deliveryZip: z.string(),
  deliveryDate: z.string(),
  deliveryTimeStart: z.string(),
  deliveryTimeEnd: z.string(),
  deliveryInstructions: z.string().optional(),
  specialInstructions: z.string().optional(),
})

// Generate tracking number
function generateTrackingNumber(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `TT-${year}-${random}`
}

// Calculate pricing based on distance and priority
function calculatePricing(priority: string, distance: number = 50) {
  let basePrice = 45
  
  if (priority === 'URGENT') {
    basePrice = 65
  } else if (priority === 'CRITICAL') {
    basePrice = 95
  }
  
  const distanceFee = Math.floor(distance * 0.8)
  const priorityFee = priority === 'URGENT' ? 25 : priority === 'CRITICAL' ? 50 : 0
  const totalPrice = basePrice + distanceFee + priorityFee
  const driverEarnings = totalPrice * 0.7 // 70% to driver
  
  return {
    basePrice,
    distanceFee,
    priorityFee,
    totalPrice,
    driverEarnings
  }
}

export async function GET(request: NextRequest) {
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

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let whereClause: any = {}

    // Filter based on user role
    if (session.user.role === 'SHIPPER') {
      const shipperProfile = await prisma.shipperProfile.findUnique({
        where: { userId: session.user.id }
      })
      whereClause.shipperId = shipperProfile?.id
    } else if (session.user.role === 'DRIVER') {
      const driverProfile = await prisma.driverProfile.findUnique({
        where: { userId: session.user.id }
      })
      whereClause.driverId = driverProfile?.id
    }

    // Add status filter if provided
    if (status) {
      whereClause.status = status
    }

    const shipments = await prisma.shipment.findMany({
      where: whereClause,
      include: {
        shipper: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
                phone: true
              }
            }
          }
        },
        driver: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
                phone: true,
                image: true
              }
            }
          }
        },
        timeline: {
          orderBy: {
            timestamp: 'desc'
          },
          take: 5
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit,
      skip: offset
    })

    const total = await prisma.shipment.count({ where: whereClause })

    return NextResponse.json({
      shipments,
      total,
      limit,
      offset
    })

  } catch (error) {
    console.error('Shipments fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch shipments' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
    if (!prisma) {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

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
    const validatedData = shipmentSchema.parse(body)

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

    // Calculate pricing with discount (hybrid model)
    const { calculateDeliveryPrice, DELIVERY_PRICING } = await import('@/lib/stripe-config')
    
    // Determine delivery type based on temperature requirement
    let deliveryType: keyof typeof DELIVERY_PRICING = 'STANDARD'
    if (validatedData.temperatureReq.includes('2-8')) {
      deliveryType = 'REFRIGERATED'
    } else if (validatedData.temperatureReq.includes('-20')) {
      deliveryType = 'FROZEN'
    } else if (validatedData.temperatureReq.includes('-80')) {
      deliveryType = 'CRYOGENIC'
    }
    
    // Override with priority if critical
    if (validatedData.priority === 'CRITICAL' || validatedData.priority === 'URGENT') {
      deliveryType = 'CRITICAL'
    }

    // Calculate pricing with shipper's discount rate
    const pricingCalc = calculateDeliveryPrice(deliveryType, shipperProfile.discountRate)
    
    // Check if shipper has credits to use
    let creditsUsed = 0
    let finalPrice = pricingCalc.finalPrice
    
    if (shipperProfile.creditsBalance > 0) {
      // Use credits up to the final price
      creditsUsed = Math.min(shipperProfile.creditsBalance, finalPrice)
      finalPrice = finalPrice - creditsUsed
    }
    
    const pricing = {
      basePrice: pricingCalc.basePrice,
      distanceFee: pricingCalc.additionalFees,
      priorityFee: 0,
      totalPrice: pricingCalc.finalPrice,
      driverEarnings: pricingCalc.driverEarnings
    }

    // Generate tracking number
    const trackingNumber = generateTrackingNumber()

    // Create shipment
    const shipment = await prisma.shipment.create({
      data: {
        ...validatedData,
        trackingNumber,
        shipperId: shipperProfile.id,
        pickupDate: new Date(validatedData.pickupDate),
        deliveryDate: new Date(validatedData.deliveryDate),
        ...pricing,
        status: 'PENDING'
      }
    })

    // Create initial timeline event
    await prisma.shipmentTimeline.create({
      data: {
        shipmentId: shipment.id,
        status: 'PENDING',
        description: 'Shipment created and awaiting driver assignment'
      }
    })

    // Use credits if available
    if (creditsUsed > 0) {
      await prisma.creditTransaction.create({
        data: {
          shipperId: shipperProfile.id,
          type: 'USAGE',
          amount: -creditsUsed,
          balance: shipperProfile.creditsBalance - creditsUsed,
          description: `Credits used for shipment ${trackingNumber}`,
          shipmentId: shipment.id
        }
      })

      await prisma.shipperProfile.update({
        where: { id: shipperProfile.id },
        data: {
          creditsBalance: {
            decrement: creditsUsed
          },
          creditsUsed: {
            increment: creditsUsed
          },
          shipmentsUsed: {
            increment: 1
          }
        }
      })
    } else {
      // Just increment shipment count
      await prisma.shipperProfile.update({
        where: { id: shipperProfile.id },
        data: {
          shipmentsUsed: {
            increment: 1
          }
        }
      })
    }

    // Create notification for admins
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' }
    })

    for (const admin of admins) {
      await prisma.notification.create({
        data: {
          userId: admin.id,
          type: 'SHIPMENT_CREATED',
          title: 'New Shipment Created',
          message: `New shipment ${trackingNumber} requires driver assignment`,
          link: `/admin/shipments`
        }
      })
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'SHIPMENT_CREATED',
        entity: 'Shipment',
        entityId: shipment.id,
        metadata: { trackingNumber }
      }
    })

    return NextResponse.json({
      message: 'Shipment created successfully',
      shipment
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Shipment creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create shipment' },
      { status: 500 }
    )
  }
}