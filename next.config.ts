import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH ?? "/zolano-awake-clone";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // GitHub Pages project URL; set BASE_PATH="" for a root deploy.
  ...(basePath ? { basePath } : {}),
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
