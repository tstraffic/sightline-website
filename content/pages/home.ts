/**
 * Homepage copy — Rev 3 §A amended per 05-migration-map: CTAs standardised,
 * four equal pillar cards (fourth written from the Approvals landing copy),
 * credential strip = confirmed items only, fee-turnaround line omitted until
 * the 1-day stat verifies.
 */

export const HOME = {
  hero: {
    eyebrow: "Independent traffic and transport engineering",
    h1: "Designed to standard.",
    // TODO(verify:D2) — "across NSW" pends the geographic-scope decision
    sub: "Sightline Traffic Engineers designs the traffic engineering behind civil, infrastructure and development projects across NSW — from the certified TGS on a single lane closure to the SIDRA case that gets an intersection through council.",
  },
  why: {
    heading: "Anyone can draw a plan. Fewer can defend it.",
    intro:
      "A TGS is a certified engineering document. So is a barrier cross section, a swept path model, and a capacity analysis. We treat them that way.",
    points: [
      {
        lead: "Engineered, not templated.",
        text: "Every scheme is designed to the site — geometry, sightlines, volumes, staging — not adapted from the last job that looked similar.",
      },
      {
        lead: "Checked before it is issued.",
        text: "Barrier deflection zones against the manufacturer's specification and the road authority's approved list, whichever is stricter. Swept paths reconfirmed at every stage, not carried forward on assumption.",
        href: "/temporary-barrier-design", // build-list note: feature page 05 from this section
      },
      {
        lead: "Held together across stages.",
        text: "Multi-stage projects get one coherent framework — staging, barriers, swept paths and network impact designed together, with revision history tracked sheet by sheet.",
      },
    ],
    closing:
      "Getting it right at design stage costs a fraction of fixing it after construction, or after a rejection.",
  },
  pillars: [
    {
      ref: "01",
      title: "Work zone engineering",
      text: "TGS, staging sets, CTMPs, barrier design and site audits for works on live road networks. The documentation that gets your site approved — and holds up when the job changes.",
      href: "/work-zone-engineering",
    },
    {
      ref: "02",
      title: "Transport & network engineering",
      text: "Traffic modelling, SIDRA capacity analysis, TIAs and data collection. The evidence-based case that a development or upgrade will actually perform.",
      href: "/transport-network-engineering",
    },
    {
      ref: "03",
      title: "Development & parking engineering",
      text: "AS 2890 compliance, carpark demand, driveway design, sightlines and vehicle access. The technical detail a development application (DA) stands or falls on.",
      href: "/development-parking-engineering",
    },
    {
      // Fourth pillar written from the Approvals landing copy (05-migration-map)
      ref: "04",
      title: "Approvals & delivery support",
      text: "ROL permits, council applications, and community engagement with a named Community Liaison Officer. Scoped alongside the design work, so the approvals pathway runs in parallel with your programme rather than holding it up.",
      href: "/approvals",
    },
  ],
  decoder: {
    // Concept + first paragraph carried from the live site (client-published);
    // expanded content at Saadat's request ("i like the decode my condition,
    // i just wanted more content"). Claims kept safe: free, no obligation,
    // same-business-day reply (published on the live site).
    heading: "Not sure what your condition is asking for? Paste it. We'll tell you.",
    body: [
      "Half the enquiries we get start with a condition of consent nobody can parse. Send the wording and a traffic engineer will reply the same business day with what it actually requires — and just as importantly, what it doesn't.",
      "Conditions rarely name a single document. The same clause can be asking for a construction traffic management plan, a traffic guidance scheme, or both — and ordering the wrong one costs weeks. We read the wording against the consent authority's own requirements and tell you the shortest compliant path.",
    ],
    points: [
      { lead: "What you send", text: "The condition wording, the site address, and anything council attached to it" },
      { lead: "What you get back", text: "The document or documents the condition is actually asking for, what each covers, and a fixed fee if you want us to prepare them" },
      { lead: "What it costs", text: "Nothing — no fee, no obligation, no hourly surprises later" },
    ],
    formTitle: "Decode my condition — free",
  },
  sectors: {
    heading: "Same engineering. Different problem to solve.",
    tiles: [
      { label: "Civil contractors", href: "/sectors/civil-contractors" },
      { label: "Developers & architects", href: "/sectors/developers-architects" },
      { label: "Government & council", href: "/sectors/government-council" },
      { label: "Utilities", href: "/sectors/utilities" },
      { label: "Events", href: "/sectors/events" },
    ],
  },
  closing: {
    heading: "Send us the drawings. We'll tell you what you need.",
    sub: "Site address, architectural or civil plans, and a description of the works is usually enough for us to scope it.",
  },
} as const;
