import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * Service pages 14–20, from Rev 3. Page 21 (operational TPMPs) is a hidden
 * draft.
 *
 * Copy Pass 1: the TIS (14) sits under Development traffic engineering; 15–20
 * under Parking, access and swept paths. The AS 2890.1 (16) and AS 2890.2 (19)
 * dimensional tables and the TIS numeric triggers were REMOVED from public
 * display at Saadat's direction — see DECISIONS.md (overrides the Rev 3 keep
 * list on professional-liability grounds).
 */

const PRACTICE = PRACTICES.parking;

/** Page 14 — KEEP. */
export const TIS: ServicePageData = {
  pageNo: "14",
  slug: "traffic-impact-statement",
  title: "Traffic impact statement (TIS)",
  metaTitle: "Traffic Impact Statement (TIS)",
  metaDescription:
    "A concise technical report demonstrating that your development's traffic generation, parking and access arrangements won't create unsafe or inefficient conditions on the surrounding road network.",
  practice: PRACTICES.development,
  opener: "Stalled DA because council wants a traffic report? A Traffic Impact Statement is usually the fix.",
  intro:
    "It's a concise technical report demonstrating that your development's traffic generation, parking, and access arrangements won't create unsafe or inefficient conditions on the surrounding road network. A TIS is commonly requested for smaller developments where impacts are expected to be localised and a more extensive network assessment is not warranted.",
  sections: [
    {
      kind: "paragraph",
      heading: "When a TIS may be appropriate",
      // Copy Pass 1: the "under 20 units" and "under 100 trips" screening
      // thresholds were removed — visitors were treating them as rules.
      text: "A TIS may suit a smaller development or change of use where the likely traffic impacts are localised and detailed intersection modelling is not expected. The appropriate report scope is determined by the development type, consent authority, road environment and applicable planning controls.",
    },
    {
      kind: "bullets",
      heading: "What's inside the report",
      items: [
        {
          lead: "Existing conditions & site analysis",
          text: "your development's location, the surrounding road network, intersections, road classification, existing traffic controls, and nearby public transport, footpath and cycleway access",
        },
        {
          lead: "Traffic generation & parking assessment",
          text: "expected peak-hour vehicle trips using council or TfNSW rates, a car parking demand check, and confirmation the layout complies with AS 2890.1",
        },
        {
          lead: "Impact analysis & recommendations",
          text: "effect on local street performance and safety, access point review, driver sightlines, internal circulation, and mitigation where needed",
        },
      ],
    },
    {
      kind: "paragraph",
      text: "Councils commonly expect a TIS to be prepared by a suitably qualified traffic engineer. Registration or certification requirements depend on the jurisdiction, development type and requested deliverable.",
    },
    {
      kind: "paragraph",
      text: "A report that does not demonstrate appropriate technical competence, evidence or project-specific assessment may be rejected or returned for further information.",
    },
  ],
  faqs: [
    {
      q: "What's the difference between a TIS and a full TIA?",
      a: "Scale. A TIS suits smaller developments with localised impact; a TIA is the in-depth study for large-scale projects with network-wide impact, including intersection modelling.",
    },
    {
      q: "Do I need a TIS for a simple change of use or small extension?",
      a: "Possibly — a change of use, say retail to restaurant, carries different traffic and parking characteristics council must assess, even without new building works. Worth checking before assuming it's not required.",
    },
    {
      q: "What happens if the TIS identifies a problem, like a parking shortfall?",
      a: "We propose a viable fix — revised access design, a parking management plan, or other mitigation — so the concern is resolved with engineering justification, not left open.",
    },
    {
      q: "What do you need from me to get started?",
      a: "A full set of architectural plans (site, floor, elevations), the site address, and a clear project description — dwellings, GFA, or patron and employee numbers, depending on land use.",
    },
  ],
};

