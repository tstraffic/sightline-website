import Link from "next/link";
import { SITE } from "@content/site";

/** Thin mono strip at the sheet's foot — Title Block system. */
export function SiteFooter() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} {SITE.legalName}</div>
      <div>{SITE.tagline}</div>
      <a href={SITE.phoneHref}>{SITE.phone}</a>
      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      <Link href="/team">Team</Link>
    </footer>
  );
}
