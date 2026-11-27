import type { Metadata } from "next";
import { PracticeLanding } from "@/components/PracticeLanding";
import { APPROVALS_LANDING } from "@content/pages/landings";
import { PRACTICES } from "@content/pages/practices";

export const metadata: Metadata = {
  title: PRACTICES.approvals.metaTitle,
  alternates: { canonical: "/approvals" },
  description:
    "ROL permits, council applications, police and transport approvals, and community engagement - the approvals pathway run in parallel with your programme.",
};

export default function Page() {
  return <PracticeLanding data={APPROVALS_LANDING} href="/approvals" />;
}
