import { ASSET_PATHS } from "@/lib/site-images";
import { SITE_URL, toAbsoluteUrl } from "@/lib/site";

const BRAND_ALIASES = ["RJSunSol", "RJ Sunsol", "RJ Sun Sol"];

export function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RJ Sunsol Green Energy",
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    logo: toAbsoluteUrl(ASSET_PATHS.logo),
    description:
      "Leading solar EPC company in Tamil Nadu & Andhra Pradesh specializing in turnkey solar solutions for businesses across India",
    address: {
      "@type": "PostalAddress",
      streetAddress: "274B, Tiruppur Road",
      addressLocality: "Kangeyam",
      addressRegion: "Tamil Nadu",
      postalCode: "638701",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70320-35976",
      contactType: "customer service",
      email: "rjsunsolgreenenergy2024@gmail.com",
    },
    sameAs: [
      "https://www.instagram.com/rjsunsolgreenenergy",
      "https://www.facebook.com/people/RJ-Sunsol-green-energy/61576281566315/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RJ Sunsol Green Energy",
    alternateName: BRAND_ALIASES,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "RJ Sunsol Green Energy",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
    />
  );
}