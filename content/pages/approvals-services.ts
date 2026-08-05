import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * Approvals & Delivery Support service pages 22–25, verbatim from Rev 3.
 * Fixes: page 22 "buses" → "bus operators" (05-migration-map). Open items
 * tagged: V2 (ROL trigger wording), V1 (STA terminology), D2 (ACT legislation
 * line in the page 23 permit list).
 */

const PRACTICE = PRACTICES.approvals;

/** Page 22 — KEEP+pass, kept in full (high-traffic page).
 *  TODO(verify:V2) — "near a traffic light": confirm whether to state the
 *  precise TMC trigger (commonly within 100 m of traffic signals). */
export const ROL: ServicePageData = {
  pageNo: "22",
  slug: "road-occupancy-licence",
  title: "TMC road occupancy licence (ROL) permits",
  metaTitle: "TMC Road Occupancy Licence (ROL) Permits",
  metaDescription:
    "Sightline manages the entire TMC Road Occupancy Licence application — liaison with bus operators, the TMC, transport authorities and rail operators to keep your project moving.",
  practice: PRACTICE,
  opener: "No ROL, no works — it's that simple.",
  intro:
    // TODO(verify:V2) — trigger wording kept as source until confirmed
    "If your project requires a Transport Management Centre (TMC) Road Occupancy Licence, Sightline manages the entire application process. An ROL is required for any works near a traffic light, or on a state or regional road — without it, works cannot proceed.",
  sections: [
    {
      kind: "paragraph",
      // "buses" → "bus operators" per 05-migration-map
      text: "Delivering an ROL on time relies on more than paperwork — it takes coordination. We liaise directly with bus operators, the TMC, transport authorities, rail operators and every other relevant stakeholder to keep your project moving. Our established working relationships across these bodies mean faster response times and fewer delays when it matters most.",
    },
  ],
  faqs: [
    {
      q: "What is an ROL and when do I need one?",
      a: "A Road Occupancy Licence is required for any works near a traffic light, or on a state or regional road. Without it, works cannot proceed.",
    },
    {
      q: "Who issues ROL permits?",
      a: "The Transport Management Centre processes ROL applications, coordinating with other relevant stakeholders depending on the site.",
    },
    {
      q: "How long does an ROL take?",
      a: "Timeframes vary by road classification and the stakeholders involved — our established relationships with the TMC and transport authorities help keep response times as fast as possible.",
    },
    {
      q: "Do you handle stakeholder liaison, or do I need to coordinate it myself?",
      a: "We manage it entirely — liaising with bus operators, the TMC, transport authorities, rail operators and any other relevant stakeholder so you don't have to coordinate each party separately.",
    },
  ],
};

/** Page 23 — KEEP+pass. Complete permit-type list verbatim, grouped visually,
 *  nothing cut. D2 resolved: NSW & ACT — the ACT statute line is in scope. */
