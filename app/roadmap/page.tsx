'use client';

import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { CheckCircle, Circle, Clock, Rocket, Target, Zap } from 'lucide-react';

export default function RoadmapPage() {
  const router = useRouter();

  const roadmap = [
    {
      phase: 'Phase 1: Platform Development',
      period: 'Q4 2025 (Current)',
      status: 'in-progress',
      items: [
        { title: 'Core Platform Architecture', status: 'completed', description: 'Technology stack and system design finalized' },
        { title: 'AI Models Development', status: 'in-progress', description: '6 AI models for optimization and prediction' },
        { title: 'Driver Training Program', status: 'completed', description: 'Comprehensive curriculum designed and documented' },
        { title: 'Competitive Analysis', status: 'completed', description: 'Deep market research and positioning strategy' },
        { title: 'Seed Funding Round', status: 'in-progress', description: 'Seeking $1M to complete platform' },
      ],
    },
    {
      phase: 'Phase 2: Beta Launch & Pilots',
      period: 'Q1 2026',
      status: 'planned',
      items: [
        { title: 'Platform MVP Launch', status: 'planned', description: 'Core shipment creation and tracking functionality' },
        { title: 'Beta Pilot Programs', status: 'planned', description: '5-10 research institutions and pharma companies' },
        { title: 'Driver Recruitment', status: 'planned', description: 'Onboard and certify first 20-30 drivers' },
        { title: 'Boston Metro Launch', status: 'planned', description: 'Initial market with focused operations' },
        { title: 'First 100 Deliveries', status: 'planned', description: 'Validate model and gather feedback' },
      ],
    },
    {
      phase: 'Phase 3: Market Validation',
      period: 'Q2 2026',
      status: 'planned',
      items: [
        { title: 'Expand Pilot Programs', status: 'planned', description: '10+ active customers' },
        { title: 'Achieve Target Metrics', status: 'planned', description: '99%+ compliance, 30-50% cost savings' },
        { title: 'Refine AI Models', status: 'planned', description: 'Optimize based on real-world data' },
        { title: 'Customer Success Stories', status: 'planned', description: 'Document case studies and ROI' },
        { title: 'Prepare for Scale', status: 'planned', description: 'Operations infrastructure and processes' },
      ],
    },
    {
      phase: 'Phase 4: Scale Operations',
      period: 'Q3-Q4 2026',
      status: 'planned',
      items: [
        { title: 'Series A Preparation', status: 'planned', description: 'Prepare for $4-6M raise based on traction' },
        { title: 'Expand to 3-5 Cities', status: 'planned', description: 'NYC, SF, Philadelphia, or similar metros' },
        { title: 'Driver Network Growth', status: 'planned', description: '100+ certified drivers across markets' },
        { title: 'API Integrations', status: 'planned', description: 'Connect with major EDC and CTMS systems' },
        { title: '1,000+ Deliveries/Month', status: 'planned', description: 'Scale operations and prove unit economics' },
      ],
    },
    {
      phase: 'Phase 5: Market Leadership',
      period: '2027+',
      status: 'planned',
      items: [
        { title: 'Series A Funding', status: 'planned', description: '$4-6M raise for national expansion' },
        { title: 'National Coverage', status: 'planned', description: '10-15 major metro areas' },
        { title: 'Enterprise Partnerships', status: 'planned', description: 'Top pharma and CRO contracts' },
        { title: 'Advanced Features', status: 'planned', description: 'Blockchain, mobile apps, advanced IoT' },
        { title: 'Market Leader Position', status: 'planned', description: 'Top 3 platform for clinical logistics' },
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

  const currentFocus = [
    {
      icon: Rocket,
      title: 'Complete Platform Development',
      description: 'Finish building core platform with all 6 AI models and essential features',
      priority: 'Critical',
    },
    {
      icon: Target,
      title: 'Secure Seed Funding',
      description: 'Raise $1M to complete development and launch beta pilot programs',
      priority: 'Critical',
    },
    {
      icon: Zap,
      title: 'Launch Beta Pilots',
      description: 'Begin pilot programs with 5-10 research institutions in Q1 2026',
      priority: 'High',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 font-medium">🗺️ Product Roadmap</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Journey</span> to Market Leadership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From platform development to becoming the leading AI-powered clinical trial logistics platform
          </p>
        </div>

        {/* Current Status Banner */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-white">Current Status: Q4 2025</h2>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            We're currently in platform development phase, seeking $1M seed funding to complete the platform 
            and launch beta pilot programs in Q1 2026. Multiple research institutions and pharmaceutical 
            companies have expressed strong interest in piloting once the platform is ready.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {currentFocus.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs font-semibold text-orange-400">{item.priority}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {roadmap.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`px-4 py-2 rounded-full ${getStatusColor(phase.status)} flex items-center gap-2`}>
                  {getStatusIcon(phase.status)}
                  <span className="font-semibold">{phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                  <p className="text-gray-400">{phase.period}</p>
                </div>
              </div>

              {/* Phase Items */}
              <div className="ml-8 border-l-2 border-white/10 pl-8 space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative">
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#0a0e27] border-2 border-white/20"></div>
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <div className={`px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)} flex items-center gap-1`}>
                          {getStatusIcon(item.status)}
                          <span>{item.status === 'completed' ? 'Done' : item.status === 'in-progress' ? 'Active' : 'Planned'}</span>
                        </div>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're seeking $1M seed funding to complete the platform and launch pilot programs. 
              Be part of disrupting the $8B+ clinical trial logistics market.
            </p>
            <button
              onClick={() => router.push('/investors')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              💼 View Investment Opportunity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}