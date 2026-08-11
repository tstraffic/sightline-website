import type { Metadata } from "next";
import { CAPABILITY_COVER as C, CAPABILITY_STATS } from "@content/pages/capability";
import { AccessDiagram } from "@/components/AccessDiagram";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Capability statement",
  description: "Sightline Traffic Engineers capability statement cover.",
  robots: { index: false, follow: false },
};

/**
 * Print-ready capability-statement cover, A4 portrait.
 *
 * Lives in the repo so it uses the same tokens and copy source as the site —
 * update the brand once, both follow. Not in the nav or sitemap; noindex.
 * To produce the PDF: open /capability-statement and print to PDF (A4,
 * background graphics on, margins none).
 */
export default function CapabilityStatementPage() {
  const label = (note?: string) => (note ? note.split(/\.\s|\.$/)[0].replace(/\s*\(.*?\)/, "") : "");

  return (
    <div className="cap-sheet">
      {/* ---- header ---- */}
      <header className="cap-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Sightline_Logo_Horizontal_Reversed.svg"
          alt="Sightline Traffic Engineers"
          className="cap-logo"
        />
        <div className="cap-docref">
          <span>{C.docType}</span>
          <span>
            {C.rev} <i aria-hidden="true">·</i> {C.date}
          </span>
          <span>{C.status}</span>
        </div>
      </header>

      {/* ---- body ---- */}
      <div className="cap-body">
        <div className="cap-copy">
          <p className="cap-eyebrow">{C.eyebrow}</p>
          <h1 className="cap-h1">
            {C.h1Line1}
            <br />
            {C.h1Line2}
          </h1>
          <p className="cap-intro">{C.intro}</p>

          <ul className="cap-principles">
            {C.principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <p className="cap-mark">{C.mark}</p>
        </div>

        <div className="cap-draw">
          <AccessDiagram invert />
          <div className="cap-draw-caption">
            {C.drawingCaption.map(([k, v]) => (
              <div key={k}>
                <b>{k}</b>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- statistics band ---- */}
      <div className="cap-stats">
        {CAPABILITY_STATS.map((s) => (
          <div key={s.value}>
            <span className="rule" aria-hidden="true" />
            <div className="n">{s.value}</div>
            <p className="l">{label(s.note)}</p>
          </div>
        ))}
      </div>

      {/* ---- footer ---- */}
      <footer className="cap-foot">
        <span>{C.footerLeft}</span>
        <span>
          {SITE.phone} <i aria-hidden="true">·</i> {SITE.email}
        </span>
        <span>{C.sheet}</span>
      </footer>
    </div>
  );
}
