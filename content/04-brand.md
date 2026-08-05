# Sightline brand — Oxide Mark / Technical Editorial (v3.2)

> **v3.2 amendment (Logo Pack v3.2, issued 5 Aug 2026 — supersedes v3.1 logo section).**
> Mark geometry unchanged. The logo **descriptor** ("TRAFFIC ENGINEERS") gains an accent:
> - **APPROVED — dark grounds (Aubergine/Carbon):** reversed lockups use a **Brass `#C9A15A` descriptor** with the Drawing Paper wordmark (5.71:1 on Aubergine, WCAG AA). Files: `*_Reversed_BrassDescriptor.svg`.
> - **Light grounds:** per the pack's proofing, the **Oxide `#A34652` descriptor** is used (Brass Deep `#AB894C` is 3.03:1 on Drawing Paper — large-size/non-text only: A4 covers and signage, never small applications).
> - Brass is a **logo-accent only** — it is not a UI colour and does not join the six-colour interface palette; the "avoid brass" rule continues to apply to surfaces, text and components.
> - Known limitation: at ≤120px lockup widths the descriptor is marginal in every variant — use mark+wordmark or the icon at avatar sizes.
> - Pending separately: descriptor re-typeset test (Medium 500, tighter tracking).

> Distilled from the approved Brand Brief v3.1 and Brand Guidelines v3.1 for use in code. The rasterised approved capability-statement cover is at `assets/capability-cover.png` — it is the **locked visual reference** for the technical road-diagram treatment, reversed logo use, typography and restrained Oxide accents. The full brand pack exists as PDF outside this repo.

**Brand idea:** Independent technical authority, expressed with clarity and character.
**Tagline:** "Designed to standard." (remains the tagline per 00-INSTRUCTIONS)
**Broader brand line:** "Technical authority, clearly expressed." — does not need to be the main headline on every page.
**Character:** Precise · Assured · Considered · Practical · Independent. Controlled / current / buildable.

## Palette (design tokens)

| Token | Hex | Role |
|---|---|---|
| Aubergine | `#3E2632` | Primary brand ground — hero panels, footers, covers, section openers, conversion sections |
| Oxide | `#A34652` | Direction and emphasis only — links, revision marks, active states, short rules, key figures. Never a decorative wash. Must not automatically mean error/rejection |
| Carbon | `#24272A` | Primary text |
| Survey Grey | `#657278` | Secondary technical text |
| Mineral Dust | `#E5E1DE` | Supporting surfaces, table shading (instead of heavy borders) |
| Drawing Paper | `#F8F6F2` | Default background |

Approximate web surface weighting: Drawing Paper ~62% · Aubergine ~20% · Mineral Dust ~13% · Oxide ~5%. Predominantly light; Aubergine provides authority; Oxide directs attention.

**Buttons:** primary buttons use **Aubergine**, not Oxide. One clear primary CTA per visual field. Functional statuses always use text and icons, never colour alone.

## Typography

- **Hanken Grotesk** — Regular 400 for body and explanatory text; Medium 500 for headings, navigation and buttons. Sentence case. Short headings. Comfortable line spacing. Avoid bold 700, ultra-light weights, italics, ornamental alternates, excessive uppercase.
- **IBM Plex Mono** — reserved for project numbers, revisions, chainages, dates, standards references and short status labels (e.g. `REV C · CURRENT`, `SL-02407`, `SHEET 02 OF 27`). Its impact depends on restricted use.

## Graphic language — "technical editorial"

Use (sparingly — one or two devices per composition): revision tabs, sheet references, fine technical rules, alignment marks, small project codes, controlled annotation arrows, drawing-register structures, margin notes and page numbering. **Use real information wherever possible** — no fake coordinates or decorative CAD overlays.

Avoid: heavy gradients, glass effects, large rounded SaaS-style cards, heavy shadows, cinematic colour overlays.

## Imagery ratios

~50% infrastructure and place (intersections, corridors, kerb geometry, completed public space) · ~30% genuine technical artefacts (TGS drawings, swept paths, revision clouds, staging plans) · ~20% people and outcomes. Natural daylight, neutral-to-cool grading, strong geometry, real Australian environments. Avoid cone-led stock imagery, generic hi-vis portraits, staged plan-pointing.

## Voice

Plain · Precise · Confident · Human. Sentence case, no exclamation marks, active voice, minimal jargon, explain acronyms, avoid clichés, do not overuse "solutions."

Preferred register: "We prepare traffic engineering reports and drawings that are clear, buildable and ready for approval."
Avoid register: "We deliver innovative, world-class traffic solutions designed to exceed expectations."

Full avoid-list (from 00-INSTRUCTIONS): exclamation marks · generic "solutions" language · "industry-leading" without evidence · "world-class" · "maximising safety" · "take the hassle out" · "approved first time" unless substantiated · "faster approval" without evidence · any claim that Sightline can guarantee authority decisions.

## Standalone positioning

Lead with Sightline's engineers, technical services, standards, quality-control process and independent professional judgment. Do not define the brand through T&S Traffic Control or any parent/sister lockup; practical delivery experience is supporting evidence only. Signage installation is not on this site.

## Capability-cover DO NOTs (locked reference)

Do not use green or brass variants. Do not move the statistics band to a light block. Do not use an Oxide-only stamp on Aubergine. Do not substitute generic road photography or cones. Preserve: continuous Aubergine field, correct reversed logo, approved curved-road diagram, Drawing Paper issued-status stamp with Oxide corner accents, compact dark statistics band.

## ⚠ Unverified numbers

The capability cover (marked "DRAFT FOR REVIEW") shows: **14** years of road and traffic management experience · **300+** schemes implemented alongside delivery teams · **28** LGAs worked across Greater Sydney and the Illawarra · **1 day** to a fixed written fee for standard enquiries. Treat all four as **unverified** until Saadat confirms — build the statistics component data-driven with a `verified` flag, and do not render unverified figures on the public site. "14 years" refers to the engineers' experience, not the firm's age.
