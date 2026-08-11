# DECISIONS.md — judgment calls, one line each

## Authorised hero plan viewer (11 Aug 2026)

- Replaced the illustrative homepage drawing only (all approved copy and downstream sections remain unchanged) with the client-authorised ABG-A224-S2 set: page 01 is the zoomed-out overall corridor, followed by the three detailed A1 sheets as pages 02–04; web previews are 3200 px WebP exports while the supplied PDFs remain the source originals.
- The plan remains deliberately larger than its viewport and supports scroll, touch pan and mouse drag; changing page or pressing Replay restarts the left-to-right drawing reveal, titleblock field fill, Sightline logo placement and final sheet marker.
- The overall page carries an "ISSUED FOR APPROVAL" Drawing Paper / Oxide stamp as Sightline's recurring signature device, added at Saadat's direction from the approved brand-guideline treatment; the detailed pages remain marked Preliminary and do not invent an issue status.

## Brand simplification + capability statement (5 Aug 2026)

- **Brass removed from the UI entirely** at Saadat's direction. Replacement rule: OXIDE fills on light grounds (nav CTA, hero primary, decoder, contact, capability, team — paper text, 5.47:1); DRAWING PAPER on dark grounds (title-block CTA, stats numerals, capability link, on-aubergine secondary button — 12.73:1). Every replacement is higher contrast than the brass it replaced. Brass tokens deleted; the site now runs on the six core brand colours with one accent.
- Title-block lockup switched from the v3.2 brass-descriptor reversed logo to the plain reversed logo (paper + oxide). The brass asset stays in `public/brand/` for print use.
- **Capability-statement cover rebuilt in-repo** at `/capability-statement` — A4 portrait, print-ready (`@media print` hides the site chrome; print to PDF at A4, no margins, background graphics on). It was previously flat artwork with no editable source, so it drifted from the brand; it now imports the same tokens, `content/site.ts` and `verified.ts` as the website and cannot drift again. noindex, out of nav and sitemap.
- Cover updated to current brand: new tagline as the headline, consultancy positioning, NSW & ACT, the four current verified statistics (unverified figures cannot render — same guardrail as the site), no brass, reversed lockup, inverted road-plan drawing. "Technical authority, clearly expressed." demoted to the supporting mark box where "Designed to standard." used to sit.
- `AccessDiagram` gained an `invert` prop so one drawing serves both the light hero and the dark cover.
- **TODO(verify:rev)** — cover shows "REV C · AUG 2026 · FOR ISSUE"; the superseded artwork was REV B / DRAFT FOR REVIEW. Revision letter and issue status are Saadat's call.
- Only the cover (sheet 01) exists. Sheets 02–04 of the original capability statement have no source content in the pack — they need copy before the full document can be regenerated.
- Registered office updated to Suite 413, 388 George St, Sydney NSW 2000 (was Villawood); the team page's hiring location follows as "Sydney CBD".

## Website Copy Pass 1 (Saadat, 5 Aug 2026) — five areas

**1 · Slogan and positioning.** "Designed to standard." retired everywhere (hero, footer, browser title, meta description, OG/Twitter, mobile menu, capability pop-up) and replaced with the sole tagline "Designed for approval. Built for construction." Hero rebuilt: eyebrow "Independent traffic engineering consultancy", two-line H1, approved supporting paragraph + lifecycle sentence. OG/Twitter metadata added (they were inheriting defaults). NOTE: the browser title is now 76 characters — Google will truncate around 60; flagged for Saadat's call.

**Hero drawing rebuilt twice.** The label change alone would have been dishonest (a cone taper labelled "vehicle access assessment"), so the drawing was replaced: first with a site-access plan, then — per Saadat's reference sheet — with an overall road plan (corridor, signalised cross-road, roundabout with landscaped spiral, faint existing context, oxide movement paths with arrowheads, dashed SHEET reference areas, chainage markers, legend, notes, scale). Sheet references carry NO invented drawing numbers (brand §7); the caption strip marks it illustrative. Animation is staged like a sheet being issued (context → alignment → roundabout → movement paths → annotation → stamp) via `.anim-line*`/`.fade-in` with inline delays. The work-zone TGS drawing survives as `HeroDiagram` for construction-side pages.

