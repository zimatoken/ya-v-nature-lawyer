// modules/lawyer/data/en/inheritance-en.js
// === MODULE: LAWYER — INHERITANCE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "inheritance",
    version: "1.0.0",
    lang: "en",
    title: "Inheritance",
    description: "Inheritance, will contest, missed deadlines, debts, mandatory share — full legal guidance",
    icon: "📜",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "inheritance_situation",
      type: "single",
      text: "What is your inheritance situation?",
      options: [
        { id: "no_will", label: "❌ Relative died, no will (succession by law)", tags: ["no_will"] },
        { id: "will_exists", label: "📜 There is a will, but there's a dispute", tags: ["will_exists"] },
        { id: "missed", label: "⏰ Missed the 6-month deadline", tags: ["missed"] },
        { id: "mandatory_share", label: "👶 There are disabled dependents (mandatory share)", tags: ["mandatory_share"] },
        { id: "actual", label: "🏠 Actually accepted inheritance (living in apartment, paying taxes)", tags: ["actual"] },
        { id: "debts", label: "💸 Inheritance with debts (loans, taxes)", tags: ["debts"] },
        { id: "refusal", label: "🙅 I want to refuse inheritance", tags: ["refusal"] },
        { id: "foreign", label: "🌍 Foreign inheritance / from a foreign national", tags: ["foreign"] },
        { id: "property_only", label: "🏠 Only real estate / car", tags: ["property_only"] },
        { id: "search_heirs", label: "🔍 Searching for heirs / being searched for", tags: ["search_heirs"] }
      ]
    },
    {
      id: "relation",
      type: "single",
      text: "What is your relationship to the deceased?",
      conditions: { inheritance_situation: ["no_will", "missed", "mandatory_share", "debts", "refusal", "actual"] },
      options: [
        { id: "spouse", label: "💑 Spouse", tags: ["spouse"] },
        { id: "child", label: "👶 Child (including illegitimate)", tags: ["child"] },
        { id: "parent", label: "👨‍👩‍👧 Parent", tags: ["parent"] },
        { id: "sibling", label: "👫 Sibling", tags: ["sibling"] },
        { id: "grandparent", label: "👴 Grandparent", tags: ["grandparent"] },
        { id: "dependent", label: "👴 Disabled dependent (not a relative)", tags: ["dependent"] },
        { id: "other", label: "👥 Other relative (nephew, aunt, uncle)", tags: ["other"] }
      ]
    },
    {
      id: "heirs_count",
      type: "single",
      text: "How many first-line heirs are there?",
      conditions: { inheritance_situation: ["no_will", "missed", "debts", "refusal"] },
      options: [
        { id: "one", label: "👤 One heir", tags: ["one"] },
        { id: "two", label: "👥 Two heirs", tags: ["two"] },
        { id: "three_plus", label: "👨‍👩‍👧‍👦 Three or more heirs", tags: ["three_plus"] },
        { id: "unknown", label: "❓ Don't know / dispute", tags: ["unknown_count"] }
      ]
    },
    {
      id: "marital_share",
      type: "single",
      text: "Has the spouse's share been allocated?",
      conditions: { inheritance_situation: ["no_will", "will_exists", "property_only"], relation: ["spouse"] },
      options: [
        { id: "not_yet", label: "❌ No, not yet allocated", tags: ["not_yet"] },
        { id: "already", label: "✅ Yes, spouse's share allocated", tags: ["already"] },
        { id: "unknown_share", label: "❓ Don't know what that is", tags: ["unknown_share"] }
      ]
    },
    {
      id: "will_dispute_type",
      type: "single",
      text: "What is the dispute about the will?",
      conditions: { inheritance_situation: ["will_exists"] },
      options: [
        { id: "invalid", label: "⚖️ Doubt the legality of the will", tags: ["invalid"] },
        { id: "forced", label: "😰 Will made under pressure / testator incapacitated", tags: ["forced"] },
        { id: "dependents", label: "👶 Disabled dependents are left out", tags: ["dependents"] },
        { id: "forgery", label: "✍️ Suspect signature was forged", tags: ["forgery"] },
        { id: "newer_will", label: "📜 There is a more recent will", tags: ["newer_will"] }
      ]
    },
    {
      id: "has_debts",
      type: "single",
      text: "Does the testator have debts?",
      conditions: { inheritance_situation: ["debts", "no_will", "will_exists", "property_only"] },
      options: [
        { id: "debts_yes", label: "💰 Yes, there are loans / taxes / utility debts", tags: ["debts_yes"] },
        { id: "debts_no", label: "✅ No, no debts", tags: ["debts_no"] },
        { id: "debts_unknown", label: "❓ Don't know, but suspect", tags: ["debts_unknown"] }
      ]
    },
    {
      id: "property_type",
      type: "single",
      text: "What is included in the estate?",
      conditions: { inheritance_situation: ["property_only", "no_will", "will_exists", "debts"] },
      options: [
        { id: "apartment", label: "🏠 Apartment / house", tags: ["apartment"] },
        { id: "car", label: "🚗 Car", tags: ["car"] },
        { id: "land", label: "🌳 Land plot / dacha", tags: ["land"] },
        { id: "money", label: "💰 Money / bank deposits", tags: ["money"] },
        { id: "business", label: "💼 Business / share in LLC", tags: ["business"] },
        { id: "multiple", label: "📦 Multiple types of property", tags: ["multiple"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. INHERITANCE BY LAW — Art. 1142-1145 of the Civil Code
    // ============================================================
    {
      id: "inheritance_no_will",
      title: "⚖️ Inheritance by law — Art. 1142-1145 of the Civil Code",
      description: "If there is no will, property is divided among heirs by order of succession. The main thing is not to miss the 6-month deadline.",
      conditions: { inheritance_situation: ["no_will"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "6 months + registration",
      yield_estimate: "Certificate of inheritance",
      tags: ["no_will", "law", "deadline"],
      steps: [
        "Obtain a death certificate from the civil registry office (or consulate if death occurred abroad)",
        "Determine the place of opening of the inheritance — the last place of residence of the deceased (Art. 1115 of the Civil Code)",
        "Submit an application to the notary for acceptance of inheritance within 6 months (Art. 1154 of the Civil Code)",
        "Collect documents: death certificate, property documents, proof of relationship (birth certificate, marriage certificate)",
        "If there is a spouse — allocate the spouse's share (50% of jointly acquired property, Art. 256 of the Civil Code) BEFORE the division of inheritance",
        "Pay the state duty: 0.3% for first-line heirs (max. 100,000 rubles), 0.6% for others (max. 1,000,000 rubles) — Art. 333.24 of the Tax Code",
        "Receive the certificate of inheritance 6 months after death",
        "Register ownership in Rosreestr (real estate) or re-register the car at GIBDD within 10 days"
      ],
      warnings: [
        "DEADLINE: 6 months from the date of death. Miss it — you'll need to restore through court (Art. 1155 of the Civil Code)",
        "The spouse's share (50%) is allocated BEFORE the division of inheritance — this is not inheritance, but marital property",
        "Illegitimate children inherit equally with legitimate ones — you need to prove paternity through court (Art. 48 of the Family Code)",
        "If there are several heirs — shares are determined by priority (Art. 1142-1145 of the Civil Code)"
      ]
    },
    // ============================================================
    // 2. SPOUSE'S SHARE — Art. 256, 1150 of the Civil Code
    // ============================================================
    {
      id: "marital_share_allocation",
      title: "💑 Spouse's share in inheritance — Art. 256, 1150 of the Civil Code",
      description: "The spouse has the right to 50% of jointly acquired property BEFORE the division of inheritance. This is not inheritance, but the spouse's share.",
      conditions: { inheritance_situation: ["no_will", "will_exists", "property_only"], marital_share: ["not_yet", "unknown_share"], relation: ["spouse"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 months",
      yield_estimate: "Spouse's share allocated",
      tags: ["marital_share", "spouse", "law"],
      steps: [
        "The spouse's share is 50% of property acquired during marriage (Art. 256 of the Civil Code, Art. 1150 of the Civil Code)",
        "It is allocated BEFORE the division of inheritance — it is not part of the inheritance estate",
        "Example: an apartment bought during marriage — 50% belongs to the spouse, the remaining 50% is inheritance",
        "Submit an application to the notary for allocation of the spouse's share (before applying for inheritance acceptance)",
        "Attach: marriage certificate, property documents (purchase agreement, extract from Rosreestr)",
        "The notary allocates the share and issues a certificate of ownership of the spouse's share",
        "Only after this is the remaining part of the property distributed among the heirs"
      ],
      warnings: [
        "The spouse's share is allocated ONLY to the spouse, not to children",
        "If the marriage was registered less than a year ago — the spouse's share may not be allocated (property could be pre-marital)",
        "If property was received as inheritance or gift — there is NO spouse's share",
        "If the spouse missed the deadline for allocating the share — it can be restored through court"
      ]
    },
    // ============================================================
    // 3. MANDATORY SHARE — Art. 1149 of the Civil Code
    // ============================================================
    {
      id: "mandatory_share",
      title: "👶 Mandatory share in inheritance — Art. 1149 of the Civil Code",
      description: "Disabled dependents have the right to a mandatory share (no less than 50% of the share by law), even if the will disinherits them.",
      conditions: { inheritance_situation: ["mandatory_share"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–6 months",
      yield_estimate: "Mandatory share allocated",
      tags: ["mandatory_share", "dependents", "law"],
      steps: [
        "Mandatory share — Art. 1149 of the Civil Code. Who is entitled: disabled spouse, parents, children, and also dependents (regardless of relationship)",
        "Disabled: pensioners (women 55+, men 60+), disabled persons of groups I, II, III",
        "Dependents: lived with the deceased for at least 1 year and were dependent on them",
        "Amount of mandatory share: no less than 50% of the share they would have received by law (Art. 1149 of the Civil Code)",
        "To receive the mandatory share — submit an application to the notary within 6 months",
        "Documents: pension certificate, disability certificate, certificate of cohabitation",
        "If the notary refuses — go to court (lawsuit for allocation of mandatory share)"
      ],
      warnings: [
        "The mandatory share is allocated EVEN IF the will disinherits you (Art. 1149 of the Civil Code)",
        "If the heir by mandatory share already received property during the deceased's lifetime — this is taken into account",
        "Statute of limitations for mandatory share — 3 years",
        "The mandatory share is only within the value of the inheritance estate"
      ]
    },
    // ============================================================
    // 4. CONTESTING A WILL — Art. 1131 of the Civil Code
    // ============================================================
    {
      id: "will_invalid",
      title: "📝 Contesting a will — Art. 1131 of the Civil Code",
      description: "A will can be contested if it was made with violations: incapacity, coercion, forged signature.",
      conditions: { inheritance_situation: ["will_exists"], will_dispute_type: ["invalid", "forced", "forgery"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "6–18 months",
      yield_estimate: "Will declared invalid",
      tags: ["will", "dispute", "court"],
      steps: [
        "Check the form of the will: notarial, consul-certified, or 'will in emergency circumstances' (Art. 1127-1129 of the Civil Code)",
        "A notarial will is harder to contest — serious grounds are needed (Art. 1131 of the Civil Code)",
        "Grounds for contesting: incapacity of the testator (mental disorder), coercion, fraud, signature under threat",
        "Gather evidence: medical records (extract from a psychoneurological dispensary), witness statements, correspondence, video",
        "File a lawsuit to declare the will invalid (within 3 years from the opening of the inheritance)",
        "Simultaneously — file an application with the notary to suspend the issuance of the certificate until the court decision",
        "Order a forensic handwriting examination (cost: 15,000–30,000 rubles) — key evidence in case of forged signature",
        "If the will is declared invalid — the inheritance is distributed by law or according to a previous will"
      ],
      warnings: [
        "Forensic handwriting examination is expensive, but often decides the outcome of the case",
        "If the testator was ill — demand an extract from a psychoneurological dispensary or hospital",
        "Statute of limitations — 3 years, but it's better to act immediately (Art. 196 of the Civil Code)",
        "Contesting a will is a complex process, you need a lawyer"
      ]
    },
    // ============================================================
    // 5. ACTUAL ACCEPTANCE OF INHERITANCE — Art. 1153 of the Civil Code
    // ============================================================
    {
      id: "actual_inheritance",
      title: "🏠 Actual acceptance of inheritance — Art. 1153 of the Civil Code",
      description: "Even without a notary application, you may be considered to have accepted the inheritance if you performed actions to manage the property.",
      conditions: { inheritance_situation: ["actual"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3–6 months",
      yield_estimate: "Fact of acceptance recognized",
      tags: ["actual", "possession", "law"],
      steps: [
        "Actual acceptance of inheritance — Art. 1153 of the Civil Code. Actions: living in the apartment, paying utilities, protecting property, repairs, paying taxes",
        "To recognize actual acceptance — submit an application to the notary for issuance of a certificate based on actual acceptance",
        "Attach evidence: utility payment receipts, repair receipts, registration extracts in the apartment, service contracts",
        "If the notary refuses — file a court application to establish the fact of acceptance of inheritance (Art. 264 of the Civil Procedure Code)",
        "In court: prove that you performed actions to manage the property within 6 months after death",
        "If you win — the court issues a decision that replaces the notary application",
        "Deadlines: actual acceptance is equated to acceptance by law — 6 months"
      ],
      warnings: [
        "Actual acceptance — if you did not submit an application to the notary but use the property",
        "If other heirs contest — prove actual actions in court",
        "Actions must be performed within 6 months from the date of death",
        "If you just left the deceased's belongings in the apartment — this is not considered actual acceptance"
      ]
    },
    // ============================================================
    // 6. RESTORING THE DEADLINE — Art. 1155 of the Civil Code
    // ============================================================
    {
      id: "missed_deadline",
      title: "⏰ Restoring the deadline — Art. 1155 of the Civil Code",
      description: "Missed the 6-month deadline? There is a chance to restore it, but you need valid reasons and the consent of other heirs or a court decision.",
      conditions: { inheritance_situation: ["missed"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "3–12 months",
      yield_estimate: "Deadline restored + certificate",
      tags: ["missed", "deadline", "court"],
      steps: [
        "Determine the date when you LEARNED of the death and your right to inheritance (Art. 1155 of the Civil Code)",
        "Gather proof of valid reasons: serious illness (hospital certificate), long business trip (work certificate), living abroad (copy of passport), minority (birth certificate)",
        "First method: obtain written consent from ALL heirs who have already accepted the inheritance. Consent is drawn up with a notary",
        "Second method: if there is no consent — file a court claim to restore the deadline (Art. 1155 of the Civil Code)",
        "In court, prove: valid reasons + did not know about the death + performed actual actions (paid taxes, took care of property)",
        "If the court restores the deadline — get the certificate of inheritance",
        "If the inheritance has already been divided — demand your share or compensation from other heirs"
      ],
      warnings: [
        "'Didn't know about the death' — works if you didn't communicate with family and live far away",
        "'Was on a business trip' — need a work certificate with exact dates",
        "If the deadline is missed by more than 3 years — chances are minimal, but possible under special circumstances",
        "Consent of all heirs is the fastest way, but not always achievable"
      ]
    },
    // ============================================================
    // 7. INHERITANCE WITH DEBTS — Art. 1175 of the Civil Code
    // ============================================================
    {
      id: "inheritance_with_debts",
      title: "💳 Inheritance with debts — Art. 1175 of the Civil Code",
      description: "The heir is liable for the testator's debts only within the value of the inheritance. If the debt exceeds the inheritance — you are not obliged to pay more.",
      conditions: { inheritance_situation: ["debts"], has_debts: ["debts_yes"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3–6 months",
      yield_estimate: "Inheritance without debts or with their reduction",
      tags: ["debts", "liabilities", "law"],
      steps: [
        "Request the deceased's credit history through the notary (request to the BKI — bureau of credit histories)",
        "Check debts: loans, taxes (FNS), utility payments, alimony debts (if any)",
        "By law (Art. 1175 of the Civil Code) you are liable for debts ONLY within the value of the inheritance",
        "If the debt exceeds the value of the inheritance — you are not obliged to pay more (refusal of inheritance — Art. 1157 of the Civil Code)",
        "If the debt is less than the value of the inheritance — pay it off and receive the remaining property",
        "Upon refusal of inheritance — debts DO NOT pass to you",
        "In court you can contest some debts (overdue, unreasonable, with expired statute of limitations)"
      ],
      warnings: [
        "DON'T accept inheritance without checking debts — you may be left with others' loans",
        "If you have already accepted the inheritance (submitted an application to the notary) — debts pass to you automatically",
        "Deadline for refusal of inheritance — 6 months (Art. 1157 of the Civil Code)",
        "When refusing inheritance, you cannot accept it partially — only fully"
      ]
    },
    // ============================================================
    // 8. REFUSAL OF INHERITANCE — Art. 1157 of the Civil Code
    // ============================================================
    {
      id: "inheritance_refusal",
      title: "🙅 Refusal of inheritance — Art. 1157 of the Civil Code",
      description: "If the inheritance has debts or you don't want to accept it — you can refuse. Refusal is final.",
      conditions: { inheritance_situation: ["refusal"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Refusal + obligations removed",
      tags: ["refusal", "debts", "law"],
      steps: [
        "Decide: you refuse completely. By law (Art. 1157 of the Civil Code) partial refusal is impossible",
        "Submit an application to the notary for refusal of inheritance within 6 months",
        "If the deadline is missed — refusal is possible only for valid reasons (through court)",
        "Refusal can be made in person, through a representative (by power of attorney), or by mail (notarized application)",
        "If the inheritance has already been accepted — refusal is possible within 6 months (Art. 1158 of the Civil Code)",
        "Upon refusal of inheritance — debts pass to other heirs",
        "If all heirs refuse — property passes into state ownership (escheat property, Art. 1151 of the Civil Code)"
      ],
      warnings: [
        "Refusal of inheritance is FINAL. It cannot be reversed (Art. 1157 of the Civil Code)",
        "You cannot refuse in favor of a specific person — only completely (the law does not prohibit this, but refusal in favor of another heir is allowed, Art. 1158 of the Civil Code)",
        "If you have already entered into inheritance and paid debts — refusal is impossible",
        "Refusal must be made before the expiration of 6 months from the opening of the inheritance"
      ]
    },
    // ============================================================
    // 9. REFUSAL IN FAVOR OF ANOTHER HEIR — Art. 1158 of the Civil Code
    // ============================================================
    {
      id: "refusal_in_favor",
      title: "🙅 Refusal of inheritance in favor of another person — Art. 1158 of the Civil Code",
      description: "You can refuse inheritance in favor of another heir by law or by will. Refusal in favor of another person is allowed.",
      conditions: { inheritance_situation: ["refusal"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Refusal + share transferred to another heir",
      tags: ["refusal", "law", "transfer"],
      steps: [
        "Refusal in favor of another heir is allowed by Art. 1158 of the Civil Code",
        "You can refuse in favor of: any heir by will or by law of any order",
        "You cannot refuse in favor of: a person who is not an heir, or an heir disinherited by the will",
        "Submit an application to the notary indicating the person in whose favor you are refusing",
        "The share passes to the specified heir, increasing their share"
      ],
      warnings: [
        "Refusal in favor of another person is final",
        "If you refuse in favor of one of the heirs — the others do not receive your share",
        "Refusal in favor of a person who is not an heir is NOT ALLOWED"
      ]
    },
    // ============================================================
    // 10. FOREIGN INHERITANCE — Art. 1115, 1118 of the Civil Code
    // ============================================================
    {
      id: "foreign_inheritance",
      title: "🌍 Foreign inheritance — international law",
      description: "Inheriting property abroad is more complex but possible. The key question: which country's law applies.",
      conditions: { inheritance_situation: ["foreign"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "6–24 months",
      yield_estimate: "Inheritance registered abroad",
      tags: ["foreign", "international", "law"],
      steps: [
        "Find out whether the law of the country of the deceased's last residence (lex domicilii) or the law of the country where the property is located (lex rei sitae) applies — Art. 1115 of the Civil Code",
        "Contact the Russian consul in the country — they will help with sending documents and give recommendations",
        "Hire a local lawyer in the country — it's difficult without one (especially in countries with Anglo-Saxon legal systems)",
        "Translate all documents into English / the local language (notarized translation)",
        "Submit an application to the notary in the country of inheritance opening (according to local rules)",
        "If the property is in the Russian Federation — submit an application to a notary in the Russian Federation, then legalize documents abroad (apostille, if countries are in the Hague Convention)",
        "Be prepared for a long process — from 6 months to 2 years"
      ],
      warnings: [
        "Each country has its own rules — study local laws",
        "The consul does not resolve inheritance issues — only helps with documents",
        "If there is property in several countries — inheritance is processed separately in each",
        "Apostille on documents is mandatory for countries of the Hague Convention"
      ]
    },
    // ============================================================
    // 11. INHERITANCE OF REAL ESTATE — Art. 1152, 1110 of the Civil Code
    // ============================================================
    {
      id: "property_inheritance",
      title: "🏠 Inheritance of real estate / car",
      description: "Specifics of registering apartments, houses, land, and vehicles.",
      conditions: { inheritance_situation: ["property_only"], property_type: ["apartment", "car", "land"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "6–12 months",
      yield_estimate: "Property re-registered",
      tags: ["property", "real_estate", "car"],
      steps: [
        "Submit an application to the notary for acceptance of inheritance (within 6 months)",
        "Order a valuation report for the real estate / car for the notary (to calculate the state duty)",
        "Receive the certificate of inheritance after 6 months",
        "Register ownership in Rosreestr (real estate) — state duty 2,000 rubles",
        "For a car — contact GIBDD for re-registration within 10 days",
        "If there are several heirs — determine each person's share (by agreement or through court)",
        "If the apartment is mortgaged — you are obliged to pay off the balance or sell the apartment (with the bank's consent)"
      ],
      warnings: [
        "If the apartment is mortgaged — you are obliged to pay off the balance or sell the apartment with the bank's consent",
        "When selling inherited property within 3 years — tax 13% (Art. 217.1 of the Tax Code)",
        "Utility debts — pass to the heirs",
        "If you don't register ownership in Rosreestr — you cannot sell or gift the property"
      ]
    },
    // ============================================================
    // 12. INHERITANCE CONTRACT — Art. 1140.1 of the Civil Code
    // ============================================================
    {
      id: "inheritance_contract",
      title: "📜 Inheritance contract — new instrument (Art. 1140.1 of the Civil Code)",
      description: "Since 2019, an inheritance contract is equivalent to a will. It allows determining heirs and the conditions for the transfer of property.",
      conditions: { inheritance_situation: ["will_exists", "no_will"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1–3 months",
      yield_estimate: "Inheritance processed by contract",
      tags: ["contract", "inheritance", "law"],
      steps: [
        "Inheritance contract — Art. 1140.1 of the Civil Code (effective from 01.06.2019)",
        "Concluded between the testator and the heirs (notarized)",
        "The contract can provide for: conditions for the transfer of property, obligations of the heirs (e.g., care for the testator)",
        "The contract takes precedence over the will (if concluded later)",
        "The contract can be contested on the same grounds as a will",
        "If the testator violates the terms of the contract — the heirs can go to court"
      ],
      warnings: [
        "Inheritance contract is a new instrument, legal practice is still forming",
        "The contract must be notarized",
        "The terms of the contract must not contradict the law (mandatory share, etc.)",
        "The contract can be terminated by agreement of the parties or through court"
      ]
    },
    // ============================================================
    // 13. ESCHEAT — Art. 1151 of the Civil Code
    // ============================================================
    {
      id: "escheat",
      title: "🏛️ Escheat — Art. 1151 of the Civil Code",
      description: "If there are no heirs or all refused — property passes into state ownership.",
      conditions: { inheritance_situation: ["no_will", "debts", "refusal"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "6–12 months",
      yield_estimate: "Property passes to the state",
      tags: ["escheat", "state", "law"],
      steps: [
        "Escheat — Art. 1151 of the Civil Code. Occurs if: there are no heirs by law or by will, all heirs refused, all heirs are disinherited",
        "Property passes into state ownership (Russian Federation or subject of the Russian Federation)",
        "If you are a potential heir but did not submit an application — property may become escheat",
        "If heirs appear later — restore the deadline through court (Art. 1155 of the Civil Code)",
        "The state is not liable for the testator's debts (except mortgages)"
      ],
      warnings: [
        "If heirs exist but did not enter — property does NOT become escheat",
        "Deadline for restoration — 3 years (Art. 1155 of the Civil Code)",
        "Escheat property cannot be privatized"
      ]
    },
    // ============================================================
    // 14. SEARCH FOR HEIRS — Art. 1115 of the Civil Code
    // ============================================================
    {
      id: "search_heirs",
      title: "🔍 Search for heirs — action algorithm",
      description: "If you are looking for heirs or are being searched for — there are legal ways.",
      conditions: { inheritance_situation: ["search_heirs"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–12 months",
      yield_estimate: "Heirs found",
      tags: ["search", "heirs", "law"],
      steps: [
        "If you are searching for heirs: contact the notary at the place of inheritance opening — they will publish a notice in an official publication (Art. 1115 of the Civil Code)",
        "Submit requests to the civil registry office (search for relatives through civil registration records), GIBDD, tax authorities",
        "If you are being searched for: check the notary's publications on the Federal Notary Chamber website (notariat.ru)",
        "If heirs are found — contact the notary for inheritance processing",
        "If the deadline is missed — restore through court (Art. 1155 of the Civil Code)"
      ],
      warnings: [
        "If you are an heir and you were not found — property may become escheat",
        "Notary publications are the official way of notification",
        "The search may take time — be patient"
      ]
    }
  ]
});