import type { Metadata } from "next";
import Link from "next/link";
import { PEOPLE, QUALIFICATION_REGISTER, TEAM_INTRO, HIRING } from "@content/pages/team";
import { CTA } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Every Sightline report is prepared and signed by a named engineer, and every scheme by a named designer. Meet the register of people.",
};

/**
 * /team — kept as its own URL (matches the live site; Saadat, 4 Aug 2026).
 * About is the story and links here; Team is the people in detail.
 * Phase 0-level treatment — Phase 1 delivers the designed profile styling.
 */
export default function TeamPage() {
  return (
    <article>
      <header className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-dust/80">
            {TEAM_INTRO.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-tight md:text-4xl">
            {TEAM_INTRO.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dust">{TEAM_INTRO.sub}</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14" aria-label="The people">
        <div className="space-y-10">
          {PEOPLE.map((p) => (
            <div key={p.name} className="grid gap-6 border-b border-carbon/10 pb-10 md:grid-cols-[280px_1fr]">
              {/* Photo slot — renders from /public/team/ once files are added */}
              <div
                className="flex min-h-56 items-end justify-center bg-dust p-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-survey"
                role="img"
                aria-label={`${p.name} — photo to come`}
              >
                Photo — on site or at the board
              </div>
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-oxide">{p.role}</p>
                <h2 className="mt-2 text-2xl">{p.name}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.creds.map((c) => (
                    <span
                      key={c}
                      className="border border-carbon/20 px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-wide text-survey"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-carbon">{p.bio}</p>
                <dl className="mt-5 grid gap-px border border-carbon/10 bg-carbon/10 sm:grid-cols-3">
                  {p.signs.map((s) => (
                    <div key={s.label} className="bg-paper px-4 py-3">
                      <dt className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-survey">{s.label}</dt>
                      <dd className="mt-1 text-[0.88rem] font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14" aria-label="Qualification register">
        <h2 className="text-xl">Qualification register</h2>
        <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-survey">
          Certificates of currency on request
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-[0.95rem]">
            <thead>
              <tr>
                {["Ref", "Held by", "Qualification / registration", "Covers"].map((h) => (
                  <th
                    key={h}
                    className="bg-dust px-4 py-2.5 text-left font-mono text-[0.62rem] uppercase tracking-[0.18em] text-survey"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUALIFICATION_REGISTER.map((q) => (
                <tr key={q.ref} className="border-b border-carbon/10 align-top">
                  <td className="px-4 py-3 font-mono text-[0.78rem] text-oxide">{q.ref}</td>
                  <td className="px-4 py-3 font-medium">{q.who}</td>
                  <td className="px-4 py-3 text-survey">{q.qual}</td>
                  <td className="px-4 py-3 text-survey">{q.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-dust/50" aria-label="Open positions">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-balance text-xl">{HIRING.heading}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-survey">{HIRING.body}</p>
          </div>
          <dl className="content-start">
            {HIRING.details.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[110px_1fr] gap-3 border-b border-carbon/10 py-2.5 text-[0.9rem]">
                <dt className="pt-0.5 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-survey">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-aubergine">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12 text-paper">
          <div>
            <h2 className="text-xl">Meet us the useful way — on your project.</h2>
            <p className="mt-1 text-dust">The engineer who briefs you is the engineer who signs the report.</p>
          </div>
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
