'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { demoShipments } from '@/lib/demo-data';
import { Package, MapPin, Clock, AlertTriangle, CheckCircle, XCircle, Search, Filter, Download, RefreshCw } from 'lucide-react';

export default function AdminShipments() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'in_transit' | 'delivered' | 'cancelled'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'standard' | 'urgent' | 'critical'>('all');
  const [selectedShipment, setSelectedShipment] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') {
    return null;
  }

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const filteredShipments = demoShipments.filter(s => {
    const matchesSearch = s.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.pickup.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.dropoff.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || s.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
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

  const stats = {
    total: demoShipments.length,
    pending: demoShipments.filter(s => s.status === 'pending').length,
    inTransit: demoShipments.filter(s => s.status === 'in_transit').length,
    delivered: demoShipments.filter(s => s.status === 'delivered').length,
    cancelled: demoShipments.filter(s => s.status === 'cancelled').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Shipment Monitoring
                </h1>
                <p className="text-gray-400 mt-1">Real-time tracking and management</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleRefresh}
                  className={`px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2 ${refreshing ? 'animate-pulse' : ''}`}
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button
                  onClick={() => router.push('/admin/dashboard')}
                  className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">{stats.total}</span>
              </div>
              <p className="text-gray-400 text-sm">Total Shipments</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">{stats.pending}</span>
              </div>
              <p className="text-gray-400 text-sm">Pending</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">{stats.inTransit}</span>
              </div>
              <p className="text-gray-400 text-sm">In Transit</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-green-400">{stats.delivered}</span>
              </div>
              <p className="text-gray-400 text-sm">Delivered</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <XCircle className="w-8 h-8 text-red-400" />
                <span className="text-2xl font-bold text-red-400">{stats.cancelled}</span>
              </div>
              <p className="text-gray-400 text-sm">Cancelled</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Search className="w-4 h-4 inline mr-2" />
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tracking number, address..."
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Filter className="w-4 h-4 inline mr-2" />
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in_transit">In Transit</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  Priority
                </label>
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value as any)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Priorities</option>
                  <option value="standard">Standard</option>
                  <option value="urgent">Urgent</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Shipments Table */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Tracking #</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Route</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Temperature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Driver</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredShipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm text-blue-400">{shipment.trackingNumber}</div>
                        <div className="text-xs text-gray-400">{new Date(shipment.createdAt).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{shipment.pickup.address.split(',')[0]}</div>
                        <div className="text-xs text-gray-400">→ {shipment.dropoff.address.split(',')[0]}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                          {shipment.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(shipment.priority)}`}>
                          {shipment.priority.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{shipment.specimens[0]?.temperatureRequirement || 'N/A'}</div>
                        <div className="text-xs text-gray-400">{shipment.specimens[0]?.type || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{shipment.driverId ? `Driver #${shipment.driverId}` : 'Unassigned'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedShipment(shipment)}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredShipments.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400">No shipments found matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shipment Detail Modal */}
      {selectedShipment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shipment Details</h3>
                  <p className="text-gray-400 font-mono">{selectedShipment.trackingNumber}</p>
                </div>
                <button
                  onClick={() => setSelectedShipment(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Status */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Status</h4>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedShipment.status)}`}>
                  {selectedShipment.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              {/* Route */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Route</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Pickup</p>
                      <p className="text-gray-400 text-sm">{selectedShipment.pickup.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Dropoff</p>
                      <p className="text-gray-400 text-sm">{selectedShipment.dropoff.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specimen Details */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Specimen Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Type</p>
                    <p className="text-white">{selectedShipment.specimens[0]?.type || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Temperature</p>
                    <p className="text-white">{selectedShipment.specimens[0]?.temperatureRequirement || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Priority</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedShipment.priority)}`}>
                      {selectedShipment.priority.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Quantity</p>
                    <p className="text-white">{selectedShipment.specimens[0]?.quantity || 0}</p>
                  </div>
                </div>
              </div>

              {/* Driver Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Driver Assignment</h4>
                <p className="text-white">{selectedShipment.driverId ? `Driver #${selectedShipment.driverId}` : 'Not yet assigned'}</p>
              </div>

              {/* Pricing */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Pricing</h4>
                <p className="text-2xl font-bold text-green-400">${selectedShipment.estimatedCost.toFixed(2)}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Track on Map
                </button>
                <button className="flex-1 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all">
                  Contact Driver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}