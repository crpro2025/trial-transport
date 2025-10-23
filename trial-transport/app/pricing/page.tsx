'use client';

import { useState } from 'react';
import { DollarSign, TrendingDown, Zap, Shield, Award, Check, ArrowRight, CreditCard, Percent } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      description: 'Pay as you go - No commitment',
      monthlyPrice: 0,
      credits: 0,
      discount: 0,
      features: [
        'Pay per delivery (full price)',
        'No monthly commitment',
        'Real-time tracking',
        'Temperature monitoring',
        'Email support',
        'Standard reporting',
        'Mobile app access',
        'Chain of custody',
      ],
      color: 'gray',
      popular: false,
      cta: 'Get Started Free',
    },
    {
      name: 'Starter',
      description: 'Perfect for small research facilities',
      monthlyPrice: 199,
      credits: 250,
      discount: 15,
      features: [
        '$250 in monthly credits',
        '15% off ALL deliveries',
        'Credits roll over 90 days',
        'AI driver matching',
        'Priority tracking',
        'Advanced reporting',
        'Priority email support',
        'API access',
      ],
      color: 'blue',
      popular: false,
      cta: 'Start 14-Day Trial',
    },
    {
      name: 'Professional',
      description: 'For growing research organizations',
      monthlyPrice: 499,
      credits: 750,
      discount: 20,
      features: [
        '$750 in monthly credits',
        '20% off ALL deliveries',
        'Credits roll over 90 days',
        'Advanced AI optimization',
        'Multi-site coordination',
        'Predictive analytics',
        '24/7 priority support',
        'Custom reporting',
        'EHR/LIMS integration',
        'Dedicated account manager',
      ],
      color: 'purple',
      popular: true,
      cta: 'Start 14-Day Trial',
    },
    {
      name: 'Enterprise',
      description: 'For large-scale clinical trials',
      monthlyPrice: 999,
      credits: 2000,
      discount: 25,
      features: [
        '$2,000 in monthly credits',
        '25% off ALL deliveries',
        'Credits roll over 90 days',
        'Full AI suite with ML',
        'White-glove service',
        'Global multi-site support',
        'Dedicated support team',
        'Custom integrations',
        'SLA guarantees',
        'Blockchain chain of custody',
        'Custom AI training',
        'Executive reporting',
      ],
      color: 'gradient',
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  const deliveryPricing = [
    {
      type: 'Standard Delivery',
      basePrice: 95,
      description: 'Room temperature specimens',
    },
    {
      type: 'Refrigerated (2-8°C)',
      basePrice: 125,
      description: 'Temperature-controlled specimens',
    },
    {
      type: 'Frozen (-20°C)',
      basePrice: 165,
      description: 'Frozen specimens',
    },
    {
      type: 'Cryogenic (-80°C)',
      basePrice: 235,
      description: 'Ultra-low temperature specimens',
    },
    {
      type: 'Critical/Rush',
      basePrice: 175,
      description: 'Time-sensitive delivery',
    },
  ];

  const calculateSavings = (basePrice: number, discount: number) => {
    const discountedPrice = basePrice * (1 - discount / 100);
    const savings = basePrice - discountedPrice;
    return {
      original: basePrice,
      discounted: Math.round(discountedPrice),
      savings: Math.round(savings),
      percentage: discount,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Percent className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Hybrid Pricing Model - Save 15-25% on Every Delivery</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transparent, Flexible Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose a plan that fits your needs. Get monthly credits + ongoing discounts on all deliveries.
            <br />
            <span className="text-blue-400 font-semibold">Credits roll over for 90 days!</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <CreditCard className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">Monthly Credits Included</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <Percent className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">15-25% Discount on All Deliveries</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <TrendingDown className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-300">20-30% Cheaper Than Competitors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 backdrop-blur-xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                  : 'bg-white/5 border border-white/10'
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${plan.monthlyPrice}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                {plan.credits > 0 && (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-green-400">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm font-semibold">${plan.credits} in credits</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Percent className="w-4 h-4" />
                      <span className="text-sm font-semibold">{plan.discount}% off all deliveries</span>
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/register'}
                className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Pricing Table */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Per-Delivery Pricing</h2>
          <p className="text-xl text-gray-300">
            Base prices before your subscription discount
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-white font-semibold">Delivery Type</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Base Price</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">With 15% Off</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">With 20% Off</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">With 25% Off</th>
                </tr>
              </thead>
              <tbody>
                {deliveryPricing.map((item, index) => {
                  const savings15 = calculateSavings(item.basePrice, 15);
                  const savings20 = calculateSavings(item.basePrice, 20);
                  const savings25 = calculateSavings(item.basePrice, 25);

                  return (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-white font-semibold">{item.type}</div>
                          <div className="text-gray-400 text-sm">{item.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-white font-semibold">${item.basePrice}</div>
                        <div className="text-gray-400 text-xs">Basic Plan</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-blue-400 font-semibold">${savings15.discounted}</div>
                        <div className="text-green-400 text-xs">Save ${savings15.savings}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-purple-400 font-semibold">${savings20.discounted}</div>
                        <div className="text-green-400 text-xs">Save ${savings20.savings}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-pink-400 font-semibold">${savings25.discounted}</div>
                        <div className="text-green-400 text-xs">Save ${savings25.savings}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>* Additional fees may apply for distance over 50 miles, after-hours, weekends, or holidays</p>
          <p className="mt-2">* Driver earnings are 65% of base price (before discounts)</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How the Hybrid Model Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Choose Your Plan</h3>
              <p className="text-gray-300">
                Select a monthly plan that fits your volume. Get instant credits and a discount rate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Use Credits First</h3>
              <p className="text-gray-300">
                Your monthly credits automatically apply to deliveries. Credits roll over for 90 days!
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Ongoing Discounts</h3>
              <p className="text-gray-300">
                Even after credits are used, you still get 15-25% off every delivery!
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4">Example: Professional Plan</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Monthly fee: <span className="text-white font-semibold">$499</span></p>
              <p>• Included credits: <span className="text-green-400 font-semibold">$750</span></p>
              <p>• Discount rate: <span className="text-blue-400 font-semibold">20% off</span></p>
              <p className="pt-4 border-t border-white/10">
                <strong className="text-white">First 10 deliveries:</strong> Covered by credits (avg $75/delivery with discount)
              </p>
              <p>
                <strong className="text-white">Additional deliveries:</strong> 20% off (pay $76 instead of $95)
              </p>
              <p className="pt-4 text-green-400 font-semibold">
                Total savings vs competitors: 30-40% per delivery!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 pb-32 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Start with a 14-day free trial. No credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}