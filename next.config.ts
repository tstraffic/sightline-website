import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-first marketing site targeting Vercel (per CLAUDE.md).
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Copy Pass 1 restructured the practices; the old landing URLs redirect
      // permanently. Individual service-page URLs are unchanged.
      {
        source: "/development-parking-engineering",
        destination: "/development-traffic-engineering",
        permanent: true,
      },
      {
        source: "/work-zone-engineering",
        destination: "/construction-traffic-engineering",
        permanent: true,
      },
      {
        source: "/transport-network-engineering",
        destination: "/traffic-modelling-network-assessment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
