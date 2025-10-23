'use client';

import { useState } from 'react';
import { DollarSign, TrendingDown, Zap, Shield, Award, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small research facilities',
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        'Up to 50 shipments/month',
        'Basic AI driver matching',
        'Real-time tracking',
        'Temperature monitoring',
        'Email support',
        'Standard reporting',
        'Mobile app access',
        'Chain of custody',
      ],
      color: 'blue',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing research organizations',
      monthlyPrice: 699,
      annualPrice: 6990,
      features: [
        'Up to 200 shipments/month',
        'Advanced AI optimization',
        'Priority driver matching',
        'Multi-site coordination',
        'Predictive analytics',
        'Priority support (24/7)',
        'Custom reporting',
        'API access',
        'EHR/LIMS integration',
        'Dedicated account manager',
      ],
      color: 'purple',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale clinical trials',
      monthlyPrice: 1499,
      annualPrice: 14990,
      features: [
        'Unlimited shipments',
        'Full AI suite with ML',
        'White-glove service',
        'Global multi-site support',
        'Advanced predictive models',
        'Dedicated support team',
        'Custom integrations',
        'SLA guarantees',
        'Blockchain chain of custody',
        'Custom AI training',
        'Regulatory compliance suite',
        'Executive reporting',
      ],
      color: 'gradient',
      popular: false,
    },
  ];

  const perDeliveryRates = [
    {
      category: 'Standard Delivery',
      trialTransport: '$45-75',
      worldCourier: '$95-125',
      marken: '$85-115',
      quickstat: '$105-145',
      savings: '40-50%',
    },
    {
      category: 'Refrigerated (2-8°C)',
      trialTransport: '$65-95',
      worldCourier: '$125-165',
      marken: '$115-155',
      quickstat: '$135-185',
      savings: '35-45%',
    },
    {
      category: 'Frozen (-20°C)',
      trialTransport: '$85-125',
      worldCourier: '$165-225',
      marken: '$155-215',
      quickstat: '$175-245',
      savings: '40-50%',
    },
    {
      category: 'Cryogenic (-196°C)',
      trialTransport: '$125-175',
      worldCourier: '$245-325',
      marken: '$225-305',
      quickstat: '$265-355',
      savings: '45-55%',
    },
    {
      category: 'Critical/Urgent',
      trialTransport: '$95-145',
      worldCourier: '$185-265',
      marken: '$175-245',
      quickstat: '$205-285',
      savings: '40-50%',
    },
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'annual') {
      const monthlyCost = plan.monthlyPrice * 12;
      const savings = monthlyCost - plan.annualPrice;
      return Math.round(savings);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <Navigation />
{/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
          <TrendingDown className="w-4 h-4" />
          <span className="text-sm font-semibold">Save 30-50% vs. Competitors</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Transparent, AI-Optimized Pricing
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Pay only for what you use. Our AI-powered platform delivers better service at a fraction of the cost.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                billingCycle === 'annual' ? 'transform translate-x-7' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          {billingCycle === 'annual' && (
            <span className="text-sm font-semibold text-green-600">Save 17%</span>
          )}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-xl border-2 ${
                plan.popular ? 'border-purple-600 relative' : 'border-gray-200'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">${getPrice(plan)}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-green-600 font-semibold mt-2">
                      Save ${getSavings(plan)}/year
                    </div>
                  )}
                  {billingCycle === 'monthly' && (
                    <div className="text-sm text-gray-500 mt-2">
                      or ${plan.annualPrice}/year (save 17%)
                    </div>
                  )}
                </div>

                <Link href="/register">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Per-Delivery Pricing Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Per-Delivery Pricing Comparison
          </h2>
          <p className="text-center text-gray-600 mb-8">
            See how much you save with Trial Transport vs. traditional competitors
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Delivery Type</th>
                  <th className="text-center py-4 px-4 font-bold text-blue-600">Trial Transport</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">World Courier</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">Marken</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">QuickSTAT</th>
                  <th className="text-center py-4 px-4 font-bold text-green-600">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {perDeliveryRates.map((rate, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">{rate.category}</td>
                    <td className="text-center py-4 px-4 font-bold text-blue-600 text-lg">{rate.trialTransport}</td>
                    <td className="text-center py-4 px-4 text-gray-600 line-through">{rate.worldCourier}</td>
                    <td className="text-center py-4 px-4 text-gray-600 line-through">{rate.marken}</td>
                    <td className="text-center py-4 px-4 text-gray-600 line-through">{rate.quickstat}</td>
                    <td className="text-center py-4 px-4 font-bold text-green-600">{rate.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why We're More Affordable</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-green-600" />
                    <span><strong>AI Optimization:</strong> Automated matching reduces overhead by 40%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span><strong>Direct Model:</strong> No middlemen or legacy infrastructure costs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span><strong>Technology-First:</strong> Modern platform built for efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold mb-2">AI-Powered</h3>
              <p className="text-sm text-blue-100">Smart matching & optimization</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Mobile Apps</h3>
              <p className="text-sm text-blue-100">iOS & Android access</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="font-bold mb-2">Temperature Control</h3>
              <p className="text-sm text-blue-100">Real-time monitoring</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">Compliance</h3>
              <p className="text-sm text-blue-100">FDA & HIPAA ready</p>
            </div>
          </div>
          <Link href="/register">
            <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center space-x-2 mx-auto">
              <span>Start Saving Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does your pricing compare to competitors?',
              a: 'We save customers 30-50% on average compared to traditional providers like World Courier, Marken, and QuickSTAT. Our AI-powered platform reduces overhead while maintaining superior service quality.',
            },
            {
              q: 'Are there any hidden fees?',
              a: 'No hidden fees. Our pricing is transparent and includes all standard features. Additional costs only apply for premium add-ons like custom integrations or white-glove services.',
            },
            {
              q: 'Can I switch plans anytime?',
              a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
            },
            {
              q: 'Do you offer volume discounts?',
              a: 'Yes, Enterprise customers receive custom pricing based on volume. Contact our sales team for a personalized quote.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise customers can also arrange invoicing.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
          <p className="text-sm text-gray-400">Trial Transport is a wholly owned entity of Clinical Research Pro Corporation.</p>
        </div>
      </footer>
    </div>
  );
}