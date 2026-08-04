# DECISIONS.md — judgment calls, one line each

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
