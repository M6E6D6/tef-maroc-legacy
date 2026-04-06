import { SERVICE_SLUGS } from "@/data/services-detail";
import { TRAINING_CATEGORY_SLUGS } from "@/data/trainings";

/**
 * Path suffixes after the locale segment (e.g. `/fr` + `/about` → `/fr/about`).
 * Used by `src/app/sitemap.ts` for `/sitemap.xml`.
 */
export const SITEMAP_PATH_SUFFIXES: string[] = [
  "",
  "/about",
  "/trainings",
  ...TRAINING_CATEGORY_SLUGS.map((slug) => `/trainings/${slug}`),
  "/services",
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
  "/contact",
];
