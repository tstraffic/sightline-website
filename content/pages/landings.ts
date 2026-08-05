import { PRACTICES } from "./practices";

/**
 * Practice landing pages. Copy Pass 1 (Saadat, 5 Aug 2026) restructured these
 * into four engineering practices with approvals demoted to a supporting
 * section. Register one-liners are each service page's own opening line.
 * `scope` lists services offered that do not yet have their own page — text
 * only, never links, so nothing dead-ends.
 * Hidden drafts (08, 12, 13, 21) are excluded from every register.
 */

export type LandingData = {
  eyebrow: string;
  h1: string;
  intro: string[];
  scopeHeading?: string;
  scope?: string[];
  registerTitle: string;
  registerRev: string;
  services: { ref: string; title: string; line: string; href: string }[];
};

/** P—01 — Development traffic engineering. */
export const DEVELOPMENT_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 01",
  h1: "An otherwise strong DA can still stall on one unresolved dimension.",
  intro: [
    "Traffic impact statements and assessments, development application support, traffic generation, parking demand and responses to council or road authority comments.",
    "Unresolved parking, access or vehicle-movement issues can lead to council comments, redesign and avoidable delays during assessment. Sightline provides the technical evidence that closes those questions before they become a request for further information.",
  ],
  scopeHeading: "Also within this practice",
  scope: [
    "Development application support",
    "Traffic generation assessments",
    "Sustainable transport assessments",
    "Council and road authority response letters",
  ],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 11 & 14",
  services: [
    {
      ref: "14",
      title: "Traffic impact statement (TIS)",
      line: "Stalled DA because council wants a traffic report? A Traffic Impact Statement is usually the fix.",
      href: "/traffic-impact-statement",
    },
    {
      ref: "11",
      title: "Traffic impact assessment (TIA)",
      line: "Bigger project, bigger scrutiny.",
      href: "/traffic-impact-assessment",
    },
    // Page 21 (operational traffic & parking management plans) — hidden draft.
  ],
};

/** P—02 — Parking, access and swept paths. */
export const PARKING_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 02",
  h1: "Parking, access and swept paths, resolved before construction locks them in.",
  intro: [
    "Parking compliance, driveway and access design, loading and servicing assessments, sight-distance reviews and vehicle swept-path analysis.",
    "Requirements vary by site, user class, vehicle type, council controls and the applicable edition of the standard, so each assessment is built around the project rather than a set of default figures.",
  ],
  scopeHeading: "Also within this practice",
  scope: ["Loading and servicing reviews"],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 06, 15–20",
  services: [
    {
      ref: "16",
      title: "Parking & AS 2890 compliance",
      line: "One miscalculated dimension can sink a DA.",
      href: "/as2890-parking-compliance",
    },
    {
      ref: "15",
      title: "Carpark demand assessment",
      line: "Statutory parking rates don't know your site — a demand assessment does.",
      href: "/carpark-demand-assessment",
    },
    {
      ref: "19",
      title: "Vehicle access assessment",
      line: "Get this wrong and a truck can't reach your loading dock.",
      href: "/vehicle-access-assessment",
    },
    {
      ref: "06",
      title: "Swept path analysis (vehicle tracking)",
      line: "A design that looks fine on paper can still be too narrow for the vehicle it's built for.",
      href: "/swept-path-analysis",
    },
    {
      ref: "17",
      title: "Driveway design",
      line: "A steep site doesn't have to mean a rejected DA.",
      href: "/driveway-design",
    },
    {
      ref: "18",
      title: "Pedestrian sight line assessment",
      line: "One of the most overlooked reasons a DA gets knocked back.",
      href: "/sight-line-assessment",
    },
    {
      ref: "20",
      title: "Parking & traffic surveys",
      line: "Assumptions get DAs rejected. Data gets them approved.",
      href: "/parking-traffic-surveys",
    },
  ],
};

/** P—03 — Traffic modelling and network assessment. */
export const MODELLING_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 03",
  h1: "Test the pressure on the network before it becomes a real-world problem.",
  intro: [
    "Traffic surveys, intersection modelling and network analysis that test how a development, road change or construction stage will perform.",
    "Whether a development generates traffic the network can absorb, whether an intersection will hold its level of service through the design horizon, whether a staged closure will queue back into the intersection upstream — these are answered with calibrated models and observed data, not judgement calls.",
  ],
  scopeHeading: "Also within this practice",
  scope: [
    "Intersection capacity assessment",
    "Network impact assessment",
    "Traffic distribution and assignment",
    "Traffic signal and road-upgrade advice",
  ],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 09–10",
  services: [
    {
      ref: "09",
      title: "Traffic modelling",
      line: "Test the pressure on your road network before it becomes a real-world problem.",
      href: "/traffic-modelling",
    },
    {
      ref: "10",
      title: "SIDRA intersection capacity analysis",
      line: "The data-driven case that convinces council your intersection will actually perform.",
      href: "/sidra-intersection-analysis",
    },
    // Page 12 (traffic data collection & analysis) — hidden draft.
  ],
};

