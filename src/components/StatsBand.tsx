import { STATS } from "@content/verified";

/**
 * Statistics band — compact dark band per the capability cover (04-brand DO
 * NOTs: never on a light block). Paper numerals, short oxide rule, dust labels.
 *
 * Truthfulness guardrail: only `verified: true` figures render in production.
 * `designPreview` is for the Phase 1 approval set only — candidate figures
 * with an explicit AWAITING VERIFICATION tag. TODO(verify:stats)
 */
export function StatsBand({ designPreview = false }: { designPreview?: boolean }) {
  const entries = Object.values(STATS).filter((s) => s.verified || designPreview);
  if (entries.length === 0) return null;

  // Public label = first sentence of the note only; the rest is internal guidance.
  const label = (note?: string) =>
    note ? note.split(/\.\s|\.$/)[0].replace(/\s*\(.*?\)/, "") : "";

  return (
    <div className="statsband">
      <div className="statsband-grid">
        {entries.map((s) => (
          <div key={s.value + s.note}>
            <span className="rule" aria-hidden="true" />
            <div className="n">{s.value}</div>
            <p className="l">{label(s.note)}</p>
          </div>
        ))}
      </div>
      {designPreview && entries.some((s) => !s.verified) && (
        <p className="preview-tag">Figures awaiting verification — design preview only, not for publication</p>
      )}
    </div>
  );
}
