'use client';

import { Navigation } from '@/components/Navigation';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Zap, Shield, Brain, Target, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CompetitiveAnalysisPage() {
  const router = useRouter();

  const competitors = [
    {
      name: 'Marken (UPS Healthcare)',
      position: '#1 Market Leader',
      revenue: '$800M-$1B+',
      employees: '4,000+',
      coverage: '220+ countries',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'World Courier (Cencora)',
      position: '#2 Market Position',
      revenue: '$600M-$800M',
      employees: '3,000+',
      coverage: '100+ depots',
      color: 'from-purple-600 to-purple-800',
    },
    {
      name: 'Parexel International',
      position: 'Top 5 CRO',
      revenue: '$2.5B+ (total)',
      employees: '85 offices',
      coverage: '52 countries',
      color: 'from-cyan-600 to-cyan-800',
    },
    {
      name: 'Thermo Fisher (PPD)',
      position: 'Top 3 CRO',
      revenue: '$40B+ (parent)',
      employees: 'Global',
      coverage: 'Worldwide',
      color: 'from-green-600 to-green-800',
    },
  ];

  const comparisonMatrix = [
    {
      feature: 'AI-Powered Driver Matching',
      trialTransport: { status: true, detail: '6 Models, 94% Accuracy' },
      competitors: { status: false, detail: 'Manual Assignment' },
    },
    {
      feature: 'Predictive Risk Assessment',
      trialTransport: { status: true, detail: '91% Accuracy, Proactive' },
      competitors: { status: false, detail: 'Reactive Monitoring' },
    },
    {
      feature: 'Dynamic Pricing Engine',
      trialTransport: { status: true, detail: 'Real-Time Optimization' },
      competitors: { status: false, detail: 'Fixed Pricing' },
    },
    {
      feature: 'Blockchain Chain of Custody',
      trialTransport: { status: true, detail: 'Immutable Records' },
      competitors: { status: false, detail: 'Paper-Based' },
    },
    {
      feature: 'Real-Time Route Optimization',
      trialTransport: { status: true, detail: '96% Accuracy, AI-Powered' },
      competitors: { status: false, detail: 'Manual Planning' },
    },
    {
      feature: 'Demand Forecasting',
      trialTransport: { status: true, detail: '89% Confidence, ML-Based' },
      competitors: { status: false, detail: 'Spreadsheet-Based' },
    },
    {
      feature: 'Quality Prediction',
      trialTransport: { status: true, detail: '88% Accuracy' },
      competitors: { status: false, detail: 'Not Available' },
    },
    {
      feature: 'Integrated Platform',
      trialTransport: { status: true, detail: 'Single System, 71+ APIs' },
      competitors: { status: false, detail: 'Multiple Systems' },
    },
    {
      feature: 'Temperature Compliance',
      trialTransport: { status: true, detail: '99.2%' },
      competitors: { status: true, detail: '94-98%' },
    },
    {
      feature: 'Cost Savings',
      trialTransport: { status: true, detail: '30-50% Lower' },
      competitors: { status: false, detail: 'Premium Pricing' },
    },
  ];

  const technologyGaps = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      gap: 'Competitors use manual processes',
      advantage: '6 AI models analyzing 820+ features in real-time',
      impact: '40% reduction in delays, 90% reduction in temperature deviations',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Predictive Analytics',
      gap: 'Reactive monitoring only',
      advantage: 'Proactive issue prevention with 91% accuracy',
      impact: 'Prevents 80% of potential issues before they occur',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Optimization',
      gap: 'Fixed pricing and manual routing',
      advantage: 'Real-time market-based pricing and route optimization',
      impact: '30-50% cost savings, 96% route accuracy',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Shield,
      title: 'Blockchain Verification',
      gap: 'Paper-based chain of custody',
      advantage: 'Immutable, cryptographic proof of custody',
      impact: '90% reduction in audit time, 100% compliance',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const valueProps = [
    {
      title: 'Proactive vs. Reactive',
      competitor: 'React to problems after they occur',
      trialTransport: 'Predict and prevent issues before they happen',
      impact: '80% reduction in disruptions',
    },
    {
      title: 'Intelligent vs. Manual',
      competitor: 'Human-driven decision making',
      trialTransport: 'AI-powered optimization across all operations',
      impact: '40% faster, 50% more accurate',
    },
    {
      title: 'Integrated vs. Fragmented',
      competitor: 'Multiple systems, manual coordination',
      trialTransport: 'Single platform, automated workflows',
      impact: '70% reduction in administrative burden',
    },
    {
      title: 'Transparent vs. Opaque',
      competitor: 'Limited visibility, reactive updates',
      trialTransport: 'Real-time tracking, predictive insights',
      impact: 'Complete supply chain transparency',
    },
    {
      title: 'Optimized vs. Fixed',
      competitor: 'Fixed pricing, manual processes',
      trialTransport: 'Dynamic optimization, automated efficiency',
      impact: '30-50% cost savings',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Analysis</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Deep dive into how Trial Transport compares to industry leaders and why our technology-first approach is revolutionizing clinical trial logistics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/investors')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  View Investor Materials
                </button>
                <button
                  onClick={() => window.open('/COMPETITIVE_ANALYSIS_DEEP_DIVE.md', '_blank')}
                  className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Leaders */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Major Competitors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitors.map((competitor, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${competitor.color} mb-4`}></div>
                  <h3 className="text-xl font-bold text-white mb-2">{competitor.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-cyan-400">{competitor.position}</p>
                    <p className="text-gray-400">Revenue: {competitor.revenue}</p>
                    <p className="text-gray-400">Scale: {competitor.employees}</p>
                    <p className="text-gray-400">Coverage: {competitor.coverage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Gaps */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Critical Technology Gaps</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              While competitors claim innovation, they're still using 2015 technology. Here's what they're missing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologyGaps.map((gap, index) => {
                const Icon = gap.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${gap.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{gap.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-red-400 font-semibold mb-1">❌ Competitor Gap:</p>
                        <p className="text-gray-300">{gap.gap}</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-400 font-semibold mb-1">✅ Trial Transport Advantage:</p>
                        <p className="text-gray-300">{gap.advantage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-cyan-400 font-semibold mb-1">📊 Business Impact:</p>
                        <p className="text-gray-300">{gap.impact}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison Matrix</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                      <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                      <th className="px-6 py-4 text-left text-cyan-400 font-bold">Trial Transport</th>
                      <th className="px-6 py-4 text-left text-gray-400 font-bold">Competitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonMatrix.map((item, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">{item.feature}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            {item.trialTransport.status ? (
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="text-gray-300 text-sm">{item.trialTransport.detail}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            {item.competitors.status ? (
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="text-gray-400 text-sm">{item.competitors.detail}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Unique Value Propositions</h2>
            <div className="space-y-6">
              {valueProps.map((prop, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-6">{prop.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400 font-semibold">Competitors</span>
                      </div>
                      <p className="text-gray-300">{prop.competitor}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">Trial Transport</span>
                      </div>
                      <p className="text-gray-300">{prop.trialTransport}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">Impact:</span>
                      <span className="text-white">{prop.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white text-center mb-8">Key Finding: The Industry is Stuck in 2015</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">❌ What Competitors Still Use:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Manual forecasting and planning</li>
                    <li>• Basic GPS tracking (no predictive analytics)</li>
                    <li>• Reactive (not proactive) issue resolution</li>
                    <li>• Limited real-time visibility</li>
                    <li>• No AI-powered optimization</li>
                    <li>• Fragmented systems requiring multiple platforms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">✅ What Trial Transport Delivers:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI-powered forecasting (89% accuracy)</li>
                    <li>• Predictive analytics (91% risk assessment)</li>
                    <li>• Proactive issue prevention (80% reduction)</li>
                    <li>• Real-time visibility and insights</li>
                    <li>• 6 AI models optimizing operations</li>
                    <li>• Single integrated platform (71+ APIs)</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl text-white font-semibold mb-6">
                  "We're building the platform they should have built 5 years ago."
                </p>
                <button
                  onClick={() => router.push('/investors')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
                >
                  Learn More About Our Technology
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Research Sources</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 mb-6">
                This analysis is based on extensive research from publicly available sources, including:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li>• Marken (UPS Healthcare) - Official website and company announcements</li>
                <li>• World Courier (Cencora) - Service descriptions and case studies</li>
                <li>• Parexel International - Clinical trial supply & logistics overview</li>
                <li>• Clinical Trials Supplies & Services Company Evaluation Report 2025 (Research and Markets)</li>
                <li>• Role of Technology in Shaping the 2025 Clinical Trial Supply Chain (Precision Evolution Global)</li>
                <li>• Navigating Clinical Trial Supply Management: Challenges, Trends & Smarter Strategies (Comac Medical)</li>
                <li>• Multiple industry reports and market analyses (2024-2025)</li>
              </ul>
              <p className="text-gray-500 text-sm mt-6">
                Last Updated: January 2026 | Confidence Level: High
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Learn More?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Explore our complete investor materials and see how Trial Transport is revolutionizing clinical trial logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/investors')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  View Investor Materials
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Explore Platform
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}