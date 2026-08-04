import Link from "next/link";
import { HOME } from "@content/pages/home";
import { CREDENTIALS } from "@content/verified";
import { CTA } from "@/lib/nav";
import { HeroDiagram } from "@/components/HeroDiagram";
import { StatsBand } from "@/components/StatsBand";

/**
 * Homepage — Phase 1 approval design. Layout per 05-migration-map: hero,
 * statistics band (continuous aubergine field, per the capability cover),
 * credential strip (confirmed items only), Why Sightline, four equal pillar
 * cards, sector tiles, closing CTA. Predominantly Drawing Paper; controlled
 * Aubergine; Oxide as annotation only.
 */
export default function HomePage() {
  const confirmed = CREDENTIALS.filter((c) => c.verified);
  return (
    <>
      {/* Hero — controlled Aubergine section with the approved diagram treatment */}
      <section className="bg-aubergine text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:pb-20 lg:pt-24">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-oxide">
              {HOME.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              {HOME.hero.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dust">{HOME.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
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
          <div className="hidden sm:block">
            <HeroDiagram />
          </div>
        </div>
        {/* Statistics band on the same aubergine field (design preview until figures verify) */}
        <StatsBand designPreview />
      </section>

      {/* Credential strip — confirmed items only */}
      <section className="border-b border-carbon/15 bg-dust/70" aria-label="Credentials">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-9 gap-y-2 px-5 py-4">
          {confirmed.map((c) => (
            <span key={c.value} className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-survey">
              {c.value}
            </span>
          ))}
        </div>
      </section>

      {/* Why Sightline */}
      <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="why">
        <div className="max-w-3xl">
          <span className="block h-0.5 w-10 bg-oxide" aria-hidden="true" />
          <h2 id="why" className="mt-5 text-balance text-3xl leading-tight md:text-4xl">
            {HOME.why.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-survey">{HOME.why.intro}</p>
        </div>
        <div className="mt-10 grid gap-px border border-carbon/10 bg-carbon/10 md:grid-cols-3">
          {HOME.why.points.map((p) => (
            <div key={p.lead} className="bg-paper p-7">
              <h3 className="text-[1.05rem]">{p.lead}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-survey">{p.text}</p>
              {"href" in p && p.href && (
                <Link href={p.href} className="mt-4 inline-block text-[0.9rem] text-oxide">
                  Temporary barrier design →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-oxide pl-4 text-[1.02rem] leading-relaxed">
          {HOME.why.closing}
        </p>
      </section>

      {/* Four equal pillars */}
      <section className="border-y border-carbon/10 bg-dust/50" aria-labelledby="pillars">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 id="pillars" className="text-3xl">
            What we do
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {HOME.pillars.map((p) => (
              <Link
                key={p.ref}
                href={p.href}
                className="group flex flex-col border border-carbon/15 bg-paper p-7 no-underline hover:border-aubergine"
              >
                <span className="font-mono text-[0.66rem] tracking-[0.18em] text-oxide">
                  P—{p.ref}
                </span>
                <h3 className="mt-3 text-xl text-carbon">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-survey">{p.text}</p>
                <span className="mt-5 text-[0.9rem] font-medium text-aubergine group-hover:text-oxide">
                  View the practice →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="sectors">
        <h2 id="sectors" className="max-w-2xl text-balance text-3xl">
          {HOME.sectors.heading}
        </h2>
        <div className="mt-8 grid gap-px border border-carbon/10 bg-carbon/10 sm:grid-cols-2 lg:grid-cols-5">
          {HOME.sectors.tiles.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="bg-paper px-5 py-7 no-underline hover:bg-dust/60"
            >
              <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-survey">
                Sector
              </span>
              <span className="mt-2 block text-[1.02rem] font-medium text-carbon">{t.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA — one primary action */}
      <section className="bg-aubergine text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5 py-16">
          <div>
            <h2 className="max-w-xl text-balance text-3xl">{HOME.closing.heading}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-dust">{HOME.closing.sub}</p>
          </div>
          <Link
            href={CTA.primary.href}
            className="bg-paper px-7 py-4 font-medium text-aubergine no-underline hover:bg-dust"
          >
            {CTA.primary.label} →
          </Link>
        </div>
      </section>
    </>
  );
}