export const COUNCIL_PERMITS: ServicePageData = {
  pageNo: "23",
  slug: "council-permits",
  title: "Council permits & applications",
  metaTitle: "Council Permits & Applications",
  metaDescription:
    "From identifying which permit applies to your site through to lodging, liaison and approval — Sightline manages council permits for projects of every scale.",
  practice: PRACTICE,
  opener: "Many types of permits can leave you guessing which one is right for your site — we navigate that for you.",
  intro:
    "When it comes to public safety, staying within the bounds of compliance is non-negotiable. If your project requires a council permit for traffic control, Sightline assists with the entire process — from identifying which permit applies to your site, through to lodging, liaison, and approval.",
  sections: [
    {
      kind: "paragraph",
      heading: "When is a council permit required?",
      text: "Whenever works, machinery, or a closure will affect an existing council asset — the grass verge, footpath, road, or any other public infrastructure. Before commencing any works on a council or government asset, all relevant stakeholders within that jurisdiction must be notified to ensure full compliance with the law.",
    },
    {
      kind: "bullets",
      heading: "Types of permits we obtain",
      items: [
        { text: "Local approval (Section 68) and Section 138 Roads Act approval" },
        // D2 resolved: ACT is in scope — the ACT statute stays, jurisdiction labelled
        { text: "Application to use a public place for construction activities (Section 45, Public Unleased Land Act 2013 — ACT)" },
        { text: "Roads Act application, parking permit, works on council property" },
        { text: "Work zone, road occupancy and standing plant permits" },
        { text: "Road opening, occupation, lane and footpath closure permits" },
        { text: "Road closure permits — temporary, long-term or full" },
        { text: "Major and minor works permits" },
        { text: "Stand or operate plant, access or occupy public space, and public domain work permits" },
        { text: "Hoarding, scaffolding and temporary structure permits" },
        { text: "Approval for building work outside standard permitted hours" },
        { text: "Speed zone authorisation and mobile hoisting or crane permits" },
        { text: "Night works and out-of-hours approval" },
        { text: "Temporary access over community land permit" },
        { text: "Road management approval; open, occupy or underbore a roadway or footpath" },
        { text: "Road Occupancy Licence, Special Event Permit, and Construction Traffic Management Plan where relevant" },
      ],
    },
    {
      kind: "paragraph",
      heading: "How long does it take?",
      text: "Depending on the permit type and council, approval can take anywhere from 1 day to 3 months. Contact us for an accurate estimate specific to your project.",
    },
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Identify the permit or permits required, consulting with the relevant council where needed",
        "Prepare the documentation — TMP, public liability insurance, risk assessment, and other council-specific requirements",
        "Review fees and charges upfront, so there are no surprises partway through",
        "Submit the application accurately and completely to avoid unnecessary delays",
        "Liaise through approval — managing council communication and community notification where required",
        "Support implementation — ensuring the plan is implemented exactly as outlined, meeting council standards",
      ],
    },
    {
      kind: "bullets",
      heading: "Avoiding common delays",
      items: [
        { text: "Start early — begin well ahead of your intended start date to absorb council processing time" },
        { text: "Submit a complete application — incomplete documentation is one of the most common causes of delay" },
        { text: "Stay across changing regulations — we monitor this so you don't have to" },
        { text: "Engage the community early — addressing concerns upfront avoids delays later in the approval process" },
      ],
    },
    {
      kind: "paragraph",
      text: "Sightline manages council permit approvals for projects of every scale — from shop-front awnings to major infrastructure upgrades — across multiple council jurisdictions.",
    },
  ],
  faqs: [
    {
      q: "How do I know which permit my project needs?",
      a: "We assess your project against council and state requirements and identify exactly which permits apply, so you don't have to guess.",
    },
    {
      q: "What counts as a “council asset” requiring a permit?",
      a: "Any existing council or government asset — the road, footpath, nature strip or grass verge, or other public infrastructure — where works, machinery, or a closure will affect it.",
    },
    {
      q: "Do I need to notify anyone before starting works on a council asset?",
      a: "Yes — all relevant stakeholders within that council's jurisdiction must be notified before works commence.",
    },
    {
      q: "How long does council permit approval take?",
      a: "Anywhere from 1 day to 3 months, depending on the permit type and council.",
    },
    {
      q: "Will I know the fees and charges involved upfront?",
      a: "Yes — we review all applicable fees and charges as part of the approval process, so costs are clear before works commence.",
    },
    {
      q: "What documentation is typically required?",
      a: "Commonly a Traffic Management Plan, proof of public liability insurance, a risk assessment report, and any additional council-specific documents.",
    },
  ],
};

/** Page 24 — KEEP+pass. ⚠ Open item V1: every "STA" reference kept as source
 *  wording and tagged — TODO(verify:STA) throughout; do not rename without
 *  confirmation from Saadat's TMC contacts. */
export const STA_POLICE: ServicePageData = {
  pageNo: "24",
  slug: "sta-police-approvals",
  title: "STA, police & emergency services approvals",
  metaTitle: "STA, Police & Emergency Services Approvals",
  metaDescription:
    "Two more approvals that can quietly stall an otherwise-ready ROL — STA sign-off and Police Area Command permits, identified and managed on your behalf.",
  practice: PRACTICE,
  opener: "Two more approvals that can quietly stall an otherwise-ready ROL.",
  intro:
    // TODO(verify:STA) — State Transit Authority naming may be legacy; verify with TMC contacts before launch
    "STA approval is sometimes required alongside a TMC ROL application — typically for works that may affect state roads or public transport routes. Rather than you needing to work out whether your project triggers this requirement, Sightline's consultants review your traffic management plan, identify any elements that may need State Transit Authority (STA) approval, and liaise directly with the STA to secure it.",
  sections: [
    {
      kind: "paragraph",
      heading: "Police permits (Local Area Command)",
      text: "Some traffic control works also require a permit from the local Police Area Command. Skipping this step can mean significant fines and project disruption, since police oversight is essential for maintaining public safety and order during on-road works. We submit the application to the PAC on your behalf and work through any issues they raise.",
    },
  ],
  faqs: [
    {
      // TODO(verify:STA)
      q: "When is STA approval required?",
      a: "Typically when proposed works may affect state roads or public transport routes — assessed as part of the ROL process.",
    },
    {
      q: "Do I need to work out whether STA approval applies myself?",
      a: "No — we review your traffic management plan, identify any triggers, and manage the STA liaison directly.",
    },
    {
      q: "What is a PAC permit, and when is one needed?",
      a: "Some traffic control works require sign-off from the local Police Area Command, particularly where public safety and order need to be maintained. We submit and manage this application on your behalf.",
    },
    {
      q: "What happens if I don't obtain the required approvals?",
      a: "Missing a required approval — STA or PAC — can result in significant fines and project disruption, since these approvals exist to maintain safety and order around the works.",
    },
  ],
};

