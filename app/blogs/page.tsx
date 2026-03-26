import type { Metadata } from "next";
import BlogsHeroSection from "@/components/sections/blogs/BlogsHeroSection";
import BlogsGridSection from "@/components/sections/blogs/BlogsGridSection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Energy Insights & Guides",
  description:
    "Expert insights on commercial solar installation, EPC services, and clean energy solutions for businesses across India.",
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
};

export default function BlogsPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <BlogsHeroSection />
      <BlogsGridSection />
      <CTABanner />
    </main>
  );
}
