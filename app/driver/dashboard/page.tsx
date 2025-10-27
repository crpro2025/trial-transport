'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';
import { Truck, DollarSign, Star, TrendingUp, Package, MapPin, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { demoShipments } from '@/lib/demo-data';
import { Shipment } from '@/lib/types';

export default function DriverDashboard() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeDelivery, setActiveDelivery] = useState<Shipment | null>(null);
  const [earnings, setEarnings] = useState({
    today: 285.50,
    week: 1420.75,
    month: 5680.25,
  });

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'driver') {
      router.push('/login');
      return;
    }

    // Find active delivery for this driver
    const active = demoShipments.find(s => s.driverId === user.id && s.status === 'in_transit');
    setActiveDelivery(active || null);
  }, [isAuthenticated, user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border border-white/20-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Driver Dashboard</h1>
              <p className="text-sm text-gray-300">Welcome back, {user.name}</p>
            </div>
            <div className="flex space-x-3">
              <Link href="/driver/available">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold">
                  View Available Deliveries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-white">${earnings.today.toFixed(2)}</span>
            </div>
            <div className="text-sm font-semibold text-gray-200">Today's Earnings</div>
            <div className="text-xs text-gray-400 mt-1">+12% from yesterday</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-white">342</span>
            </div>
            <div className="text-sm font-semibold text-gray-200">Total Deliveries</div>
            <div className="text-xs text-gray-400 mt-1">All time</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-white">4.9★</span>
            </div>
            <div className="text-sm font-semibold text-gray-200">Rating</div>
            <div className="text-xs text-gray-400 mt-1">Based on 342 reviews</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-white">${earnings.week.toFixed(0)}</span>
            </div>
            <div className="text-sm font-semibold text-gray-200">This Week</div>
            <div className="text-xs text-gray-400 mt-1">7 days</div>
          </div>
        </div>

        {/* Active Delivery */}
        {activeDelivery ? (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Active Delivery</h2>
                <p className="text-blue-100">Track your current shipment</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-sm font-semibold">Tracking #</div>
                <div className="font-mono text-lg">{activeDelivery.trackingNumber}</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-blue-100 mb-1">Pickup</div>
                      <div className="text-white">{activeDelivery.pickup.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-300 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-blue-100 mb-1">Delivery</div>
                      <div className="text-white">{activeDelivery.dropoff.address}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-100">ETA:</span>
                    <span className="font-semibold">{new Date(activeDelivery.estimatedDeliveryTime!).toLocaleTimeString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Priority:</span>
                    <span className="font-semibold capitalize">{activeDelivery.priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Specimens:</span>
                    <span className="font-semibold">{activeDelivery.specimens.length} items</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href={`/driver/delivery/${activeDelivery.id}`} className="flex-1">
                <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Details & Navigate
                </button>
              </Link>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-12 mb-8 text-center">
            <Truck className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-white mb-2">No Active Deliveries</h2>
            <p className="text-gray-300 mb-6">Browse available deliveries to start earning</p>
            <Link href="/driver/available">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold">
                View Available Deliveries
              </button>
            </Link>
          </div>
        )}

        {/* Certifications & Vehicle Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Your Certifications</h3>
            <div className="space-y-2">
              {user.certifications?.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Vehicle Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Type:</span>
                <span className="font-semibold text-white">{user.vehicleInfo?.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">License Plate:</span>
                <span className="font-semibold text-white">{user.vehicleInfo?.licensePlate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Capacity:</span>
                <span className="font-semibold text-white">{user.vehicleInfo?.capacity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Earnings Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg">
              <div>
                <div className="font-semibold text-white">Today</div>
                <div className="text-sm text-gray-300">3 deliveries completed</div>
              </div>
              <div className="text-2xl font-bold text-green-600">${earnings.today.toFixed(2)}</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg">
              <div>
                <div className="font-semibold text-white">This Week</div>
                <div className="text-sm text-gray-300">18 deliveries completed</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">${earnings.week.toFixed(2)}</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg">
              <div>
                <div className="font-semibold text-white">This Month</div>
                <div className="text-sm text-gray-300">76 deliveries completed</div>
              </div>
              <div className="text-2xl font-bold text-purple-600">${earnings.month.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}