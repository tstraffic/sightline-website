/**
 * Team content — carried verbatim from the LIVE site's /team page
 * (sightlinetraffic.com.au, sightline-traffic repo, Aug 2026), at Saadat's
 * direction ("I like the Team page our live site has"). Because this content
 * is already published by the client, it is treated as approved for reuse —
 * provenance: live-site /team. This substantially closes open item D6
 * (names, qualifications, PI insurance line). Remaining D6 items: NER/CPEng
 * and prequalification strip claims, T&S-mention stance.
 *
 * Note (D3): Savanah's "RSA registration in progress" confirms there is NOT
 * yet an in-house accredited road safety auditor — page 08's auditor-
 * qualification claims stay gated, but this line may be stated as-is.
 */

export type TeamMember = {
  role: string;
  name: string;
  creds: string[];
  bio: string;
  signs: { label: string; value: string }[];
  /** Filename under public/team/ — photo renders once the file exists. */
  photo: string;
};

export const TEAM_INTRO = {
  eyebrow: "Drawn & checked by · the register of people",
  heading: "If they sign your document, they're on this page.",
  sub: "Sightline is deliberately small: two directors and a tight team, so the person who scopes your job is the person on it. No account managers, no handovers.",
} as const;

export const PEOPLE: TeamMember[] = [
  {
    role: "Principal · Transport Engineering — Director",
    name: "Saadat Ahmed",
    creds: ["BE (Civil) — Traffic & Transport", "WHS credentials", "SIDRA · AutoTURN · Vehicle Tracking"],
    bio: "Saadat works the full delivery cycle — feasibility and concept staging through to construction-phase design and compliance close-out — across councils, developers and tier-one and tier-two contractors in Sydney metro and the Hunter. Traffic impact assessments, CTMPs, ROL and permit applications, CC and OC design statements: if it carries a Sightline title block, it has been through his hands. Designs are prepared to TfNSW AGTTM, TCAWS and G10, with the swept paths, barrier design and sight distance work done in CAD, not asserted.",
    signs: [
      { label: "Prepares", value: "TIAs, CTMPs, ROL & permit applications, CC/OC statements" },
      { label: "Tools", value: "SIDRA · AutoTURN · AutoCAD Vehicle Tracking" },
      { label: "Standards", value: "TfNSW AGTTM · TCAWS · G10" },
    ],
    photo: "saadat-ahmed.jpg",
  },
  {
    role: "Principal · Transport Planning — Director",
    name: "Taj Rahman",
    creds: ["B. Construction Management", "Delivery-side · staged works", "NSW-wide"],
    bio: "Taj brings the delivery-side perspective: years of on-site management of staged traffic and civil works across NSW — contractor coordination, program-critical access, and the interface between design intent and what the site actually allows. That background is why Sightline's CTMPs and staging designs are documented the way works are really sequenced and resourced, which is what prevents the design amendments and access conflicts that surface once construction starts.",
    signs: [
      { label: "Leads", value: "Staging sequences, site access & haulage strategy" },
      { label: "Background", value: "On-site management of staged works, NSW" },
      { label: "Checks", value: "Design intent against real site conditions" },
    ],
    photo: "taj-rahman.jpg",
  },
  {
    role: "Transport Planner",
    name: "Rumman Khan",
    creds: ["8+ yrs experience", "SIDRA · AutoTURN · Vehicle Tracking"],
    bio: "Rumman delivers traffic and transport assessments across residential, commercial and infrastructure projects — TIAs, CTMPs, TGS, parking and access assessments, and the supporting analysis behind development applications. He runs the intersection analysis and swept path work, contributes to site investigation, data collection and staging design, and coordinates with councils and authorities through the approval cycle.",
    signs: [
      { label: "Prepares", value: "TIAs, CTMPs, TGS, parking & access assessments" },
      { label: "Tools", value: "SIDRA · AutoTURN · AutoCAD Vehicle Tracking" },
      { label: "Standards", value: "TfNSW AGTTM · TCAWS · G10" },
    ],
    photo: "rumman-khan.jpg",
  },
  {
    role: "WHS & Traffic Planner",
    name: "Savanah Armstrong",
    creds: ["5+ yrs experience", "RSA registration in progress", "WHS Act 2011 · Reg 2017"],
    bio: "Savanah combines work health and safety expertise with traffic and transport planning — CTMPs, TGS and pedestrian management strategies focused on the safety interface between road users, pedestrians and site activity. She contributes to road safety audits at design and pre-opening stages to Austroads and TfNSW procedures, and is in the process of becoming a registered road safety auditor. Her documentation reflects working knowledge of the WHS Act 2011 (NSW), WHS Regulation 2017 and SafeWork NSW codes of practice.",
    signs: [
      { label: "Prepares", value: "CTMPs, TGS, pedestrian management strategies" },
      { label: "Audits", value: "Design & pre-opening stages, to Austroads / TfNSW" },
      { label: "WHS", value: "WHS Act 2011 · WHS Reg 2017 · SafeWork codes" },
    ],
    photo: "savanah-armstrong.jpg",
  },
  {
    role: "Project Administrator",
    name: "Suhail Ahmed",
    creds: ["Project coordination", "Studying software engineering & business"],
    bio: "Suhail keeps projects moving from initial planning to completion — project records and registers, deliverable and approval-timeline tracking, council and authority submissions, and client communication. He applies his software engineering and business studies to how Sightline's project systems run: document control, tracking and workflow. When your submission is lodged and the register says REV C, that is Suhail's system telling the truth.",
    signs: [
      { label: "Runs", value: "Document control, registers, deliverable tracking" },
      { label: "Coordinates", value: "Council & authority submissions" },
      { label: "Keeps", value: "The approval timeline honest" },
    ],
    photo: "suhail-ahmed.jpg",
  },
];

export const QUALIFICATION_REGISTER = [
  { ref: "Q—01", who: "Saadat Ahmed", qual: "BE (Civil), traffic & transport specialisation · WHS credentials", covers: "Assessments, plans, permit applications, CC/OC design statements" },
  { ref: "Q—02", who: "Taj Rahman", qual: "B. Construction Management", covers: "Construction-phase traffic management and staging direction" },
  { ref: "Q—03", who: "Rumman Khan", qual: "Transport planning, 8+ years", covers: "TIAs, TGS, parking and access assessment, intersection analysis" },
  { ref: "Q—04", who: "Savanah Armstrong", qual: "RSA registration in progress · WHS Act 2011 / Reg 2017", covers: "Road safety audit support, WHS-integrated traffic planning" },
  { ref: "Q—05", who: "Sightline Traffic Engineers Pty Ltd", qual: "Professional indemnity insurance", covers: "Certificate of currency available on request" },
] as const;

export const HIRING = {
  heading: "Take pride in drawings that work on the real road? We should talk.",
  body: "Sightline stays deliberately small, which means every hire matters. If you're a traffic engineer or a TGS designer who reads the road before the manual, send a short note and your CV — and tell us about one drawing you're proud of.",
  details: [
    ["Roles", "Traffic engineer · TGS / staging designer"],
    ["Where", "Villawood NSW, with real site time"],
    ["You'll get", "Your name and face on this page, your signature on your work"],
    ["Send", "Short note + CV + one drawing you're proud of"],
  ],
} as const;
