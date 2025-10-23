import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { TrialTransportLogo } from './Logo';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from './AuthContext';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/ai-features', label: 'AI Features' },
    { href: '/investors', label: 'Investors' },
    { href: '/exit-strategy', label: 'Exit Strategy' },
    { href: '/about', label: 'About' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <>
      {/* Demo Platform Banner */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b border-yellow-500/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-400 font-semibold">
              PRE-LAUNCH DEMO - Platform seeking $4M seed funding • Zero customers currently
            </span>
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      <nav className="relative z-10 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <TrialTransportLogo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${isActive(link.href) ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="hidden md:block text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-center font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export function DashboardNavigation({ userRole }: { userRole: 'admin' | 'shipper' | 'driver' }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const getNavLinks = () => {
    switch (userRole) {
      case 'admin':
        return [
          { href: '/admin/dashboard', label: 'Dashboard' },
          { href: '/admin/users', label: 'Users' },
          { href: '/admin/shipments', label: 'Shipments' },
          { href: '/admin/analytics', label: 'Analytics' },
          { href: '/admin/settings', label: 'Settings' },
        ];
      case 'shipper':
        return [
          { href: '/shipper/dashboard', label: 'Dashboard' },
          { href: '/shipper/shipments', label: 'Shipments' },
          { href: '/shipper/templates', label: 'Templates' },
          { href: '/shipper/calculator', label: 'Calculator' },
          { href: '/shipper/create-shipment', label: 'New Shipment' },
        ];
      case 'driver':
        return [
          { href: '/driver/dashboard', label: 'Dashboard' },
          { href: '/driver/available', label: 'Available' },
          { href: '/driver/training', label: 'Training' },
          { href: '/driver/profile', label: 'Profile' },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  return (
    <>
      {/* Demo Data Banner */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b border-yellow-500/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-400 font-semibold">
              DEMO PLATFORM - All data is mock/simulated
            </span>
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      <nav className="relative z-10 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <TrialTransportLogo size="sm" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href) 
                      ? 'text-cyan-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm border border-white/10 rounded-lg hover:bg-white/5"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.href)
                        ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}