/** Mark geometry from the approved brand pack (Sightline_Icon_Primary.svg). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path d="M21.5 102 L63.5 18 L75.17 18 L54.17 102 Z" fill="#3E2632" />
      <path d="M65.83 102 L86.83 18 L98.5 18 L98.5 102 Z" fill="#A34652" />
    </svg>
  );
}
