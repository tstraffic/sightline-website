import type { Metadata } from "next";
import Link from "next/link";
import { SECTORS_LANDING } from "@content/pages/landings";
import { SECTOR_TILES } from "@content/pages/sectors";
import { TitleBlockCta } from "@/components/TitleBlockCta";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Same engineering. Different problem to solve. Civil contractors, developers and architects, government and council, utilities, and events.",
};

export default function SectorsPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{SECTORS_LANDING.eyebrow}</div>
        <h1>{SECTORS_LANDING.h1}</h1>
        <p className="sub">{SECTORS_LANDING.intro}</p>
      </div>

      <section className="section" aria-label="Sector pages">
        <div className="cellgrid cols-5">
          {SECTOR_TILES.map((t) => (
            <Link key={t.href} href={t.href} className="cell">
              <span className="cell-tag">Sector</span>
              <h3>{t.label}</h3>
              <p>{t.line}</p>
              <span className="go">Read the page →</span>
            </Link>
          ))}
        </div>
      </section>

      <TitleBlockCta
        label="Sectors"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