/** Page 25 — KEEP. The 7-step engagement process verbatim. */
export const COMMUNITY: ServicePageData = {
  pageNo: "25",
  slug: "community-engagement",
  title: "Community engagement strategies",
  metaTitle: "Community Engagement & CLO",
  metaDescription:
    "Engagement strategies that keep residents, businesses and stakeholders informed — with a named Community Liaison Officer as the single point of contact for the life of the works.",
  practice: PRACTICE,
  opener: "Poorly managed community engagement is one of the most common causes of project delay.",
  intro:
    "Effective community engagement is a critical, and often mandatory, part of delivering works on public infrastructure. Sightline designs and delivers engagement strategies that keep residents, businesses and stakeholders informed — on time, and fully compliant with council and transport authority requirements.",
  sections: [
    {
      kind: "bullets",
      heading: "Why it matters",
      items: [
        { text: "Meets council and transport authority notification requirements as a condition of approval" },
        { text: "Reduces complaints and objections that can stall or reverse an otherwise approved permit" },
        { text: "Builds goodwill with residents and businesses affected by works, reducing friction on site" },
        { text: "Creates a documented trail of consultation that protects the project if concerns are raised later" },
      ],
    },
    {
      kind: "paragraph",
      heading: "A dedicated Community Liaison Officer",
      text: "Every project is assigned a Community Liaison Officer — a single, named point of contact for the life of the works. Rather than queries getting lost between site crews, project managers and council, the CLO owns community communication end-to-end: fielding questions, logging concerns, coordinating responses, and keeping the community informed if timelines or works change.",
    },
    {
      kind: "bullets",
      heading: "What our engagement strategies cover",
      items: [
        {
          lead: "Stakeholder identification",
          text: "mapping every affected party, including residents, businesses, schools, transport operators and emergency services",
        },
        {
          lead: "Notification content",
          text: "letterbox drops, on-site signage, and digital notices in plain language, matching council and TfNSW templates and timeframes",
        },
        {
          lead: "Timing and lead times",
          text: "engagement scheduled to meet each authority's minimum notice period so approvals aren't held up",
        },
        {
          lead: "A named CLO contact",
          text: "direct contact details on all notification materials, giving the community a real person to reach",
        },
        {
          lead: "Feedback channels",
          text: "a clear way to raise concerns during the works, managed by the CLO and logged for follow-up",
        },
        {
          lead: "Compliance documentation",
          text: "a full record of who was notified, when, and how, ready for council if requested",
        },
      ],
    },
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Confirm the requirement — identifying the specific notification and consultation conditions attached to your permit, DA or ROL",
        "Map the stakeholders — every resident, business and organisation within the affected area",
        "Assign a Community Liaison Officer — a named CLO allocated from day one",
        "Prepare compliant materials — notifications drafted to the authority's format and content requirements",
        "Distribute on schedule — within the mandated lead time, with distribution records kept",
        "Manage feedback during works — logged and addressed as it arises",
        "Provide compliance evidence — a full consultation record available for council if required",
      ],
    },
  ],
  faqs: [
    {
      q: "Is community engagement always required for traffic control works?",
      a: "It depends on the permit and authority — many council and TfNSW approvals include a specific notification condition, which we confirm as part of the permit process.",
    },
    {
      q: "How much notice does the community need?",
      a: "It varies by council and works type — from a few days to considerably more for larger or long-duration works. We schedule to meet whichever timeframe applies.",
    },
    {
      q: "Who does the community contact with a concern?",
      a: "Every project has a dedicated CLO, with contact details on all notification materials — the community's single point of contact for the life of the project.",
    },
    {
      q: "Can this run alongside our TMP, TGS and permit applications?",
      a: "Yes — community engagement, including CLO allocation, is typically scoped and timed as part of the same permit and TMP process, running in parallel rather than adding a separate delay.",
    },
  ],
};
