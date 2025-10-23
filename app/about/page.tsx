'use client';

import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Users, Award, Target, Zap, Globe, Shield } from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();

  const team = [
    {
      name: 'Jess Thompson',
      role: 'Chief Visionary Officer & Co-Founder',
      background: '15+ years in life sciences industry with positions at Pfizer, IQVIA, ICON, Vanderbilt, University of Washington, University of Louisville',
      expertise: 'Clinical trial operations, site management, specimen handling, regulatory compliance, extensive hands-on experience across major research institutions',
      image: '👩‍💼',
      contact: 'jess@clinicalresearchpro.com',
    },
    {
      name: 'Jason Long',
      role: 'Chief Operating Officer & Co-Founder',
      background: 'COO of Clinical Research Pro Corporation with 18+ years of sales and leadership experience. Former leadership roles at AT&T and State Farm. Proven track record growing and scaling startups.',
      expertise: 'Strategic operations, business development, sales leadership, startup growth and scaling',
      image: '👨‍💼',
      contact: 'jason@clinicalresearchpro.com | (470) 476-1038',
    },
  ];

  const advisors = [
    {
      name: 'Industry Advisors',
      role: 'Strategic Advisory Board',
      background: 'Building advisory board with clinical research, technology, and investment expertise',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Patient Safety First',
      description: 'Every decision prioritizes specimen integrity and patient outcomes',
    },
    {
      icon: Zap,
      title: 'Innovation-Driven',
      description: 'Leveraging cutting-edge AI to solve complex logistics challenges',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Accelerating medical breakthroughs by improving clinical trial efficiency',
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Committed to measurable outcomes and continuous improvement',
    },
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Trial Transport launched to revolutionize clinical trial logistics',
    },
    {
      year: 'Q4 2025',
      title: 'Platform Development',
      description: 'Building comprehensive AI-powered logistics platform',
    },
    {
      year: 'Q2 2026',
      title: 'Beta Launch',
      description: 'First customers onboarded with pilot program',
    },
    {
      year: '2027',
      title: 'Market Expansion',
      description: 'Scaling operations nationwide with 200+ customers',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trial Transport</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionizing clinical trial logistics with AI-powered solutions that ensure specimen integrity, 
              accelerate research timelines, and improve patient outcomes.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => router.push('/register')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push('/pricing')}
                className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg">
                  To accelerate medical breakthroughs by providing the most reliable, efficient, and intelligent 
                  clinical trial logistics platform in the world.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <Award className="w-12 h-12 text-purple-400 mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg">
                  A future where clinical trial logistics never delays life-saving treatments, and every specimen 
                  reaches its destination with perfect integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Industry veterans with deep expertise in clinical research, healthcare operations, and technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.background}</p>
                  <p className="text-gray-500 text-xs mb-3">{member.expertise}</p>
                  {member.contact && (
                    <p className="text-cyan-400 text-sm font-semibold mt-4">
                      📧 {member.contact}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Team Wins */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why This Team Wins</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">🎯 Deep Industry Expertise</h3>
                <p className="text-gray-400 text-sm">15+ years hands-on experience in clinical trials across Pfizer, IQVIA, ICON, and major research institutions. Team has lived the pain points we're solving.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">🤝 Industry Relationships</h3>
                <p className="text-gray-400 text-sm">Extensive network at Pfizer, IQVIA, ICON, Vanderbilt, University of Washington, and other major organizations. Direct access to potential customers and partners.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">⚡ Execution Capability</h3>
                <p className="text-gray-400 text-sm">Proven track record in healthcare operations, sales leadership at AT&T and State Farm, and technology commercialization. 18+ years scaling startups and leading teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                    <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                        <div className="text-cyan-400 font-bold text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Join Us in Revolutionizing Clinical Research</h2>
              <p className="text-gray-300 text-lg mb-8">
                Whether you're a research organization, driver, or investor, we'd love to connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/register')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:info@trialtransport.com'}
                  className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}