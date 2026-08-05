import type { ServicePageData } from "./types";

/**
 * Transport & Network Engineering service pages 09–11, verbatim from Rev 3.
 * Pages 12 (data collection) and 13 (road design & CAD) are hidden drafts —
 * Phase 3.
 */

const PRACTICE = { label: "Transport & network engineering", href: "/transport-network-engineering" };

/** Page 09 — KEEP. Multi-state references pend open item D2 (geographic scope):
 *  TODO(verify:D2) — VicRoads / Transport Canberra name-checks kept as source
 *  wording until the NSW-only-or-wider call is made. */
export const MODELLING: ServicePageData = {
  pageNo: "09",
  slug: "traffic-modelling",
  title: "Traffic modelling (SIDRA / Aimsun)",
  metaTitle: "Traffic Modelling (SIDRA / Aimsun)",
  metaDescription:
    "Computer-based traffic models replicating how a road network operates today and how it will perform under future conditions — calibrated against real-world observations.",
  practice: PRACTICE,
  opener: "Test the pressure on your road network before it becomes a real-world problem.",
  intro:
    "As cities, suburbs, and towns grow, the surrounding road network comes under pressure — from new development, population growth, or changes to intersection control. Sightline uses mathematical, computer-based models to replicate how a road network operates today and how it will perform under future conditions.",
  sections: [
    {
      kind: "bullets",
      heading: "Process",
      items: [
        {
          lead: "Existing conditions data",
          text: "public transport timetables, queue lengths, road geometry, signal phasing, traffic volumes, and travel times",
        },
        {
          lead: "Calibration",
          text: "the model is checked against real-world observations to confirm it reflects existing conditions",
        },
        {
          lead: "Future scenario testing",
          text: "a “future base” case is compared against a “future development” case to isolate the impact of a proposed development",
        },
        {
          lead: "Refinement",
          text: "the calibrated model tests design changes and mitigation measures ahead of final design",
        },
      ],
    },
    {
      kind: "bullets",
      heading: "Tools",
      items: [
        {
          lead: "Analytical models (SIDRA Intersection)",
          text: "individual intersections or smaller networks requiring a fast, detailed result",
        },
        {
          lead: "Simulation models (Aimsun)",
          text: "larger, more complex networks, or where an animated, network-wide output is required",
        },
      ],
    },
    {
      kind: "paragraph",
      // TODO(verify:D2) — multi-state references pend the geographic-scope decision
      text: "Modelling is carried out to the relevant road authority's guidelines for the project's jurisdiction (TfNSW, VicRoads, Transport Canberra, and equivalent bodies elsewhere).",
    },
  ],
  faqs: [
    {
      q: "What's the difference between traffic modelling and a Traffic Impact Assessment?",
      a: "Traffic modelling is the technical tool. A TIA is the broader report that uses the model's outputs to assess and justify a development's traffic impact for a council or road authority.",
    },
    {
      q: "Does every development require traffic modelling?",
      a: "No — generally required where significant traffic demand is expected, particularly in areas already experiencing congestion, or where a road authority specifically requests it.",
    },
    {
      q: "What information is required to begin?",
      a: "Existing conditions data is typically collected as part of the process. Prior traffic studies or site plans, if available, help expedite the work.",
    },
    {
      q: "Can multiple design options be tested?",
      a: "Yes — once calibrated, the model tests multiple scenarios to compare options before a final design is committed.",
    },
  ],
};