/** Page 15 — KEEP. Three-tier methodology verbatim as the numbered list. */
export const CARPARK_DEMAND: ServicePageData = {
  pageNo: "15",
  slug: "carpark-demand-assessment",
  title: "Carpark demand assessment",
  metaTitle: "Carpark Demand Assessment",
  metaDescription:
    "The site-specific, evidence-based case for the parking provision your project actually needs — whether that's meeting the statutory rate or justifying a reduction.",
  practice: PRACTICE,
  opener: "Statutory parking rates don't know your site — a demand assessment does.",
  intro:
    "Council parking rates are broad, category-based defaults. They don't account for a site's proximity to public transport, shared-parking opportunities in a mixed-use building, or genuine local demand. A Carpark Demand Assessment builds the site-specific, evidence-based case for the parking provision your project actually needs — whether that's meeting the standard rate or justifying a reduction.",
  sections: [
    {
      kind: "numbered",
      heading: "How we build the case",
      steps: [
        "Statutory rates — the default position, applied directly where your land use is a clean fit for the local scheme",
        "Empirical research rates — used where your use isn't listed in the statutory table, drawing on accepted industry data for comparable uses",
        "First-principles surveys — for unique or contentious developments with no standard precedent, using new site-specific surveys of comparable existing developments",
      ],
    },
    {
      kind: "bullets",
      heading: "What can shift demand below the statutory rate",
      items: [
        { text: "Proximity to public transport — train stations, high-frequency bus or tram routes" },
        { text: "Shared parking in mixed-use buildings where peak periods differ, such as office versus restaurant" },
        { text: "Land-use-specific metrics — bedrooms per dwelling, GFA, practitioners or rooms, licensed capacity, seating and attendance" },
      ],
    },
    {
      kind: "paragraph",
      heading: "What council receives",
      text: "A structured report — introduction, methodology referencing the applicable planning clause and rates, a transparent calculation, and a clear conclusion — backed by tables and architectural plans proving AS 2890.1 compliance.",
    },
  ],
  faqs: [
    {
      q: "When should I get this done?",
      a: "Proactively, before council asks — it's faster than waiting for a Request for Information and then scrambling to respond.",
    },
    {
      q: "What if my proposal doesn't meet the statutory rate?",
      a: "This assessment is the formal justification required to proceed — built on evidence, not assumption.",
    },
    {
      q: "Can on-street parking count toward my requirement?",
      a: "Generally no — it's a shared public asset. A survey can show overflow won't harm local amenity, but your on-site provision still needs to carry the case.",
    },
    {
      q: "Is bicycle or motorcycle parking a separate report?",
      a: "No — it's folded into the same assessment alongside vehicle parking.",
    },
  ],
};

/** Page 16 — KEEP. Certification offer explicit; requirements table verbatim. */
export const AS2890: ServicePageData = {
  pageNo: "16",
  slug: "as2890-parking-compliance",
  title: "Parking & AS 2890 compliance",
  metaTitle: "Parking & AS 2890 Compliance",
  metaDescription:
    "Parking and access assessment against the AS 2890 series — geometry, circulation, ramps, headroom, accessible parking and vehicle templates, assessed for the specific project.",
  practice: PRACTICE,
  opener: "One miscalculated dimension can sink a DA.",
  intro:
    "The AS 2890 series is commonly referenced by planning controls, consent conditions and design requirements. The applicable standard, council controls and project-specific requirements must be considered together. Parking non-compliance can result in council comments, redesign and delays during development assessment or certification. We provide a documented parking and access assessment, including certification where the consent authority or project scope specifically requires it and the appropriate signing arrangements are in place.",
  sections: [
    {
      kind: "bullets",
      heading: "The relevant parts",
      items: [
        { lead: "AS 2890.1", text: "off-street parking for light vehicles, the standard most commonly applied" },
        { lead: "AS 2890.2", text: "off-street commercial vehicle facilities, covering loading docks and heavy vehicle circulation" },
        { lead: "AS 2890.6", text: "accessible parking, covering wider bays, adjacent shared zones, and minimum clearances" },
      ],
    },
    {
      // Copy Pass 1: the public dimensional table (bay sizes, headroom, aisle
      // widths, ramp grades, shy distance, wheel stops, B85/B99) was REMOVED.
      // Those values change with user class, geometry, local controls and the
      // edition applied, and were being read as universal requirements.
      kind: "paragraph",
      heading: "What we assess",
      text: "Parking compliance is not determined by one standard dimension. The assessment considers the applicable user class, bay and aisle geometry, circulation, ramps and transitions, headroom, columns and obstructions, accessible parking, vehicle templates, sight distance and local planning controls.",
    },
    {
      kind: "bullets",
      heading: "Assessment areas",
      items: [
        { text: "Parking supply and demand" },
        { text: "Bay and aisle geometry" },
        { text: "Circulation and manoeuvring" },
        { text: "Ramp grades and transitions" },
        { text: "Headroom and overhead obstructions" },
        { text: "Accessible parking" },
        { text: "Columns, walls and obstructions" },
        { text: "Vehicle design templates" },
        { text: "Driveway sight distance" },
        { text: "Council DCP and consent requirements" },
      ],
    },
    {
      kind: "paragraph",
      text: "Requirements vary by site, user class, vehicle type, council controls and the applicable edition of the standard. Website information is general only and does not replace a project-specific compliance assessment.",
    },
    {
      kind: "paragraph",
      heading: "Beyond the minimums",
      text: "Sightlines at driveway exits, lighting, signage and line marking for predictable circulation, and correct treatment of EV charging bays all factor into a car park that works in practice, not just one that meets the geometry on paper.",
    },
  ],
  faqs: [
    {
      q: "Is AS 2890.1 legally mandatory?",
      a: "It's a Standard rather than legislation, but it is commonly referenced by the NCC, council development control plans and consent conditions — which generally makes compliance a practical requirement for assessment.",
    },
    {
      q: "What's the difference between AS 2890.1 and AS 2890.6?",
      a: "2890.1 covers general parking; 2890.6 is the accessible parking standard — wider bays, shared zones, specific signage. They apply together.",
    },
    {
      // Copy Pass 1: B85/B99 naming removed — the applicable template varies
      q: "Which design vehicle applies to my project?",
      a: "The applicable design and check vehicles depend on the land use, the vehicles that will genuinely use the site, and the council's controls. Confirming them before design avoids late-stage redesign.",
    },
    {
      q: "Do I need formal certification, or just a compliant design?",
      a: "Requirements vary by council and project. Some applications require a traffic engineer's assessment or certification, while others require supporting plans and a written compliance review. We confirm the required deliverable when reviewing the consent condition and project documentation.",
    },
  ],
};

