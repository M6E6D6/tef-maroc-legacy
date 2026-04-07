import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Tamuda",
    description: siteConfig.description,
    start_url: `/${siteConfig.defaultLocale}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    lang: siteConfig.defaultLocale,
    icons: [
      {
        src: "/next.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
