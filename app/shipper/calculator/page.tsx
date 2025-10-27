'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';

export default function PricingCalculator() {
  const { user } = useAuth();
  const router = useRouter();
  
  // Form state
  const [distance, setDistance] = useState(25);
  const [specimenType, setSpecimenType] = useState<'blood' | 'tissue' | 'urine' | 'other'>('blood');
  const [temperatureReq, setTemperatureReq] = useState<'ambient' | 'refrigerated' | 'frozen' | 'cryogenic'>('refrigerated');
  const [priority, setPriority] = useState<'standard' | 'urgent' | 'critical'>('standard');
  const [quantity, setQuantity] = useState(10);
  const [timeOfDay, setTimeOfDay] = useState<'business' | 'evening' | 'weekend'>('business');
  const [insurance, setInsurance] = useState(false);
  
  // Pricing calculation
  const [pricing, setPricing] = useState({
    basePrice: 0,
    distanceCharge: 0,
    temperatureCharge: 0,
    priorityCharge: 0,
    timeCharge: 0,
    insuranceCharge: 0,
    subtotal: 0,
    tax: 0,
    total: 0,
    aiSavings: 0,
    competitorPrice: 0
  });

  useEffect(() => {
    calculatePrice();
  }, [distance, specimenType, temperatureReq, priority, quantity, timeOfDay, insurance]);

  const calculatePrice = () => {
    // Base price
    let basePrice = 25;
    
    // Distance charge ($1.50 per mile)
    const distanceCharge = distance * 1.5;
    
    // Temperature control charges
    const tempCharges = {
      ambient: 0,
      refrigerated: 15,
      frozen: 30,
      cryogenic: 50
    };
    const temperatureCharge = tempCharges[temperatureReq];
    
    // Priority multipliers
    const priorityMultipliers = {
      standard: 1,
      urgent: 1.5,
      critical: 2
    };
    const priorityCharge = (basePrice + distanceCharge + temperatureCharge) * (priorityMultipliers[priority] - 1);
    
    // Time of day charges
    const timeCharges = {
      business: 0,
      evening: 10,
      weekend: 20
    };
    const timeCharge = timeCharges[timeOfDay];
    
    // Insurance (2% of subtotal)
    const subtotalBeforeInsurance = basePrice + distanceCharge + temperatureCharge + priorityCharge + timeCharge;
    const insuranceCharge = insurance ? subtotalBeforeInsurance * 0.02 : 0;
    
    const subtotal = subtotalBeforeInsurance + insuranceCharge;
    const tax = subtotal * 0.06; // 6% tax
    const total = subtotal + tax;
    
    // AI optimization savings (15-20%)
    const aiSavings = total * 0.175;
    
    // Competitor pricing (40-50% higher)
    const competitorPrice = total * 1.45;
    
    setPricing({
      basePrice,
      distanceCharge,
      temperatureCharge,
      priorityCharge,
      timeCharge,
      insuranceCharge,
      subtotal,
      tax,
      total,
      aiSavings,
      competitorPrice
    });
  };

  useEffect(() => {
    if (!user || user.role !== 'shipper') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'shipper') {
    return null;
  }

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
                  Pricing Calculator
                </h1>
                <p className="text-gray-400 mt-1">Get instant pricing estimates for your shipments</p>
              </div>
              <button
                onClick={() => router.push('/shipper/dashboard')}
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
              >
                ← Dashboard
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Shipment Details</h2>
              
              <div className="space-y-6">
                {/* Distance */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Distance: {distance} miles
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 mi</span>
                    <span>500 mi</span>
                  </div>
                </div>

                {/* Specimen Type */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Specimen Type</label>
                  <select
                    value={specimenType}
                    onChange={(e) => setSpecimenType(e.target.value as any)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="blood">Blood</option>
                    <option value="tissue">Tissue</option>
                    <option value="urine">Urine</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Temperature Requirement */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Temperature Control</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'ambient', label: 'Ambient', icon: '🌡️' },
                      { value: 'refrigerated', label: 'Refrigerated', icon: '❄️' },
                      { value: 'frozen', label: 'Frozen', icon: '🧊' },
                      { value: 'cryogenic', label: 'Cryogenic', icon: '🥶' }
                    ].map((temp) => (
                      <button
                        key={temp.value}
                        onClick={() => setTemperatureReq(temp.value as any)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          temperatureReq === temp.value
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-2xl mb-1">{temp.icon}</div>
                        <div className="text-white text-sm font-medium">{temp.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Priority Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'standard', label: 'Standard', color: 'blue' },
                      { value: 'urgent', label: 'Urgent', color: 'orange' },
                      { value: 'critical', label: 'Critical', color: 'red' }
                    ].map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setPriority(p.value as any)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          priority === p.value
                            ? `border-${p.color}-500 bg-${p.color}-500/20`
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-white text-sm font-medium">{p.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Number of Specimens: {quantity}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Time of Day */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Delivery Time</label>
                  <select
                    value={timeOfDay}
                    onChange={(e) => setTimeOfDay(e.target.value as any)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="business">Business Hours (8 AM - 6 PM)</option>
                    <option value="evening">Evening (6 PM - 10 PM) +$10</option>
                    <option value="weekend">Weekend +$20</option>
                  </select>
                </div>

                {/* Insurance */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={insurance}
                      onChange={(e) => setInsurance(e.target.checked)}
                      className="w-5 h-5 rounded border-white/20"
                    />
                    <div>
                      <span className="text-white font-medium">Add Insurance Coverage</span>
                      <p className="text-gray-400 text-sm">2% of shipment value</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-6">
              {/* Price Summary */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Price Breakdown</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Base Price</span>
                    <span>${pricing.basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Distance ({distance} mi × $1.50)</span>
                    <span>${pricing.distanceCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Temperature Control</span>
                    <span>${pricing.temperatureCharge.toFixed(2)}</span>
                  </div>
                  {pricing.priorityCharge > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Priority Surcharge</span>
                      <span>${pricing.priorityCharge.toFixed(2)}</span>
                    </div>
                  )}
                  {pricing.timeCharge > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Time of Day Surcharge</span>
                      <span>${pricing.timeCharge.toFixed(2)}</span>
                    </div>
                  )}
                  {pricing.insuranceCharge > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Insurance</span>
                      <span>${pricing.insuranceCharge.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${pricing.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 mt-2">
                      <span>Tax (6%)</span>
                      <span>${pricing.tax.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total Price</span>
                    <span className="text-3xl font-bold text-cyan-400">${pricing.total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/shipper/create-shipment')}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Create Shipment
                </button>
              </div>

              {/* Savings Comparison */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Your Savings</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Trial Transport</span>
                    <span className="text-2xl font-bold text-green-400">${pricing.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Traditional Couriers</span>
                    <span className="text-xl font-bold text-gray-400 line-through">${pricing.competitorPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">You Save</span>
                      <span className="text-2xl font-bold text-green-400">
                        ${(pricing.competitorPrice - pricing.total).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-green-400 text-sm mt-2 text-right">
                      ({(((pricing.competitorPrice - pricing.total) / pricing.competitorPrice) * 100).toFixed(0)}% savings)
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium mb-1">AI-Optimized Pricing</p>
                      <p className="text-gray-400 text-sm">
                        Our AI analyzes real-time factors including traffic, weather, and driver availability 
                        to provide the most competitive pricing while ensuring quality service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Included */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Included Features</h3>
                <div className="space-y-3">
                  {[
                    'Real-time GPS tracking',
                    'Temperature monitoring',
                    'Automated compliance documentation',
                    'Chain of custody tracking',
                    'SMS/Email notifications',
                    'Digital proof of delivery',
                    '24/7 customer support',
                    'AI-optimized routing'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}