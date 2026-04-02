import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const nm = (...parts: string[]) => path.join(projectRoot, "node_modules", ...parts);

const nextConfig: NextConfig = {
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