/** Page 17 — KEEP. Gradient rules untouched. */
export const DRIVEWAY: ServicePageData = {
  pageNo: "17",
  slug: "driveway-design",
  title: "Driveway design",
  metaTitle: "Driveway Design",
  metaDescription:
    "Driveway design for steep and constrained sites — gradients, transitions and ground clearance resolved to AS 2890.1, with the certification council wants to see.",
  practice: PRACTICE,
  opener: "A steep site doesn't have to mean a rejected DA.",
  intro:
    "Driveway design confirms your entry and exit points are safe and compliant for every vehicle expected to use them — and gradient is where most sloped-site designs fail, usually because the transitions weren't calculated properly.",
  sections: [
    {
      kind: "bullets",
      heading: "Core gradient rules (AS 2890.1)",
      items: [
        { text: "Maximum grade within the property: 1 in 4 (25%)" },
        { text: "Maximum grade at the property line or footpath crossing: 1 in 20 (5%), extending 6m into the site to protect sightlines" },
        {
          text: "Transitions required wherever a grade change exceeds 1 in 8 (12.5%) — minimum 2m long, at roughly half the difference between the two grades, preventing underside scraping at summits and sags",
        },
        { text: "Design vehicles modelled at 120mm ground clearance to verify the full swept path stays clear" },
      ],
    },
    {
      kind: "bullets",
      heading: "Engineering for steep sites",
      items: [
        { lead: "Switchbacks", text: "horizontal curves that extend travel distance to bring the effective grade back under 1 in 4" },
        { lead: "Flat landing zones", text: "required top and bottom, maximum 1 in 20, giving vehicles a safe pause point before entering traffic" },
        { lead: "Swept path verification", text: "confirms longer vehicles clear the inner kerb and stay off opposing lanes on curved layouts" },
        { lead: "Surface selection", text: "solid, textured surfaces on steeper grades for wet-weather traction; loose gravel isn't suitable" },
      ],
    },
    {
      kind: "paragraph",
      heading: "What council wants to see",
      text: "Longitudinal sections showing existing versus proposed levels, cross-sections at the property boundary and garage entry, and formal certification confirming ground clearance holds throughout.",
    },
  ],
  faqs: [
    {
      q: "What's the steepest a driveway can be?",
      a: "1 in 4 (25%) within the property, dropping to 1 in 20 (5%) for the first 6m at the street.",
    },
    {
      q: "How do you stop vehicles scraping on a steep driveway?",
      a: "Transition grades — at least 2m long, roughly half the main slope — at every point where the grade change exceeds 1 in 8.",
    },
    {
      q: "Does this apply to single residential driveways too?",
      a: "Yes — AS 2890.1 governs all off-street driveway design, including houses on steep or constrained sites.",
    },
    {
      q: "What if full compliance genuinely isn't achievable on my site?",
      a: "Councils can accept a “Performance Solution” — a more detailed engineering case proving an alternative design is still safe and functional.",
    },
  ],
};

