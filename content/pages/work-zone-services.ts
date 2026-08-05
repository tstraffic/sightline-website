import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * Service pages 02–06 (01 and 07 live in their own files). Copy verbatim from
 * 01-website-copy-rev3.md except the surgical voice fixes from
 * 05-migration-map (fix 2 on page 02, fix 3 on page 06).
 *
 * Copy Pass 1: 02–05 sit under Construction traffic engineering; swept path
 * (06) moved to Parking, access and swept paths.
 */

const PRACTICE = PRACTICES.construction;

/** Page 02 — merge already executed in Rev 3; voice fix 2 applied to the
 *  abstract differentiator bullets ("Critical thinking…", "Reviewing the
 *  variables…", "cost-effective solutions") — replaced with the concrete
 *  register-discipline register per the fix. All 8 FAQs verbatim. */
export const STAGING: ServicePageData = {
  pageNo: "02",
  slug: "traffic-staging-plans",
  title: "Traffic staging plans & CAD staging sets",
  metaTitle: "Traffic Staging Plans & CAD Staging Sets",
  metaDescription:
    "Full CAD-based traffic staging sets for multi-stage civil projects — cover sheets, key plans, general arrangements and vehicle turn paths, coordinated as one sequence.",
  practice: PRACTICE,
  opener: "One TGS is straightforward. A dozen, changing week to week, is a different problem entirely.",
  intro:
    "For projects that require multiple, evolving Traffic Guidance Schemes, Sightline delivers an in-depth staging service built for complexity. Our engineers and project managers are qualified across a wide range of traffic and roadwork scenarios, advising with practicality in mind so the plan holds up when it actually meets the job.",
  sections: [
    {
      kind: "bullets",
      heading: "What sets our staging approach apart",
      items: [
        {
          lead: "Built for complexity",
          text: "civil infrastructure jobs with multiple, constantly changing TGS are coordinated smoothly, without losing accuracy or control",
        },
        {
          // voice fix 2: concrete revision-turnaround replaces "Critical thinking, applied on site"
          lead: "Revisions at construction pace",
          text: "when the job changes, the affected sheets are revised and reissued through the drawing register, with revision history tracked sheet by sheet — not redrawn from scratch",
        },
        {
          // voice fix 2: register discipline replaces "Reviewing the variables" / "cost-effective solutions"
          lead: "One coordinated sequence",
          text: "consistent drawing numbering, a key plan and shared conventions across every stage — one sequence instead of a dozen orphan TGS, and a more economical outcome than treating each phase in isolation",
        },
      ],
    },
    {
      kind: "paragraph",
      heading: "What a full CAD staging set includes",
      text: "Complex infrastructure projects don't run on a single static plan. They move through multiple construction stages, each with its own traffic arrangement. Sightline prepares full CAD-based traffic staging sets — cover sheets, key plans, general notes and legends, typical details, general arrangement plans, and vehicle turn path plans — produced to Australian Standards and road authority drawing conventions.",
    },
    {
      kind: "paragraph",
      text: "Each set is built stage by stage, clearly showing what is under construction, what is complete, and what remains live traffic at every point in the project — so contractors, councils and road authorities can see precisely how the site will look and function at each phase.",
    },
    {
      kind: "paragraph",
      text: "Multi-stage projects get the same clarity and reliability as a single TGS — just scaled to handle the complexity of the job.",
    },
  ],
  faqs: [
    {
      q: "When do I need a staging plan instead of a single TGS?",
      a: "When your project moves through multiple phases with changing site conditions — common on larger civil or construction jobs — a staging plan coordinates a full sequence of TGS documents rather than treating each phase in isolation.",
    },
    {
      q: "What's the difference between a traffic staging plan and a TGS?",
      a: "A TGS covers a single point-in-time traffic arrangement. A staging plan set covers the full sequence of arrangements across a multi-stage project, tied together with consistent drawing numbering and a key plan.",
    },
    {
      q: "Does a staging plan cost more than a single TGS?",
      a: "It involves more upfront coordination, mapping multiple stages together — but it's designed to reduce costly rework and delays later in the project.",
    },
    {
      q: "What software is used?",
      a: "CAD (AutoCAD), to industry drawing standards and formatted for road authority and council submission.",
    },
    {
      q: "Are turn path / swept path plans included?",
      a: "Yes — vehicle turn path plans for the relevant design vehicles are typically included in a full staging set, or scoped separately.",
    },
    {
      q: "How many stages can a set cover?",
      a: "As many as the project requires — we have delivered multi-stage sets for complex intersection and bridge upgrade works involving several distinct construction stages.",
    },
    {
      q: "Can staging plans be adjusted once the project starts?",
      a: "Yes — our systems are built to manage high-workload, frequently changing projects, so plans are reviewed and adjusted as the job progresses.",
    },
    {
      q: "Who approves these drawings?",
      a: "Staging plans undergo internal design check and verification before submission, and are ultimately approved by the relevant road authority or council.",
    },
  ],
  related: [{ label: "Swept path analysis", href: "/swept-path-analysis" }],
};

