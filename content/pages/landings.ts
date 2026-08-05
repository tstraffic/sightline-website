/**
 * Practice/section landing pages — intros verbatim from Rev 3 (voice fix 4
 * applied to the Approvals landing: the avoid-list "take the hassle out"
 * sentence is dropped; the parallel-pathway idea already carries the message).
 * Register one-liners are each page's own Rev 3 opening line.
 * Pages 12, 13 (Transport) and 21 (Dev & Parking) are hidden drafts — excluded.
 */

export type LandingData = {
  eyebrow: string;
  h1: string;
  intro: string[];
  registerTitle: string;
  registerRev: string;
  services: { ref: string; title: string; line: string; href: string }[];
};

export const TRANSPORT_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 03",
  h1: "Test the pressure on the network before it becomes a real-world problem.",
  intro: [
    "Whether a development generates traffic the network can absorb, whether an intersection will hold a Level of Service D through the design horizon, whether a staged closure will queue back into the intersection upstream — these are answered with calibrated models and observed data, not judgement calls.",
    "SIDRA and Aimsun modelling, traffic impact assessment, data collection and CAD road documentation, to the relevant road authority's guidelines.",
  ],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 09–11",
  services: [
    {
      ref: "09",
      title: "Traffic modelling (SIDRA / Aimsun)",
      line: "Test the pressure on your road network before it becomes a real-world problem.",
      href: "/traffic-modelling",
    },
    {
      ref: "10",
      title: "SIDRA intersection capacity analysis",
      line: "The data-driven case that convinces council your intersection will actually perform.",
      href: "/sidra-intersection-analysis",
    },
    {
      ref: "11",
      title: "Traffic impact assessment (TIA)",
      line: "Bigger project, bigger scrutiny.",
      href: "/traffic-impact-assessment",
    },
    // Pages 12 (data collection) & 13 (road design & CAD) — hidden drafts, Phase 3.
  ],
};

export const DEV_PARKING_LANDING: LandingData = {
  eyebrow: "Engineering services · Practice 01",
  h1: "A DA does not fail on architecture. It fails on a dimension.",
  intro: [
    "Bay widths, ramp transitions, sight triangles, a design vehicle that cannot physically reach the loading dock — parking and access non-compliance is one of the most common and most preventable reasons council knocks a development application back.",
    "Sightline provides the technical evidence: TIS and TIA reporting, carpark demand assessments, AS 2890 compliance certification, driveway design for constrained sites, sightline assessments and vehicle access reviews.",
  ],
  registerTitle: "Practice register — what we issue",
  registerRev: "Pages 14–20",
  services: [
    {
      ref: "14",
      title: "Traffic impact statement (TIS)",
      line: "Stalled DA because council wants a traffic report? A Traffic Impact Statement is usually the fix.",
      href: "/traffic-impact-statement",
    },
    {
      ref: "15",
      title: "Carpark demand assessment",
      line: "Statutory parking rates don't know your site — a demand assessment does.",
      href: "/carpark-demand-assessment",
    },
    {
      ref: "16",
      title: "Parking & AS 2890 compliance",
      line: "One miscalculated dimension can sink a DA.",
      href: "/as2890-parking-compliance",
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
      line: "The most overlooked reason a DA gets knocked back.",
      href: "/sight-line-assessment",
    },
    {
      ref: "19",
      title: "Vehicle access assessment",
      line: "Get this wrong and a truck can't reach your loading dock.",
      href: "/vehicle-access-assessment",
    },
    {
      ref: "20",
      title: "Parking & traffic surveys",
      line: "Assumptions get DAs rejected. Data gets them approved.",
      href: "/parking-traffic-surveys",
    },
    // Page 21 (operational TPMPs) — hidden draft, Phase 3.
  ],
};

export const APPROVALS_LANDING: LandingData = {
  eyebrow: "Approvals & delivery support · Section",
  h1: "The approvals that come with the works.",
  intro: [
    // Voice fix 4: the "take the hassle out" sentence is dropped
    "Every set of works on a public road carries an approvals pathway — permits, licences, stakeholder sign-offs and community notification. Sightline manages that pathway alongside the design work, so it runs in parallel with your programme rather than holding it up.",
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
