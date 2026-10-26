// modules/lawyer/data/en/consumer-en.js
// === MODULE: LAWYER — CONSUMER PROTECTION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "lawyer",
    category: "consumer",
    version: "1.0.0",
    lang: "en",
    title: "Consumer Protection",
    description: "Defective goods, poor services, refunds, complaints — legal protection algorithms",
    icon: "🛡️",
    color: "#7c3aed"
  },

  questions: [
    {
      id: "consumer_issue",
      type: "single",
      text: "What's your problem?",
      options: [
        { id: "defective", label: "❌ Bought a defective product / doesn't work", tags: ["defective"] },
        { id: "service_bad", label: "🔧 Poor service / service not provided", tags: ["service"] },
        { id: "food_poison", label: "🍖 Spoiled food / food poisoning", tags: ["food"] },
        { id: "online_scam", label: "💻 Online scam / didn't receive goods", tags: ["online"] },
        { id: "refund_refusal", label: "💸 Seller refuses to refund", tags: ["refund"] },
        { id: "no_receipt", label: "🧾 Lost receipt — how to return?", tags: ["no_receipt"] }
      ]
    },
    {
      id: "purchase_method",
      type: "single",
      text: "How did you purchase?",
      conditions: { consumer_issue: ["defective", "service", "food", "online", "refund", "no_receipt"] },
      options: [
        { id: "offline_store", label: "🏪 In a physical store", tags: ["offline"] },
        { id: "online_store", label: "🛒 Online store", tags: ["online_store"] },
        { id: "marketplace", label: "📦 Marketplace (Amazon, eBay, AliExpress)", tags: ["marketplace"] },
        { id: "private_person", label: "👤 From a private individual (Craigslist, FB Marketplace)", tags: ["private"] }
      ]
    },
    {
      id: "has_receipt",
      type: "single",
      text: "Do you have proof of purchase?",
      conditions: { consumer_issue: ["defective", "service", "food", "online", "refund", "no_receipt"] },
      options: [
        { id: "receipt", label: "🧾 Yes, receipt / digital receipt", tags: ["receipt"] },
        { id: "bank_statement", label: "📄 Bank statement / transfer record", tags: ["bank_statement"] },
        { id: "no_document", label: "❌ No receipt or other documents", tags: ["no_document"] }
      ]
    },
    {
      id: "return_reason",
      type: "single",
      text: "Why do you want to return the product?",
      conditions: { consumer_issue: ["defective", "refund"] },
      options: [
        { id: "change_mind", label: "Changed my mind (wrong size/color/style)", tags: ["change_mind"] },
        { id: "defect_found", label: "Found a defect", tags: ["defect_found"] },
        { id: "broken", label: "Broken / stopped working", tags: ["broken"] }
      ]
    },
    {
      id: "time_passed",
      type: "single",
      text: "How long since purchase?",
      conditions: { consumer_issue: ["defective", "refund"] },
      options: [
        { id: "days_14", label: "📅 Less than 14 days", tags: ["days_14"] },
        { id: "warranty", label: "📆 Within warranty period", tags: ["warranty"] },
        { id: "out_of_warranty", label: "📈 Warranty expired", tags: ["out_of_warranty"] }
      ]
    },
    {
      id: "seller_response",
      type: "single",
      text: "Has the seller responded to your claim?",
      conditions: { consumer_issue: ["defective", "service", "food", "online", "refund"] },
      options: [
        { id: "no_response", label: "❌ No response / ignoring", tags: ["no_response"] },
        { id: "refused", label: "🚫 Refused", tags: ["refused"] },
        { id: "offered_repair", label: "🔧 Offered repair", tags: ["offered_repair"] },
        { id: "offered_exchange", label: "🔄 Offered exchange", tags: ["offered_exchange"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. RETURN OF GOOD QUALITY (14 DAYS)
    // ============================================================
    {
      id: "return_14_days_good",
      title: "🔄 Return of good quality goods — 14 days",
      description: "Within 14 days you can return ANY good quality product (except the exclusion list).",
      conditions: { consumer_issue: ["defective", "refund"], return_reason: ["change_mind"], time_passed: ["days_14"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 days",
      yield_estimate: "Money refunded",
      tags: ["return", "14_days", "law"],
      steps: [
        "Check: product is NOT on the exclusion list (food, medicine, underwear, jewelry, complex technical goods)",
        "Keep: receipt, packaging, labels, all accessories. Without receipt, use other proof (bank statement, witness statements)",
        "Write a return application (sample available on consumer protection websites)",
        "Submit the application in person (2 copies) or send by registered mail. The seller must stamp your copy with date and signature",
        "Refund deadline: 10 days from claim submission. If delayed, penalty applies 1% per day",
        "If refused: file a complaint with the consumer protection agency + lawsuit in court"
      ],
      warnings: [
        "Complex technical goods (smartphones, laptops, cameras, cars) CANNOT be returned under 'changed mind' law",
        "If the product was used, the seller may reduce the refund amount (for wear and tear)",
        "DON'T accept 'exchange only, no money back' — it's illegal",
        "For online purchases, a different law applies (7 days, not 14)"
      ]
    },
    // ============================================================
    // 2. DEFECTIVE PRODUCT RETURN — WITHIN WARRANTY
    // ============================================================
    {
      id: "defective_return_warranty",
      title: "🛠️ Defective product return (within warranty)",
      description: "If the product has defects — you have the right to: refund, exchange, repair, or price reduction.",
      conditions: { consumer_issue: ["defective", "refund"], return_reason: ["defect_found", "broken"], time_passed: ["days_14", "warranty"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "7–30 days",
      yield_estimate: "Refund, exchange, or repair",
      tags: ["defective", "return", "exchange", "law"],
      steps: [
        "Document the defect: photos, videos, detailed description. Keep all documents: receipt, warranty card, packaging",
        "Write a written claim (2 copies) to the SELLER (not manufacturer). Include: purchase date, defect description, your demand",
        "Submit the claim in person (with acceptance stamp) or send by registered mail. Review period: 10 days",
        "If the seller conducts an expert examination — you have the right to be present",
        "If the seller misses deadlines — penalty 1% per day applies",
        "If refused — complaint to consumer protection + lawsuit"
      ],
      warnings: [
        "Repair period cannot exceed 45 days. If longer — demand exchange or refund",
        "If repaired 2+ times — you have the right to refund or exchange",
        "If the defect appears AFTER warranty — only if the service life hasn't expired",
        "DON'T sign the expert report if you disagree — note your objection"
      ]
    },
    // ============================================================
    // 3. POST-WARRANTY RETURN
    // ============================================================
    {
      id: "defective_return_post_warranty",
      title: "📈 Return AFTER warranty period",
      description: "If warranty expired but service life hasn't — you can claim a refund or repair for significant defects.",
      conditions: { consumer_issue: ["defective", "refund"], return_reason: ["defect_found", "broken"], time_passed: ["out_of_warranty"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30–90 days",
      yield_estimate: "Refund or repair (via court)",
      tags: ["post_warranty", "defective", "law"],
      steps: [
        "Check the product's service life (on packaging or documents). Usually 5–10 years for most goods",
        "If the defect occurred BEFORE service life expired — you have rights. You'll need an expert examination",
        "File a written claim. The seller may order an examination at your expense",
        "If the examination confirms a manufacturing defect — the seller must satisfy your claim and reimburse the examination cost",
        "If refused — lawsuit. Statute of limitations: 2 years from defect discovery"
      ],
      warnings: [
        "Service life is NOT the same as warranty. Warranty can be 1 year, service life — 10 years",
        "If service life is not specified — 10 years applies",
        "Court-ordered examinations are expensive but recoverable if you win"
      ]
    },
    // ============================================================
    // 4. ONLINE PURCHASE RETURN (7 DAYS)
    // ============================================================
    {
      id: "online_return_7_days",
      title: "📦 Online purchase cancellation — 7 days",
      description: "For online purchases, you can cancel the order within 7 days without explanation.",
      conditions: { consumer_issue: ["defective", "refund", "online"], purchase_method: ["online_store", "marketplace"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 days",
      yield_estimate: "Money refunded",
      tags: ["online", "7_days", "refund"],
      steps: [
        "Check: product is NOT on the exclusion list (complex technical goods may be excluded in some jurisdictions)",
        "Send a written cancellation notice (by email with read receipt or registered mail)",
        "7 days are counted from RECEIPT of goods, not from order date",
        "Return the goods at your own expense (unless otherwise agreed)",
        "Refund deadline: 10 days from claim submission",
        "If the seller doesn't refund — complaint to consumer protection + lawsuit"
      ],
      warnings: [
        "Keep all correspondence — it's evidence",
        "If the product was used, the seller may reduce the refund",
        "The seller must refund the product price but is NOT required to refund delivery costs"
      ]
    },
    // ============================================================
    // 5. MARKETPLACE DISPUTE
    // ============================================================
    {
      id: "marketplace_dispute",
      title: "📦 Marketplace dispute — action plan",
      description: "The marketplace is responsible for the seller. Demand refund through the platform.",
      conditions: { consumer_issue: ["defective", "refund", "online"], purchase_method: ["marketplace"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–14 days",
      yield_estimate: "Refund or exchange",
      tags: ["marketplace", "refund", "law"],
      steps: [
        "Initiate a return through the marketplace interface (fastest method)",
        "If the seller ignores or refuses — file a complaint with marketplace support",
        "If the marketplace doesn't help — send a formal claim to the marketplace's legal address",
        "File a complaint with the consumer protection agency",
        "If paid by card — chargeback through your bank (within 180 days)",
        "If amount is significant — go to court"
      ],
      warnings: [
        "The marketplace is NOT released from liability for seller information accuracy",
        "Check seller ratings and reviews before purchasing",
        "Save screenshots of all product pages and correspondence"
      ]
    },
    // ============================================================
    // 6. PURCHASE FROM PRIVATE INDIVIDUAL
    // ============================================================
    {
      id: "private_person_purchase",
      title: "👤 Purchase from a private individual — legal protection",
      description: "Consumer protection laws do NOT apply to private-to-private sales. But you still have legal options.",
      conditions: { consumer_issue: ["defective", "refund", "online"], purchase_method: ["private"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "14–60 days",
      yield_estimate: "Refund (only through court)",
      tags: ["private", "law"],
      steps: [
        "Check: is the seller a business or individual? If business — consumer laws apply. If individual — they don't",
        "For private sales: Civil Code applies. Remedies: contract cancellation, refund, damages",
        "Keep all correspondence, screenshots, payment proof, photos of the item",
        "Send a formal claim by registered mail. If no response — file a lawsuit",
        "If the seller is a fraudster — file a police report (fraud)",
        "Statute of limitations: 3 years"
      ],
      warnings: [
        "Consumer protection laws do NOT apply to private individuals",
        "Paying by bank transfer to an individual is risky. Use escrow or platform protection",
        "If the seller is a sole proprietor (self-employed) — consumer laws DO apply"
      ]
    },
    // ============================================================
    // 7. POOR SERVICE
    // ============================================================
    {
      id: "service_complaint",
      title: "🛎️ Poor service — getting your money back",
      description: "Service was bad or not provided — you have the right to refund, price reduction, or free correction.",
      conditions: { consumer_issue: ["service"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 days",
      yield_estimate: "Refund + compensation",
      tags: ["service", "refund", "law"],
      steps: [
        "Document everything: contract, receipts, correspondence, photos, videos, acceptance certificates",
        "Send a written claim to the service provider (2 copies or registered mail). Demand: free correction, price reduction, or refund",
        "Review period: 10 days. If service wasn't provided — demand full refund + 3% penalty per day",
        "For food poisoning: see a doctor, get a medical certificate — this is key evidence",
        "Travel services: in case of cancellation — demand full refund + compensation",
        "If refused — lawsuit + 3% penalty per day"
      ],
      warnings: [
        "Contract is the main document. Without it, use receipts and correspondence",
        "Statute of limitations: 1 year for construction services, 3 years for others"
      ]
    },
    // ============================================================
    // 8. SPOILED FOOD / FOOD POISONING
    // ============================================================
    {
      id: "food_poisoning_consumer",
      title: "🍖 Spoiled food / food poisoning",
      description: "Expired food, food poisoning — you have the right to compensation.",
      conditions: { consumer_issue: ["food"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "7–30 days",
      yield_estimate: "Refund + compensation for harm",
      tags: ["food", "poison", "law"],
      steps: [
        "Keep: receipt, packaging, food remnants, photos — evidence for inspection",
        "If poisoned at a cafe/restaurant: see a doctor within 24 hours — get a medical certificate (key evidence!)",
        "Send a claim to the seller or cafe. Demand: refund, medical expenses, moral damages",
        "Review period: 10 days",
        "File a complaint with the health department — they will conduct an inspection",
        "If refused — lawsuit. Claim: health damages, moral damages, lost income",
        "Statute of limitations: 3 years"
      ],
      warnings: [
        "Medical certificate is MANDATORY — without it, it's almost impossible to prove food poisoning",
        "Check expiration dates at purchase. If expired — you have the right to a refund even without a receipt",
        "If several people were affected — file a collective claim"
      ]
    },
    // ============================================================
    // 9. ONLINE FRAUD
    // ============================================================
    {
      id: "online_fraud",
      title: "💻 Online fraud — action plan",
      description: "Didn't receive goods? Received counterfeit? Seller vanished? Act quickly.",
      conditions: { consumer_issue: ["online"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "7–60 days",
      yield_estimate: "Money refunded (via bank or court)",
      tags: ["online", "fraud", "chargeback"],
      steps: [
        "Save EVERYTHING: website screenshots, correspondence, payment receipt, order number, seller details",
        "Send a demand to the seller (email with read receipt)",
        "If on a marketplace — file a complaint with the platform",
        "If paid by card — chargeback through your bank (180 days from payment)",
        "File a complaint with consumer protection agency (if seller is local) or prosecutor's office",
        "If fraud (seller vanished, fake website) — file a police report",
        "Lawsuit: if you have seller details, you can claim damages"
      ],
      warnings: [
        "Chargeback is the fastest method. Bank will refund within 30–90 days",
        "DON'T send money to an individual's card — only through protected services",
        "Check WHOIS domain, reviews, IIN/OGRN for fake websites"
      ]
    },
    // ============================================================
    // 10. REFUSAL TO REFUND
    // ============================================================
    {
      id: "refund_refusal_resolution",
      title: "💸 Seller refuses to refund — what to do",
      description: "Refusal to refund is a violation. You have the right to penalties and court protection.",
      conditions: { consumer_issue: ["refund"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–45 days",
      yield_estimate: "Refund + 1% penalty per day",
      tags: ["refund", "dispute", "law"],
      steps: [
        "Check: is the seller violating the 10-day refund deadline? If yes — penalties apply",
        "Send a second claim demanding refund + 1% penalty per day",
        "File a complaint with consumer protection agency",
        "If a large chain — contact their customer hotline",
        "Lawsuit: demand refund, penalty, moral damages, and 50% fine",
        "Statute of limitations: 3 years"
      ],
      warnings: [
        "1% penalty accrues for EACH day of delay",
        "50% fine is awarded in court if the seller refused to settle voluntarily",
        "Courts side with the consumer in 90% of cases. Don't be afraid to sue"
      ]
    },
    // ============================================================
    // 11. RETURN WITHOUT RECEIPT
    // ============================================================
    {
      id: "return_no_receipt",
      title: "🧾 Return without a receipt",
      description: "No receipt doesn't mean no rights. You can prove purchase in other ways.",
      conditions: { consumer_issue: ["no_receipt"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–30 days",
      yield_estimate: "Refund or exchange",
      tags: ["no_receipt", "return", "law"],
      steps: [
        "Gather proof of purchase: bank statement, screenshot, witness statements, warranty card, packaging with markings, correspondence",
        "Send a claim stating the receipt is lost but you have other proof",
        "By law, the seller must accept the product and conduct a quality check even without a receipt",
        "If the seller refuses — file a complaint with consumer protection agency",
        "If continues to evade — lawsuit. Courts accept any evidence, including witness statements"
      ],
      warnings: [
        "No receipt is NOT grounds for refusing a defective product return",
        "For 'changed mind' returns (14 days) — receipt is also not mandatory",
        "If the seller says 'no receipt, can't help' — cite the law and demand a written refusal"
      ]
    }
  ]
});