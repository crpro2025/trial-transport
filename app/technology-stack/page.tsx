'use client';

import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function TechnologyStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 font-medium">🤖 2025 AI-Powered Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technology <span className="text-purple-400">Stack</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While competitors use 2015-era manual processes (10 years behind), we've built a cutting-edge 2025 AI-powered platform 
            that transforms clinical trial logistics from reactive to proactive.
          </p>
        </div>

        {/* The Gap: 2015 vs 2025 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 2015 Era */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <span>❌</span> Competitor Technology (2015-Era)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Manual Route Planning</div>
                  <div className="text-gray-400 text-sm">No real-time optimization</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Reactive Monitoring</div>
                  <div className="text-gray-400 text-sm">Detect problems after they occur</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Fragmented Systems (20+)</div>
                  <div className="text-gray-400 text-sm">Multiple disconnected platforms</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Historical Reporting</div>
                  <div className="text-gray-400 text-sm">No real-time visibility</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Zero AI Capabilities</div>
                  <div className="text-gray-400 text-sm">No predictive analytics</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Manual Data Entry</div>
                  <div className="text-gray-400 text-sm">Error-prone, time-consuming</div>
                </div>
              </li>
            </ul>
          </div>

          {/* 2024 Platform */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span>✅</span> Trial Transport (2025 AI-Powered)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">AI-Powered Route Optimization</div>
                  <div className="text-gray-400 text-sm">Real-time traffic & weather analysis</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Predictive Analytics</div>
                  <div className="text-gray-400 text-sm">Prevent issues before they occur (91% accuracy)</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Integrated Platform (71+ APIs)</div>
                  <div className="text-gray-400 text-sm">Single system, complete visibility</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Real-Time Intelligence</div>
                  <div className="text-gray-400 text-sm">Live monitoring and alerts</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">6 AI Models (820+ Features)</div>
                  <div className="text-gray-400 text-sm">Comprehensive optimization</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Zero Manual Data Entry</div>
                  <div className="text-gray-400 text-sm">Fully automated data capture</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Our 6 AI Models */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our 6 AI Models Working Together
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Model 1 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-white mb-2">Route Optimization AI</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Real-time traffic analysis, weather prediction integration, dynamic rerouting, multi-stop optimization
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm font-semibold">25-35% reduction in drive time</p>
              </div>
            </div>

            {/* AI Model 2 */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics Engine</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Delay prediction, temperature excursion prevention, capacity forecasting, risk assessment
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <p className="text-purple-400 text-sm font-semibold">91% prediction accuracy</p>
              </div>
            </div>

            {/* AI Model 3 */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Dynamic Pricing Algorithm</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Real-time cost optimization, route efficiency pricing, volume-based optimization, transparent models
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">30-50% cost savings</p>
              </div>
            </div>

            {/* AI Model 4 */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Monitoring AI</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Driver performance analysis, equipment health monitoring, compliance verification, anomaly detection
              </p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                <p className="text-orange-400 text-sm font-semibold">99.5% quality compliance</p>
              </div>
            </div>

            {/* AI Model 5 */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Intelligence AI</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Usage pattern analysis, predictive demand forecasting, personalized recommendations, proactive support
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                <p className="text-cyan-400 text-sm font-semibold">85% demand prediction accuracy</p>
              </div>
            </div>

            {/* AI Model 6 */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-white mb-2">Supply Chain Optimization</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Inventory management, demand forecasting, resource allocation, bottleneck identification
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm font-semibold">35% resource utilization improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blockchain Chain of Custody */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Blockchain Chain of Custody
          </h2>
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Why Blockchain?</h3>
                <p className="text-gray-300 mb-4">
                  Traditional chain of custody relies on paper forms or basic digital signatures that can be:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Lost or damaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Altered or tampered with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Difficult to verify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Not audit-ready</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-gray-300 mb-4">
                  Blockchain-verified chain of custody provides:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Immutable, tamper-proof records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Complete transparency for all stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Instant verification (seconds, not hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Always audit-ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            71+ API Integrations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Clinical Trial Systems</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• EDC (Medidata, Oracle)</li>
                <li>• CTMS (Veeva, Oracle)</li>
                <li>• IRT/IWRS</li>
                <li>• eTMF Systems</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Enterprise Systems</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• SAP, Oracle ERP</li>
                <li>• Microsoft Dynamics</li>
                <li>• NetSuite, Workday</li>
                <li>• WMS Systems</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Logistics & Tracking</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• GPS Telematics</li>
                <li>• Temperature Monitoring</li>
                <li>• IoT Sensors</li>
                <li>• Fleet Management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Analytics & BI</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Tableau, Power BI</li>
                <li>• Looker, Qlik</li>
                <li>• Snowflake, Redshift</li>
                <li>• BigQuery, Synapse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-Time Monitoring */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Real-Time Monitoring & Alerts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Monitoring Capabilities</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">📍</span>
                  <div>
                    <div className="font-semibold">GPS Tracking</div>
                    <div className="text-sm text-gray-400">Real-time updates every 30 seconds</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">🌡️</span>
                  <div>
                    <div className="font-semibold">Temperature Monitoring</div>
                    <div className="text-sm text-gray-400">Continuous logging every 1 minute</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">🔗</span>
                  <div>
                    <div className="font-semibold">Chain of Custody</div>
                    <div className="text-sm text-gray-400">Real-time handoff verification</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">👤</span>
                  <div>
                    <div className="font-semibold">Driver Performance</div>
                    <div className="text-sm text-gray-400">Safe driving and compliance monitoring</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Instant Alerts For</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">⚠️</span>
                  <div>
                    <div className="font-semibold">Temperature Excursions</div>
                    <div className="text-sm text-gray-400">Predicted or actual</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🚨</span>
                  <div>
                    <div className="font-semibold">Route Deviations</div>
                    <div className="text-sm text-gray-400">Automatic detection and alerts</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">⏰</span>
                  <div>
                    <div className="font-semibold">Delivery Delays</div>
                    <div className="text-sm text-gray-400">4-6 hours advance warning</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🔧</span>
                  <div>
                    <div className="font-semibold">Equipment Failures</div>
                    <div className="text-sm text-gray-400">Predictive maintenance alerts</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technology Performance Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">&lt;30s</div>
              <div className="text-gray-300">Real-Time Quote Generation</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">30s</div>
              <div className="text-gray-300">GPS Update Frequency</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1min</div>
              <div className="text-gray-300">Temperature Logging</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Platform Uptime</div>
            </div>
          </div>
        </div>

        {/* Competitive Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technology Comparison
          </h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-white font-bold">Feature</th>
                  <th className="pb-4 text-green-400 font-bold">Trial Transport</th>
                  <th className="pb-4 text-red-400 font-bold">Competitors</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3">AI Models</td>
                  <td className="py-3 text-green-400">✅ 6 models</td>
                  <td className="py-3 text-red-400">❌ 0</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Predictive Analytics</td>
                  <td className="py-3 text-green-400">✅ 91% accuracy</td>
                  <td className="py-3 text-red-400">❌ None</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Real-Time Optimization</td>
                  <td className="py-3 text-green-400">✅ Yes</td>
                  <td className="py-3 text-red-400">❌ No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Dynamic Pricing</td>
                  <td className="py-3 text-green-400">✅ Yes</td>
                  <td className="py-3 text-red-400">❌ Fixed</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Blockchain Verification</td>
                  <td className="py-3 text-green-400">✅ Yes</td>
                  <td className="py-3 text-red-400">❌ No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Integrated Platform</td>
                  <td className="py-3 text-green-400">✅ Single (71+ APIs)</td>
                  <td className="py-3 text-red-400">❌ Fragmented (20+)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Real-Time Tracking</td>
                  <td className="py-3 text-green-400">✅ 30-sec updates</td>
                  <td className="py-3 text-red-400">⚠️ Periodic</td>
                </tr>
                <tr>
                  <td className="py-3">Temperature Monitoring</td>
                  <td className="py-3 text-green-400">✅ Predictive</td>
                  <td className="py-3 text-red-400">⚠️ Reactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the Technology Advantage
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              See how our AI-powered platform transforms clinical trial logistics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <Link
                href="/competitive-analysis"
                className="px-8 py-4 border-2 border-white/20 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all"
              >
                Compare to Competitors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}