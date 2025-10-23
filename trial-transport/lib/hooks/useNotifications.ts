'use client'

import { useEffect, useState } from 'react'
import { pusherClient, PUSHER_EVENTS } from '@/lib/pusher'

interface Notification {
  id: string
  type: string
  title: string
  message: string
  link?: string
  read: boolean
  createdAt: string
}

export function useNotifications(userId: string) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (!userId) return

    // Fetch initial notifications
    fetch('/api/notifications')
      .then(res => res.json())
      .then(data => {
        setNotifications(data.notifications)
        setUnreadCount(data.unreadCount)
      })

    // Subscribe to real-time updates
    if (!pusherClient) return
      const channel = pusherClient.subscribe(`user-${userId}`)

    channel.bind(PUSHER_EVENTS.NOTIFICATION_RECEIVED, (notification: Notification) => {
      setNotifications(prev => [notification, ...prev])
      setUnreadCount(prev => prev + 1)
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [userId])

  const markAsRead = async (notificationIds: string[]) => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notificationIds })
    })

    setNotifications(prev =>
      prev.map(n =>
        notificationIds.includes(n.id) ? { ...n, read: true } : n
      )
    )
    setUnreadCount(prev => Math.max(0, prev - notificationIds.length))
  }

  const markAllAsRead = async () => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markAllAsRead: true })
    })

    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    setUnreadCount(0)
  }

  return { notifications, unreadCount, markAsRead, markAllAsRead }
}