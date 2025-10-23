'use client';

import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { CheckCircle, Circle, Clock, Rocket, Target, Zap } from 'lucide-react';

export default function RoadmapPage() {
  const router = useRouter();

  const roadmap = [
    {
      phase: 'Phase 1: Foundation',
      period: 'Q3 2023 - Q4 2023',
      status: 'completed',
      items: [
        { title: 'MVP Platform Launch', status: 'completed', description: 'Core shipment creation and tracking functionality' },
        { title: 'Boston Metro Launch', status: 'completed', description: 'Initial market with 50+ drivers' },
        { title: 'Basic AI Matching', status: 'completed', description: 'Driver-shipment matching algorithm v1' },
        { title: 'HIPAA Compliance', status: 'completed', description: 'Full regulatory compliance achieved' },
        { title: 'First 100 Deliveries', status: 'completed', description: '99% temperature compliance rate' },
      ],
    },
    {
      phase: 'Phase 2: AI Optimization',
      period: 'Q1 2024 - Q2 2024',
      status: 'completed',
      items: [
        { title: 'Advanced AI Engine', status: 'completed', description: '6 specialized ML models deployed' },
        { title: 'Dynamic Pricing', status: 'completed', description: '30-50% cost savings achieved' },
        { title: 'Route Optimization', status: 'completed', description: '96% accuracy in route planning' },
        { title: 'Predictive Analytics', status: 'completed', description: '91% accuracy in demand forecasting' },
        { title: 'Real-time Tracking', status: 'completed', description: 'Live GPS and temperature monitoring' },
      ],
    },
    {
      phase: 'Phase 3: Scale & Growth',
      period: 'Q3 2024 - Q4 2024',
      status: 'in-progress',
      items: [
        { title: 'Series A Funding', status: 'in-progress', description: '$8M raise to fuel expansion' },
        { title: '5 Metro Expansion', status: 'in-progress', description: 'NYC, SF, LA, Chicago, Philadelphia' },
        { title: 'API Marketplace', status: 'completed', description: '71+ endpoints for integrations' },
        { title: 'White-Label Solution', status: 'completed', description: 'Enterprise customization platform' },
        { title: '1,000+ Deliveries/Month', status: 'in-progress', description: 'Scaling operations rapidly' },
      ],
    },
    {
      phase: 'Phase 4: Enterprise & International',
      period: 'Q1 2025 - Q4 2025',
      status: 'planned',
      items: [
        { title: 'Enterprise Partnerships', status: 'planned', description: 'Top 10 pharma company contracts' },
        { title: 'International Expansion', status: 'planned', description: 'Launch in UK, Germany, Canada' },
        { title: 'Blockchain Integration', status: 'planned', description: 'Immutable chain of custody' },
        { title: 'Mobile Apps', status: 'planned', description: 'Native iOS and Android apps' },
        { title: 'Advanced IoT', status: 'planned', description: '10,000+ smart sensors deployed' },
      ],
    },
    {
      phase: 'Phase 5: Market Leadership',
      period: '2026 - 2027',
      status: 'planned',
      items: [
        { title: 'Series B Funding', status: 'planned', description: '$25M raise for global expansion' },
        { title: 'Global Coverage', status: 'planned', description: '20+ countries, 50+ cities' },
        { title: 'AI Research Lab', status: 'planned', description: 'Dedicated R&D for logistics AI' },
        { title: 'Autonomous Vehicles', status: 'planned', description: 'Self-driving specimen transport pilot' },
        { title: 'Market Leader', status: 'planned', description: '#1 platform for clinical logistics' },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-blue-400 bg-blue-500/20';
      case 'planned': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />;
      case 'in-progress': return <Clock className="w-5 h-5" />;
      case 'planned': return <Circle className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const keyMetrics2025 = [
    { label: 'Target Revenue', value: '$16.4M', growth: '+180% YoY' },
    { label: 'Target Customers', value: '2,056', growth: '+181% YoY' },
    { label: 'Metro Areas', value: '10', growth: '+100%' },
    { label: 'Deliveries/Month', value: '15,000+', growth: '+200%' },
  ];

  const strategicPriorities = [
    {
      icon: Rocket,
      title: 'Geographic Expansion',
      description: 'Launch in 5 new major metro areas by Q2 2025',
      timeline: 'Q1-Q2 2025',
    },
    {
      icon: Target,
      title: 'Enterprise Sales',
      description: 'Sign 3 top-10 pharma companies as anchor customers',
      timeline: 'Q1-Q3 2025',
    },
    {
      icon: Zap,
      title: 'AI Enhancement',
      description: 'Improve ML model accuracy to 95%+ across all models',
      timeline: 'Ongoing',
    },
    {
      icon: CheckCircle,
      title: 'Profitability',
      description: 'Achieve unit economics profitability by Q4 2025',
      timeline: 'Q4 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
        {/* Navigation */}
        <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}{/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Product Roadmap
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our strategic vision for becoming the world's leading clinical trial logistics platform
            </p>
          </div>
        </section>

        {/* 2025 Targets */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">2025 Key Targets</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {keyMetrics2025.map((metric, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-cyan-400 mb-1">{metric.value}</p>
                  <p className="text-xs text-green-400">{metric.growth}</p>
                </div>
              ))}
            </div>

            {/* Strategic Priorities */}
            <h2 className="text-3xl font-bold text-white text-center mb-8">Strategic Priorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {strategicPriorities.map((priority, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                  <priority.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{priority.title}</h3>
                  <p className="text-gray-300 mb-3">{priority.description}</p>
                  <p className="text-sm text-cyan-400">{priority.timeline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Roadmap */}
        <section className="py-12 bg-gradient-to-b from-transparent to-[#0f172a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Detailed Roadmap</h2>
            <div className="space-y-8">
              {roadmap.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{phase.phase}</h3>
                      <p className="text-gray-400">{phase.period}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(phase.status)}`}>
                      {phase.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <div className={`mt-1 ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-term Vision */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Long-term Vision (2028+)</h2>
              <p className="text-xl text-gray-300 mb-8">
                By 2028, Trial Transport will be the global standard for clinical trial logistics, operating in 20+ countries, handling 100,000+ deliveries monthly, and accelerating medical breakthroughs worldwide through AI-powered optimization and uncompromising quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-3xl font-bold text-cyan-400 mb-2">$147M</p>
                  <p className="text-gray-400">Annual Revenue (2029)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-3xl font-bold text-green-400 mb-2">18,500+</p>
                  <p className="text-gray-400">Total Customers</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-3xl font-bold text-purple-400 mb-2">20+</p>
                  <p className="text-gray-400">Countries</p>
                </div>
              </div>
              <button
                onClick={() => router.push('/register')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Join Our Journey
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}