'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';
import { MapPin, Package, Clock, DollarSign, Sparkles, CheckCircle, Thermometer } from 'lucide-react';
import { demoShipments, demoDrivers } from '@/lib/demo-data';
import { AIEngine } from '@/lib/ai-engine';
import { Shipment } from '@/lib/types';

export default function AvailableDeliveriesPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [availableShipments, setAvailableShipments] = useState<any[]>([]);
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'driver') {
      router.push('/login');
      return;
    }

    // Get pending shipments and calculate AI match scores
    const pending = demoShipments.filter(s => s.status === 'pending');
    const driver = demoDrivers.find(d => d.id === user.id) || demoDrivers[0];
    
    const shipmentsWithScores = pending.map(shipment => {
      const matches = AIEngine.matchDriverToShipment(shipment, [driver]);
      return {
        ...shipment,
        matchScore: matches[0]?.matchScore || 0,
        matchReasons: matches[0]?.reasons || [],
        estimatedEarnings: shipment.estimatedCost,
      };
    });

    // Sort by match score
    shipmentsWithScores.sort((a, b) => b.matchScore - a.matchScore);
    setAvailableShipments(shipmentsWithScores);
  }, [isAuthenticated, user, router]);

  const handleAcceptDelivery = (shipmentId: string) => {
    alert('Delivery accepted! Redirecting to delivery details...');
    router.push(`/driver/delivery/${shipmentId}`);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Available Deliveries</h1>
              <p className="text-sm text-gray-600">AI-matched opportunities for you</p>
            </div>
            <button
              onClick={() => router.back()}
              className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-xl font-bold">AI-Powered Matching</h2>
          </div>
          <p className="text-blue-100">
            These deliveries are ranked by our AI based on your location, certifications, vehicle type, and performance history.
            Higher match scores mean better opportunities for you!
          </p>
        </div>

        {/* Available Deliveries */}
        {availableShipments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Available Deliveries</h2>
            <p className="text-gray-600">Check back soon for new opportunities</p>
          </div>
        ) : (
          <div className="space-y-6">
            {availableShipments.map((shipment) => (
              <div
                key={shipment.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  {/* Header with Match Score */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-mono text-sm font-semibold text-blue-600">
                          {shipment.trackingNumber}
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
                      <div className="text-sm text-gray-600">
                        Scheduled: {new Date(shipment.scheduledPickupTime).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                        <span className="text-3xl font-bold text-blue-600">{shipment.matchScore}%</span>
                      </div>
                      <div className="text-xs text-gray-600">AI Match Score</div>
                    </div>
                  </div>

                  {/* Route Information */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-start space-x-3 mb-4">
                        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Pickup Location</div>
                          <div className="text-sm font-semibold text-gray-900">{shipment.pickup.address}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            Contact: {shipment.pickup.contactName || 'N/A'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Delivery Location</div>
                          <div className="text-sm font-semibold text-gray-900">{shipment.dropoff.address}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            Contact: {shipment.dropoff.contactName || 'N/A'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Specimen & Earnings Info */}
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Package className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-900">Specimen Details</span>
                          </div>
                        </div>
                        <div className="space-y-1 text-xs text-gray-700">
                          <div>Type: {shipment.specimens[0].type}</div>
                          <div>Quantity: {shipment.specimens[0].quantity} {shipment.specimens[0].unit}</div>
                          <div className="flex items-center space-x-1">
                            <Thermometer className="w-3 h-3" />
                            <span>Temp: {shipment.specimens[0].temperatureRequirement}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-gray-900">Estimated Earnings</span>
                          </div>
                          <span className="text-2xl font-bold text-green-600">
                            ${shipment.estimatedEarnings.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Match Reasons */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Why this is a good match:</div>
                    <div className="flex flex-wrap gap-2">
                      {shipment.matchReasons.map((reason: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>{reason}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAcceptDelivery(shipment.id)}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                    >
                      Accept Delivery
                    </button>
                    <button
                      onClick={() => setSelectedShipment(selectedShipment === shipment.id ? null : shipment.id)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                      View Details
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedShipment === shipment.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">Additional Information</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">Shipper:</div>
                          <div className="font-semibold text-gray-900">{shipment.shipperName}</div>
                          <div className="text-gray-600">{shipment.shipperCompany}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Study Protocol:</div>
                          <div className="font-semibold text-gray-900">
                            {shipment.specimens[0].studyProtocol || 'Not specified'}
                          </div>
                        </div>
                        {shipment.specimens[0].specialHandling && shipment.specimens[0].specialHandling.length > 0 && (
                          <div className="md:col-span-2">
                            <div className="text-gray-600 mb-2">Special Handling Requirements:</div>
                            <div className="flex flex-wrap gap-2">
                              {shipment.specimens[0].specialHandling.map((req: string, idx: number) => (
                                <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                                  {req}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}