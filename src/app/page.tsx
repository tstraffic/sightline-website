import Link from "next/link";
import { CTA } from "@/lib/nav";
import { CREDENTIALS } from "@content/verified";

/**
 * Phase 0 structural placeholder. The designed homepage (hero, credential
 * strip, Why Sightline, four equal pillar cards, sector tiles, closing CTA)
 * is Phase 1's approval set — do not treat this layout as the concept.
 */
export default function HomePage() {
  const confirmed = CREDENTIALS.filter((c) => c.verified);
  return (
    <>
      <section className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-dust/80">
            Independent traffic and transport engineering
          </p>
          <h1 className="mt-5 max-w-2xl text-balance text-4xl leading-tight md:text-5xl">
            Designed to standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dust">
            {/* TODO(verify:D2) — "across NSW" pends the geographic-scope call */}
            Sightline Traffic Engineers designs the traffic engineering behind civil,
            infrastructure and development projects across NSW — from the certified TGS on a
            single lane closure to the SIDRA case that gets an intersection through council.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            {/* On-dark primary: paper ground + aubergine text (oxide is never a button fill) */}
            <Link
              href={CTA.primary.href}
              className="bg-paper px-6 py-3.5 font-medium text-aubergine no-underline hover:bg-dust"
            >
              {CTA.primary.label} →
            </Link>
            <Link
              href={CTA.secondary.href}
              className="border border-paper/50 px-6 py-3.5 font-medium text-paper no-underline hover:bg-paper hover:text-aubergine"
            >
              {CTA.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Credential strip — verified items only (truthfulness guardrail) */}
      <section className="border-b border-carbon/15 bg-dust/60" aria-label="Credentials">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-5 py-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-survey">
          {confirmed.map((c) => (
            <span key={c.value}>{c.value}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl">Phase 0 scaffold</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-survey">
          Base layout, navigation, design tokens and the content pipeline are wired. The
          designed homepage is delivered in Phase 1 for approval. Example service page:{" "}
          <Link href="/site-audits" className="text-oxide">
            Site audits
          </Link>
          .
        </p>
      </section>
    </>
  );
}
