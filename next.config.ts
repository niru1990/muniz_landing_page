import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isGitHubPages ? "/muniz_landing_page" : "",
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
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
