"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, CTA } from "@/lib/nav";
import { SITE } from "@content/site";

/**
 * Title Block nav: bordered brand cell, mono uppercase links, Engineering
 * Services dropdown, phone cell, aubergine CTA cell, mobile MENU panel.
 * Draft-gated and footer-only items are excluded from the header.
 *
 * The dropdown and mobile panels are always in the HTML and only toggled with
 * the `hidden` attribute (punch list D9), so every page link is present at
 * load for crawlers and for anyone without JavaScript.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const items = NAV.filter((i) => !i.draft && !i.footerOnly);
  const flat = items.flatMap((i) => (i.children ? i.children : [i]));

  return (
    <nav className="nav" aria-label="Main">
      <Link className="nav-brand" href="/" aria-label="Sightline Traffic Engineers - home">
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
                  onClick={() => setOpenDrop((v) => (v === item.label ? null : item.label))}
                >
                  {item.label} ▾
                </button>
                <div className="nav-drop-panel" hidden={openDrop !== item.label}>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setOpenDrop(null)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
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
        {/* tap-to-call beside Menu at phone width (D11) */}
        <a className="nav-m-call" href={SITE.phoneHref} aria-label={`Call ${SITE.phone}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"
            />
          </svg>
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav-m-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
        <div className="nav-m-panel" id="nav-m-panel" hidden={!open}>
          {flat.map((i) => (
            <Link key={i.href + i.label} href={i.href} onClick={() => setOpen(false)}>
              {i.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} onClick={() => setOpen(false)}>
            {SITE.phone}
          </a>
        </div>
      </div>

      <Link className="nav-cta" href={CTA.primary.href}>
        {CTA.primary.label}
      </Link>
    </nav>
  );
}