/** Page 03 — KEEP. FAQ 1 carries open item V3 (TMP designer qualification name)
 *  — TODO(verify:V3): confirm "Prepare a Work Zone Traffic Management Plan" is
 *  current under the TfNSW TTM training framework before launch. */
export const TMP: ServicePageData = {
  pageNo: "03",
  slug: "traffic-management-plans",
  title: "Traffic management plans (TMP & CTMP)",
  metaTitle: "Traffic Management Plans (TMP & CTMP)",
  metaDescription:
    "Construction Traffic Management Plans and TMPs for projects across Sydney and NSW — site and hazard assessment, TGS, and implementation and monitoring, to TfNSW codes of practice.",
  practice: PRACTICE,
  opener: "Working without one carries real risk — fines, stop-work orders, and liability if something goes wrong.",
  intro:
    "Sightline prepares Construction Traffic Management Plans (CTMP) and Traffic Management Plans (TMP) for projects across Sydney and NSW. A TMP is the strategic document setting out how vehicles, cyclists and pedestrians will be safely managed around a work site, event, or any activity that disrupts normal road conditions — mandatory for most civil works, developments and events affecting a public road, footpath or cycleway.",
  sections: [
    {
      kind: "bullets",
      heading: "What a properly prepared TMP does",
      items: [
        { text: "Protects vulnerable road users — pedestrians, cyclists, and mobility-impaired road users — with safe alternative routes" },
        { text: "Keeps workers safe from live traffic and site vehicle movements" },
        { text: "Maintains reasonable traffic flow for the public, minimising delay and disruption" },
        { text: "Meets all relevant state and local requirements, including TfNSW codes of practice" },
      ],
    },
    {
      kind: "paragraph",
      heading: "When a TMP is required",
      text: "Generally wherever a project will alter normal road, footpath or cycleway conditions for any duration; form part of a development application (DA) condition; require a Road Occupancy Licence or similar permit; or have a measurable impact on the surrounding road network due to its scale or duration.",
    },
    {
      kind: "bullets",
      heading: "What's inside a TMP",
      items: [
        {
          lead: "Site & hazard assessment",
          text: "traffic volumes and patterns, nearby schools, hospitals and transport stops, sightlines and road geometry, and a risk matrix mapping hazards to controls",
        },
        {
          lead: "Traffic Guidance Scheme (TGS)",
          text: "the visual component, prepared in line with the current Austroads Guide to Temporary Traffic Management",
        },
        {
          lead: "Implementation & monitoring plan",
          text: "roles and responsibilities, set-up, modification and removal procedures, contingency plans, and ongoing inspections",
        },
      ],
    },
    {
      kind: "bullets",
      heading: "TMP vs TGS vs VMP",
      items: [
        { lead: "TMP", text: "the master strategy: full risk assessment, procedures, responsibilities and compliance framework" },
        { lead: "TGS (also called a Traffic Control Plan)", text: "the visual blueprint traffic controllers use on the ground" },
        { lead: "VMP (Vehicle Movement Plan)", text: "manages vehicle logistics inside the site boundary, distinct from the TGS's public road focus" },
      ],
    },
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Initial consultation & site assessment — scoping works and assessing road geometry, sightlines and existing activity",
        "Risk assessment & strategy development — identifying hazards and developing controls in line with safety-in-design principles",
        "TGS/VMP design — standards-compliant diagrams (AS 1742.3) showing signage, barriers, VMS and personnel",
        "Documentation & submission — compiling and lodging a single compliant plan",
        "Implementation & monitoring — pre-start briefings, on-site support, and ongoing review",
      ],
    },
    {
      kind: "bullets",
      heading: "Common mistakes we help clients avoid",
      items: [
        { text: "Relying on a generic, non-site-specific template — every location has its own hazards a template can't account for" },
        { text: "Overlooking pedestrian and cyclist provisions — a compliant TMP needs safe, accessible alternative routes" },
        { text: "Treating a technically sound plan as “job done” — a TMP is only as good as its on-site implementation" },
      ],
    },
  ],
  faqs: [
    {
      // TODO(verify:V3) — qualification name pends TfNSW TTM framework confirmation
      q: "Who is qualified to design a TMP in NSW?",
      a: "A Transport for NSW “Prepare a Work Zone Traffic Management Plan” qualification (equivalent accreditation applies in other states). Always engage an appropriately certified consultant.",
    },
    {
      q: "What's the difference between a TMP and a TIA?",
      a: "A TMP is an operational document for managing traffic around a temporary work site or event. A TIA is a strategic report for a DA, assessing a development's longer-term impact on the surrounding road network.",
    },
    {
      q: "Can an approved TMP be changed once work starts?",
      a: "Not without a formal amendment — the plan must be revised by a qualified designer and resubmitted for approval.",
    },
    {
      q: "What standards apply?",
      a: "AS 1742.3 for signs, devices and procedures, alongside the current Austroads Guide to Temporary Traffic Management and relevant authority requirements — in NSW, TfNSW TS 05492 Traffic Control at Work Sites, and the applicable TfNSW TS 03401 (G10) specification where required by the contract or road authority.",
    },
  ],
  related: [{ label: "Complex & multi-stage TMPs", href: "/complex-multi-stage-tmp" }],
};

