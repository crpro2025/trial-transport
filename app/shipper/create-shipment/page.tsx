'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';
import { MapPin, Package, Thermometer, AlertTriangle, Calendar, Clock, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { AIEngine } from '@/lib/ai-engine';
import { demoDrivers } from '@/lib/demo-data';

export default function CreateShipmentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiMatches, setAiMatches] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    // Pickup details
    pickupAddress: '',
    pickupLat: 40.7505,
    pickupLng: -73.9934,
    pickupCity: 'New York',
    pickupState: 'NY',
    pickupZip: '10001',
    pickupContact: '',
    pickupPhone: '',
    pickupInstructions: '',
    
    // Dropoff details
    dropoffAddress: '',
    dropoffLat: 40.6942,
    dropoffLng: -73.9866,
    dropoffCity: 'Brooklyn',
    dropoffState: 'NY',
    dropoffZip: '11201',
    dropoffContact: '',
    dropoffPhone: '',
    dropoffInstructions: '',
    
    // Specimen details
    specimenType: 'blood' as 'blood' | 'tissue' | 'urine' | 'saliva' | 'other',
    quantity: 1,
    unit: 'vials',
    temperatureRequirement: 'refrigerated' as 'ambient' | 'refrigerated' | 'frozen' | 'cryogenic',
    minTemp: 2,
    maxTemp: 8,
    studyProtocol: '',
    specialHandling: [] as string[],
    
    // Scheduling
    scheduledPickupDate: new Date().toISOString().split('T')[0],
    scheduledPickupTime: '09:00',
    priority: 'standard' as 'standard' | 'urgent' | 'critical',
    
    // Selected driver
    selectedDriverId: '',
  });

  const handleNext = () => {
    if (step === 3) {
      // Run AI matching
      setLoading(true);
      const shipmentData: any = {
        pickup: {
          address: formData.pickupAddress,
          lat: formData.pickupLat,
          lng: formData.pickupLng,
          city: formData.pickupCity,
          state: formData.pickupState,
          zipCode: formData.pickupZip,
        },
        dropoff: {
          address: formData.dropoffAddress,
          lat: formData.dropoffLat,
          lng: formData.dropoffLng,
          city: formData.dropoffCity,
          state: formData.dropoffState,
          zipCode: formData.dropoffZip,
        },
        specimens: [{
          type: formData.specimenType,
          quantity: formData.quantity,
          unit: formData.unit,
          temperatureRequirement: formData.temperatureRequirement,
          minTemp: formData.minTemp,
          maxTemp: formData.maxTemp,
        }],
        priority: formData.priority,
      };
      
      const matches = AIEngine.matchDriverToShipment(shipmentData, demoDrivers);
      setAiMatches(matches);
      setLoading(false);
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // In a real app, this would submit to the backend
    alert('Shipment created successfully! Redirecting to dashboard...');
    router.push('/shipper/dashboard');
  };

  const toggleSpecialHandling = (item: string) => {
    setFormData(prev => ({
      ...prev,
      specialHandling: prev.specialHandling.includes(item)
        ? prev.specialHandling.filter(h => h !== item)
        : [...prev.specialHandling, item],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border border-white/20-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-white">Create New Shipment</h1>
          <p className="text-sm text-gray-300">AI-powered shipment creation workflow</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Pickup & Delivery' },
              { num: 2, label: 'Specimen Details' },
              { num: 3, label: 'Schedule & Priority' },
              { num: 4, label: 'AI Driver Match' },
              { num: 5, label: 'Review & Confirm' },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-6 h-6" /> : s.num}
                  </div>
                  <div className={`text-xs mt-2 font-semibold ${
                    step >= s.num ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {s.label}
                  </div>
                </div>
                {idx < 4 && (
                  <div className={`h-1 flex-1 mx-2 ${
                    step > s.num ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm border border-white/20 p-8">
          {/* Step 1: Pickup & Delivery */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-green-600" />
                  Pickup Location
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Address</label>
                    <input
                      type="text"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="123 Research Blvd"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Contact Name</label>
                    <input
                      type="text"
                      value={formData.pickupContact}
                      onChange={(e) => setFormData({ ...formData, pickupContact: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Lab Manager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.pickupPhone}
                      onChange={(e) => setFormData({ ...formData, pickupPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Special Instructions</label>
                    <textarea
                      value={formData.pickupInstructions}
                      onChange={(e) => setFormData({ ...formData, pickupInstructions: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      rows={2}
                      placeholder="Building access, parking instructions, etc."
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-red-600" />
                  Delivery Location
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Address</label>
                    <input
                      type="text"
                      value={formData.dropoffAddress}
                      onChange={(e) => setFormData({ ...formData, dropoffAddress: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="456 Medical Center Dr"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Contact Name</label>
                    <input
                      type="text"
                      value={formData.dropoffContact}
                      onChange={(e) => setFormData({ ...formData, dropoffContact: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Dr. Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.dropoffPhone}
                      onChange={(e) => setFormData({ ...formData, dropoffPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Special Instructions</label>
                    <textarea
                      value={formData.dropoffInstructions}
                      onChange={(e) => setFormData({ ...formData, dropoffInstructions: e.target.value })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      rows={2}
                      placeholder="Delivery instructions, access codes, etc."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Specimen Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Package className="w-6 h-6 mr-2 text-blue-600" />
                Specimen Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Specimen Type</label>
                  <select
                    value={formData.specimenType}
                    onChange={(e) => setFormData({ ...formData, specimenType: e.target.value as any })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="blood">Blood</option>
                    <option value="tissue">Tissue</option>
                    <option value="urine">Urine</option>
                    <option value="saliva">Saliva</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Study Protocol</label>
                  <input
                    type="text"
                    value={formData.studyProtocol}
                    onChange={(e) => setFormData({ ...formData, studyProtocol: e.target.value })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="PROTO-2025-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Unit</label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="vials">Vials</option>
                    <option value="samples">Samples</option>
                    <option value="tubes">Tubes</option>
                    <option value="containers">Containers</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Thermometer className="w-5 h-5 mr-2 text-orange-600" />
                  Temperature Requirements
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Requirement</label>
                    <select
                      value={formData.temperatureRequirement}
                      onChange={(e) => setFormData({ ...formData, temperatureRequirement: e.target.value as any })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="ambient">Ambient (15-25°C)</option>
                      <option value="refrigerated">Refrigerated (2-8°C)</option>
                      <option value="frozen">Frozen (-20°C)</option>
                      <option value="cryogenic">Cryogenic (-196°C)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Min Temp (°C)</label>
                    <input
                      type="number"
                      value={formData.minTemp}
                      onChange={(e) => setFormData({ ...formData, minTemp: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Max Temp (°C)</label>
                    <input
                      type="number"
                      value={formData.maxTemp}
                      onChange={(e) => setFormData({ ...formData, maxTemp: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                  Special Handling
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Fragile', 'Time-sensitive', 'Biohazard Level 2', 'Biohazard Level 3', 'Light Sensitive', 'Upright Only'].map(item => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleSpecialHandling(item)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        formData.specialHandling.includes(item)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-white/20 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{item}</span>
                        {formData.specialHandling.includes(item) && (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Schedule & Priority */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                Schedule & Priority
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Pickup Date</label>
                  <input
                    type="date"
                    value={formData.scheduledPickupDate}
                    onChange={(e) => setFormData({ ...formData, scheduledPickupDate: e.target.value })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Pickup Time</label>
                  <input
                    type="time"
                    value={formData.scheduledPickupTime}
                    onChange={(e) => setFormData({ ...formData, scheduledPickupTime: e.target.value })}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-3">Priority Level</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'standard', label: 'Standard', desc: 'Regular delivery', color: 'gray' },
                    { value: 'urgent', label: 'Urgent', desc: 'Priority handling', color: 'orange' },
                    { value: 'critical', label: 'Critical', desc: 'Immediate attention', color: 'red' },
                  ].map(priority => (
                    <button
                      key={priority.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, priority: priority.value as any })}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        formData.priority === priority.value
                          ? `border-${priority.color}-500 bg-${priority.color}-50`
                          : 'border-white/20 hover:border-white/30'
                      }`}
                    >
                      <div className="font-semibold text-white mb-1">{priority.label}</div>
                      <div className="text-xs text-gray-300">{priority.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: AI Driver Match */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">AI-Powered Driver Matching</span>
                </div>
                <h2 className="text-xl font-bold text-white">Best Matched Drivers</h2>
                <p className="text-sm text-gray-300 mt-1">Our AI has analyzed and ranked drivers based on your requirements</p>
              </div>

              <div className="space-y-4">
                {aiMatches.map((match, idx) => (
                  <div
                    key={match.driverId}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.selectedDriverId === match.driverId
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    onClick={() => setFormData({ ...formData, selectedDriverId: match.driverId })}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {match.driverName.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white text-lg">{match.driverName}</div>
                          <div className="text-sm text-gray-300">{match.distance.toFixed(1)} miles away</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">{match.matchScore}%</div>
                        <div className="text-xs text-gray-300">Match Score</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Estimated Arrival</div>
                        <div className="text-sm font-semibold text-white">
                          {new Date(match.estimatedArrival).toLocaleTimeString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Performance</div>
                        <div className="text-sm font-semibold text-white">
                          {match.performanceScore.toFixed(1)}★ Rating
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {match.reasons.map((reason: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          ✓ {reason}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Review & Confirm */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-4">Review Your Shipment</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3">Route Summary</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Pickup</div>
                      <div className="text-sm text-gray-200">{formData.pickupAddress}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Delivery</div>
                      <div className="text-sm text-gray-200">{formData.dropoffAddress}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-3">Specimen Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Type:</span>
                      <span className="font-semibold text-white">{formData.specimenType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Quantity:</span>
                      <span className="font-semibold text-white">{formData.quantity} {formData.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Temperature:</span>
                      <span className="font-semibold text-white">{formData.temperatureRequirement}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-3">Schedule</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="font-semibold text-white">{formData.scheduledPickupDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="font-semibold text-white">{formData.scheduledPickupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Priority:</span>
                      <span className="font-semibold text-white capitalize">{formData.priority}</span>
                    </div>
                  </div>
                </div>
              </div>

              {formData.selectedDriverId && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2">Selected Driver</h3>
                  <div className="text-sm text-green-800">
                    {aiMatches.find(m => m.driverId === formData.selectedDriverId)?.driverName}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-semibold"
              >
                Back
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={handleNext}
                disabled={loading}
                className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center space-x-2"
              >
                <span>{loading ? 'Processing...' : 'Continue'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Create Shipment</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}