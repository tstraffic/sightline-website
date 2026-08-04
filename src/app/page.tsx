import Link from "next/link";
import { HOME } from "@content/pages/home";
import { CREDENTIALS } from "@content/verified";
import { CTA } from "@/lib/nav";
import { HeroDiagram } from "@/components/HeroDiagram";
import { StatsBand } from "@/components/StatsBand";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { DecoderForm } from "@/components/DecoderForm";

/**
 * Homepage — Phase 1 rev B: Title Block treatment (Saadat's approval call),
 * new structure per 05-migration-map: hero, statistics band, credential strip
 * (confirmed items only), Why Sightline, four equal pillars, condition
 * decoder, sector tiles, title-block CTA.
 */
export default function HomePage() {
  const confirmed = CREDENTIALS.filter((c) => c.verified);
  return (
    <>
      {/* Hero — copy + TGS drawing panel */}
      <header className="hero">
        <div className="hero-copy">
          <div className="dwgno">{HOME.hero.eyebrow}</div>
          <h1>
            Designed to <em>standard.</em>
          </h1>
          <p className="sub">{HOME.hero.sub}</p>
          <div className="hero-actions">
            <Link className="btn btn-solid" href={CTA.primary.href}>
              {CTA.primary.label} →
            </Link>
            <Link className="btn btn-ghost" href={CTA.secondary.href}>
              {CTA.secondary.label}
            </Link>
          </div>
          <div className="hero-note">
            Send the drawings — a written scope comes back with a fixed fee.
          </div>
        </div>
        <div className="hero-draw">
          <HeroDiagram />
          {/* honest labels only — no invented drawing numbers (brand §7) */}
          <div className="draw-caption">
            <div><b>Drawing</b>Sample TGS extract</div>
            <div><b>Standard</b>AS 1742.3 · TCAWS</div>
            <div><b>Scale</b>NTS · illustrative</div>
            <div><b>Status</b>For approval</div>
          </div>
        </div>
      </header>

      {/* Statistics band — dark, per the capability cover; preview until verified */}
      <StatsBand designPreview />

      {/* Credential strip — confirmed items only */}
      <div className="credstrip" aria-label="Credentials">
        {confirmed.map((c) => (
          <span key={c.value}>{c.value}</span>
        ))}
      </div>

      {/* SHT 01 — Why Sightline */}
      <section className="section" aria-labelledby="why">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="why">Why Sightline</h2>
          <span className="sec-rev">Checked before issue</span>
        </div>
        <div className="pad">
          <h3 className="max-w-2xl text-balance text-2xl md:text-3xl">{HOME.why.heading}</h3>
          <p className="mt-4 max-w-2xl text-[1.02rem] text-survey">{HOME.why.intro}</p>
        </div>
        <div className="cellgrid cols-3" style={{ borderTop: "1px solid var(--rule-soft)" }}>
          {HOME.why.points.map((p) => (
            <div key={p.lead}>
              <h3 className="!mt-0">{p.lead}</h3>
              <p>{p.text}</p>
              {"href" in p && p.href && (
                <p className="!mt-3">
                  <Link href={p.href} className="font-medium !text-aubergine no-underline hover:!text-oxide">
                    Temporary barrier design →
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="pad !py-6 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-survey">
          {HOME.why.closing}
        </p>
      </section>

      {/* SHT 02 — the four practices, equal weight */}
      <section className="section" aria-labelledby="pillars">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="pillars">What we do</h2>
          <span className="sec-rev">Four practices · one standard</span>
        </div>
        <div className="cellgrid cols-2">
          {HOME.pillars.map((p) => (
            <Link key={p.ref} href={p.href} className="cell">
              <span className="cell-tag">P—{p.ref}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="go">View the practice →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SHT 03 — the condition decoder */}
      <section className="section" aria-labelledby="decoder">
        <div className="sec-head">
          <span className="sec-num">SHT 03</span>
          <h2 id="decoder">The condition decoder</h2>
          <span className="sec-rev">Free · same business day</span>
        </div>
        <div className="split w-7-5">
          <div className="panel">
            <h3 className="max-w-xl text-balance text-2xl">{HOME.decoder.heading}</h3>
            {HOME.decoder.body.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 max-w-xl leading-relaxed text-survey">
                {p}
              </p>
            ))}
            <div className="mt-7">
              {HOME.decoder.points.map((pt) => (
                <div key={pt.lead} className="spec-row">
                  <b>{pt.lead}</b>
                  <span>{pt.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-side">
            <DecoderForm title={HOME.decoder.formTitle} />
          </div>
        </div>
      </section>

      {/* SHT 04 — sectors */}
      <section className="section" aria-labelledby="sectors">
        <div className="sec-head">
          <span className="sec-num">SHT 04</span>
          <h2 id="sectors">Who we work with</h2>
          <span className="sec-rev">{HOME.sectors.heading}</span>
        </div>
        <div className="cellgrid cols-5">
          {HOME.sectors.tiles.map((t) => (
            <Link key={t.href} href={t.href} className="cell">
              <span className="cell-tag">Sector</span>
              <h3>{t.label}</h3>
              <span className="go">→</span>
            </Link>
          ))}
        </div>
      </section>

      <TitleBlockCta
        label="Start here"
        heading={HOME.closing.heading}
        notes={[
          "1. Site address",
          "2. Architectural or civil plans",
          "3. A description of the works",
        ]}
      />
    </>
  );
}
