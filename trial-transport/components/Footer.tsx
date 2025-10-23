'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trial Transport<sup className="text-xs">℠</sup>
            </h3>
            <p className="text-gray-400 mb-4">
              AI-powered clinical trial logistics platform revolutionizing specimen transport with 99.2% temperature compliance and 30-50% cost savings.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              A subsidiary of Clinical Research Pro Corporation
            </p>
            
            {/* Sister Companies */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-3 text-sm">Our Family of Companies</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.clinicalresearchpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Image 
                    src="/crpro-logo.png" 
                    alt="Clinical Research Pro" 
                    width={140} 
                    height={48}
                    className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a 
                  href="https://www.clinopsatsea.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Clin Ops at Sea →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/ai-features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:jason@clinicalresearchpro.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  jason@clinicalresearchpro.com
                </a>
              </li>
              <li>
                <a href="tel:+14704761038" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  (470) 476-1038
                </a>
              </li>
              <li>
                <a href="mailto:jess@clinicalresearchpro.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  jess@clinicalresearchpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

          {/* Regulatory Compliance */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <h3 className="text-white font-semibold mb-4">Regulatory Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">ICH E6 (R3) Compliant</h4>
                <p className="text-gray-400 text-sm mb-3">Platform designed in compliance with ICH E6 (R3) Good Clinical Practice guidelines for biospecimen tracking.</p>
                <a href="https://database.ich.org/sites/default/files/ICH_E6%28R3%29_GCP-Principles_Draft_2023_0519.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Guidelines →</a>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">FDA 21 CFR Part 11</h4>
                <p className="text-gray-400 text-sm mb-3">Electronic records and signatures compliance for clinical trial documentation.</p>
                <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">View Guidelines →</a>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">HIPAA Compliant</h4>
                <p className="text-gray-400 text-sm mb-3">Full compliance with HIPAA regulations for PHI handling and biospecimen data security.</p>
                <a href="https://www.hhs.gov/hipaa/for-professionals/index.html" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-sm">View Guidelines →</a>
              </div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8">
              <h4 className="text-blue-400 font-semibold mb-2">Biospecimen Tracking Requirements</h4>
              <p className="text-gray-300 text-sm">ICH E6 (R3) Section 5.13 requires comprehensive records of biospecimen collection, handling, processing, storage, and disposal. Trial Transport℠ provides complete chain of custody documentation, real-time temperature monitoring, and audit trails.</p>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="mb-1">
                © {currentYear} Clinical Research Pro Corporation. All rights reserved.
              </p>
              <p>
                Trial Transport<sup className="text-xs">℠</sup> is a service mark of Clinical Research Pro Corporation.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}