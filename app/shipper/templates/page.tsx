'use client';
// @ts-nocheck

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { demoShipmentTemplates } from '@/lib/demo-data-extended';

export default function ShipmentTemplates() {
  const { user } = useAuth();
  const router = useRouter();
  const [templates] = useState(demoShipmentTemplates);

  useEffect(() => {
    if (!user || user.role !== 'shipper') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'shipper') {
    return null;
  }

  const handleUseTemplate = (templateId: string) => {
    router.push(`/shipper/create-shipment?template=${templateId}`);
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
                  Shipment Templates
                </h1>
                <p className="text-gray-400 mt-1">Save time with pre-configured shipment templates</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => router.push('/shipper/create-shipment')}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
                >
                  + Create Template
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
          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Save Time with Templates</h3>
                <p className="text-gray-300 mb-4">
                  Create templates for your recurring shipments and reduce order creation time by 80%. 
                  Perfect for regular pickups, weekly deliveries, or standard routes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pre-filled addresses
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Saved specimen details
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    One-click ordering
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{template.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(template.priority)}`}>
                        {template.priority}
                      </span>
                      <span className="text-gray-400 text-sm">
                        Used {template.usageCount} times
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Pickup */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm mb-1">Pickup Location</p>
                        <p className="text-gray-400 text-sm">{(template.pickup as any)?.address || 'N/A'}</p>
                        <p className="text-gray-400 text-sm">{(template.pickup as any)?.city || ''}, {(template.pickup as any)?.state || ''}</p>
                        {(template.pickup as any)?.contactName && (
                          <p className="text-blue-400 text-sm mt-1">Contact: {(template.pickup as any).contactName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Dropoff */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm mb-1">Delivery Location</p>
                        <p className="text-gray-400 text-sm">{(template.dropoff as any)?.address || 'N/A'}</p>
                        <p className="text-gray-400 text-sm">{(template.dropoff as any)?.city || ''}, {(template.dropoff as any)?.state || ''}</p>
                        {(template.dropoff as any)?.contactName && (
                          <p className="text-blue-400 text-sm mt-1">Contact: {(template.dropoff as any).contactName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Specimen Details */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white font-medium text-sm mb-2">Specimen Details</p>
                    {template.specimens.map((specimen, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">
                          {specimen.quantity} {specimen.unit} of {specimen.type}
                        </span>
                        <span className="text-cyan-400">
                          {specimen.temperatureRequirement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Special Instructions */}
                  {template.specialInstructions && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                      <p className="text-yellow-400 font-medium text-sm mb-1">Special Instructions</p>
                      <p className="text-gray-300 text-sm">{template.specialInstructions}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleUseTemplate(template.id)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium"
                  >
                    Use Template
                  </button>
                  <button
                    className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    className="px-4 py-2 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Create New Template Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-dashed border-blue-500/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Create New Template</h3>
              <p className="text-gray-400 mb-4">
                Save your frequently used shipment configurations
              </p>
              <button
                onClick={() => router.push('/shipper/create-shipment?save_as_template=true')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}