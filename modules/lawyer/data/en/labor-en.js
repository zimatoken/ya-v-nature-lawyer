// modules/lawyer/data/en/labor-en.js
// === MODULE: LAWYER — LABOR DISPUTES ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "labor",
    version: "1.0.0",
    lang: "en",
    title: "Labor Disputes",
    description: "Unfair dismissal, salary disputes, discrimination, harassment, layoffs, workplace injuries — full employee protection",
    icon: "💼",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "labor_issue",
      type: "single",
      text: "What is your problem at work?",
      options: [
        { id: "fired_unfair", label: "🚪 Unfair dismissal / forced to quit", tags: ["fired"] },
        { id: "salary", label: "💰 Salary not paid / delayed", tags: ["salary"] },
        { id: "final_payment", label: "💳 Final payment not given upon dismissal", tags: ["final_payment"] },
        { id: "mobbing", label: "😤 Pressure from management / harassment (mobbing)", tags: ["mobbing"] },
        { id: "no_contract", label: "📄 No official employment contract", tags: ["no_contract"] },
        { id: "overtime", label: "⏰ Forced overtime without pay", tags: ["overtime"] },
        { id: "vacation", label: "🏖️ Vacation denied / vacation pay not paid", tags: ["vacation"] },
        { id: "discrimination", label: "⚖️ Discrimination (gender, age, nationality)", tags: ["discrimination"] },
        { id: "injury", label: "🩹 Workplace injury", tags: ["injury"] },
        { id: "layoff", label: "📉 Layoff / reduction in force", tags: ["layoff"] },
        { id: "probation", label: "📋 Unfair probation period", tags: ["probation"] },
        { id: "sick_leave", label: "🩺 Problems with sick leave payment", tags: ["sick_leave"] },
        { id: "hazardous", label: "☣️ Hazardous working conditions without compensation", tags: ["hazardous"] }
      ]
    },
    {
      id: "fired_type",
      type: "single",
      text: "How were you dismissed?",
      conditions: { labor_issue: ["fired_unfair"] },
      options: [
        { id: "article_discipline", label: "📜 For cause (absenteeism, lateness, violations)", tags: ["article"] },
        { id: "agreement", label: "🤝 By mutual agreement (signed papers)", tags: ["agreement"] },
        { id: "own_will_forced", label: "✍️ Forced to resign 'voluntarily'", tags: ["own_will"] },
        { id: "layoff_reduction", label: "📉 Reduction in force", tags: ["layoff_reduction"] }
      ]
    },
    {
      id: "salary_delay",
      type: "single",
      text: "How long has the salary been delayed?",
      conditions: { labor_issue: ["salary"] },
      options: [
        { id: "week", label: "📅 1–2 weeks", tags: ["short"] },
        { id: "month", label: "📆 1–2 months", tags: ["medium"] },
        { id: "long", label: "📈 More than 2 months", tags: ["long"] }
      ]
    },
    {
      id: "is_official",
      type: "single",
      text: "Are you officially employed?",
      conditions: { labor_issue: ["fired_unfair", "salary", "final_payment", "no_contract", "overtime", "vacation", "sick_leave", "hazardous"] },
      options: [
        { id: "official_yes", label: "✅ Yes, officially employed", tags: ["official"] },
        { id: "official_no", label: "❌ No, working unofficially", tags: ["unofficial"] },
        { id: "official_gray", label: "📦 Officially employed, but salary 'in cash'", tags: ["gray"] }
      ]
    },
    {
      id: "work_duration",
      type: "single",
      text: "How long have you worked for this employer?",
      conditions: { labor_issue: ["fired_unfair", "salary", "final_payment", "no_contract", "layoff", "probation"] },
      options: [
        { id: "less_year", label: "📅 Less than 1 year", tags: ["short_term"] },
        { id: "one_three", label: "📆 1–3 years", tags: ["medium_term"] },
        { id: "more_three", label: "📈 More than 3 years", tags: ["long_term"] }
      ]
    },
    {
      id: "has_documents",
      type: "single",
      text: "Did you receive copies of documents (dismissal order, pay slip, work record)?",
      conditions: { labor_issue: ["fired_unfair", "salary", "final_payment"] },
      options: [
        { id: "docs_yes", label: "📄 Yes, all documents in hand", tags: ["docs_yes"] },
        { id: "docs_no", label: "❌ No, employer didn't provide", tags: ["docs_no"] },
        { id: "docs_partial", label: "📋 Partially", tags: ["docs_partial"] }
      ]
    },
    {
      id: "discrimination_type",
      type: "single",
      text: "What type of discrimination?",
      conditions: { labor_issue: ["discrimination"] },
      options: [
        { id: "gender", label: "🚺 Gender-based (woman/man)", tags: ["gender"] },
        { id: "age", label: "👴 Age-based (young/older)", tags: ["age"] },
        { id: "nationality", label: "🌍 Nationality / citizenship", tags: ["nationality"] },
        { id: "religion", label: "⛪ Religion / beliefs", tags: ["religion"] },
        { id: "pregnancy", label: "🤰 Pregnancy / having children", tags: ["pregnancy"] }
      ]
    },
    {
      id: "probation_issue",
      type: "single",
      text: "What's the problem with the probation period?",
      conditions: { labor_issue: ["probation"] },
      options: [
        { id: "probation_unfair", label: "❌ Unfairly dismissed during probation", tags: ["unfair"] },
        { id: "probation_long", label: "⏰ Probation period too long", tags: ["long"] },
        { id: "probation_pay", label: "💰 Paid less than promised during probation", tags: ["pay"] }
      ]
    },
    {
      id: "injury_type",
      type: "single",
      text: "What happened at the workplace?",
      conditions: { labor_issue: ["injury"] },
      options: [
        { id: "injury_work", label: "🔧 Injury at the workplace", tags: ["work_injury"] },
        { id: "injury_road", label: "🚗 Injury on the way to/from work", tags: ["road_injury"] },
        { id: "injury_occupational", label: "☢️ Occupational disease", tags: ["occupational"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. UNFAIR DISMISSAL (FOR CAUSE)
    // ============================================================
    {
      id: "unfair_firing_article",
      title: "📜 Unfair dismissal for cause — Labor Code",
      description: "Dismissal for cause (absenteeism, violation) must follow procedure. If procedure violated — dismissal is illegal.",
      conditions: { labor_issue: ["fired_unfair"], fired_type: ["article"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Reinstatement + pay for forced absence + moral damages",
      tags: ["fired", "unfair", "article"],
      steps: [
        "Check: was disciplinary action properly documented (act, explanation, order)?",
        "If employer didn't request an explanation — dismissal is illegal",
        "If statute of limitations for violation is more than 1 month — dismissal illegal",
        "Gather evidence: all documents, correspondence, witness statements",
        "File a lawsuit within 1 month of dismissal",
        "Claim: reinstatement, pay for forced absence, moral damages",
        "If you don't want reinstatement — request change of dismissal reason to 'mutual agreement'"
      ],
      warnings: [
        "STATUTE OF LIMITATIONS — 1 MONTH from dismissal date. Miss it — you lose!",
        "Without an act of violation and explanation — dismissal is illegal"
      ]
    },
    // ============================================================
    // 2. FORCED RESIGNATION
    // ============================================================
    {
      id: "forced_quit",
      title: "📝 Forced resignation — Labor Code",
      description: "If you were forced to write a 'voluntary' resignation — it's illegal. You can be reinstated.",
      conditions: { labor_issue: ["fired_unfair"], fired_type: ["own_will"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Reinstatement + pay for forced absence + moral damages",
      tags: ["fired", "unfair", "own_will"],
      steps: [
        "Gather evidence of pressure: correspondence, witnesses, audio recordings",
        "Check work record — 'dismissed voluntarily' — your advantage",
        "Send a claim to employer to recognize dismissal as illegal",
        "File a lawsuit within 1 month of dismissal",
        "Claim: reinstatement, pay for forced absence, moral damages"
      ],
      warnings: [
        "STATUTE OF LIMITATIONS — 1 MONTH. Miss it — you lose",
        "DON'T sign anything under pressure — write 'I disagree' on all documents"
      ]
    },
    // ============================================================
    // 3. FINAL PAYMENT DELAY
    // ============================================================
    {
      id: "final_payment_delay",
      title: "💳 Final payment delay upon dismissal",
      description: "Final payment must be given on the day of dismissal. If not — demand compensation.",
      conditions: { labor_issue: ["final_payment"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Payment + compensation (1/150 of Central Bank rate per day)",
      tags: ["final_payment", "delay", "law"],
      steps: [
        "Final payment must be made on the day of dismissal",
        "If not paid — send written claim",
        "Compensation: 1/150 of Central Bank rate for each day of delay",
        "Contact Labor Inspectorate",
        "File lawsuit: final payment + compensation + moral damages"
      ],
      warnings: [
        "The day of dismissal is the last working day — all money must be paid then",
        "If employer doesn't pay — don't sign the handover form"
      ]
    },
    // ============================================================
    // 4. SALARY DEBT
    // ============================================================
    {
      id: "salary_claim",
      title: "💰 Salary debt recovery",
      description: "Salary delay is a violation. Delay over 2 months — criminal liability.",
      conditions: { labor_issue: ["salary"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Debt + compensation + moral damages",
      tags: ["salary", "debt", "court"],
      steps: [
        "Record the debt: pay slips, bank statements, correspondence",
        "Send a written claim with calculation (certified mail)",
        "Contact Labor Inspectorate",
        "If debt over 2 months — prosecutor's office (criminal liability)",
        "File lawsuit: debt + compensation (1/150 per day) + moral damages",
        "Statute of limitations — 3 months"
      ],
      warnings: [
        "DON'T wait 'a little longer' — the longer, the harder to recover",
        "If employer is bankrupt — register as creditor"
      ]
    },
    // ============================================================
    // 5. NO EMPLOYMENT CONTRACT
    // ============================================================
    {
      id: "no_contract",
      title: "📄 No employment contract — Labor Code",
      description: "Unofficial work is risky, but you are still protected by law. Prove the fact of work.",
      conditions: { labor_issue: ["no_contract"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–6 months",
      yield_estimate: "Employment recognized + payments",
      tags: ["no_contract", "illegal", "court"],
      steps: [
        "Gather proof of work: correspondence, photos, witness statements, access cards",
        "Request bank statements — any trace of payment",
        "Send claim to employer to sign contract",
        "Contact Labor Inspectorate — fine up to $2,000",
        "File lawsuit: recognize employment + recover salary + vacation + sick leave",
        "Statute of limitations — 3 months"
      ],
      warnings: [
        "DON'T leave immediately — first gather evidence",
        "Any messenger correspondence is evidence"
      ]
    },
    // ============================================================
    // 6. WORKPLACE HARASSMENT (MOBBING)
    // ============================================================
    {
      id: "bullying_work",
      title: "😰 Workplace harassment / mobbing",
      description: "Psychological pressure, insults, humiliation — this is mobbing. Employer must stop it.",
      conditions: { labor_issue: ["mobbing"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Moral damages + protection",
      tags: ["mobbing", "harassment", "law"],
      steps: [
        "Record ALL facts: dates, times, what was said, witnesses",
        "Save correspondence, audio, video",
        "Send written complaint to employer",
        "If employer ignores — complaint to Labor Inspectorate",
        "Consult a psychologist and record diagnosis",
        "If severe consequences — lawsuit for moral damages",
        "Request transfer or dismissal with compensation"
      ],
      warnings: [
        "DON'T stay silent — mobbing destroys health",
        "DON'T sign 'voluntary' resignation under pressure"
      ]
    },
    // ============================================================
    // 7. UNPAID OVERTIME
    // ============================================================
    {
      id: "overtime_pay",
      title: "⏰ Unpaid overtime — Labor Code",
      description: "Overtime is paid at an increased rate: first 2 hours — 1.5x, next — 2x.",
      conditions: { labor_issue: ["overtime"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Overtime pay + compensation",
      tags: ["overtime", "unpaid", "law"],
      steps: [
        "Record overtime hours: timesheets, correspondence, system access logs",
        "Overtime requires employee consent",
        "Pay rate: first 2 hours — 1.5x, next — 2x",
        "Send claim to employer",
        "Contact Labor Inspectorate",
        "File lawsuit: overtime pay + moral damages",
        "Statute of limitations — 3 months"
      ],
      warnings: [
        "Overtime only with employee consent",
        "Statute of limitations — 3 months"
      ]
    },
    // ============================================================
    // 8. VACATION DENIED
    // ============================================================
    {
      id: "vacation_refusal",
      title: "🏖️ Vacation denied or vacation pay not paid",
      description: "Every employee has the right to annual paid vacation. Refusal is a violation.",
      conditions: { labor_issue: ["vacation"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Vacation pay + compensation",
      tags: ["vacation", "denied", "law"],
      steps: [
        "Check vacation schedule",
        "Submit vacation application (keep a copy)",
        "If refused — written claim",
        "Contact Labor Inspectorate",
        "If vacation denied for over 2 years — demand compensation",
        "Upon dismissal — demand compensation for unused vacation",
        "File lawsuit: vacation pay + moral damages"
      ],
      warnings: [
        "Vacation in the first year can be taken after 6 months",
        "Compensation for unused vacation upon dismissal — mandatory"
      ]
    },
    // ============================================================
    // 9. DISCRIMINATION
    // ============================================================
    {
      id: "discrimination_claim",
      title: "⚖️ Workplace discrimination — Labor Code",
      description: "Discrimination based on gender, age, nationality, pregnancy is prohibited.",
      conditions: { labor_issue: ["discrimination"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "3–12 months",
      yield_estimate: "Compensation + rights restored",
      tags: ["discrimination", "unfair", "court"],
      steps: [
        "Gather evidence: refusals, orders, correspondence, witnesses",
        "Send complaint to employer",
        "Contact Labor Inspectorate",
        "File complaint with prosecutor's office",
        "If damage occurred — lawsuit",
        "Claim: reinstatement, pay for forced absence, moral damages"
      ],
      warnings: [
        "Discrimination is prohibited",
        "Statute of limitations — 3 months"
      ]
    },
    // ============================================================
    // 10. LAYOFF
    // ============================================================
    {
      id: "layoff_compensation",
      title: "📉 Layoff — your rights",
      description: "In case of layoff, you have the right to 2 months' notice, severance pay, and priority retention.",
      conditions: { labor_issue: ["layoff"], fired_type: ["layoff_reduction"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Severance pay + salary retention for 2nd month",
      tags: ["layoff", "reduction", "law"],
      steps: [
        "Employer must give 2 months' notice (in writing)",
        "Priority retention: higher qualification, dependents",
        "Severance pay: average monthly earnings",
        "2nd month — average salary retained if not employed",
        "3rd month — if registered with employment service within 2 weeks",
        "If illegal layoff — file lawsuit for reinstatement",
        "Statute of limitations — 1 month"
      ],
      warnings: [
        "If you weren't given 2 months' notice — layoff is illegal",
        "Severance pay — up to 3 months in some cases"
      ]
    },
    // ============================================================
    // 11. UNFAIR PROBATION PERIOD
    // ============================================================
    {
      id: "probation_period",
      title: "📋 Probation period — your rights",
      description: "Probation period cannot exceed 3 months (6 for managers). Dismissal during probation requires justification.",
      conditions: { labor_issue: ["probation"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Rights protected + compensation",
      tags: ["probation", "law", "unfair"],
      steps: [
        "Probation: max 3 months (6 for managers)",
        "You have the same rights as other employees",
        "Dismissal during probation only with documented justification",
        "If dismissed without justification — reinstatement",
        "Final payment due on dismissal day",
        "Statute of limitations — 1 month"
      ],
      warnings: [
        "Salary during probation cannot be lower than other employees",
        "If pregnant or have children under 3 — probation is not established"
      ]
    },
    // ============================================================
    // 12. WORKPLACE INJURY
    // ============================================================
    {
      id: "workplace_injury",
      title: "🩹 Workplace injury — Labor Code",
      description: "In case of workplace injury — you have the right to paid sick leave, insurance payments, and compensation.",
      conditions: { labor_issue: ["injury"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Sick leave + insurance payments + compensation",
      tags: ["injury", "safety", "law"],
      steps: [
        "IMMEDIATELY document the injury: call ambulance, report to employer",
        "Employer must create an investigation commission",
        "If employer refuses — contact Labor Inspectorate",
        "Get sick leave — paid by Social Insurance Fund",
        "For severe injury — insurance payment from FSS",
        "File claim for moral damages",
        "If injury on way to/from work — also considered work-related"
      ],
      warnings: [
        "DON'T agree to sign that injury didn't happen at work",
        "Statute of limitations — 3 years"
      ]
    },
    // ============================================================
    // 13. SICK LEAVE
    // ============================================================
    {
      id: "sick_leave",
      title: "🩺 Sick leave — your rights",
      description: "Sick leave is paid depending on length of service: 60%, 80%, or 100% of average earnings.",
      conditions: { labor_issue: ["sick_leave"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Sick leave payment + compensation",
      tags: ["sick_leave", "payment", "law"],
      steps: [
        "Sick leave is paid by Social Insurance Fund",
        "Payment rate depends on length of service: up to 5 years — 60%, 5–8 years — 80%, over 8 years — 100%",
        "If employer doesn't pay — contact Labor Inspectorate",
        "File lawsuit for unpaid sick leave",
        "Statute of limitations — 3 months"
      ],
      warnings: [
        "Sick leave must be issued by a medical organization",
        "Upon dismissal — you have the right to sick leave payment within 30 days"
      ]
    },
    // ============================================================
    // 14. HAZARDOUS WORKING CONDITIONS
    // ============================================================
    {
      id: "hazardous_conditions",
      title: "☣️ Hazardous working conditions",
      description: "Working in hazardous conditions gives the right to additional vacation, reduced work week, and pay supplement.",
      conditions: { labor_issue: ["hazardous"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–6 months",
      yield_estimate: "Pay supplement + compensation",
      tags: ["hazardous", "conditions", "law"],
      steps: [
        "Check: was a special assessment of working conditions conducted?",
        "If conditions are hazardous — you have the right to: pay supplement (min 4%), additional vacation (min 7 days), reduced work week (36 hours)",
        "If employer doesn't pay — contact Labor Inspectorate",
        "File lawsuit for underpayment and moral damages",
        "Statute of limitations — 3 months"
      ],
      warnings: [
        "Special assessment is conducted every 5 years",
        "If employer didn't conduct assessment — fine up to $2,000"
      ]
    }
  ]
});