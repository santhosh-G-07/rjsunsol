/**
 * Central mapping of all image paths used on the site.
 * Every image reference resolves to a file under public/.
 *
 * Required in public/:
 * - public/images/logo.webp, hero-bg-aerial.webp, section-bg-*.webp, gallery-hero-aerial.webp (sunset background uses gallery image)
 * - public/thunder.png (favicon)
 * - public/*.webp for gallery images (see lib/gallery-images.generated.ts; run npm run generate:gallery after adding images)
 */

import { GALLERY_IMAGES } from "./gallery-images.generated";

// ─── Paths under public/ (no leading slash in key = path from public/)
export const ASSET_PATHS = {
  // Brand & UI
  logo: "/images/logo.webp",
  favicon: "/thunder.png",

  // Hero & section backgrounds
  heroBgAerial: "/images/hero-bg-aerial.webp",
  heroBgAerialMobile: "/images/hero-bg-aerial-mobile.webp",
  sectionBgAbstract: "/images/section-bg-abstract.webp",
  sectionBgBluehour: "/images/section-bg-bluehour.webp",
  sectionBgGround: "/images/section-bg-ground.webp",
  sectionBgNight: "/images/section-bg-night.webp",
  contactHeroBg: "/images/contact-hero-bg.webp",
  galleryHeroAerial: "/images/gallery-hero-aerial.webp",

  // Decorative / one-off (uses gallery image file from public/images/)
  sunsetPanelsWide: "/images/solar-farms_sunset-panels-wide.webp",

  // In public/images/ (no category prefix)
  scadaPanel: "/images/scada-panel.webp",
  weatherStation: "/images/weather-station.webp",
} as const;

/** Slugs that point to site assets (e.g. /images/) rather than gallery. Used by marquee and GALLERY_PATHS. */
const NON_GALLERY_SLUG_PATHS: Record<string, string> = {
  "scada-panel": ASSET_PATHS.scadaPanel,
  "weather-station": ASSET_PATHS.weatherStation,
};

/** Resolve a gallery slug to full path. Prefers GALLERY_IMAGES, then NON_GALLERY_SLUG_PATHS. */
function getGalleryPathBySlug(slug: string): { src: string; alt: string } {
  const assetPath = NON_GALLERY_SLUG_PATHS[slug];
  if (assetPath) {
    const alt = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return { src: assetPath, alt };
  }
  const found = GALLERY_IMAGES.find((img) => img.src.endsWith(`_${slug}.webp`));
  if (found) return { src: found.src, alt: found.alt };
  return { src: "/images/installation_hero-construction.webp", alt: slug };
}

/** Marquee row 1 slugs (OUR WORK IN ACTION strip). */
const MARQUEE_ROW1_SLUGS = [
  "hero-construction",
  "solar-panels-close",
  "solar-farm-road",
  "workers-install",
  "cable-trench",
  "solar-farm-sunset",
  "scada-panel",
  "weather-station",
] as const;

/** Marquee row 2 slugs. */
const MARQUEE_ROW2_SLUGS = [
  "mounting-structure",
  "panel-blue-sky",
  "sunset-panels-close",
  "solar-farm-golden",
  "cable-laying-team",
  "moonrise-solar",
  "team-site",
  "trench-team",
] as const;

/** Resolved marquee images for row 1 (paths from public/images). */
export const MARQUEE_ROW1 = MARQUEE_ROW1_SLUGS.map((slug) => getGalleryPathBySlug(slug));

/** Resolved marquee images for row 2. */
export const MARQUEE_ROW2 = MARQUEE_ROW2_SLUGS.map((slug) => getGalleryPathBySlug(slug));

/** Paths for scada/weather (live in public/images/). Used by services, constants, projects gallery. */
export const GALLERY_PATHS = {
  scadaPanel: ASSET_PATHS.scadaPanel,
  weatherStation: ASSET_PATHS.weatherStation,
} as const;

const GALLERY_SIZE = { width: 800, height: 600 } as const;

/** Projects page gallery: images from public/images. */
export const PROJECTS_GALLERY_IMAGES: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/images/installation_hero-construction.webp", alt: "Hero construction", ...GALLERY_SIZE },
  { src: "/images/installation_solar-panels-close.webp", alt: "Solar panels close", ...GALLERY_SIZE },
  { src: "/images/installation_mounting-structure.webp", alt: "Mounting structure", ...GALLERY_SIZE },
  { src: "/images/solar-farms_sunset-panels-wide.webp", alt: "Sunset panels wide", ...GALLERY_SIZE },
  { src: "/images/team_team-site.webp", alt: "Team on site", ...GALLERY_SIZE },
  { src: "/images/solar-farms_solar-farm-road.webp", alt: "Solar farm road", ...GALLERY_SIZE },
  { src: "/images/installation_workers-install.webp", alt: "Workers installing", ...GALLERY_SIZE },
  { src: "/images/installation_panel-blue-sky.webp", alt: "Panel blue sky", ...GALLERY_SIZE },
  { src: "/images/civil-works_cable-trench.webp", alt: "Cable trench", ...GALLERY_SIZE },
  { src: "/images/solar-farms_sunset-panels-close.webp", alt: "Sunset panels close", ...GALLERY_SIZE },
  { src: "/images/solar-farms_solar-farm-sunset.webp", alt: "Solar farm sunset", ...GALLERY_SIZE },
  { src: "/images/civil-works_cable-laying-team.webp", alt: "Cable laying team", ...GALLERY_SIZE },
  { src: "/images/civil-works_trench-team.webp", alt: "Trench team", ...GALLERY_SIZE },
  { src: "/images/solar-farms_solar-farm-golden.webp", alt: "Solar farm golden", ...GALLERY_SIZE },
  { src: "/images/solar-farms_solar-farm-dusk.webp", alt: "Solar farm dusk", ...GALLERY_SIZE },
  { src: GALLERY_PATHS.weatherStation, alt: "Weather station", ...GALLERY_SIZE },
  { src: GALLERY_PATHS.scadaPanel, alt: "SCADA panel", ...GALLERY_SIZE },
  { src: "/images/solar-farms_moonrise-solar.webp", alt: "Moonrise solar", ...GALLERY_SIZE },
];
