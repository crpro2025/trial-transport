import nodemailer from 'nodemailer'

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
})

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Trial Transport" <${process.env.SMTP_FROM || 'noreply@trialtransport.com'}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, '') // Strip HTML for text version
    })

    console.log('Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

// Email templates
export const emailTemplates = {
  shipmentCreated: (data: {
    trackingNumber: string
    pickupDate: string
    deliveryDate: string
    recipientName: string
  }) => ({
    subject: `Shipment Created - ${data.trackingNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚚 Shipment Created</h1>
          </div>
          <div class="content">
            <p>Hello ${data.recipientName},</p>
            <p>Your shipment has been successfully created and is awaiting driver assignment.</p>
            
            <div class="info-box">
              <h3>Shipment Details</h3>
              <p><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
              <p><strong>Pickup Date:</strong> ${data.pickupDate}</p>
              <p><strong>Delivery Date:</strong> ${data.deliveryDate}</p>
            </div>
            
            <p>You can track your shipment in real-time using the link below:</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/track/${data.trackingNumber}" class="button">Track Shipment</a>
            
            <p>We'll notify you when a driver is assigned and when your shipment is picked up.</p>
          </div>
          <div class="footer">
            <p>© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
            <p>Trial Transport℠ - AI-Powered Clinical Trial Logistics</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  shipmentAssigned: (data: {
    trackingNumber: string
    driverName: string
    driverPhone: string
    recipientName: string
  }) => ({
    subject: `Driver Assigned - ${data.trackingNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Driver Assigned</h1>
          </div>
          <div class="content">
            <p>Hello ${data.recipientName},</p>
            <p>Great news! A driver has been assigned to your shipment.</p>
            
            <div class="info-box">
              <h3>Driver Information</h3>
              <p><strong>Driver:</strong> ${data.driverName}</p>
              <p><strong>Phone:</strong> ${data.driverPhone}</p>
              <p><strong>Tracking:</strong> ${data.trackingNumber}</p>
            </div>
            
            <p>Your driver will contact you shortly to confirm pickup details.</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/track/${data.trackingNumber}" class="button">Track Shipment</a>
          </div>
          <div class="footer">
            <p>© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  shipmentDelivered: (data: {
    trackingNumber: string
    deliveryTime: string
    recipientName: string
  }) => ({
    subject: `Shipment Delivered - ${data.trackingNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .success-icon { font-size: 64px; text-align: center; margin: 20px 0; }
          .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Delivery Complete</h1>
          </div>
          <div class="content">
            <div class="success-icon">✓</div>
            <p>Hello ${data.recipientName},</p>
            <p>Your shipment has been successfully delivered!</p>
            
            <div class="info-box">
              <h3>Delivery Details</h3>
              <p><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
              <p><strong>Delivered At:</strong> ${data.deliveryTime}</p>
              <p><strong>Status:</strong> Completed</p>
            </div>
            
            <p>Thank you for choosing Trial Transport℠ for your clinical trial logistics needs.</p>
          </div>
          <div class="footer">
            <p>© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  welcomeEmail: (data: {
    name: string
    role: string
  }) => ({
    subject: 'Welcome to Trial Transport℠',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .features { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .feature { margin: 15px 0; padding-left: 30px; position: relative; }
          .feature:before { content: "✓"; position: absolute; left: 0; color: #10b981; font-weight: bold; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Trial Transport℠</h1>
          </div>
          <div class="content">
            <p>Hello ${data.name},</p>
            <p>Welcome to the most advanced AI-powered clinical trial logistics platform!</p>
            
            <div class="features">
              <h3>What You Can Do:</h3>
              ${data.role === 'SHIPPER' ? `
                <div class="feature">Create and track shipments in real-time</div>
                <div class="feature">Access AI-powered driver matching</div>
                <div class="feature">Monitor temperature compliance 24/7</div>
                <div class="feature">Manage billing and invoices</div>
                <div class="feature">Use shipment templates for faster ordering</div>
              ` : data.role === 'DRIVER' ? `
                <div class="feature">Accept delivery requests instantly</div>
                <div class="feature">Track your earnings in real-time</div>
                <div class="feature">Complete HIPAA and safety training</div>
                <div class="feature">Manage your availability schedule</div>
                <div class="feature">Get instant payouts</div>
              ` : ''}
            </div>
            
            <p>Get started by logging into your dashboard:</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/login" class="button">Go to Dashboard</a>
            
            <p>If you have any questions, our support team is here to help!</p>
          </div>
          <div class="footer">
            <p>© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
            <p>Trial Transport℠ - AI-Powered Clinical Trial Logistics</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
}