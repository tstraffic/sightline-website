# PROMPTS.md — how to run this build

Open Claude Code in this folder and paste the prompts below **one phase at a time**. Review the result (dev server + the phase summary) before pasting the next. Each phase ends in a commit, so anything can be rolled back.

> Tip: for Phases 0 and 1, let Claude Code plan before it builds — start the message with "Plan first, show me the plan, then execute."

---

## Phase 0 — Read, confirm, scaffold

```
Read CLAUDE.md, then every file in /content in numbered order, and view assets/capability-cover.png.

Plan first, show me the plan, then execute:
1. Output the confirmed sitemap as a table: all ~39 public URLs, page title, template used, status (live / draft-hidden), copy source. Flag any contradiction you find between the content documents before proceeding.
2. Output the reusable component inventory mapped to the list in 00-INSTRUCTIONS.
3. Scaffold the Next.js + TypeScript + Tailwind project per CLAUDE.md: design tokens for the six brand colours, Hanken Grotesk + IBM Plex Mono via next/font, base layout, header with the seven-item nav (Engineering Services dropdown containing the three practices), footer, and the /content/pages data structure with one example page wired end to end.
4. Create content/verified.ts with every unverified value from 04-brand.md and 05-migration-map.md set to verified:false, and create DECISIONS.md.
Commit when the dev server runs clean.
```

## Phase 1 — Design concepts for approval

```
Build the approval set from 00-INSTRUCTIONS ("First provide designs for approval"): desktop and mobile homepage, the Work Zone Engineering practice landing page, one full service page (Page 01 — TGS/TCP, including the FAQ treatment and FAQPage JSON-LD), and one sector page (26a — Civil Contractors, with route cards). Include the technical-table, numbered-methodology and statistics-band treatments somewhere visible in this set, plus the contact form layout and footer.

Homepage per 05-migration-map: hero with "Designed to standard.", CTAs "Request a fee proposal" / "View our services", credential strip (confirmed items only), Why Sightline, FOUR equal pillar cards, sector tiles, closing CTA. Aesthetic: the capability cover is the reference — predominantly Drawing Paper, controlled Aubergine sections, Oxide as annotation only, technical-editorial devices used sparingly with real information. No gradients, glass, or rounded SaaS cards.

Stop after this phase — I'm approving the design before full build.
```

## Phase 2 — Build every KEEP page

```
Design approved. Build all remaining KEEP / KEEP+pass pages from 01-website-copy-rev3.md per the dispositions in 05-migration-map.md: pages 02–07, 09–11, 14–20, 22–25, the remaining landing pages, sector pages 26b–26e, and the Contact page with the full form field list from 00-INSTRUCTIONS (front-end validation; wire submission to a stubbed handler and note what's needed for email delivery).

Apply the five voice fixes exactly as specified, strip everything on the strip list, preserve everything on the keep list verbatim, and add the TODO(verify:...) comments for every open item. FAQPage JSON-LD on every page with FAQs. Cross-check each page against the source copy before committing — nothing silently shortened.
```

## Phase 3 — Drafts, Projects, SEO, QA

```
1. Build draft pages 08, 12, 21 and 28 from the gap briefs in 05-migration-map.md, and page 13 as structure-only — all noindex, out of nav and sitemap, watermarked "DRAFT — not for publication". Hide the 26c route card to page 08.
2. Build the Projects index and case-study template with the fields from 00-INSTRUCTIONS; no invented content — use one clearly-labelled sample entry gated from production.
3. Generate seo-migration.csv per CLAUDE.md, sitemap.xml excluding drafts, per-page titles/meta descriptions drawn from each page's opening line.
4. QA pass: WCAG AA contrast on every colour pairing, keyboard nav, mobile at 375px, Lighthouse on the homepage and Page 01, and a link check (every internal route resolves; every "Route to" card points at the right URL).
5. Output for Saadat: the list of every TODO(verify) with file locations, everything in verified.ts awaiting confirmation, and what's needed to deploy to Vercel.
```

---

## What Saadat still owes the build (Claude Code will keep asking)

- RSA accreditation status (in-house vs subcontracted) → unlocks page 08 claims + 26c route card
- About-page credentials: names, quals, registrations, PI insurance detail, T&S-mention stance → unlocks page 28
- Verification of the four capability stats (14 yrs / 300+ / 28 LGAs / 1-day fee) and the NER-CPEng + prequalification strip items
- Geographic scope call (NSW-only vs wider) → settles the ACT permit line and the multi-state modelling references
- "STA" terminology check with TMC contacts → settles page 24's naming
- Page 13 scope (which road-design drawings Sightline genuinely delivers)
- Current live URLs of the old site → fills the 301 column of seo-migration.csv
- Swept path software name, ROL trigger wording, TMP qualification name (quick confirms)
