import { STATS } from "../verified";

/**
 * Capability-statement cover content. Rebuilt in-repo (5 Aug 2026) so it
 * shares the site's design tokens and copy source and cannot drift from the
 * brand again — the previously approved cover existed only as flat artwork.
 *
 * Brought in line with Copy Pass 1: new tagline, consultancy positioning,
 * NSW & ACT scope, the current verified statistics, and no brass.
 *
 * TODO(verify:rev) — revision letter and issue status are Saadat's call.
 * The superseded artwork was "REV B · DRAFT FOR REVIEW".
 */
export const CAPABILITY_COVER = {
  docType: "Capability statement",
  rev: "REV C",
  date: "AUG 2026",
  status: "For issue",
  sheet: "Sheet 01",

  eyebrow: "Independent traffic engineering consultancy",
  h1Line1: "Designed for approval.",
  h1Line2: "Built for construction.",
  intro:
    "Sightline provides traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT. We prepare the reports, assessments and drawings that help projects move from concept and consent through to construction.",

  /** Three-line rule block — carried from the approved cover. */
  principles: [
    "Independent professional judgment.",
    "Practical delivery awareness.",
    "Controlled documentation.",
  ],

  /** The brand idea, demoted to a supporting mark (was "Designed to standard"). */
  mark: "Technical authority, clearly expressed.",

  drawingCaption: [
    ["Drawing", "Sample overall road plan"],
    ["Reference", "AS 2890 series · AS 1742.3"],
    ["Scale", "NTS · illustrative"],
    ["Status", "For approval"],
  ] as [string, string][],

  footerLeft: "Sightline Traffic Engineers — capability statement",
} as const;

/** Only verified figures appear on the cover, same rule as the website. */
export const CAPABILITY_STATS = Object.values(STATS).filter((s) => s.verified);
