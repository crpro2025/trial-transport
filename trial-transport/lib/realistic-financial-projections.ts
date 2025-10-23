// REALISTIC Financial Projections for Trial Transport
// Current Status: PRE-REVENUE STARTUP (October 2025)
// Seeking: Seed/Series A Funding

export const realisticFinancialProjections = {
  // Current Status
  currentStatus: {
    stage: 'Pre-Revenue MVP',
    date: 'October 2025',
    customers: 0,
    revenue: 0,
    employees: 6, // Core founding team
    funding: 0, // Bootstrap/friends & family
    mvpStatus: 'Complete and functional',
  },

  // Seed Funding Round (Immediate Need)
  seedRound: {
    amount: 4000000, // $4M target
    valuation: 12000000, // $12M pre-money
    postMoney: 16000000,
    dilution: 25,
    timeline: 'Q4 2025 - Q1 2026',
    use: {
      productDevelopment: 1600000, // 40% - Complete platform
      marketingSales: 1200000, // 30% - Marketing & BD
      operations: 800000, // 20% - Ops setup
      workingCapital: 400000, // 10% - Runway
    },
    runway: 18, // months
    milestones: [
      'Complete platform development (Google Maps, payments, etc.)',
      'Achieve FDA/HIPAA full compliance certification',
      'Recruit and train 100 drivers across 2 metro areas',
      'Sign 10 beta customers for pilot program',
      'Complete 500 successful deliveries with 99%+ compliance',
      'Prove unit economics and refine pricing model',
    ],
  },

  // Phase 1: Build-Out (Q4 2025 - Q2 2026)
  phase1BuildOut: {
    period: 'Q4 2025 - Q2 2026',
    duration: '6-9 months',
    customers: 0,
    revenue: 0,
    burn: 220000, // Monthly burn
    activities: [
      'Complete platform features (maps, uploads, payments)',
      'FDA/HIPAA compliance certification',
      'Driver recruitment and training program',
      'Beta customer outreach and onboarding',
      'Marketing website and materials',
      'Operations infrastructure setup',
    ],
  },

  // Phase 2: Beta Launch (Q3 2026 - Q4 2026)
  phase2BetaLaunch: {
    period: 'Q3 2026 - Q4 2026',
    duration: '6 months',
    customers: {
      start: 0,
      end: 15,
      growth: 'Pilot program with select customers',
    },
    drivers: {
      start: 0,
      end: 75,
    },
    deliveries: {
      monthly: 250, // Average
      total: 1500,
    },
    revenue: {
      monthly: 25000, // Average
      total: 150000,
      arr: 300000, // Run rate
    },
    metrics: {
      avgDeliveryPrice: 100, // Higher during beta
      costPerDelivery: 65, // Higher during ramp
      grossMargin: 35, // Lower during beta
    },
  },

  // Phase 3: Market Launch (2027)
  phase3MarketLaunch: {
    period: '2027',
    customers: {
      q1: 25,
      q2: 50,
      q3: 100,
      q4: 200,
    },
    drivers: {
      q1: 100,
      q2: 150,
      q3: 250,
      q4: 400,
    },
    deliveries: {
      q1: 1000, // Monthly average
      q2: 2000,
      q3: 4000,
      q4: 7000,
    },
    revenue: {
      q1: 400000, // Quarterly
      q2: 900000,
      q3: 1800000,
      q4: 3200000,
      annual: 6300000, // $6.3M
      arr: 12800000, // $12.8M run rate by end
    },
    metrics: {
      avgDeliveryPrice: 90,
      costPerDelivery: 50,
      grossMargin: 44,
      burnRate: 400000, // Monthly
      ebitda: -2500000, // Still investing
    },
  },

  // Phase 4: Series A & Scale (2028)
  phase4SeriesA: {
    period: '2028',
    seriesA: {
      timing: 'Q2 2028',
      amount: 20000000, // $20M
      valuation: 80000000, // $80M pre-money
      postMoney: 100000000,
      dilution: 20,
    },
    customers: {
      start: 200,
      end: 800,
    },
    drivers: {
      start: 400,
      end: 1500,
    },
    deliveries: {
      monthly: 15000, // Average
      annual: 180000,
    },
    revenue: {
      annual: 28000000, // $28M
      arr: 35000000, // $35M run rate
    },
    metrics: {
      avgDeliveryPrice: 85,
      costPerDelivery: 45,
      grossMargin: 47,
      ebitda: -5000000, // Still investing heavily
    },
    expansion: {
      metros: 8,
      states: 5,
    },
  },

  // Phase 5: Growth & Profitability (2029-2030)
  phase5Growth: {
    year2029: {
      customers: 2000,
      drivers: 3500,
      deliveries: 400000, // Annual
      revenue: 65000000,
      ebitda: 3000000, // First profitable year
      margin: 4.6,
    },
    year2030: {
      customers: 4000,
      drivers: 7000,
      deliveries: 800000,
      revenue: 120000000,
      ebitda: 18000000,
      margin: 15,
    },
  },

  // Realistic Unit Economics (Post-Beta)
  unitEconomics: {
    avgDeliveryPrice: 85,
    costPerDelivery: 45,
    grossProfitPerDelivery: 40,
    grossMarginPercent: 47,
    
    driverPayout: 35, // 41% of price
    platformFee: 50, // 59% of price
    
    variableCosts: {
      driverPayout: 35,
      insurance: 5,
      payment: 2,
      support: 3,
      total: 45,
    },
    
    subscriptionMRR: 499, // Average
    subscriptionCAC: 1200,
    subscriptionLTV: 8500,
    ltvCacRatio: 7.1,
    paybackMonths: 8,
  },

  // Realistic Customer Acquisition
  customerAcquisition: {
    phase2Beta: {
      shippers: 15,
      cac: 500, // Low during beta (direct outreach)
      channels: ['Direct sales', 'Partnerships', 'Referrals'],
    },
    phase3Launch: {
      shippers: 200,
      cac: 1200,
      channels: ['Direct sales', 'Content marketing', 'Conferences', 'Partnerships'],
    },
    phase4Scale: {
      shippers: 800,
      cac: 1500,
      channels: ['Sales team', 'Digital marketing', 'Channel partners', 'Referrals'],
    },
  },

  // Operating Expenses (Realistic)
  operatingExpenses: {
    phase1BuildOut: {
      monthly: 220000,
      annual: 2640000,
      breakdown: {
        salaries: 140000, // 6-8 people
        engineering: 50000, // Contractors
        marketing: 15000,
        operations: 10000,
        overhead: 5000,
      },
    },
    phase2Beta: {
      monthly: 280000,
      annual: 3360000,
      breakdown: {
        salaries: 180000, // 10-12 people
        engineering: 40000,
        marketing: 30000,
        operations: 20000,
        overhead: 10000,
      },
    },
    phase3Launch: {
      monthly: 400000,
      annual: 4800000,
      breakdown: {
        salaries: 250000, // 15-20 people
        engineering: 50000,
        marketing: 60000,
        sales: 20000,
        operations: 15000,
        overhead: 5000,
      },
    },
  },

  // Market Assumptions (Conservative)
  marketAssumptions: {
    tam: 8200000000, // $8.2B
    sam: 2500000000, // $2.5B (US clinical trials)
    som: 250000000, // $250M (10% of SAM by 2030)
    
    avgClinicalTrialBudget: 50000, // Annual logistics spend
    avgDeliveriesPerTrial: 500,
    
    competitorPricing: {
      worldCourier: 125,
      marken: 135,
      quickstat: 115,
      average: 125,
    },
    
    ourPricing: 85, // 32% cheaper
    
    marketGrowth: 11.4, // % CAGR
  },

  // Risk Factors (Honest Assessment)
  riskFactors: [
    'Regulatory approval timeline may extend beyond projections',
    'Customer acquisition may be slower than projected',
    'Competition from established players with deep pockets',
    'Driver recruitment and retention challenges',
    'Technology development delays',
    'Market adoption slower than anticipated',
    'Need for additional funding rounds',
  ],

  // Key Assumptions
  keyAssumptions: [
    'Seed funding closes Q4 2025 / Q1 2026',
    'Platform development completed in 6-9 months',
    'FDA/HIPAA compliance achieved within 6 months',
    'Beta program launches Q3 2026 with 10-15 customers',
    'Unit economics proven during beta phase',
    'Market launch Q1 2027 with refined product',
    'Series A raised Q2 2028 based on traction',
    'Break-even achieved 2029',
  ],
};

// Helper functions
export const formatCurrency = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  }
  return `$${amount.toFixed(0)}`;
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const getCurrentPhase = (): string => {
  return 'Phase 1: Seeking Seed Funding & Build-Out';
};

export const getNextMilestone = (): string => {
  return 'Close $4M seed round and begin platform completion';
};