/** Page 18 — KEEP. */
export const SIGHT_LINES: ServicePageData = {
  pageNo: "18",
  slug: "sight-line-assessment",
  title: "Pedestrian sight line assessment",
  metaTitle: "Pedestrian Sight Line Assessment",
  metaDescription:
    "AS 2890.1 sight triangle assessment — confirming a driver exiting your property can actually see pedestrians and oncoming traffic before crossing the footpath.",
  practice: PRACTICE,
  opener: "The most overlooked reason a DA gets knocked back.",
  intro:
    "A sight line assessment confirms a driver exiting your property can actually see pedestrians and oncoming traffic before crossing the footpath — and vice versa. It's a core AS 2890.1 safety requirement, not paperwork, and a frequent point of rejection when it's skipped.",
  sections: [
    {
      kind: "bullets",
      heading: "The sight triangle",
      items: [
        {
          lead: "AS 2890.1 Figure 3.3",
          text: "defines the area that must stay clear using two measurements",
        },
        { lead: "‘X’ distance", text: "driver eye setback from the property line, typically a minimum of 2.5m for standard vehicles" },
        { lead: "‘Y’ distance", text: "required line of sight along the footpath, commonly 2.0m in each direction for low-volume driveways" },
      ],
    },
    {
      kind: "paragraph",
      text: "Anything taller than 1.0m inside this triangle counts as an obstruction.",
    },
    {
      kind: "paragraph",
      heading: "What commonly gets in the way",
      text: "Solid walls and fencing, dense landscaping, structural or utility columns, and street furniture — letterboxes, signage, even parked cars — are the usual culprits. Higher pedestrian activity or faster adjacent traffic both push the required distances up further.",
    },
    {
      kind: "numbered",
      heading: "How we assess it",
      steps: [
        "Desktop review of architectural and landscape plans, flagging likely obstructions early",
        "CAD analysis — a precise digital model plotting the required sight triangles against your actual layout",
        "Reporting — a formal compliance statement, with clear recommendations wherever the design falls short",
      ],
    },
  ],
  faqs: [
    {
      q: "Are mirrors an acceptable fix?",
      a: "Generally a last resort — councils prefer compliant geometry over a mirror's failure points such as damage, distortion and maintenance.",
    },
    { q: "Does this cover both entering and exiting?", a: "Yes, though exiting is usually the primary focus." },
    {
      q: "Do single dwellings need a formal assessment?",
      a: "Not always requested formally, but the minimum distances still apply — more likely to be formally checked on busier roads or constrained sites.",
    },
    {
      q: "What happens if my design fails?",
      a: "We recommend a fix — relocating the driveway, adjusting the layout, or lowering fencing and landscaping — matched to what your site can actually accommodate.",
    },
  ],
};

/** Page 19 — KEEP. AS 2890.2 table verbatim; links to 06 instead of repeating
 *  swept path detail. The flagged editorial block: first two sentences adapted
 *  into copy per 05-migration-map; the linking instruction was builder guidance
 *  and is stripped. */
export const VEHICLE_ACCESS: ServicePageData = {
  pageNo: "19",
  slug: "vehicle-access-assessment",
  title: "Vehicle access assessment",
  metaTitle: "Vehicle Access Assessment",
  metaDescription:
    "How every vehicle type expected on your site — from passenger cars to B-doubles — enters, moves through, and exits safely, assessed against AS 2890.2 and your council's DCP.",
  practice: PRACTICE,
  opener: "Get this wrong and a truck can't reach your loading dock.",
  intro:
    "A Vehicle Access Assessment reviews how every vehicle type expected on your site — from passenger cars to B-doubles — enters, moves through, and exits safely. It brings driveway design, swept path analysis, and sightlines together into one access-focused review, and it's essential wherever heavy vehicles are part of the picture.",
  sections: [
    {
      // Copy Pass 1: the public AS 2890.2 dimensional table (vehicle lengths,
      // ramp grades, clearances, driveway widths) was REMOVED — those values
      // are project-specific, not universal website figures.
      kind: "paragraph",
      heading: "What the assessment considers",
      text: "The required vehicle-access geometry depends on the actual vehicles using the site, the frequency of use, road environment, internal layout and applicable authority requirements.",
    },
    {
      kind: "bullets",
      items: [
        { text: "Largest regular design vehicle" },
        { text: "Occasional check vehicles" },
        { text: "Entry and exit movements" },
        { text: "Forward-in and forward-out requirements" },
        { text: "Driveway width and alignment" },
        { text: "Internal turning and circulation" },
        { text: "Ramp grades and transitions" },
        { text: "Vertical clearance" },
        { text: "Loading and waste collection" },
        { text: "Emergency-vehicle access" },
        { text: "Conflicts with pedestrians and other vehicles" },
        { text: "Swept-path clearance from kerbs, walls, gates and structures" },
      ],
    },
    {
      kind: "paragraph",
      text: "Vehicle templates and dimensional requirements are confirmed for each project rather than applied as universal website figures.",
    },
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Identify the design vehicle — the largest genuine regular user, setting your turning radii",
        "Map entry and exit points against existing road traffic volumes",
        "Run swept path analysis confirming forward entry and exit with no kerb strikes or lane encroachment",
        "Verify compliance against AS 2890.2 and the relevant council DCP",
        "Document everything in a TIA as formal supporting evidence",
      ],
    },
    {
      kind: "paragraph",
      // Adapted from the flagged editorial block's first two sentences (05-migration-map, page 19 note)
      text: "The design vehicle's full footprint — chassis overhang and trailer cut-in on turns — has to clear kerbs, gateposts and fixed infrastructure. Skipping that step is how sites end up built with a loading dock a truck literally can't reach.",
    },
  ],
  faqs: [
    {
      q: "How is this different from Driveway Design?",
      a: "Driveway Design is the entry and exit point itself. This is the whole journey — internal circulation and conflict points included.",
    },
    {
      q: "Does it cover waste and emergency vehicle access?",
      a: "Yes — the full range of vehicles servicing the site, not just standard deliveries.",
    },
    {
      q: "How does AS 2890.2 differ from AS 2890.1?",
      a: "2890.1 is light vehicles; 2890.2 is commercial and industrial, with larger templates and stricter ramp grades for trucks.",
    },
    {
      q: "Do I need this for every commercial site?",
      a: "Most critical where heavy vehicles or multiple, complex access points are involved — simpler light-vehicle-only sites need a lighter touch.",
    },
  ],
  related: [{ label: "Swept path analysis", href: "/swept-path-analysis" }],
};

