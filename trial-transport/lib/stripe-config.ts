import Stripe from 'stripe'

// Initialize Stripe with your account (only if API key is available)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia' as any,
      typescript: true,
    })
  : null

// Stripe Price IDs - Update these with your actual Stripe price IDs
// HYBRID MODEL: Monthly Platform Fee + Credits + Discounts
export const STRIPE_PLANS = {
  BASIC: {
    monthly: process.env.STRIPE_BASIC_MONTHLY_PRICE_ID || 'price_basic_monthly',
    name: 'Basic',
    monthlyPrice: 0,
    includedCredits: 0,
    discountRate: 0, // No discount
    description: 'Pay as you go - Full price per delivery',
  },
  STARTER: {
    monthly: process.env.STRIPE_STARTER_MONTHLY_PRICE_ID || 'price_starter_monthly',
    name: 'Starter',
    monthlyPrice: 199,
    includedCredits: 250,
    discountRate: 0.15, // 15% off all deliveries
    description: '$250 in credits + 15% off all deliveries',
  },
  PROFESSIONAL: {
    monthly: process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID || 'price_professional_monthly',
    name: 'Professional',
    monthlyPrice: 499,
    includedCredits: 750,
    discountRate: 0.20, // 20% off all deliveries
    description: '$750 in credits + 20% off all deliveries',
  },
  ENTERPRISE: {
    monthly: process.env.STRIPE_ENTERPRISE_MONTHLY_PRICE_ID || 'price_enterprise_monthly',
    name: 'Enterprise',
    monthlyPrice: 999,
    includedCredits: 2000,
    discountRate: 0.25, // 25% off all deliveries
    description: '$2,000 in credits + 25% off all deliveries',
  },
}

// Base Delivery Pricing (before discounts)
export const DELIVERY_PRICING = {
  STANDARD: {
    basePrice: 95,
    name: 'Standard Delivery',
    description: 'Room temperature specimens',
    driverPercentage: 0.65, // 65% to driver
  },
  REFRIGERATED: {
    basePrice: 125,
    name: 'Refrigerated (2-8°C)',
    description: 'Temperature-controlled specimens',
    driverPercentage: 0.65,
  },
  FROZEN: {
    basePrice: 165,
    name: 'Frozen (-20°C)',
    description: 'Frozen specimens',
    driverPercentage: 0.65,
  },
  CRYOGENIC: {
    basePrice: 235,
    name: 'Cryogenic (-80°C)',
    description: 'Ultra-low temperature specimens',
    driverPercentage: 0.65,
  },
  CRITICAL: {
    basePrice: 175,
    name: 'Critical/Rush',
    description: 'Time-sensitive delivery',
    driverPercentage: 0.65,
  },
}

// Additional Fees
export const ADDITIONAL_FEES = {
  DISTANCE_PER_MILE: 0.75, // Per mile over 50 miles
  AFTER_HOURS: 25,
  WEEKEND: 35,
  HOLIDAY: 50,
  MULTIPLE_STOPS: 15, // Per additional stop
  SIGNATURE_REQUIRED: 10,
  PHOTO_DOCUMENTATION: 5,
}

// Helper function to get plan details
export function getPlanDetails(plan: keyof typeof STRIPE_PLANS) {
  const planDetails = STRIPE_PLANS[plan]
  return {
    priceId: planDetails.monthly,
    amount: planDetails.monthlyPrice,
    name: planDetails.name,
    includedCredits: planDetails.includedCredits,
    discountRate: planDetails.discountRate,
    description: planDetails.description,
  }
}

