// Financial Projections for Trial Transport
// Based on realistic SaaS and marketplace metrics

export const financialProjections = {
  // 5-Year Revenue Projections
  revenueProjections: [
    {
      year: 2025,
      revenue: 5850000, // $5.85M
      subscriptions: 2340000, // 40%
      perDelivery: 2925000, // 50%
      apiUsage: 292500, // 5%
      whiteLabelEnterprise: 292500, // 5%
      growthRate: 0, // Base year
    },
    {
      year: 2026,
      revenue: 16380000, // $16.38M
      subscriptions: 6552000,
      perDelivery: 8190000,
      apiUsage: 819000,
      whiteLabelEnterprise: 819000,
      growthRate: 180, // 180% YoY
    },
    {
      year: 2027,
      revenue: 40950000, // $40.95M
      subscriptions: 16380000,
      perDelivery: 20475000,
      apiUsage: 2047500,
      whiteLabelEnterprise: 2047500,
      growthRate: 150, // 150% YoY
    },
    {
      year: 2028,
      revenue: 81900000, // $81.9M
      subscriptions: 32760000,
      perDelivery: 40950000,
      apiUsage: 4095000,
      whiteLabelEnterprise: 4095000,
      growthRate: 100, // 100% YoY
    },
    {
      year: 2029,
      revenue: 147420000, // $147.42M
      subscriptions: 58968000,
      perDelivery: 73710000,
      apiUsage: 7371000,
      whiteLabelEnterprise: 7371000,
      growthRate: 80, // 80% YoY
    },
  ],

  // Unit Economics
  unitEconomics: {
    averageDeliveryPrice: 85,
    costPerDelivery: 45,
    grossMarginPerDelivery: 40,
    grossMarginPercent: 47,
    
    averageSubscriptionMRR: 699,
    subscriptionCAC: 850,
    subscriptionLTV: 12500,
    ltvCacRatio: 14.7,
    
    apiCallPrice: 0.015,
    apiCallCost: 0.003,
    apiGrossMargin: 80,
    
    whiteLabelSetupFee: 50000,
    whiteLabelMRR: 5000,
    whiteLabelLTV: 180000,
  },

  // Customer Metrics
  customerMetrics: [
    {
      year: 2025,
      shippers: 450,
      drivers: 280,
      enterprises: 3,
      totalCustomers: 733,
      churnRate: 8, // 8% annual
      nps: 72,
    },
    {
      year: 2026,
      shippers: 1260,
      drivers: 784,
      enterprises: 12,
      totalCustomers: 2056,
      churnRate: 7,
      nps: 75,
    },
    {
      year: 2027,
      shippers: 3150,
      drivers: 1960,
      enterprises: 30,
      totalCustomers: 5140,
      churnRate: 6,
      nps: 78,
    },
    {
      year: 2028,
      shippers: 6300,
      drivers: 3920,
      enterprises: 60,
      totalCustomers: 10280,
      churnRate: 5,
      nps: 80,
    },
    {
      year: 2029,
      shippers: 11340,
      drivers: 7056,
      enterprises: 108,
      totalCustomers: 18504,
      churnRate: 4,
      nps: 82,
    },
  ],

  // Operating Expenses
  operatingExpenses: [
    {
      year: 2025,
      totalOpex: 4095000, // $4.095M
      salesMarketing: 1228500, // 30%
      engineering: 1228500, // 30%
      operations: 819000, // 20%
      generalAdmin: 819000, // 20%
      burnRate: 145833, // Monthly
    },
    {
      year: 2026,
      totalOpex: 9828000, // $9.828M (60% of revenue)
      salesMarketing: 2948400,
      engineering: 2948400,
      operations: 1965600,
      generalAdmin: 1965600,
      burnRate: 819000,
    },
    {
      year: 2027,
      totalOpex: 20475000, // $20.475M (50% of revenue)
      salesMarketing: 6142500,
      engineering: 6142500,
      operations: 4095000,
      generalAdmin: 4095000,
      burnRate: 1706250,
    },
    {
      year: 2028,
      totalOpex: 32760000, // $32.76M (40% of revenue)
      salesMarketing: 9828000,
      engineering: 9828000,
      operations: 6552000,
      generalAdmin: 6552000,
      burnRate: 2730000,
    },
    {
      year: 2029,
      totalOpex: 44226000, // $44.226M (30% of revenue)
      salesMarketing: 13267800,
      engineering: 13267800,
      operations: 8845200,
      generalAdmin: 8845200,
      burnRate: 3685500,
    },
  ],

  // Profitability
  profitability: [
    {
      year: 2025,
      revenue: 5850000,
      cogs: 3120000, // 53% (delivery costs)
      grossProfit: 2730000,
      grossMargin: 47,
      opex: 4095000,
      ebitda: -1365000,
      ebitdaMargin: -23,
    },
    {
      year: 2026,
      revenue: 16380000,
      cogs: 8681400,
      grossProfit: 7698600,
      grossMargin: 47,
      opex: 9828000,
      ebitda: -2129400,
      ebitdaMargin: -13,
    },
    {
      year: 2027,
      revenue: 40950000,
      cogs: 21703500,
      grossProfit: 19246500,
      grossMargin: 47,
      opex: 20475000,
      ebitda: -1228500,
      ebitdaMargin: -3,
    },
    {
      year: 2028,
      revenue: 81900000,
      cogs: 43407000,
      grossProfit: 38493000,
      grossMargin: 47,
      opex: 32760000,
      ebitda: 5733000,
      ebitdaMargin: 7,
    },
    {
      year: 2029,
      revenue: 147420000,
      cogs: 78132600,
      grossProfit: 69287400,
      grossMargin: 47,
      opex: 44226000,
      ebitda: 25061400,
      ebitdaMargin: 17,
    },
  ],

  // Funding Requirements
  fundingRequirements: {
    seriesA: {
      amount: 8000000,
      valuation: 40000000, // Pre-money
      postMoney: 48000000,
      dilution: 16.7,
      use: {
        engineering: 2400000, // 30%
        salesMarketing: 3200000, // 40%
        operations: 1600000, // 20%
        workingCapital: 800000, // 10%
      },
      runway: 24, // months
      milestones: [
        'Reach $10M ARR',
        'Expand to 1,000+ shippers',
        'Launch in 5 major metro areas',
        'Achieve unit economics profitability',
      ],
    },
    seriesB: {
      amount: 25000000,
      valuation: 150000000,
      postMoney: 175000000,
      dilution: 14.3,
      timing: 'Q4 2026',
    },
  },

  // Key Metrics Summary
  keyMetrics: {
    currentARR: 5850000,
    targetARR2025: 5850000,
    targetARR2026: 16380000,
    targetARR2027: 40950000,
    
    currentMRR: 487500,
    mrrGrowthRate: 12.5, // Monthly
    
    paybackPeriod: 6, // months
    magicNumber: 1.2,
    
    tam: 8200000000, // $8.2B
    sam: 3200000000, // $3.2B
    som: 320000000, // $320M (10% of SAM by 2029)
    
    marketShare2029: 0.18, // 0.18% of TAM
  },

  // Break-even Analysis
  breakEven: {
    year: 2028,
    quarter: 'Q2',
    revenue: 81900000,
    deliveriesPerMonth: 80000,
    shippersNeeded: 6300,
    driversNeeded: 3920,
  },

  // Competitive Positioning
  competitiveMetrics: {
    ourPricing: {
      standard: 60,
      refrigerated: 80,
      frozen: 105,
      cryogenic: 150,
    },
    competitorAvgPricing: {
      standard: 115,
      refrigerated: 150,
      frozen: 200,
      cryogenic: 290,
    },
    savings: {
      standard: 48, // %
      refrigerated: 47,
      frozen: 48,
      cryogenic: 48,
    },
  },
};

// Helper functions for formatting
export const formatCurrency = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  }
  return `$${amount.toFixed(0)}`;
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString();
};