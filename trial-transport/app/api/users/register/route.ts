import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(['SHIPPER', 'DRIVER']),
  phone: z.string().optional(),
  // Shipper specific
  companyName: z.string().optional(),
  companyType: z.string().optional(),
  // Driver specific
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
})

export async function POST(request: NextRequest) {
    if (!prisma) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      )
    }

  try {
    const body = await request.json()
    const validatedData = registerSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10)

    // Create user with profile based on role
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        name: validatedData.name,
        role: validatedData.role,
        phone: validatedData.phone,
        ...(validatedData.role === 'SHIPPER' && {
          shipperProfile: {
            create: {
              companyName: validatedData.companyName || 'My Company',
              companyType: validatedData.companyType,
              subscriptionPlan: 'STARTER',
              subscriptionStatus: 'ACTIVE',
              shipmentsIncluded: 50,
              nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            }
          }
        }),
        ...(validatedData.role === 'DRIVER' && {
          driverProfile: {
            create: {
              vehicleMake: validatedData.vehicleMake,
              vehicleModel: validatedData.vehicleModel,
              isAvailable: false,
              serviceRadius: 25,
              hasRefrigerator: false,
              hasFreezer: false,
              hasCryogenic: false,
              hasTempMonitors: 0,
              hasInsulatedBags: 0,
              hasCoolers: 0
            }
          }
        })
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true
      }
    })

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: 'USER_REGISTERED',
        entity: 'User',
        entityId: user.id,
        metadata: { role: user.role }
      }
    })

    return NextResponse.json({
      message: 'User registered successfully',
      user
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    )
  }
}