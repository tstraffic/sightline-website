export type HeroPlanPage = {
  asset: string;
  /** Tiny base64 WebP shown while the sheet loads (next/image placeholder). */
  blur: string;
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
      blur:
        "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAQBACdASoYABEAPu1krE4ppaSiKA1RMB2JZwAALc+MvMI1PfBzY3MvAAD+4abxfp2M2ZlJS0SHe/rACFWdNVP7XY5YjU4BzmhQVj2QwHssBOTe1P3dEP1yj4yWLqbg2Vqhw3rhUNhBZDFuUtP8tRM3iEdn6CwAAAA=",
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
      blur:
        "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAQBACdASoYABEAPu1orlCppaQiqAqpMB2JZwAALkIvEonZ+gWRS+H5AAD+8iDBlWTGejo4SrnkPnjaHJJNStL/eekPVyQ9hADjwyvRHBt0bWR7dPUM8mOhsFDFH2DqZ3kltf0Ty0V66eYXNmEZy90NRvroYAAA",
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
      blur:
        "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQBACdASoYABEAPu1eq1AppKOisBgIATAdiWcAAC50Xxil474cjPLP0AD+8IdPn7X6qdOGDuJa1bdBqfn9hSTbqV4KfxU/OmPUy1Y2k+7NHh5VczJeWx/3j1ExfruO0zpr4AAA",
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
      blur:
        "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwBACdASoYABEAPu1qrlCppaQiqAqpMB2JZwAALniAaNa6v0cAnaNqmgAA/vIuF4C+u3+RH2uAX8L/rR69X2B2K54Uj+CREHMvqaVraQav1gpxbHlOir0AUgmsqV0fZiB9rYvrNCvMj0h1peAAAA==",
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
