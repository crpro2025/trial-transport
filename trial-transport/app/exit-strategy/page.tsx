'use client';

import { Navigation } from '@/components/Navigation';
import { TrendingUp, Building2, DollarSign, Users, Target, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExitStrategyPage() {
  const strategicAcquirers = [
    {
      category: 'Major Logistics Companies',
      icon: '📦',
      companies: [
        { name: 'FedEx', rationale: 'Expanding healthcare logistics division', valuation: '$150M-$300M' },
        { name: 'UPS', rationale: 'Already acquired Marken for $800M (2016)', valuation: '$200M-$400M' },
        { name: 'DHL', rationale: 'Growing clinical trial logistics segment', valuation: '$150M-$350M' }
      ]
    },
    {
      category: 'Healthcare & Laboratory Services',
      icon: '🏥',
      companies: [
        { name: 'Quest Diagnostics', rationale: 'Vertical integration of specimen logistics', valuation: '$250M-$500M' },
        { name: 'LabCorp', rationale: 'Enhancing clinical trial services', valuation: '$250M-$500M' },
        { name: 'Sonic Healthcare', rationale: 'Global expansion strategy', valuation: '$200M-$400M' }
      ]
    },
    {
      category: 'Pharmaceutical Companies',
      icon: '💊',
      companies: [
        { name: 'Pfizer', rationale: 'In-house clinical trial logistics', valuation: '$300M-$600M' },
        { name: 'Novartis', rationale: 'Digital transformation initiative', valuation: '$300M-$600M' },
        { name: 'Roche', rationale: 'Personalized medicine logistics', valuation: '$350M-$700M' }
      ]
    },
    {
      category: 'Contract Research Organizations (CROs)',
      icon: '🔬',
      companies: [
        { name: 'IQVIA', rationale: 'Technology-enabled services expansion', valuation: '$400M-$800M' },
        { name: 'PPD (Thermo Fisher)', rationale: 'End-to-end trial solutions', valuation: '$350M-$700M' },
        { name: 'Syneos Health', rationale: 'Integrated biopharmaceutical solutions', valuation: '$300M-$600M' }
      ]
    }
  ];

  const comparableExits = [
    {
      company: 'Marken',
      acquirer: 'UPS',
      year: 2016,
      value: '$800M',
      multiple: '4.2x revenue',
      description: 'Clinical trial logistics and biospecimen management'
    },
    {
      company: 'PCI Pharma Services',
      acquirer: 'Kohlberg & Company',
      year: 2017,
      value: '$2.0B',
      multiple: '3.8x revenue',
      description: 'Clinical trial supply and logistics services'
    },
    {
      company: 'Catalent',
      acquirer: 'IPO (NYSE: CTLT)',
      year: 2014,
      value: '$1.5B',
      multiple: 'IPO valuation',
      description: 'Clinical supply services and logistics'
    },
    {
      company: 'Almac Group',
      acquirer: 'Private Equity',
      year: 2019,
      value: '$500M',
      multiple: '3.5x revenue',
      description: 'Clinical trial supply chain services'
    }
  ];

  const exitTimelines = [
    {
      year: '2027-2028',
      stage: 'Early Exit',
      valuation: '$150M-$300M',
      multiple: '3-5x revenue',
      scenario: 'Strategic acquisition by logistics or healthcare company',
      likelihood: 'Medium',
      investors: '10-20x return'
    },
    {
      year: '2029-2030',
      stage: 'Growth Exit',
      valuation: '$400M-$800M',
      multiple: '4-6x revenue',
      scenario: 'Acquisition by major pharma or CRO',
      likelihood: 'High',
      investors: '25-50x return'
    },
    {
      year: '2031-2032',
      stage: 'IPO or Late Exit',
      valuation: '$1B-$2B+',
      multiple: '5-8x revenue',
      scenario: 'Public offering or strategic acquisition at scale',
      likelihood: 'Medium-High',
      investors: '60-125x return'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 font-medium">💎 Exit Strategy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Clear Path to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Liquidity</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multiple exit opportunities with strategic acquirers across logistics, healthcare, pharma, and CRO sectors
          </p>
        </div>

        {/* Exit Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">$150M-$2B+</h3>
            <p className="text-gray-300">Exit Valuation Range</p>
            <p className="text-green-400 text-sm mt-2">Depending on timing & scale</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">12+</h3>
            <p className="text-gray-300">Strategic Acquirers</p>
            <p className="text-blue-400 text-sm mt-2">Across 4 categories</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">10-125x</h3>
            <p className="text-gray-300">Investor Return</p>
            <p className="text-purple-400 text-sm mt-2">Based on exit timing</p>
          </div>
        </div>

        {/* Strategic Acquirers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Strategic Acquirers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicAcquirers.map((category, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.companies.map((company, cidx) => (
                    <div key={cidx} className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{company.name}</h4>
                        <span className="text-green-400 font-semibold text-sm">{company.valuation}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{company.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparable Exits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Comparable Exits</h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Company</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Acquirer</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Year</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Value</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Multiple</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparableExits.map((exit, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{exit.company}</p>
                          <p className="text-gray-400 text-sm">{exit.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{exit.acquirer}</td>
                      <td className="px-6 py-4 text-gray-300">{exit.year}</td>
                      <td className="px-6 py-4 text-green-400 font-bold">{exit.value}</td>
                      <td className="px-6 py-4 text-cyan-400">{exit.multiple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Exit Timelines */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Exit Timeline Scenarios</h2>
          <div className="space-y-6">
            {exitTimelines.map((timeline, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Timeline</p>
                    <p className="text-white font-bold text-lg">{timeline.year}</p>
                    <p className="text-cyan-400 text-sm">{timeline.stage}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Valuation</p>
                    <p className="text-green-400 font-bold text-lg">{timeline.valuation}</p>
                    <p className="text-gray-400 text-sm">{timeline.multiple}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-400 text-sm mb-1">Scenario</p>
                    <p className="text-white">{timeline.scenario}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Likelihood</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      timeline.likelihood === 'High' ? 'bg-green-500/20 text-green-400' :
                      timeline.likelihood === 'Medium-High' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {timeline.likelihood}
                    </span>
                    <p className="text-purple-400 font-semibold mt-2">{timeline.investors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Attractive */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why We're an Attractive Acquisition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Technology Moat</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>6 proprietary AI models with 820+ features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Real-time tracking and monitoring platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Blockchain-verified chain of custody</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Market Position</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Only comprehensive AI-powered solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>30-50% cost savings vs competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>99.2% temperature compliance rate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
              <CheckCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customer Base</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>8 pilot partners ready (academic, pharma, CRO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>PBMC lab network for expansion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Strong network effects and referrals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>ICH E6 (R3) compliant platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>FDA 21 CFR Part 11 ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>HIPAA compliant infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Discuss Exit Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Multiple paths to liquidity with strategic acquirers across logistics, healthcare, pharma, and CRO sectors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investors">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all">
                View Investor Materials
              </button>
            </Link>
            <a href="mailto:jason@clinicalresearchpro.com">
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}