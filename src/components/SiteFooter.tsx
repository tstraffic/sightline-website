import Link from "next/link";
import { NAV, CTA } from "@/lib/nav";

export function SiteFooter() {
  const items = NAV.filter((i) => !i.draft && i.href !== "/");
  return (
    <footer className="bg-aubergine text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          {/* Reversed lockup on the aubergine ground */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/Sightline_Logo_Horizontal_Reversed.svg"
            alt="Sightline Traffic Engineers"
            width={195}
            height={48}
            className="h-12 w-auto"
          />
          <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-dust/80">
            Designed to standard.
          </p>
          <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-dust">
            {CTA.contactLine}
          </p>
        </div>
        <nav className="grid content-start gap-2" aria-label="Footer">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="text-[0.9rem] text-dust no-underline hover:text-paper">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="content-start font-mono text-[0.72rem] leading-loose text-dust/90">
          {/* TODO(content): confirm phone/email/address for the new site before launch */}
          <p>NSW, Australia</p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 font-mono text-[0.62rem] uppercase tracking-wider text-dust/70">
          <span>© {new Date().getFullYear()} Sightline Traffic Engineers</span>
          <span>Independent traffic and transport engineering</span>
        </div>
      </div>
    </footer>
  );
}
