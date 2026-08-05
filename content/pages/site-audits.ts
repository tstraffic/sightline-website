import type { ServicePageData } from "./types";
import { PRACTICES } from "./practices";

/**
 * Page 07 — Site Audits. Disposition: KEEP (05-migration-map) — copy verbatim
 * from 01-website-copy-rev3.md. Phase 0's end-to-end wiring example.
 */
export const SITE_AUDITS: ServicePageData = {
  pageNo: "07",
  slug: "site-audits",
  title: "Site audits",
  metaTitle: "Site Audits",
  metaDescription:
    "Independent site audits of temporary traffic management set-ups — checking physical implementation against the approved TGS or TMP, with reference to TfNSW TS 05492 and the relevant Australian Standards.",
  practice: PRACTICES.construction,
  opener: "A traffic management plan is only as effective as its on-site implementation.",
  intro:
    "Sightline conducts site audits of temporary traffic management set-ups — checking physical implementation against the approved TGS or TMP — across Sightline-delivered projects, live jobs in progress, and as an independent external auditor for other companies' plans.",
  sections: [
    {
      kind: "bullets",
      heading: "Scope of audit",
      items: [
        { text: "Compliance against the approved plan — signage, devices, barriers, cones, markings" },
        { text: "Signage placement and condition against AS 1742.2 and AS 1742.3" },
        { text: "Barrier and deflection zone compliance" },
        { text: "Pedestrian and cyclist provisions" },
        { text: "Traffic controller positioning and practice" },
        { text: "Site access and egress" },
        { text: "General housekeeping and hazards affecting the traffic arrangement" },
      ],
    },
    {
      kind: "paragraph",
      text: "Plans are audited regardless of who designed or installed them, providing an independent compliance check for principal contractors, developers, and councils. Because site conditions change during works, Sightline also audits active, in-progress jobs — including spot audits, re-audits following staging transitions, and periodic audits across longer-duration projects.",
    },
    {
      kind: "paragraph",
      text: "Audits are conducted to the full scope of Transport for NSW requirements, assessed with reference to TfNSW TS 05492 Traffic Control at Work Sites, the relevant Australian Standards, and the specific approved plan for the site.",
    },
    {
      kind: "numbered",
      heading: "Process",
      steps: [
        "Review the approved plan governing the site, regardless of who prepared it",
        "Conduct an on-site inspection comparing the as-built arrangement against the approved plan",
        "Document findings with photographic evidence and location references",
        "Compile an audit report detailing compliance, non-compliances, severity, and corrective action",
        "Support re-audit following corrective action or a staging transition, to confirm close-out",
      ],
    },
  ],
  faqs: [
    {
      q: "Can a plan designed and installed by another company be audited?",
      a: "Yes — reviewed regardless of who prepared it, with findings reported objectively as an independent third party.",
    },
    {
      q: "Can a job already underway be audited?",
      a: "Yes — live job audits are core to this service, as compliance can drift during works due to staging changes, damaged devices, or altered conditions.",
    },
    {
      q: "What is the difference between a site audit and a Road Safety Audit (RSA)?",
      a: "A site audit checks the set-up against the approved TGS or TMP. An RSA is a broader, independent safety review against general road safety principles, requiring an Austroads-accredited auditor.",
    },
    {
      q: "What happens if non-compliances are found on a live job?",
      a: "Urgent safety issues are flagged for immediate action. Lower-severity items are documented with a recommended correction timeframe.",
    },
  ],
};
