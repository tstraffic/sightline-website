import type { Metadata } from "next";
import { PracticeLanding } from "@/components/PracticeLanding";
import { DEV_PARKING_LANDING } from "@content/pages/landings";

export const metadata: Metadata = {
  title: "Development & Parking Engineering",
  description:
    "TIS and TIA reporting, carpark demand assessments, AS 2890 compliance certification, driveway design, sightline assessments and vehicle access reviews.",
};

export default function Page() {
  return <PracticeLanding data={DEV_PARKING_LANDING} />;
}
