'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DollarSign, TrendingUp, Users, CreditCard, Download, Filter } from 'lucide-react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';

export default function AdminBillingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'admin') {
      router.push('/login');
      return;
    }
    setUser(parsedUser);
  }, [router]);

  if (!user) return null;

  // Demo financial data
  const revenueMetrics = {
    totalRevenue: 487650,
    monthlyRevenue: 52340,
    subscriptionRevenue: 168900,
    deliveryRevenue: 318750,
    processingFees: 14630,
    netRevenue: 473020,
    growth: 23.5,
  };

  const subscriptionStats = {
    starter: { count: 45, revenue: 13455 },
    professional: { count: 28, revenue: 19572 },
    enterprise: { count: 12, revenue: 17988 },
  };

  const recentTransactions = [
    { id: 'TXN-001', customer: 'Pfizer Clinical Research', amount: 1499, type: 'Subscription', status: 'Completed', date: '2025-10-19' },
    { id: 'TXN-002', customer: 'IQVIA Solutions', amount: 699, type: 'Subscription', status: 'Completed', date: '2025-10-19' },
    { id: 'TXN-003', customer: 'Vanderbilt Medical', amount: 125, type: 'Delivery', status: 'Completed', date: '2025-10-18' },
    { id: 'TXN-004', customer: 'ICON Research', amount: 299, type: 'Subscription', status: 'Pending', date: '2025-10-18' },
    { id: 'TXN-005', customer: 'UW Medicine', amount: 85, type: 'Delivery', status: 'Completed', date: '2025-10-18' },
    { id: 'TXN-006', customer: 'Louisville Research', amount: 699, type: 'Subscription', status: 'Failed', date: '2025-10-17' },
    { id: 'TXN-007', customer: 'Boston Clinical', amount: 145, type: 'Delivery', status: 'Completed', date: '2025-10-17' },
    { id: 'TXN-008', customer: 'Mayo Clinic', amount: 1499, type: 'Subscription', status: 'Completed', date: '2025-10-16' },
  ];

  const monthlyData = [
    { month: 'Apr', revenue: 28500, deliveries: 380 },
    { month: 'May', revenue: 35200, deliveries: 465 },
    { month: 'Jun', revenue: 42800, deliveries: 580 },
    { month: 'Jul', revenue: 48900, deliveries: 650 },
    { month: 'Aug', revenue: 51200, deliveries: 720 },
    { month: 'Sep', revenue: 52340, deliveries: 785 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DemoDataBadge />
      <DashboardNavigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Billing & Revenue</h1>
          <p className="text-gray-400">Monitor revenue, transactions, and financial metrics</p>
        </div>

        {/* Revenue Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">+{revenueMetrics.growth}%</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-bold text-white">${revenueMetrics.totalRevenue.toLocaleString()}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Monthly Revenue</p>
            <p className="text-3xl font-bold text-white">${revenueMetrics.monthlyRevenue.toLocaleString()}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Active Subscriptions</p>
            <p className="text-3xl font-bold text-white">{subscriptionStats.starter.count + subscriptionStats.professional.count + subscriptionStats.enterprise.count}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Net Revenue</p>
            <p className="text-3xl font-bold text-white">${revenueMetrics.netRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue by Type */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Revenue by Type</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Subscription Revenue</span>
                  <span className="text-white font-semibold">${revenueMetrics.subscriptionRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Per-Delivery Revenue</span>
                  <span className="text-white font-semibold">${revenueMetrics.deliveryRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Processing Fees</span>
                  <span className="text-red-400 font-semibold">-${revenueMetrics.processingFees.toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Breakdown */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Subscription Plans</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-semibold">Starter ($299/mo)</p>
                  <p className="text-gray-400 text-sm">{subscriptionStats.starter.count} customers</p>
                </div>
                <p className="text-cyan-400 font-bold">${subscriptionStats.starter.revenue.toLocaleString()}/mo</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-semibold">Professional ($699/mo)</p>
                  <p className="text-gray-400 text-sm">{subscriptionStats.professional.count} customers</p>
                </div>
                <p className="text-cyan-400 font-bold">${subscriptionStats.professional.revenue.toLocaleString()}/mo</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-semibold">Enterprise ($1,499/mo)</p>
                  <p className="text-gray-400 text-sm">{subscriptionStats.enterprise.count} customers</p>
                </div>
                <p className="text-cyan-400 font-bold">${subscriptionStats.enterprise.revenue.toLocaleString()}/mo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Monthly Revenue Trend</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
          <div className="flex items-end justify-between h-64 gap-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer" 
                     style={{ height: `${(data.revenue / 60000) * 100}%` }}
                     title={`$${data.revenue.toLocaleString()}`}>
                </div>
                <p className="text-gray-400 text-sm mt-2">{data.month}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-cyan-400 font-mono text-sm">{txn.id}</td>
                    <td className="py-3 px-4 text-white">{txn.customer}</td>
                    <td className="py-3 px-4 text-white font-semibold">${txn.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        txn.type === 'Subscription' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {txn.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        txn.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        txn.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}