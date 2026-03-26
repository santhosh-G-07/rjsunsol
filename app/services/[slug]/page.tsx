import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/constants";
import { SITE_URL, toAbsoluteUrl } from "@/lib/site";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverviewSection from "@/components/sections/services/detail/ServiceOverviewSection";
import ServiceFeaturesSection from "@/components/sections/services/detail/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/sections/services/detail/ServiceProcessSection";
import ServiceStatsSection from "@/components/sections/services/detail/ServiceStatsSection";
import CTABanner from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${service.slug}`;
  const imageUrl = toAbsoluteUrl(service.heroImage);
  return {
    title: `${service.title} | RJ Sunsol Green Energy`,
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: `${service.title} | RJ Sunsol Green Energy`,
      description: service.description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | RJ Sunsol Green Energy`,
      description: service.description,
      images: [imageUrl],
    },
  };
}

export default function ServiceSlugPage({ params }: Props) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main id="main-content" className="bg-graphite">
      <ServiceDetailHero service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceFeaturesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceStatsSection service={service} />
      <CTABanner />
    </main>
  );
}
