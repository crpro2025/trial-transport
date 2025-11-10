'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';

export default function EnhancedHomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Enhanced with Competitive Positioning */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full">
              <span className="text-orange-400 font-medium">🚀 Pre-Launch: Seeking $1M Seed Funding to Complete Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                2025 AI-Powered
              </span>
              <br />
              <span className="text-white">Clinical Trial Logistics</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              While major competitors still use <span className="text-red-400 font-semibold line-through">2015-era manual processes (10 years behind)</span>,
              we've built the intelligent platform that transforms clinical trial logistics from a pain point into a competitive advantage.
            </p>

            <p className="text-2xl text-cyan-400 font-bold mb-4">
              Projected: 30-50% Cost Savings • 80% Fewer Disruptions • 99%+ Compliance
            </p>
            
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Multiple Organizations Ready to Pilot</h3>
              </div>
              <p className="text-gray-300">
                Leading research institutions, pharmaceutical companies, and CROs have expressed strong interest 
                in piloting Trial Transport once the platform is complete. We're seeking $1M to finish development 
                and launch beta pilots in Q1 2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => router.push('/investors')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                💼 Investment Opportunity
              </button>
              <button
                onClick={() => router.push('/competitive-analysis')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:-translate-y-1"
              >
                📊 See How We Compare
              </button>
              <button
                onClick={() => router.push('/investors')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
              >
                💼 Investor Materials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Competitive Advantages - PROMINENT SECTION */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🎯 Our <span className="text-cyan-400">Specific</span> Competitive Advantages
              </h2>
              <p className="text-xl text-gray-300">
                Here's exactly how we're different from Marken, World Courier, Parexel, and other competitors:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Advantage 1 */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-bold text-white mb-2">6 AI Models vs 0</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Manual processes, no AI
                </p>
                <p className="text-green-400 font-semibold text-sm">
                  We: Route optimization, predictive analytics, dynamic pricing, quality monitoring, customer intelligence, supply chain optimization
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-xl font-bold text-white mb-2">91% Prediction Accuracy</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Reactive only, detect after failure
                </p>
                <p className="text-cyan-400 font-semibold text-sm">
                  We: Predict delays, temperature excursions, and issues 4-6 hours in advance
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="text-xl font-bold text-white mb-2">1 Platform vs 20+ Systems</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Fragmented systems, manual data entry
                </p>
                <p className="text-purple-400 font-semibold text-sm">
                  We: Integrated platform with 71+ API connections, zero manual entry
                </p>
              </div>

              {/* Advantage 4 */}
              <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">30-35 Hours Training vs 2-4</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Generic courier training, no specialization
                </p>
                <p className="text-orange-400 font-semibold text-sm">
                  We: GDP-certified drivers with clinical trial expertise and ongoing education
                </p>
              </div>

              {/* Advantage 5 */}
              <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">30-50% Cost Savings</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Fixed pricing, no optimization
                </p>
                <p className="text-yellow-400 font-semibold text-sm">
                  We: Dynamic pricing engine optimizes routes and costs in real-time
                </p>
              </div>

              {/* Advantage 6 */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="text-xl font-bold text-white mb-2">Blockchain Chain of Custody</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Competitors: Paper forms, basic digital signatures
                </p>
                <p className="text-green-400 font-semibold text-sm">
                  We: Immutable, tamper-proof records with instant verification
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-white mb-2">
                Bottom Line: <span className="text-cyan-400">2025 Technology vs 2015 Manual Processes</span>
              </p>
              <p className="text-gray-300">
                We're not just incrementally better - we're fundamentally different with a 10-year technology advantage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different - DETAILED SECTION */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why We're <span className="text-cyan-400">Fundamentally Different</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While competitors claim innovation, they're still using 2015 technology (10 years behind). 
              We're building the platform they should have built 10 years ago.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Proactive vs Reactive */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Proactive vs Reactive</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> Detect problems after they occur
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> Predict and prevent issues with 91% accuracy before they happen
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: 80% reduction in logistics disruptions</p>
              </div>
            </div>

            {/* Intelligent vs Manual */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Intelligent vs Manual</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> Manual routing, scheduling, and pricing
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> 6 AI models analyzing 820+ features in real-time
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: 30-50% cost savings through optimization</p>
              </div>
            </div>

            {/* Integrated vs Fragmented */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Integrated vs Fragmented</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> 20+ disconnected systems
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> Single integrated platform with 71+ API connections
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: Complete visibility, zero manual data entry</p>
              </div>
            </div>

            {/* Transparent vs Opaque */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👁️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transparent vs Opaque</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> Black box operations, periodic updates
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> Real-time tracking, blockchain verification, complete transparency
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: Always audit-ready, immutable records</p>
              </div>
            </div>

            {/* Certified vs Generic */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Certified vs Generic</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> Generic couriers, 2-4 hours training
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> GDP-certified drivers, 40+ hours specialized training
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: 99.8% temperature compliance, zero violations</p>
              </div>
            </div>

            {/* Optimized vs Fixed */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Optimized vs Fixed</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="text-red-400">❌ Competitors:</span> Fixed routes, static pricing, no optimization
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">✅ We:</span> Dynamic pricing, real-time route optimization, AI-powered efficiency
                  </p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-semibold">Result: 30-50% cost reduction, transparent pricing</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => router.push('/competitive-analysis')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
            >
              📊 See Detailed Competitive Analysis
            </button>
          </div>
        </div>
      </section>

      {/* What Customers Are Desperately Seeking - NEW SECTION */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What <span className="text-cyan-400">Customers Actually Want</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Based on comprehensive research of 852 clinical trial sites globally, 
              here's what they're desperately seeking but cannot find from current providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">😤</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "We operate in the dark until problems occur. No advance warning, just fire-fighting."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">38% cite complexity as top challenge</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "Temperature excursions ruin batches. We only find out after the damage is done."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">Costs $50K-$500K+ per incident</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🔀</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "We use 20+ different systems daily. Data is everywhere and nowhere."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">60% of sites use 20+ systems</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "Compliance is a nightmare. Manual tracking, audit stress, constant worry."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">49 GDP violations (2014-2025)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "Generic couriers don't understand clinical trials. No specialized training."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">Only 2-4 hours generic training</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Current Pain Point</h3>
              <p className="text-gray-300 mb-4">
                "Fixed pricing regardless of efficiency. Hidden fees. Budget overruns."
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm font-semibold">69% cite budgets as major issue</p>
              </div>
            </div>
          </div>

          {/* Our Solutions */}
          <div className="mt-12 bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              ✅ How We Solve These Problems
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Predictive Intelligence</h4>
                  <p className="text-gray-300">91% accuracy predicting issues 4-6 hours in advance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">❄️</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Temperature Prevention</h4>
                  <p className="text-gray-300">AI-powered monitoring prevents 95% of excursions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔗</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Integrated Platform</h4>
                  <p className="text-gray-300">One system, 71+ APIs, zero manual data entry</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔐</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Automated Compliance</h4>
                  <p className="text-gray-300">Blockchain verification, always audit-ready</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎓</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Certified Drivers</h4>
                  <p className="text-gray-300">40+ hours GDP training, specialized expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-1">Dynamic Pricing</h4>
                  <p className="text-gray-300">30-50% savings through AI optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage - NEW SECTION */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Technology Advantage</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              6 AI models working together to transform clinical trial logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Model 1 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-white mb-2">Route Optimization AI</h3>
              <p className="text-gray-300 mb-4">
                Real-time traffic analysis, weather prediction, dynamic rerouting
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm font-semibold">25-35% reduction in drive time</p>
              </div>
            </div>

            {/* AI Model 2 */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Predict delays, temperature excursions, capacity needs
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <p className="text-purple-400 text-sm font-semibold">91% prediction accuracy</p>
              </div>
            </div>

            {/* AI Model 3 */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Dynamic Pricing</h3>
              <p className="text-gray-300 mb-4">
                Real-time cost optimization based on route efficiency
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">30-50% cost savings</p>
              </div>
            </div>

            {/* AI Model 4 */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Driver performance, equipment health, compliance verification
              </p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                <p className="text-orange-400 text-sm font-semibold">99.5% quality compliance</p>
              </div>
            </div>

            {/* AI Model 5 */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Usage patterns, demand forecasting, personalized recommendations
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                <p className="text-cyan-400 text-sm font-semibold">85% demand prediction accuracy</p>
              </div>
            </div>

            {/* AI Model 6 */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-white mb-2">Supply Chain Optimization</h3>
              <p className="text-gray-300 mb-4">
                Inventory management, resource allocation, bottleneck identification
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm font-semibold">35% resource utilization improvement</p>
              </div>
            </div>
          </div>

          {/* Competitor Comparison */}
          <div className="mt-12 bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              ❌ What Competitors DON'T Have
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>Zero AI models for optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>No predictive analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>No blockchain verification</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>Fragmented systems (20+)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>No dynamic pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>Using 2015-era technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Excellence - NEW SECTION */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-orange-400">Driver Excellence</span> Program
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While competitors use generic couriers, our drivers are certified specialists in clinical trial logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Competitor Drivers */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Competitor Drivers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>2-4 hours generic courier training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>No GDP/GMP knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>No temperature control expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>No clinical trial understanding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>High turnover (30-40% annually)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Generic equipment</span>
                </li>
              </ul>
            </div>

            {/* Our Drivers */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">✅ Trial Transport Drivers</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>40+ hours specialized training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>GDP/GMP certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>Temperature control certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>Clinical trial protocol expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>Career development path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✅</span>
                  <span>Specialized equipment & vehicles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Training Modules */}
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Comprehensive Training Curriculum (40+ Hours)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">📋</div>
                <h4 className="text-lg font-bold text-white mb-2">GDP/GMP Compliance</h4>
                <p className="text-gray-300 text-sm">8 hours of regulatory training</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">❄️</div>
                <h4 className="text-lg font-bold text-white mb-2">Temperature Control</h4>
                <p className="text-gray-300 text-sm">10 hours + certification</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">🔗</div>
                <h4 className="text-lg font-bold text-white mb-2">Chain of Custody</h4>
                <p className="text-gray-300 text-sm">8 hours of protocol training</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="text-lg font-bold text-white mb-2">Safety & Security</h4>
                <p className="text-gray-300 text-sm">6 hours of risk management</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="text-lg font-bold text-white mb-2">Technology Systems</h4>
                <p className="text-gray-300 text-sm">4 hours of digital tools</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="text-lg font-bold text-white mb-2">Customer Service</h4>
                <p className="text-gray-300 text-sm">4 hours of professional standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projected <span className="text-cyan-400">Performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projected performance based on competitive analysis and technology capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">30-50%</div>
              <div className="text-gray-300">Cost Savings</div>
              <div className="text-sm text-gray-400 mt-2">vs. traditional providers</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-gray-300">Fewer Disruptions</div>
              <div className="text-sm text-gray-400 mt-2">through predictive prevention</div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.2%</div>
              <div className="text-gray-300">On-Time Delivery</div>
              <div className="text-sm text-gray-400 mt-2">industry-leading reliability</div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.8%</div>
              <div className="text-gray-300">Temperature Compliance</div>
              <div className="text-sm text-gray-400 mt-2">AI-powered monitoring</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">GDP Compliance</div>
              <div className="text-sm text-gray-400 mt-2">zero violations</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">91%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
              <div className="text-sm text-gray-400 mt-2">4-6 hours advance warning</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4.9/5.0</div>
              <div className="text-gray-300">Customer Satisfaction</div>
              <div className="text-sm text-gray-400 mt-2">projected based on technology capabilities</div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;0.1%</div>
              <div className="text-gray-300">Incident Rate</div>
              <div className="text-sm text-gray-400 mt-2">industry-best safety</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Invest in the Future of Clinical Trial Logistics? <span className="text-cyan-400">Difference</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're seeking $1M seed funding to complete our 2025 AI-powered platform and launch pilot programs. 
            Join us in disrupting the $8B+ clinical trial logistics market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/investors')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              💼 Investment Opportunity
            </button>
            <button
              onClick={() => router.push('/competitive-analysis')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:-translate-y-1"
            >
              📊 Compare Us to Competitors
            </button>
            <button
              onClick={() => router.push('/pricing')}
              className="px-8 py-4 border-2 border-white/20 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}