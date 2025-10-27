'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';
import { 
  ArrowLeft, Package, MapPin, Thermometer, Clock, User, 
  Phone, Mail, Download, MessageSquare, AlertCircle, CheckCircle 
} from 'lucide-react';

export default function ShipmentDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const shipmentId = params.id as string;

  const [shipment] = useState({
    id: shipmentId,
    status: 'in-transit',
    priority: 'high',
    type: 'Refrigerated',
    
    // Pickup Details
    pickupLocation: 'Vanderbilt University Medical Center',
    pickupAddress: '1211 Medical Center Dr, Nashville, TN 37232',
    pickupContact: 'Dr. Sarah Mitchell',
    pickupPhone: '(615) 322-5000',
    pickupTime: '2025-01-21 09:00 AM',
    
    // Delivery Details
    deliveryLocation: 'Quest Diagnostics Lab',
    deliveryAddress: '400 Egypt Rd, Norristown, PA 19403',
    deliveryContact: 'Lab Manager',
    deliveryPhone: '(610) 631-4200',
    deliveryTime: '2025-01-21 02:00 PM',
    
    // Driver Details
    driverName: 'John Driver',
    driverPhone: '(555) 234-5678',
    driverRating: 4.9,
    vehicleInfo: '2022 Toyota Camry - Silver',
    
    // Specimen Details
    specimenType: 'Blood Samples',
    quantity: '24 vials',
    temperatureRange: '2-8°C',
    currentTemp: '4.2°C',
    
    // Tracking
    currentLocation: 'I-40 E, Nashville, TN',
    estimatedArrival: '1:45 PM',
    distance: '45 miles',
    
    // Timeline
    timeline: [
      { time: '09:00 AM', event: 'Shipment created', status: 'completed' },
      { time: '09:15 AM', event: 'Driver assigned', status: 'completed' },
      { time: '09:30 AM', event: 'Pickup completed', status: 'completed' },
      { time: '10:45 AM', event: 'Temperature check - 4.2°C', status: 'completed' },
      { time: '12:30 PM', event: 'Halfway point reached', status: 'completed' },
      { time: '01:45 PM', event: 'Estimated delivery', status: 'pending' },
    ],
  });

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'shipper') {
      window.location.href = '/login';
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-transit': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-white/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-white/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <DashboardNavigation role="shipper" />
      <DemoDataBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/shipper/shipments')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shipments
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Shipment Details</h1>
              <p className="text-gray-300 mt-2">Tracking ID: {shipmentId}</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message Driver
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Current Status</h2>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(shipment.status)}`}>
                    {shipment.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(shipment.priority)}`}>
                    {shipment.priority.toUpperCase()} PRIORITY
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-300 mb-1">Current Location</p>
                  <p className="font-semibold text-white">{shipment.currentLocation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Estimated Arrival</p>
                  <p className="font-semibold text-white">{shipment.estimatedArrival}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Current Temperature</p>
                  <p className="font-semibold text-green-600 flex items-center gap-1">
                    <Thermometer className="w-4 h-4" />
                    {shipment.currentTemp}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Distance Remaining</p>
                  <p className="font-semibold text-white">{shipment.distance}</p>
                </div>
              </div>
            </div>

            {/* Pickup & Delivery Details */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Pickup & Delivery</h2>
              
              <div className="space-y-6">
                {/* Pickup */}
                <div className="pb-6 border-b border-white/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">Pickup Location</h3>
                      <p className="text-gray-200">{shipment.pickupLocation}</p>
                      <p className="text-sm text-gray-300">{shipment.pickupAddress}</p>
                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-300">
                          <User className="w-4 h-4" />
                          {shipment.pickupContact}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <Phone className="w-4 h-4" />
                          {shipment.pickupPhone}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {shipment.pickupTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delivery */}
                <div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">Delivery Location</h3>
                      <p className="text-gray-200">{shipment.deliveryLocation}</p>
                      <p className="text-sm text-gray-300">{shipment.deliveryAddress}</p>
                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-300">
                          <User className="w-4 h-4" />
                          {shipment.deliveryContact}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <Phone className="w-4 h-4" />
                          {shipment.deliveryPhone}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {shipment.deliveryTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Shipment Timeline</h2>
              
              <div className="space-y-4">
                {shipment.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </div>
                      {index < shipment.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${
                          item.status === 'completed' ? 'bg-green-200' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-medium text-white">{item.event}</p>
                      <p className="text-sm text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Driver Info */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Driver Information</h2>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-white">{shipment.driverName}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-300">{shipment.driverRating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${shipment.driverPhone}`} className="hover:text-blue-600">
                    {shipment.driverPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Package className="w-4 h-4" />
                  {shipment.vehicleInfo}
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message Driver
              </button>
            </div>

            {/* Specimen Details */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Specimen Details</h2>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-300">Type</p>
                  <p className="font-semibold text-white">{shipment.specimenType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Quantity</p>
                  <p className="font-semibold text-white">{shipment.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Temperature Range</p>
                  <p className="font-semibold text-white">{shipment.temperatureRange}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Current Temperature</p>
                  <p className="font-semibold text-green-600 flex items-center gap-1">
                    <Thermometer className="w-4 h-4" />
                    {shipment.currentTemp}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Temperature Compliant</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Actions</h2>
              
              <div className="space-y-2">
                <button className="w-full px-4 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium text-sm">
                  Download Chain of Custody
                </button>
                <button className="w-full px-4 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium text-sm">
                  Download Temperature Log
                </button>
                <button className="w-full px-4 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium text-sm">
                  View GPS History
                </button>
                <button className="w-full px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium text-sm">
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}