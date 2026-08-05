import { CIVIL_CONTRACTORS } from "./civil-contractors";

/**
 * Sector pages 26b–26e, verbatim from Rev 3 (26a lives in
 * civil-contractors.ts). Route-to lists render as link cards.
 * 26c: the route card to page 08 (Road Safety Audits) is HIDDEN while 08 is a
 * draft — TODO(verify:D3): restore when the RSA page goes live.
 * 26e: the STA bullet carries TODO(verify:STA) — source wording kept.
 */

export type SectorData = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  needsHeading: string;
  needs: { lead: string; text: string }[];
  outro?: string;
  routeHeading: string;
  routes: { ref: string; label: string; href: string }[];
  notes: string[];
};

export const DEVELOPERS: SectorData = {
  slug: "developers-architects",
  eyebrow: "Sectors · Developers & architects",
  h1: "Council asked for a traffic report. We'll tell you which one.",
  metaTitle: "Developers & Architects",
  metaDescription:
    "The technical evidence that closes traffic and parking questions before they become a Request for Information — TIS, TIA, AS 2890 certification, driveways, sight lines and access.",
  intro:
    "Most DAs that stall on traffic and parking don't stall on anything dramatic. They stall on a bay width, a ramp transition, a sight triangle, or a report prepared by someone council doesn't accept as qualified. Sightline provides the technical evidence that closes those questions before they become a Request for Information.",
  needsHeading: "What developers and architects come to us for",
  needs: [
    {
      lead: "Knowing which report you actually need",
      text: "a Traffic Impact Statement for a smaller development, a full Traffic Impact Assessment where network impact is significant. Getting this wrong costs weeks",
    },
    {
      lead: "Parking that complies, or a case for why it doesn't need to",
      text: "AS 2890 certification, and carpark demand assessments that justify a reduction on evidence rather than assumption",
    },
    {
      lead: "Driveways on difficult sites",
      text: "gradient, transitions and ground clearance resolved on steep or constrained blocks, including Performance Solutions where full compliance genuinely isn't achievable",
    },
    {
      lead: "Sight lines and access",
      text: "the AS 2890.1 sight triangle checked in CAD against your actual layout, and heavy vehicle access confirmed by swept path before construction locks it in",
    },
  ],
  outro:
    "Send us the architectural set, the site address and a description of the development, and we'll tell you what council will ask for.",
  routeHeading: "Where developers usually start",
  routes: [
    { ref: "14", label: "Traffic impact statement", href: "/traffic-impact-statement" },
    { ref: "11", label: "Traffic impact assessment", href: "/traffic-impact-assessment" },
    { ref: "15", label: "Carpark demand assessment", href: "/carpark-demand-assessment" },
    { ref: "16", label: "AS 2890 compliance", href: "/as2890-parking-compliance" },
    { ref: "17", label: "Driveway design", href: "/driveway-design" },
    { ref: "18", label: "Sight line assessment", href: "/sight-line-assessment" },
    { ref: "19", label: "Vehicle access assessment", href: "/vehicle-access-assessment" },
  ],
  notes: ["1. Architectural set", "2. Site address", "3. Description of the development"],
};

export const GOVERNMENT: SectorData = {
  slug: "government-council",
  eyebrow: "Sectors · Government & council",
  h1: "An independent check, from engineers with no stake in the outcome.",
  metaTitle: "Government & Council",
  metaDescription:
    "Independent site audits, calibrated modelling and technical review of submitted reports — evidence that stands up if a decision is questioned later.",
  intro:
    "Councils and road authorities are usually reviewing someone else's work rather than producing it — assessing a developer's traffic report, auditing a contractor's set-up, or needing modelling that will hold up if a decision is questioned later. Sightline provides that assessment as an independent third party.",
  needsHeading: "What government clients come to us for",
  needs: [
    {
      lead: "Independent site audits",
      text: "plans audited regardless of who designed or installed them, with findings documented objectively, photographed and located, and severity-rated with corrective actions",
    },
    {
      lead: "Modelling that supports a decision",
      text: "SIDRA capacity analysis and network modelling calibrated against observed conditions, testing a “do nothing” case against the alternatives",
    },
    {
      lead: "Technical review of submitted reports",
      text: "assessing a developer's TIS, TIA or parking case against the applicable standards and your own DCP",
    },
    {
      lead: "Staging documentation for council-delivered works",
      text: "the same CAD staging sets and barrier design used on major civil projects",
    },
  ],
  outro: "Assessed against TCAWS, the relevant Australian Standards, and the specific approved plan for the site.",
  routeHeading: "Where government clients usually start",
  routes: [
    { ref: "07", label: "Site audits", href: "/site-audits" },
    // { ref: "08", label: "Road safety audits", href: "/road-safety-audits" } — hidden while 08 is a draft (D3)
    { ref: "09", label: "Traffic modelling", href: "/traffic-modelling" },
    { ref: "10", label: "SIDRA analysis", href: "/sidra-intersection-analysis" },
    { ref: "02", label: "Traffic staging plans", href: "/traffic-staging-plans" },
  ],
  notes: ["1. The plan or report to review", "2. Site or project reference", "3. What decision it supports"],
};

