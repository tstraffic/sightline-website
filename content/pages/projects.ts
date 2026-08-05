/**
 * Case-study data model — fields per 00-INSTRUCTIONS §Projects. Content is
 * added ONLY as client permissions are confirmed (`permission: "granted"`).
 * The single sample entry demonstrates the template and is GATED from
 * production builds — it renders in development only, clearly labelled.
 * No invented case studies, ever.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  clientType: string;
  problem: string;
  constraints: string[];
  servicesDelivered: { label: string; href: string }[];
  approvalPathway: string;
  deliverables: string[];
  outcome: string;
  /** Filenames under /public/projects/ — drawing excerpts or photos. */
  images: string[];
  related: { label: string; href: string }[];
  permission: "granted" | "pending" | "sample";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    // SAMPLE — template demonstration only. Gated from production builds.
    slug: "sample-case-study",
    title: "[SAMPLE] Multi-stage intersection upgrade",
    location: "[Suburb], NSW",
    clientType: "Civil contractor (tier 2)",
    problem:
      "[Sample text] A staged intersection upgrade needed its traffic arrangement redesigned mid-programme when utility relocations changed the works sequence.",
    constraints: [
      "[Sample] Live traffic maintained through all stages",
      "[Sample] Night works windows only for switchovers",
      "[Sample] Bus route through the site",
    ],
    servicesDelivered: [
      { label: "Traffic staging plans", href: "/traffic-staging-plans" },
      { label: "Temporary barrier design", href: "/temporary-barrier-design" },
      { label: "Road occupancy licence", href: "/road-occupancy-licence" },
    ],
    approvalPathway: "[Sample] TfNSW ROL + council works permits",
    deliverables: ["[Sample] 4-stage CAD staging set", "[Sample] Barrier cross sections per stage", "[Sample] ROL applications"],
    outcome: "[Sample text] Works completed across four stages without an unplanned closure.",
    images: [],
    related: [{ label: "Construction traffic engineering", href: "/construction-traffic-engineering" }],
    permission: "sample",
  },
];

/** Entries visible in this build: granted always; sample only outside production. */
export function visibleCaseStudies(isProduction: boolean): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.permission === "granted" || (!isProduction && c.permission === "sample"));
}
