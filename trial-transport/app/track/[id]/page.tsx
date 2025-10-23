'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { MapPin, Thermometer, Clock, Package, CheckCircle, AlertCircle, TrendingUp, Navigation as NavIcon } from 'lucide-react';

export default function TrackingPage() {
  const params = useParams();
  const router = useRouter();
  const trackingId = params.id as string;
  
  const [currentPosition, setCurrentPosition] = useState(0);
  const [temperature, setTemperature] = useState(2.5);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Simulate real-time tracking
  useEffect(() => {
    const positionInterval = setInterval(() => {
      setCurrentPosition(prev => {
        if (prev >= 100) return 100;
        return prev + 0.5; // Move 0.5% every second
      });
    }, 1000);

    const tempInterval = setInterval(() => {
      setTemperature(prev => {
        const variation = (Math.random() - 0.5) * 0.3;
        const newTemp = prev + variation;
        return Math.max(2.0, Math.min(4.0, newTemp)); // Keep between 2-4°C
      });
    }, 2000);

    const timeInterval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(positionInterval);
      clearInterval(tempInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const shipment = {
    id: trackingId,
    type: 'Refrigerated',
    status: currentPosition >= 100 ? 'Delivered' : currentPosition > 0 ? 'In Transit' : 'Pending',
    origin: {
      name: 'Vanderbilt University Medical Center',
      address: '1211 Medical Center Dr, Nashville, TN 37232',
      lat: 36.1447,
      lng: -86.8027
    },
    destination: {
      name: 'Emory University Hospital',
      address: '1364 Clifton Rd NE, Atlanta, GA 30322',
      lat: 33.7968,
      lng: -84.3240
    },
    driver: {
      name: 'Michael Rodriguez',
      phone: '(615) 555-0123',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    vehicle: {
      make: 'Ford',
      model: 'Transit',
      year: 2023,
      plate: 'TN-TT-2847'
    },
    specimens: [
      { id: 'SP-001', type: 'Blood Sample', quantity: 12, temp: '2-8°C' },
      { id: 'SP-002', type: 'Tissue Sample', quantity: 5, temp: '2-8°C' }
    ],
    timeline: [
      { time: '08:00 AM', event: 'Shipment Created', status: 'completed' },
      { time: '08:15 AM', event: 'Driver Assigned', status: 'completed' },
      { time: '08:30 AM', event: 'Picked Up', status: 'completed' },
      { time: '12:45 PM', event: 'In Transit', status: currentPosition > 0 ? 'active' : 'pending' },
      { time: '02:30 PM', event: 'Delivered', status: currentPosition >= 100 ? 'completed' : 'pending' }
    ],
    distance: 250,
    estimatedTime: 240,
    actualTime: elapsedTime
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'active': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white mb-4 flex items-center gap-2"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">
            Live Tracking
          </h1>
          <p className="text-gray-400">
            Tracking ID: <span className="text-cyan-400 font-mono">{trackingId}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Tracking Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Map Simulation */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  Live Location
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">LIVE</span>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl overflow-hidden" style={{ height: '400px' }}>
                {/* Route Line */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-1 bg-white/10 mx-8">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                      style={{ width: `${currentPosition}%` }}
                    ></div>
                    
                    {/* Origin Marker */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1">
                          <p className="text-xs text-white font-semibold">Nashville, TN</p>
                        </div>
                      </div>
                    </div>

                    {/* Current Position Marker */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-1000"
                      style={{ left: `${currentPosition}%` }}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                          <div className="bg-blue-500 text-white rounded-lg px-3 py-2 shadow-lg">
                            <p className="text-xs font-semibold whitespace-nowrap">
                              {currentPosition >= 100 ? 'Delivered!' : `${currentPosition.toFixed(0)}% Complete`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Destination Marker */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full border-2 border-white ${currentPosition >= 100 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1">
                          <p className="text-xs text-white font-semibold">Atlanta, GA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
              </div>

              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-1">Distance</p>
                  <p className="text-white font-bold">{shipment.distance} miles</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-1">Elapsed Time</p>
                  <p className="text-white font-bold">{formatTime(elapsedTime)}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-1">ETA</p>
                  <p className="text-white font-bold">
                    {currentPosition >= 100 ? 'Delivered' : '2:30 PM'}
                  </p>
                </div>
              </div>
            </div>

            {/* Temperature Monitoring */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Thermometer className="w-5 h-5 text-cyan-400" />
                Temperature Monitoring
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-1">Current Temperature</p>
                  <p className="text-3xl font-bold text-green-400">{temperature.toFixed(1)}°C</p>
                  <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Within Range
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-1">Required Range</p>
                  <p className="text-2xl font-bold text-white">2-8°C</p>
                  <p className="text-gray-400 text-xs mt-1">Refrigerated</p>
                </div>
              </div>

              {/* Temperature Chart Simulation */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-end justify-between h-24 gap-1">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const height = 30 + Math.random() * 40;
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
                <p className="text-gray-400 text-xs text-center mt-2">Last 20 readings</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-cyan-400" />
                Delivery Timeline
              </h2>

              <div className="space-y-4">
                {shipment.timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
                        {item.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                        {item.status === 'active' && <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>}
                        {item.status === 'pending' && <div className="w-2 h-2 bg-gray-400 rounded-full"></div>}
                      </div>
                      {index < shipment.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${item.status === 'completed' ? 'bg-green-500/30' : 'bg-gray-500/30'}`}></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">{item.event}</p>
                      <p className="text-gray-400 text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Status</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  currentPosition >= 100 ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {shipment.status}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Type</p>
                  <p className="text-white font-semibold">{shipment.type}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Tracking ID</p>
                  <p className="text-cyan-400 font-mono text-sm">{shipment.id}</p>
                </div>
              </div>
            </div>

            {/* Driver Info */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Driver</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={shipment.driver.photo}
                  alt={shipment.driver.name}
                  className="w-12 h-12 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <p className="text-white font-semibold">{shipment.driver.name}</p>
                  <p className="text-yellow-400 text-sm">★ {shipment.driver.rating}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">{shipment.driver.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Vehicle</p>
                  <p className="text-white">{shipment.vehicle.year} {shipment.vehicle.make} {shipment.vehicle.model}</p>
                  <p className="text-gray-400 text-xs">{shipment.vehicle.plate}</p>
                </div>
              </div>
            </div>

            {/* Specimens */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-cyan-400" />
                Specimens
              </h3>
              <div className="space-y-3">
                {shipment.specimens.map((specimen, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-white font-semibold text-sm">{specimen.type}</p>
                      <span className="text-cyan-400 text-xs font-mono">{specimen.id}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Quantity: {specimen.quantity}</p>
                    <p className="text-gray-400 text-xs">Temp: {specimen.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Compliance</h3>
              </div>
              <p className="text-green-400 text-sm mb-3">All requirements met</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">Temperature maintained</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">Chain of custody verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">Documentation complete</span>
                </div>
              <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">ICH E6 (R3) compliant tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}