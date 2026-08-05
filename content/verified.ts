/**
 * Truthfulness registry (CLAUDE.md guardrails). Every factual claim that has
 * not been confirmed by Sightline lives here with `verified: false` and MUST
 * NOT render on public pages until flipped. Do not resolve open items in code.
 */

export type VerifiedValue<T> = {
  value: T;
  verified: boolean;
  /** Open-item reference in 05-migration-map.md, where applicable. */
  openItem?: string;
  note?: string;
};

/** Capability statistics. Saadat reset the band for new-firm positioning
 *  (5 Aug 2026): 300+ and 1 day kept and confirmed for publication; the
 *  years/LGA figures retired from display; scope + team register added
 *  (both already-verified facts: D2 decision, published /team page). */
export const STATS: Record<string, VerifiedValue<string>> = {
  schemesImplemented: {
    value: "300+",
    verified: true,
    note: "Schemes implemented alongside delivery teams. Confirmed for publication by Saadat, 5 Aug 2026.",
  },
  jurisdictions: {
    value: "NSW + ACT",
    verified: true,
    note: "The jurisdictions we design for and secure approvals in. D2 decision, 5 Aug 2026.",
  },
  internalCheck: {
    value: "100%",
    verified: true,
    note: "Of documents through an internal design check before they are issued. Published process claim (About page / Rev 3 page 02 FAQ).",
  },
  feeTurnaround: {
    value: "1 day",
    verified: true,
    note: "To a fixed written fee for standard enquiries. Confirmed for publication by Saadat, 5 Aug 2026.",
  },
  // Retired from the stats band (new-firm positioning) — kept for the
  // capability statement should they verify later:
  yearsExperience: {
    value: "14",
    verified: false,
    note: "Years of road and traffic management experience (engineers', not firm age). Not displayed.",
  },
  lgasWorked: {
    value: "28",
    verified: false,
    note: "LGAs worked across Greater Sydney and the Illawarra. Not displayed.",
  },
};

/** Credential strip — only verified items render (05-migration-map, Homepage §2). */
export const CREDENTIALS: VerifiedValue<string>[] = [
  { value: "Qualified traffic engineers", verified: true },
  { value: "TfNSW-aligned documentation", verified: true },
  { value: "AS 1742.3 | AS 2890 | TCAWS", verified: true },
  { value: "NER / CPEng", verified: false, openItem: "D6" },
  { value: "NSW Government prequalified", verified: false, openItem: "D6" },
];

/** Open technical claims — keep source wording until confirmed. */
export const CLAIMS = {
  sweptPathSoftware: {
    value: "vehicle tracking software", // unadorned until tool name confirmed
    verified: false,
    openItem: "V4",
    note: "Likely AutoTURN — do not name until confirmed.",
  } satisfies VerifiedValue<string>,
  rsaAccreditation: {
    value: "",
    verified: false,
    openItem: "D3",
    note: "In-house Austroads-accredited auditor vs subcontracted — gates page 08 claims and the 26c route card.",
  } satisfies VerifiedValue<string>,
  geographicScope: {
    value: "NSW & ACT",
    verified: true,
    openItem: "D2",
    note: "Confirmed by Saadat 5 Aug 2026. Applied: hero, layout meta, page 01 intro, page 09 jurisdictions (VicRoads dropped), page 23 ACT statute labelled.",
  } satisfies VerifiedValue<string>,
  staTerminology: {
    value: "State Transit Authority (STA)",
    verified: false,
    openItem: "V1",
    note: "Possibly legacy naming — verify with TMC contacts. Do not rename without confirmation.",
  } satisfies VerifiedValue<string>,
  rolTrigger: {
    value: "near a traffic light",
    verified: false,
    openItem: "V2",
    note: "Confirm whether to state the precise TMC trigger (commonly within 100 m of traffic signals).",
  } satisfies VerifiedValue<string>,
  tmpQualificationName: {
    value: "Prepare a Work Zone Traffic Management Plan",
    verified: false,
    openItem: "V3",
    note: "Confirm current name under the TfNSW TTM training framework (page 03 FAQ).",
  } satisfies VerifiedValue<string>,
};

/** About-page inputs (D6) — nothing renders until supplied and verified. */
export const ABOUT_INPUTS = {
  engineers: [] as { name: string; role: string; qualifications: string[]; verified: boolean }[],
  piInsurance: { value: "", verified: false, openItem: "D6" } satisfies VerifiedValue<string>,
};
