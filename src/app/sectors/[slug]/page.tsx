import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SECTORS } from "@content/pages/sectors";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import {
  ProcessStrip,
  ProjectEvidence,
  STANDARD_PROJECT_STEPS,
  TechnicalPageHead,
} from "@/components/InternalPageModules";
import { projectsForSector, sectorSidecar } from "@/lib/internalPageContent";

/** Sector page template — problem-first opener, needs list, route cards. */

export function generateStaticParams() {
  return Object.keys(SECTORS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SECTORS[slug];
  if (!data) return {};
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SECTORS[slug];
  if (!s) notFound();
  const projectEvidence = projectsForSector(slug)[0];

  return (
    <article>
      <TechnicalPageHead
        eyebrow={s.eyebrow}
        title={s.h1}
        sub={s.intro}
        sidecarLabel="Sector starting point"
        rows={sectorSidecar(s)}
        note="We confirm the required report, assessment or drawing before the project is scoped."
        action={{ label: "Discuss the project", href: "/contact" }}
      />

      <section className="section" aria-labelledby="needs">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="needs">{s.needsHeading}</h2>
        </div>
        <div className="sector-needs-layout">
          <div className="pad">
            <ul className="dashlist max-w-[72ch]">
              {s.needs.map((n) => (
                <li key={n.lead}>
                  <p>
                    <strong>{n.lead}</strong> — {n.text}
                  </p>
                </li>
              ))}
            </ul>
            {s.outro && <p className="mt-6 max-w-[68ch] text-survey">{s.outro}</p>}
          </div>
          <aside className="sector-needs-aside">
            <span className="cell-tag">Project questions</span>
            <h3>What should be resolved early?</h3>
            <ol>
              {s.needs.slice(0, 4).map((need, index) => (
                <li key={need.lead}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{need.lead}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="routes">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="routes">{s.routeHeading}</h2>
          <span className="sec-rev">Route to the pages you need</span>
        </div>
        <div className="cellgrid cols-3">
          {s.routes.map((r) => (
            <Link key={r.ref} href={r.href} className="cell">
              <span className="cell-tag">{r.ref}</span>
              <h3>{r.label}</h3>
              <span className="go">Read the page →</span>
            </Link>
          ))}
        </div>
      </section>

      {projectEvidence && (
        <ProjectEvidence
          project={projectEvidence}
          heading="See the sector work through an authorised drawing package."
        />
      )}

      <ProcessStrip heading="How a sector enquiry becomes a defined scope" steps={[...STANDARD_PROJECT_STEPS]} />

      <TitleBlockCta
        label={s.metaTitle}
        heading="Send us the drawings. We'll tell you what you need."
        notes={[...s.notes]}
      />
    </article>
  );
}
