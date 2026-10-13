import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>; the deploy workflow sets this.
// Locally (and on a custom domain) it stays empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  agentRules: false,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
