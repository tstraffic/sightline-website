import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * Page 01 — TGS/TCP. Voice fix 1 (avoid-list phrases removed) plus Copy Pass 1:
 * "certified diagram that decides whether…" and "certified Traffic Guidance
 * Schemes" replaced with site-specific / requirement-dependent wording; the
 * TGS-vs-TCP and preparer FAQs rewritten; TCAWS Manual → TfNSW TS 05492.
 */
export const TGS_TCP: ServicePageData = {
  pageNo: "01",
  slug: "tgs-traffic-control-plans",
  title: "Traffic guidance schemes (TGS) & traffic control plans (TCP)",
  metaTitle: "Traffic Guidance Schemes (TGS) & Traffic Control Plans (TCP)",
  metaDescription:
    "Site-specific Traffic Guidance Schemes for civil, construction and infrastructure projects across NSW and the ACT, prepared with reference to TfNSW TS 05492 and AS 1742.3.",
  practice: PRACTICES.construction,
  opener:
    "The site-specific drawing that communicates how traffic, pedestrians and workers are managed around the work area.",
  intro:
    "Sightline prepares site-specific Traffic Guidance Schemes for civil, construction and infrastructure projects across NSW and the ACT. Each scheme responds to the site geometry, road environment, work staging, traffic conditions and requirements of the relevant road authority.",
  sections: [
    {
      kind: "paragraph",
      text: "Prepared with reference to TfNSW TS 05492 Traffic Control at Work Sites, AS 1742.3, the current Austroads Guide to Temporary Traffic Management and applicable project or council requirements.",
    },
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
      a: "The terms are often used interchangeably, particularly when referring to the drawing showing signs, devices and traffic-control arrangements. However, terminology and submission requirements can vary between road authorities, councils, contracts and older documentation.",
    },
    {
      q: "Who can prepare a TGS/TCP?",
      a: "A TGS must be prepared and reviewed by personnel holding the competencies and authorisations required for the relevant jurisdiction, road authority and project.",
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
