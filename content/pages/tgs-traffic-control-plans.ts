import type { ServicePageData } from "./types";

/**
 * Page 01 — TGS/TCP. Disposition: KEEP+pass, voice fix 1 applied:
 * the Rev 3 intro's "minimise disruption while maximising safety" and
 * "backed by hands-on experience" (both avoid-list) are replaced with the
 * concrete rewrite (what is delivered / to what standards / by whom);
 * "No second-guessing, just…" dropped as puffery. Opening line, the 3-step
 * process, the result line, all four FAQs and the closing internal-link
 * line ship verbatim.
 */
export const TGS_TCP: ServicePageData = {
  pageNo: "01",
  slug: "tgs-traffic-control-plans",
  title: "Traffic guidance schemes (TGS) & traffic control plans (TCP)",
  metaTitle: "Traffic Guidance Schemes (TGS) & Traffic Control Plans (TCP)",
  metaDescription:
    "Certified Traffic Guidance Schemes and Traffic Control Plans designed by traffic engineers to the TCAWS Manual and AS 1742.3 for civil and construction projects across NSW.",
  practice: { label: "Work zone engineering", href: "/work-zone-engineering" },
  opener:
    "The certified diagram that decides whether your work site is safe — and whether it's approved.",
  intro:
    // Voice fix 1 — concrete rewrite (05-migration-map)
    "Sightline prepares certified Traffic Guidance Schemes and Traffic Control Plans for civil and construction projects across NSW and the ACT — designed by traffic engineers to the site's actual geometry, sightlines and staging, and documented to the Traffic Control at Worksites (TCAWS) Manual and AS 1742.3.",
  sections: [
    {
      kind: "numbered",
      heading: "Our process",
      steps: [
        "Consultation — an in-depth discussion to understand your project's scope, site conditions, and any specific safety concerns",
        "Creation of clear, detailed plans — a certified scheme detailing every required sign, device, marking, cone and speed limit variation",
        "Implementation support — staying engaged through execution, addressing site learnings as they arise and keeping you up to speed throughout",
      ],
    },
    {
      kind: "paragraph",
      text: "The result: a work area where every road user — workers and pedestrians included — is directed and managed safely through, past, or around the site.",
    },
  ],
  faqs: [
    {
      q: "What's the difference between a TGS and a TCP?",
      a: "Nothing functionally — Traffic Guidance Scheme (TGS) and Traffic Control Plan (TCP) are used interchangeably across NSW to describe the same certified diagram of signage, devices, markings and control measures for a work site.",
    },
    {
      q: "Who can prepare a TGS/TCP?",
      a: "A suitably qualified and accredited traffic control person or engineer, in accordance with the TCAWS Manual and relevant Australian Standards.",
    },
    {
      q: "How long does a TGS/TCP take to prepare?",
      a: "Depends on site complexity — a straightforward single-lane closure turns around quickly; multi-stage or high-traffic sites need more detailed consultation and design time.",
    },
    {
      q: "Do I need a new TGS/TCP if site conditions change?",
      a: "Yes — any material change to the work site, traffic conditions, or staging generally requires the scheme to be reviewed and, if needed, formally updated.",
    },
  ],
  closingLine:
    "Your TGS is prepared by the same engineers who design the barrier cross sections and staging sets behind it.",
};
