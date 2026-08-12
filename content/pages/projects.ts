import { PRACTICES } from "./practices";

/**
 * Authorised project-showcase data supplied by Saadat, 12 Aug 2026.
 * Descriptions stay within what is visible in the supplied drawing packages;
 * no client outcome, approval result or performance claim is inferred.
 */

export type ProjectDrawing = {
  src: string;
  label: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  sector: { label: string; href: string };
  division: { label: string; href: string };
  summary: string;
  workIncluded: string[];
  drawingStatus: string;
  deliverables: string[];
  servicesDelivered: { label: string; href: string }[];
  images: ProjectDrawing[];
  permission: "granted";
};

const CONSTRUCTION = PRACTICES.construction;
const CIVIL = { label: "Civil contractors", href: "/sectors/civil-contractors" };
const GOVERNMENT = { label: "Government & council", href: "/sectors/government-council" };

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hill-road-traffic-staging",
    title: "Hill Rd Traffic Staging",
    location: "Hill Road, NSW",
    sector: GOVERNMENT,
    division: CONSTRUCTION,
    summary:
      "An overall corridor plan coordinating staged traffic arrangements, temporary alignments, work zones and tie-ins across Hill Road and its connecting intersections.",
    workIncluded: [
      "Overall road plan across the full project corridor",
      "Temporary traffic alignments and construction-zone overlays",
      "Intersection, access and stage-interface coordination",
    ],
    drawingStatus: "Overall plan",
    deliverables: ["Overall traffic staging plan"],
    servicesDelivered: [
      { label: "Traffic staging plans", href: "/traffic-staging-plans" },
      { label: "Complex and multi-stage TMPs", href: "/complex-multi-stage-tmp" },
    ],
    images: [
      {
        src: "/projects/hill-road-overall.webp",
        label: "Overall traffic staging plan",
        alt: "Overall Hill Road traffic staging plan showing the project corridor, intersections and temporary alignments",
      },
    ],
    permission: "granted",
  },
  {
    slug: "westmead-bridge-detour-plan",
    title: "Westmead Bridge Detour Plan",
    location: "Westmead, NSW",
    sector: GOVERNMENT,
    division: CONSTRUCTION,
    summary:
      "A Stage 2 detour drawing for the Westmead Bridge Road upgrade, routing traffic around the Wentworth Avenue closure between Alexandra Avenue and Byrne Street.",
    workIncluded: [
      "Signed detour routes around the Stage 2 closure",
      "Temporary direction signs and relocated signposts",
      "Closure interfaces and local-road access coordination",
    ],
    drawingStatus: "Stage 2 - for review and comment",
    deliverables: ["Stage 2 detour plan"],
    servicesDelivered: [
      { label: "Traffic staging plans", href: "/traffic-staging-plans" },
      { label: "Traffic management plans", href: "/traffic-management-plans" },
    ],
    images: [
      {
        src: "/projects/westmead-bridge-detour.webp",
        label: "Stage 2 detour plan",
        alt: "Westmead Bridge Stage 2 detour plan showing closure points, signed routes and local-road connections",
      },
    ],
    permission: "granted",
  },
  {
    slug: "sample-traffic-guidance-schemes",
    title: "Sample TGS",
    location: "Various locations",
    sector: CIVIL,
    division: CONSTRUCTION,
    summary:
      "A six-sheet sample selection showing how temporary traffic guidance changes with site geometry, road classification, pedestrian access and plant movements.",
    workIncluded: [
      "Crane-lift work zones and temporary lane controls",
      "Pedestrian and footpath closures with maintained access",
      "Intersection, local-road and mobile-crane arrangements",
    ],
    drawingStatus: "Sample drawing selection",
    deliverables: ["6 traffic guidance scheme examples"],
    servicesDelivered: [
      { label: "Traffic guidance schemes", href: "/tgs-traffic-control-plans" },
      { label: "Traffic management plans", href: "/traffic-management-plans" },
    ],
    images: [
      {
        src: "/projects/sample-tgs-01.webp",
        label: "Crane-lift traffic guidance scheme",
        alt: "Sample traffic guidance scheme for a crane lift with work zones, controllers and temporary traffic signs",
      },
      {
        src: "/projects/sample-tgs-02.webp",
        label: "Local-road traffic guidance scheme",
        alt: "Sample local-road traffic guidance scheme with temporary controls, site access and construction activity",
      },
      {
        src: "/projects/sample-tgs-03.webp",
        label: "Main Street worksite arrangement",
        alt: "Sample Main Street traffic guidance scheme showing a worksite, detour and pedestrian controls",
      },
      {
        src: "/projects/sample-tgs-04.webp",
        label: "Town-centre intersection arrangement",
        alt: "Sample town-centre intersection traffic guidance scheme with work zones and temporary signs",
      },
      {
        src: "/projects/sample-tgs-05.webp",
        label: "Urban access and lane-control arrangement",
        alt: "Sample urban traffic guidance scheme showing temporary access, lane controls and pedestrian routing",
      },
      {
        src: "/projects/sample-tgs-06.webp",
        label: "Mobile crane - Main Street",
        alt: "Sample mobile-crane traffic guidance scheme for Main Street showing the crane work area and traffic control devices",
      },
    ],
    permission: "granted",
  },
  {
    slug: "hill-road-traffic-cross-section",
    title: "Traffic Cross Section",
    location: "Hill Road, NSW",
    sector: CIVIL,
    division: CONSTRUCTION,
    summary:
      "Typical Hill Road sections setting out live traffic lanes, shoulder widths, temporary barriers, deflection zones, pedestrian paths and construction areas at three chainages.",
    workIncluded: [
      "Three typical road cross sections at nominated chainages",
      "Barrier locations and required deflection zones",
      "Lane, shoulder, pedestrian-path and construction-zone dimensions",
    ],
    drawingStatus: "For review and comment",
    deliverables: ["Traffic and barrier cross-section sheet"],
    servicesDelivered: [
      { label: "Temporary barrier design", href: "/temporary-barrier-design" },
      { label: "Traffic staging plans", href: "/traffic-staging-plans" },
    ],
    images: [
      {
        src: "/projects/hill-road-cross-section.webp",
        label: "Typical traffic cross sections",
        alt: "Hill Road traffic cross-section sheet showing lanes, barriers, deflection zones and construction areas",
      },
    ],
    permission: "granted",
  },
  {
    slug: "main-road-heddon-greta-traffic-staging",
    title: "Main Road, Heddon Greta Traffic Staging",
    location: "83 Main Road, Heddon Greta, NSW",
    sector: CIVIL,
    division: CONSTRUCTION,
    summary:
      "Stage 2 construction traffic staging for the proposed service station at 83 Main Road, shown through the selected cover, index, notes, legend, cross-section and general-plan sheets.",
    workIncluded: [
      "Stage 2 package cover and drawing index",
      "General notes, legends and typical staging details",
      "Typical cross section and construction traffic general plan",
    ],
    drawingStatus: "Stage 2 - final design",
    deliverables: ["6 selected sheets from the Stage 2 drawing package"],
    servicesDelivered: [
      { label: "Traffic staging plans", href: "/traffic-staging-plans" },
      { label: "Temporary barrier design", href: "/temporary-barrier-design" },
    ],
    images: [
      {
        src: "/projects/heddon-greta-09.webp",
        label: "Cover sheet",
        alt: "Stage 2 construction traffic staging cover sheet for 83 Main Road, Heddon Greta",
      },
      {
        src: "/projects/heddon-greta-10.webp",
        label: "Drawing index",
        alt: "Stage 2 construction traffic staging drawing index for 83 Main Road, Heddon Greta",
      },
      {
        src: "/projects/heddon-greta-11.webp",
        label: "General notes and legend - sheet 1",
        alt: "Stage 2 construction traffic staging general notes and legend sheet 1",
      },
      {
        src: "/projects/heddon-greta-12.webp",
        label: "General notes and legend - sheet 2",
        alt: "Stage 2 construction traffic staging general notes, legend and staging detail sheet 2",
      },
      {
        src: "/projects/heddon-greta-13.webp",
        label: "Typical section",
        alt: "Stage 2 typical traffic staging cross section for Main Road, Heddon Greta",
      },
      {
        src: "/projects/heddon-greta-14.webp",
        label: "General plan",
        alt: "Stage 2 construction traffic staging general plan for Main Road, Heddon Greta",
      },
    ],
    permission: "granted",
  },
];

export function visibleCaseStudies(_isProduction: boolean): CaseStudy[] {
  return CASE_STUDIES;
}
