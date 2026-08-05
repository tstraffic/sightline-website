import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { visibleCaseStudies } from "@content/pages/projects";
import { TitleBlockCta } from "@/components/TitleBlockCta";

/** Case-study template (00-INSTRUCTIONS fields). Sample entry is dev-only. */

const isProd = process.env.NODE_ENV === "production";

export function generateStaticParams() {
  return visibleCaseStudies(isProd).map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = visibleCaseStudies(isProd).find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.problem.slice(0, 155),
    ...(c.permission !== "granted" ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = visibleCaseStudies(isProd).find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <article>
      {c.permission === "sample" && (
        <div className="border-b-[1.5px] border-oxide bg-oxide/10 px-6 py-2.5 text-center font-mono text-[0.66rem] uppercase tracking-[0.22em] text-oxide" role="status">
          Sample entry — template demonstration only, not a real project
        </div>
      )}
      <div className="pagehead">
        <div className="dwgno">Projects · {c.clientType}</div>
        <h1>{c.title}</h1>
        <p className="sub">{c.problem}</p>
      </div>

      <section className="section split w-7-5">
        <div className="panel">
          <h2 className="text-xl">Constraints</h2>
          <ul className="dashlist mt-3">
            {c.constraints.map((x) => (
              <li key={x}>
                <p>{x}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xl">Outcome</h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed">{c.outcome}</p>
        </div>
        <aside className="panel-side">
          <div className="spec-row">
            <b>Location</b>
            <span>{c.location}</span>
          </div>
          <div className="spec-row">
            <b>Client type</b>
            <span>{c.clientType}</span>
          </div>
          <div className="spec-row">
            <b>Approvals</b>
            <span>{c.approvalPathway}</span>
          </div>
          <div className="spec-row">
            <b>Deliverables</b>
            <span>{c.deliverables.join(" · ")}</span>
          </div>
          <h2 className="mt-7 text-lg">Services delivered</h2>
          <div className="mt-2 grid gap-1">
            {c.servicesDelivered.map((s) => (
              <Link key={s.href} href={s.href} className="font-mono text-[0.78rem] text-oxide no-underline hover:underline">
                {s.label} →
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <TitleBlockCta
        label="Your project"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
