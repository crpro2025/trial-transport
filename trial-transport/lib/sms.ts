import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhone = process.env.TWILIO_PHONE_NUMBER

const client = accountSid && authToken ? twilio(accountSid, authToken) : null

interface SMSOptions {
  to: string
  message: string
}

export async function sendSMS({ to, message }: SMSOptions) {
  if (!client || !twilioPhone) {
    console.warn('Twilio not configured, skipping SMS')
    return { success: false, error: 'Twilio not configured' }
  }

  try {
    const result = await client.messages.create({
      body: message,
      from: twilioPhone,
      to
    })

    console.log('SMS sent:', result.sid)
    return { success: true, sid: result.sid }
  } catch (error) {
    console.error('SMS send error:', error)
    return { success: false, error }
  }
}

// SMS templates
export const smsTemplates = {
  shipmentCreated: (trackingNumber: string) =>
    `Trial Transport: Your shipment ${trackingNumber} has been created. Track it at ${process.env.NEXT_PUBLIC_APP_URL}/track/${trackingNumber}`,

  shipmentAssigned: (trackingNumber: string, driverName: string) =>
    `Trial Transport: Driver ${driverName} has been assigned to shipment ${trackingNumber}. They will contact you shortly.`,

  shipmentPickedUp: (trackingNumber: string) =>
    `Trial Transport: Your shipment ${trackingNumber} has been picked up and is en route.`,

  shipmentDelivered: (trackingNumber: string) =>
    `Trial Transport: Your shipment ${trackingNumber} has been delivered successfully!`,

  driverNewDelivery: (trackingNumber: string) =>
    `Trial Transport: New delivery available! Shipment ${trackingNumber}. Check your app for details.`,

  temperatureAlert: (trackingNumber: string, temp: number) =>
    `ALERT: Shipment ${trackingNumber} temperature is ${temp}°C. Immediate action required!`,

  paymentReceived: (amount: number) =>
    `Trial Transport: Payment of $${amount.toFixed(2)} received. Thank you!`,

  payoutProcessed: (amount: number) =>
    `Trial Transport: Payout of $${amount.toFixed(2)} has been processed to your account.`
}