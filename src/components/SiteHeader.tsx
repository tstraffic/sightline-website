"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/nav";
import { SITE } from "@content/site";

/**
 * Title Block nav: bordered brand cell, mono uppercase links, Engineering
 * Services dropdown, phone cell, aubergine CTA cell, mobile MENU panel.
 * Draft-gated and footer-only items are excluded from the header.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const items = NAV.filter((i) => !i.draft && !i.footerOnly);
  const flat = items.flatMap((i) => (i.children ? i.children : [i]));

  return (
    <nav className="nav" aria-label="Main">
      <Link className="nav-brand" href="/" aria-label="Sightline Traffic Engineers — home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* v3.2 oxide-descriptor lockup, whitespace-cropped so it fills the cell */}
        <img
          src="/brand/Sightline_Logo_Horizontal_Light_Oxide_Tight.svg"
          alt="Sightline Traffic Engineers"
          width={288}
          height={72}
        />
      </Link>

      <div className="nav-links">
        {items
          .filter((i) => i.href !== "/")
          .map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-drop"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOpenDrop(null);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={openDrop === item.label}
                  onClick={() => setOpenDrop(item.label)}
                >
                  {item.label} ▾
                </button>
                {openDrop === item.label && (
                  <div className="nav-drop-panel">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setOpenDrop(null)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
      </div>

      <a className="nav-phone" href={SITE.phoneHref}>
        {SITE.phone}
      </a>

      <div className="nav-m">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav-m-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
        {open && (
          <div className="nav-m-panel" id="nav-m-panel">
            {flat.map((i) => (
              <Link key={i.href + i.label} href={i.href} onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} onClick={() => setOpen(false)}>
              {SITE.phone}
            </a>
          </div>
        )}
      </div>

      <Link className="nav-cta" href={CTA.primary.href}>
        {CTA.primary.label}
      </Link>
    </nav>
  );
}
