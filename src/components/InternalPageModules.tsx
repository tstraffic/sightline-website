import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@content/pages/projects";

export type SidecarRow = {
  label: string;
  value: string;
};

type TechnicalPageHeadProps = {
  eyebrow: ReactNode;
  title: string;
  sub: string | string[];
  tagline?: string;
  sidecarLabel: string;
  rows: SidecarRow[];
  note?: string;
  action?: { label: string; href: string };
  className?: string;
};

/**
 * Shared internal-page hero. The sidecar fills the previously unused half of
 * wide page headers with genuine project information rather than decoration.
 */
export function TechnicalPageHead({
  eyebrow,
  title,
  sub,
  tagline,
  sidecarLabel,
  rows,
  note,
  action,
  className = "",
}: TechnicalPageHeadProps) {
  const paragraphs = Array.isArray(sub) ? sub : [sub];

  return (
    <div className={`pagehead pagehead-technical ${className}`.trim()}>
      <div className="pagehead-copy">
        <div className="dwgno">{eyebrow}</div>
        <h1>{title}</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="sub">{paragraph}</p>
        ))}
        {tagline && <p className="about-tagline">{tagline}</p>}
      </div>

      <aside className="technical-sidecar" aria-label={sidecarLabel}>
        <div className="technical-sidecar-head">
          <span>{sidecarLabel}</span>
          <span>Current</span>
        </div>
        <dl>
          {rows.map((row) => (
            <div key={`${row.label}-${row.value}`}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        {(note || action) && (
          <div className="technical-sidecar-foot">
            {note && <p>{note}</p>}
            {action && <Link href={action.href}>{action.label} →</Link>}
          </div>
        )}
      </aside>
    </div>
  );
}

type ProcessStripProps = {
  label?: string;
  heading: string;
  steps: { title: string; text: string }[];
};

export function ProcessStrip({ label = "PROC 01—04", heading, steps }: ProcessStripProps) {
  return (
    <section className="section internal-process" aria-label={heading}>
      <div className="sec-head">
        <span className="sec-num">{label}</span>
        <h2>{heading}</h2>
        <span className="sec-rev">From enquiry to controlled issue</span>
      </div>
      <ol className="internal-process-grid">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="cell-tag">Step {String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

type ProjectEvidenceProps = {
  project: CaseStudy;
  label?: string;
  heading?: string;
};

export function ProjectEvidence({
  project,
  label = "Project evidence",
  heading = "See the technical work in context.",
}: ProjectEvidenceProps) {
  const image = project.images[0];

  return (
    <section className="section project-evidence" aria-label={`${label}: ${project.title}`}>
      <div className="sec-head">
        <span className="sec-num">EVID 01</span>
        <h2>{label}</h2>
        <span className="sec-rev">Authorised project material</span>
      </div>
      <div className="project-evidence-layout">
        <Link className="project-evidence-image" href={`/projects/${project.slug}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1000}
            sizes="(max-width: 900px) 100vw, 62vw"
          />
          <span>{image.label} · View project →</span>
        </Link>
        <div className="project-evidence-copy">
          <span className="cell-tag">{project.sector.label} · {project.location}</span>
          <h2>{heading}</h2>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <dl>
            <div>
              <dt>Status</dt>
              <dd>{project.drawingStatus}</dd>
            </div>
            <div>
              <dt>Shown</dt>
              <dd>{project.deliverables.join(" · ")}</dd>
            </div>
          </dl>
          <Link className="go" href={`/projects/${project.slug}`}>Open the drawing package →</Link>
        </div>
      </div>
    </section>
  );
}

type RelatedProjectGridProps = {
  projects: CaseStudy[];
  heading?: string;
};

export function RelatedProjectGrid({ projects, heading = "Related project evidence" }: RelatedProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <section className="section related-projects" aria-label={heading}>
      <div className="sec-head">
        <span className="sec-num">EVID</span>
        <h2>{heading}</h2>
        <span className="sec-rev">Authorised project material</span>
      </div>
      <div className={`related-project-grid count-${Math.min(projects.length, 3)}`}>
        {projects.slice(0, 3).map((project) => {
          const image = project.images[0];
          return (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="related-project-card">
              <div className="related-project-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={560}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <div className="related-project-copy">
                <span className="cell-tag">{project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className="go">View project →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export const STANDARD_PROJECT_STEPS = [
  { title: "Send the project", text: "Provide the site, available drawings and the issue that needs resolving." },
  { title: "Confirm the scope", text: "We identify the required assessment, documentation, programme and fee." },
  { title: "Assess and coordinate", text: "The technical work is developed against the project and authority requirements." },
  { title: "Check and issue", text: "The agreed review is completed before controlled issue and support through comments." },
] as const;
