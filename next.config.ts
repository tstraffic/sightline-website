import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-first marketing site targeting Vercel (per CLAUDE.md).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
