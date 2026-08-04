/**
 * Work Zone Engineering practice landing — intro verbatim from Rev 3 §B.
 * Service list = pages 01–07 (card one-liners are each page's own Rev 3
 * opening line — real copy, nothing invented). Page 08 (Road Safety Audits)
 * is excluded while it is a hidden draft.
 */

export const WORK_ZONE = {
  eyebrow: "Engineering services · Practice 01",
  h1: "A work zone is an engineering problem before it is a paperwork problem.",
  intro: [
    "Lane widths, barrier deflection, sightlines, swept paths, staged handovers, network impact — get any of them wrong and the consequence is a rejection, a delay, or someone hurt. Sightline designs the full documentation set for works on live road networks: Traffic Guidance Schemes, staging sets, Traffic Management Plans, barrier design statements, and independent site audits.",
    "Prepared to TCAWS, AS 1742.3 and the Austroads Guide to Temporary Traffic Management — and prepared by engineers, which is the part that shows up when the job stops matching the plan.",
  ],
  services: [
    {
      ref: "01",
      title: "Traffic guidance schemes (TGS / TCP)",
      line: "The certified diagram that decides whether your work site is safe — and whether it's approved.",
      href: "/tgs-traffic-control-plans",
    },
    {
      ref: "02",
      title: "Traffic staging plans & CAD staging sets",
      line: "One TGS is straightforward. A dozen, changing week to week, is a different problem entirely.",
      href: "/traffic-staging-plans",
    },
    {
      ref: "03",
      title: "Traffic management plans (TMP / CTMP)",
      line: "Working without one carries real risk — fines, stop-work orders, and liability if something goes wrong.",
      href: "/traffic-management-plans",
    },
    {
      ref: "04",
      title: "Complex & multi-stage TMPs",
      line: "Getting the handover between stages wrong is one of the most common sources of delay and safety risk on large projects.",
      href: "/complex-multi-stage-tmp",
    },
    {
      ref: "05",
      title: "Temporary barrier design & cross sections",
      line: "An incorrect deflection zone is a common cause of rejection — or barrier failure in the field.",
      href: "/temporary-barrier-design",
    },
    {
      ref: "06",
      title: "Swept path analysis (vehicle tracking)",
      line: "A design that looks fine on paper can still be too narrow for the vehicle it's built for.",
      href: "/swept-path-analysis",
    },
    {
      ref: "07",
      title: "Site audits",
      line: "A traffic management plan is only as effective as its on-site implementation.",
      href: "/site-audits",
    },
    // Page 08 — Road Safety Audits: hidden draft (D3); card added when it goes live.
  ],
} as const;
