import { NextResponse } from "next/server";

/** Stubbed capability-statement request handler — same email-delivery needs
 *  as /api/enquiry. Once wired, this should email the current capability
 *  statement PDF (or notify the team to send it personally). */
export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot
  console.log("[capability stub]", [...form.keys()].join(", "));
  return NextResponse.json({ ok: true, stub: true });
}
