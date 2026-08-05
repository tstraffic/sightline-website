import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * DRAFT pages 08, 12, 21 (placeholder copy written strictly from the gap
 * briefs in 05-migration-map.md) and 13 (HOLD — structure only, no service
 * claims). All four: excluded from navigation and sitemap, noindex,
 * watermarked "DRAFT — not for publication", reachable only by direct URL.
 * Draft pattern per the briefs: problem-first opener → concrete middle →
 * FAQ set → closing internal link to the practice page.
 */

/** Page 08 — Road Safety Audits (gap brief A). Buyer: government & council
 *  (defensibility), plus RSA-conditioned developers/contractors.
 *  TODO(verify:D3) — auditor qualifications section is a marked placeholder
 *  until accreditation is confirmed (in-house Austroads-accredited vs
 *  subcontracted); this also gates 26c's route card. */
export const RSA_DRAFT: ServicePageData = {
  pageNo: "08",
  slug: "road-safety-audits",
  title: "Road safety audits (RSA)",
  metaTitle: "Road Safety Audits (RSA)",
  metaDescription:
    "Independent road safety audits at design, pre-opening and existing road stages — findings identified, risk-classified and closed out through formal designer responses.",
  practice: PRACTICES.construction,
  opener: "When a design is challenged, “we checked it ourselves” is not a defence.",
  intro:
    "A road safety audit is a formal, independent review of a road design or an existing road against road safety principles — an examination by auditors who had no part in the design, asking one question: where could this arrangement harm a road user? For the councils and road authorities that commission them, the independence is the point.",
  sections: [
    {
      kind: "bullets",
      heading: "Audit stages",
      items: [
        { lead: "Design-stage audits", text: "concept through detailed design, where a finding costs a drawing revision rather than reconstruction" },
        { lead: "Pre-opening audits", text: "walking and driving the built arrangement before traffic does, in daylight and darkness" },
        { lead: "Existing road audits", text: "reviewing an in-service road or intersection, typically triggered by crash history or a proposed change" },
      ],
    },
    {
      kind: "paragraph",
      heading: "Independence is the feature",
      text: "The audit team must be independent of the design team. That means Sightline cannot audit its own schemes — and for the buyer of an audit, that constraint is exactly what makes the finding defensible. What we audit, we did not design; what we design, someone else audits.",
    },
    {
      kind: "bullets",
      heading: "What the audit produces",
      items: [
        { lead: "Site inspection", text: "the audit is grounded in the site as it is, not as the drawings assume it to be" },
        { lead: "Findings, risk-classified", text: "each safety issue identified, located and classified by risk so responses can be prioritised" },
        { lead: "Recommendations", text: "practical measures the designer can act on, not observations left hanging" },
        { lead: "Designer responses and close-out", text: "each finding formally accepted or reasoned out by the designer, documented to completion — the paper trail is the product" },
      ],
    },
    {
      kind: "paragraph",
      heading: "Auditor qualifications",
      // TODO(verify:D3) — placeholder; do not publish claims until accreditation is confirmed
      text: "[Placeholder — auditor accreditation details to be confirmed before publication.]",
    },
  ],
  faqs: [
    {
      q: "What's the difference between a road safety audit and a site audit?",
      a: "A site audit checks a temporary traffic management set-up against the approved TGS or TMP. An RSA is a broader, independent safety review against general road safety principles, requiring an Austroads-accredited auditor.",
    },
    {
      q: "Who commissions a road safety audit?",
      a: "Commonly councils and road authorities, and developers or contractors whose approval conditions require one at a nominated design or delivery stage.",
    },
    {
      q: "Does the designer have to accept every finding?",
      a: "No — the designer responds formally to each finding, either accepting it with an action or setting out the reasoning for not adopting it. The documented response and close-out is part of the audit's value.",
    },
    {
      q: "Can Sightline audit a scheme it designed?",
      a: "No — the audit team must be independent of the design team. That separation is what makes the audit worth commissioning.",
    },
  ],
  related: [{ label: "Site audits", href: "/site-audits" }],
  draft: true,
};

