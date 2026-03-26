import type { Metadata } from "next";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesIntroSection from "@/components/sections/services/ServicesIntroSection";
import ServicesCardsSection from "@/components/sections/services/ServicesCardsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar EPC Services | RJ Sunsol Green Energy",
  description:
    "Comprehensive solar EPC services including engineering, procurement, installation, commissioning, project management and O&M across Tamil Nadu and Andhra Pradesh.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <ServicesHeroSection />
      <ServicesIntroSection />
      <ServicesCardsSection />
      <IndustriesSection />
      <CTABanner />
    </main>
  );
}
