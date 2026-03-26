import type { Metadata } from "next";
import IntroAnimation from "@/components/ui/IntroAnimation";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PhotoMarquee from "@/components/sections/PhotoMarquee";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function HomePage() {
  return (
    <main id="main-content" className="bg-graphite">
      <IntroAnimation />
      <HeroSection />
      <StatsBar />
      <WhatWeDoSection />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <BenefitsSection />
      <PhotoMarquee />
      <CTABanner />
    </main>
  );
}

