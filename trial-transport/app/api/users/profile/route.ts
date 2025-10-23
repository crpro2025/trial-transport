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

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        shipperProfile: true,
        driverProfile: true,
        adminProfile: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)

  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
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
    const { name, phone, image, ...profileData } = body

    // Update user basic info
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(image && { image })
      }
    })

    // Update role-specific profile
    if (session.user.role === 'SHIPPER' && profileData) {
      await prisma.shipperProfile.update({
        where: { userId: session.user.id },
        data: profileData
      })
    } else if (session.user.role === 'DRIVER' && profileData) {
      await prisma.driverProfile.update({
        where: { userId: session.user.id },
        data: profileData
      })
    } else if (session.user.role === 'ADMIN' && profileData) {
      await prisma.adminProfile.update({
        where: { userId: session.user.id },
        data: profileData
      })
    }

    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: session.user.id,
        action: 'PROFILE_UPDATED',
        entity: 'User',
        entityId: session.user.id
      }
    })

    return NextResponse.json({
      message: 'Profile updated successfully',
      user
    })

  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}