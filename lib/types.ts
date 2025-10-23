// Core data types for Trial Transport platform

export interface Location {
  address: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  zipCode: string;
  contactName?: string;
  contactPhone?: string;
  specialInstructions?: string;
}

export interface SpecimenDetails {
  type: 'blood' | 'tissue' | 'urine' | 'saliva' | 'other';
  quantity: number;
  unit: string;
  temperatureRequirement: 'ambient' | 'refrigerated' | 'frozen' | 'cryogenic';
  minTemp?: number;
  maxTemp?: number;
  hazardClass?: string;
  specialHandling?: string[];
  studyProtocol?: string;
}

export interface Shipment {
  id: string;
  shipperId: string;
  shipperName: string;
  shipperCompany: string;
  driverId?: string;
  driverName?: string;
  status: 'pending' | 'assigned' | 'in_transit' | 'delivered' | 'cancelled';
  priority: 'standard' | 'urgent' | 'critical';
  
  pickup: Location;
  dropoff: Location;
  
  specimens: SpecimenDetails[];
  
  scheduledPickupTime: string;
  estimatedDeliveryTime?: string;
  actualPickupTime?: string;
  actualDeliveryTime?: string;
  
  trackingNumber: string;
  chainOfCustody: ChainOfCustodyEntry[];
  
  documents: Document[];
  photos: Photo[];
  
  aiOptimizedRoute?: RouteOptimization;
  estimatedCost: number;
  actualCost?: number;
  
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChainOfCustodyEntry {
  timestamp: string;
  action: 'created' | 'picked_up' | 'in_transit' | 'delivered' | 'temperature_alert' | 'incident';
  userId: string;
  userName: string;
  location?: { lat: number; lng: number };
  temperature?: number;
  notes?: string;
  signature?: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'manifest' | 'protocol' | 'certification' | 'other';
  url: string;
  uploadedAt: string;
}

export interface Photo {
  id: string;
  type: 'pickup' | 'delivery' | 'specimen' | 'incident';
  url: string;
  timestamp: string;
  location?: { lat: number; lng: number };
}

export interface RouteOptimization {
  distance: number;
  duration: number;
  estimatedArrival: string;
  waypoints: { lat: number; lng: number }[];
  trafficConditions: 'light' | 'moderate' | 'heavy';
  weatherConditions?: string;
  alternativeRoutes?: number;
  aiConfidence: number;
}

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  rating: number;
  totalDeliveries: number;
  certifications: string[];
  vehicleInfo: {
    type: string;
    licensePlate: string;
    capacity: string;
    temperatureControlled: boolean;
  };
  currentLocation?: { lat: number; lng: number };
  availability: 'available' | 'busy' | 'offline';
  status: 'pending' | 'approved' | 'active' | 'suspended';
  earnings: {
    today: number;
    week: number;
    month: number;
    total: number;
  };
}

export interface AIMatchingResult {
  driverId: string;
  driverName: string;
  matchScore: number;
  estimatedArrival: string;
  distance: number;
  reasons: string[];
  certificationMatch: boolean;
  vehicleMatch: boolean;
  performanceScore: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'shipment_update' | 'delivery_request' | 'temperature_alert' | 'system' | 'message';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

export interface Analytics {
  totalShipments: number;
  activeShipments: number;
  completedShipments: number;
  averageDeliveryTime: number;
  onTimeDeliveryRate: number;
  temperatureComplianceRate: number;
  customerSatisfaction: number;
  revenueThisMonth: number;
  topDrivers: { id: string; name: string; deliveries: number }[];
  recentActivity: { timestamp: string; action: string; details: string }[];
}