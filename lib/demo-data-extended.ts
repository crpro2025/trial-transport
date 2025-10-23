// Extended demo data for enhanced platform features

import { AdminAnalytics, UserManagement, DriverProfile, ShipmentTemplate, Invoice, AuditLog } from './extended-types';

export const demoAdminAnalytics: AdminAnalytics = {
  overview: {
    totalRevenue: 487650,
    totalShipments: 1247,
    activeDrivers: 89,
    activeShippers: 156,
    averageDeliveryTime: 2.3,
    complianceRate: 99.2
  },
  revenue: {
    today: 12450,
    week: 67890,
    month: 234560,
    year: 2456789,
    growth: 23.5
  },
  shipments: {
    pending: 23,
    inTransit: 45,
    delivered: 1156,
    cancelled: 23
  },
  users: {
    totalDrivers: 124,
    pendingDrivers: 15,
    activeDrivers: 89,
    suspendedDrivers: 5,
    totalShippers: 178,
    activeShippers: 156
  },
  performance: {
    onTimeRate: 96.8,
    temperatureCompliance: 99.2,
    customerSatisfaction: 4.8,
    driverSatisfaction: 4.6
  }
};

export const demoUsers: UserManagement[] = [
  {
    id: 'user-1',
    name: 'Sarah Johnson',
    email: 'sarah.j@biotech.com',
    role: 'shipper',
    status: 'active',
    joinedDate: '2024-01-15',
    lastActive: '2025-01-18',
    totalShipments: 234,
    rating: 4.9,
    verificationStatus: 'verified',
    documents: []
  },
  {
    id: 'user-2',
    name: 'Michael Chen',
    email: 'mchen@research.edu',
    role: 'shipper',
    status: 'active',
    joinedDate: '2024-03-22',
    lastActive: '2025-01-17',
    totalShipments: 156,
    rating: 4.7,
    verificationStatus: 'verified',
    documents: []
  },
  {
    id: 'driver-1',
    name: 'James Wilson',
    email: 'jwilson@email.com',
    role: 'driver',
    status: 'active',
    joinedDate: '2024-02-10',
    lastActive: '2025-01-18',
    totalShipments: 445,
    rating: 4.9,
    verificationStatus: 'verified',
    documents: [
      {
        id: 'doc-1',
        type: 'drivers_license',
        status: 'approved',
        url: '/documents/license-jwilson.pdf',
        uploadedAt: '2024-02-10',
        reviewedAt: '2024-02-11',
        reviewedBy: 'admin-1',
        notes: 'Valid until 2028'
      },
      {
        id: 'doc-2',
        type: 'insurance',
        status: 'approved',
        url: '/documents/insurance-jwilson.pdf',
        uploadedAt: '2024-02-10',
        reviewedAt: '2024-02-11',
        reviewedBy: 'admin-1',
        notes: 'Commercial coverage verified'
      }
    ]
  },
  {
    id: 'driver-2',
    name: 'Maria Rodriguez',
    email: 'mrodriguez@email.com',
    role: 'driver',
    status: 'active',
    joinedDate: '2024-04-05',
    lastActive: '2025-01-18',
    totalShipments: 312,
    rating: 4.8,
    verificationStatus: 'verified',
    documents: [
      {
        id: 'doc-3',
        type: 'drivers_license',
        status: 'approved',
        url: '/documents/license-mrodriguez.pdf',
        uploadedAt: '2024-04-05',
        reviewedAt: '2024-04-06',
        reviewedBy: 'admin-1',
        notes: 'Valid until 2027'
      }
    ]
  },
  {
    id: 'driver-3',
    name: 'David Park',
    email: 'dpark@email.com',
    role: 'driver',
    status: 'pending',
    joinedDate: '2025-01-15',
    lastActive: '2025-01-18',
    totalShipments: 0,
    verificationStatus: 'pending',
    documents: [
      {
        id: 'doc-4',
        type: 'drivers_license',
        status: 'pending',
        url: '/documents/license-dpark.pdf',
        uploadedAt: '2025-01-15',
        notes: 'Awaiting review'
      },
      {
        id: 'doc-5',
        type: 'background_check',
        status: 'pending',
        url: '/documents/background-dpark.pdf',
        uploadedAt: '2025-01-16',
        notes: 'Processing'
      }
    ]
  }
];