// Calculate delivery price with discount
export function calculateDeliveryPrice(
  deliveryType: keyof typeof DELIVERY_PRICING,
  discountRate: number = 0,
  additionalFees: {
    extraMiles?: number
    afterHours?: boolean
    weekend?: boolean
    holiday?: boolean
    extraStops?: number
    signatureRequired?: boolean
    photoDocumentation?: boolean
  } = {}
) {
  const basePrice = DELIVERY_PRICING[deliveryType].basePrice
  const driverPercentage = DELIVERY_PRICING[deliveryType].driverPercentage
  
  // Calculate additional fees
  let additionalCost = 0
  if (additionalFees.extraMiles) {
    additionalCost += additionalFees.extraMiles * ADDITIONAL_FEES.DISTANCE_PER_MILE
  }
  if (additionalFees.afterHours) additionalCost += ADDITIONAL_FEES.AFTER_HOURS
  if (additionalFees.weekend) additionalCost += ADDITIONAL_FEES.WEEKEND
  if (additionalFees.holiday) additionalCost += ADDITIONAL_FEES.HOLIDAY
  if (additionalFees.extraStops) {
    additionalCost += additionalFees.extraStops * ADDITIONAL_FEES.MULTIPLE_STOPS
  }
  if (additionalFees.signatureRequired) additionalCost += ADDITIONAL_FEES.SIGNATURE_REQUIRED
  if (additionalFees.photoDocumentation) additionalCost += ADDITIONAL_FEES.PHOTO_DOCUMENTATION
  
  // Total before discount
  const totalBeforeDiscount = basePrice + additionalCost
  
  // Apply discount to base price only (not additional fees)
  const discountedBasePrice = basePrice * (1 - discountRate)
  const finalPrice = discountedBasePrice + additionalCost
  
  // Driver earnings based on original base price (not discounted)
  const driverEarnings = basePrice * driverPercentage
  
  return {
    basePrice,
    additionalFees: additionalCost,
    totalBeforeDiscount,
    discountAmount: basePrice * discountRate,
    finalPrice: Math.round(finalPrice * 100) / 100,
    driverEarnings: Math.round(driverEarnings * 100) / 100,
    platformRevenue: Math.round((finalPrice - driverEarnings) * 100) / 100,
  }
}

// Create or retrieve Stripe customer
export async function getOrCreateStripeCustomer(userId: string, email: string, name: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  const customers = await stripe.customers.list({
    email,
    limit: 1,
  })

  if (customers.data.length > 0) {
    return customers.data[0]
  }

  return await stripe.customers.create({
    email,
    name,
    metadata: { userId },
  })
}

// Create subscription
export async function createSubscription(
  customerId: string,
  priceId: string,
  metadata?: Record<string, string>
) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
    metadata,
  })
}

// Create payment intent for one-time payment
export async function createPaymentIntent(
  amount: number,
  customerId: string,
  metadata?: Record<string, string>
) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    customer: customerId,
    automatic_payment_methods: { enabled: true },
    metadata,
  })
}

// Cancel subscription
export async function cancelSubscription(subscriptionId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  return await stripe.subscriptions.cancel(subscriptionId)
}

// Update subscription
export async function updateSubscription(subscriptionId: string, priceId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  
  return await stripe.subscriptions.update(subscriptionId, {
    items: [{
      id: subscription.items.data[0].id,
      price: priceId,
    }],
    proration_behavior: 'create_prorations',
  })
}

// Create payout for driver
export async function createPayout(amount: number, destination: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.transfers.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    destination,
  })
}

// Attach payment method to customer
export async function attachPaymentMethod(paymentMethodId: string, customerId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.paymentMethods.attach(paymentMethodId, {
    customer: customerId,
  })
}

// Set default payment method
export async function setDefaultPaymentMethod(customerId: string, paymentMethodId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  })
}

// List payment methods
export async function listPaymentMethods(customerId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.paymentMethods.list({
    customer: customerId,
    type: 'card',
  })
}

// Detach payment method
export async function detachPaymentMethod(paymentMethodId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  return await stripe.paymentMethods.detach(paymentMethodId)
}

// Create invoice
export async function createInvoice(customerId: string, items: Array<{ description: string; amount: number }>) {
  if (!stripe) throw new Error('Stripe not configured')
  
  for (const item of items) {
    await stripe.invoiceItems.create({
      customer: customerId,
      amount: Math.round(item.amount * 100),
      currency: 'usd',
      description: item.description,
    })
  }

  const invoice = await stripe.invoices.create({
    customer: customerId,
    auto_advance: true,
  })

  return await stripe.invoices.finalizeInvoice(invoice.id)
}

// Retrieve invoice
export async function retrieveInvoice(invoiceId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  return await stripe.invoices.retrieve(invoiceId)
}

// Create Stripe Connect account for driver
export async function createConnectAccount(email: string, metadata?: Record<string, string>) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.accounts.create({
    type: 'express',
    email,
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    metadata,
  })
}

// Create account link for onboarding
export async function createAccountLink(accountId: string, refreshUrl: string, returnUrl: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.accountLinks.create({
    account: accountId,
    refresh_url: refreshUrl,
    return_url: returnUrl,
    type: 'account_onboarding',
  })
}

// Get account balance
export async function getAccountBalance(accountId: string) {
  if (!stripe) throw new Error('Stripe not configured')
  
  return await stripe.balance.retrieve({
    stripeAccount: accountId,
  })
}