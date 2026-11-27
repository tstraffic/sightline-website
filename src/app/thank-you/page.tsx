import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Enquiry received",
  robots: { index: false, follow: false },
};

/**
 * Landing page for the no-JavaScript form fallback (punch list D19). When a
 * form posts as a plain navigation, the API route redirects here instead of
 * returning JSON to a page nobody is reading.
 */
export default function ThankYouPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="pagehead-copy">
          <div className="dwgno">Enquiry · Received</div>
          <h1>Received. We will be in touch.</h1>
          <p className="sub">
            Your enquiry has reached the practice. If it is urgent, call {SITE.phone} during
            business hours ({SITE.hours}).
          </p>
          <p className="sub">
            <Link href="/">Back to the homepage</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
