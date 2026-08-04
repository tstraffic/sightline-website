import { STATS } from "@content/verified";

/**
 * Statistics band — compact dark band on the continuous Aubergine field, per
 * the capability cover (04-brand DO NOTs: never move it to a light block).
 * Paper numerals with a short oxide rule; labels in Dust.
 *
 * Truthfulness guardrail: only `verified: true` figures render in production.
 * `designPreview` exists solely for the Phase 1 approval set — it shows the
 * candidate figures with an explicit AWAITING VERIFICATION tag. Remove the
 * prop (or verify the stats) before launch. TODO(verify:stats)
 */
export function StatsBand({ designPreview = false }: { designPreview?: boolean }) {
  const entries = Object.values(STATS).filter((s) => s.verified || designPreview);
  if (entries.length === 0) return null;

  // Public label = first sentence of the note only; the rest is internal guidance.
  const label = (note?: string) =>
    note ? note.split(/\.\s|\.$/)[0].replace(/\s*\(.*?\)/, "") : "";

  return (
    <div className="border-t border-paper/15 bg-aubergine text-paper">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {entries.map((s) => (
          <div key={s.value + s.note}>
            <span className="block h-0.5 w-7 bg-oxide" aria-hidden="true" />
            <div className="mt-3 font-mono text-4xl tabular-nums">{s.value}</div>
            <p className="mt-2 max-w-[24ch] text-[0.88rem] leading-snug text-dust">{label(s.note)}</p>
          </div>
        ))}
      </div>
      {designPreview && entries.some((s) => !s.verified) && (
        <p className="mx-auto max-w-6xl px-5 pb-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-dust/60">
          Figures awaiting verification — design preview only, not for publication
        </p>
      )}
    </div>
  );
}
