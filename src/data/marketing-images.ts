/**
 * Local assets live in `public/images/`. Use `publicImage()` so spaces, `&`, and Unicode filenames are URL-safe.
 */
export function publicImage(filename: string): string {
  return `/images/${encodeURIComponent(filename)}`;
}

const heroSlides = [
  "gettyimages-1181032344-612x612.jpg",
  "hotellerie-restauration-lycee-lhil-lille-51-1024x683.jpg",
  "FORMATION-TAMUDA HOSPITALITY ACADEMY.png",
  "gettyimages-2149480352-612x612.jpg",
] as const;

/** Same order as `TRAINING_CATEGORY_SLUGS` / `trainingImageIndex` */
const trainingFilenames = [
  "FORMATION-Réception & Hospitalité.png",
  "FORMATION-Cuisine & Arts culinaires.png",
  "FORMATION-Pâtisserie.png",
  "FORMATION-Restaurant & Service.png",
  "FORMATION-Maintenance.png",
  "FORMATION- Hygiène.png",
  "FORMATION- Management HOTELIER.png",
] as const;

export const marketingImages = {
  hero: publicImage(heroSlides[0]),
  /** Full-bleed home hero carousel */
  heroGallery: heroSlides.map((f) => publicImage(f)),
  aboutPreview:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=82",
  aboutFacility:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=82",
  team: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=82",
  ],
  services: [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
  ],
  /** Same order as `TRAINING_CATEGORY_SLUGS` */
  /** Blog listing & article heroes — order matches `BLOG_SLUGS` in `blog-posts.ts` */
  blog: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=82",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=82",
  ],
  trainings: trainingFilenames.map((f) => publicImage(f)),
} as const;
