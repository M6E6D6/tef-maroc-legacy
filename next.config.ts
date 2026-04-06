import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const nm = (...parts: string[]) => path.join(projectRoot, "node_modules", ...parts);

const nextConfig: NextConfig = {
  // Mitigates React 19 + Next 16 dev hydration mismatches around streaming metadata (MetadataWrapper).
  // Re-enable for stricter double-render checks once you verify dev is clean.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Inline CSS in production only: in dev, inlineCss + streaming metadata can diverge SSR vs client (hydration error on MetadataWrapper).
  experimental: {
    ...(process.env.NODE_ENV === "production" ? { inlineCss: true as const } : {}),
  },
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: nm("tailwindcss"),
      "@tailwindcss/postcss": nm("@tailwindcss", "postcss"),
      "@tailwindcss/node": nm("@tailwindcss", "node"),
      "@tailwindcss/oxide": nm("@tailwindcss", "oxide"),
    },
  },
  webpack: (config) => {
    const localNm = path.join(projectRoot, "node_modules");
    const existing = config.resolve?.modules;
    config.resolve = config.resolve ?? {};
    config.resolve.modules = [
      localNm,
      ...(Array.isArray(existing) ? existing : ["node_modules"]),
    ];
    return config;
  },
};

export default nextConfig;
