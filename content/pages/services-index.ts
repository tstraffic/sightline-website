import type { ServicePageData } from "./types";
import { TGS_TCP } from "./tgs-traffic-control-plans";
import { SITE_AUDITS } from "./site-audits";
import { STAGING, TMP, COMPLEX_TMP, BARRIER, SWEPT_PATH } from "./work-zone-services";
import { MODELLING, SIDRA, TIA } from "./transport-services";
import { TIS, CARPARK_DEMAND, AS2890, DRIVEWAY, SIGHT_LINES, VEHICLE_ACCESS, SURVEYS } from "./parking-services";
import { ROL, COUNCIL_PERMITS, STA_POLICE, COMMUNITY } from "./approvals-services";

/**
 * Registry of every LIVE service page, keyed by URL slug (URLs exactly as
 * listed in 03-build-list.md). Hidden drafts (08, 12, 13, 21) are NOT here —
 * they join in Phase 3 with draft handling (noindex, watermark, out of nav).
 */
export const SERVICES: Record<string, ServicePageData> = Object.fromEntries(
  [
    TGS_TCP, // 01
    STAGING, // 02
    TMP, // 03
    COMPLEX_TMP, // 04
    BARRIER, // 05
    SWEPT_PATH, // 06
    SITE_AUDITS, // 07
    MODELLING, // 09
    SIDRA, // 10
    TIA, // 11
    TIS, // 14
    CARPARK_DEMAND, // 15
    AS2890, // 16
    DRIVEWAY, // 17
    SIGHT_LINES, // 18
    VEHICLE_ACCESS, // 19
    SURVEYS, // 20
    ROL, // 22
    COUNCIL_PERMITS, // 23
    STA_POLICE, // 24
    COMMUNITY, // 25
  ].map((s) => [s.slug, s]),
);