/** P—04 — Construction traffic engineering. */
export const CONSTRUCTION_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 04",
  h1: "A work zone is an engineering problem before it is a paperwork problem.",
  intro: [
    "Construction traffic management, staging and temporary traffic design informed by practical experience delivering work on live road networks.",
    "Documentation is prepared with reference to the requirements applicable to the road authority, contract and project, including TfNSW TS 05492 Traffic Control at Work Sites, AS 1742.3 and the current Austroads Guide to Temporary Traffic Management. Where required, the relevant TfNSW TS 03401 (G10) specification and council requirements are also addressed.",
  ],
  scopeHeading: "Also within this practice",
  scope: ["Construction vehicle route plans"],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 01–05, 07",
  services: [
    {
      ref: "03",
      title: "Traffic management plans (TMP & CTMP)",
      line: "Working without one carries real risk — fines, stop-work orders, and liability if something goes wrong.",
      href: "/traffic-management-plans",
    },
    {
      ref: "01",
      title: "Traffic guidance schemes (TGS / TCP)",
      line: "The site-specific drawing that communicates how traffic, pedestrians and workers are managed around the work area.",
      href: "/tgs-traffic-control-plans",
    },
    {
      ref: "02",
      title: "Traffic staging plans & CAD staging sets",
      line: "One TGS is straightforward. A dozen, changing week to week, is a different problem entirely.",
      href: "/traffic-staging-plans",
    },
    {
      ref: "04",
      title: "Complex & multi-stage TMPs",
      line: "Getting the handover between stages wrong is one of the most common sources of delay and safety risk on large projects.",
      href: "/complex-multi-stage-tmp",
    },
    {
      ref: "05",
      title: "Temporary barrier design & cross sections",
      line: "An incorrect deflection zone is a common cause of rejection — or barrier failure in the field.",
      href: "/temporary-barrier-design",
    },
    {
      ref: "07",
      title: "Site audits",
      line: "A traffic management plan is only as effective as its on-site implementation.",
      href: "/site-audits",
    },
    // Page 08 (road safety audits) — hidden draft.
  ],
};

/** Approvals — supporting section beneath the four engineering practices. */
export const APPROVALS_LANDING: LandingData = {
  eyebrow: "Supporting · Approvals and delivery support",
  h1: "The approvals that come with the works.",
  intro: [
    // Voice fix 4: the avoid-list "take the hassle out" sentence is dropped
    "Where required, Sightline can coordinate the approvals that accompany the engineering work, including road occupancy licences, council permits, stakeholder submissions and community notifications.",
    "That coordination runs alongside the design work, so the approvals pathway progresses in parallel with your programme rather than holding it up.",
  ],
  registerTitle: "Section register — what we manage",
  registerRev: "Pages 22–25",
  services: [
    {
      ref: "22",
      title: "TMC road occupancy licence (ROL)",
      line: "No ROL, no works — it's that simple.",
      href: "/road-occupancy-licence",
    },
    {
      ref: "23",
      title: "Council permits & applications",
      line: "Many types of permits can leave you guessing which one is right for your site — we navigate that for you.",
      href: "/council-permits",
    },
    {
      ref: "24",
      title: "STA, police & emergency services approvals",
      line: "Two more approvals that can quietly stall an otherwise-ready ROL.",
      href: "/sta-police-approvals",
    },
    {
      ref: "25",
      title: "Community engagement & CLO",
      line: "Poorly managed community engagement is one of the most common causes of project delay.",
      href: "/community-engagement",
    },
  ],
};

/** Sectors landing — intro verbatim from Rev 3 §F. */
export const SECTORS_LANDING = {
  eyebrow: "Sectors",
  h1: "Same engineering. Different problem to solve.",
  intro:
    "A civil contractor needs a staging set that survives a programme change. An architect needs a parking layout that survives council. A council needs an audit it can defend. Sightline works across all of them — five tiles linking through to the pages below.",
} as const;

export const PRACTICE_LANDINGS: Record<string, LandingData> = {
  [PRACTICES.development.href.slice(1)]: DEVELOPMENT_LANDING,
  [PRACTICES.parking.href.slice(1)]: PARKING_LANDING,
  [PRACTICES.modelling.href.slice(1)]: MODELLING_LANDING,
  [PRACTICES.construction.href.slice(1)]: CONSTRUCTION_LANDING,
};
