import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutWhoWeAreSection from "@/components/sections/about/AboutWhoWeAreSection";
import AboutValuesSection from "@/components/sections/about/AboutValuesSection";
import AboutCoreValuesSection from "@/components/sections/about/AboutCoreValuesSection";
import AboutAchievementsSection from "@/components/sections/about/AboutAchievementsSection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | RJ Sunsol Green Energy",
  description:
    "Learn about RJ Sunsol Green Energy — India's trusted solar EPC company with 100+ MW delivered across Tamil Nadu and Andhra Pradesh.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <AboutHeroSection />
      <AboutWhoWeAreSection />
      <AboutValuesSection />
      <AboutCoreValuesSection />
      <AboutAchievementsSection />
      <CTABanner />
    </main>
  );
}
