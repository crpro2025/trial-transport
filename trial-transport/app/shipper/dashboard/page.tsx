'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';
import { Package, TrendingUp, Clock, CheckCircle, AlertCircle, Plus, MapPin, Thermometer } from 'lucide-react';
import Link from 'next/link';
import { demoShipments, demoAnalytics } from '@/lib/demo-data';
import { Shipment, Analytics } from '@/lib/types';

export default function ShipperDashboard() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'shipper') {
      router.push('/login');
      return;
    }

    // Load demo data
    setShipments(demoShipments);
    setAnalytics(demoAnalytics);
  }, [isAuthenticated, user, router]);

  if (!user) return null;

  const activeShipments = shipments.filter(s => s.status === 'in_transit' || s.status === 'assigned');
  const pendingShipments = shipments.filter(s => s.status === 'pending');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shipper Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user.name}</p>
            </div>
            <Link href="/shipper/create-shipment">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                <Plus className="w-5 h-5" />
                <span className="font-semibold">New Shipment</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{analytics?.activeShipments || 0}</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">Active Shipments</div>
            <div className="text-xs text-gray-500 mt-1">Currently in transit</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{analytics?.onTimeDeliveryRate || 0}%</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">On-Time Rate</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{analytics?.averageDeliveryTime || 0}m</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">Avg Delivery Time</div>
            <div className="text-xs text-gray-500 mt-1">Minutes per shipment</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Thermometer className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{analytics?.temperatureComplianceRate || 0}%</span>
            </div>
            <div className="text-sm font-semibold text-gray-700">Temp Compliance</div>
            <div className="text-xs text-gray-500 mt-1">Within range</div>
          </div>
        </div>

        {/* Active Shipments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Active Shipments</h2>
            <p className="text-sm text-gray-600 mt-1">Track your in-transit deliveries</p>
          </div>
          <div className="divide-y divide-gray-200">
            {activeShipments.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No active shipments</p>
              </div>
            ) : (
              activeShipments.map(shipment => (
                <div key={shipment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-mono text-sm font-semibold text-blue-600">
                          {shipment.trackingNumber}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          shipment.status === 'in_transit' 
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {shipment.status === 'in_transit' ? 'In Transit' : 'Assigned'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          shipment.priority === 'critical'
                            ? 'bg-red-100 text-red-700'
                            : shipment.priority === 'urgent'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {shipment.priority.charAt(0).toUpperCase() + shipment.priority.slice(1)}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Pickup</div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-gray-900">{shipment.pickup.address}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Dropoff</div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-gray-900">{shipment.dropoff.address}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>Driver: {shipment.driverName}</span>
                        <span>•</span>
                        <span>ETA: {new Date(shipment.estimatedDeliveryTime!).toLocaleTimeString()}</span>
                        <span>•</span>
                        <span>{shipment.specimens.length} specimen(s)</span>
                      </div>
                    </div>
                    <div className="ml-4 flex gap-2">
                         <Link href={`/track/${shipment.trackingNumber}`}>
                           <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg rounded-lg transition-all font-semibold text-sm">
                             Live Tracking
                           </button>
                         </Link>
                         <Link href={`/shipper/shipments/${shipment.id}`}>
                           <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold text-sm">
                             Details
                           </button>
                         </Link>
                       </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pending Shipments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Pending Shipments</h2>
            <p className="text-sm text-gray-600 mt-1">Awaiting driver assignment</p>
          </div>
          <div className="divide-y divide-gray-200">
            {pendingShipments.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No pending shipments</p>
              </div>
            ) : (
              pendingShipments.map(shipment => (
                <div key={shipment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-mono text-sm font-semibold text-gray-700">
                          {shipment.trackingNumber}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                          Pending
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Pickup</div>
                          <div className="text-sm text-gray-900">{shipment.pickup.address}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Scheduled</div>
                          <div className="text-sm text-gray-900">
                            {new Date(shipment.scheduledPickupTime).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href={`/shipper/shipments/${shipment.id}`}>
                      <button className="ml-4 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold text-sm">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}