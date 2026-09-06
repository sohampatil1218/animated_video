/**
 * SAT-SA Presentation Data Store
 * Contains mock operational metrics, CSE profiles, signals, evidence samples, and tech stack info.
 * Filename: data1.js
 */

const SATSA_DATA = {
  cses: [
    { id: 'CSE-A', name: 'Critical Energy Entity', type: 'Energy Sector', alerts: 28450, cases: 5400, sla: '97.2%', status: 'Healthy', riskScore: 24, attention: 'Low' },
    { id: 'CSE-B', name: 'Critical Finance Entity', type: 'Financial Sector', alerts: 41200, cases: 8900, sla: '98.5%', status: 'Healthy', riskScore: 18, attention: 'Low' },
    { id: 'CSE-C', name: 'Critical Telecom Entity', type: 'Telecommunications', alerts: 18900, cases: 3200, sla: '92.1%', status: 'Medium', riskScore: 42, attention: 'Medium' },
    { id: 'CSE-D', name: 'Critical Transport Entity', type: 'Transport Sector', alerts: 11450, cases: 2500, sla: '96.0%', status: 'Signal Detected', riskScore: 87, attention: 'High' }
  ],

  sceneMetrics: {
    totalAlerts: 100000,
    totalCases: 20000,
    totalInvestigations: 5000,
    totalEscalations: 2000,
    manualSamples: 50,
    prioritySamples: 100
  },

  executionGap: {
    cseId: 'CSE-D',
    reportedSLA: '95.0%',
    criticalAlerts: 120,
    rapidClosures: 87,
    limitedEvidence: 62,
    missingEscalations: 41,
    pattern: 'Repeated instant-closure templates without L2 forensic logs'
  },

  negativeSpace: {
    targetAsset: 'Critical Database Server (DB-FIN-01)',
    criticality: 'HIGH',
    monitoring: 'CONTINUOUS',
    expectedSources: ['Authentication', 'Endpoint / EDR', 'Network / NetFlow', 'Security Events'],
    sampleEvents: [
      { id: 'AUTH-1842', title: 'Successful authentication', type: 'auth' },
      { id: 'EDR-7712', title: 'Endpoint process event', type: 'edr' },
      { id: 'NET-3921', title: 'Network connection trace', type: 'net' },
      { id: 'SEC-8291', title: 'Database audit log event', type: 'sec' }
    ],
    expectedCounts: { auth: 1240, edr: 980, net: 1430, sec: 760 },
    observedCounts: { auth: 82, edr: 47, net: 61, sec: 29 },
    interpretation: 'Possible monitoring blind spot or logging misconfiguration'
  },

  anomalyDetection: {
    historicalPeriods: [
      { period: 'Period 1', value: 78 },
      { period: 'Period 2', value: 81 },
      { period: 'Period 3', value: 80 },
      { period: 'Period 4', value: 83 },
      { period: 'Period 5', value: 79 },
      { period: 'Period 6 (Current)', value: 42, isAnomaly: true },
      { period: 'Period 7', value: 96, isAnomaly: true },
      { period: 'Period 8', value: 84 }
    ],
    normalRange: { min: 75, max: 85 },
    anomalyDetails: {
      observed: '42%',
      baseline: '78% – 84%',
      deviation: '-40 percentage points',
      classification: 'UNUSUAL BEHAVIOR'
    },
    types: [
      'UNUSUALLY LOW ALERT VOLUME',
      'SUDDEN CLOSURE SPIKE',
      'ABNORMAL INVESTIGATION WORKLOAD',
      'UNEXPECTED ESCALATION CHANGE'
    ]
  },

  peerBenchmarking: {
    metric: 'INVESTIGATION RATE',
    metricDesc: 'Percentage of sampled alerts/cases that contain an investigation record according to available assessment data.',
    peers: [
      { id: 'CSE-A', sector: 'Energy', rate: 89 },
      { id: 'CSE-B', sector: 'Finance', rate: 84 },
      { id: 'CSE-C', sector: 'Telecom', rate: 81 },
      { id: 'CSE-D', sector: 'Transport', rate: 19, highlighted: true }
    ],
    baseline: {
      median: '84%',
      typicalRange: '81% – 89%',
      cseDValue: '19%',
      deviation: '-65 percentage points'
    },
    possibleCauses: [
      'Different alert volume thresholds',
      'Different operating environments',
      'Different investigation workflows',
      'Data completeness differences',
      'Genuine operational differences'
    ]
  },

  correlatedSignals: [
    { title: 'Rapid Closure Pattern', detail: '87 critical alerts closed < 3 mins', status: 'DETECTED', severity: 'amber' },
    { title: 'Limited Forensic Evidence', detail: '62 cases missing PCAP logs', status: 'DETECTED', severity: 'amber' },
    { title: 'Un-escalated High Severity', detail: '41 critical events un-escalated', status: 'DETECTED', severity: 'amber' },
    { title: 'Negative Space Blind Spot', detail: '85% telemetry gap on DB-FIN-01', status: 'DETECTED', severity: 'red' },
    { title: 'Peer Investigation Rate', detail: 'Investigation rate 19% vs 84% median', status: 'DETECTED', severity: 'red' }
  ],

  explainabilityTree: [
    { step: 1, title: 'Supervisory Finding', desc: 'CSE-D flagged with Risk Score 87/100 (High Supervisory Attention)' },
    { step: 2, title: 'Risk Indicator Assembly', desc: 'Aggregated 5 independent operational anomaly vectors' },
    { step: 3, title: 'Target Case Identification', desc: 'Case #CASE-2026-9812 on DB-FIN-01' },
    { step: 4, title: 'Raw Record Evidence', desc: 'Alert ALT-90812 closed in 42s without attached PCAP or supervisor sign-off' }
  ],

  dashboardStats: {
    csesAssessed: 24,
    highAttention: 4,
    mediumAttention: 7,
    lowAttention: 13,
    executionGapSignals: 18,
    negativeSpaceSignals: 11,
    anomalies: 27,
    prioritySamples: 150
  },

  techStack: [
    'Python', 'Machine Learning', 'Anomaly Detection', 'Statistical Analysis',
    'Pattern Recognition', 'Pandas', 'Scikit-learn', 'XGBoost',
    'PostgreSQL', 'FastAPI', 'React', 'Plotly', 'Docker', 'Air-Gapped Architecture'
  ]
};