/** Page 12 — Traffic Data Collection & Analysis (gap brief B). Buyer: the
 *  modelling client, the council RFI, the network project needing a
 *  defensible baseline. One cross-link line each way with page 20 — the
 *  20→12 line is added when this page goes live (not before; a live page
 *  must not link to a hidden draft). */
export const DATA_COLLECTION_DRAFT: ServicePageData = {
  pageNo: "12",
  slug: "traffic-data-collection",
  title: "Traffic data collection & analysis",
  metaTitle: "Traffic Data Collection & Analysis",
  metaDescription:
    "Turning-movement counts, classified counts, queue observations, travel-time and speed data — the counted baseline that SIDRA and Aimsun calibration, TIAs and network analysis rest on.",
  practice: PRACTICES.modelling,
  opener: "A calibrated model starts with counted traffic, not assumed traffic.",
  intro:
    "Every defensible model, TIA and network study rests on a baseline someone actually measured. Sightline collects and analyses the traffic data behind civil and network projects — designed around what the model or assessment downstream will need, and delivered in the formats road authorities accept.",
  sections: [
    {
      kind: "bullets",
      heading: "What we collect",
      items: [
        { lead: "Turning-movement counts", text: "video-based intersection counts across the peaks the assessment needs" },
        { lead: "Classified vehicle counts", text: "by vehicle type, where heavy-vehicle share matters to the analysis" },
        { lead: "Automatic tube counts", text: "continuous volume and speed over days or weeks" },
        { lead: "Queue observations", text: "measured queue lengths for model calibration and spillback checks" },
        { lead: "Travel-time runs", text: "corridor travel times under real conditions" },
        { lead: "Speed data", text: "spot and continuous speed surveys" },
        { lead: "Pedestrian and cyclist counts", text: "movement and crossing volumes where active transport shapes the design" },
        { lead: "Origin–destination and number-plate studies", text: "where the question is where traffic goes, not just how much there is" },
      ],
    },
    {
      kind: "paragraph",
      heading: "Where the data goes",
      text: "Outputs are structured to feed straight into SIDRA and Aimsun calibration, traffic impact assessments and road-network analysis — counts, phasing and queue data in the form the model needs, not a spreadsheet that has to be reworked first.",
    },
    {
      kind: "paragraph",
      heading: "Conditions that invalidate a survey",
      text: "Weather events, school holidays and atypical local events distort traffic behaviour and can produce data a road authority rejects. Survey timing is planned around them, and anything anomalous is disclosed with the dataset.",
    },
  ],
  faqs: [
    {
      q: "How is this different from parking and traffic surveys?",
      a: "This page is the civil and network side — intersection and corridor data feeding models and network studies. Parking and traffic surveys serve development applications and parking cases; they stay separate services.",
    },
    {
      q: "What formats do you deliver?",
      a: "Whatever the downstream use needs — typically tabulated counts by movement and interval, classified summaries, and calibration-ready inputs for SIDRA or Aimsun, alongside a survey methodology note.",
    },
    {
      q: "How long does a survey take to organise?",
      a: "Simple counts can be mobilised quickly; multi-intersection or multi-day programmes need more lead time, particularly where the survey window has to avoid holidays and atypical conditions.",
    },
  ],
  related: [
    { label: "Traffic modelling", href: "/traffic-modelling" },
    { label: "SIDRA intersection capacity analysis", href: "/sidra-intersection-analysis" },
    { label: "Traffic impact assessment", href: "/traffic-impact-assessment" },
    { label: "Parking & traffic surveys", href: "/parking-traffic-surveys" },
  ],
  draft: true,
};

/** Page 21 — Operational Traffic & Parking Management Plans (gap brief C).
 *  Buyer: developers/architects with a condition of consent, plus the
 *  operators who inherit the document. The contrast line vs page 03 lives
 *  here; the 03→21 pointer is added when this page goes live. */
