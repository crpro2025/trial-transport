// Extended types for enhanced platform features

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'support';
  permissions: AdminPermission[];
  lastLogin: string;
  createdAt: string;
}

export type AdminPermission = 
  | 'manage_users'
  | 'manage_shipments'
  | 'view_analytics'
  | 'manage_pricing'
  | 'manage_compliance'
  | 'manage_system_settings'
  | 'view_audit_logs';

export interface AdminAnalytics {
  overview: {
    totalRevenue: number;
    totalShipments: number;
    activeDrivers: number;
    activeShippers: number;
    averageDeliveryTime: number;
    complianceRate: number;
  };
  revenue: {
    today: number;
    week: number;
    month: number;
    year: number;
    growth: number;
  };
  shipments: {
    pending: number;
    inTransit: number;
    delivered: number;
    cancelled: number;
  };
  users: {
    totalDrivers: number;
    pendingDrivers: number;
    activeDrivers: number;
    suspendedDrivers: number;
    totalShippers: number;
    activeShippers: number;
  };
  performance: {
    onTimeRate: number;
    temperatureCompliance: number;
    customerSatisfaction: number;
    driverSatisfaction: number;
  };
}

export interface UserManagement {
  id: string;
  name: string;
  email: string;
  role: 'shipper' | 'driver' | 'admin';
  status: 'pending' | 'active' | 'suspended' | 'banned';
  joinedDate: string;
  lastActive: string;
  totalShipments?: number;
  rating?: number;
  verificationStatus: 'unverified' | 'pending' | 'verified';
  documents: VerificationDocument[];
}

export interface VerificationDocument {
  id: string;
  type: 'drivers_license' | 'insurance' | 'vehicle_registration' | 'certification' | 'background_check';
  status: 'pending' | 'approved' | 'rejected';
  url: string;
  uploadedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  category: 'hipaa' | 'specimen_handling' | 'temperature_control' | 'safety' | 'emergency' | 'compliance';
  duration: number; // minutes
  required: boolean;
  content: TrainingContent[];
  quiz: QuizQuestion[];
  passingScore: number;
  certificateIssued: boolean;
}

export interface TrainingContent {
  id: string;
  type: 'video' | 'text' | 'interactive' | 'document';
  title: string;
  content: string;
  duration?: number;
  order: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DriverTrainingProgress {
  driverId: string;
  moduleId: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'failed';
  progress: number; // percentage
  startedAt?: string;
  completedAt?: string;
  quizScore?: number;
  attempts: number;
  certificateUrl?: string;
}

export interface DriverProfile {
  id: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    dateOfBirth: string;
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    color: string;
    licensePlate: string;
    photos: string[];
    capacity: string;
    temperatureControlled: boolean;
  };
  equipment: DriverEquipment[];
  certifications: DriverCertification[];
  insurance: {
    provider: string;
    policyNumber: string;
    expirationDate: string;
    coverageAmount: number;
    documentUrl: string;
  };
  backgroundCheck: {
    status: 'pending' | 'approved' | 'rejected';
    completedAt?: string;
    expirationDate?: string;
  };
  trainingCompleted: string[]; // module IDs
  status: 'pending' | 'approved' | 'active' | 'suspended';
  rating: number;
  totalDeliveries: number;
  onTimeRate: number;
  temperatureComplianceRate: number;
}

export interface DriverEquipment {
  id: string;
  type: 'cooler' | 'freezer' | 'dry_ice_container' | 'temperature_monitor' | 'insulated_bag' | 'other';
  brand: string;
  model: string;
  capacity: string;
  temperatureRange?: string;
  photos: string[];
  certificationUrl?: string;
  lastInspection?: string;
}

export interface DriverCertification {
  id: string;
  type: 'drivers_license' | 'hazmat' | 'medical_courier' | 'temperature_control' | 'hipaa' | 'other';
  number: string;
  issuedBy: string;
  issuedDate: string;
  expirationDate: string;
  documentUrl: string;
  verified: boolean;
}

export interface ShipmentTemplate {
  id: string;
  shipperId: string;
  name: string;
  description: string;
  pickup: Location;
  dropoff: Location;
  specimens: SpecimenDetails[];
  priority: 'standard' | 'urgent' | 'critical';
  specialInstructions?: string;
  usageCount: number;
  createdAt: string;
}

export interface PricingCalculation {
  basePrice: number;
  distanceCharge: number;
  temperatureControlCharge: number;
  priorityCharge: number;
  timeOfDayCharge: number;
  specialHandlingCharge: number;
  insuranceCharge: number;
  subtotal: number;
  tax: number;
  total: number;
  breakdown: PriceBreakdownItem[];
  estimatedDeliveryTime: string;
  aiOptimizationSavings: number;
}

export interface PriceBreakdownItem {
  label: string;
  amount: number;
  description: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  shipperId: string;
  shipperName: string;
  shipperCompany: string;
  billingPeriod: {
    start: string;
    end: string;
  };
  shipments: InvoiceShipment[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  paidDate?: string;
  paymentMethod?: string;
  notes?: string;
  createdAt: string;
}

export interface InvoiceShipment {
  shipmentId: string;
  trackingNumber: string;
  date: string;
  route: string;
  amount: number;
}

export interface ComplianceDocument {
  id: string;
  shipmentId: string;
  type: 'manifest' | 'chain_of_custody' | 'temperature_log' | 'delivery_confirmation' | 'incident_report';
  status: 'pending' | 'approved' | 'rejected';
  url: string;
  uploadedBy: string;
  uploadedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
}

export interface TemperatureLog {
  id: string;
  shipmentId: string;
  timestamp: string;
  temperature: number;
  location: { lat: number; lng: number };
  deviceId: string;
  inRange: boolean;
  alert?: boolean;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: string;
  action: string;
  resource: string;
  resourceId: string;
  details: Record<string, any>;
  ipAddress: string;
  userAgent: string;
}

export interface SystemSettings {
  pricing: {
    baseRate: number;
    perMileRate: number;
    temperatureControlRates: Record<string, number>;
    priorityMultipliers: Record<string, number>;
    taxRate: number;
  };
  compliance: {
    temperatureMonitoringInterval: number; // minutes
    chainOfCustodyRequired: boolean;
    photoDocumentationRequired: boolean;
    signatureRequired: boolean;
  };
  notifications: {
    emailEnabled: boolean;
    smsEnabled: boolean;
    pushEnabled: boolean;
    temperatureAlertThreshold: number;
    delayAlertThreshold: number; // minutes
  };
  driver: {
    backgroundCheckRequired: boolean;
    minimumRating: number;
    trainingRequired: string[]; // module IDs
    vehicleInspectionInterval: number; // days
  };
}

// Import and re-export from types.ts
import type { Location, SpecimenDetails, Shipment, Driver, AIMatchingResult } from './types';
export type { Location, SpecimenDetails, Shipment, Driver, AIMatchingResult };