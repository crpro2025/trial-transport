'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrialTransportLogo } from '@/components/Logo';

export default function AnalyticsPage() {
  const [liveMetrics, setLiveMetrics] = useState({
    activeDeliveries: 45,
    driversOnline: 89,
    avgResponseTime: 47,
    tempCompliance: 99.2,
    revenueToday: 12450,
    deliveriesToday: 23
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeDeliveries: prev.activeDeliveries + Math.floor(Math.random() * 3) - 1,
        driversOnline: prev.driversOnline + Math.floor(Math.random() * 5) - 2,
        avgResponseTime: Math.max(40, Math.min(60, prev.avgResponseTime + Math.floor(Math.random() * 6) - 3)),
        tempCompliance: Math.max(98, Math.min(100, prev.tempCompliance + (Math.random() * 0.2 - 0.1))),
        revenueToday: prev.revenueToday + Math.floor(Math.random() * 500),
        deliveriesToday: prev.deliveriesToday + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Animated Background */}
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
              <Link href="/analytics" className="text-cyan-400">Analytics</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live Data • Updates Every 3 Seconds</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Real-Time Platform Analytics
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Monitor platform performance, track key metrics, and visualize data in real-time with our advanced analytics dashboard
            </p>
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-white animate-pulse">{liveMetrics.activeDeliveries}</p>
                  <p className="text-gray-400 text-sm mt-1">Active Deliveries</p>
                </div>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-green-500/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-white animate-pulse">${liveMetrics.revenueToday.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm mt-1">Revenue Today</p>
                </div>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-white animate-pulse">{liveMetrics.driversOnline}</p>
                  <p className="text-gray-400 text-sm mt-1">Drivers Online</p>
                </div>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Response Time</h3>
                <span className="text-cyan-400 text-2xl font-bold">{liveMetrics.avgResponseTime}ms</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${(liveMetrics.avgResponseTime / 100) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Target: &lt;50ms</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Temp Compliance</h3>
                <span className="text-green-400 text-2xl font-bold">{liveMetrics.tempCompliance.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${liveMetrics.tempCompliance}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Industry Avg: 94-96%</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Deliveries Today</h3>
                <span className="text-purple-400 text-2xl font-bold">{liveMetrics.deliveriesToday}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${(liveMetrics.deliveriesToday / 50) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Daily Target: 50</p>
            </div>
          </div>

          {/* Advanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Predictive Analytics */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Predictive Analytics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                AI-powered forecasting predicts demand patterns, optimal pricing, and resource allocation 30 days in advance with 91% accuracy.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Next Week Demand</span>
                  <span className="text-green-400 font-semibold">↑ 23% Increase</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Peak Hours</span>
                  <span className="text-blue-400 font-semibold">9 AM - 11 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Revenue Forecast</span>
                  <span className="text-purple-400 font-semibold">$567K (Month)</span>
                </div>
              </div>
            </div>

            {/* Blockchain Integration */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Blockchain Chain of Custody</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Immutable blockchain records ensure complete transparency and regulatory compliance for every specimen transfer.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Blockchain Network</span>
                  <span className="text-green-400 font-semibold">Ethereum</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Transactions Today</span>
                  <span className="text-blue-400 font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Verification Time</span>
                  <span className="text-purple-400 font-semibold">&lt;2 seconds</span>
                </div>
              </div>
            </div>

            {/* IoT Integration */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">IoT Sensor Network</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Real-time temperature, humidity, and location monitoring through integrated IoT sensors in every transport container.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Active Sensors</span>
                  <span className="text-green-400 font-semibold">2,847</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Data Points/Min</span>
                  <span className="text-blue-400 font-semibold">17,082</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Alert Response</span>
                  <span className="text-purple-400 font-semibold">&lt;30 seconds</span>
                </div>
              </div>
            </div>

            {/* Carbon Footprint */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Carbon Footprint Tracking</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Monitor and reduce environmental impact with AI-optimized routes that minimize emissions while maintaining service quality.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">CO₂ Saved (Month)</span>
                  <span className="text-green-400 font-semibold">12.4 tons</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Route Efficiency</span>
                  <span className="text-blue-400 font-semibold">96.8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">vs Industry Avg</span>
                  <span className="text-purple-400 font-semibold">-34% Emissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}