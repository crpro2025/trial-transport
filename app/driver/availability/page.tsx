'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, MapPin, Calendar, Settings, Save } from 'lucide-react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';

export default function DriverAvailabilityPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [serviceRadius, setServiceRadius] = useState(25);
  const [homeBase, setHomeBase] = useState('123 Main St, Boston, MA 02101');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'driver') {
      router.push('/login');
      return;
    }
    setUser(parsedUser);
  }, [router]);

  if (!user) return null;

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const [schedule, setSchedule] = useState({
    Monday: { enabled: true, start: '08:00', end: '18:00' },
    Tuesday: { enabled: true, start: '08:00', end: '18:00' },
    Wednesday: { enabled: true, start: '08:00', end: '18:00' },
    Thursday: { enabled: true, start: '08:00', end: '18:00' },
    Friday: { enabled: true, start: '08:00', end: '18:00' },
    Saturday: { enabled: false, start: '09:00', end: '17:00' },
    Sunday: { enabled: false, start: '09:00', end: '17:00' },
  });

  const deliveryPreferences = {
    standard: true,
    refrigerated: true,
    frozen: true,
    cryogenic: false,
    maxPerDay: 8,
    minFee: 45,
    autoAccept: false,
  };

  const radiusOptions = [5, 10, 25, 50, 100];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DemoDataBadge />
      <DashboardNavigation role="driver" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Availability & Settings</h1>
          <p className="text-gray-400">Manage your schedule, service area, and delivery preferences</p>
        </div>

        {/* Quick Availability Toggle */}
        <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {isAvailable ? "You're Available" : "You're Offline"}
              </h2>
              <p className="text-gray-400">
                {isAvailable ? 'You can receive delivery requests' : 'You will not receive delivery requests'}
              </p>
            </div>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`relative inline-flex h-16 w-32 items-center rounded-full transition-colors ${
                isAvailable ? 'bg-green-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-12 w-12 transform rounded-full bg-white transition-transform ${
                  isAvailable ? 'translate-x-16' : 'translate-x-2'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Schedule */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Weekly Schedule</h2>
            </div>
            <div className="space-y-4">
              {weekDays.map((day) => (
                <div key={day} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={schedule[day as keyof typeof schedule].enabled}
                        onChange={(e) => setSchedule({
                          ...schedule,
                          [day]: { ...schedule[day as keyof typeof schedule], enabled: e.target.checked }
                        })}
                        className="w-5 h-5"
                      />
                      <span className="text-white font-semibold">{day}</span>
                    </div>
                    {schedule[day as keyof typeof schedule].enabled && (
                      <span className="text-green-400 text-sm">Active</span>
                    )}
                  </div>
                  {schedule[day as keyof typeof schedule].enabled && (
                    <div className="grid grid-cols-2 gap-3 ml-8">
                      <div>
                        <label className="block text-gray-400 text-xs mb-1">Start Time</label>
                        <input
                          type="time"
                          value={schedule[day as keyof typeof schedule].start}
                          onChange={(e) => setSchedule({
                            ...schedule,
                            [day]: { ...schedule[day as keyof typeof schedule], start: e.target.value }
                          })}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs mb-1">End Time</label>
                        <input
                          type="time"
                          value={schedule[day as keyof typeof schedule].end}
                          onChange={(e) => setSchedule({
                            ...schedule,
                            [day]: { ...schedule[day as keyof typeof schedule], end: e.target.value }
                          })}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="space-y-6">
            {/* Service Radius */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-bold text-white">Service Area</h2>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Home Base Location</label>
                <input
                  type="text"
                  value={homeBase}
                  onChange={(e) => setHomeBase(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Enter your home base address"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-3">Service Radius: {serviceRadius} miles</label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={serviceRadius}
                  onChange={(e) => setServiceRadius(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-400 text-xs mt-2">
                  <span>5 mi</span>
                  <span>25 mi</span>
                  <span>50 mi</span>
                  <span>100 mi</span>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-blue-400 text-sm">
                  📍 You'll receive delivery requests within {serviceRadius} miles of your home base location.
                </p>
              </div>
            </div>

            {/* Delivery Preferences */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Delivery Preferences</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-3">Delivery Types</label>
                  <div className="space-y-2">
                    {[
                      { key: 'standard', label: 'Standard', fee: '$45-75' },
                      { key: 'refrigerated', label: 'Refrigerated', fee: '$65-95' },
                      { key: 'frozen', label: 'Frozen', fee: '$85-125' },
                      { key: 'cryogenic', label: 'Cryogenic', fee: '$125-175' },
                    ].map((type) => (
                      <label key={type.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked={deliveryPreferences[type.key as keyof typeof deliveryPreferences] as boolean} className="w-4 h-4" />
                          <span className="text-white">{type.label}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{type.fee}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Maximum Deliveries Per Day</label>
                  <input
                    type="number"
                    defaultValue={deliveryPreferences.maxPerDay}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Minimum Delivery Fee</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-400">$</span>
                    <input
                      type="number"
                      defaultValue={deliveryPreferences.minFee}
                      className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="text-white">Auto-Accept Deliveries</span>
                  <input type="checkbox" defaultChecked={deliveryPreferences.autoAccept} className="w-4 h-4" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
            <Save className="w-5 h-5" />
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
}