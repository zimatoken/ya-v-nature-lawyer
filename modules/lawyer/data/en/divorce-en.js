// modules/lawyer/data/en/divorce-en.js
// === MODULE: LAWYER — DIVORCE AND ALIMONY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "divorce",
    version: "1.0.0",
    lang: "en",
    title: "Divorce and Alimony",
    description: "Divorce, child support, alimony for spouse, property division, child residence determination",
    icon: "💔",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "divorce_situation",
      type: "single",
      text: "What is your situation?",
      options: [
        { id: "mutual", label: "🤝 Mutual consent divorce", tags: ["mutual"] },
        { id: "one_side", label: "😤 Spouse disagrees / opposes", tags: ["one_side"] },
        { id: "alimony", label: "👶 Need child support", tags: ["alimony"] },
        { id: "alimony_debt", label: "📉 There is child support arrears", tags: ["alimony_debt"] },
        { id: "property", label: "🏠 Need to divide property", tags: ["property"] },
        { id: "child_residence", label: "🏠 Need to determine child's residence", tags: ["child_residence"] },
        { id: "visitation", label: "👨‍👧‍👦 Need visitation schedule with child", tags: ["visitation"] },
        { id: "parental_rights", label: "🚫 Want to terminate spouse's parental rights", tags: ["parental_rights"] },
        { id: "alimony_spouse", label: "🤱 Alimony for ex-spouse", tags: ["alimony_spouse"] },
        { id: "marriage_contract", label: "📜 Have a prenuptial agreement", tags: ["marriage_contract"] },
        { id: "paternity", label: "👨‍👦 Need to establish paternity", tags: ["paternity"] }
      ]
    },
    {
      id: "children",
      type: "single",
      text: "Do you have minor children together?",
      conditions: { divorce_situation: ["mutual", "one_side", "alimony", "alimony_debt", "child_residence", "visitation", "parental_rights", "alimony_spouse", "paternity"] },
      options: [
        { id: "yes_minor", label: "✅ Yes, minor children (under 18)", tags: ["minor_children"] },
        { id: "yes_adult", label: "✅ Yes, but children are adults (18+)", tags: ["adult_children"] },
        { id: "no_children", label: "❌ No common children", tags: ["no_children"] }
      ]
    },
    {
      id: "child_age",
      type: "single",
      text: "How old is the child?",
      conditions: { children: ["yes_minor"] },
      options: [
        { id: "under_3", label: "👶 Under 3 years old", tags: ["under_3"] },
        { id: "3_10", label: "🧒 3–10 years old", tags: ["3_10"] },
        { id: "10_14", label: "🧑 10–14 years old", tags: ["10_14"] },
        { id: "14_18", label: "👨 14–18 years old", tags: ["14_18"] }
      ]
    },
    {
      id: "property_type",
      type: "single",
      text: "What property needs to be divided?",
      conditions: { divorce_situation: ["property"] },
      options: [
        { id: "real_estate", label: "🏢 Apartment / house / land", tags: ["real_estate"] },
        { id: "movable", label: "🚗 Car / money / bank deposits / valuables", tags: ["movable"] },
        { id: "business", label: "💼 Business / sole proprietorship / shares in LLC", tags: ["business"] },
        { id: "debts", label: "📉 Debts / loans (joint)", tags: ["debts"] },
        { id: "inheritance", label: "📜 Inherited or gifted property (disputed)", tags: ["inheritance"] }
      ]
    },
    {
      id: "alimony_agreement",
      type: "single",
      text: "Is there a child support agreement?",
      conditions: { divorce_situation: ["alimony", "alimony_debt"] },
      options: [
        { id: "agreement_yes", label: "✅ Yes, notarized agreement exists", tags: ["agreement_yes"] },
        { id: "agreement_no", label: "❌ No agreement, need court", tags: ["agreement_no"] },
        { id: "agreement_broken", label: "⚠️ Agreement exists but not being honored", tags: ["agreement_broken"] }
      ]
    },
    {
      id: "child_residence_issue",
      type: "single",
      text: "Who does the child currently live with?",
      conditions: { divorce_situation: ["child_residence", "visitation", "parental_rights"] },
      options: [
        { id: "with_mother", label: "👩 With mother", tags: ["with_mother"] },
        { id: "with_father", label: "👨 With father", tags: ["with_father"] },
        { id: "with_others", label: "👵 With other relatives", tags: ["with_others"] }
      ]
    },
    {
      id: "marital_duration",
      type: "single",
      text: "How long was the marriage?",
      conditions: { divorce_situation: ["mutual", "one_side", "property", "alimony_spouse"] },
      options: [
        { id: "less_1", label: "⏰ Less than 1 year", tags: ["short"] },
        { id: "1_5", label: "📅 1–5 years", tags: ["medium"] },
        { id: "over_5", label: "📆 More than 5 years", tags: ["long"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. MUTUAL CONSENT DIVORCE
    // ============================================================
    {
      id: "divorce_mutual",
      title: "🤝 Mutual consent divorce",
      description: "Simplest divorce method — through the civil registry office. Suitable if no minor children and both agree.",
      conditions: { divorce_situation: ["mutual"], children: ["no_children", "adult_children"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Divorce certificate",
      tags: ["divorce", "mutual"],
      steps: [
        "Both spouses file a joint application with the civil registry office",
        "If no minor children — divorce is possible through the registry",
        "Pay state fee",
        "The registry sets a date after 1 month",
        "On the appointed day, appear at the registry and get the divorce certificate"
      ],
      warnings: [
        "If the spouse is PREGNANT or gave birth within the last year — divorce ONLY through court!",
        "If there are minor children — divorce only through court",
        "Alimony — only by agreement, otherwise through court"
      ]
    },
    // ============================================================
    // 2. COURT DIVORCE
    // ============================================================
    {
      id: "divorce_court",
      title: "⚖️ Court divorce (if spouse disagrees)",
      description: "If spouse disagrees or has minor children — divorce through court.",
      conditions: { divorce_situation: ["one_side"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–4 months",
      yield_estimate: "Court decision on divorce",
      tags: ["divorce", "court"],
      steps: [
        "File a claim with the court",
        "In the claim state: request to dissolve marriage, date of marriage, reasons, children",
        "Pay state fee",
        "Court may give up to 3 months for reconciliation",
        "If the defendant doesn't appear — court can make a default judgment",
        "Court decision takes effect after 1 month",
        "Get divorce certificate from registry after the decision"
      ],
      warnings: [
        "Spouse's disagreement is NOT grounds for refusing divorce",
        "If minor children — court MUST decide on children, alimony, visitation",
        "Pregnancy or child under 1 year — divorce only with wife's consent"
      ]
    },
    // ============================================================
    // 3. CHILD SUPPORT (SHARE OF INCOME)
    // ============================================================
    {
      id: "alimony_claim_share",
      title: "👶 Child support (share of income)",
      description: "Child support is collected as a share of income: 25% for 1 child, 33% for 2, 50% for 3 or more.",
      conditions: { divorce_situation: ["alimony"], children: ["yes_minor"], alimony_agreement: ["agreement_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Child support + arrears",
      tags: ["alimony", "children", "court"],
      steps: [
        "File a claim with the court",
        "Court order: issued within 5 days without a hearing",
        "Child support rates: 1/4 of income — for 1 child, 1/3 — for 2, 1/2 — for 3+",
        "Get enforcement document → transfer to bailiffs or employer",
        "Bailiffs: seize accounts, property, restrict travel abroad"
      ],
      warnings: [
        "Minimum child support: not less than the child's subsistence minimum in the region",
        "If the payer doesn't work — child support is collected in a fixed sum",
        "Child support is collected from the date of filing, not from the court decision date"
      ]
    },
    // ============================================================
    // 4. CHILD SUPPORT (FIXED AMOUNT)
    // ============================================================
    {
      id: "alimony_fixed",
      title: "💰 Child support in fixed amount",
      description: "If the payer has irregular or hidden income — child support is collected in a fixed amount (multiple of subsistence minimum).",
      conditions: { divorce_situation: ["alimony"], children: ["yes_minor"], alimony_agreement: ["agreement_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–3 months",
      yield_estimate: "Child support in fixed amount",
      tags: ["alimony", "fixed", "court"],
      steps: [
        "File a claim for child support in a fixed sum",
        "Prove: payer doesn't work, has irregular income, hides income",
        "Court sets the amount: multiple of the child's subsistence minimum",
        "Amount is indexed proportionally to subsistence minimum growth"
      ],
      warnings: [
        "Fixed amount is not always larger than percentage. Calculate which is better",
        "Indexation — quarterly. Monitor PM changes in your region"
      ]
    },
    // ============================================================
    // 5. CHILD SUPPORT ARREARS
    // ============================================================
    {
      id: "alimony_debt",
      title: "📉 Child support arrears — collection and liability",
      description: "Non-payment of child support creates arrears. Arrears are collected with penalties.",
      conditions: { divorce_situation: ["alimony_debt"], alimony_agreement: ["agreement_broken"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Arrears collected + penalty",
      tags: ["alimony", "debt", "penalty"],
      steps: [
        "Check the amount of arrears with bailiffs",
        "Penalty: 0.1% of arrears amount per day of delay",
        "If arrears over 6 months — file for administrative or criminal liability",
        "Bailiffs: seize accounts, property, restrict travel abroad, suspend driver's license"
      ],
      warnings: [
        "Penalty is collected ONLY through court. Bailiffs don't calculate it automatically!",
        "Statute of limitations for penalty — 3 years"
      ]
    },
    // ============================================================
    // 6. CHILD RESIDENCE DETERMINATION
    // ============================================================
    {
      id: "child_residence",
      title: "🏠 Child residence determination",
      description: "The court determines the child's place of residence based on the child's interests and opinion (from 10 years old — mandatory).",
      conditions: { divorce_situation: ["child_residence"], children: ["yes_minor"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–4 months",
      yield_estimate: "Child residence determined",
      tags: ["child", "residence", "court"],
      steps: [
        "File a claim with the court",
        "Attach: birth certificate, job references, income certificates, housing documents, guardianship authority opinion",
        "Guardianship authority gives an opinion on both parents' conditions",
        "Child's opinion from 10 years — mandatory",
        "Court evaluates: child's attachment to each parent, moral qualities, material conditions"
      ],
      warnings: [
        "Child's opinion from 10 years — mandatory, but court can deviate if against child's interests",
        "Child staying with mother is not automatic. Father can win with better conditions"
      ]
    },
    // ============================================================
    // 7. CHILD VISITATION SCHEDULE
    // ============================================================
    {
      id: "child_visitation",
      title: "👨‍👧‍👦 Child visitation schedule",
      description: "The parent living separately has the right to communicate with the child. The court determines the schedule.",
      conditions: { divorce_situation: ["visitation"], children: ["yes_minor"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–3 months",
      yield_estimate: "Visitation schedule approved",
      tags: ["child", "visitation", "court"],
      steps: [
        "File a claim for visitation schedule",
        "Propose your schedule: days, times, weekends, holidays, summer vacations",
        "Guardianship authority gives an opinion",
        "Court approves the schedule",
        "If one parent obstructs visitation — court can impose a fine"
      ],
      warnings: [
        "If visitation harms the child's health — court may refuse",
        "Visitation schedule is court-ordered and mandatory"
      ]
    },
    // ============================================================
    // 8. PARENTAL RIGHTS TERMINATION
    // ============================================================
    {
      id: "parental_rights_termination",
      title: "🚫 Parental rights termination",
      description: "Parental rights termination — extreme measure. Grounds: cruelty, evasion of alimony, alcoholism, drug addiction.",
      conditions: { divorce_situation: ["parental_rights"], children: ["yes_minor"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "3–6 months",
      yield_estimate: "Parental rights terminated",
      tags: ["parental_rights", "termination", "court"],
      steps: [
        "Check grounds: evasion of parental duties, cruelty, alcoholism/drug addiction, abandonment, crime against the child",
        "Collect evidence: police reports, court judgments, medical certificates",
        "File a claim with the court",
        "Guardianship authority — mandatory",
        "Court hears with prosecutor and guardianship participation",
        "After termination: child can be adopted after 6 months"
      ],
      warnings: [
        "Termination — extreme measure. Process is complex and long",
        "Alimony continues to be collected in full"
      ]
    },
    // ============================================================
    // 9. PROPERTY DIVISION
    // ============================================================
    {
      id: "property_divorce",
      title: "🏠 Property division during divorce",
      description: "Property acquired during marriage is divided equally. There are exceptions.",
      conditions: { divorce_situation: ["property"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "3–12 months",
      yield_estimate: "Property divided or compensation",
      tags: ["property", "division", "court"],
      steps: [
        "List all property acquired during marriage",
        "EXCEPTIONS: pre-marital property, inheritance, gifts, personal items",
        "If pre-marital property was improved with joint funds — becomes joint",
        "Mortgage — debt is also divided equally",
        "Business opened during marriage — is divided",
        "Statute of limitations: 3 years from when you LEARNED of the violation"
      ],
      warnings: [
        "Pre-marital property with joint funds — complex case. Consult a lawyer",
        "If spouse sold property before divorce — can challenge",
        "Court can deviate from equality of shares"
      ]
    },
    // ============================================================
    // 10. ALIMONY FOR SPOUSE
    // ============================================================
    {
      id: "alimony_spouse",
      title: "🤱 Alimony for ex-spouse",
      description: "Alimony for spouse is collected during pregnancy, caring for a child under 3, disability, caring for a disabled child.",
      conditions: { divorce_situation: ["alimony_spouse"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–4 months",
      yield_estimate: "Alimony for spouse",
      tags: ["alimony_spouse", "ex_spouse", "court"],
      steps: [
        "Check grounds: pregnancy, caring for child under 3, disability, caring for disabled child",
        "File a claim with the court",
        "Amount: fixed sum, multiple of subsistence minimum",
        "Period: until child turns 3, until pregnancy ends, unlimited for disability"
      ],
      warnings: [
        "Spouse alimony is NOT automatic — only by court decision",
        "If spouse works and has income — court may refuse"
      ]
    },
    // ============================================================
    // 11. PATERNITY ESTABLISHMENT
    // ============================================================
    {
      id: "paternity_establishment",
      title: "👨‍👦 Paternity establishment",
      description: "If father is not recorded on the birth certificate — paternity is established in court. Gives right to child support and inheritance.",
      conditions: { divorce_situation: ["paternity"], children: ["yes_minor"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–4 months",
      yield_estimate: "Paternity established",
      tags: ["paternity", "father", "court"],
      steps: [
        "File a claim with the court",
        "Plaintiff: mother, father, guardian, the child (from 18)",
        "Evidence: correspondence, photos, cohabitation, DNA examination",
        "DNA examination — key evidence",
        "After court decision — amend birth record"
      ],
      warnings: [
        "DNA examination is voluntary. Court can draw conclusions from evasion",
        "If paternity is established — child support is collected from the date of filing"
      ]
    },
    // ============================================================
    // 12. CHILD TRAVEL CONSENT
    // ============================================================
    {
      id: "child_travel_consent",
      title: "🛂 Child travel abroad — second parent's consent",
      description: "Travel abroad requires notarized consent from the second parent.",
      conditions: { divorce_situation: ["child_residence", "visitation"], children: ["yes_minor"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Travel permission",
      tags: ["child", "travel", "consent"],
      steps: [
        "Travel requires notarized consent from the second parent",
        "Exception: second parent terminated rights, deceased, incapacitated, missing",
        "If second parent refuses — file a claim with the court",
        "Court considers: child's interests, purpose of trip, country, conditions"
      ],
      warnings: [
        "Without second parent's consent — child WILL NOT be allowed across the border",
        "If second parent's whereabouts unknown — only through court"
      ]
    },
    // ============================================================
    // 13. MARRIAGE CONTRACT
    // ============================================================
    {
      id: "marriage_contract",
      title: "📜 Prenuptial agreement — rights and risks",
      description: "Prenuptial agreement regulates property division. It cannot disadvantage a spouse or violate children's rights.",
      conditions: { divorce_situation: ["marriage_contract"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Agreement evaluated or challenged",
      tags: ["contract", "property", "agreement"],
      steps: [
        "Check: agreement is notarized (mandatory). If not — invalid",
        "Agreement regulates: property ownership, division, payments",
        "Agreement CANNOT regulate: personal relationships, children's rights",
        "If agreement puts spouse in extremely unfavorable position — can be invalidated",
        "File a claim to invalidate within 1 year of signing"
      ],
      warnings: [
        "Agreement CANNOT limit child support rights",
        "If one spouse is left without housing — court may invalidate",
        "Agreement can only be challenged in court"
      ]
    }
  ]
});