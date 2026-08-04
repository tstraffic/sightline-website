import Link from "next/link";
import { SITE } from "@content/site";
import { CTA } from "@/lib/nav";

/** Title-block CTA — the drawing sheet's title block as the closing conversion band. */
export function TitleBlockCta({
  label,
  heading,
  notes,
  notesLabel = "What to send",
}: {
  label: string;
  heading: string;
  notes: string[];
  notesLabel?: string;
}) {
  return (
    <section className="section titleblock">
      <div className="tb-grid">
        <div className="tb-cell">
          <b>{label}</b>
          <h2>{heading}</h2>
          <Link className="btn btn-paper" href={CTA.primary.href}>
            {CTA.primary.label} →
          </Link>
        </div>
        <div className="tb-cell">
          <b>Contact</b>
          <div className="mono">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.address}
            <br />
            {SITE.hours}
          </div>
        </div>
        <div className="tb-cell">
          <b>{notesLabel}</b>
          <div className="mono small">
            {notes.map((n, i) => (
              <span key={i}>
                {n}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