/** Page 04 — KEEP, verbatim. */
export const COMPLEX_TMP: ServicePageData = {
  pageNo: "04",
  slug: "complex-multi-stage-tmp",
  title: "Complex & multi-stage traffic management plans",
  metaTitle: "Complex & Multi-Stage Traffic Management Plans",
  metaDescription:
    "Multi-stage TMPs for bridge upgrades, road widenings and major intersection works — staging, barriers, swept paths and network impact designed together for every stage.",
  practice: PRACTICE,
  opener: "Getting the handover between stages wrong is one of the most common sources of delay and safety risk on large projects.",
  intro:
    "Large infrastructure projects rarely operate under a single, static traffic arrangement. Bridge upgrades, road widenings, major intersection works, and civil infrastructure projects typically progress through multiple construction phases, each with its own access requirements, barrier arrangements, and network impact. Sightline prepares the multi-stage TMPs that bring these elements together into one coherent delivery framework.",
  sections: [
    {
      kind: "paragraph",
      text: "A standard TMP is built around one traffic arrangement for one work site. A complex TMP is built around a sequence — Stage 1, Stage 2, Stage 3 and beyond — where the traffic arrangement, barrier positions, pedestrian routes, and construction vehicle access all change as the project progresses.",
    },
    {
      kind: "bullets",
      heading: "Scope",
      items: [
        { lead: "Staged CAD traffic layouts", text: "showing construction status at every stage" },
        { lead: "Barrier design & cross sections", text: "confirmed at each stage, not just at project completion" },
        { lead: "Vehicle swept path confirmation", text: "reconfirmed at each stage rather than assumed to carry over" },
        { lead: "Traffic modelling / SIDRA analysis", text: "where the project affects intersection performance, at each stage" },
        { lead: "Staging transition documentation", text: "clear drawing conventions showing what changes between stages" },
        { lead: "Risk assessment", text: "reassessed across the full project timeline, not just once at the start" },
      ],
    },
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Scope the full staging sequence up front, covering the entire project lifecycle",
        "Design staging layouts, barrier cross sections, and swept path plans together for each stage",
        "Model network impact where relevant, confirming each stage — not only the final layout",
        "Document transitions clearly for unambiguous handover on site",
        "Submit the staged set to the relevant authority, tracking revisions stage by stage",
        "Support delivery through construction, confirming design intent and managing amendments",
      ],
    },
  ],
  faqs: [
    {
      q: "How does this differ from a standard TMP?",
      a: "A standard TMP covers one arrangement for one site. A complex TMP covers a full sequence of stages, with staging, barrier, and swept path design developed for each phase — not just the final layout.",
    },
    {
      q: "Does every stage need its own swept path and barrier design?",
      a: "Where vehicle access, lane configuration, or barrier positions change between stages — yes. Carrying an earlier stage's design forward unchecked is a common and avoidable compliance gap.",
    },
    {
      q: "Are mid-project amendments supported?",
      a: "Yes — revised and reissued through the standard design change process, with revision history tracked on each sheet.",
    },
    {
      q: "What's needed to scope a complex TMP?",
      a: "The full project programme covering all planned stages, existing site geometry and survey, and the construction vehicles expected at each phase.",
    },
  ],
};