export const OPERATIONAL_DRAFT: ServicePageData = {
  pageNo: "21",
  slug: "operational-traffic-parking-plans",
  title: "Operational traffic & parking management plans",
  metaTitle: "Operational Traffic & Parking Management Plans",
  metaDescription:
    "The plan for how a site operates after it opens — circulation, parking, loading, waste, pick-up and drop-off, queues and pedestrian movement, with named responsibilities.",
  practice: PRACTICES.development,
  opener: "The CTMP ends at completion — the consent condition doesn't.",
  intro:
    "A construction traffic management plan covers the build. An operational traffic and parking management plan covers everything after: how vehicles, parking, deliveries and people actually move through the site once it opens — commonly required as a condition of consent, and inherited by whoever operates the site.",
  sections: [
    {
      kind: "bullets",
      heading: "What the plan covers",
      items: [
        { lead: "Internal vehicle circulation", text: "how vehicles move through the site without conflict" },
        { lead: "Parking allocation", text: "staff, customer, resident and visitor parking, and how it is managed" },
        { lead: "Loading and delivery arrangements", text: "dock and bay usage, timing and vehicle limits" },
        { lead: "Waste collection", text: "where and when collection vehicles operate" },
        { lead: "Pick-up and drop-off", text: "managed arrival and departure movements, kept out of through traffic" },
        { lead: "Queue management", text: "keeping demand from backing onto the public road" },
        { lead: "Accessible parking", text: "provision and access routes" },
        { lead: "Pedestrian movement", text: "safe routes through and around vehicle areas" },
        { lead: "Signage and line marking", text: "the physical cues that make the plan legible on the ground" },
        { lead: "Responsibilities and monitoring", text: "who owns the plan day to day, and how compliance is checked" },
        { lead: "Review and complaint procedures", text: "how the plan is amended and how concerns are handled" },
      ],
    },
    {
      kind: "paragraph",
      heading: "Who needs one",
      text: "Car parks, schools, childcare centres, medical facilities, places of worship, shopping centres, residential developments and industrial sites — anywhere the consent authority wants certainty that the operating site, not just the construction site, manages its traffic.",
    },
  ],
  faqs: [
    {
      q: "Is this the same as a CTMP?",
      a: "No — a CTMP manages construction traffic and ends at completion. This plan governs the operating site: circulation, parking, loading and pedestrian movement for the life of the use.",
    },
    {
      q: "When does council condition one?",
      a: "Commonly where a use generates ongoing traffic and parking activity that needs active management — schools, childcare, medical, retail and similar uses — with the plan required before occupation.",
    },
    {
      q: "Who implements it once the site operates?",
      a: "The site operator — the plan names responsibilities, monitoring and review procedures so the document keeps working after handover.",
    },
    {
      q: "Can it be amended later?",
      a: "Yes — operating conditions change, and the plan includes a review procedure for amending it, with council approval where the consent requires it.",
    },
  ],
  related: [{ label: "Traffic management plans", href: "/traffic-management-plans" }],
  draft: true,
};

/** Page 13 — Road Design & CAD Documentation. HOLD: structure only, NO
 *  service claims of any kind until Sightline confirms the scope
 *  (00-INSTRUCTIONS: do not draft claims). Build last. */
export const ROAD_DESIGN_HOLD: ServicePageData = {
  pageNo: "13",
  slug: "road-design-cad",
  title: "Road design & CAD documentation",
  metaTitle: "Road Design & CAD Documentation",
  metaDescription: "Page in preparation.",
  practice: PRACTICES.modelling,
  opener: "Page in preparation.",
  intro:
    "[Structure only — the scope of this service is being confirmed with the engineering team. No service description is published until it is.]",
  sections: [
    { kind: "paragraph", heading: "Scope", text: "[To be confirmed.]" },
    { kind: "paragraph", heading: "Deliverables", text: "[To be confirmed.]" },
    { kind: "paragraph", heading: "Process", text: "[To be confirmed.]" },
  ],
  faqs: [],
  draft: true,
};

export const DRAFT_SERVICES: Record<string, ServicePageData> = Object.fromEntries(
  [RSA_DRAFT, DATA_COLLECTION_DRAFT, OPERATIONAL_DRAFT, ROAD_DESIGN_HOLD].map((s) => [s.slug, s]),
);
