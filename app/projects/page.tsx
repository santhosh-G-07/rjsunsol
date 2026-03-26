import type { Metadata } from "next";
import ProjectsHeroSection from "@/components/sections/projects/ProjectsHeroSection";
import ProjectsStatsSection from "@/components/sections/projects/ProjectsStatsSection";
import ProjectsHighlightSection from "@/components/sections/projects/ProjectsHighlightSection";
import ProjectsGallerySection from "@/components/sections/projects/ProjectsGallerySection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Projects | RJ Sunsol Green Energy",
  description:
    "Explore RJ Sunsol Green Energy's portfolio of completed solar projects — 100+ MW delivered across Tamil Nadu and Andhra Pradesh with full EPC execution.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <ProjectsHeroSection />
      <ProjectsStatsSection />
      <ProjectsHighlightSection />
      <ProjectsGallerySection />
      <CTABanner />
    </main>
  );
}
