import Link from "next/link";
import type { ServicePageData, PageSection } from "@content/pages/types";
import { CTA } from "@/lib/nav";

/**
 * Individual service page template (template 3 of 8, 00-INSTRUCTIONS).
 * Phase 0 wiring version — Phase 1 delivers the approved design treatment.
 * Renders content only; all copy comes from /content/pages data.
 */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <article>
      <FaqJsonLd data={data} />

      {/* Page head — controlled Aubergine section */}
      <header className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-dust/80">
            {data.practice.label} · Page {data.pageNo}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-tight md:text-4xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dust">{data.opener}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-[1.05rem] leading-relaxed">{data.intro}</p>

        {data.sections.map((s, i) => (
          <Section key={i} section={s} />
        ))}

        {data.faqs.length > 0 && (
          <section className="mt-14" aria-labelledby="faqs">
            <h2 id="faqs" className="text-xl">
              Frequently asked questions
            </h2>
            <div className="mt-4 border-t border-carbon/15">
              {data.faqs.map((f) => (
                <details key={f.q} className="group border-b border-carbon/15">
                  <summary className="cursor-pointer list-none py-4 pr-8 font-medium marker:hidden">
                    <span className="mr-3 font-mono text-oxide" aria-hidden="true">
                      +
                    </span>
                    {f.q}
                  </summary>
                  <p className="pb-5 pl-7 leading-relaxed text-survey">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {data.closingLine && (
          <p className="mt-12 border-l-2 border-oxide pl-4 text-[1.02rem]">
            <Link href={data.practice.href}>{data.closingLine}</Link>
          </p>
        )}
      </div>

      {/* Closing CTA — one primary action per visual field */}
      <section className="bg-dust/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12">
          <div>
            <h2 className="text-xl">{CTA.contactLine}</h2>
            <p className="mt-1 text-survey">
              Site address, plans and a description of the works is usually enough to scope it.
            </p>
          </div>
          <Link
            href={CTA.primary.href}
            className="bg-aubergine px-6 py-3.5 font-medium text-paper no-underline hover:bg-[#4c2f3d]"
          >
            {CTA.primary.label} →
          </Link>
        </div>
      </section>
    </article>
  );
}

function Section({ section }: { section: PageSection }) {
  switch (section.kind) {
    case "paragraph":
      return <p className="mt-6 leading-relaxed">{section.text}</p>;
    case "bullets":
      return (
        <section className="mt-10">
          {section.heading && <h2 className="text-xl">{section.heading}</h2>}
          <ul className="mt-4 space-y-3">
            {section.items.map((it, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-0.5 w-4 flex-none bg-oxide" aria-hidden="true" />
                <span className="leading-relaxed">
                  {it.lead && <strong>{it.lead} — </strong>}
                  {it.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );
    case "numbered":
      return (
        <section className="mt-10">
          {section.heading && <h2 className="text-xl">{section.heading}</h2>}
          <ol className="mt-4 space-y-4">
            {section.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[0.8rem] text-oxide">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      );
    case "table":
      return (
        <section className="mt-10">
          {section.heading && <h2 className="text-xl">{section.heading}</h2>}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-[0.95rem]">
              <thead>
                <tr>
                  {section.columns.map((c) => (
                    <th
                      key={c}
                      className="bg-dust px-4 py-2.5 text-left font-mono text-[0.62rem] uppercase tracking-[0.18em] text-survey"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((r, i) => (
                  <tr key={i} className="border-b border-carbon/10">
                    <td className="px-4 py-3 font-medium">{r[0]}</td>
                    <td className="px-4 py-3 text-survey">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
  }
}

/** FAQPage structured data (00-INSTRUCTIONS SEO requirement). */
function FaqJsonLd({ data }: { data: ServicePageData }) {
  if (data.faqs.length === 0 || data.draft) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
