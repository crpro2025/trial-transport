import Pusher from 'pusher'
import PusherClient from 'pusher-js'

// Server-side Pusher instance (only if configured)
export const pusherServer = process.env.PUSHER_APP_ID && process.env.PUSHER_KEY && process.env.PUSHER_SECRET && process.env.PUSHER_CLUSTER
  ? new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.PUSHER_CLUSTER,
      useTLS: true
    })
  : null

// Client-side Pusher instance (only if configured)
export const pusherClient = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_PUSHER_KEY && process.env.NEXT_PUBLIC_PUSHER_CLUSTER
  ? new PusherClient(
      process.env.NEXT_PUBLIC_PUSHER_KEY,
      {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
        authEndpoint: '/api/pusher/auth'
      }
    )
  : null

// Pusher event types
export const PUSHER_EVENTS = {
  SHIPMENT_UPDATED: 'shipment-updated',
  LOCATION_UPDATED: 'location-updated',
  MESSAGE_RECEIVED: 'message-received',
  NOTIFICATION_RECEIVED: 'notification-received',
  DRIVER_STATUS_CHANGED: 'driver-status-changed'
}

// Helper functions
export async function triggerShipmentUpdate(shipmentId: string, data: any) {
  if (!pusherServer) return
  await pusherServer.trigger(`shipment-${shipmentId}`, PUSHER_EVENTS.SHIPMENT_UPDATED, data)
}

export async function triggerLocationUpdate(shipmentId: string, data: any) {
  if (!pusherServer) return
  await pusherServer.trigger(`shipment-${shipmentId}`, PUSHER_EVENTS.LOCATION_UPDATED, data)
}

export async function triggerMessageReceived(userId: string, data: any) {
  if (!pusherServer) return
  await pusherServer.trigger(`user-${userId}`, PUSHER_EVENTS.MESSAGE_RECEIVED, data)
}

export async function triggerNotification(userId: string, data: any) {
  if (!pusherServer) return
  await pusherServer.trigger(`user-${userId}`, PUSHER_EVENTS.NOTIFICATION_RECEIVED, data)
}