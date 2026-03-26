import type { Metadata } from "next";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | RJ Sunsol Green Energy",
  description:
    "Get in touch with RJ Sunsol Green Energy for solar EPC projects across India. Request a free quote or reach us directly on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-graphite">
      <ContactHeroSection />
      <ContactFormSection />
      <CTABanner />
    </main>
  );
}
