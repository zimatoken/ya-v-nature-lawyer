// modules/lawyer/data/en/dtp-en.js
// === MODULE: LAWYER — ACCIDENT / DTP ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "dtp",
    version: "1.0.0",
    lang: "en",
    title: "Car Accident / DTP",
    description: "Legal assistance for road traffic accidents — OSAGO, insurance claims, court, at-fault driver",
    icon: "🚨",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "dtp_type",
      type: "single",
      text: "What happened in the accident?",
      options: [
        { id: "minor", label: "🚗 Minor accident, minor damage (up to $2,000)", tags: ["minor"] },
        { id: "serious", label: "🚨 Serious accident, there are injured people", tags: ["serious"] },
        { id: "pedestrian", label: "🚶 Hit a pedestrian / cyclist", tags: ["pedestrian"] },
        { id: "hit_run", label: "🏃 The at-fault driver fled the scene (hit-and-run)", tags: ["hit_run"] },
        { id: "fault_dispute", label: "⚖️ Dispute about fault — I disagree", tags: ["fault_dispute"] },
        { id: "insurance_underpay", label: "📄 Insurance underpaid or refused", tags: ["insurance_underpay"] },
        { id: "parking", label: "🅿️ Accident in a parking lot", tags: ["parking"] },
        { id: "taxi_carsharing", label: "🚕 Accident in a taxi / car-sharing", tags: ["taxi_carsharing"] }
      ]
    },
    {
      id: "fault_party",
      type: "single",
      text: "Who is at fault? (in your opinion or according to documents)",
      conditions: { dtp_type: ["minor", "serious", "pedestrian", "fault_dispute", "insurance_underpay"] },
      options: [
        { id: "fault_other", label: "👤 Other driver (I'm not at fault)", tags: ["fault_other"] },
        { id: "fault_me", label: "👤 I am (I admit fault)", tags: ["fault_me"] },
        { id: "fault_both", label: "🤝 Both at fault (mutual fault)", tags: ["fault_both"] },
        { id: "fault_unknown", label: "❓ Don't know / disputing", tags: ["fault_unknown"] }
      ]
    },
    {
      id: "has_osago",
      type: "single",
      text: "Does the at-fault driver have valid OSAGO insurance?",
      conditions: { dtp_type: ["minor", "serious", "pedestrian", "fault_dispute", "insurance_underpay", "parking"] },
      options: [
        { id: "osago_yes", label: "✅ Yes, valid policy", tags: ["osago_yes"] },
        { id: "osago_no", label: "❌ No, no policy or expired", tags: ["osago_no"] },
        { id: "osago_unknown", label: "❓ Don't know / at-fault driver fled", tags: ["osago_unknown"] }
      ]
    },
    {
      id: "docs",
      type: "single",
      text: "What documents do you have?",
      conditions: { dtp_type: ["minor", "serious", "pedestrian", "fault_dispute", "insurance_underpay", "parking"] },
      options: [
        { id: "full", label: "📄 All: europrotocol / police report, photos, witnesses", tags: ["full"] },
        { id: "partial", label: "📋 Partial (something missing)", tags: ["partial"] },
        { id: "none", label: "❌ No documents / at-fault driver fled", tags: ["none"] }
      ]
    },
    {
      id: "claim_deadline",
      type: "single",
      text: "How much time has passed since the accident?",
      conditions: { dtp_type: ["minor", "serious", "pedestrian", "fault_dispute", "insurance_underpay", "parking"] },
      options: [
        { id: "within_5_days", label: "📅 Less than 5 working days", tags: ["within_5_days"] },
        { id: "within_15_days", label: "📆 5-15 working days", tags: ["within_15_days"] },
        { id: "over_15_days", label: "📈 More than 15 working days", tags: ["over_15_days"] }
      ]
    },
    {
      id: "injuries",
      type: "single",
      text: "Are there any injured people?",
      conditions: { dtp_type: ["serious", "pedestrian"] },
      options: [
        { id: "injuries_severe", label: "🚑 Severe injuries, hospitalization", tags: ["severe"] },
        { id: "injuries_light", label: "🩹 Minor injuries (bruises, scratches)", tags: ["light"] },
        { id: "no_injuries", label: "✅ No injured people", tags: ["no_injuries"] }
      ]
    },
    {
      id: "witnesses",
      type: "single",
      text: "Do you have witnesses or video footage?",
      conditions: { dtp_type: ["minor", "serious", "pedestrian", "fault_dispute", "hit_run", "parking"] },
      options: [
        { id: "witness_yes", label: "👥 Yes, witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "video", label: "📹 Yes, video footage (dashcam, cameras)", tags: ["video"] },
        { id: "no_evidence", label: "❌ No witnesses or video", tags: ["no_evidence"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EUROPROTOCOL (WITHOUT POLICE)
    // ============================================================
    {
      id: "europrotocol",
      title: "📋 Europrotocol (without police) — quick settlement",
      description: "For minor accidents without injuries, without fault dispute, and with OSAGO for both — you can use the europrotocol.",
      conditions: { dtp_type: ["minor"], fault_party: ["fault_other", "fault_me"], has_osago: ["osago_yes"], docs: ["full"], claim_deadline: ["within_5_days"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20-40 min + 5 days to file",
      yield_estimate: "OSAGO payout up to $2,000-$7,000",
      tags: ["europrotocol", "osago", "simple"],
      steps: [
        "Turn on hazard lights, place warning triangle",
        "Take photos: general view, damage, license plates, road signs, skid marks",
        "Fill out the europrotocol (paper form or via the 'DTP-Europrotocol' app)",
        "Draw the accident diagram, describe circumstances",
        "Both drivers sign, each takes a copy. DON'T sign if you disagree!",
        "File a claim with your insurance company within 5 working days",
        "Attach: europrotocol, photos, copy of documents"
      ],
      warnings: [
        "DON'T leave the accident scene before documentation",
        "DON'T sign the europrotocol if you doubt fault or damages exceed the limit",
        "If the at-fault driver has NO OSAGO — europrotocol is INVALID",
        "Submission deadline: strictly 5 working days"
      ]
    },
    // ============================================================
    // 2. CALLING POLICE (GIBDD)
    // ============================================================
    {
      id: "gibdd_call",
      title: "👮 Calling police (GIBDD) — for serious accidents",
      description: "For serious accidents, injuries, fault disputes, or no OSAGO — call GIBDD.",
      conditions: { dtp_type: ["serious", "pedestrian", "fault_dispute", "hit_run", "parking"], has_osago: ["osago_no", "osago_unknown"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 hours",
      yield_estimate: "Police report + accident diagram",
      tags: ["gibdd", "police", "serious"],
      steps: [
        "If there are injuries — call ambulance FIRST (112)",
        "Call GIBDD (102 or 112)",
        "DON'T move the cars before the officer arrives",
        "Take photos of everything before GIBDD arrives",
        "Get witnesses' contacts",
        "Get copies of ALL documents: police report, diagram, protocol",
        "File with insurance within 5 working days"
      ],
      warnings: [
        "DON'T leave the accident scene — fine or license suspension",
        "DON'T admit fault verbally — only in writing after legal advice",
        "DON'T sign GIBDD documents without reading them carefully"
      ]
    },
    // ============================================================
    // 3. AT-FAULT DRIVER WITHOUT OSAGO OR FLEEING
    // ============================================================
    {
      id: "no_osago",
      title: "🏃 At-fault driver without OSAGO or fleeing — what to do",
      description: "If the at-fault driver has no OSAGO — you won't get an OSAGO payout. Your route: direct claim or court.",
      conditions: { has_osago: ["osago_no", "osago_unknown"], dtp_type: ["minor", "serious", "pedestrian", "fault_dispute"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court",
      tags: ["no_osago", "court", "compensation"],
      steps: [
        "Record EVERYTHING: photos, video, license plates, witness contacts",
        "Get a police report identifying the at-fault driver",
        "Send a pre-trial claim to the at-fault driver (certified mail)",
        "Response deadline: 30 days. If no response — file a lawsuit",
        "For the lawsuit, you need an independent damage assessment",
        "Statute of limitations: 3 years from the accident"
      ],
      warnings: [
        "DON'T repair the car BEFORE the expert assessment",
        "Independent expert assessment is MANDATORY",
        "If the at-fault driver is unknown — contact the RSA for compensation"
      ]
    },
    // ============================================================
    // 4. HIT-AND-RUN
    // ============================================================
    {
      id: "hit_and_run",
      title: "🏃 Hit-and-run — action plan",
      description: "Leaving the accident scene is an administrative violation. The at-fault driver can be found and prosecuted.",
      conditions: { dtp_type: ["hit_run"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1-6 months",
      yield_estimate: "At-fault driver identified + compensation",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "IMMEDIATELY call GIBDD (102) — the sooner, the higher the chance to find the driver",
        "Save EVERYTHING: photo, video, license plate, color, make, direction, time",
        "Look for witnesses — they may remember the license plate",
        "Request CCTV footage",
        "GIBDD opens a case under the Code of Administrative Offenses",
        "If the driver is found — you can claim damages through court",
        "If not found — claim compensation through RSA"
      ],
      warnings: [
        "If the driver fled and you didn't call GIBDD — you could be accused of hit-and-run",
        "CCTV footage is stored for 7-30 days — request immediately"
      ]
    },
    // ============================================================
    // 5. INSURANCE UNDERPAYMENT
    // ============================================================
    {
      id: "insurance_underpayment",
      title: "📄 Insurance underpaid or refused — action plan",
      description: "Insurance companies often underpay. You can and should challenge this through independent expert assessment and court.",
      conditions: { dtp_type: ["insurance_underpay"], docs: ["full", "partial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 months",
      yield_estimate: "Additional payout + 1% penalty per day",
      tags: ["insurance", "underpayment", "court"],
      steps: [
        "Demand a written refusal or inspection report",
        "Order an independent expert assessment (BEFORE repairs!)",
        "Send a pre-trial claim to the insurance company demanding the difference",
        "If no response — file a lawsuit",
        "In the lawsuit demand: additional payout + penalty + moral damages + 50% fine",
        "File a complaint with the Central Bank (they regulate insurance companies)"
      ],
      warnings: [
        "DON'T accept the insurance company's low estimate — it's their standard tactic",
        "DON'T sign the inspection report if you disagree — write objections",
        "Independent expert assessment BEFORE repairs is key evidence in court"
      ]
    },
    // ============================================================
    // 6. DIRECT COMPENSATION
    // ============================================================
    {
      id: "direct_compensation",
      title: "🔄 Direct compensation — go to YOUR insurance company",
      description: "You can go to YOUR insurance company for compensation, even if the at-fault driver is someone else.",
      conditions: { dtp_type: ["minor", "serious", "pedestrian"], fault_party: ["fault_other"], has_osago: ["osago_yes"], docs: ["full"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-20 days",
      yield_estimate: "OSAGO payout",
      tags: ["direct_compensation", "osago", "law"],
      steps: [
        "Check: accident with 2 vehicles, both have OSAGO, no serious injuries",
        "Apply to YOUR insurance company",
        "File within 5 working days",
        "Attach: europrotocol/police report, photos, documents",
        "Insurance must inspect and pay within 20 days"
      ],
      warnings: [
        "Direct compensation works if the at-fault driver has OSAGO",
        "If the at-fault driver has NO OSAGO — direct compensation DOES NOT WORK",
        "If there are severe injuries — also DOES NOT WORK"
      ]
    },
    // ============================================================
    // 7. FAULT DISPUTE
    // ============================================================
    {
      id: "fault_dispute",
      title: "⚖️ Fault dispute — how to protect yourself",
      description: "If you disagree with the charges — gather evidence, insist on an objective investigation.",
      conditions: { dtp_type: ["fault_dispute"], witnesses: ["witness_yes", "video"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1-6 months",
      yield_estimate: "Fault reduced or dropped",
      tags: ["fault", "dispute", "evidence"],
      steps: [
        "Gather ALL evidence: photos, video, dashcam, witness statements, accident diagram",
        "Write a written explanation for GIBDD and insurance",
        "Request CCTV footage (stored for up to 7 days)",
        "Record witness statements in writing",
        "If GIBDD ruled you at fault — appeal within 10 days",
        "In court, you can challenge fault — requires auto-technical expert assessment"
      ],
      warnings: [
        "DON'T admit fault verbally — it can be used against you",
        "DON'T sign the accident diagram if you disagree — write objections",
        "Appeal deadline for GIBDD ruling — 10 days"
      ]
    },
    // ============================================================
    // 8. ACCIDENT WITH INJURIES
    // ============================================================
    {
      id: "injuries_dtp",
      title: "🚑 Accident with injuries — action plan",
      description: "In accidents with injuries, the priority is life and health. Legal matters come after medical help.",
      conditions: { dtp_type: ["serious", "pedestrian"], injuries: ["severe", "light"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 hours",
      yield_estimate: "Health compensation + moral damages",
      tags: ["injuries", "ambulance", "police"],
      steps: [
        "FIRST: call ambulance (112) — even for minor injuries",
        "Call GIBDD (102)",
        "DON'T move the injured person (except immediate danger)",
        "Provide first aid",
        "Record video/photo of the injured person's condition",
        "Get witness contacts",
        "Get police documents and medical certificates",
        "File with insurance: health compensation — up to $7,000",
        "For severe injuries — file for moral damages"
      ],
      warnings: [
        "DON'T give water/food to the injured before the ambulance arrives",
        "DON'T move the injured if spinal injury is suspected",
        "Statute of limitations for health damages — 3 years"
      ]
    },
    // ============================================================
    // 9. ACCIDENT WITH PEDESTRIAN
    // ============================================================
    {
      id: "pedestrian_dtp",
      title: "🚶 Accident with a pedestrian — specifics",
      description: "Hit-and-run with a pedestrian is one of the most serious accidents. Consequences: administrative or criminal liability.",
      conditions: { dtp_type: ["pedestrian"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 months",
      yield_estimate: "Compensation for pedestrian + driver defense",
      tags: ["pedestrian", "injuries", "law"],
      steps: [
        "IMMEDIATELY call ambulance and GIBDD (112)",
        "DON'T move the pedestrian — only in immediate danger",
        "Record video/photo: position, car, skid marks, signs, traffic lights",
        "Get witness contacts",
        "Get police report and medical documents",
        "If the pedestrian crossed illegally — may reduce your fault",
        "Driver liability: administrative or criminal",
        "An auto-technical expert assessment is MANDATORY"
      ],
      warnings: [
        "If the pedestrian crossed against a red light or outside a crosswalk — it may be their fault",
        "If you didn't see the pedestrian — doesn't remove liability, but may mitigate punishment",
        "Insurance pays the pedestrian up to $7,000"
      ]
    },
    // ============================================================
    // 10. ACCIDENT IN PARKING LOT
    // ============================================================
    {
      id: "parking_dtp",
      title: "🅿️ Accident in a parking lot — action plan",
      description: "Parking lot accidents are handled the same as regular accidents. But there are specifics: the at-fault driver often leaves a note or flees.",
      conditions: { dtp_type: ["parking"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "20-40 min + police call",
      yield_estimate: "Damage compensation",
      tags: ["parking", "damage", "police"],
      steps: [
        "If the at-fault driver is present — use europrotocol or call GIBDD",
        "If the driver fled but left a note with a phone number — contact them",
        "If the driver fled without a note — call GIBDD, record damage on photo/video",
        "Check CCTV footage",
        "Deadline for insurance claim: 5 working days",
        "If the driver not found — CASCO pays (if you have it), under OSAGO — only through court or RSA"
      ],
      warnings: [
        "Leaving an accident scene in a parking lot is the same violation as on the road",
        "CCTV footage is stored for 7-30 days — request immediately"
      ]
    },
    // ============================================================
    // 11. ACCIDENT IN TAXI / CAR-SHARING
    // ============================================================
    {
      id: "taxi_carsharing_dtp",
      title: "🚕 Accident in taxi / car-sharing — specifics",
      description: "In taxi or car-sharing accidents, special rules apply: often increased driver liability.",
      conditions: { dtp_type: ["taxi_carsharing"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1-3 months",
      yield_estimate: "Damage compensation",
      tags: ["taxi", "carsharing", "insurance"],
      steps: [
        "In taxi accident: driver must notify dispatch, call GIBDD",
        "In car-sharing accident: IMMEDIATELY call car-sharing support",
        "Call GIBDD — europrotocol often doesn't apply to taxi/car-sharing",
        "Get police documents",
        "Insurance: taxi and car-sharing have CASCO and OSAGO",
        "If you're a passenger: you have the right to compensation",
        "If you're a taxi/car-sharing driver: check the contract — may have increased deductible"
      ],
      warnings: [
        "Car-sharing contracts often have increased driver liability (deductible up to $2,000)",
        "If the taxi driver is at fault — the taxi company may recover damages from the driver",
        "Notify car-sharing support within 1-2 hours of the accident"
      ]
    },
    // ============================================================
    // 12. INDEPENDENT EXPERT ASSESSMENT
    // ============================================================
    {
      id: "independent_expertise",
      title: "🔬 Independent expert assessment for accidents",
      description: "If the insurance underpaid or you disagree with the assessment — order an independent expert assessment BEFORE repairs.",
      conditions: { dtp_type: ["insurance_underpay", "fault_dispute"], docs: ["full", "partial"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "7-14 days",
      yield_estimate: "Actual repair cost",
      tags: ["expertise", "independent", "repair"],
      steps: [
        "Choose an accredited expert organization",
        "Sign a contract for the expert assessment",
        "The expert inspects the car (BEFORE repairs!)",
        "Get the expert report with the repair cost calculation",
        "Send the report to the insurance company with a pre-trial claim",
        "If no response — file a lawsuit",
        "The cost of the expertise can be included in court costs if you win"
      ],
      warnings: [
        "Independent expert assessment MUST be done BEFORE repairs!",
        "Only use accredited organizations — otherwise the court may not accept the report",
        "If the insurance disputes the expertise — the court may order a repeat forensic examination"
      ]
    }
  ]
});