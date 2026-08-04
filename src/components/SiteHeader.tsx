"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/nav";
import { BrandMark } from "./BrandMark";

/**
 * Seven-item nav per 00-INSTRUCTIONS with the Engineering Services dropdown.
 * Draft-gated items are filtered out until approved. Dropdown is keyboard
 * navigable: button toggles on click/Enter, links are real anchors.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const items = NAV.filter((i) => !i.draft && !i.footerOnly);

  return (
    <header className="sticky top-0 z-50 border-b border-carbon/20 bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Sightline Traffic Engineers — home">
          <BrandMark className="h-8 w-8" />
          <span className="leading-tight">
            <span className="block text-[1.05rem] font-medium text-carbon">Sightline</span>
            <span className="block font-mono text-[0.55rem] uppercase tracking-[0.28em] text-survey">
              Traffic engineers
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {items.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  type="button"
                  aria-expanded={dropdown}
                  onClick={() => setDropdown((v) => !v)}
                  className="cursor-pointer px-3 py-2 text-[0.92rem] text-carbon hover:text-oxide"
                >
                  {item.label} <span aria-hidden="true" className="text-survey">▾</span>
                </button>
                {dropdown && (
                  <div className="absolute left-0 top-full w-72 border border-carbon/20 bg-paper py-1 shadow-sm">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2.5 text-[0.9rem] text-carbon no-underline hover:bg-dust"
                        onClick={() => setDropdown(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[0.92rem] text-carbon no-underline hover:text-oxide"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={CTA.primary.href}
            className="ml-3 bg-aubergine px-5 py-2.5 text-[0.9rem] font-medium text-paper no-underline hover:bg-[#4c2f3d]"
          >
            {CTA.primary.label}
          </Link>
        </nav>

        <button
          type="button"
          className="ml-auto border border-carbon/30 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-carbon/20 bg-paper lg:hidden" aria-label="Main (mobile)">
          {items.flatMap((item) => (item.children ? item.children : [item])).map((i) => (
            <Link
              key={i.href + i.label}
              href={i.href}
              className="block border-b border-carbon/10 px-5 py-3 text-carbon no-underline"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}
          <Link
            href={CTA.primary.href}
            className="m-4 block bg-aubergine px-5 py-3 text-center font-medium text-paper no-underline"
            onClick={() => setOpen(false)}
          >
            {CTA.primary.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
