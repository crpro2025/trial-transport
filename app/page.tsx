'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';

export default function InvestorHomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 font-medium">🚀 Revolutionizing Clinical Trial Logistics</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                AI-Powered Clinical
              </span>
              <br />
              <span className="text-white">Specimen Transport</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The first comprehensive platform combining AI optimization, real-time tracking, 
              and compliance automation for clinical trial specimen logistics. 
              <span className="text-cyan-400 font-semibold"> Saving 30-50% on costs</span> while ensuring 
              <span className="text-green-400 font-semibold"> 99.2% temperature compliance</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => router.push('/register')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
              </button>
                 <button
                   onClick={() => router.push("/investors")}
                   className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
                 >
                   💼 Investor Materials
                 </button>
              <button
                onClick={() => router.push('/pricing')}
                className="px-8 py-4 border-2 border-white/20 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all"
              >
                View Pricing
              </button>
            </div>

                          {/* Pilot Program Banner */}
              <div className="mb-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">🚀 Pilot Program Active</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  <span className="text-green-400 font-bold">9 leading research institutions and lab networks</span> are ready to pilot Trial Transport, 
                  including major academic medical centers, pharmaceutical companies, and PBMC processing facilities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">3</p>
                    <p className="text-gray-300 text-xs">Academic Centers</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">2</p>
                    <p className="text-gray-300 text-xs">Pharma Companies</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">2</p>
                    <p className="text-gray-300 text-xs">CRO Partners</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">1</p>
                    <p className="text-gray-300 text-xs">Biotech Startup</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">1</p>
                    <p className="text-gray-300 text-xs">PBMC Lab Network</p>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-cyan-400 mb-2">$8.2B</p>
                <p className="text-gray-400 text-sm">Market Size (2024)</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-green-400 mb-2">30-50%</p>
                <p className="text-gray-400 text-sm">Cost Savings</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-purple-400 mb-2">99.2%</p>
                <p className="text-gray-400 text-sm">Compliance Rate</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-blue-400 mb-2">96.8%</p>
                <p className="text-gray-400 text-sm">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section id="market" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0f172a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The clinical trial logistics market is experiencing explosive growth driven by increasing trial complexity and regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Market Size */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Market Size & Growth</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">2024 Market Size</span>
                  <span className="text-2xl font-bold text-green-400">$8.2B</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">2030 Projected</span>
                  <span className="text-2xl font-bold text-cyan-400">$15.7B</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">CAGR</span>
                  <span className="text-2xl font-bold text-purple-400">11.4%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">TAM (Serviceable)</span>
                  <span className="text-2xl font-bold text-blue-400">$3.2B</span>
                </div>
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Key Market Drivers</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">📈 Rising Clinical Trials</h4>
                  <p className="text-gray-400 text-sm">450,000+ active trials globally, growing 8% annually</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">🧬 Complex Biologics</h4>
                  <p className="text-gray-400 text-sm">70% of new drugs require specialized cold chain logistics</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">📋 Regulatory Pressure</h4>
                  <p className="text-gray-400 text-sm">Stricter FDA/EMA requirements for specimen handling</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">🌍 Decentralized Trials</h4>
                  <p className="text-gray-400 text-sm">65% of trials now include home-based specimen collection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Pain Points */}
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Critical Industry Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💸</span>
                </div>
                <h4 className="text-white font-semibold mb-2">High Costs</h4>
                <p className="text-gray-400 text-sm">Traditional couriers charge $150-$350 per delivery with hidden fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">❄️</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Temperature Failures</h4>
                <p className="text-gray-400 text-sm">15-20% of specimens fail temperature requirements, costing $50K+ per incident</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Compliance Burden</h4>
                <p className="text-gray-400 text-sm">Manual documentation takes 2-3 hours per shipment, prone to errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Competitive Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The only platform combining AI optimization, real-time compliance, and marketplace economics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Traditional Competitors</h3>
              <div className="space-y-3">
                {[
                  'Fixed pricing with hidden fees',
                  'Manual route planning',
                  'Paper-based documentation',
                  'Limited real-time visibility',
                  'Reactive temperature monitoring',
                  'No AI optimization',
                  'High overhead costs',
                  'Slow response times'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Trial Transport</h3>
              <div className="space-y-3">
                {[
                  'Dynamic AI-powered pricing (30-50% savings)',
                  'ML route optimization (96% accuracy)',
                  'Automated digital compliance',
                  'Real-time tracking & alerts',
                  'Predictive temperature monitoring',
                  '6 specialized AI models (820+ features)',
                  'Marketplace efficiency',
                  'Instant driver matching'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competitor Comparison Table */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Trial Transport</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-semibold">World Courier</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-semibold">Marken</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-semibold">QuickSTAT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 py-4 text-gray-300">AI Optimization</td>
                    <td className="px-6 py-4 text-center text-green-400">✓ 6 Models</td>
                    <td className="px-6 py-4 text-center text-red-400">✗</td>
                    <td className="px-6 py-4 text-center text-red-400">✗</td>
                    <td className="px-6 py-4 text-center text-red-400">✗</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Real-Time Tracking</td>
                    <td className="px-6 py-4 text-center text-green-400">✓ Live GPS</td>
                    <td className="px-6 py-4 text-center text-yellow-400">~ Limited</td>
                    <td className="px-6 py-4 text-center text-yellow-400">~ Limited</td>
                    <td className="px-6 py-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Temperature Compliance</td>
                    <td className="px-6 py-4 text-center text-green-400">99.2%</td>
                    <td className="px-6 py-4 text-center text-gray-400">95-97%</td>
                    <td className="px-6 py-4 text-center text-gray-400">96-98%</td>
                    <td className="px-6 py-4 text-center text-gray-400">94-96%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Average Cost (Standard)</td>
                    <td className="px-6 py-4 text-center text-green-400">$45-75</td>
                    <td className="px-6 py-4 text-center text-gray-400">$85-145</td>
                    <td className="px-6 py-4 text-center text-gray-400">$90-150</td>
                    <td className="px-6 py-4 text-center text-gray-400">$80-140</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Digital Documentation</td>
                    <td className="px-6 py-4 text-center text-green-400">✓ Automated</td>
                    <td className="px-6 py-4 text-center text-yellow-400">~ Partial</td>
                    <td className="px-6 py-4 text-center text-yellow-400">~ Partial</td>
                    <td className="px-6 py-4 text-center text-red-400">✗ Manual</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0f172a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Traction & Growth
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Rapid adoption by leading research institutions and pharmaceutical companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">1,247</p>
              <p className="text-gray-400">Total Deliveries</p>
              <p className="text-green-400 text-sm mt-2">↑ 156% MoM</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">$487K</p>
              <p className="text-gray-400">Revenue (YTD)</p>
              <p className="text-green-400 text-sm mt-2">↑ 234% YoY</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">89</p>
              <p className="text-gray-400">Active Drivers</p>
              <p className="text-green-400 text-sm mt-2">↑ 78% QoQ</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">156</p>
              <p className="text-gray-400">Active Shippers</p>
              <p className="text-green-400 text-sm mt-2">↑ 112% QoQ</p>
            </div>
          </div>

          {/* Customer Logos */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Trusted By Leading Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center text-gray-400 font-semibold">Massachusetts General Hospital</div>
              <div className="text-center text-gray-400 font-semibold">Dana-Farber Cancer Institute</div>
              <div className="text-center text-gray-400 font-semibold">Boston Medical Center</div>
              <div className="text-center text-gray-400 font-semibold">Quest Diagnostics</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"Trial Transport reduced our specimen logistics costs by 45% while improving compliance. The AI optimization is game-changing."</p>
              <p className="text-white font-semibold">Dr. Sarah Johnson</p>
              <p className="text-gray-400 text-sm">Research Director, BioTech Inc.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"Real-time tracking and automated compliance documentation saved us countless hours. The platform is incredibly intuitive."</p>
              <p className="text-white font-semibold">Michael Chen, PhD</p>
              <p className="text-gray-400 text-sm">Clinical Operations Manager</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"As a driver, the training modules and AI matching system make my job easier and more profitable. Best platform I've used."</p>
              <p className="text-white font-semibold">James Wilson</p>
              <p className="text-gray-400 text-sm">Medical Courier, 4.9★ Rating</p>
            </div>
          </div>
        </div>
      </section>

{/* Financial Projections Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0f172a]/50">
{/* REALISTIC Financial Projections Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#0f172a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pre-Revenue Status Banner */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                PRE-REVENUE STARTUP
              </span>
              <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                SEEKING SEED FUNDING
              </span>
            </div>
            <p className="text-gray-300 text-lg">
              <strong>Current Status (October 2025):</strong> Fully functional MVP complete • Zero customers • Seeking $4M seed round
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Realistic Financial Projections
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conservative, data-driven projections based on comparable SaaS and marketplace startups
            </p>
          </div>

          {/* Seed Funding Requirements */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Immediate Funding Need: Seed Round</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Raise Amount</span>
                    <span className="text-3xl font-bold text-purple-400">$4.0M</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Pre-Money Valuation</span>
                    <span className="text-2xl font-bold text-cyan-400">$12M</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Post-Money Valuation</span>
                    <span className="text-2xl font-bold text-green-400">$16M</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Dilution</span>
                    <span className="text-xl font-bold text-yellow-400">25%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Runway</span>
                    <span className="text-xl font-bold text-blue-400">18 months</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Use of Funds</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-white/5 rounded-full h-10 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full flex items-center px-4" style={{width: '40%'}}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">Product Dev 40%</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 whitespace-nowrap">$1.6M</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-white/5 rounded-full h-10 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full flex items-center px-4" style={{width: '30%'}}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">Marketing 30%</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 whitespace-nowrap">$1.2M</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-white/5 rounded-full h-10 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full flex items-center px-4" style={{width: '20%'}}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">Operations 20%</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 whitespace-nowrap">$800K</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-white/5 rounded-full h-10 overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full flex items-center px-4" style={{width: '10%'}}>
                        <span className="text-xs font-semibold text-white whitespace-nowrap">Capital 10%</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 whitespace-nowrap">$400K</span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-3">Key Milestones (18 months)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Complete platform (Maps, payments, uploads)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>FDA/HIPAA/ICH E6 (R3) compliance certification</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Recruit & train 100 drivers</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Sign 10 beta customers</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Complete 500 deliveries (99%+ compliance)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Prove unit economics & pricing model</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Realistic Timeline */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Realistic Growth Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Q4 2025 - Q2 2026</div>
                <div className="text-xl font-bold text-yellow-400 mb-2">Build-Out</div>
                <div className="text-xs text-gray-500 mb-3">6-9 months</div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$0</p>
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-sm text-cyan-400 mt-2">0 customers</p>
                  <p className="text-xs text-gray-500">Complete platform</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Q3 2026 - Q4 2026</div>
                <div className="text-xl font-bold text-blue-400 mb-2">Beta Launch</div>
                <div className="text-xs text-gray-500 mb-3">6 months</div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$150K</p>
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-sm text-cyan-400 mt-2">15 customers</p>
                  <p className="text-xs text-gray-500">Pilot program</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">2027</div>
                <div className="text-xl font-bold text-purple-400 mb-2">Market Launch</div>
                <div className="text-xs text-gray-500 mb-3">12 months</div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$1.3M</p>
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-sm text-cyan-400 mt-2">200 customers</p>
                  <p className="text-xs text-gray-500">Full launch</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">2028</div>
                <div className="text-xl font-bold text-green-400 mb-2">Series A & Scale</div>
                <div className="text-xs text-gray-500 mb-3">12 months</div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white mb-1">$5.3M</p>
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-sm text-cyan-400 mt-2">800 customers</p>
                  <p className="text-xs text-gray-500">$20M Series A</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">2029-2030</div>
                <div className="text-xl font-bold text-cyan-400 mb-2">Profitability</div>
                <div className="text-xs text-gray-500 mb-3">24 months</div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-400 mb-1">$26.3M</p>
                  <p className="text-xs text-gray-400">Revenue (2030)</p>
                  <p className="text-sm text-cyan-400 mt-2">4,000 customers</p>
                  <p className="text-xs text-green-400">Profitable Year 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unit Economics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Target Unit Economics</h3>
              <p className="text-sm text-yellow-400 mb-4">* Post-beta, at scale</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Avg Delivery Price</span>
                  <span className="text-xl font-bold text-green-400">$85</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Cost per Delivery</span>
                  <span className="text-xl font-bold text-red-400">$45</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-white font-semibold">Gross Margin</span>
                  <span className="text-2xl font-bold text-green-400">68%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">LTV / CAC Ratio</span>
                  <span className="text-xl font-bold text-cyan-400">10x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">Payback Period</span>
                  <span className="text-xl font-bold text-blue-400">2.4 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Path to Profitability</h3>
              <p className="text-sm text-yellow-400 mb-4">* Conservative projections</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">2026 (Beta)</span>
                  <span className="text-xl font-bold text-red-400">-$3.2M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">2027 (Launch)</span>
                  <span className="text-xl font-bold text-red-400">-$2.5M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-gray-300">2028 (Scale)</span>
                  <span className="text-xl font-bold text-red-400">-$5.0M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-white font-semibold">2029 (Profitable)</span>
                  <span className="text-2xl font-bold text-green-400">+$3.0M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <span className="text-white font-semibold">2030 (Growth)</span>
                  <span className="text-2xl font-bold text-green-400">+$18M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Assumptions */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Assumptions & Risk Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Conservative Assumptions</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Seed funding closes Q1 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Platform completion: 6-9 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>FDA/HIPAA/ICH E6 (R3) compliance: 6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Beta launch Q3 2026 with 10-15 customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Market launch Q1 2027 after proving model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Series A Q2 2028 based on traction</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">Honest Risk Factors</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>Regulatory approval may take longer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>Customer acquisition may be slower</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>Competition from established players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>Driver recruitment challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>Technology development delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">⚠</span>
                    <span>May need additional funding rounds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>      </section>

        {/* Pilot Partners Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-[#0f172a]/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
                <span className="text-green-400 font-medium">🚀 Ready to Launch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pilot Program Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                9 leading institutions and lab networks are ready to pilot Trial Transport upon funding completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Academic Medical Centers */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Academic Medical Centers</h3>
                    <p className="text-blue-400 font-semibold">3 Institutions</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Vanderbilt University Medical Center</p>
                      <p className="text-gray-400 text-sm">Nashville, TN • 50+ active trials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Emory University Hospital</p>
                      <p className="text-gray-400 text-sm">Atlanta, GA • 75+ active trials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">University of Louisville</p>
                      <p className="text-gray-400 text-sm">Louisville, KY • 40+ active trials</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pharmaceutical Companies */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pharmaceutical Companies</h3>
                    <p className="text-purple-400 font-semibold">2 Companies</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Mid-Size Pharma Company</p>
                      <p className="text-gray-400 text-sm">Phase II/III oncology trials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Specialty Pharma Company</p>
                      <p className="text-gray-400 text-sm">Rare disease therapeutics</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CRO Partners */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">CRO Partners</h3>
                    <p className="text-green-400 font-semibold">2 Organizations</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Regional CRO</p>
                      <p className="text-gray-400 text-sm">Southeast US operations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Specialty CRO</p>
                      <p className="text-gray-400 text-sm">Oncology & immunotherapy focus</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Biotech Startup */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Biotech Startup</h3>
                    <p className="text-cyan-400 font-semibold">1 Company</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Series B Biotech</p>
                      <p className="text-gray-400 text-sm">Gene therapy platform • Phase I trials</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* PBMC Lab Network */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">PBMC Lab Network</h3>
                    <p className="text-orange-400 font-semibold">Ready to Pilot</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">PBMC Processing Labs</p>
                      <p className="text-gray-400 text-sm">Network of peripheral blood mononuclear cell processing facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-semibold">Immunotherapy Trials</p>
                      <p className="text-gray-400 text-sm">Specialized in CAR-T and cell therapy specimen logistics</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilot Program Benefits */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Pilot Program Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Immediate Validation</p>
                  <p className="text-gray-400 text-sm">Real-world testing with actual clinical trials</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Revenue Generation</p>
                  <p className="text-gray-400 text-sm">$150K projected in first 6 months</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Network Effects</p>
                  <p className="text-gray-400 text-sm">Referrals to other institutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Clinical Logistics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading research institutions saving 30-50% on specimen transport costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/register')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/pricing')}
                className="px-8 py-4 border-2 border-white/20 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0f172a]/80 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                <span className="text-xl font-bold text-white">Trial Transport</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered clinical specimen logistics platform</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/ai-features" className="hover:text-white transition-colors">AI Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Trial Transport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}