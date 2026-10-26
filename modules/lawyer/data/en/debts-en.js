// modules/lawyer/data/en/debts-en.js
// === MODULE: LAWYER — DEBTS AND COLLECTORS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "debts",
    version: "1.0.0",
    lang: "en",
    title: "Debts and Collectors",
    description: "Loans, debt collectors, bailiffs, bankruptcy — debtor's rights protection",
    icon: "💸",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "debt_type",
      type: "single",
      text: "What's your situation?",
      options: [
        { id: "bank_loan", label: "🏦 Bank loan / microfinance loan", tags: ["bank_loan"] },
        { id: "collector_calls", label: "📞 Debt collectors calling (me, family, work)", tags: ["collector_calls"] },
        { id: "collector_threats", label: "⚠️ Debt collectors threatening physical harm", tags: ["collector_threats"] },
        { id: "collector_visit", label: "🚪 Debt collectors came to my home", tags: ["collector_visit"] },
        { id: "collector_fake", label: "📄 Debt collectors showing fake documents", tags: ["collector_fake"] },
        { id: "bailiff", label: "⚖️ Bailiffs seized my account / property", tags: ["bailiff"] },
        { id: "court_order", label: "🏛️ Received a court order", tags: ["court_order"] },
        { id: "bankruptcy", label: "📉 More debt than I can pay", tags: ["bankruptcy"] }
      ]
    },
    {
      id: "loan_source",
      type: "single",
      text: "Where did you get the loan?",
      conditions: { debt_type: ["bank_loan", "bankruptcy"] },
      options: [
        { id: "bank", label: "🏦 Bank", tags: ["bank"] },
        { id: "mfo", label: "📄 Microfinance organization (MFO)", tags: ["mfo"] },
        { id: "credit_card", label: "💳 Credit card", tags: ["credit_card"] },
        { id: "multiple", label: "📚 Multiple loans from different places", tags: ["multiple"] },
        { id: "mortgage", label: "🏠 Mortgage", tags: ["mortgage"] }
      ]
    },
    {
      id: "overdue",
      type: "single",
      text: "Is there a missed payment?",
      conditions: { debt_type: ["bank_loan", "collector_calls", "collector_threats", "collector_visit", "collector_fake", "bailiff", "bankruptcy"] },
      options: [
        { id: "no_overdue", label: "✅ No, I pay on time", tags: ["no_overdue"] },
        { id: "up_to_3_months", label: "⏰ Up to 3 months overdue", tags: ["short_overdue"] },
        { id: "over_3_months", label: "⚠️ More than 3 months overdue", tags: ["long_overdue"] }
      ]
    },
    {
      id: "collector_method",
      type: "single",
      text: "What exactly are collectors doing?",
      conditions: { debt_type: ["collector_calls", "collector_threats", "collector_visit", "collector_fake"] },
      options: [
        { id: "calls_relatives", label: "📞 Calling relatives / work / neighbors", tags: ["third_party"] },
        { id: "threats_violence", label: "⚠️ Threatening physical harm / property", tags: ["violence_threats"] },
        { id: "visiting_home", label: "🚪 Came to my home / neighbors / work", tags: ["home_visit"] },
        { id: "fake_docs", label: "📄 Showing fake documents (forged court orders)", tags: ["fake_docs"] },
        { id: "constant_calls", label: "📞 Calling at night / more than once a day", tags: ["harassment"] }
      ]
    },
    {
      id: "loan_amount",
      type: "single",
      text: "What is the total debt amount?",
      conditions: { debt_type: ["bank_loan", "bankruptcy", "court_order"] },
      options: [
        { id: "small", label: "💵 Up to $10,000", tags: ["small"] },
        { id: "medium", label: "💰 $10,000–$20,000", tags: ["medium"] },
        { id: "large", label: "💸 Over $20,000", tags: ["large"] }
      ]
    },
    {
      id: "court_order_status",
      type: "single",
      text: "Has the court order already entered into force?",
      conditions: { debt_type: ["court_order"] },
      options: [
        { id: "not_yet", label: "No, I filed objections within 10 days", tags: ["disputed"] },
        { id: "entered", label: "Yes, already in force", tags: ["active"] },
        { id: "unknown", label: "❓ Don't know / didn't receive", tags: ["unknown"] }
      ]
    },
    {
      id: "is_judgment",
      type: "single",
      text: "Is there a court judgment on your debt?",
      conditions: { debt_type: ["bailiff"] },
      options: [
        { id: "has_judgment", label: "✅ Yes, there is a court judgment", tags: ["has_judgment"] },
        { id: "no_judgment", label: "❌ No, bailiffs acting without judgment", tags: ["no_judgment"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. COLLECTORS CALLING THIRD PARTIES
    // ============================================================
    {
      id: "collector_third_party",
      title: "📞 Collectors calling third parties — illegal",
      description: "Calls to relatives, neighbors, work — direct violation of the law. This is illegal.",
      conditions: { debt_type: ["collector_calls"], collector_method: ["third_party"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Calls stopped + compensation",
      tags: ["collector", "third_party", "law"],
      steps: [
        "Under the law, collectors can ONLY contact the debtor. Calls to third parties are a gross violation",
        "Record EVERYTHING: call recordings, SMS, messenger screenshots, collector names, dates and times",
        "Send a written demand to the collection agency to stop calling third parties (certified mail)",
        "File a complaint with the regulator that oversees collectors",
        "File a complaint with the consumer protection agency",
        "If systematic violations continue — file a lawsuit for defamation + moral damages (up to $10,000)",
        "If calling work — inform your employer that calls are illegal"
      ],
      warnings: [
        "Collectors CANNOT: call after 9 PM to 8 AM on weekdays, after 8 PM on weekends",
        "Collectors CANNOT call more than once a day, 2 times a week, 8 times a month",
        "Call recordings (if you're a participant) are legal evidence in court"
      ]
    },
    // ============================================================
    // 2. COLLECTOR THREATS
    // ============================================================
    {
      id: "collector_threats_handle",
      title: "⚠️ Collector threats — criminal offense",
      description: "Threats of death, physical harm, property damage — this is a crime. Contact police immediately.",
      conditions: { debt_type: ["collector_threats"], collector_method: ["violence_threats"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Collectors prosecuted",
      tags: ["collector", "threats", "crime"],
      steps: [
        "DON'T panic, DON'T engage in provocations. Threats are a crime",
        "RECORD: record calls, save SMS, note the name and position of the threatening person",
        "File a police report (written, 2 copies). Include: date, time, threat content, collector's name, phone number",
        "Request a receipt for your report",
        "File a complaint with the regulator overseeing collectors",
        "File a lawsuit for defamation + moral damages",
        "If threats involve extortion — this is a separate crime"
      ],
      warnings: [
        "Record calls (inform you're recording to make it legal evidence)",
        "DON'T meet collectors alone — bring a witness",
        "DON'T give money to collectors in person — only through bank channels"
      ]
    },
    // ============================================================
    // 3. COLLECTORS CAME TO HOME
    // ============================================================
    {
      id: "collector_visit_home",
      title: "🚪 Collectors came home — what to do",
      description: "Collectors have NO right to enter without a court order and bailiffs. Their visit is psychological pressure.",
      conditions: { debt_type: ["collector_visit"], collector_method: ["home_visit"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Visits stopped",
      tags: ["collector", "home_visit", "law"],
      steps: [
        "DON'T let collectors into your apartment without a court order and bailiffs",
        "DON'T open the intercom. If they're outside — DON'T engage in conversation, DON'T sign anything",
        "If collectors are already inside (illegally) — call police immediately",
        "Record video or audio of the visit — evidence for court",
        "If threatened — call police immediately",
        "After visit: file police report, complaint to the regulator"
      ],
      warnings: [
        "Collectors have NO right to enter without owner's consent",
        "The only legal way: court order + bailiffs",
        "DON'T sign reconciliation acts or debt acknowledgments — this resets the statute of limitations"
      ]
    },
    // ============================================================
    // 4. COLLECTORS WITH FAKE DOCUMENTS
    // ============================================================
    {
      id: "collector_fake_docs",
      title: "📄 Collectors with fake documents — fraud",
      description: "Forged court orders, fake rulings — this is a criminal offense.",
      conditions: { debt_type: ["collector_fake"], collector_method: ["fake_docs"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Criminal prosecution",
      tags: ["collector", "fake_docs", "crime"],
      steps: [
        "DON'T sign or transfer money based on unverified documents",
        "Verify documents: court orders can be checked online, enforcement orders at the bailiff service",
        "Signs of forgery: typos, incorrect court details, missing seal, wrong judge signature",
        "If documents are fake — file police report",
        "File complaint with regulator and prosecutor's office",
        "If impersonating bailiffs — additional crime"
      ],
      warnings: [
        "Forged documents are a criminal offense. DON'T be deceived!",
        "Verify court decisions on official court websites — free and fast"
      ]
    },
    // ============================================================
    // 5. BANK LOAN RESTRUCTURING
    // ============================================================
    {
      id: "bank_loan_restructuring",
      title: "🏦 Bank loan restructuring",
      description: "If you can't pay — apply for restructuring. The bank is legally required to consider it.",
      conditions: { debt_type: ["bank_loan"], loan_source: ["bank", "credit_card", "mortgage"], overdue: ["short_overdue", "long_overdue"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Reduced payment + deferral",
      tags: ["bank", "restructuring", "loan"],
      steps: [
        "Contact the bank with a restructuring application (before or within first 30 days of overdue)",
        "Attach documents: income certificate, proof of hardship (job loss, illness, income reduction)",
        "Restructuring options: reduced payment, extended term, payment holidays (up to 6 months)",
        "Payment holidays: once every 5 years under the law",
        "If bank refuses — demand written refusal (needed for court). File complaint with Central Bank",
        "For mortgages: contact state housing support programs"
      ],
      warnings: [
        "Restructuring is NOT debt forgiveness. Total amount may increase",
        "Payment holidays only if income decreased by 30% or more",
        "If bank refuses — consider bankruptcy (if debt > $10,000)"
      ]
    },
    // ============================================================
    // 6. MFO DEBT — INTEREST LIMIT
    // ============================================================
    {
      id: "mfo_debt_help",
      title: "📄 MFO debt — legal interest reduction",
      description: "Total accrued interest on microloans cannot exceed 1.5× the loan amount.",
      conditions: { debt_type: ["bank_loan"], loan_source: ["mfo"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Debt reduced to 1.5× loan amount",
      tags: ["mfo", "microfinance", "law"],
      steps: [
        "Check: total interest cannot exceed 1.5× of the loan amount. If it does — it's illegal!",
        "Example: borrowed $100 — interest cannot exceed $150. Total debt = $250. Everything above is illegal",
        "Send written demand to MFO to recalculate interest according to the law",
        "If MFO refuses — file complaint with Central Bank",
        "Check if MFO is registered with the Central Bank. If not — debt is illegal",
        "If debt exceeds 1.5× — file lawsuit to have debt declared illegal"
      ],
      warnings: [
        "MFOs often threaten, but they are strictly regulated",
        "DON'T pay more than 1.5× of the loan amount — it's illegal",
        "Check MFO registration on the Central Bank website"
      ]
    },
    // ============================================================
    // 7. COURT ORDER — DISPUTE (10 DAYS)
    // ============================================================
    {
      id: "court_order_dispute",
      title: "📜 Court order dispute — 10 days",
      description: "You have 10 days to file objections to a court order. This stops enforcement.",
      conditions: { debt_type: ["court_order"], court_order_status: ["disputed"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 days",
      yield_estimate: "Court order cancelled",
      tags: ["court", "order", "dispute"],
      steps: [
        "Get a copy of the court order — the date of receipt starts the 10-day count",
        "Within 10 days, file objections with the same court. NO state fee required",
        "In objections state: disagreement with debt amount, statute of limitations (over 3 years), no debt",
        "If within 10 days — court CANCELLES the order. Collection is suspended",
        "After cancellation, creditor can file a regular lawsuit",
        "If missed deadline — apply to restore time (need valid reason)"
      ],
      warnings: [
        "10-day deadline is strict! If missed without valid reason — almost impossible to restore",
        "Objections filed ONLY with the court that issued the order, not with a higher court",
        "If you didn't receive the order — this is a valid reason for time restoration"
      ]
    },
    // ============================================================
    // 8. STATUTE OF LIMITATIONS — 3 YEARS
    // ============================================================
    {
      id: "debt_statute_limitations",
      title: "⏰ Statute of limitations — 3 years",
      description: "If more than 3 years since the last payment or acknowledgment of debt — creditor can't collect through court.",
      conditions: { debt_type: ["bank_loan", "collector_calls", "collector_threats", "bailiff", "court_order"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Debt written off (if statute expired)",
      tags: ["statute_limitations", "law", "debt"],
      steps: [
        "Statute of limitations is 3 years from the last payment (Civil Code). If you didn't pay for 3 years and didn't acknowledge debt — creditor cannot collect",
        "Important: statute is interrupted if you: made any payment, acknowledged debt in writing, signed a reconciliation act",
        "If court order issued after 3 years — you have the right to have debt written off. State this in objections",
        "If statute expired — file application to apply statute of limitations (before court decision). Court must deny claim",
        "All interest, penalties, and fines are also written off. Complete debt forgiveness"
      ],
      warnings: [
        "Statute of limitations is YOUR RIGHT, not the court's obligation. You MUST state it in court",
        "Any acknowledgment of debt INTERRUPTS the statute. DON'T sign anything without legal advice",
        "If debt was sold to collectors — statute continues from the last payment date"
      ]
    },
    // ============================================================
    // 9. MULTIPLE LOANS — PAYMENT PRIORITIES
    // ============================================================
    {
      id: "multiple_loans_priorities",
      title: "📚 Multiple loans — payment priorities",
      description: "If you have many loans, prioritize: pay the most expensive and secured debts first.",
      conditions: { debt_type: ["bank_loan"], loan_source: ["multiple"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Optimized payments",
      tags: ["multiple", "priorities", "planning"],
      steps: [
        "List all loans: bank/MFO, amount, interest rate, monthly payment, overdue, penalties",
        "First priority: highest interest rates (usually MFOs and credit cards)",
        "Second priority: loans with guarantors or collateral (mortgage, car loan) — risk of property loss",
        "Third priority: loans with court orders or bailiffs — if ignored, account seizure",
        "Fourth priority: low-interest loans (mortgage, subsidized loans)",
        "Consider refinancing — consolidating loans into one with lower rate",
        "If can't pay everything — file for bankruptcy (if debt > $10,000)"
      ],
      warnings: [
        "DON'T pay MFOs first if you have a mortgage — property loss risk is higher",
        "DON'T take new loans to pay old ones — debt spiral to bankruptcy"
      ]
    },
    // ============================================================
    // 10. BAILIFF ACTIONS — YOUR RIGHTS
    // ============================================================
    {
      id: "bailiff_actions",
      title: "⚖️ Bailiff actions — your rights",
      description: "Bailiffs can collect debt, but only within the law. Check the legality of their actions.",
      conditions: { debt_type: ["bailiff"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Rights protected + debt reduced",
      tags: ["bailiff", "seizure", "law"],
      steps: [
        "Check enforcement proceedings online on the bailiff service website",
        "Check: is there a court judgment? If not — bailiffs act illegally",
        "If proceedings exist — check the amount: should match the court decision",
        "Account seizure: you must have at least the subsistence minimum left. Apply to have it released",
        "Bailiffs CANNOT seize: primary residence, food, clothing, essentials",
        "If bailiffs violate — complain: senior bailiff → prosecutor → court"
      ],
      warnings: [
        "Primary residence CANNOT be seized (except mortgage)",
        "Cars can be seized, but if needed for work — apply for retention",
        "Bailiffs can visit only on workdays from 6 AM to 10 PM"
      ]
    },
    // ============================================================
    // 11. PERSONAL BANKRUPTCY
    // ============================================================
    {
      id: "bankruptcy_personal",
      title: "📉 Personal bankruptcy — debt forgiveness",
      description: "If debt > $10,000 and you can't pay — bankruptcy forgives all debts (except alimony and health damages).",
      conditions: { debt_type: ["bankruptcy"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "6–18 months",
      yield_estimate: "Debts forgiven",
      tags: ["bankruptcy", "law", "financial"],
      steps: [
        "Check conditions: debt must be > $10,000. If less — only through regular court",
        "Prepare documents: income certificates, bank statements, property documents, creditor list",
        "Choose a financial manager (from the official registry)",
        "File application with the arbitration court",
        "Pay fees: ~$100 for court + ~$500 for the manager",
        "Procedure lasts 6–12 months. Manager: sells property (except primary residence), negotiates with creditors",
        "Upon completion — ALL debts forgiven: loans, microloans, utilities, taxes, fines (except alimony and health damages)",
        "After bankruptcy: 5 years cannot be: company director, individual entrepreneur, hold management positions"
      ],
      warnings: [
        "Bankruptcy is a last resort. First try restructuring and settlement",
        "Primary residence stays (unless mortgaged)",
        "If you hid property or income — criminal liability",
        "Some debts are NOT forgiven: alimony, health/life damages, criminal restitution"
      ]
    },
    // ============================================================
    // 12. SHORT OVERDUE — ACTION PLAN
    // ============================================================
    {
      id: "short_overdue_plan",
      title: "⏰ Up to 3 months overdue — don't give up!",
      description: "Short overdue is not a death sentence. Many banks are willing to help early on.",
      conditions: { debt_type: ["bank_loan"], overdue: ["short_overdue"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Payments restored",
      tags: ["overdue", "short", "plan"],
      steps: [
        "DON'T ignore the bank! Call the hotline and explain temporary difficulties",
        "Apply for restructuring — this increases your chances before or in the first 30 days of overdue",
        "Attach proof: layoff notice, sick leave, income reduction certificate",
        "If multiple loans — apply for refinancing",
        "Ask about payment holidays (if income decreased by 30%)",
        "If bank refuses — complain to Central Bank",
        "Main thing — avoid court and bailiffs. Solve the issue early"
      ],
      warnings: [
        "DON'T stop paying entirely — pay at least the minimum payment to avoid large penalties",
        "DON'T take new microloans to cover overdue — a vicious cycle",
        "DON'T ignore bank calls — damages credit history"
      ]
    }
  ]
});