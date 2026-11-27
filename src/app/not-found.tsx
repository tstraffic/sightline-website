import type { Metadata } from "next";
import Link from "next/link";
import { PRACTICES } from "@content/pages/practices";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Branded 404 (punch list D15): routes the visitor back to the services and
 *  the contact page instead of the framework default. */
export default function NotFound() {
  return (
    <article>
      <div className="pagehead">
        <div className="pagehead-copy">
          <div className="dwgno">Sheet not found · 404</div>
          <h1>That page is not in the drawing register.</h1>
          <p className="sub">
            The address may have changed, or the link you followed is out of date. The pages below
            cover everything the practice issues.
          </p>
        </div>
      </div>

      <section className="section" aria-labelledby="nf-services">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="nf-services">Engineering services</h2>
        </div>
        <div className="cellgrid cols-3">
          {Object.values(PRACTICES).map((p) => (
            <Link key={p.href} href={p.href} className="cell">
              <span className="cell-tag">Practice</span>
              <h3>{p.label}</h3>
              <span className="go">View the practice →</span>
            </Link>
          ))}
          <Link href="/contact" className="cell">
            <span className="cell-tag">Contact</span>
            <h3>Request a fee proposal</h3>
            <span className="go">Send us the drawings →</span>
          </Link>
        </div>
        <p className="pad fine">
          Or call <a href={SITE.phoneHref}>{SITE.phone}</a> and we will point you to the right page.
        </p>
      </section>
    </article>
  );
}
