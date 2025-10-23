'use client';

import { useState, useEffect } from 'react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';
import { 
  TrendingUp, Users, Package, DollarSign, Thermometer, 
  Clock, Star, AlertTriangle, Download, Calendar 
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      window.location.href = '/login';
    }
  }, []);

  const stats = [
    { label: 'Total Revenue', value: '$487,650', change: '+23.5%', icon: DollarSign, color: 'green' },
    { label: 'Active Users', value: '245', change: '+12.3%', icon: Users, color: 'blue' },
    { label: 'Total Deliveries', value: '1,247', change: '+18.7%', icon: Package, color: 'purple' },
    { label: 'Avg. Rating', value: '4.8★', change: '+0.2', icon: Star, color: 'yellow' },
  ];

  const performanceMetrics = [
    { label: 'Temperature Compliance', value: '99.2%', target: '99%', status: 'excellent' },
    { label: 'On-Time Delivery', value: '96.8%', target: '95%', status: 'excellent' },
    { label: 'Customer Satisfaction', value: '4.8/5', target: '4.5', status: 'excellent' },
    { label: 'Driver Utilization', value: '87%', target: '85%', status: 'good' },
  ];

  const revenueByType = [
    { type: 'Subscription', amount: '$195,060', percentage: 40 },
    { type: 'Per-Delivery', amount: '$219,443', percentage: 45 },
    { type: 'API Usage', amount: '$48,765', percentage: 10 },
    { type: 'White-Label', amount: '$24,383', percentage: 5 },
  ];

  const topDrivers = [
    { name: 'John Driver', deliveries: 89, rating: 4.9, earnings: '$8,450' },
    { name: 'Sarah Transport', deliveries: 76, rating: 4.8, earnings: '$7,220' },
    { name: 'Mike Courier', deliveries: 68, rating: 4.9, earnings: '$6,890' },
    { name: 'Lisa Delivery', deliveries: 62, rating: 4.7, earnings: '$5,980' },
  ];

  const topShippers = [
    { name: 'BioTech Research Inc.', shipments: 142, spent: '$18,450' },
    { name: 'Pharma Labs Co.', shipments: 98, spent: '$12,780' },
    { name: 'Clinical Trials LLC', shipments: 87, spent: '$11,340' },
    { name: 'Med Research Group', shipments: 76, spent: '$9,870' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavigation role="admin" />
      <DemoDataBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive platform performance metrics</p>
          </div>
          <div className="flex gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performanceMetrics.map((metric) => (
              <div key={metric.label} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-700">{metric.label}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    metric.status === 'excellent' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {metric.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Target: {metric.target}</span>
                </div>
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${
                      metric.status === 'excellent' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue by Type</h2>
            
            <div className="space-y-4">
              {revenueByType.map((item) => (
                <div key={item.type}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.type}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.percentage}% of total</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Drivers */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Drivers</h2>
            
            <div className="space-y-4">
              {topDrivers.map((driver, index) => (
                <div key={driver.name} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold text-sm">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{driver.name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                      <span>{driver.deliveries} deliveries</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {driver.rating}
                      </span>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">{driver.earnings}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Shippers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Customers</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rank</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Company</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Shipments</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Total Spent</th>
                </tr>
              </thead>
              <tbody>
                {topShippers.map((shipper, index) => (
                  <tr key={shipper.name} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-xs">
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{shipper.name}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{shipper.shipments}</td>
                    <td className="py-3 px-4 text-right font-semibold text-green-600">{shipper.spent}</td>
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