import type { Metadata } from "next";
import Link from "next/link";
import { WORK_ZONE } from "@content/pages/work-zone-engineering";
import { CTA } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Work Zone Engineering",
  description:
    "TGS, staging sets, TMPs, barrier design and site audits for works on live road networks — prepared to TCAWS, AS 1742.3 and the Austroads Guide to Temporary Traffic Management.",
};

/** Practice landing template — Phase 1 approval design. */
export default function WorkZonePage() {
  return (
    <article>
      <header className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-oxide">
            {WORK_ZONE.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-tight md:text-4xl">
            {WORK_ZONE.h1}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-14">
        {WORK_ZONE.intro.map((p) => (
          <p key={p.slice(0, 24)} className="mt-5 text-[1.05rem] leading-relaxed first:mt-0">
            {p}
          </p>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14" aria-label="Services in this practice">
        <div className="grid gap-px border border-carbon/10 bg-carbon/10 md:grid-cols-2">
          {WORK_ZONE.services.map((s) => (
            <Link
              key={s.ref}
              href={s.href}
              className="group bg-paper p-7 no-underline hover:bg-dust/50"
            >
              <span className="font-mono text-[0.66rem] tracking-[0.18em] text-oxide">
                {s.ref}
              </span>
              <h2 className="mt-2 text-[1.15rem] text-carbon">{s.title}</h2>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-survey">{s.line}</p>
              <span className="mt-4 inline-block text-[0.88rem] font-medium text-aubergine group-hover:text-oxide">
                Read the page →
              </span>
            </Link>
          ))}
        </div>
      </section>

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
            className="bg-aubergine px-6 py-3.5 font-medium text-paper no-underline hover:bg-[color-mix(in_srgb,var(--color-aubergine),white_8%)]"
          >
            {CTA.primary.label} →
          </Link>
        </div>
      </section>
    </article>
  );
}
