# DECISIONS.md — judgment calls, one line each

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