export const demoDriverProfile: DriverProfile = {
  id: 'driver-1',
  personalInfo: {
    name: 'James Wilson',
    email: 'jwilson@email.com',
    phone: '(555) 123-4567',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    address: '123 Main Street',
    city: 'Boston',
    state: 'MA',
    zipCode: '02101',
    dateOfBirth: '1985-06-15'
  },
  vehicle: {
    make: 'Ford',
    model: 'Transit',
    year: 2022,
    color: 'White',
    licensePlate: 'ABC-1234',
    photos: [
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'
    ],
    capacity: '250 cubic feet',
    temperatureControlled: true
  },
  equipment: [
    {
      id: 'eq-1',
      type: 'cooler',
      brand: 'Pelican',
      model: 'Elite 150',
      capacity: '150 quarts',
      temperatureRange: '2-8°C',
      photos: ['https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=400'],
      lastInspection: '2025-01-01'
    },
    {
      id: 'eq-2',
      type: 'temperature_monitor',
      brand: 'TempTale',
      model: 'Ultra',
      capacity: 'N/A',
      photos: ['https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400'],
      certificationUrl: '/certs/temptale-calibration.pdf',
      lastInspection: '2024-12-15'
    },
    {
      id: 'eq-3',
      type: 'insulated_bag',
      brand: 'CoolSafe',
      model: 'Pro Series',
      capacity: '50 liters',
      temperatureRange: '2-8°C',
      photos: ['https://images.unsplash.com/photo-1553531087-6c7b1e1b8f1d?w=400'],
      lastInspection: '2025-01-10'
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      type: 'drivers_license',
      number: 'MA-123456789',
      issuedBy: 'Massachusetts RMV',
      issuedDate: '2020-06-15',
      expirationDate: '2028-06-15',
      documentUrl: '/documents/license-jwilson.pdf',
      verified: true
    },
    {
      id: 'cert-2',
      type: 'medical_courier',
      number: 'MC-987654',
      issuedBy: 'National Association of Medical Couriers',
      issuedDate: '2024-01-10',
      expirationDate: '2026-01-10',
      documentUrl: '/documents/medical-courier-cert.pdf',
      verified: true
    },
    {
      id: 'cert-3',
      type: 'hipaa',
      number: 'HIPAA-2024-JW',
      issuedBy: 'Trial Transport',
      issuedDate: '2024-02-15',
      expirationDate: '2026-02-15',
      documentUrl: '/documents/hipaa-cert.pdf',
      verified: true
    }
  ],
  insurance: {
    provider: 'Commercial Insurance Co.',
    policyNumber: 'POL-123456789',
    expirationDate: '2025-12-31',
    coverageAmount: 1000000,
    documentUrl: '/documents/insurance-jwilson.pdf'
  },
  backgroundCheck: {
    status: 'approved',
    completedAt: '2024-02-12',
    expirationDate: '2026-02-12'
  },
  trainingCompleted: ['hipaa-compliance', 'specimen-handling', 'temperature-control', 'safety-emergency'],
  status: 'active',
  rating: 4.9,
  totalDeliveries: 445,
  onTimeRate: 98.2,
  temperatureComplianceRate: 99.5
};

