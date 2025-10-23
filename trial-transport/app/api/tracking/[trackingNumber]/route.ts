import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: { trackingNumber: params.trackingNumber },
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
    console.error('Tracking fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tracking information' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const body = await request.json()
    const { latitude, longitude, temperature, humidity } = body

    const shipment = await prisma.shipment.findUnique({
      where: { trackingNumber: params.trackingNumber }
    })

    if (!shipment) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      )
    }

    // Update current location and temperature
    await prisma.shipment.update({
      where: { id: shipment.id },
      data: {
        currentLatitude: latitude,
        currentLongitude: longitude,
        currentTemp: temperature
      }
    })

    // Add temperature reading
    if (temperature !== undefined) {
      await prisma.temperatureReading.create({
        data: {
          shipmentId: shipment.id,
          temperature,
          humidity,
          latitude,
          longitude
        }
      })
    }

    // TODO: Broadcast update via WebSocket/Pusher

    return NextResponse.json({
      message: 'Location updated successfully'
    })

  } catch (error) {
    console.error('Tracking update error:', error)
    return NextResponse.json(
      { error: 'Failed to update tracking information' },
      { status: 500 }
    )
  }
}