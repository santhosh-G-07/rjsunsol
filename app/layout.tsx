import type { Metadata } from "next";
import { Rajdhani, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { ASSET_PATHS } from "@/lib/site-images";
import { SITE_URL, toAbsoluteUrl } from "@/lib/site";
import BackToTop from "@/components/ui/BackToTop";
import CookieConsent from "@/components/ui/CookieConsent";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  variable: "--font-dmsans",
  display: "swap",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "RJ Sunsol Green Energy",
  alternates: {
    canonical: SITE_URL,
  },
  title: {
    default: "RJ Sunsol Green Energy | Solar EPC Company in India",
    template: "%s | RJ Sunsol Green Energy",
  },
  description:
    "RJ Sunsol Green Energy (RJSunSol / RJ Sun Sol) is a solar EPC company delivering turnkey commercial, industrial, and residential solar solutions across India, including Tamil Nadu and Andhra Pradesh.",
  keywords: [
    "rjsunsol",
    "rj sunsol",
    "rj sun sol",
    "RJ Sunsol Green Energy",
    "solar EPC company in India",
    "solar installation",
    "turnkey solar solutions",
    "commercial solar",
    "industrial solar",
    "residential rooftop solar",
    "Tamil Nadu solar company",
    "Andhra Pradesh solar company",
    "solar O&M",
  ],
  authors: [{ name: "RJ Sunsol Green Energy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "RJ Sunsol Green Energy",
    title: "RJ Sunsol Green Energy | Solar EPC Company in India",
    description:
      "Turnkey commercial, industrial, and residential solar solutions across India from RJ Sunsol Green Energy.",
    images: [
      {
        url: toAbsoluteUrl(ASSET_PATHS.logo),
        width: 512,
        height: 512,
        alt: "RJ Sunsol Green Energy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Sunsol Green Energy | Solar EPC Company in India",
    description:
      "Turnkey commercial, industrial, and residential solar solutions across India from RJ Sunsol Green Energy.",
    images: [toAbsoluteUrl(ASSET_PATHS.logo)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: ASSET_PATHS.favicon,
    apple: ASSET_PATHS.favicon,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1D27",
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${dmSans.variable} ${bebasNeue.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href={ASSET_PATHS.heroBgAerialMobile}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href={ASSET_PATHS.heroBgAerial}
          type="image/webp"
          media="(min-width: 768px)"
        />
      </head>
      <body className="bg-graphite font-dmsans antialiased">
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}