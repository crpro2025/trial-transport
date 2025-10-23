'use client';

import { Brain, Zap, TrendingUp, Shield, Target, Sparkles, Activity, BarChart3, Cpu, Network } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function AIFeaturesPage() {
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Intelligent Driver Matching',
      description: 'Advanced ML algorithm analyzes 50+ factors to match the perfect driver for each shipment',
      accuracy: '94%',
      color: 'blue',
      features: [
        'Multi-factor scoring (proximity, certifications, performance)',
        'Real-time availability prediction',
        'Historical performance analysis',
        'Certification compatibility verification',
        'Vehicle suitability assessment',
      ],
      metrics: {
        'Match Accuracy': '94%',
        'Avg Match Time': '2.3 seconds',
        'Driver Satisfaction': '4.9/5',
      },
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Machine learning models forecast demand, optimize routes, and predict delivery times with 92% accuracy',
      accuracy: '92%',
      color: 'purple',
      features: [
        'Demand forecasting (hourly, daily, weekly)',
        'Delivery time prediction with confidence intervals',
        'Traffic pattern analysis and prediction',
        'Weather impact assessment',
        'Seasonal trend identification',
      ],
      metrics: {
        'Prediction Accuracy': '92%',
        'Forecast Horizon': '30 days',
        'Model Updates': 'Real-time',
      },
    },
    {
      icon: Target,
      title: 'Dynamic Pricing Engine',
      description: 'AI-powered pricing optimizes costs based on demand, distance, complexity, and market conditions',
      accuracy: '89%',
      color: 'green',
      features: [
        'Real-time market analysis',
        'Surge pricing during peak demand',
        'Distance and complexity-based calculation',
        'Competitor price monitoring',
        'Volume discount automation',
      ],
      metrics: {
        'Cost Savings': '30-50%',
        'Price Accuracy': '89%',
        'Market Updates': 'Every 5 min',
      },
    },
    {
      icon: Shield,
      title: 'Risk Assessment AI',
      description: 'Comprehensive risk analysis using ML to identify potential issues before they occur',
      accuracy: '91%',
      color: 'red',
      features: [
        'Multi-factor risk scoring',
        'Temperature deviation prediction',
        'Route hazard identification',
        'Driver performance risk analysis',
        'Compliance violation detection',
      ],
      metrics: {
        'Risk Detection': '91%',
        'False Positives': '<5%',
        'Prevention Rate': '87%',
      },
    },
    {
      icon: Activity,
      title: 'Quality Prediction',
      description: 'AI predicts specimen quality and viability throughout the delivery journey',
      accuracy: '88%',
      color: 'orange',
      features: [
        'Specimen degradation modeling',
        'Viability prediction algorithms',
        'Environmental impact analysis',
        'Intervention recommendations',
        'Quality score calculation',
      ],
      metrics: {
        'Viability Accuracy': '88%',
        'Early Warnings': '95%',
        'Quality Score': '0-100',
      },
    },
    {
      icon: Zap,
      title: 'Route Optimization',
      description: 'Advanced algorithms calculate optimal routes considering traffic, weather, and specimen requirements',
      accuracy: '96%',
      color: 'yellow',
      features: [
        'Multi-factor route calculation',
        'Real-time traffic integration',
        'Weather condition analysis',
        'Alternative route generation',
        'Fuel efficiency optimization',
      ],
      metrics: {
        'Time Savings': '15-25%',
        'Route Accuracy': '96%',
        'Fuel Savings': '18%',
      },
    },
  ];

  const mlModels = [
    {
      name: 'Driver Performance Predictor',
      type: 'Random Forest',
      accuracy: '93%',
      features: 150,
      training: 'Continuous',
    },
    {
      name: 'Demand Forecasting',
      type: 'LSTM Neural Network',
      accuracy: '91%',
      features: 200,
      training: 'Daily',
    },
    {
      name: 'Route Optimizer',
      type: 'Genetic Algorithm',
      accuracy: '96%',
      features: 75,
      training: 'Real-time',
    },
    {
      name: 'Risk Assessment',
      type: 'Gradient Boosting',
      accuracy: '89%',
      features: 120,
      training: 'Weekly',
    },
    {
      name: 'Quality Predictor',
      type: 'Deep Neural Network',
      accuracy: '88%',
      features: 180,
      training: 'Continuous',
    },
    {
      name: 'Pricing Engine',
      type: 'Ensemble Model',
      accuracy: '92%',
      features: 95,
      training: 'Hourly',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <Navigation />
{/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-blue-900">Powered by Advanced Machine Learning</span>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          AI That Thinks
          <span className="gradient-text"> Ahead</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our platform uses cutting-edge artificial intelligence and machine learning to optimize every aspect 
          of clinical specimen logistics. From intelligent matching to predictive analytics, AI powers everything we do.
        </p>
        <div className="flex justify-center space-x-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-600">AI Models</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600">92%</div>
            <div className="text-sm text-gray-600">Avg Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600">820+</div>
            <div className="text-sm text-gray-600">Features Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Learning</div>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, idx) => {
            const colors = getColorClasses(feature.color);
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${colors.bg} p-3 rounded-xl border ${colors.border}`}>
                      <feature.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${colors.text}`}>{feature.accuracy}</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((f, fidx) => (
                      <li key={fidx} className="flex items-start space-x-2 text-sm text-gray-700">
                        <Sparkles className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-gray-900 mb-3">Performance Metrics:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(feature.metrics).map(([key, value], midx) => (
                      <div key={midx} className={`${colors.bg} rounded-lg p-3 text-center`}>
                        <div className={`text-lg font-bold ${colors.text}`}>{value}</div>
                        <div className="text-xs text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ML Models Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-12 text-white">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Cpu className="w-5 h-5" />
              <span className="text-sm font-semibold">Machine Learning Infrastructure</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Our AI Model Suite</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Six specialized machine learning models work together to deliver unparalleled accuracy and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mlModels.map((model, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <Network className="w-8 h-8 text-blue-400" />
                  <span className="text-2xl font-bold text-green-400">{model.accuracy}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{model.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="font-semibold">{model.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Features:</span>
                    <span className="font-semibold">{model.features}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Training:</span>
                    <span className="font-semibold text-green-400">{model.training}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2.5M+</div>
              <div className="text-sm text-gray-400">Training Samples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">820+</div>
              <div className="text-sm text-gray-400">Total Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">&lt;50ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How Our AI Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Data Collection',
              description: 'Continuously gather data from shipments, drivers, weather, traffic, and more',
              icon: BarChart3,
            },
            {
              step: '2',
              title: 'Model Training',
              description: 'Machine learning models train on millions of data points to identify patterns',
              icon: Brain,
            },
            {
              step: '3',
              title: 'Real-Time Analysis',
              description: 'AI analyzes current conditions and makes predictions in milliseconds',
              icon: Zap,
            },
            {
              step: '4',
              title: 'Continuous Learning',
              description: 'Models improve automatically with every delivery, getting smarter over time',
              icon: TrendingUp,
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                {item.step}
              </div>
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">The AI Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '40% Faster',
                description: 'AI-powered matching and routing reduces delivery times significantly',
                icon: Zap,
              },
              {
                title: '30-50% Cheaper',
                description: 'Optimization algorithms reduce costs while maintaining quality',
                icon: TrendingUp,
              },
              {
                title: '99.2% Compliance',
                description: 'AI monitoring ensures temperature and regulatory compliance',
                icon: Shield,
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/register">
              <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all text-lg">
                Experience AI-Powered Logistics
              </button>
            </Link>
          </div>
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