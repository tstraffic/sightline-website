import type { Metadata } from "next";
import Link from "next/link";
import { CIVIL_CONTRACTORS as C } from "@content/pages/civil-contractors";
import { TitleBlockCta } from "@/components/TitleBlockCta";

export const metadata: Metadata = {
  title: "Civil Contractors",
  description:
    "Traffic documentation at construction pace — staging sets, barrier design statements, multi-stage CTMPs, site audits and ROL management for civil contractors.",
};

/** Sector page template (26a) — Title Block treatment with route cards. */
export default function CivilContractorsPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{C.eyebrow}</div>
        <h1>{C.h1}</h1>
        <p className="sub">{C.intro}</p>
      </div>

      <section className="section" aria-labelledby="needs">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="needs">{C.needsHeading}</h2>
        </div>
        <div className="pad">
          <ul className="dashlist max-w-[72ch]">
            {C.needs.map((n) => (
              <li key={n.lead}>
                <p>
                  <strong>{n.lead}</strong> — {n.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[68ch] text-survey">{C.outro}</p>
        </div>
      </section>

      {/* Route cards — every sector page ends in a route, not a pitch */}
      <section className="section" aria-labelledby="routes">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="routes">{C.routeHeading}</h2>
          <span className="sec-rev">Route to the pages you need</span>
        </div>
        <div className="cellgrid cols-3">
          {C.routes.map((r) => (
            <Link key={r.ref} href={r.href} className="cell">
              <span className="cell-tag">{r.ref}</span>
              <h3>{r.label}</h3>
              <span className="go">Read the page →</span>
            </Link>
          ))}
        </div>
      </section>

      <TitleBlockCta
        label="Civil contractors"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Staging or civil drawings", "3. The programme pressure point"]}
      />
    </article>
  );
}
