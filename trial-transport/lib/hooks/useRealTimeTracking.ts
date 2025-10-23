'use client'

import { useEffect, useState } from 'react'
import { pusherClient, PUSHER_EVENTS } from '@/lib/pusher'

interface TrackingData {
  latitude: number
  longitude: number
  temperature?: number
  timestamp: string
}

export function useRealTimeTracking(shipmentId: string) {
  const [location, setLocation] = useState<TrackingData | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!shipmentId) return

    if (!pusherClient) return
    const channel = pusherClient.subscribe(`shipment-${shipmentId}`)

    channel.bind('pusher:subscription_succeeded', () => {
      setIsConnected(true)
    })

    channel.bind(PUSHER_EVENTS.LOCATION_UPDATED, (data: TrackingData) => {
      setLocation(data)
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [shipmentId])

  return { location, isConnected }
}