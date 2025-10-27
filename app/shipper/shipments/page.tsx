'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { demoShipments } from '@/lib/demo-data';

export default function ShipperShipments() {
  const { user } = useAuth();
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_transit' | 'delivered'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!user || user.role !== 'shipper') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'shipper') {
    return null;
  }

  const filteredShipments = demoShipments.filter(s => {
    const matchesFilter = filter === 'all' || s.status === filter;
    const matchesSearch = s.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.pickup.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.dropoff.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-400 bg-green-500/20';
      case 'in_transit': return 'text-blue-400 bg-blue-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'cancelled': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-9000/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'urgent': return 'text-orange-400 bg-orange-500/20';
      case 'standard': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-9000/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  My Shipments
                </h1>
                <p className="text-gray-400 mt-1">Track and manage all your deliveries</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => router.push('/shipper/create-shipment')}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
                >
                  + New Shipment
                </button>
                <button
                  onClick={() => router.push('/shipper/dashboard')}
                  className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                >
                  ← Dashboard
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Search Shipments</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tracking number or address..."
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Filter by Status</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Shipments</option>
                  <option value="pending">Pending</option>
                  <option value="in_transit">In Transit</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Total Shipments</p>
              <p className="text-2xl font-bold text-white mt-1">{demoShipments.length}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">In Transit</p>
              <p className="text-2xl font-bold text-blue-400 mt-1">
                {demoShipments.filter(s => s.status === 'in_transit').length}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Delivered</p>
              <p className="text-2xl font-bold text-green-400 mt-1">
                {demoShipments.filter(s => s.status === 'delivered').length}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm">On-Time Rate</p>
              <p className="text-2xl font-bold text-purple-400 mt-1">96.8%</p>
            </div>
          </div>

          {/* Shipments List */}
          <div className="space-y-4">
            {filteredShipments.map((shipment) => (
              <div
                key={shipment.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer"
                onClick={() => router.push(`/shipper/shipments/${shipment.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{shipment.trackingNumber}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status.replace('_', ' ')}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(shipment.priority)}`}>
                        {shipment.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Created {new Date(shipment.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">${shipment.estimatedCost}</p>
                    <p className="text-gray-400 text-sm">Estimated Cost</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">Pickup</p>
                        <p className="text-gray-400 text-sm">{shipment.pickup.address}</p>
                        <p className="text-gray-400 text-sm">{shipment.pickup.city}, {shipment.pickup.state}</p>
                        {shipment.scheduledPickupTime && (
                          <p className="text-blue-400 text-sm mt-1">
                            Scheduled: {new Date(shipment.scheduledPickupTime).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">Delivery</p>
                        <p className="text-gray-400 text-sm">{shipment.dropoff.address}</p>
                        <p className="text-gray-400 text-sm">{shipment.dropoff.city}, {shipment.dropoff.state}</p>
                        {shipment.estimatedDeliveryTime && (
                          <p className="text-purple-400 text-sm mt-1">
                            ETA: {new Date(shipment.estimatedDeliveryTime).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {shipment.specimens.length} specimen(s)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {shipment.specimens[0]?.temperatureRequirement}
                  </div>
                  {shipment.driverName && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {shipment.driverName}
                    </div>
                  )}
                  <div className="ml-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/shipper/shipments/${shipment.id}`);
                      }}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredShipments.length === 0 && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">No shipments found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => router.push('/shipper/create-shipment')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Create Your First Shipment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}