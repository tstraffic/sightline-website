/**
 * Page 29 — Contact. KEEP+pass: heading + supporting line from Rev 3;
 * expanded form fields per 00-INSTRUCTIONS. The fee-turnaround line is
 * omitted until the 1-day stat verifies.
 */

export const CONTACT = {
  eyebrow: "Contact · Request a fee proposal",
  h1: "Send us the drawings. We'll tell you what you need.",
  sub: "Site address, architectural or civil plans, and a description of the works is usually enough for us to scope it.",
  whatWeNeed: {
    heading: "What we need from you",
    columns: ["Item", "Why it matters"] as [string, string],
    rows: [
      ["Site address", "Locates the road network, the council area, and the constraints around your site"],
      ["Architectural or civil plans", "PDF or DWG — the basis for scoping the drawings and reports your project needs"],
      ["Description of the works", "What is being built or occupied, and roughly when — enough to identify the approvals pathway"],
    ] as [string, string][],
  },
  services: [
    "Traffic guidance scheme (TGS / TCP)",
    "Traffic staging plans",
    "Traffic management plan (TMP / CTMP)",
    "Temporary barrier design",
    "Swept path analysis",
    "Site audit",
    "Traffic modelling / SIDRA",
    "Traffic impact assessment or statement",
    "Parking / AS 2890 compliance",
    "Road occupancy licence (ROL) or permits",
    "Unsure — tell us the problem",
  ],
  files: {
    label: "Attach plans",
    note: "PDF, DWG, DXF, ZIP or images · up to 10 files · 25 MB each",
    accept: ".pdf,.dwg,.dxf,.zip,.png,.jpg,.jpeg",
  },
  privacy:
    "Your details and files are used only to scope and respond to this enquiry. We don't add you to a mailing list or share your information.",
  submitLabel: "Request a fee proposal",
} as const;
