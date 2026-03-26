import type { Metadata } from "next";
import { Rajdhani, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { ASSET_PATHS } from "@/lib/site-images";
import { SITE_URL } from "@/lib/site";
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
  title: {
    default: 'Industrial & Commercial Solar Energy Solutions | Turnkey Solar Power | RJ Sunsol | EPC&OM',
    template: '%s | RJ Sunsol Green Energy'
  },
  description:
    "RJ Sunsol Green Energy is a solar EPC company specializing in turnkey solar solutions for businesses across India. Expanding from Tamil Nadu and Andhra Pradesh, we deliver comprehensive solar power systems nationwide, helping commercial and industrial clients reduce energy costs and achieve long-term sustainability goals.",
  keywords: ['solar EPC', 'solar installation', 'Tamil Nadu solar', 'Andhra Pradesh solar', 'renewable energy', 'commercial solar', 'industrial solar', 'solar power systems', 'turnkey solar solutions', 'solar O&M'],
  authors: [{ name: 'RJ Sunsol Green Energy' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'RJ Sunsol Green Energy',
    title: 'Industrial & Commercial Solar Energy Solutions | RJ Sunsol',
    description: 'Leading solar EPC company in Tamil Nadu & Andhra Pradesh. Turnkey solar solutions for businesses across India.',
    images: [{
      url: ASSET_PATHS.logo,
      width: 512,
      height: 512,
      alt: 'RJ Sunsol Green Energy - Solar EPC Solutions'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Sunsol Green Energy | Solar EPC Solutions',
    description: 'Leading solar EPC company in Tamil Nadu & Andhra Pradesh. Turnkey solar solutions for businesses across India.',
    images: [ASSET_PATHS.logo]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: ASSET_PATHS.favicon,
    apple: ASSET_PATHS.favicon,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A1D27',
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
