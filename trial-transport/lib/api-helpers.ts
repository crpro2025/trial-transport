import { NextResponse } from 'next/server'
import prisma from './prisma'

/**
 * Check if database is configured
 * Returns error response if not configured
 */
export function checkDatabase() {
  if (!prisma) {
    return NextResponse.json(
      { error: 'Database not configured. Please set DATABASE_URL environment variable.' },
      { status: 500 }
    )
  }
  return null
}

/**
 * Check if user is authenticated
 */
export function checkAuth(session: any) {
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
  return null
}

/**
 * Check if user has required role
 */
export function checkRole(session: any, requiredRole: string) {
  if (session?.user?.role !== requiredRole) {
    return NextResponse.json(
      { error: 'Forbidden - Insufficient permissions' },
      { status: 403 }
    )
  }
  return null
}