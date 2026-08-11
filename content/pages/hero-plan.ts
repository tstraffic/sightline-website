export type HeroPlanPage = {
  asset: string;
  tab: string;
  tabLabel: string;
  toolbarLabel: string;
  marker: string;
  drawingTitle: string;
  pageNumber: string;
  status: string;
  stamp?: string;
  alt: string;
};

/**
 * Authorised ABG-A224-S2 drawing previews supplied by Saadat, 11 Aug 2026.
 * Page 01 is the zoomed-out overall plan; pages 02-04 are the three detailed
 * A1 sheets from the full preliminary set.
 */
export const HERO_PLAN = {
  reference: "ABG-A224-S2",
  project: "ABG-A224",
  controls: {
    pagesLabel: "Plan pages",
    replay: "Replay",
    inspect: "Drag or scroll",
  },
  fields: {
    project: "Project",
    status: "Drawing status",
    title: "Drawing title",
    page: "Page",
  },
  pages: [
    {
      asset: "/plans/abg-a224-s2-overall.webp",
      tab: "01",
      tabLabel: "Overall plan, page 1",
      toolbarLabel: "Overall - page 01 / 04",
      marker: "Overall",
      drawingTitle: "Overall plan - full corridor",
      pageNumber: "01/04",
      status: "Issued for approval",
      stamp: "Approval",
      alt: "ABG-A224-S2 authorised overall corridor plan, page 1 of 4",
    },
    {
      asset: "/plans/abg-a224-s2-detail-01.webp",
      tab: "02",
      tabLabel: "Detail sheet 1, page 2",
      toolbarLabel: "Detail 01 - page 02 / 04",
      marker: "Sheet 01",
      drawingTitle: "Overall plan - western corridor",
      pageNumber: "02/04",
      status: "Preliminary",
      alt: "ABG-A224-S2 authorised detailed plan sheet 1, page 2 of 4",
    },
    {
      asset: "/plans/abg-a224-s2-detail-02.webp",
      tab: "03",
      tabLabel: "Detail sheet 2, page 3",
      toolbarLabel: "Detail 02 - page 03 / 04",
      marker: "Sheet 02",
      drawingTitle: "Overall plan - central corridor",
      pageNumber: "03/04",
      status: "Preliminary",
      alt: "ABG-A224-S2 authorised detailed plan sheet 2, page 3 of 4",
    },
    {
      asset: "/plans/abg-a224-s2-detail-03.webp",
      tab: "04",
      tabLabel: "Detail sheet 3, page 4",
      toolbarLabel: "Detail 03 - page 04 / 04",
      marker: "Sheet 03",
      drawingTitle: "Overall plan - eastern intersection",
      pageNumber: "04/04",
      status: "Preliminary",
      alt: "ABG-A224-S2 authorised detailed plan sheet 3, page 4 of 4",
    },
  ] satisfies readonly HeroPlanPage[],
} as const;