**2 · Service hierarchy.** Restructured to four engineering practices — development → parking/access/swept paths → modelling/network → construction — with approvals demoted to a supporting cell beneath them on the homepage and moved into the Engineering Services dropdown (top-level "Approvals" nav item removed). Practice definitions centralised in `content/pages/practices.ts`; landings render through the `[slug]` route from `PRACTICE_LANDINGS`.
- **URL change, flagged:** the three old practice URLs are renamed and 301-redirect via `next.config.ts` (verified). Individual service-page URLs — the SEO-priority ones — are unchanged.
- Swept path (06) moved from work zone to parking; TIA (11) moved from modelling to development; TIS (14) moved from parking to development.
- Services Saadat listed that have no page yet (DA support, traffic generation, sustainable transport, council response letters, loading/servicing reviews, construction vehicle route plans) render as a text-only `scope` list — never links, so nothing dead-ends.

**5 · Absolute claims.** Applied the supplied replacements verbatim on the homepage, development landing, TIS, AS 2890, TGS, TIA and barrier pages, and extended the same treatment where the identical claim recurred elsewhere (sector-page "AS 2890 certification" → "compliance assessment and supporting documentation"; the 26a "approved barrier list, whichever is stricter" bullet; the AS 2890 "legally mandatory" FAQ; the B85/B99 FAQ, which was carrying the design-vehicle mandate the area-6 list removed from the table).

**6 · Technical numbers.** Removed from public display: the AS 2890.1 dimensional table (16), the AS 2890.2 table (19), and the TIS numeric triggers (14) — replaced with the supplied assessment-areas lists and per-project disclaimers. **This deliberately overrides the Rev 3 keep list** ("evidence blocks verbatim") on professional-liability grounds, at the client's instruction.
- **Not touched, needs a decision:** the driveway page (17) still publishes gradient rules (1 in 4, 1 in 20, 1 in 8, 2 m transitions, 120 mm clearance). They are the same class of figure as the tables just removed but were not on the area-6 list.
- **Also lost with the TIS trigger section:** the non-numeric land-use examples (childcare, medical/dental, small commercial units). Reinstatable without thresholds if wanted.

**7 · Standards.** TCAWS Manual → "TfNSW TS 05492 Traffic Control at Work Sites" (short form "TS 05492") across TGS, site audits, TMP FAQ, sector pages, About standards list and the team register; Austroads references now read "current Austroads Guide…" so editions don't date the site; G10 framed as "applicable TfNSW TS 03401 (G10) specification, where required by the contract or road authority"; homepage credential strip → "AS 1742.3 · AS 2890 series · TfNSW TS 05492 · Current Austroads guidance"; drawing caption relabelled "Reference" per the instruction not to group standards under "Standard".
- **Aimsun:** removed from the page 09 title/meta and the tool bullet de-named, pending Saadat's confirmation of delivery capability and technical review arrangements — `TODO(verify:aimsun)`.

Verified: 41 routes 200, 3 redirects resolving, sitemap 37 URLs (new practices in, drafts out), production build clean.

## Phase 3 (+ pre-phase changes, 5 Aug 2026)

