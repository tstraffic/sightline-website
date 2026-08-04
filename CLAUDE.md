# CLAUDE.md — Sightline Traffic Engineers website

You are building the public marketing website for Sightline Traffic Engineers (sightlinetraffic.com.au), an independent traffic and transport engineering practice in NSW, Australia. You act as **both** the developer and the copywriter described in `content/00-INSTRUCTIONS.md`.

## Source of truth and precedence

All source material is in `/content` (already converted from PDF/xlsx — do not ask for the PDFs):

1. `content/00-INSTRUCTIONS.md` — **governing document.** Confirmed decisions. Overrides everything below wherever they conflict.
2. `content/05-migration-map.md` — the completed page-by-page migration map: dispositions, voice fixes, strip list, keep list, gap briefs, **open items**.
3. `content/03-build-list.md` — page/URL/production list (original xlsx alongside).
4. `content/02-build-brief.md` — site structure and homepage sections (banner lists its superseded items).
5. `content/01-website-copy-rev3.md` — **every page's actual wording.** This is the copy source. Use it as written except where 05 marks a voice fix.
6. `content/04-brand.md` + `assets/capability-cover.png` — visual identity, tokens, voice rules, locked reference image.

Read all six before writing any code. When documents conflict, resolve by the order above; if a conflict isn't covered, stop and ask Saadat rather than assuming.

## Stack and conventions

- **Next.js (App Router) + TypeScript + Tailwind CSS.** Static generation; target deployment is Vercel. (If Saadat tells you a different stack in chat, that wins.)
- **No copy hard-coded in components.** All page copy lives in `/content/pages/` as typed data or MDX — this is the "editable CMS fields" requirement from 00-INSTRUCTIONS. Components render content; they don't contain it.
- Design tokens for the six brand colours and two typefaces (Google Fonts: Hanken Grotesk 400/500, IBM Plex Mono) defined once in the Tailwind config / CSS variables — never raw hex in components.
- Reusable components per the list in 00-INSTRUCTIONS (hero, practice cards, service cards, sector route cards, FAQ, technical table, requirement table, numbered methodology, standards references, "when you need this", "what we need from you", related-service links, status/revision labels, case-study metrics, closing CTA).
- Accessibility: WCAG AA contrast (check Oxide-on-Drawing-Paper for text uses — reserve Oxide text for large/short elements if contrast fails; body text is Carbon), semantic headings, keyboard-navigable menus, focus states.
- Keep a `DECISIONS.md` log of every judgment call you make, one line each.

## Copy rules (non-negotiable)

- Rev 3 copy is used **as written** for every page marked KEEP; apply only the surgical voice fixes listed in `05-migration-map.md`. Do not "improve" flagship lines or evidence blocks — the keep list is off-limits.
- Strip everything on the strip list (source annotations, "COPY REQUIRED" markers, editorial notes). "Route to:" lists render as link cards.
- Preserve intact: every FAQ set, numbered methodology, technical/requirements/metrics table, the complete council permit list, standards references, TIS-vs-TIA and TMP/TGS/VMP explanations, cross-links to Swept Path Analysis, related-service routing.
- CTAs, sitewide, exactly: primary **"Request a fee proposal"**, secondary **"View our services"**, contact line **"Send us the drawings. We'll tell you what you need."** No competing phrases.
- Tone per `04-brand.md`; the avoid-list there is absolute (no "maximising safety", "industry-leading", "take the hassle out", "world-class", "solutions" filler, exclamation marks, or any guarantee of authority decisions).
- Sentence case for headings, nav and buttons. Expand acronyms on first use per page, including "development application (DA)".

## Truthfulness guardrails — this is a professional engineering firm

- **Never invent**: engineer names, qualifications, registrations (CPEng/NER), accreditations, prequalifications, project counts, years of experience, LGA counts, turnaround promises, insurance details, or case studies. All such values live in `content/verified.ts` (create it) with a `verified: boolean` — unverified values must not render on public pages.
- The credential strip renders only its three confirmed items until the flagged two are verified.
- Statistics band component exists, but ships empty/hidden until figures are flagged verified.
- Every **open item** in `05-migration-map.md` (D2, D3, D6, V1–V4) gets a `TODO(verify:...)` comment at each affected location and an entry in `DECISIONS.md`. Do not resolve them yourself — especially the "STA" terminology and the ACT legislation line.

## Draft pages

Pages 08, 12, 13, 21 and 28 are built as **drafts**: excluded from navigation, sitemap and search indexing (`noindex`), reachable only by direct URL in preview, and watermarked "DRAFT — not for publication". Pages 08, 12, 21 and 28 get placeholder copy written strictly from the gap briefs in `05-migration-map.md`; page 13 gets **no service claims at all** — structure only. The 26c sector page's route card to page 08 stays hidden/disabled while 08 is a draft.

## SEO

- URLs exactly as listed in `03-build-list.md`; the five priority pages (TGS/TCP, CTMP, ROL, Council Permits — i.e. pages 01, 03, 22, 23) ship at full copy length regardless of nav depth.
- FAQPage JSON-LD on every service page with an FAQ set. Sitemap excludes drafts.
- Produce the SEO migration sheet (`seo-migration.csv`) with the columns listed in 00-INSTRUCTIONS; the redirect column stays empty until Saadat supplies the current live URLs — add a note requesting them.

## Workflow

Work through `PROMPTS.md` phase by phase. At the end of each phase: run the dev server, verify against the phase's definition of done, commit, and summarise what was built plus anything queued for Saadat's approval. Never start the next phase inside the same run unless told to. Flag contradictions or missing information before making assumptions — that instruction comes from the client and it is load-bearing.
