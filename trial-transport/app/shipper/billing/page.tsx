'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Download, Calendar, DollarSign, TrendingUp, FileText } from 'lucide-react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';

export default function ShipperBillingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'shipper') {
      router.push('/login');
      return;
    }
    setUser(parsedUser);
  }, [router]);

  if (!user) return null;

  // Demo billing data
  const currentPlan = {
    name: 'Professional',
    price: 699,
    billingCycle: 'monthly',
    nextBillingDate: '2025-11-19',
    shipmentsIncluded: 200,
    shipmentsUsed: 142,
  };

  const paymentMethod = {
    type: 'Visa',
    last4: '4242',
    expiry: '12/2026',
  };

  const recentInvoices = [
    { id: 'INV-2025-10', date: '2025-10-01', amount: 699, status: 'Paid', downloadUrl: '#' },
    { id: 'INV-2025-09', date: '2025-09-01', amount: 699, status: 'Paid', downloadUrl: '#' },
    { id: 'INV-2025-08', date: '2025-08-01', amount: 699, status: 'Paid', downloadUrl: '#' },
    { id: 'INV-2025-07', date: '2025-07-01', amount: 299, status: 'Paid', downloadUrl: '#' },
  ];

  const deliveryCharges = [
    { id: 'DEL-001', date: '2025-10-18', description: 'Cryogenic Delivery - Boston to NYC', amount: 125, status: 'Paid' },
    { id: 'DEL-002', date: '2025-10-17', description: 'Refrigerated Delivery - Local', amount: 65, status: 'Paid' },
    { id: 'DEL-003', date: '2025-10-16', description: 'Standard Delivery', amount: 45, status: 'Paid' },
    { id: 'DEL-004', date: '2025-10-15', description: 'Frozen Delivery - Express', amount: 95, status: 'Pending' },
  ];

  const usageStats = {
    thisMonth: 142,
    lastMonth: 156,
    avgPerMonth: 148,
    totalSpent: 2796,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DemoDataBadge />
      <DashboardNavigation role="shipper" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Billing & Payments</h1>
          <p className="text-gray-400">Manage your subscription, payment methods, and invoices</p>
        </div>

        {/* Current Plan */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{currentPlan.name} Plan</h2>
              <p className="text-gray-400">Billed {currentPlan.billingCycle}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">${currentPlan.price}</p>
              <p className="text-gray-400">per month</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Shipments Used</p>
              <p className="text-2xl font-bold text-white">{currentPlan.shipmentsUsed} / {currentPlan.shipmentsIncluded}</p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" 
                     style={{ width: `${(currentPlan.shipmentsUsed / currentPlan.shipmentsIncluded) * 100}%` }}></div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Next Billing Date</p>
              <p className="text-2xl font-bold text-white">{currentPlan.nextBillingDate}</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Payment Method</p>
              <p className="text-2xl font-bold text-white">{paymentMethod.type} •••• {paymentMethod.last4}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => router.push('/shipper/billing/upgrade')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Upgrade Plan
            </button>
            <button 
              onClick={() => router.push('/shipper/billing/payment-methods')}
              className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Manage Payment Methods
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">This Month</p>
            <p className="text-3xl font-bold text-white">{usageStats.thisMonth}</p>
            <p className="text-gray-500 text-xs mt-1">shipments</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Last Month</p>
            <p className="text-3xl font-bold text-white">{usageStats.lastMonth}</p>
            <p className="text-gray-500 text-xs mt-1">shipments</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Avg Per Month</p>
            <p className="text-3xl font-bold text-white">{usageStats.avgPerMonth}</p>
            <p className="text-gray-500 text-xs mt-1">shipments</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-white">${usageStats.totalSpent}</p>
            <p className="text-gray-500 text-xs mt-1">all time</p>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Invoices</h2>
            <button 
              onClick={() => router.push('/shipper/billing/invoices')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-cyan-400 font-mono text-sm">{invoice.id}</td>
                    <td className="py-3 px-4 text-white">{invoice.date}</td>
                    <td className="py-3 px-4 text-white font-semibold">${invoice.amount}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Per-Delivery Charges */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Delivery Charges</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Delivery ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Description</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {deliveryCharges.map((charge) => (
                  <tr key={charge.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-cyan-400 font-mono text-sm">{charge.id}</td>
                    <td className="py-3 px-4 text-white">{charge.date}</td>
                    <td className="py-3 px-4 text-gray-400">{charge.description}</td>
                    <td className="py-3 px-4 text-white font-semibold">${charge.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        charge.status === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {charge.status}
                      </span>
                    </td>
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