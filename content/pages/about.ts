/**
 * Page 28 — About. Went LIVE early at Saadat's direction ("they need to know
 * who we are"), built ONLY from approved or client-published copy:
 * - Positioning statement + supporting proposition: approved brand brief wording
 * - Small-practice / signs-the-report lines: live-site /team page (published)
 * - Independence disclosure: live-site FAQ (published)
 * - Standards list + engagement steps: factual, per gap brief D's structure
 * Credentials, registrations and stats remain absent pending D6 — nothing invented.
 */

export const ABOUT = {
  eyebrow: "About · The practice",
  h1: "Independent traffic and transport engineering.",
  sub: "Sightline is an independent traffic and transport engineering practice delivering clear, considered and buildable solutions for government, development and infrastructure clients.",
  story: [
    "Our team combines professional traffic engineering judgment with practical knowledge of approvals, construction staging, traffic management and real-world implementation. That mix is deliberate: the person who scopes your job understands both what the standard requires and what a crew can actually build at the kerb.",
    "The practice is deliberately small — two directors and a tight team, so the engineer who briefs you is the engineer who signs the report. No account managers, no handovers.",
  ],
  independence:
    "Sightline is engineering only. When implementation is needed we can refer it, including to T&S Traffic Control, the company our founders also run. We disclose that relationship every time, and the choice of provider is always yours.",
  standardsHeading: "Standards and frameworks we work to",
  standards: [
    "Transport for NSW specifications and technical directions",
    "TfNSW TS 05492 Traffic Control at Work Sites",
    "AS 1742 series — manual of uniform traffic control devices",
    "AS 2890 series — parking facilities",
    "Current Austroads guides, including the Guide to Temporary Traffic Management",
  ],
  checking:
    "Every document goes through an internal design check and verification before it is issued, with revision history tracked sheet by sheet.",
  engagementHeading: "How an engagement runs",
  engagement: [
    "Send the drawings — site address, plans if they exist, and a description of the works",
    "A written scope and fixed fee come back to you",
    "Design and delivery, checked before issue",
    "Issue and revision control through to sign-off",
  ],
  peopleHeading: "The people",
  peopleLine: "Every Sightline report is prepared and signed by a named engineer. Meet the register of people.",
} as const;
