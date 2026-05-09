export interface WorkItem {
  slug: string;
  title: string;
  type: "Case Study" | "MVP" | "Proof of Concept" | "Strategy" | "Research";
  year: number;
  summary: string;
  coverColor: string;
  tags: string[];
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    outcomes: string[];
    learnings: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const stats = [
  { value: "300+", label: "Institutional Accounts" },
  { value: "75%", label: "Engagement Rate" },
  { value: "20%", label: "Onboarding Time Cut" },
  { value: "3 yrs", label: "Product Experience" },
];

export const skillCategories = [
  {
    name: "Core PM",
    skills: [
      "User Research",
      "Market Research",
      "Customer Empathy",
      "Cross-functional Collaboration",
      "Client Feedback Synthesis",
    ],
  },
  {
    name: "Technical",
    skills: [
      "Data Analysis",
      "SQL",
      "Excel",
      "Google Sheets",
      "AI Tools",
      "Quality Assurance",
    ],
  },
  {
    name: "Tools",
    skills: ["PowerPoint", "Notion"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bloomberg",
    role: "Product Specialist, Portfolio Solutions",
    period: "Mar 2025 — Present",
    description:
      "Bridging client feedback, data, and engineering teams to drive platform adoption across 300+ institutional accounts.",
    highlights: [
      "Led user research by owning a structured client feedback system across 300+ institutional accounts, identifying adoption blockers, synthesizing recurring themes, and surfacing prioritized insights to product and analytics teams to inform roadmap decisions",
      "Designed and maintained an engagement tracking dashboard in Excel that exposed tool adoption gaps across the client base; insights directly shifted outreach strategy and drove a 75% engagement rate, 25 points above company average",
      "Collaborated cross-functionally with product, analytics, and sales to translate client friction into scoped improvement recommendations; authored user stories to guide engineering and design teams, closing feedback loops that led to measurable platform improvements",
      "Synthesized adoption trends and client behavior data into executive briefings, leveraging market research insights that accelerated leadership's resourcing and prioritization decisions during periods of market volatility",
    ],
  },
  {
    company: "Bloomberg",
    role: "Equity Specialist",
    period: "Jun 2023 — Mar 2025",
    description:
      "Managed 500+ client onboarding engagements for equity analytics tools, applying customer empathy to identify recurring friction points in product deployment and driving follow-up actions that measurably increased platform adoption.",
    highlights: [
      "Designed and delivered structured training sessions on equity analytics tools, tracking completion and reducing onboarding time by 20% across client teams by addressing common user pain points",
      "Developed tailored demonstration workflows across ESG and index analytics, capturing user feedback and surfacing recurring themes to product teams to shape future feature improvements",
      "Analyzed post-training adoption metrics and usage patterns, creating dashboards that helped sales teams adjust outreach and improve engagement",
      "Identified and resolved data quality risks by coordinating with product and engineering teams through quality assurance practices, reducing client-impacting issues and improving reliability",
    ],
  },
  {
    company: "Bloomberg",
    role: "Sales and Analytics Intern",
    period: "Jun 2022 — Aug 2022",
    description: "Supported analytics and sales operations at Bloomberg.",
    highlights: [],
  },
  {
    company: "Fitness Fair",
    role: "Product Intern (Seasonal)",
    period: "Jan 2018 — Dec 2022",
    description:
      "Contributed to quarterly strategy reviews and operational decisions at a Lagos-based fitness company.",
    highlights: [
      "Participated in quarterly strategy reviews, pitching ideas for service expansion and demographic targeting",
      "Supported inventory tracking to inform operational decisions",
    ],
  },
];

// Add your real case studies here when ready
export const workItems: WorkItem[] = [];

/* Placeholder examples — uncomment and edit to use:
export const workItems: WorkItem[] = [
  {
    slug: "onboarding-flow-rebuild",
    title: "Rebuilding the Onboarding Flow",
    type: "Case Study",
    year: 2024,
    coverColor: "from-blue-900 to-blue-700",
    summary:
      "Reduced enterprise time-to-value by 40% by dismantling a fragmented 14-step onboarding and replacing it with an adaptive, role-aware experience.",
    tags: ["Onboarding", "B2B SaaS", "Enterprise", "User Research"],
    content: {
      intro:
        "When Meridian's enterprise customer success team flagged that 28% of new accounts never completed setup in their first 30 days, we knew the onboarding experience was broken. What followed was a six-month deep dive that reshaped how we think about activation — and proved that simpler isn't always the answer when your users come in with wildly different needs.",
      sections: [
        {
          heading: "The Problem",
          body: "Our onboarding had grown organically over four years. Every team had contributed a step. By the time a new admin logged in for the first time, they faced a 14-screen wizard covering everything from data imports to user role configuration to API key generation — regardless of how they planned to use the product. Churn data told a clear story: users who didn't complete onboarding within 7 days were 3x more likely to churn within 90 days.\n\nThe existing flow treated every user the same: technical admin, business analyst, and executive sponsor all saw identical screens. Exit surveys showed distinct frustration patterns by role. Admins found the wizard too shallow. Analysts found it overwhelming. Executives abandoned after step 2.",
        },
        {
          heading: "Discovery",
          body: "We ran 22 moderated user interviews across six customer accounts, covering four distinct personas. I partnered with our UX researcher to shadow three onboarding sessions in real time — sitting alongside the admin as they went through setup. We also pulled session recordings and funnel analytics to quantify where exactly the drop-offs occurred.\n\nKey findings:\n— 67% of drop-offs happened between step 6 (data source connection) and step 9 (team invitation)\n— Executive sponsors, who often completed the first 2 steps then passed off, were logged out before they could invite their admin\n— The wizard showed the same steps whether you were on a 5-seat trial or a 500-seat enterprise agreement\n— There was no concept of 'progress saved' — leaving meant starting over",
        },
        {
          heading: "Solution Design",
          body: "Rather than redesigning the wizard sequentially, we proposed replacing the linear flow with a role-aware, checkpoint-based setup center. Users would select their role at login, and the system would surface only the steps relevant to them — prioritized by what was blocking them from getting their first meaningful value.\n\nFor enterprise accounts, we introduced a 'Setup Owner' concept: one user coordinates onboarding and can assign tasks to teammates directly from the setup center. This resolved the handoff problem where executives initiated signup but weren't technical enough to complete it.\n\nWe also introduced 'Quick Wins' — a curated set of 3 actions (connect one data source, invite one teammate, view one report) that could be completed in under 10 minutes and unlocked a sense of accomplishment before full setup was done.",
        },
        {
          heading: "Execution",
          body: "We shipped in two phases. Phase 1 (8 weeks) introduced the role-aware routing and persistent progress state — the two highest-impact changes with lowest risk. Phase 2 (6 weeks) added the Setup Owner handoff flow and Quick Wins track.\n\nI worked closely with engineering leads to define the state machine for the setup center, and with CS to build an internal dashboard showing customer setup completion status — which became a proactive intervention tool.",
        },
      ],
      outcomes: [
        "40% reduction in enterprise time-to-value (from 18 days median to 11 days)",
        "First-week setup completion rate improved from 72% to 91%",
        "28% drop in onboarding-related CS tickets in the 60 days post-launch",
        "Net Promoter Score at 30-day mark increased by 12 points",
      ],
      learnings:
        "The biggest learning was that 'simplify the onboarding' was the wrong framing. Our users didn't need fewer steps — they needed the right steps in the right order for their job. Personalization at the routing level, not the content level, was the unlock. Also: investing in internal tooling for CS to monitor setup health turned out to be as valuable as the customer-facing changes.",
    },
  },
  {
    slug: "ai-search-mvp",
    title: "AI-Assisted Search MVP",
    type: "MVP",
    year: 2023,
    coverColor: "from-violet-900 to-violet-700",
    summary:
      "Took a B2B analytics platform from keyword search to semantic, intent-aware search in a 10-week sprint — without retraining any models.",
    tags: ["AI", "Search", "MVP", "Developer Tools"],
    content: {
      intro:
        "Our platform held 5+ years of structured performance data for e-commerce brands. Users knew the data was in there — they just couldn't find it. Keyword search returned exact matches only. A user searching for 'best performing brands last quarter' got nothing. We had 90 days to show whether semantic search was worth a full-platform investment.",
      sections: [
        {
          heading: "The Opportunity",
          body: "Activation data showed that users who performed 5+ searches in their first week had 2.4x better 90-day retention. But fewer than 30% of new users hit that threshold — and anecdotally, we knew from CS calls that users weren't finding what they were looking for.\n\nThe bet: if we could make search feel like querying a knowledgeable analyst instead of a keyword index, we'd unlock a meaningfully different product experience.",
        },
        {
          heading: "MVP Scope Definition",
          body: "The hardest part of this project was deciding what not to build. We debated custom embeddings, fine-tuned models, and complex retrieval pipelines — all of which would have taken 6+ months. I pushed hard for a constrained MVP: use an existing language model API to interpret search queries, translate them into our existing structured query syntax, and return results through our current data layer.\n\nNo new models. No new data infrastructure. Just a thin AI layer on top of what already existed. The question was: would that be good enough to test the hypothesis?",
        },
        {
          heading: "Build and Iteration",
          body: "We ran a 4-week internal alpha with 8 power users — all analysts from top-tier customer accounts who agreed to try it. Their feedback was direct: the AI interpretations were often right but when they were wrong, users had no way to understand why or correct it.\n\nWe added a 'search interpretation' display — showing users exactly how their query was translated — and a one-click way to edit that interpretation. This transparency became the most positively received feature of the MVP.",
        },
        {
          heading: "Beta and Validation",
          body: "We shipped a closed beta to 40 accounts, gated by account tier. Instrumented heavily: we tracked whether the AI interpretation was accepted, modified, or discarded, and whether the resulting query returned useful results.\n\nAfter 6 weeks of beta, we had enough signal to bring to leadership: AI-assisted search sessions had 38% higher result-to-insight conversion than standard search, and users who used it performed 2x more searches per session.",
        },
      ],
      outcomes: [
        "38% higher result-to-insight conversion in AI-assisted sessions",
        "2x increase in searches per session among beta users",
        "Search query abandonment rate dropped from 41% to 19%",
        "MVP approved for full productization with dedicated 6-engineer team",
      ],
      learnings:
        "Explainability isn't just a nice-to-have for AI features — for B2B users, it's a trust prerequisite. Users tolerated errors when they could see and correct the AI's interpretation. When the system felt like a black box, even accurate results created anxiety. The search interpretation display was an afterthought that became the MVP's most important feature.",
    },
  },
  {
    slug: "developer-api-v2",
    title: "Developer API v2 Strategy",
    type: "Case Study",
    year: 2023,
    coverColor: "from-slate-800 to-slate-600",
    summary:
      "Led a cross-team API redesign that reduced partner integration time from 3 weeks to 4 days and unlocked a new ecosystem growth channel.",
    tags: ["API", "Platform", "Developer Experience", "B2B"],
    content: {
      intro:
        "Our API had been built piecemeal by three separate engineering teams over five years. Partners building integrations routinely told us it took 2-3 weeks of engineering time to get to a working implementation. When a strategic partner's CTO mentioned in a business review that their team had 'considered building their own data layer instead,' we had our mandate.",
      sections: [
        {
          heading: "Stakeholder Landscape",
          body: "This project touched three engineering teams, two business units, and our external partner ecosystem. Getting alignment on design principles before writing a single spec was essential — and harder than expected. Team A wanted full backward compatibility. Team B wanted a clean break. The partner success team wanted documentation above all else. I facilitated four cross-team working sessions over six weeks before we agreed on a set of non-negotiable principles: versioned endpoints, consistent error schemas, and pagination that behaved identically across all resources.",
        },
        {
          heading: "Partner Research",
          body: "I conducted structured interviews with 11 active API partners — ranging from 2-person startups to enterprise ISVs. We also reviewed 90 days of support tickets tagged to API issues. The top friction points, in order: inconsistent authentication flows across endpoints, undocumented rate limiting behavior, and lack of webhook reliability.\n\nOne interview was particularly clarifying: a senior engineer at a partner company had created an internal 'Meridian API quirks' document that was 8 pages long. I asked if we could use it as a test suite. They said yes.",
        },
        {
          heading: "API Design Process",
          body: "We adopted an API-first design process: specs were written in OpenAPI before any implementation began, reviewed by partner representatives in a closed beta program, and iterated on before code was written. This felt slow at first — six weeks of spec review before development started — but it saved weeks of rework downstream.\n\nThe three most consequential design decisions: unified authentication using OAuth 2.0 scopes (replacing five different token schemes), consistent cursor-based pagination across all list endpoints, and a standardized error object with machine-readable codes.",
        },
        {
          heading: "Migration Strategy",
          body: "We maintained v1 APIs in full for 18 months post-launch with clear deprecation notices. For strategic partners, we offered white-glove migration support — 4-hour working sessions with our engineering team to migrate their integration. For the long tail, we invested in migration guides, a compatibility checker, and a Postman collection.",
        },
      ],
      outcomes: [
        "Partner integration time reduced from 3 weeks to 4 days on average",
        "API-related support tickets down 61% in the 6 months post-launch",
        "4 net-new enterprise partnerships signed citing API quality as a factor",
        "Developer satisfaction score (DSAT) improved from 3.1 to 4.4 out of 5",
      ],
      learnings:
        "The biggest mistake early on was assuming we understood the partner pain points without research. When we finally did the interviews, we found that rate limiting and webhooks — not authentication — were the top blockers. We'd almost prioritized auth alone. Structured qualitative research with external stakeholders is as important as internal user research, and often gets skipped.",
    },
  },
  {
    slug: "customer-health-dashboard",
    title: "Customer Health Score Dashboard",
    type: "Proof of Concept",
    year: 2022,
    coverColor: "from-emerald-800 to-emerald-600",
    summary:
      "Built an internal churn prediction tool for CSMs that surfaced at-risk accounts 45 days earlier than manual reviews allowed.",
    tags: ["Internal Tool", "Churn Prevention", "Data", "CS Operations"],
    content: {
      intro:
        "Our customer success team was managing 400+ accounts with an instinct-based early warning system: gut feel, account review cadences, and the occasional red-flag email from an unhappy champion. We knew churn was predictable — we just didn't have a way to see it coming. This proof of concept changed that, and eventually became a core internal product.",
      sections: [
        {
          heading: "The Problem Worth Solving",
          body: "Net Revenue Retention was our north star, and churn was eating into it. Post-mortems on churned accounts consistently showed the same pattern: warning signals had existed 60+ days before the account closed, but no one had connected the dots. Usage drop-offs, decreased login frequency, support ticket spikes, champion job changes — all predictive, none synthesized.\n\nThe CS team had 12 people managing 400 accounts. They couldn't manually track all the signals for every account every week. We needed a system.",
        },
        {
          heading: "Proof of Concept Scope",
          body: "I proposed a 6-week PoC with a very specific success criterion: could we identify, from data we already had, accounts that churned in the past 6 months — before the churn event? If retrospective prediction accuracy was above 70%, we'd have justification for a full build.\n\nWe used five signals: product usage frequency, feature adoption breadth, support ticket sentiment, billing contact changes, and NPS response decay. I worked with our data team to backtest against 18 months of account data.",
        },
        {
          heading: "Build and Testing",
          body: "The PoC was a Metabase dashboard connected to a weekly-refreshed SQL view. No machine learning, no fancy models — just a weighted score formula that combined the five signals into a 0-100 health score with a categorical risk tier (Healthy / Watch / At Risk / Critical).\n\nWe ran it in parallel with the existing manual process for 8 weeks. CS managers reviewed both their existing at-risk list and the dashboard list each Monday. At the end of 8 weeks, we compared which accounts actually churned or expanded.",
        },
        {
          heading: "Results and Productization",
          body: "The dashboard identified 8 of 11 churned accounts in the test period as 'At Risk' or 'Critical' an average of 47 days before churn. It also flagged 3 accounts that churned without warning (champion departures that weren't captured in our data). The CS team adopted it immediately and informally made it part of their weekly workflow before we'd even decided to build it properly.\n\nBased on PoC results, engineering scoped a 12-week build for a proper internal product with automated alerts, Salesforce sync, and CSM-adjustable weights.",
        },
      ],
      outcomes: [
        "Retrospective churn prediction accuracy of 73% in the 8-week test",
        "At-risk accounts identified an average of 47 days earlier than existing process",
        "2 at-risk accounts saved through early intervention during the test period",
        "PoC directly approved for full productization, shipping 4 months later",
      ],
      learnings:
        "The fastest way to prove the value of a data product is to show that it would have worked in the past. Backtesting against historical outcomes is underused as a validation method in product management. It removes the 'we'll have to wait and see' objection and lets you have a real conversation about prediction quality before writing a line of product code.",
    },
  },
  {
    slug: "mobile-checkout-redesign",
    title: "Mobile Checkout Redesign",
    type: "Case Study",
    year: 2022,
    coverColor: "from-orange-800 to-orange-600",
    summary:
      "Increased mobile checkout conversion by 18% through research-driven UX changes that reduced friction without touching the underlying payment flow.",
    tags: ["Mobile", "Conversion", "UX", "A/B Testing"],
    content: {
      intro:
        "Mobile accounted for 54% of traffic but only 31% of completed purchases. The gap was costing us significantly in revenue every month. A previous engineering-led attempt at a redesign had shipped, rolled back, and left the team gun-shy about touching checkout. This project was about rebuilding confidence in the process as much as fixing the product.",
      sections: [
        {
          heading: "Diagnosing the Gap",
          body: "Session recordings and funnel analysis pointed to three specific moments where mobile users dropped: the shipping address form, the payment method selection screen, and the final review page. What wasn't clear from quantitative data alone was why.\n\nWe ran 15 moderated usability tests on mobile — 8 on iOS, 7 on Android — with participants asked to purchase a specific item while talking through their experience. The findings were revealing. The address form's auto-complete triggered inconsistently. The payment screen required scroll to reach the CTA. The review page showed so much information that users second-guessed their order rather than confirming it.",
        },
        {
          heading: "Design Constraints",
          body: "One critical constraint: we could not touch the payment processing flow. Legal and compliance requirements meant any changes to payment-adjacent screens required a security review that would extend the timeline by 3+ months. We had to achieve our goals purely through UX changes to everything surrounding the payment step.\n\nThis constraint was frustrating but clarifying. It forced us to focus on the form experience and review page — which turned out to be more impactful than we'd assumed.",
        },
        {
          heading: "Changes We Made",
          body: "Address form: switched from a single long form to a progressive flow (street address first, then city/state auto-populated from zip). Added clear error states with specific guidance. Fixed the auto-complete so it correctly triggered on field focus.\n\nPayment selection: moved the CTA above the payment detail inputs so it was always visible on screen. Added a trust signal (security badge + encryption note) adjacent to the card field.\n\nReview page: reduced from 12 line items to 5 — combined shipping speed and cost, removed redundant tax breakdown, added a single-line summary at the top. Added order edit shortcuts so users could fix mistakes without navigating back.",
        },
        {
          heading: "Testing and Rollout",
          body: "We ran a two-armed A/B test with 50/50 split over 3 weeks. Primary metric: checkout completion rate on mobile. Secondary metrics: time-in-checkout, form error rate, and order edit frequency.\n\nWe monitored daily and ran a pre-committed interim analysis at one week. Results were directionally positive at interim — we let it run to full power. Final analysis showed statistically significant improvement across all primary and secondary metrics.",
        },
      ],
      outcomes: [
        "18.4% improvement in mobile checkout completion rate",
        "Average time-in-checkout reduced from 4m 12s to 2m 48s",
        "Form error rate dropped by 34%",
        "No statistically significant change in return/refund rate (quality maintained)",
      ],
      learnings:
        "Constraints are often clarifying. Being blocked from touching the payment screen felt like a setback — but it forced us to study the surrounding experience with far more rigor than we would have if we'd had full access. The review page changes alone drove a third of the total conversion improvement. We'd have overlooked it if the easy path (redesign payment) had been available.",
    },
  },
];
*/