/** Page 20 — KEEP. Development/parking focus confirmed; the cross-link with
 *  page 12 waits until 12 leaves draft (TODO: add one line each way when 12
 *  goes live). */
export const SURVEYS: ServicePageData = {
  pageNo: "20",
  slug: "parking-traffic-surveys",
  title: "Parking & traffic surveys",
  metaTitle: "Parking & Traffic Surveys",
  metaDescription:
    "On-site parking and traffic surveys — occupancy, duration, turnover and volume counts — building the real-world baseline your parking case rests on.",
  practice: PRACTICE,
  opener: "Assumptions get DAs rejected. Data gets them approved.",
  intro:
    "Every other service in this practice rests on knowing what's actually happening on the ground — not what a generic rate assumes. We run on-site parking and traffic surveys to build that real-world baseline.",
  sections: [
    {
      kind: "bullets",
      heading: "Survey types",
      items: [
        { lead: "Accumulation / occupancy", text: "how full the site or area gets, and when" },
        { lead: "Duration of stay", text: "how long vehicles stay, distinguishing short visits from long-stay or commuter parking" },
        { lead: "Turnover", text: "how many different vehicles use a space per period, key for medical, quick-service retail and childcare uses" },
        { lead: "Traffic volume counts", text: "vehicles, pedestrians and cyclists, classified where relevant" },
        { lead: "Other surveys", text: "video intersection counts, number plate surveys, origin-destination studies, local area traffic studies" },
      ],
    },
    {
      kind: "bullets",
      heading: "When you need one",
      items: [
        { text: "Your land use doesn't fit standard council categories, such as mixed-use or shared parking" },
        { text: "You're seeking a parking reduction below the statutory rate" },
        { text: "The site sits in a high-demand or constrained-parking area" },
        { text: "A change of use alters the parking profile of an existing building" },
      ],
    },
    {
      kind: "numbered",
      heading: "How it works",
      steps: [
        "Scoping — survey area, typically a 200–400m radius, days including a weekday plus a weekend day where relevant, and time intervals covering peak periods",
        "Data collection — manual counts, video analytics, or ANPR, chosen for the accuracy and detail your project needs",
        "Analysis & reporting — clean, clear tables and charts that feed straight into your Carpark Demand Assessment or TIA",
      ],
    },
  ],
  faqs: [
    {
      q: "Why not just use the statutory rate?",
      a: "Because it's generic. A survey gives you the site-specific evidence needed to justify a departure from it, where the numbers support one.",
    },
    {
      q: "How many days do you survey?",
      a: "Commonly two minimum — a weekday and a weekend day — though this can vary by council or land use.",
    },
    {
      q: "Does weather affect the results?",
      a: "Yes — surveys avoid atypical conditions such as storms or extreme heat, since they distort normal behaviour and can produce data council may reject.",
    },
    {
      q: "On-street versus off-street — what's the difference?",
      a: "On-street measures public kerbside demand near your site; off-street measures your own car park's internal accumulation and efficiency.",
    },
  ],
};
