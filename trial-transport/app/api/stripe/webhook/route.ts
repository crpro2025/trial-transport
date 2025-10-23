import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import prisma from '@/lib/prisma'

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia' as any
    })
  : null

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      if (!prisma) {
        return NextResponse.json(
          { error: "Database not configured" },
          { status: 500 }
        )
      }

      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handlePaymentSuccess(paymentIntent)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        await handlePaymentFailure(failedPayment)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdate(subscription)
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCancellation(deletedSubscription)
        break

      case 'invoice.paid':
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaid(invoice)
        break

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object as Stripe.Invoice
        await handleInvoicePaymentFailed(failedInvoice)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  if (!prisma) return
  const userId = paymentIntent.metadata.userId
  const shipmentId = paymentIntent.metadata.shipmentId

  if (shipmentId) {
    // Update shipment payment status
    await prisma.shipment.update({
      where: { id: shipmentId },
      data: {
        // Add payment status field if needed
      }
    })
  }

  // Create notification
  if (userId) {
    await prisma.notification.create({
      data: {
        userId,
        type: 'PAYMENT_RECEIVED',
        title: 'Payment Successful',
        message: `Payment of $${(paymentIntent.amount / 100).toFixed(2)} was successful`,
        link: '/billing'
      }
    })
  }
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  if (!prisma) return
  const userId = paymentIntent.metadata.userId

  if (userId) {
    await prisma.notification.create({
      data: {
        userId,
        type: 'SYSTEM_ALERT',
        title: 'Payment Failed',
        message: 'Your payment could not be processed. Please update your payment method.',
        link: '/billing/payment-methods'
      }
    })
  }
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  if (!prisma) return
  const userId = subscription.metadata.userId

  if (userId) {
    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { userId }
    })

    if (shipperProfile) {
      // Map Stripe price ID to subscription plan
      const planMap: Record<string, any> = {
        // Add your actual Stripe price IDs here
        'price_starter': 'STARTER',
        'price_professional': 'PROFESSIONAL',
        'price_enterprise': 'ENTERPRISE'
      }

      const priceId = subscription.items.data[0]?.price.id
      const plan = planMap[priceId] || 'STARTER'

      await prisma.shipperProfile.update({
        where: { id: shipperProfile.id },
        data: {
          subscriptionPlan: plan,
          subscriptionStatus: subscription.status === 'active' ? 'ACTIVE' : 'PAST_DUE',
          nextBillingDate: new Date((subscription as any).current_period_end * 1000)
        }
      })
    }
  }
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  if (!prisma) return
  const userId = subscription.metadata.userId

  if (userId) {
    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { userId }
    })

    if (shipperProfile) {
      await prisma.shipperProfile.update({
        where: { id: shipperProfile.id },
        data: {
          subscriptionStatus: 'CANCELLED'
        }
      })

      await prisma.notification.create({
        data: {
          userId,
          type: 'SYSTEM_ALERT',
          title: 'Subscription Cancelled',
          message: 'Your subscription has been cancelled. You can reactivate it anytime.',
          link: '/billing'
        }
      })
    }
  }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  if (!prisma) return
  const userId = invoice.metadata?.userId

  if (userId) {
    const shipperProfile = await prisma.shipperProfile.findUnique({
      where: { userId }
    })

    if (shipperProfile) {
      // Create invoice record
      await prisma.invoice.create({
        data: {
          shipperId: shipperProfile.id,
          invoiceNumber: invoice.number || `INV-${Date.now()}`,
          amount: invoice.amount_paid / 100,
          status: 'PAID',
          dueDate: new Date(invoice.due_date! * 1000),
          paidAt: new Date(),
          stripeInvoiceId: invoice.id,
          pdfUrl: invoice.invoice_pdf || undefined
        }
      })
    }
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  if (!prisma) return
  const userId = invoice.metadata?.userId

  if (userId) {
    await prisma.notification.create({
      data: {
        userId,
        type: 'SYSTEM_ALERT',
        title: 'Invoice Payment Failed',
        message: `Payment for invoice ${invoice.number} failed. Please update your payment method.`,
        link: '/billing'
      }
    })
  }
}