export const UTILITIES: SectorData = {
  slug: "utilities",
  eyebrow: "Sectors · Utilities",
  h1: "Fifty small jobs is not one big job.",
  metaTitle: "Utilities",
  metaDescription:
    "Volume TGS turnaround, ROLs, permits across multiple council jurisdictions and TMPs for programmed works — turnaround and consistency across all of them.",
  intro:
    "Utility works are a different problem to a single construction site. High volume, short notice, spread across multiple council areas, often near signals or on regional roads, and sometimes emergency. What matters isn't the complexity of any one TGS — it's turnaround and consistency across all of them.",
  needsHeading: "What utility clients come to us for",
  needs: [
    {
      lead: "Volume TGS turnaround",
      text: "straightforward closures designed and issued quickly, to a consistent standard across every job",
    },
    {
      lead: "ROLs where works sit near a traffic light or on a state or regional road",
      text: "managed end to end, including liaison with bus operators, the TMC, transport authorities and rail operators",
    },
    {
      lead: "Permits across multiple council jurisdictions",
      text: "identifying which permit applies where, and lodging complete applications so processing time isn't lost to resubmission",
    },
    {
      lead: "TMPs for programmed works",
      text: "where a rolling programme needs one governing plan rather than a document per site",
    },
  ],
  routeHeading: "Where utility clients usually start",
  routes: [
    { ref: "01", label: "Traffic guidance schemes", href: "/tgs-traffic-control-plans" },
    { ref: "03", label: "Traffic management plans", href: "/traffic-management-plans" },
    { ref: "22", label: "Road occupancy licence", href: "/road-occupancy-licence" },
    { ref: "23", label: "Council permits", href: "/council-permits" },
  ],
  notes: ["1. The works programme", "2. Typical site types", "3. Council areas covered"],
};

export const EVENTS: SectorData = {
  slug: "events",
  eyebrow: "Sectors · Events",
  h1: "Road closed, crowd moving, police satisfied.",
  metaTitle: "Events",
  metaDescription:
    "Event TMPs, special event and road closure permits, police and transport approvals, and community notification with a named contact — the plan and the approvals together.",
  intro:
    "An event closure carries an approvals pathway most organisers only discover halfway through it — a special event permit, police sign-off, transport operators to notify, and a community that needs telling before the barriers go up. Sightline manages the plan and the approvals together.",
  needsHeading: "What event clients come to us for",
  needs: [
    {
      lead: "Traffic Management Plans for events",
      text: "how vehicles, pedestrians and cyclists are managed around an activity that disrupts normal road conditions, including safe alternative routes",
    },
    {
      lead: "Special event and road closure permits",
      text: "temporary, long-term or full closures, identified and lodged with the relevant council",
    },
    {
      // TODO(verify:STA) — source wording kept pending V1
      lead: "Police and transport approvals",
      text: "Police Area Command permits and State Transit Authority sign-off where public transport routes are affected",
    },
    {
      lead: "Community notification with a named contact",
      text: "a Community Liaison Officer as a single point of contact for residents and businesses for the life of the event",
    },
  ],
  routeHeading: "Where event organisers usually start",
  routes: [
    { ref: "03", label: "Traffic management plans", href: "/traffic-management-plans" },
    { ref: "23", label: "Council permits", href: "/council-permits" },
    { ref: "24", label: "STA & police approvals", href: "/sta-police-approvals" },
    { ref: "25", label: "Community engagement", href: "/community-engagement" },
  ],
  notes: ["1. Event date and location", "2. The closure you think you need", "3. Expected attendance"],
};

/** 26a adapted into the shared shape (data lives in civil-contractors.ts). */
export const CIVIL: SectorData = {
  slug: "civil-contractors",
  eyebrow: CIVIL_CONTRACTORS.eyebrow,
  h1: CIVIL_CONTRACTORS.h1,
  metaTitle: "Civil Contractors",
  metaDescription:
    "Traffic documentation at construction pace — staging sets, barrier design statements, multi-stage CTMPs, site audits and ROL management for civil contractors.",
  intro: CIVIL_CONTRACTORS.intro,
  needsHeading: CIVIL_CONTRACTORS.needsHeading,
  needs: [...CIVIL_CONTRACTORS.needs],
  outro: CIVIL_CONTRACTORS.outro,
  routeHeading: CIVIL_CONTRACTORS.routeHeading,
  routes: [...CIVIL_CONTRACTORS.routes],
  notes: ["1. Site address", "2. Staging or civil drawings", "3. The programme pressure point"],
};

export const SECTORS: Record<string, SectorData> = Object.fromEntries(
  [CIVIL, DEVELOPERS, GOVERNMENT, UTILITIES, EVENTS].map((s) => [s.slug, s]),
);

export const SECTOR_TILES = [
  { label: "Civil contractors", line: CIVIL.h1, href: "/sectors/civil-contractors" },
  { label: "Developers & architects", line: DEVELOPERS.h1, href: "/sectors/developers-architects" },
  { label: "Government & council", line: GOVERNMENT.h1, href: "/sectors/government-council" },
  { label: "Utilities", line: UTILITIES.h1, href: "/sectors/utilities" },
  { label: "Events", line: EVENTS.h1, href: "/sectors/events" },
] as const;
