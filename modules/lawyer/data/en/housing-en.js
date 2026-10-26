// modules/lawyer/data/en/housing-en.js
// === MODULE: LAWYER — HOUSING ISSUES ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "housing",
    version: "1.0.0",
    lang: "en",
    title: "Housing Issues",
    description: "Neighbors, utilities, rent, flooding, privatization, renovation — protecting your rights",
    icon: "🏠",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "housing_issue",
      type: "single",
      text: "What is your housing problem?",
      options: [
        { id: "neighbors_noise", label: "🔊 Noisy neighbors (music, renovation, yelling)", tags: ["noise"] },
        { id: "neighbors_flood", label: "💧 Neighbors upstairs flooded my apartment", tags: ["flood"] },
        { id: "neighbors_smell", label: "😷 Bad smell / garbage from neighbors", tags: ["smell"] },
        { id: "uk_bad", label: "🏢 Management company / HOA not fulfilling duties", tags: ["uk"] },
        { id: "rent", label: "🔑 Rental problems / eviction", tags: ["rent"] },
        { id: "utilities_overpay", label: "💰 Inflated utility bills", tags: ["overpay"] },
        { id: "illegal_rental", label: "🚫 Neighbors illegally renting out apartment", tags: ["illegal_rental"] },
        { id: "privatization", label: "📄 Apartment privatization", tags: ["privatization"] },
        { id: "renovation", label: "🔨 Illegal renovation / redevelopment", tags: ["renovation"] },
        { id: "emergency", label: "⚠️ Emergency building condition / relocation", tags: ["emergency"] },
        { id: "major_repair", label: "🔧 Major repairs (capital repairs)", tags: ["major_repair"] }
      ]
    },
    {
      id: "ownership_type",
      type: "single",
      text: "What type of property ownership do you have?",
      conditions: { housing_issue: ["privatization", "renovation", "emergency", "major_repair", "uk_bad"] },
      options: [
        { id: "private", label: "🏠 Privatized / owned", tags: ["private"] },
        { id: "municipal", label: "🏛️ Municipal / social rental", tags: ["municipal"] },
        { id: "cooperative", label: "🏢 Housing cooperative (HOA)", tags: ["cooperative"] }
      ]
    },
    {
      id: "registration",
      type: "single",
      text: "Are you registered in this apartment?",
      conditions: { housing_issue: ["privatization", "emergency"] },
      options: [
        { id: "registered_yes", label: "✅ Yes, I'm registered", tags: ["registered_yes"] },
        { id: "registered_no", label: "❌ No, living without registration", tags: ["registered_no"] },
        { id: "registered_family", label: "👨‍👩‍👧‍👦 Only my family members are registered", tags: ["registered_family"] }
      ]
    },
    {
      id: "uk_problem",
      type: "single",
      text: "What exactly is wrong with the management company / utilities?",
      conditions: { housing_issue: ["uk_bad", "utilities_overpay"] },
      options: [
        { id: "cold", label: "❄️ No heating / cold radiators", tags: ["cold"] },
        { id: "water_off", label: "💡 Water / electricity shut off without warning", tags: ["water_off"] },
        { id: "garbage", label: "🗑️ Garbage not collected / dirty entrance / yard", tags: ["garbage"] },
        { id: "overpay_uk", label: "💰 Inflated bills / extra services on the receipt", tags: ["overpay_uk"] },
        { id: "emergency_uk", label: "⚠️ Emergency condition of the building / roof / basement", tags: ["emergency_uk"] },
        { id: "no_response", label: "📵 Management company doesn't respond to requests", tags: ["no_response"] }
      ]
    },
    {
      id: "have_contract",
      type: "single",
      text: "Do you have a rental contract?",
      conditions: { housing_issue: ["rent"] },
      options: [
        { id: "contract_yes", label: "📄 Yes, written contract", tags: ["contract_yes"] },
        { id: "contract_no", label: "🗣️ No contract (verbal agreement)", tags: ["contract_no"] },
        { id: "contract_expired", label: "📅 Contract expired but I still live there", tags: ["contract_expired"] }
      ]
    },
    {
      id: "damage_amount",
      type: "single",
      text: "What is the estimated damage amount from the flooding?",
      conditions: { housing_issue: ["neighbors_flood"] },
      options: [
        { id: "damage_small", label: "💵 Up to 50,000 rubles", tags: ["small"] },
        { id: "damage_medium", label: "💰 50,000 – 200,000 rubles", tags: ["medium"] },
        { id: "damage_large", label: "💸 Over 200,000 rubles", tags: ["large"] }
      ]
    },
    {
      id: "renovation_type",
      type: "single",
      text: "What exactly was renovated?",
      conditions: { housing_issue: ["renovation"] },
      options: [
        { id: "walls", label: "🧱 Demolition / moving walls", tags: ["walls"] },
        { id: "bathroom", label: "🚽 Bathroom / toilet reconfiguration", tags: ["bathroom"] },
        { id: "kitchen", label: "🍳 Kitchen / gas equipment renovation", tags: ["kitchen"] },
        { id: "balcony", label: "🏗️ Balcony / loggia joining", tags: ["balcony"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. NOISY NEIGHBORS — Art. 17 of the Housing Code
    // ============================================================
    {
      id: "noise_neighbors",
      title: "🔊 Dealing with noisy neighbors — Art. 17 of the Housing Code",
      description: "Noise is a violation of your rights. Act step by step: from verbal warning to court.",
      conditions: { housing_issue: ["neighbors_noise"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Peace and quiet + compensation",
      tags: ["noise", "neighbors", "law"],
      steps: [
        "Record the noise: audio/video with time and date. Download a decibel meter app (it will show the noise level)",
        "Talk to the neighbors — often the conflict is resolved verbally. Better in writing: a note in the mailbox",
        "Contact the HOA chairperson or the management company — they are required to conduct a conversation",
        "Call the police (102) for noise violations during nighttime. Quiet hours are regional law (usually 23:00–07:00, weekends 22:00–10:00)",
        "File a complaint with Rospotrebnadzor — noise above the norm (55 dB during the day, 45 dB at night) — violation of sanitary norms",
        "For systematic violations — file a lawsuit for moral damages (Art. 151 of the Civil Code). Amount: from 5,000 to 100,000 rubles",
        "Extreme case: court order against noise violation + asset seizure for non-compliance"
      ],
      warnings: [
        "DON'T engage in physical conflict — this is your criminal liability (Art. 116 of the Criminal Code)",
        "Noise laws are regional. In Moscow: 23:00–07:00, in Moscow region: 21:00–08:00. Check your region!",
        "Renovation is allowed: on weekdays 9:00–19:00, on weekends — according to regional laws",
        "If neighbors are aggressive — call the police, don't risk your safety"
      ]
    },
    // ============================================================
    // 2. APARTMENT FLOODING — Art. 1064 of the Civil Code
    // ============================================================
    {
      id: "flood_action",
      title: "💧 Apartment flooding — action plan",
      description: "Flooding is a serious problem. Act quickly and correctly to recover damages.",
      conditions: { housing_issue: ["neighbors_flood"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Damage compensation + compensation",
      tags: ["flood", "damage", "court"],
      steps: [
        "IMMEDIATELY document the consequences: photos and videos of ALL damage with date and time (on phone or camera)",
        "Shut off the water (if possible) or call the management company's emergency service at the number on your receipt",
        "Call a representative of the management company / HOA to draw up a FLOOD REPORT (request a copy!). The report must have signatures from you, the neighbor, and the management company representative",
        "If the management company doesn't come — call an independent expert (keep the receipt). The expert will draw up a report with damage assessment",
        "Identify the person at fault: upstairs neighbors (pipe burst, forgot to close the tap), roof leak (management company's fault), common pipe burst (management company's fault)",
        "Send the person at fault a pre-trial claim with damage calculation (certified mail with acknowledgment of receipt). Response deadline — 30 days",
        "If they refuse — file a lawsuit: damages + moral damages (Art. 151 of the Civil Code) + costs for expert and lawyer",
        "For serious damage — contact your insurance company, if you have a property insurance policy"
      ],
      warnings: [
        "DON'T do repairs BEFORE the expert assessment and BEFORE the court — otherwise you won't prove the amount of damage. The expert assessment must be done before repairs!",
        "The flood report is the MAIN document. Without it, the court may refuse. Demand it on the day of the flood",
        "Statute of limitations — 3 years (Art. 196 of the Civil Code), but gather evidence immediately",
        "If the person at fault is a neighbor and they don't pay: court + bailiffs + seizure of property and accounts (Art. 46 of Federal Law No. 229)"
      ]
    },
    // ============================================================
    // 3. SMELL / GARBAGE FROM NEIGHBORS — Art. 17, 23 of the Housing Code
    // ============================================================
    {
      id: "smell_garbage",
      title: "😷 Bad smell / garbage from neighbors — what to do",
      description: "Bad smell, garbage in the entrance, unsanitary conditions — violation of sanitary norms. There are ways to address it.",
      conditions: { housing_issue: ["neighbors_smell"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 months",
      yield_estimate: "Violation eliminated",
      tags: ["smell", "garbage", "sanitary"],
      steps: [
        "Document: photos, videos, dates and times of the smell, complaint log",
        "Send a written application to the management company / HOA — they are required to conduct an inspection",
        "If the management company doesn't respond — complaint to Rospotrebnadzor (violation of sanitary norms, Art. 23 of the Housing Code)",
        "Simultaneously — complaint to the Housing Inspection (Goszhilnadzor)",
        "If neighbors create unsanitary conditions — call the police (102) and Rospotrebnadzor",
        "For systematic violations — file a lawsuit for moral damages (Art. 151 of the Civil Code)"
      ],
      warnings: [
        "DON'T try to enter the neighbors' apartment — this is illegal (Art. 139 of the Criminal Code)",
        "If neighbors keep animals in unsanitary conditions — call the police",
        "If the smell comes from the ventilation — demand the management company check the ventilation"
      ]
    },
    // ============================================================
    // 4. MANAGEMENT COMPANY NOT PERFORMING DUTIES — Art. 161, 162 of the Housing Code
    // ============================================================
    {
      id: "uk_bad_service",
      title: "🏢 Management company not performing duties — Art. 161, 162 of the Housing Code",
      description: "The management company is required to maintain the building in proper condition. If it doesn't — you can hold it accountable.",
      conditions: { housing_issue: ["uk_bad"], uk_problem: ["cold", "water_off", "garbage", "emergency_uk", "no_response"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Violations eliminated + recalculation",
      tags: ["uk", "utilities", "law"],
      steps: [
        "Document violations: photos, videos, meter readings, correspondence with the management company (electronic or written)",
        "Send a written complaint to the management company demanding the violations be eliminated (certified mail with acknowledgment of receipt). Keep a copy",
        "If the management company doesn't respond within 10 days — complaint to the Housing Inspection (Goszhilnadzor) — they will conduct an inspection and issue an order",
        "Simultaneously — complaint to the prosecutor's office (if violations are widespread, threaten life)",
        "In case of no heating/water — complaint to Rospotrebnadzor (violation of sanitary norms)",
        "Claim a penalty: for each day of poor-quality service — 3% of the payment for that service (Art. 157 of the Housing Code)",
        "A mass complaint from residents of the building is more effective than an individual one. Collect signatures",
        "Change the management company: hold a general meeting, make a decision to change, choose a new management company (Art. 161 of the Housing Code)"
      ],
      warnings: [
        "DON'T stop paying for utilities completely — penalties will accrue. Pay, but with a written complaint of disagreement",
        "If the management company refuses to work — hold a general meeting and change the management company (Art. 161 of the Housing Code)",
        "Check the management company's license on the GZHI website — if expired, complaint to the prosecutor's office = fine",
        "If the building is in emergency condition — demand relocation through the city administration (Art. 86 of the Housing Code)"
      ]
    },
    // ============================================================
    // 5. OVERPAYMENT FOR UTILITIES — Art. 157 of the Housing Code
    // ============================================================
    {
      id: "utilities_overpay",
      title: "📊 Utility overpayment — how to get your money back",
      description: "If extra services or inflated amounts appear on your bills — you can dispute the charges.",
      conditions: { housing_issue: ["utilities_overpay"], uk_problem: ["overpay_uk"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Recalculation + refund of overpayment",
      tags: ["utilities", "overpay", "law"],
      steps: [
        "Compare bills for the last 6–12 months — identify extra services or inflated tariffs",
        "Check tariffs on the management company website, at GZHI, or on the city administration website",
        "Send an application to the management company demanding recalculation and removal of extra services (Art. 157 of the Housing Code)",
        "If the management company doesn't respond — complaint to the Housing Inspection (Goszhilnadzor) — they will check the legality of charges",
        "Simultaneously — complaint to Rospotrebnadzor (consumer protection, Art. 16 of the Consumer Protection Law)",
        "If the management company refuses — file a lawsuit, demand a refund of overpayment + penalty (3% for each day of delay)",
        "If you win — the management company is obliged to return the money with interest (Art. 395 of the Civil Code)",
        "Statute of limitations — 3 years (Art. 196 of the Civil Code), you can recover overpayment for this period"
      ],
      warnings: [
        "Statute of limitations — 3 years, but start with a claim, don't delay",
        "Keep all receipts and payment documents (checks, statements)",
        "If a service was not provided — you have the right not to pay for it (Art. 157 of the Housing Code)",
        "Collective complaints are more effective — gather your neighbors"
      ]
    },
    // ============================================================
    // 6. RECALCULATION FOR UTILITIES — Art. 157 of the Housing Code
    // ============================================================
    {
      id: "utility_recalculation",
      title: "📊 Recalculation for utilities",
      description: "If services were of poor quality or you were not at home — you have the right to recalculation.",
      conditions: { housing_issue: ["uk_bad", "utilities_overpay"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Recalculation + refund",
      tags: ["utilities", "recalculation", "law"],
      steps: [
        "Recalculation for poor-quality services: if heating was cold, water dirty, electricity was cut off — demand recalculation (Art. 157 of the Housing Code)",
        "Recalculation for temporary absence: if you were away from home for more than 5 days — demand recalculation by meters or standards (Government Decree No. 354)",
        "Send an application to the management company demanding recalculation and attach evidence: meter readings, tickets, certificates",
        "If the management company doesn't recalculate — complaint to Goszhilnadzor and Rospotrebnadzor",
        "If refused — court: demand recalculation + compensation for moral damages"
      ],
      warnings: [
        "Recalculation for absence — only if there are no meters or you can prove absence (tickets, certificates)",
        "Deadline for filing a recalculation application — 30 days after return",
        "For poor-quality services — recalculation for each day of violation"
      ]
    },
    // ============================================================
    // 7. RENTAL PROBLEMS — Art. 671-688 of the Civil Code
    // ============================================================
    {
      id: "rent_problems",
      title: "🔑 Rental problems / eviction — Art. 671-688 of the Civil Code",
      description: "Renting is risky. But both the tenant and the landlord have rights. The contract is the main document.",
      conditions: { housing_issue: ["rent"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Rights protected + deposit returned",
      tags: ["rent", "eviction", "contract"],
      steps: [
        "Check the rental contract: what it says about termination, deadlines, deposit, penalties. Without a contract — it's difficult to protect your rights",
        "If you are being evicted illegally: demand written notice (verbal is illegal!). Eviction period — minimum 3 months under the contract, 6 months in case of overdue payment (Art. 687 of the Civil Code)",
        "In case of illegal eviction — contact the police (trespassing — Art. 139 of the Criminal Code)",
        "If the landlord doesn't return the deposit: send a claim, then file a lawsuit in magistrate court (up to 100,000 rubles) or district court (over 100,000 rubles)",
        "If the tenant doesn't pay: landlord — claim → court → eviction through bailiffs (Art. 35 of the Housing Code)",
        "When moving out: draw up an acceptance certificate, photograph the condition of the apartment, sign with the landlord",
        "If the contract is verbal — gather evidence: correspondence, payment receipts, witness statements"
      ],
      warnings: [
        "DON'T rent out / rent an apartment without a contract — this leads to problems. The contract protects both parties",
        "The deposit must be specified in the contract with return conditions. If not specified — it's difficult to get back",
        "If the landlord demands a deposit 'for the last month' — this is illegal (it's a security deposit, not payment)",
        "In case of eviction through court — bailiffs have the right to open the door if you don't open (Art. 35 of Federal Law No. 229)"
      ]
    },
    // ============================================================
    // 8. ILLEGAL RENTAL — Art. 17 of the Housing Code
    // ============================================================
    {
      id: "illegal_rental_neighbors",
      title: "🚫 Neighbors illegally renting out apartment / noisy tenants",
      description: "If neighbors rent out the apartment to constantly changing tenants or illegally — you can take action.",
      conditions: { housing_issue: ["illegal_rental"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 months",
      yield_estimate: "Neighbors held accountable",
      tags: ["illegal_rental", "neighbors", "police"],
      steps: [
        "Document tenant changes: photos, videos, dates, complaint log",
        "File a complaint with the police — nighttime noise, violation of registration rules (Art. 19.15 of the Code of Administrative Offenses)",
        "Contact the management company / HOA — they are required to monitor compliance with residency rules (Art. 17 of the Housing Code)",
        "If the apartment is rented illegally — complaint to the Federal Tax Service — neighbors are not paying taxes on income (Art. 228 of the Tax Code)",
        "If the apartment is used as a hostel — this is a direct violation (Government Decree No. 581)",
        "For systematic violations — file a lawsuit to compel compliance with neighbors' rights (Art. 304 of the Civil Code)"
      ],
      warnings: [
        "DON'T engage in conflict with tenants — call the police, that's their job",
        "Check if the neighbors have permission to rent in a multi-apartment building",
        "If the apartment is rented for more than 5 days in a row — this is commercial activity, license and taxes are required"
      ]
    },
    // ============================================================
    // 9. APARTMENT PRIVATIZATION — Art. 1-11 of Federal Law No. 1541-1
    // ============================================================
    {
      id: "privatization",
      title: "📄 Apartment privatization — action plan",
      description: "Privatization is the free transfer of housing into ownership. Only registered residents can participate.",
      conditions: { housing_issue: ["privatization"], ownership_type: ["municipal"], registration: ["registered_yes", "registered_family"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "2–6 months",
      yield_estimate: "Certificate of ownership",
      tags: ["privatization", "ownership", "law"],
      steps: [
        "Check: the apartment must be municipal (social rental). Privatization is free for Russian citizens living in the apartment",
        "Collect a package of documents: application, passports of all registered residents, social rental contract, extract from the house register, extract from the Unified State Register of Real Estate",
        "The application is submitted to the district administration (Department of Housing Policy) or the MFC (multifunctional center)",
        "Review period — 2 months. If refused — demand a written refusal",
        "If the refusal is illegal — appeal to court (the court will compel privatization)",
        "Privatization is carried out with the consent of ALL registered residents. Children under 14 — consent of legal representatives",
        "After privatization — the apartment becomes your property (you can sell, gift, bequeath)",
        "Deadline: privatization is valid until 2025 (then a new procedure)"
      ],
      warnings: [
        "Privatization — only with the consent of ALL registered residents. If someone is against — only through court",
        "Minor children — must participate in privatization (their share must be allocated)",
        "If you are not registered in the apartment — you CANNOT participate in privatization",
        "Deadline for free privatization — until 2025 (Federal Law No. 14 of 01.03.2020)"
      ]
    },
    // ============================================================
    // 10. PRIVATIZATION REFUSAL — Art. 8 of Federal Law No. 1541-1
    // ============================================================
    {
      id: "privatization_refusal",
      title: "📄 Privatization refusal — what to do",
      description: "A refusal of privatization can be appealed in court if it is illegal.",
      conditions: { housing_issue: ["privatization"], ownership_type: ["municipal"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "2–6 months",
      yield_estimate: "Privatization through court",
      tags: ["privatization", "refusal", "court"],
      steps: [
        "Get a written refusal with the reason stated (this is a legal requirement)",
        "Grounds for refusal: apartment in an emergency building, in a closed military town, service apartment, dormitory, under arrest",
        "If the refusal is illegal — file a lawsuit to compel privatization of the apartment (Art. 8 of Federal Law No. 1541-1)",
        "In court: attach the refusal, package of documents, prove the right to privatization",
        "The court will compel the administration to privatize the apartment if the refusal is illegal",
        "If you win — receive a certificate of ownership"
      ],
      warnings: [
        "Service apartments, dormitories, emergency housing — are NOT subject to privatization",
        "Deadline for appealing the refusal — 3 months (Art. 256 of the Civil Procedure Code)",
        "The prosecutor must participate in the court case"
      ]
    },
    // ============================================================
    // 11. ILLEGAL RENOVATION — Art. 26-29 of the Housing Code
    // ============================================================
    {
      id: "illegal_renovation",
      title: "🔨 Illegal renovation — Art. 26-29 of the Housing Code",
      description: "Renovation without approval is a violation. Consequences: fine and obligation to restore the original condition.",
      conditions: { housing_issue: ["renovation"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–6 months",
      yield_estimate: "Renovation legalized",
      tags: ["renovation", "illegal", "law"],
      steps: [
        "Check: renovation requires a project and approval from the housing inspection (Art. 26 of the Housing Code)",
        "If renovation is already done — contact Goszhilnadzor for legalization",
        "Submit an application and package of documents: technical passport, renovation project, application",
        "Review period — 45 days (Art. 27 of the Housing Code)",
        "If renovation is safe — it will be legalized. If not — they will compel you to restore the original condition",
        "Fine for illegal renovation: 2,000 – 2,500 rubles (Art. 7.21 of the Code of Administrative Offenses)",
        "If the renovation threatens the safety of the building — the court may compel demolition and fine you"
      ],
      warnings: [
        "BEFORE renovation — agree with Goszhilnadzor! After — difficult and expensive",
        "Demolition of load-bearing walls — without a project and consent is categorically prohibited",
        "When selling an apartment with illegal renovation — difficulties with transaction registration",
        "If renovation is already done — don't delay legalization"
      ]
    },
    // ============================================================
    // 12. EMERGENCY BUILDING — RELOCATION — Art. 86-87 of the Housing Code
    // ============================================================
    {
      id: "emergency_relocation",
      title: "⚠️ Emergency building — relocation (Art. 86-87 of the Housing Code)",
      description: "If a building is declared emergency — residents have the right to other housing (equivalent in area).",
      conditions: { housing_issue: ["emergency"], ownership_type: ["municipal", "private"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "6–24 months",
      yield_estimate: "New housing",
      tags: ["emergency", "relocation", "law"],
      steps: [
        "Check: the building is declared emergency by an interdepartmental commission. The decision should be with the administration",
        "Request a copy of the commission's conclusion. If not available — submit an application to the administration",
        "Emergency status gives the right to relocation under the program (Art. 86 of the Housing Code)",
        "For municipal housing — equivalent housing is provided (by area)",
        "For privatized housing — payment of the redemption value or new housing by agreement",
        "Relocation deadlines — set by the regional program. May take years",
        "If the administration delays — file a complaint with the prosecutor's office and court"
      ],
      warnings: [
        "Emergency building — relocation is not instantaneous. Be prepared for a long process",
        "If the building is emergency — privatization is IMPOSSIBLE",
        "The redemption value is often undervalued — hire an appraiser and challenge in court",
        "Relocation — only by court decision or administration resolution"
      ]
    },
    // ============================================================
    // 13. MAJOR REPAIRS — Art. 166-169 of the Housing Code
    // ============================================================
    {
      id: "major_repair",
      title: "🔧 Major repairs — rights and obligations",
      description: "Major repairs — mandatory contributions. But if the repair fund is not used for its intended purpose — you can take action.",
      conditions: { housing_issue: ["major_repair"], ownership_type: ["private"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 months",
      yield_estimate: "Inclusion in the major repair program",
      tags: ["major_repair", "law", "utilities"],
      steps: [
        "Check: is your building included in the major repair program (regional Major Repair Fund website)",
        "Major repair contributions: minimum tariff is set by the region (in Moscow — ~25 rubles/sq.m.)",
        "If the building is not included — submit an application to the administration and the major repair fund",
        "If the major repair fund doesn't perform work — complaint to Goszhilnadzor and the prosecutor's office",
        "You can switch to a special account — you manage the major repair money yourself (requires a general meeting decision)",
        "If major repair contributions are inflated — challenge through court"
      ],
      warnings: [
        "Major repair contributions are mandatory for owners (Art. 169 of the Housing Code)",
        "If you don't pay — penalties are accrued and they can be collected through court",
        "A special account is risky if residents don't monitor it",
        "Major repairs are a long-term program, work may be delayed"
      ]
    },
    // ============================================================
    // 14. COURT DAMAGE CLAIM — Art. 1064 of the Civil Code
    // ============================================================
    {
      id: "court_damage_claim",
      title: "⚖️ Court claim for damages from flooding",
      description: "If the person at fault refuses to pay — go to court. It's realistic and effective.",
      conditions: { housing_issue: ["neighbors_flood"], damage_amount: ["medium", "large"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "3–12 months",
      yield_estimate: "Damages + moral damages",
      tags: ["court", "damage", "compensation"],
      steps: [
        "Gather all documents: flood report from the management company, expert opinion, repair receipts, photos and videos",
        "Send the person at fault a pre-trial claim (certified mail with acknowledgment of receipt). Response deadline — 30 days",
        "If the person at fault doesn't respond — file a lawsuit in magistrate court (up to 100,000 rubles) or district court (over 100,000 rubles)",
        "In the lawsuit state: amount of damages, moral damages (Art. 151 of the Civil Code) from 10,000 to 100,000 rubles, costs for expert and lawyer",
        "Attach all documents, calculations, evidence",
        "At the hearing: the court will order an expert examination (if there is a dispute) or accept your expert opinion",
        "If you win — receive an enforcement order and transfer to bailiffs (Art. 30 of Federal Law No. 229)",
        "Bailiffs: seize accounts, salary, property of the person at fault for collection"
      ],
      warnings: [
        "Statute of limitations — 3 years, but act immediately (Art. 196 of the Civil Code)",
        "An independent expert opinion is your main weapon in court. Without it, the court will refuse",
        "If the person at fault doesn't pay — bailiffs can seize their property and accounts",
        "Moral damages are assessed by the court, claim at least 30,000–50,000 rubles"
      ]
    }
  ]
});