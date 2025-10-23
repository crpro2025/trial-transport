'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DollarSign, TrendingUp, Calendar, Download, CreditCard, Clock } from 'lucide-react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';

export default function DriverEarningsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

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

  const earningsData = {
    today: 285,
    thisWeek: 1240,
    thisMonth: 4850,
    allTime: 18650,
    pending: 425,
    available: 815,
  };

  const recentEarnings = [
    { id: 'DEL-156', date: '2025-10-19 14:30', type: 'Cryogenic', distance: '28 mi', amount: 145, status: 'Completed' },
    { id: 'DEL-155', date: '2025-10-19 11:15', type: 'Refrigerated', distance: '15 mi', amount: 75, status: 'Completed' },
    { id: 'DEL-154', date: '2025-10-19 09:00', type: 'Standard', distance: '12 mi', amount: 65, status: 'Completed' },
    { id: 'DEL-153', date: '2025-10-18 16:45', type: 'Frozen', distance: '22 mi', amount: 95, status: 'Pending' },
    { id: 'DEL-152', date: '2025-10-18 14:20', type: 'Refrigerated', distance: '18 mi', amount: 80, status: 'Completed' },
    { id: 'DEL-151', date: '2025-10-18 10:30', type: 'Standard', distance: '10 mi', amount: 55, status: 'Completed' },
  ];

  const weeklyData = [
    { day: 'Mon', earnings: 420 },
    { day: 'Tue', earnings: 380 },
    { day: 'Wed', earnings: 510 },
    { day: 'Thu', earnings: 445 },
    { day: 'Fri', earnings: 520 },
    { day: 'Sat', earnings: 285 },
    { day: 'Sun', earnings: 0 },
  ];

  const payoutMethods = [
    { id: '1', type: 'Bank Account', last4: '4567', isDefault: true, fee: 'Free (3-5 days)' },
    { id: '2', type: 'Debit Card', last4: '8901', isDefault: false, fee: '$0.50 (Instant)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DemoDataBadge />
      <DashboardNavigation role="driver" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Earnings & Payouts</h1>
          <p className="text-gray-400">Track your earnings and manage payout methods</p>
        </div>

        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Today</p>
            <p className="text-3xl font-bold text-white">${earningsData.today}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">This Week</p>
            <p className="text-3xl font-bold text-white">${earningsData.thisWeek.toLocaleString()}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">This Month</p>
            <p className="text-3xl font-bold text-white">${earningsData.thisMonth.toLocaleString()}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">All Time</p>
            <p className="text-3xl font-bold text-white">${earningsData.allTime.toLocaleString()}</p>
          </div>
        </div>

        {/* Payout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Available Balance */}
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Available for Payout</h2>
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Available Balance</p>
              <p className="text-4xl font-bold text-white mb-1">${earningsData.available}</p>
              <p className="text-gray-400 text-sm">Pending: ${earningsData.pending}</p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                Cash Out Now
              </button>
              <button 
                onClick={() => router.push('/driver/earnings/payout-methods')}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Manage Methods
              </button>
            </div>
          </div>

          {/* Payout Methods */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Payout Methods</h2>
            <div className="space-y-4">
              {payoutMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-semibold">{method.type} •••• {method.last4}</p>
                      <p className="text-gray-400 text-sm">{method.fee}</p>
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Default
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button 
              onClick={() => router.push('/driver/earnings/payout-methods')}
              className="w-full mt-4 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Add Payout Method
            </button>
          </div>
        </div>

        {/* Weekly Earnings Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">This Week's Earnings</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
          <div className="flex items-end justify-between h-64 gap-4">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-green-500 to-cyan-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer" 
                  style={{ height: `${(data.earnings / 600) * 100}%` }}
                  title={`$${data.earnings}`}
                >
                </div>
                <p className="text-gray-400 text-sm mt-2">{data.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Earnings */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Deliveries</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Delivery ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date & Time</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Distance</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Earnings</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentEarnings.map((earning) => (
                  <tr key={earning.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-cyan-400 font-mono text-sm">{earning.id}</td>
                    <td className="py-3 px-4 text-white">{earning.date}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                        {earning.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{earning.distance}</td>
                    <td className="py-3 px-4 text-white font-semibold">${earning.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        earning.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {earning.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tax Information Notice */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <p className="text-blue-400 font-semibold mb-1">Tax Information</p>
              <p className="text-gray-400 text-sm">
                You'll receive a 1099 form at the end of the year for tax purposes. 
                <button className="text-cyan-400 hover:text-cyan-300 ml-1">View tax documents →</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}