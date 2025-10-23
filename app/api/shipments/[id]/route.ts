import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const shipment = await prisma.shipment.findUnique({
      where: { id: params.id },
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
          }
        },
        temperatureReadings: {
          orderBy: {
            timestamp: 'desc'
          },
          take: 50
        }
      }
    })

    if (!shipment) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(shipment)

  } catch (error) {
    console.error('Shipment fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch shipment' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const { status, driverId, ...updateData } = body

    // Get current shipment
    const currentShipment = await prisma.shipment.findUnique({
      where: { id: params.id }
    })

    if (!currentShipment) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    // Update shipment
    const shipment = await prisma.shipment.update({
      where: { id: params.id },
      data: {
        ...updateData,
        ...(status && { status }),
        ...(driverId && { driverId })
      }
    })

    // Create timeline event if status changed
    if (status && status !== currentShipment.status) {
      const statusDescriptions: Record<string, string> = {
        PENDING: 'Shipment created and awaiting driver assignment',
        ASSIGNED: 'Driver assigned to shipment',
        ACCEPTED: 'Driver accepted the shipment',
        PICKED_UP: 'Specimens picked up from origin',
        IN_TRANSIT: 'En route to destination',
        DELIVERED: 'Successfully delivered to destination',
        CANCELLED: 'Shipment cancelled',
        FAILED: 'Delivery failed'
      }

      await prisma.shipmentTimeline.create({
        data: {
          shipmentId: params.id,
          status,
          description: statusDescriptions[status] || `Status changed to ${status}`
        }
      })

      // Create notifications based on status
      if (status === 'ASSIGNED' && driverId) {
        const driver = await prisma.driverProfile.findUnique({
          where: { id: driverId },
          include: { user: true }
        })

        if (driver) {
          await prisma.notification.create({
            data: {
              userId: driver.userId,
              type: 'SHIPMENT_ASSIGNED',
              title: 'New Delivery Assigned',
              message: `You have been assigned shipment ${currentShipment.trackingNumber}`,
              link: `/driver/available`
            }
          })
        }
      }

      if (status === 'PICKED_UP' || status === 'DELIVERED') {
        const shipper = await prisma.shipperProfile.findUnique({
          where: { id: currentShipment.shipperId },
          include: { user: true }
        })

        if (shipper) {
          await prisma.notification.create({
            data: {
              userId: shipper.userId,
              type: status === 'PICKED_UP' ? 'SHIPMENT_PICKED_UP' : 'SHIPMENT_DELIVERED',
              title: status === 'PICKED_UP' ? 'Shipment Picked Up' : 'Shipment Delivered',
              message: `Shipment ${currentShipment.trackingNumber} has been ${status === 'PICKED_UP' ? 'picked up' : 'delivered'}`,
              link: `/shipper/shipments/${params.id}`
            }
          })
        }
      }
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'SHIPMENT_UPDATED',
        entity: 'Shipment',
        entityId: params.id,
        metadata: { changes: body }
      }
    })

    return NextResponse.json({
      message: 'Shipment updated successfully',
      shipment
    })

  } catch (error) {
    console.error('Shipment update error:', error)
    return NextResponse.json(
      { error: 'Failed to update shipment' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    await prisma.shipment.delete({
      where: { id: params.id }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'SHIPMENT_DELETED',
        entity: 'Shipment',
        entityId: params.id
      }
    })

    return NextResponse.json({
      message: 'Shipment deleted successfully'
    })

  } catch (error) {
    console.error('Shipment deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete shipment' },
      { status: 500 }
    )
  }
}