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
