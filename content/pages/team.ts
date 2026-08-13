/**
 * Team page — detailed people profiles supporting the practice story on /about.
 * Qualifications and experience below are retained from the approved live-site
 * content, with claims expressed in the current Sightline voice.
 */

export type TeamMember = {
  role: string;
  name: string;
  creds: string[];
  bio: string;
  signs: { label: string; value: string }[];
};

export const TEAM_INTRO = {
  eyebrow: "About · The team",
  heading: "A small team with clear responsibility.",
  sub: "Sightline brings together traffic engineering, transport planning, construction delivery and project coordination. Clients work directly with people who understand both approval requirements and real site conditions.",
  tagline: "Technical work. Practical judgment. Named responsibility.",
} as const;

export const TEAM_APPROACH = [
  {
    ref: "TEAM 01",
    title: "Direct access",
    text: "Projects are scoped and coordinated by the people responsible for delivering the work, without unnecessary account-management layers.",
  },
  {
    ref: "TEAM 02",
    title: "Complementary experience",
    text: "Engineering, planning, construction and implementation experience inform how project risks and practical constraints are assessed.",
  },
  {
    ref: "TEAM 03",
    title: "Controlled delivery",
    text: "Responsibilities, reviews, revisions and issued documents are kept clear throughout the engagement.",
  },
] as const;

export const PEOPLE: TeamMember[] = [
  {
    role: "Commercial Director",
    name: "Saadat Ahmed",
    creds: ["BE (Civil) — Traffic & Transport", "WHS credentials", "SIDRA · AutoTURN · Vehicle Tracking"],
    bio: "Saadat works across project strategy, client partnerships and traffic engineering delivery. His background in structural drafting, civil project management and traffic management supports a whole-of-project view of design coordination, approvals and construction requirements.",
    signs: [
      { label: "Focus", value: "Project strategy, client partnerships and growth" },
      { label: "Experience", value: "Civil project delivery, drafting and traffic management" },
      { label: "Technical tools", value: "SIDRA · AutoTURN · AutoCAD Vehicle Tracking" },
    ],
  },
  {
    role: "Project Director · Traffic Delivery",
    name: "Taj Rahman",
    creds: ["B. Construction Management", "Delivery-side experience", "Staged works"],
    bio: "Taj brings practical experience from traffic drafting, construction and the implementation of traffic management in live environments. He focuses on staging, site access and whether proposed arrangements can be delivered under real project constraints.",
    signs: [
      { label: "Focus", value: "Implementation, constructability and staging" },
      { label: "Experience", value: "Construction delivery and live traffic environments" },
      { label: "Project input", value: "Site access, sequencing and delivery coordination" },
    ],
  },
  {
    role: "Traffic & Transport Planner",
    name: "Rumman Khan",
    creds: ["8+ years’ experience", "SIDRA · AutoTURN · Vehicle Tracking"],
    bio: "Rumman delivers traffic and transport assessments across development, construction and infrastructure projects. His work includes traffic impact assessment, parking and access, intersection analysis, swept paths and construction traffic documentation.",
    signs: [
      { label: "Focus", value: "Assessment, design and analysis" },
      { label: "Delivers", value: "TIAs, CTMPs, TGS, parking and access assessments" },
      { label: "Technical tools", value: "SIDRA · AutoTURN · AutoCAD Vehicle Tracking" },
    ],
  },
];

export const QUALIFICATION_REGISTER = [
  { ref: "Q—01", who: "Saadat Ahmed", qual: "BE (Civil), traffic and transport specialisation · WHS credentials", covers: "Project strategy, assessments, design coordination and technical delivery" },
  { ref: "Q—02", who: "Taj Rahman", qual: "B. Construction Management", covers: "Construction-phase traffic delivery, staging and constructability input" },
  { ref: "Q—03", who: "Rumman Khan", qual: "Traffic and transport planning · 8+ years’ experience", covers: "Assessment, modelling, parking, access and construction traffic documentation" },
  { ref: "Q—04", who: "Sightline Traffic Engineers Pty Ltd", qual: "Professional indemnity insurance", covers: "Certificate of currency available on request" },
] as const;

export const HIRING = {
  heading: "Care about technical work that holds up beyond the page?",
  body: "We are interested in people who combine sound technical judgment with curiosity about how projects are approved, coordinated and delivered. If that describes your approach, send us a short introduction and your CV.",
  details: [
    ["Disciplines", "Traffic engineering · transport planning · staging design"],
    ["Location", "Sydney, with project and site work across NSW and the ACT"],
    ["What matters", "Clear thinking · careful documentation · practical judgment"],
    ["Send", "Short introduction + CV"],
  ],
} as const;
