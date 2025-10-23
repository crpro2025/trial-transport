'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Package, Users, Settings, DollarSign, BarChart, FileText, Award, Calendar, User, LogOut, ArrowLeft, MessageSquare, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface DashboardNavigationProps {
  role: 'admin' | 'shipper' | 'driver';
}

export function DashboardNavigation({ role }: DashboardNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    // Clear any auth data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
    }
    // Redirect to home
    router.push('/');
  };

  const adminLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: Home },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/shipments', label: 'Shipments', icon: Package },
    { href: '/admin/analytics', label: 'Analytics', icon: TrendingUp },
    { href: '/admin/billing', label: 'Billing', icon: DollarSign },
    { href: '/admin/profile', label: 'Profile', icon: User },
  ];

  const shipperLinks = [
    { href: '/shipper/dashboard', label: 'Dashboard', icon: Home },
    { href: '/shipper/shipments', label: 'Shipments', icon: Package },
    { href: '/shipper/templates', label: 'Templates', icon: FileText },
    { href: '/shipper/calculator', label: 'Calculator', icon: BarChart },
    { href: '/shipper/create-shipment', label: 'New Shipment', icon: Package },
    { href: '/shipper/messages', label: 'Messages', icon: MessageSquare },
    { href: '/shipper/billing', label: 'Billing', icon: DollarSign },
    { href: '/shipper/profile', label: 'Profile', icon: User },
  ];

  const driverLinks = [
    { href: '/driver/dashboard', label: 'Dashboard', icon: Home },
    { href: '/driver/available', label: 'Available', icon: Package },
    { href: '/driver/messages', label: 'Messages', icon: MessageSquare },
    { href: '/driver/training', label: 'Training', icon: Award },
    { href: '/driver/profile', label: 'Profile', icon: User },
    { href: '/driver/availability', label: 'Availability', icon: Calendar },
    { href: '/driver/earnings', label: 'Earnings', icon: DollarSign },
  ];

  const links = role === 'admin' ? adminLinks : role === 'shipper' ? shipperLinks : driverLinks;

  return (
    <>
      {/* Top Bar with Logo and Actions */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo and Company Links */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 group">
                <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                <span className="text-white font-semibold hover:text-cyan-400 transition-colors">
                  Trial Transport℠
                </span>
              </Link>
              
              <div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/20">
                <a 
                  href="https://www.clinicalresearchpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Image 
                    src="/crpro-logo.png" 
                    alt="Clinical Research Pro" 
                    width={120} 
                    height={40}
                    className="h-6 w-auto"
                  />
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="https://www.clinopsatsea.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Clin Ops at Sea
                </a>
              </div>
            </div>

            {/* Right: User Info and Logout */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm text-gray-300 capitalize">{role} Portal</p>
                <p className="text-xs text-gray-500">
                  {typeof window !== 'undefined' && localStorage.getItem('userEmail')}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all border border-red-500/30 hover:border-red-500/50"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 py-4 px-3 border-b-2 text-sm font-medium whitespace-nowrap transition-all ${
                    isActive(link.href)
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}