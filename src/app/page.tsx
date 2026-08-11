import Link from "next/link";
import { HOME } from "@content/pages/home";
import { CREDENTIALS } from "@content/verified";
import { CTA } from "@/lib/nav";
import { AccessDiagram } from "@/components/AccessDiagram";
import { StatsBand } from "@/components/StatsBand";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { DecoderForm } from "@/components/DecoderForm";
import { CapabilityRequestModal } from "@/components/CapabilityRequestModal";

/**
 * Homepage — Title Block treatment. Structure per Copy Pass 1: hero, stats,
 * credentials, Why Sightline, four engineering practices, approvals as a
 * supporting section, condition decoder, sectors, title-block CTA.
 */
export default function HomePage() {
  const confirmed = CREDENTIALS.filter((c) => c.verified);
  return (
    <>
      {/* Hero — copy + drawing panel */}
      <header className="hero">
        <div className="hero-copy">
          <div className="dwgno">{HOME.hero.eyebrow}</div>
          <h1>
            {HOME.hero.h1Line1}
            <br />
            <em>{HOME.hero.h1Line2}</em>
          </h1>
          <p className="sub">{HOME.hero.sub}</p>
          <p className="sub">{HOME.hero.lifecycle}</p>
          <div className="hero-actions">
            <Link className="btn btn-oxide" href={CTA.primary.href}>
              {CTA.primary.label} →
            </Link>
            <Link className="btn btn-dark" href={CTA.secondary.href}>
              {CTA.secondary.label}
            </Link>
            <CapabilityRequestModal variant="button" />
          </div>
          <div className="hero-note">{HOME.hero.note}</div>
        </div>
        <div className="hero-draw">
          <AccessDiagram />
          {/* honest labels only — no invented drawing numbers (brand §7) */}
          <div className="draw-caption">
            <div><b>Drawing</b>Sample vehicle access assessment</div>
            <div><b>Reference</b>AS 2890 series · Council DCP</div>
            <div><b>Scale</b>NTS · illustrative</div>
            <div><b>Status</b>For approval</div>
          </div>
        </div>
      </header>

      <StatsBand />

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
              {"href" in p && (
                <p className="!mt-3">
                  <Link href={p.href} className="font-medium !text-aubergine no-underline hover:!text-oxide">
                    {p.linkLabel}
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

      {/* SHT 02 — the four engineering practices */}
      <section className="section" aria-labelledby="pillars">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="pillars">{HOME.whatWeDo.heading}</h2>
          <span className="sec-rev">{HOME.whatWeDo.rev}</span>
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
        {/* Approvals sits beneath the engineering practices, not alongside them */}
        <Link href={HOME.supporting.href} className="cell supporting-cell">
          <span className="cell-tag">{HOME.supporting.label}</span>
          <h3>{HOME.supporting.title}</h3>
          <p>{HOME.supporting.text}</p>
          <span className="go">View approvals support →</span>
        </Link>
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
