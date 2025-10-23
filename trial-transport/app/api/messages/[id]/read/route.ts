import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Mark message as read
    const message = await prisma.message.update({
      where: {
        id: params.id,
        receiverId: session.user.id // Only receiver can mark as read
      },
      data: {
        read: true,
        readAt: new Date()
      }
    })

    return NextResponse.json({
      message: 'Message marked as read',
      data: message
    })

  } catch (error) {
    console.error('Message read error:', error)
    return NextResponse.json(
      { error: 'Failed to mark message as read' },
      { status: 500 }
    )
  }
}