/** Page 10 — KEEP. Metrics table verbatim, styled table component. */
export const SIDRA: ServicePageData = {
  pageNo: "10",
  slug: "sidra-intersection-analysis",
  title: "SIDRA intersection capacity analysis",
  metaTitle: "SIDRA Intersection Capacity Analysis",
  metaDescription:
    "Lane-by-lane SIDRA modelling of intersections, roundabouts and signalised networks — the data-driven case that convinces council your intersection will actually perform.",
  practice: PRACTICE,
  opener: "The data-driven case that convinces council your intersection will actually perform.",
  intro:
    "SIDRA Intersection is the industry-standard analytical software for detailed, lane-by-lane modelling of traffic flow at intersections, roundabouts, and signalised networks — mandated by most Australian road authorities, including TfNSW, for development applications affecting intersection performance.",
  sections: [
    {
      kind: "table",
      heading: "What SIDRA measures",
      columns: ["Metric", "What it means / benchmark"],
      rows: [
        [
          "Level of Service (LoS)",
          "An A–F grade for how well an intersection is operating — A is free-flowing, F is gridlock. Benchmark: LoS D or better in peak periods.",
        ],
        ["Degree of Saturation (v/c ratio)", "How close the intersection is to its capacity limit. Benchmark: below 0.90."],
        ["Average Delay", "Average time a vehicle is stopped or slowed at the intersection. Assessed against LoS."],
        [
          "95th Percentile Queue",
          "The practical maximum queue length, in metres, not exceeded 95% of the time. Must not block driveways or upstream intersections.",
        ],
      ],
    },
    {
      kind: "numbered",
      heading: "Process",
      steps: [
        "Data collection — traffic counts across weekday AM and PM peaks, site geometry, and signal phasing from the relevant authority",
        "Model build & calibration — calibrated against observed on-site conditions",
        "Scenario testing — a “do nothing” case compared against a “do something” case across opening year and future design horizon",
      ],
    },
  ],
  faqs: [
    {
      q: "Is SIDRA analysis required for every development application?",
      a: "No — it depends on project scale and anticipated traffic generation, as determined by the relevant council or road authority.",
    },
    {
      q: "How does SIDRA differ from simulation software?",
      a: "SIDRA suits detailed, lane-by-lane analysis of individual intersections. Simulation platforms model vehicle-by-vehicle behaviour across larger networks — better suited to queue spillback or multi-intersection interactions.",
    },
    {
      q: "Does SIDRA account for pedestrians and cyclists?",
      a: "Yes — delay, Level of Service, and crossing time outputs are produced for pedestrians and cyclists as well as vehicles.",
    },
    {
      q: "What happens if the analysis shows LoS E or F?",
      a: "It indicates mitigation is required — signal phasing changes, lane reconfiguration, or a physical upgrade — which are modelled to demonstrate a credible path to an acceptable Level of Service.",
    },
  ],
};

/** Page 11 — KEEP; copy unchanged, the page just sits in this practice now. */
export const TIA: ServicePageData = {
  pageNo: "11",
  slug: "traffic-impact-assessment",
  title: "Traffic impact assessment (TIA)",
  metaTitle: "Traffic Impact Assessment (TIA)",
  metaDescription:
    "The detailed evaluation council or a road authority requires for larger developments — a full technical case that your project's network impact has been properly tested, not assumed.",
  practice: PRACTICE,
  opener: "Bigger project, bigger scrutiny.",
  intro:
    "A Traffic Impact Assessment is the detailed evaluation council or a road authority requires for larger, more complex developments — a full technical case that your project's impact on the existing and future transport network has been properly tested, not assumed. Depending on the state, you might see this called a TIA, TIAR, or TER — the name changes, the underlying requirement doesn't.",
  sections: [
    {
      kind: "bullets",
      heading: "What we assess",
      items: [
        { lead: "Traffic generation & distribution", text: "volume generated and how it disperses through the network" },
        { lead: "Vehicle access & egress", text: "design and safety of entry and exit points, including ramps" },
        { lead: "Car parking provision & design", text: "adequacy of on-site parking and AS 2890 / local planning compliance" },
        { lead: "Safety", text: "conflict points, visibility, pedestrian risk" },
        { lead: "Sustainable transport", text: "public transport access, bicycle parking, end-of-trip facilities" },
        { lead: "Waste & loading", text: "safe, efficient collection and delivery operations" },
      ],
    },
    {
      kind: "paragraph",
      heading: "When you'll need one",
      text: "Typically triggered where a development will generate significant additional traffic volume, alter access arrangements or create new intersections, affect on-street or off-street parking availability, or impact the safety or efficiency of the surrounding network. Common examples: large shopping centres, major residential subdivisions, hospitals, large schools, and any project requiring new signals or road upgrades.",
    },
  ],
  faqs: [
    {
      q: "How is this different from a TIS?",
      a: "Depth and scale — full network analysis, intersection modelling such as SIDRA, traffic surveys, and future growth scenarios, versus a shorter statement of effect.",
    },
    {
      q: "Does council always call it a “TIA”?",
      a: "No — naming varies by state, but the content required is consistent.",
    },
    {
      q: "What's in the final report?",
      a: "Existing conditions, the development proposal, traffic generation and distribution analysis (modelled where relevant), parking and access evaluation, sustainable transport considerations, safety analysis, and final recommendations.",
    },
  ],
};
