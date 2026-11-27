import { NextResponse } from "next/server";

/**
 * Shared reply for the three form handlers (punch list D19).
 *
 * The forms post over fetch when JavaScript is running and expect JSON. When
 * JavaScript has failed to load they post as an ordinary navigation
 * (method="post" action="/api/…"), and a JSON body would land in front of the
 * person as raw text, so a navigation gets a 303 to /thank-you instead.
 */
export function isNavigation(req: Request) {
  const mode = req.headers.get("sec-fetch-mode");
  if (mode) return mode === "navigate";
  const accept = req.headers.get("accept") ?? "";
  return accept.includes("text/html") && !accept.includes("application/json");
}

export function formReply(req: Request, body: Record<string, unknown>, form: string) {
  if (isNavigation(req)) {
    return NextResponse.redirect(new URL(`/thank-you?form=${form}`, req.url), 303);
  }
  return NextResponse.json(body);
}
