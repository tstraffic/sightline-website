import { PRACTICES } from "./practices";

/**
 * Homepage copy. Copy Pass 1 (Saadat, 5 Aug 2026):
 *  - tagline retired: "Designed to standard." → "Designed for approval.
 *    Built for construction."
 *  - hero repositioned as an independent consultancy led by development work
 *  - four engineering practices reordered; approvals demoted to a supporting
 *    section beneath them
 *  - absolute claims replaced with requirement-dependent language
 */

export const HOME = {
  hero: {
    eyebrow: "Independent traffic engineering consultancy",
    h1Line1: "Designed for approval.",
    h1Line2: "Built for construction.",
    sub: "Sightline provides traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT. We prepare the reports, assessments and drawings that help projects move from concept and consent through to construction.",
    lifecycle:
      "From traffic impact assessments and parking design to swept-path analysis, network modelling and construction traffic planning, Sightline provides practical engineering that supports the full project lifecycle.",
    note: "Send the drawings — a written scope comes back with a fixed fee.",
  },
  why: {
    heading: "Anyone can draw a plan. Fewer can defend it.",
    intro:
      "TGSs, barrier layouts, swept-path analyses and capacity assessments are controlled technical deliverables. Each must be prepared and reviewed to the requirements applicable to the site, authority and project.",
    points: [
      {
        lead: "Engineered, not templated.",
        text: "Every scheme is designed to the site — geometry, sightlines, volumes, staging — not adapted from the last job that looked similar.",
      },
      {
        lead: "Checked before it is issued.",
        text: "Barrier deflection zones assessed against the manufacturer's specification and the road authority's requirements. Swept paths reconfirmed at each stage rather than carried forward on assumption.",
        href: "/temporary-barrier-design",
        linkLabel: "Temporary barrier design →",
      },
      {
        lead: "Held together across stages.",
        text: "Multi-stage projects get one coherent framework — staging, barriers, swept paths and network impact designed together, with revision history tracked sheet by sheet.",
      },
    ],
    closing:
      "Resolving these questions at design stage generally costs a fraction of addressing them after construction, or after a request for further information.",
  },
  whatWeDo: {
    heading: "What we do",
    rev: "Four engineering practices. One project lifecycle.",
  },
  // Order per Copy Pass 1: development → parking/access → modelling → construction
  pillars: [
    {
      ref: "01",
      title: PRACTICES.development.label,
      text: "Traffic impact statements and assessments, development application support, traffic generation, parking demand and responses to council or road authority comments.",
      href: PRACTICES.development.href,
    },
    {
      ref: "02",
      title: PRACTICES.parking.label,
      text: "Parking compliance, driveway and access design, loading and servicing assessments, sight-distance reviews and vehicle swept-path analysis.",
      href: PRACTICES.parking.href,
    },
    {
      ref: "03",
      title: PRACTICES.modelling.label,
      text: "Traffic surveys, intersection modelling and network analysis that test how a development, road change or construction stage will perform.",
      href: PRACTICES.modelling.href,
    },
    {
      ref: "04",
      title: PRACTICES.construction.label,
      text: "Construction traffic management, staging and temporary traffic design informed by practical experience delivering work on live road networks.",
      href: PRACTICES.construction.href,
    },
  ],
  /** Supporting section — engineering first, approvals second. */
  supporting: {
    label: "Supporting",
    title: PRACTICES.approvals.label,
    text: "Where required, Sightline can coordinate the approvals that accompany the engineering work, including road occupancy licences, council permits, stakeholder submissions and community notifications.",
    href: PRACTICES.approvals.href,
  },
  decoder: {
    // Concept + first paragraph carried from the live site (client-published);
    // expanded at Saadat's request. Claims kept requirement-dependent.
    heading: "Not sure what your condition is asking for? Paste it. We'll tell you.",
    body: [
      "Many enquiries start with a condition of consent nobody can parse. Send the wording and a traffic engineer will reply the same business day with what it appears to require — and, just as usefully, what it does not.",
      "Conditions rarely name a single document. The same clause can point to a construction traffic management plan, a traffic guidance scheme, or both, and ordering the wrong one costs weeks. We read the wording against the consent authority's requirements and set out the shortest compliant path.",
    ],
    points: [
      { lead: "What you send", text: "The condition wording, the site address, and anything council attached to it" },
      {
        lead: "What you get back",
        text: "The document or documents the condition appears to call for, what each covers, and a fixed fee if you want us to prepare them",
      },
      { lead: "What it costs", text: "Nothing — no fee, no obligation, no hourly surprises later" },
    ],
    promise: {
      primary: "Free",
      secondary: "Same business day",
    },
    formSteps: ["Paste condition", "Engineer reviews", "Written reply"],
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
