/**
 * Page 26a — Sectors · Civil Contractors. Disposition: KEEP with the one
 * softening fix from 05-migration-map: the "approved first time" bullet lead
 * (a guarantee-shaped claim) is dropped; the deflection-zone check leads
 * instead. Everything else verbatim. Route-to list renders as link cards.
 */

export const CIVIL_CONTRACTORS = {
  eyebrow: "Sectors · Civil contractors",
  h1: "Your programme doesn't wait for a redrawn plan.",
  intro:
    "On a live civil job, traffic documentation is either keeping the works moving or holding them up. Staging changes mid-project. A barrier design comes back marked up. An ROL sits with the TMC while your crew stands down. Sightline works to the pace of a construction programme, not a consultancy calendar.",
  needsHeading: "What contractors come to us for",
  needs: [
    {
      lead: "Staging sets that hold up when the job changes",
      text: "multiple, evolving TGS coordinated as one sequence, revised and reissued as conditions move",
    },
    {
      // Softened per 05-migration-map (26a note) — guarantee phrase removed
      lead: "Barrier design statements",
      text: "deflection zones checked against the manufacturer's specification and the road authority's approved list, whichever is stricter",
    },
    {
      lead: "Multi-stage CTMPs",
      text: "where each phase has its own arrangement, barriers, pedestrian routes and vehicle access, documented so the handover between stages is unambiguous on site",
    },
    {
      lead: "Site audits before someone else does one",
      text: "a compliance check against the approved plan, on your terms rather than the principal contractor's",
    },
    {
      lead: "ROL and permit management",
      text: "run in parallel with the design work so approvals aren't the reason a start date moves",
    },
  ],
  outro:
    "Our engineers and project managers are qualified across a wide range of traffic and roadwork scenarios, and advise with practicality in mind — so the plan holds up when it actually meets the job.",
  routeHeading: "Where contractors usually start",
  routes: [
    { ref: "02", label: "Traffic staging plans", href: "/traffic-staging-plans" },
    { ref: "03", label: "Traffic management plans", href: "/traffic-management-plans" },
    { ref: "04", label: "Complex & multi-stage TMPs", href: "/complex-multi-stage-tmp" },
    { ref: "05", label: "Temporary barrier design", href: "/temporary-barrier-design" },
    { ref: "07", label: "Site audits", href: "/site-audits" },
    { ref: "22", label: "Road occupancy licence (ROL)", href: "/road-occupancy-licence" },
  ],
} as const;
