import type { Metadata } from "next";
import { PracticeLanding } from "@/components/PracticeLanding";
import { WORK_ZONE } from "@content/pages/work-zone-engineering";

export const metadata: Metadata = {
  title: "Work Zone Engineering",
  description:
    "TGS, staging sets, TMPs, barrier design and site audits for works on live road networks — prepared to TCAWS, AS 1742.3 and the Austroads Guide to Temporary Traffic Management.",
};

export default function Page() {
  return (
    <PracticeLanding
      data={{
        eyebrow: WORK_ZONE.eyebrow,
        h1: WORK_ZONE.h1,
        intro: [...WORK_ZONE.intro],
        registerTitle: "Practice register — what we issue",
        registerRev: "Pages 01–07",
        services: [...WORK_ZONE.services],
      }}
    />
  );
}