- Saadat: services reordered site-wide to dev → work zone → transport (nav dropdown, homepage pillars renumbered P—01..03, practice eyebrows renumbered to match); build-list page numbers (01–25) unchanged — they are document refs, not practice order.
- Saadat: BRASS promoted from logo-only to UI accent — nav CTA (carbon on #C9A15A, 6.24:1), stats-band numerals (#C9A15A on aubergine, 5.71:1), decoder button; brass tokens added to @theme. Brass Deep is hover-state only on light grounds (3.03:1 — never small text). 04-brand's "logo-only" note superseded by owner direction.
- Palette breadth (Saadat: "site only has 2 or 3 colours"): .panel-side surfaces now Mineral Dust — all six brand colours + brass are visibly in play; secondary text darkens to #4d575c inside dust panels (survey grey is 3.82:1 on dust, AA fail — scoped --ink-soft override fixes every descendant).
- Drafts 08/12/21 written strictly from gap briefs A/B/C; 13 structure-only with zero claims; all noindex + watermarked + out of nav/sitemap, reachable by direct URL; live pages do NOT link to drafts (20→12 and 03→21 cross-links deferred until those pages go live).
- Case-study template built with all 00-INSTRUCTIONS fields; the one sample entry is permission:"sample" and excluded from production builds by construction (visibleCaseStudies) — dev-only, banner-labelled.
- seo-migration.csv generated from the content registries by script (40 rows); Existing URL + redirect columns marked "TBC — supply current live URL" per instructions.
- sitemap.ts emits exactly the 36 live URLs; robots.ts references it; canonicals on the dynamic service routes.
- QA: contrast audit of all rendered pairings passes AA after the dust-panel fix (worst live pair 4.60:1 survey-on-sheet); zero broken internal links across 37 unique targets; no horizontal overflow at 375px, tables scroll in .tablewrap; dropdown + mobile menu carry aria-expanded; FAQs are native details/summary.
- Lighthouse NOT run in this environment (no CLI chrome runner available in-session) — run against the Vercel staging deploy; noted as the one open QA item, alongside a favicon.ico fallback.

## Logo Pack v3.2 (5 Aug 2026, pre-Phase 3)

- v3.2 pack adopted per its own README: header (light ground) uses the OXIDE-descriptor horizontal (pack's recommendation — Brass Deep is 3.03:1 on Drawing Paper, large-size/non-text only); the APPROVED Reversed_BrassDescriptor lockup (#C9A15A, 5.71:1) sits on the aubergine title-block CTA's contact cell — the Title Block system's dark ground (the footer strip is light, so no reversed lockup there).
- LightTest_OxideDescriptor copied to a production name (Sightline_Logo_Horizontal_Light_Oxide.svg); originals kept alongside for the pending descriptor decision.
- Brass stays a logo-only accent — not added to the UI palette; the avoid-brass rule still applies to surfaces/text/components. 04-brand.md amended with the v3.2 section (user-directed edit).
- Known limitation noted in the brand doc: descriptor marginal at ≤120px lockup widths — icon or mark+wordmark at avatar sizes.
- QA note for Phase 3: /favicon.ico 404s (icon.svg serves the modern link tag) — add a favicon.ico fallback in the QA pass.

## Phase 2

- All 21 live service pages render through one registry-driven dynamic route (src/app/[slug], URLs exactly per 03-build-list); sector pages 26a–e through /sectors/[slug]; the Phase 1 static routes for 01/07/26a were migrated into the registries and deleted.
- Service copy grouped by practice in content/pages/{work-zone,transport,parking,approvals}-services.ts — verbatim from Rev 3 with only the specified fixes; every open item carries a TODO(verify:…) comment at each affected location (V1 STA ×3 files, V2 ROL trigger, V3 TMP qualification FAQ, V4 swept-path software, D2 ×2: modelling jurisdictions + ACT permit line).
- Voice fix 2 rewrite: "Critical thinking, applied on site" and "Reviewing the variables"/"cost-effective solutions" replaced with revision-turnaround and drawing-register/one-sequence bullets, matching the CAD-staging-set register as directed.
- Page 19's flagged editorial block: first two sentences adapted into copy as a closing paragraph; the linking instruction stripped; page links to 06 via the related-pages block (as do 02 and 03→04).
- Approvals landing = the section landing via the shared PracticeLanding template; voice fix 4 drops the "hassle" sentence entirely (the parallel-pathway paragraph already carries the message).
- 26c's route card to page 08 is commented out in data (not hidden with CSS) so it can't leak; restore when 08 goes live (D3).
- /projects built as an honest empty-state index now (it's in the nav — a 404 was worse); the full case-study template with the 00-INSTRUCTIONS fields remains Phase 3. No invented case studies.
- Forms now POST to stubbed API routes (/api/enquiry, /api/decoder) with server-side honeypot handling; success message states plainly that email delivery isn't wired. Needed for launch: email provider key (e.g. Resend) + verified domain, routing address, confirmation template, upload handling, server-side validation/rate limiting — listed in the route comments.
- Team page restyled to Title Block (split panels, spec rows, qualification register table); photo slots render placeholders until files land in /public/team.
- Sectors landing tiles reuse each sector's own opener line as the tile line — no new copy.

## Phase 1 — rev B addendum (Saadat's markup, 4 Aug 2026)

- Logo enlarged in the nav (58px, 46px mobile); phone cell hides below 1120px so nothing wraps.
- Hero diagram now animates like the live site: road linework draws in over ~3.4s, cones fade in staggered, stamp fades last; disabled under prefers-reduced-motion.
- Cone taper repositioned per Saadat's annotated screenshot: merges from the lower carriageway, delineates the closed lane along the work zone's left boundary, and carries through to terminate past the work zone (14 cones).
- About PROMOTED from hidden draft to live nav item at Saadat's direction ("they need to know who we are"): page built strictly from approved brand-brief wording + client-published live-site copy (small-practice lines, independence disclosure) + factual standards list + gap-brief-D engagement structure; people section is name/role cards routing to /team; registrations/accreditations still absent pending D6 (TODO comment in place). Supersedes the earlier "About stays out of nav while draft" call.

## Phase 1 — rev B (Title Block treatment)

- APPROVAL DECISION (Saadat, 4 Aug 2026): "Make it like 3001" — the live site's Title Block drawing-sheet system carries into the new build, overriding the pack's "sparingly" guidance and the cover-editorial rev A (rev A retrievable from git history at commit 67eafff).
- Title Block CSS ported and re-tokenised: all colours resolve to the six @theme tokens (aliases + color-mix derivations in :root); class names kept close to the live site's for familiarity.
- Statistics band stays a DARK aubergine band inside the sheet (honours the 04-brand "never on a light block" rule even in the 3001-style layout).
- Condition decoder added to the homepage (SHT 03) at Saadat's request with expanded content: live-site paragraph carried (client-published, incl. same-business-day claim), new supporting copy kept claim-safe, what-you-send/get/costs spec rows, decoder form stubbed like the contact form.
- Contact details (phone/email/address/hours) carried from the live site into content/site.ts — client-published; used in nav, title-block CTA, contact page, footer. Clears the earlier footer TODO.
- Practice-landing service list rendered as the drawing-register table (the 3001 signature) instead of cards — user's direction implies the register; the ServiceCard treatment remains available for Phase 2 landing pages if preferred.
- .tb-cell a colour rule out-specified .btn-paper (paper-on-paper button) — fixed with .titleblock .btn-paper override; same bug class exists in the live repo, worth remembering.
- Team page still wears the interim Tailwind treatment — restyle to Title Block in Phase 2.
- Hero diagram recoloured for the light sheet (carbon linework, oxide accents, survey dimensions) — reads as a drawing on the sheet rather than a dark panel.

## Phase 1 — rev A (superseded)

- Official brand-pack lockups adopted: primary horizontal in the header (light ground), reversed in the footer (aubergine), app tile as the web icon; the interim inline BrandMark component removed.
- Hero diagram: detailed TGS-extract treatment (cone taper w/ AS 1742.3 Fig 4.9 annotation, hatched work zone, chainage per the approved cover, lane dimension, north point, scale bar, paper stamp w/ oxide corners) at Saadat's request ("more detailed and engineering-looking"); simpler cover-literal version retrievable from git history.
- StatsBand renders on the homepage with `designPreview` showing candidate figures + an explicit "awaiting verification" tag — remove the prop or verify stats before launch; production renders verified figures only. TODO(verify:stats).
- Stats labels derive from verified.ts notes (first sentence only) so copy stays single-sourced.
- Eyebrow on aubergine uses Oxide, mirroring the locked capability cover exactly (contrast note logged for the Phase 3 WCAG pass — decorative mono caps, not body text).
- Voice fix 1 rewrite avoids duplicating the page's closing internal-link line ("same engineers…") — the concrete "by whom" moved to "designed by traffic engineers to the site's actual geometry".
- 4th pillar card copy written from the Approvals landing intro per 05-migration-map, phrased without "STA" to avoid a V1-flagged term in newly written copy.
- Practice-landing service cards use each page's Rev 3 opening line as its one-liner — no invented blurbs; page 08 excluded from the card grid while it is a hidden draft.
- Contact "what we need from you" table carries the technical-table treatment with real information (the three scoping inputs from Rev 3's closing CTA line, expanded honestly).
- Contact form: front-end validation + honeypot only in Phase 1; submission handler, confirmation email and internal routing are Phase 2 — surfaced in the form's stub message.
- Practice pages 2/3, /approvals, /sectors and remaining sector pages are Phase 2 — their nav/tile links 404 in this preview by design.
- Mobile: hero diagram hidden below `sm` (keeps the aubergine hero compact); stats collapse 4→2→1 columns; pillar cards stack.

## Phase 0

- Scaffolded manually (not create-next-app) because the repo root already holds /content and CLAUDE.md; project root = pack root so `/content` stays the single source tree.
- Next.js 16 + Tailwind v4 (CSS-first `@theme`): six brand colours + two font vars defined once in `src/app/globals.css`; no raw hex in components (BrandMark SVG carries the approved logo fills as shipped in the brand pack — treated as an asset, not styling).
- Page copy lives in `content/pages/*.ts` as typed data (`ServicePageData`), imported via `@content/*` alias — satisfies the editable-CMS-fields rule.
- About (page 28) is omitted from the rendered nav while it is a draft: CLAUDE.md's draft rule (hidden from nav) overrides the literal seven-item nav listing; nav data keeps the entry with `draft: true` so flipping one flag restores it.
- Wired page 07 (Site Audits) as the end-to-end example because it is pure KEEP with no voice fixes — zero copy-judgment risk in the plumbing demo.
- Homepage is a structural placeholder only; flagged in-page that the Phase 1 approval set delivers the designed homepage.
- Hero sub-paragraph keeps "across NSW" with `TODO(verify:D2)` per open-item rule.
- Credential strip renders only the three confirmed items; NER/CPEng + NSW prequalified sit in `content/verified.ts` at `verified:false` (D6).
- All four capability stats in `verified.ts` at `verified:false`; no statistics band rendered anywhere yet.
- On-dark primary CTA = Drawing Paper ground + Aubergine text (oxide never a button fill; aubergine-on-aubergine invisible). Light-ground primaries are Aubergine.
- Brand-pack logo SVGs not yet copied into /public — Phase 1 (design set) decides placement; nav uses the inline mark geometry from the approved icon.
- Footer contact details left as TODO(content) — address/phone/email for the new site not in the content pack.
- Saadat likes the live site's Team page and wants it carried into the new build; its published content (5 profiles, qualification register incl. PI insurance line, hiring section) imported verbatim to `content/pages/team.ts` with provenance = live-site /team — treated as client-approved because the client already published it, substantially closing D6 (remaining: NER/CPEng, prequal strip, T&S-mention stance).
- D3 evidence from live team page: "RSA registration in progress" (Savanah) confirms no in-house accredited RSA auditor yet — page 08 auditor claims stay gated; the in-progress line itself may be stated.
- Team placement CONFIRMED by Saadat (4 Aug 2026): About stays the nav entry and carries the story (company, standards, process), /team is its own page with the people in detail — linked from About and the footer, not in the header nav. Sitemap is now 40 URLs (35 live incl. /team, 5 hidden drafts). Gap brief D (About) narrows: people detail moves to /team; About keeps a team teaser routing there.
- /team wired live in Phase 0 scaffolding (route + footer link) since its content is already client-published; Phase 1 restyles it with the designed profile treatment.
