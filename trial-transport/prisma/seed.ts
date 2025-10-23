import { PrismaClient, ShipmentStatus, Priority } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Hash password for demo accounts
  const hashedPassword = await bcrypt.hash('password123', 10)

  // Create Admin User
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@trial.com' },
    update: {},
    create: {
      email: 'admin@trial.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
      emailVerified: new Date(),
      adminProfile: {
        create: {
          department: 'Operations',
          permissions: ['all']
        }
      }
    }
  })
  console.log('✅ Created admin user:', adminUser.email)

  // Create Shipper User
  const shipperUser = await prisma.user.upsert({
    where: { email: 'shipper@trial.com' },
    update: {},
    create: {
      email: 'shipper@trial.com',
      password: hashedPassword,
      name: 'Sarah Johnson',
      role: 'SHIPPER',
      phone: '(555) 123-4567',
      emailVerified: new Date(),
      shipperProfile: {
        create: {
          companyName: 'Vanderbilt Clinical Research',
          companyType: 'Academic Medical Center',
          address: '2525 West End Ave',
          city: 'Nashville',
          state: 'TN',
          zipCode: '37203',
          billingEmail: 'billing@vanderbilt.edu',
          billingPhone: '(615) 322-5000',
          subscriptionPlan: 'PROFESSIONAL',
          subscriptionStatus: 'ACTIVE',
          shipmentsUsed: 142,
          shipmentsIncluded: 0,
          creditsBalance: 450.00,
          creditsAllocated: 750.00,
          creditsUsed: 300.00,
          discountRate: 0.20,
          nextBillingDate: new Date('2025-11-21')
        }
      }
    }
  })
  console.log('✅ Created shipper user:', shipperUser.email)

  // Create Driver User
  const driverUser = await prisma.user.upsert({
    where: { email: 'driver@trial.com' },
    update: {},
    create: {
      email: 'driver@trial.com',
      password: hashedPassword,
      name: 'Mike Rodriguez',
      role: 'DRIVER',
      phone: '(555) 987-6543',
      emailVerified: new Date(),
      driverProfile: {
        create: {
          licenseNumber: 'D1234567',
          licenseState: 'GA',
          licenseExpiry: new Date('2027-12-31'),
          vehicleMake: 'Ford',
          vehicleModel: 'Transit',
          vehicleYear: 2023,
          vehiclePlate: 'ABC-1234',
          vehicleColor: 'White',
          insuranceProvider: 'State Farm',
          insurancePolicy: 'SF-987654',
          insuranceExpiry: new Date('2026-06-30'),
          hasRefrigerator: true,
          hasFreezer: true,
          hasCryogenic: false,
          hasTempMonitors: 3,
          hasInsulatedBags: 5,
          hasCoolers: 2,
          hipaaCompleted: true,
          hipaaCompletedAt: new Date('2025-01-15'),
          specimenCompleted: true,
          specimenCompletedAt: new Date('2025-01-20'),
          tempControlCompleted: true,
          tempControlCompletedAt: new Date('2025-01-25'),
          safetyCompleted: true,
          safetyCompletedAt: new Date('2025-01-30'),
          isAvailable: true,
          serviceRadius: 50,
          homeLatitude: 33.7490,
          homeLongitude: -84.3880,
          homeAddress: '123 Peachtree St, Atlanta, GA 30303',
          weeklySchedule: {
            monday: { enabled: true, start: '08:00', end: '18:00' },
            tuesday: { enabled: true, start: '08:00', end: '18:00' },
            wednesday: { enabled: true, start: '08:00', end: '18:00' },
            thursday: { enabled: true, start: '08:00', end: '18:00' },
            friday: { enabled: true, start: '08:00', end: '18:00' },
            saturday: { enabled: false, start: '09:00', end: '15:00' },
            sunday: { enabled: false, start: '09:00', end: '15:00' }
          },
          acceptsStandard: true,
          acceptsRefrigerated: true,
          acceptsFrozen: true,
          acceptsCryogenic: false,
          minDeliveryFee: 45.0,
          maxDeliveriesPerDay: 12,
          autoAccept: false,
          totalDeliveries: 247,
          completedDeliveries: 243,
          cancelledDeliveries: 4,
          onTimeRate: 98.2,
          tempComplianceRate: 99.5,
          rating: 4.9,
          totalEarnings: 18650.00,
          availableBalance: 815.00,
          pendingBalance: 425.00
        }
      }
    }
  })
  console.log('✅ Created driver user:', driverUser.email)

  // Create additional drivers
  const drivers = [
    {
      email: 'driver2@trial.com',
      name: 'Jennifer Lee',
      phone: '(555) 234-5678',
      city: 'Nashville',
      state: 'TN',
      lat: 36.1627,
      lng: -86.7816
    },
    {
      email: 'driver3@trial.com',
      name: 'David Martinez',
      phone: '(555) 345-6789',
      city: 'Louisville',
      state: 'KY',
      lat: 38.2527,
      lng: -85.7585
    }
  ]

  for (const driver of drivers) {
    await prisma.user.upsert({
      where: { email: driver.email },
      update: {},
      create: {
        email: driver.email,
        password: hashedPassword,
        name: driver.name,
        role: 'DRIVER',
        phone: driver.phone,
        emailVerified: new Date(),
        driverProfile: {
          create: {
            isAvailable: true,
            serviceRadius: 40,
            homeLatitude: driver.lat,
            homeLongitude: driver.lng,
            homeAddress: `${driver.city}, ${driver.state}`,
            hasRefrigerator: true,
            hasFreezer: true,
            hasTempMonitors: 2,
            hasInsulatedBags: 3,
            hasCoolers: 1,
            hipaaCompleted: true,
            hipaaCompletedAt: new Date('2025-01-15'),
            totalDeliveries: Math.floor(Math.random() * 200) + 50,
            completedDeliveries: Math.floor(Math.random() * 190) + 45,
            onTimeRate: 95 + Math.random() * 4,
            tempComplianceRate: 97 + Math.random() * 2,
            rating: 4.5 + Math.random() * 0.4,
            totalEarnings: Math.floor(Math.random() * 15000) + 5000,
            availableBalance: Math.floor(Math.random() * 1000) + 200,
            pendingBalance: Math.floor(Math.random() * 500) + 100
          }
        }
      }
    })
    console.log(`✅ Created driver: ${driver.email}`)
  }

  // Get shipper profile for creating shipments
  const shipperProfile = await prisma.shipperProfile.findUnique({
    where: { userId: shipperUser.id }
  })

  // Get driver profile for assigning shipments
  const driverProfile = await prisma.driverProfile.findUnique({
    where: { userId: driverUser.id }
  })

  if (shipperProfile && driverProfile) {
    // Create sample shipments
    const shipments = [
      {
        trackingNumber: 'TT-2025-001',
        status: 'IN_TRANSIT' as ShipmentStatus,
        priority: 'STANDARD' as Priority,
        specimenType: 'Blood Samples',
        quantity: 24,
        temperatureReq: '2-8°C',
        pickupName: 'Vanderbilt Clinical Lab',
        pickupPhone: '(615) 322-5000',
        pickupAddress: '2525 West End Ave',
        pickupCity: 'Nashville',
        pickupState: 'TN',
        pickupZip: '37203',
        pickupLatitude: 36.1447,
        pickupLongitude: -86.8027,
        pickupDate: new Date('2025-10-21T09:00:00'),
        pickupTimeStart: '09:00',
        pickupTimeEnd: '11:00',
        deliveryName: 'Emory Research Center',
        deliveryPhone: '(404) 727-6123',
        deliveryAddress: '1599 Clifton Rd NE',
        deliveryCity: 'Atlanta',
        deliveryState: 'GA',
        deliveryZip: '30322',
        deliveryLatitude: 33.7975,
        deliveryLongitude: -84.3240,
        deliveryDate: new Date('2025-10-21T14:00:00'),
        deliveryTimeStart: '14:00',
        deliveryTimeEnd: '16:00',
        basePrice: 85.00,
        distanceFee: 45.00,
        priorityFee: 0,
        totalPrice: 130.00,
        driverEarnings: 91.00,
        currentLatitude: 33.7490,
        currentLongitude: -84.3880,
        currentTemp: 4.2,
        aiMatchScore: 94.5,
        riskScore: 12.3,
        qualityScore: 96.8
      },
      {
        trackingNumber: 'TT-2025-002',
        status: 'DELIVERED' as ShipmentStatus,
        priority: 'URGENT' as Priority,
        specimenType: 'Tissue Samples',
        quantity: 12,
        temperatureReq: '-20°C',
        pickupName: 'University of Louisville',
        pickupPhone: '(502) 852-5555',
        pickupAddress: '505 S Hancock St',
        pickupCity: 'Louisville',
        pickupState: 'KY',
        pickupZip: '40202',
        pickupLatitude: 38.2527,
        pickupLongitude: -85.7585,
        pickupDate: new Date('2025-10-20T10:00:00'),
        pickupTimeStart: '10:00',
        pickupTimeEnd: '12:00',
        deliveryName: 'Vanderbilt Biobank',
        deliveryPhone: '(615) 322-2000',
        deliveryAddress: '2525 West End Ave',
        deliveryCity: 'Nashville',
        deliveryState: 'TN',
        deliveryZip: '37203',
        deliveryLatitude: 36.1447,
        deliveryLongitude: -86.8027,
        deliveryDate: new Date('2025-10-20T15:00:00'),
        deliveryTimeStart: '15:00',
        deliveryTimeEnd: '17:00',
        basePrice: 95.00,
        distanceFee: 55.00,
        priorityFee: 25.00,
        totalPrice: 175.00,
        driverEarnings: 122.50,
        actualPickupTime: new Date('2025-10-20T10:15:00'),
        actualDeliveryTime: new Date('2025-10-20T14:45:00'),
        aiMatchScore: 92.1,
        riskScore: 15.7,
        qualityScore: 94.2
      }
    ]

    for (const shipmentData of shipments) {
      const shipment = await prisma.shipment.create({
        data: {
          ...shipmentData,
          shipperId: shipperProfile.id,
          driverId: driverProfile.id
        }
      })
      console.log(`✅ Created shipment: ${shipment.trackingNumber}`)

      // Create timeline events
      const timelineEvents = [
        { status: 'PENDING' as ShipmentStatus, description: 'Shipment created and awaiting driver assignment' },
        { status: 'ASSIGNED', description: 'Driver assigned to shipment' },
        { status: 'ACCEPTED', description: 'Driver accepted the shipment' },
        { status: 'PICKED_UP', description: 'Specimens picked up from origin' }
      ]

      if (shipment.status === 'DELIVERED') {
        timelineEvents.push(
          { status: 'IN_TRANSIT' as ShipmentStatus, description: 'En route to destination' },
          { status: 'DELIVERED' as ShipmentStatus, description: 'Successfully delivered to destination' }
        )
      } else if (shipment.status === 'IN_TRANSIT') {
        timelineEvents.push({ status: 'IN_TRANSIT' as ShipmentStatus, description: 'En route to destination' })
      }

      for (let i = 0; i < timelineEvents.length; i++) {
        await prisma.shipmentTimeline.create({
          data: {
            shipmentId: shipment.id,
            status: timelineEvents[i].status,
            description: timelineEvents[i].description,
            timestamp: new Date(Date.now() - (timelineEvents.length - i) * 3600000)
          }
        })
      }

      // Create temperature readings for in-transit shipment
      if (shipment.status === 'IN_TRANSIT') {
        for (let i = 0; i < 10; i++) {
          await prisma.temperatureReading.create({
            data: {
              shipmentId: shipment.id,
              temperature: 3.5 + Math.random() * 1.5,
              humidity: 45 + Math.random() * 10,
              timestamp: new Date(Date.now() - (10 - i) * 600000)
            }
          })
        }
      }
    }

    // Create shipment template
    await prisma.shipmentTemplate.create({
      data: {
        shipperId: shipperProfile.id,
        name: 'Weekly Blood Sample Delivery',
        description: 'Standard weekly delivery of blood samples to Emory',
        specimenType: 'Blood Samples',
        quantity: 24,
        temperatureReq: '2-8°C',
        priority: 'STANDARD' as Priority,
        pickupName: 'Vanderbilt Clinical Lab',
        pickupPhone: '(615) 322-5000',
        pickupAddress: '2525 West End Ave',
        pickupCity: 'Nashville',
        pickupState: 'TN',
        pickupZip: '37203',
        deliveryName: 'Emory Research Center',
        deliveryPhone: '(404) 727-6123',
        deliveryAddress: '1599 Clifton Rd NE',
        deliveryCity: 'Atlanta',
        deliveryState: 'GA',
        deliveryZip: '30322',
        timesUsed: 12,
        lastUsed: new Date('2025-10-14')
      }
    })
    console.log('✅ Created shipment template')

    // Create payment method
    await prisma.paymentMethod.create({
      data: {
        shipperId: shipperProfile.id,
        type: 'CREDIT_CARD',
        last4: '4242',
        brand: 'Visa',
        expiryMonth: 12,
        expiryYear: 2027,
        isDefault: true,
        stripePaymentMethodId: 'pm_test_123456'
      }
    })
    console.log('✅ Created payment method')

    // Create sample messages
    await prisma.message.create({
      data: {
        senderId: shipperUser.id,
        receiverId: driverUser.id,
        shipmentId: 'TT-2025-001',
        content: 'Hi Mike, please handle these samples with extra care. They are time-sensitive.',
        read: true,
        readAt: new Date()
      }
    })

    await prisma.message.create({
      data: {
        senderId: driverUser.id,
        receiverId: shipperUser.id,
        shipmentId: 'TT-2025-001',
        content: 'Absolutely! I have them in the refrigerated compartment. ETA is 2:30 PM.',
        read: false
      }
    })
    console.log('✅ Created sample messages')

    // Create notifications
    await prisma.notification.create({
      data: {
        userId: shipperUser.id,
        type: 'SHIPMENT_PICKED_UP',
        title: 'Shipment Picked Up',
        message: 'Your shipment TT-2025-001 has been picked up by Mike Rodriguez',
        link: '/shipper/shipments/TT-2025-001',
        read: false
      }
    })

    await prisma.notification.create({
      data: {
        userId: driverUser.id,
        type: 'SHIPMENT_ASSIGNED',
        title: 'New Delivery Available',
        message: 'You have been assigned a new delivery: TT-2025-003',
        link: '/driver/available',
        read: false
      }
    })
    console.log('✅ Created notifications')

    // Create earnings
    await prisma.earning.create({
      data: {
        driverId: driverProfile.id,
        shipmentId: 'TT-2025-002',
        amount: 122.50,
        type: 'DELIVERY',
        status: 'AVAILABLE'
      }
    })
    console.log('✅ Created earnings')
  }

  // Create system settings
  await prisma.systemSetting.upsert({
    where: { key: 'platform_fee_percentage' },
    update: {},
    create: {
      key: 'platform_fee_percentage',
      value: '30',
      description: 'Platform fee percentage taken from each delivery'
    }
  })

  await prisma.systemSetting.upsert({
    where: { key: 'min_delivery_price' },
    update: {},
    create: {
      key: 'min_delivery_price',
      value: '45',
      description: 'Minimum delivery price in USD'
    }
  })
  console.log('✅ Created system settings')

  console.log('🎉 Database seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })