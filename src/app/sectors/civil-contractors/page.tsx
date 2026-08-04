import type { Metadata } from "next";
import Link from "next/link";
import { CIVIL_CONTRACTORS as C } from "@content/pages/civil-contractors";
import { CTA } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Civil Contractors",
  description:
    "Traffic documentation at construction pace — staging sets, barrier design statements, multi-stage CTMPs, site audits and ROL management for civil contractors.",
};

/** Sector page template (26a) — Phase 1 approval design, with route cards. */
export default function CivilContractorsPage() {
  return (
    <article>
      <header className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-oxide">{C.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-tight md:text-4xl">{C.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dust">{C.intro}</p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-14" aria-labelledby="needs">
        <h2 id="needs" className="text-2xl">
          {C.needsHeading}
        </h2>
        <ul className="mt-6 space-y-5">
          {C.needs.map((n) => (
            <li key={n.lead} className="flex gap-3">
              <span className="mt-2.5 h-0.5 w-4 flex-none bg-oxide" aria-hidden="true" />
              <p className="leading-relaxed">
                <strong>{n.lead}</strong> — {n.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 leading-relaxed text-survey">{C.outro}</p>
      </section>

      {/* Route cards — every sector page ends in a route, not a pitch */}
      <section className="border-t border-carbon/10 bg-dust/50" aria-labelledby="routes">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 id="routes" className="text-2xl">
            {C.routeHeading}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {C.routes.map((r) => (
              <Link
                key={r.ref}
                href={r.href}
                className="group border border-carbon/15 bg-paper p-5 no-underline hover:border-aubergine"
              >
                <span className="font-mono text-[0.64rem] tracking-[0.18em] text-oxide">{r.ref}</span>
                <span className="mt-2 block text-[1rem] font-medium text-carbon group-hover:text-aubergine">
                  {r.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aubergine text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12">
          <h2 className="max-w-xl text-balance text-2xl">{CTA.contactLine}</h2>
          <Link
            href={CTA.primary.href}
            className="bg-paper px-6 py-3.5 font-medium text-aubergine no-underline hover:bg-dust"
          >
            {CTA.primary.label} →
          </Link>
        </div>
      </section>
    </article>
  );
}
