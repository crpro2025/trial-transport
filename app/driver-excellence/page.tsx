'use client';

import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function DriverExcellencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full">
            <span className="text-orange-400 font-medium">🎓 Setting the Gold Standard</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Driver <span className="text-orange-400">Excellence</span> Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While competitors use generic couriers with minimal training, we've built a comprehensive 
            certification program that transforms drivers into clinical trial logistics specialists.
          </p>
        </div>

        {/* Key Differentiator */}
        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              40+ Hours Specialized Training vs. 2-4 Hours Generic Training
            </h2>
            <p className="text-xl text-gray-300">
              Our drivers aren't just delivery personnel - they're certified professionals who understand 
              GDP compliance, temperature control, chain of custody, and the critical importance of their role.
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Competitor Drivers */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <span>❌</span> Competitor Drivers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">2-4 Hours Generic Training</div>
                  <div className="text-gray-400 text-sm">Basic courier operations only</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">No GDP/GMP Knowledge</div>
                  <div className="text-gray-400 text-sm">Unaware of regulatory requirements</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">No Temperature Expertise</div>
                  <div className="text-gray-400 text-sm">Basic handling, no specialized knowledge</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">No Clinical Trial Understanding</div>
                  <div className="text-gray-400 text-sm">Treat as regular packages</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">High Turnover (30-40%)</div>
                  <div className="text-gray-400 text-sm">No career development path</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <div className="font-semibold text-white">Generic Equipment</div>
                  <div className="text-gray-400 text-sm">Standard delivery vehicles</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Our Drivers */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span>✅</span> Trial Transport Drivers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">40+ Hours Specialized Training</div>
                  <div className="text-gray-400 text-sm">Comprehensive clinical trial logistics curriculum</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">GDP/GMP Certified</div>
                  <div className="text-gray-400 text-sm">Full regulatory compliance training</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Temperature Control Certification</div>
                  <div className="text-gray-400 text-sm">10 hours + hands-on cold chain training</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Clinical Trial Protocol Expertise</div>
                  <div className="text-gray-400 text-sm">Understand trial phases and requirements</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Career Development Path</div>
                  <div className="text-gray-400 text-sm">3 certification levels with advancement</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <div className="font-semibold text-white">Specialized Equipment</div>
                  <div className="text-gray-400 text-sm">Temperature-controlled vehicles, IoT monitoring</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Training Curriculum */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Comprehensive Training Curriculum (40+ Hours)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-white mb-2">GDP/GMP Compliance</h3>
              <div className="text-cyan-400 font-semibold mb-3">8 Hours</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Good Distribution Practice requirements</li>
                <li>• Documentation and record-keeping</li>
                <li>• Quality management systems</li>
                <li>• Regulatory compliance (FDA, EMA, ICH)</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">❄️</div>
              <h3 className="text-xl font-bold text-white mb-2">Temperature Control</h3>
              <div className="text-purple-400 font-semibold mb-3">10 Hours + Certification</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Cold chain management principles</li>
                <li>• Temperature monitoring systems</li>
                <li>• Emergency response procedures</li>
                <li>• Equipment operation and maintenance</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-xl font-bold text-white mb-2">Chain of Custody</h3>
              <div className="text-green-400 font-semibold mb-3">8 Hours</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Clinical trial phases and requirements</li>
                <li>• Chain of custody procedures</li>
                <li>• Sample handling and labeling</li>
                <li>• Site coordination protocols</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Safety & Security</h3>
              <div className="text-orange-400 font-semibold mb-3">6 Hours</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Product security measures</li>
                <li>• Emergency response training</li>
                <li>• Incident reporting procedures</li>
                <li>• Risk management</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Technology Systems</h3>
              <div className="text-cyan-400 font-semibold mb-3">4 Hours</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• GPS tracking systems</li>
                <li>• Temperature monitoring devices</li>
                <li>• Mobile app operation</li>
                <li>• Real-time communication tools</li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Service</h3>
              <div className="text-yellow-400 font-semibold mb-3">4 Hours</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Professional appearance and conduct</li>
                <li>• Effective communication skills</li>
                <li>• Site etiquette and protocols</li>
                <li>• Confidentiality and HIPAA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certification Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Three-Level Certification System
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Level 1 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🥉</div>
                <h3 className="text-xl font-bold text-white">Level 1</h3>
                <div className="text-cyan-400 font-semibold">Certified Clinical Trial Driver</div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• All 6 modules completed</li>
                <li>• 85%+ assessment scores</li>
                <li>• 20 supervised deliveries</li>
                <li>• Background checks cleared</li>
                <li>• Equipment operation certified</li>
              </ul>
            </div>

            {/* Level 2 */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🥈</div>
                <h3 className="text-xl font-bold text-white">Level 2</h3>
                <div className="text-purple-400 font-semibold">Senior Clinical Trial Driver</div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 6+ months experience</li>
                <li>• 100+ successful deliveries</li>
                <li>• Zero major incidents</li>
                <li>• Advanced certifications</li>
                <li>• Can train new drivers</li>
              </ul>
            </div>

            {/* Level 3 */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🥇</div>
                <h3 className="text-xl font-bold text-white">Level 3</h3>
                <div className="text-yellow-400 font-semibold">Master Clinical Trial Driver</div>
              </div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 2+ years experience</li>
                <li>• 500+ successful deliveries</li>
                <li>• 99.5%+ on-time rate</li>
                <li>• Zero compliance violations</li>
                <li>• Handle ultra-complex shipments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specialized Equipment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Specialized Equipment & Vehicles
          </h2>
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Vehicle Requirements</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Temperature-controlled cargo area (-80°C to +25°C)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Redundant cooling/heating systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Real-time temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>GPS tracking devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Backup power systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Security systems and locks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Standard Equipment</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>IoT temperature monitoring sensors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Validated cold chain packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Digital signature capture tablets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Emergency response kits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Personal protective equipment (PPE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Professional branded uniforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Real-Time Performance Monitoring
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99%+</div>
              <div className="text-gray-300">On-Time Delivery Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Temperature Compliance</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Chain of Custody Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">4.8/5.0</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the Driver Excellence Difference
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Our certified drivers are the foundation of reliable, compliant clinical trial logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
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