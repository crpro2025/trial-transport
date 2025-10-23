'use client';

import Link from 'next/link';
import { TrialTransportLogo } from '@/components/Logo';

export default function APIMarketplace() {
  const apiEndpoints = [
    {
      name: 'Shipment Management API',
      description: 'Create, track, and manage shipments programmatically',
      endpoints: 15,
      calls: '2.4M/month',
      uptime: '99.99%',
      category: 'Core',
      pricing: 'Included'
    },
    {
      name: 'AI Optimization API',
      description: 'Access our AI models for route optimization and pricing',
      endpoints: 8,
      calls: '1.8M/month',
      uptime: '99.95%',
      category: 'AI/ML',
      pricing: '$0.01/call'
    },
    {
      name: 'Real-Time Tracking API',
      description: 'Get live GPS coordinates and status updates',
      endpoints: 6,
      calls: '5.2M/month',
      uptime: '99.99%',
      category: 'Tracking',
      pricing: 'Included'
    },
    {
      name: 'Temperature Monitoring API',
      description: 'Access IoT sensor data and temperature logs',
      endpoints: 10,
      calls: '3.1M/month',
      uptime: '99.98%',
      category: 'IoT',
      pricing: '$0.005/call'
    },
    {
      name: 'Compliance & Documentation API',
      description: 'Generate and retrieve compliance documents',
      endpoints: 12,
      calls: '890K/month',
      uptime: '99.97%',
      category: 'Compliance',
      pricing: 'Included'
    },
    {
      name: 'Analytics & Reporting API',
      description: 'Access platform analytics and generate custom reports',
      endpoints: 20,
      calls: '1.2M/month',
      uptime: '99.96%',
      category: 'Analytics',
      pricing: '$0.02/call'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <TrialTransportLogo size="md" />
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/ai-features" className="text-gray-300 hover:text-white transition-colors">AI Features</Link>
              <Link href="/api-marketplace" className="text-cyan-400">API</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-blue-400 text-sm font-medium">Developer-First Platform</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              API Marketplace
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Build powerful integrations with our comprehensive API suite. Access AI models, real-time tracking, 
              IoT sensors, and compliance tools through simple REST APIs.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all font-semibold">
                Get API Key
              </button>
              <button className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-all font-semibold">
                View Documentation
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">71+</p>
              <p className="text-gray-400">API Endpoints</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">14.5M</p>
              <p className="text-gray-400">API Calls/Month</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">99.98%</p>
              <p className="text-gray-400">Uptime SLA</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">&lt;50ms</p>
              <p className="text-gray-400">Avg Response</p>
            </div>
          </div>

          {/* API Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {apiEndpoints.map((api, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium">
                      {api.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 mb-2">{api.name}</h3>
                    <p className="text-gray-400">{api.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Endpoints</p>
                    <p className="text-white font-semibold text-lg">{api.endpoints}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">API Calls</p>
                    <p className="text-white font-semibold text-lg">{api.calls}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Uptime</p>
                    <p className="text-green-400 font-semibold text-lg">{api.uptime}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Pricing</p>
                    <p className="text-cyan-400 font-semibold text-lg">{api.pricing}</p>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium">
                  View Documentation
                </button>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise-Grade API Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure Authentication</h3>
                <p className="text-gray-400">OAuth 2.0, API keys, and JWT tokens with role-based access control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rate Limiting</h3>
                <p className="text-gray-400">Flexible rate limits with burst capacity and automatic scaling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Comprehensive Docs</h3>
                <p className="text-gray-400">Interactive API documentation with code examples in 8 languages</p>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Start Example</h2>
            <div className="bg-[#1e293b] rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`// Create a new shipment
const response = await fetch('https://api.trialtransport.com/v1/shipments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    pickup: {
      address: "123 Research Lab",
      city: "Boston",
      state: "MA"
    },
    dropoff: {
      address: "456 Hospital Drive",
      city: "Cambridge",
      state: "MA"
    },
    specimens: [{
      type: "blood",
      quantity: 10,
      temperatureRequirement: "refrigerated"
    }],
    priority: "urgent"
  })
});

const shipment = await response.json();
console.log('Shipment created:', shipment.trackingNumber);

// Track shipment in real-time
const tracking = await fetch(
  \`https://api.trialtransport.com/v1/shipments/\${shipment.id}/tracking\`,
  { headers: { 'Authorization': 'Bearer YOUR_API_KEY' } }
);

const location = await tracking.json();
console.log('Current location:', location.coordinates);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}