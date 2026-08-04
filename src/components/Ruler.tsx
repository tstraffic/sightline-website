/** Chainage ruler across the sheet top — Title Block signature device. */
export function Ruler() {
  const marks = Array.from({ length: 12 }, (_, i) => i * 20);
  return (
    <div className="ruler" aria-hidden="true">
      {marks.map((m) => (
        <span key={m}>CH {m}</span>
      ))}
    </div>
  );
}
