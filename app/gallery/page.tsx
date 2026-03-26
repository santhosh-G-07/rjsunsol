import type { Metadata } from "next";
import GalleryHeroSection from "@/components/sections/gallery/GalleryHeroSection";
import GalleryGridSection from "@/components/sections/gallery/GalleryGridSection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery | RJ Sunsol Green Energy",
  description:
    "Explore RJ Sunsol Green Energy's project gallery — real photos from real solar installations across Tamil Nadu and Andhra Pradesh.",
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <GalleryHeroSection />
      <GalleryGridSection />
      <CTABanner />
    </main>
  );
}