export const demoShipmentTemplates: ShipmentTemplate[] = [
  {
    id: 'template-1',
    shipperId: 'shipper-1',
    name: 'Weekly Blood Sample Pickup',
    description: 'Regular Monday morning blood sample collection from clinic',
    pickup: {
      address: 'Boston Medical Center, 1 Boston Medical Center Pl',
      city: 'Boston',
      state: 'MA',
      zipCode: '02118',
      contactName: 'Dr. Sarah Johnson',
      contactPhone: '(617) 555-0100',
      specialInstructions: 'Use loading dock entrance. Call 15 minutes before arrival.'
    } as any,
    dropoff: {
      address: 'Quest Diagnostics, 400 Unicorn Park Dr',
      city: 'Woburn',
      state: 'MA',
      zipCode: '01801',
      contactName: 'Lab Reception',
      contactPhone: '(781) 555-0200'
    } as any,
    specimens: [
      {
        type: 'blood',
        quantity: 50,
        unit: 'tubes',
        temperatureRequirement: 'refrigerated',
        minTemp: 2,
        maxTemp: 8,
        studyProtocol: 'STUDY-2024-001'
      }
    ],
    priority: 'standard',
    specialInstructions: 'Samples must arrive by 11 AM for same-day processing',
    usageCount: 48,
    createdAt: '2024-03-01'
  },
  {
    id: 'template-2',
    shipperId: 'shipper-1',
    name: 'Urgent Tissue Sample',
    description: 'Emergency tissue sample transport for pathology',
    pickup: {
      address: 'Massachusetts General Hospital, 55 Fruit St',
      city: 'Boston',
      state: 'MA',
      zipCode: '02114',
      contactName: 'Pathology Department',
      contactPhone: '(617) 555-0300'
    } as any,
    dropoff: {
      address: 'Dana-Farber Cancer Institute, 450 Brookline Ave',
      city: 'Boston',
      state: 'MA',
      zipCode: '02215',
      contactName: 'Research Lab',
      contactPhone: '(617) 555-0400'
    } as any,
    specimens: [
      {
        type: 'tissue',
        quantity: 1,
        unit: 'sample',
        temperatureRequirement: 'frozen',
        minTemp: -20,
        maxTemp: -15,
        specialHandling: ['Handle with care', 'Time-sensitive'],
        studyProtocol: 'ONCOLOGY-2024-045'
      }
    ],
    priority: 'critical',
    specialInstructions: 'Call recipient before pickup. Deliver within 2 hours.',
    usageCount: 12,
    createdAt: '2024-06-15'
  }
];

export const demoInvoices: Invoice[] = [
  {
    id: 'inv-1',
    invoiceNumber: 'INV-2025-001',
    shipperId: 'shipper-1',
    shipperName: 'Sarah Johnson',
    shipperCompany: 'BioTech Research Inc.',
    billingPeriod: {
      start: '2025-01-01',
      end: '2025-01-31'
    },
    shipments: [
      {
        shipmentId: 'ship-1',
        trackingNumber: 'TT-2025-001',
        date: '2025-01-05',
        route: 'Boston Medical Center → Quest Diagnostics',
        amount: 65.00
      },
      {
        shipmentId: 'ship-2',
        trackingNumber: 'TT-2025-015',
        date: '2025-01-12',
        route: 'Boston Medical Center → Quest Diagnostics',
        amount: 65.00
      },
      {
        shipmentId: 'ship-3',
        trackingNumber: 'TT-2025-028',
        date: '2025-01-19',
        route: 'MGH → Dana-Farber',
        amount: 125.00
      }
    ],
    subtotal: 255.00,
    tax: 15.30,
    total: 270.30,
    status: 'paid',
    dueDate: '2025-02-15',
    paidDate: '2025-02-10',
    paymentMethod: 'Credit Card',
    createdAt: '2025-02-01'
  }
];

export const demoAuditLogs: AuditLog[] = [
  {
    id: 'audit-1',
    timestamp: '2025-01-18T10:30:00Z',
    userId: 'admin-1',
    userName: 'Admin User',
    userRole: 'admin',
    action: 'APPROVE_DRIVER',
    resource: 'driver',
    resourceId: 'driver-1',
    details: {
      driverName: 'James Wilson',
      previousStatus: 'pending',
      newStatus: 'approved'
    },
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0'
  },
  {
    id: 'audit-2',
    timestamp: '2025-01-18T09:15:00Z',
    userId: 'shipper-1',
    userName: 'Sarah Johnson',
    userRole: 'shipper',
    action: 'CREATE_SHIPMENT',
    resource: 'shipment',
    resourceId: 'ship-100',
    details: {
      trackingNumber: 'TT-2025-100',
      route: 'Boston → Woburn',
      priority: 'standard'
    },
    ipAddress: '192.168.1.50',
    userAgent: 'Mozilla/5.0'
  },
  {
    id: 'audit-3',
    timestamp: '2025-01-18T08:45:00Z',
    userId: 'driver-1',
    userName: 'James Wilson',
    userRole: 'driver',
    action: 'COMPLETE_DELIVERY',
    resource: 'shipment',
    resourceId: 'ship-99',
    details: {
      trackingNumber: 'TT-2025-099',
      deliveryTime: '2025-01-18T08:45:00Z',
      temperature: 4.5,
      signatureObtained: true
    },
    ipAddress: '192.168.1.75',
    userAgent: 'Mobile App'
  }
];