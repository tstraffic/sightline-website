import type { Metadata } from "next";
import { PracticeLanding } from "@/components/PracticeLanding";
import { TRANSPORT_LANDING } from "@content/pages/landings";

export const metadata: Metadata = {
  title: "Transport & Network Engineering",
  description:
    "SIDRA and Aimsun modelling, traffic impact assessment and data collection — calibrated models and observed data, to the relevant road authority's guidelines.",
};

export default function Page() {
  return <PracticeLanding data={TRANSPORT_LANDING} />;
}
