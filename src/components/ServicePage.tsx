import Link from "next/link";
import type { ServicePageData, PageSection } from "@content/pages/types";
import { TitleBlockCta } from "./TitleBlockCta";

/**
 * Individual service page template — Title Block treatment. Renders content
 * only; all copy comes from /content/pages data. FAQPage JSON-LD included.
 */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <article>
      <FaqJsonLd data={data} />

      <div className="pagehead">
        <div className="dwgno">
          <Link href={data.practice.href} className="no-underline hover:underline">
            {data.practice.label}
          </Link>{" "}
          · Page {data.pageNo}
        </div>
        <h1>{data.title}</h1>
        <p className="sub">{data.opener}</p>
      </div>

      <section className="section">
        <div className="pad">
          <p className="max-w-[62ch] text-[1.05rem] leading-relaxed">{data.intro}</p>
        </div>

        {data.sections.map((s, i) => (
          <Section key={i} section={s} />
        ))}
      </section>

      {data.faqs.length > 0 && (
        <section className="section" aria-labelledby="faqs">
          <div className="sec-head">
            <span className="sec-num">FAQ</span>
            <h2 id="faqs">Common questions</h2>
          </div>
          <div className="faq">
            {data.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {data.closingLine && (
        <div className="pad section !py-7">
          <p className="max-w-[62ch] border-l-2 border-oxide pl-4 text-[1rem]">
            <Link href={data.practice.href}>{data.closingLine}</Link>
          </p>
        </div>
      )}

      <TitleBlockCta
        label={data.practice.label}
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}

function Section({ section }: { section: PageSection }) {
  switch (section.kind) {
    case "paragraph":
      return (
        <div className="pad !pt-0">
          <p className="max-w-[62ch] leading-relaxed">{section.text}</p>
        </div>
      );
    case "bullets":
      return (
        <div className="pad !pt-0">
          {section.heading && <h2 className="text-xl">{section.heading}</h2>}
          <ul className="dashlist mt-3 max-w-[68ch]">
            {section.items.map((it, i) => (
              <li key={i}>
                <p>
                  {it.lead && <strong>{it.lead} — </strong>}
                  {it.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "numbered":
      return (
        <div className="pad !pt-0">
          {section.heading && <h2 className="text-xl">{section.heading}</h2>}
          <ol className="method mt-3 max-w-[70ch]">
            {section.steps.map((step, i) => (
              <li key={i}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "table":
      return (
        <div className="!pt-0">
          {section.heading && (
            <div className="pad !py-0">
              <h2 className="text-xl">{section.heading}</h2>
            </div>
          )}
          <div className="tablewrap mt-3">
            <table className="register">
              <thead>
                <tr>
                  {section.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((r, i) => (
                  <tr key={i}>
                    <td className="ttl">{r[0]}</td>
                    <td className="des">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
