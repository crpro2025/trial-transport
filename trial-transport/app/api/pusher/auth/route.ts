import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { pusherServer } from '@/lib/pusher'

export async function POST(request: NextRequest) {
  try {
    if (!pusherServer) {
      return NextResponse.json(
        { error: 'Pusher not configured' },
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

    const body = await request.text()
    const params = new URLSearchParams(body)
    const socketId = params.get('socket_id')!
    const channelName = params.get('channel_name')!

    // Verify user has access to this channel
    const channelPrefix = channelName.split('-')[0]
    
    if (channelPrefix === 'user' && !channelName.includes(session.user.id)) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    const authResponse = pusherServer.authorizeChannel(socketId, channelName)

    return NextResponse.json(authResponse)

  } catch (error) {
    console.error('Pusher auth error:', error)
    return NextResponse.json(
      { error: 'Failed to authorize' },
      { status: 500 }
    )
  }
}