/** Page 05 — KEEP, verbatim; featured from homepage §3. Deflection-zone FAQ untouched. */
export const BARRIER: ServicePageData = {
  pageNo: "05",
  slug: "temporary-barrier-design",
  title: "Temporary barrier design statements & cross sections",
  metaTitle: "Temporary Barrier Design Statements & Cross Sections",
  metaDescription:
    "Cross-section drawings and design statements for temporary safety barriers — deflection zones and construction zone widths confirmed against road authority requirements.",
  practice: PRACTICE,
  opener: "An incorrect deflection zone is a common cause of rejection — or barrier failure in the field.",
  intro:
    "Where a project requires temporary safety barriers — concrete, steel, or water-filled — Sightline prepares the cross-section drawings and design statements confirming the barrier system, deflection zones, and construction zone widths meet road authority requirements.",
  sections: [
    {
      kind: "paragraph",
      text: "Cross-section drawings show the existing surface, staging design surface, and ultimate design surface side by side, with lane widths, shoulder widths, deflection zones, and the approved barrier system specified at each chainage point along the works.",
    },
  ],
  faqs: [
    {
      q: "What is a deflection zone?",
      a: "The clear space behind a temporary barrier required for the barrier to move into if struck, as specified by the manufacturer. Getting this wrong is one of the most common reasons a barrier design gets rejected — or fails in the field.",
    },
    {
      q: "Are all barrier types covered?",
      a: "Sightline assesses suitable approved barrier systems where the required survey, manufacturer information, road-authority requirements and technical inputs are available. Complex or non-standard arrangements may require specialist road-safety barrier engineering.",
    },
    {
      q: "What information is needed to produce a cross section?",
      a: "Existing survey and road geometry, the intended construction zone width, and a proposed barrier type if one is already identified. Where included in the agreed scope, we can assess barrier options against the site constraints and applicable authority requirements. Final product selection remains subject to approved-product status, manufacturer requirements and project-specific engineering review.",
    },
    {
      q: "Can cross sections change during construction?",
      a: "Yes — revised and reissued through the standard design change process as staging or construction conditions evolve.",
    },
  ],
};

/** Page 06 — KEEP+pass, voice fix 3: "industry-leading vehicle tracking
 *  software" → unadorned "vehicle tracking software".
 *  TODO(verify:V4) — name the licensed tool (likely AutoTURN) once confirmed. */
export const SWEPT_PATH: ServicePageData = {
  pageNo: "06",
  slug: "swept-path-analysis",
  title: "Swept path analysis (vehicle tracking)",
  metaTitle: "Swept Path Analysis (Vehicle Tracking)",
  metaDescription:
    "Swept path analysis confirming the space every vehicle type needs — from passenger cars to articulated trucks and abnormal loads — before construction locks the design in.",
  practice: PRACTICES.parking,
  opener: "A design that looks fine on paper can still be too narrow for the vehicle it's built for.",
  intro:
    "Swept path analysis evaluates the space a vehicle needs to complete a turning manoeuvre. Because a vehicle's rear wheels track a tighter arc than its front wheels, this difference has to be accounted for to keep roads, driveways, junctions, and parking areas safe and functional. Get it wrong, and the result is costly redesigns, safety hazards, or vehicles encroaching into pedestrian and cyclist space.",
  sections: [
    {
      kind: "bullets",
      heading: "Where it matters",
      items: [
        {
          lead: "Residential developments",
          text: "balancing everyday car access with the turning needs of larger service vehicles like garbage trucks and buses, without over-engineering road widths in a way that encourages speeding",
        },
        {
          lead: "Retail and industrial sites",
          text: "testing loading bay and yard layouts against large or articulated delivery vehicles before construction locks the design in",
        },
        {
          lead: "Schools",
          text: "designing drop-off and pick-up zones generous enough for buses and delivery vehicles, while keeping car movements controlled and away from pedestrian areas",
        },
        {
          lead: "Highways and junctions",
          text: "confirming every permitted vehicle movement is achievable without encroaching on pedestrian or cyclist space",
        },
      ],
    },
    {
      kind: "paragraph",
      heading: "Our service",
      // voice fix 3 applied; TODO(verify:V4) tool name
      text: "Sightline uses vehicle tracking software to simulate forward and reverse movements for any vehicle type your project needs — from passenger cars and buses to articulated trucks and specialised plant. Rather than estimating whether a design will work, we demonstrate it visually and precisely, giving you and any reviewing authority confidence before construction begins.",
    },
    {
      kind: "paragraph",
      text: "We also handle abnormal load assessments for oversized or overweight vehicle movements — wind turbine components, large construction or modular building elements, and similar loads outside standard vehicle libraries — with custom vehicle modelling and a route-specific review of every junction, overhead obstacle and sightline involved.",
    },
    {
      kind: "paragraph",
      text: "Getting swept path analysis right at the design stage is far more cost-effective than fixing it after construction.",
    },
  ],
  faqs: [
    {
      q: "What is swept path analysis?",
      a: "Testing and confirming the space a vehicle needs to complete a turning manoeuvre, accounting for the fact that a vehicle's rear wheels track a tighter path than its front wheels.",
    },
    {
      q: "Why does my project need it?",
      a: "If your site needs to accommodate large vehicles — trucks, buses, service or emergency vehicles — this confirms the design will actually work for them before construction locks it in.",
    },
    {
      q: "What if my project involves an oversized or unusual vehicle?",
      a: "We handle abnormal load assessments for vehicles outside standard design libraries, with a route-specific review of every junction and obstacle involved.",
    },
    {
      q: "Can this be done after construction if there's an issue?",
      a: "It can, but it's far more costly to fix a design flaw after the fact — testing at the design stage is the cost-effective approach.",
    },
  ],
};
