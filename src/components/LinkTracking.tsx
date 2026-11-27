"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Conversion events for phone and email links (punch list D7). One delegated
 * listener on the document, so every tel: and mailto: link on the site counts
 * without each component having to know about analytics.
 */
export function LinkTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("phone_link_clicked");
      else if (href.startsWith("mailto:")) track("email_link_clicked");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
