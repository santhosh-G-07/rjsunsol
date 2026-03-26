"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  CONTACT,
} from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";

const footerColumnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const socialIconVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: 0.08 * i,
    },
  }),
};

const linkFlashVariants = {
  hidden: { opacity: 1 },
  visible: (i: number) => ({
    opacity: [1, 0.7, 1],
    transition: {
      duration: 0.3,
      delay: 0.5 + i * 0.04,
      times: [0, 0.5, 1],
    },
  }),
};

export default function Footer() {
  return (
    <footer className="relative pt-20 shadow-[0_-1px_60px_rgba(var(--accent-rgb),0.08)]" style={{ background: "var(--footer-bg)" }}>
      <div className="container-custom">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-[48px]">
          {/* Col 1 — Brand */}
          <ScrollReveal
            variants={footerColumnVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-4 flex items-center gap-2">
              <Image
                src={ASSET_PATHS.logo}
                alt="RJ Sunsol Green Energy"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <div className="font-bebas text-xl leading-tight tracking-[0.08em]" style={{ color: "var(--footer-heading)" }}>
                  <span style={{ color: "var(--accent)" }}>RJ</span>
                  <span> SUNSOL</span>
                </div>
                <div className="font-dmsans text-[9px] font-medium uppercase tracking-[0.25em]" style={{ color: "var(--footer-text)" }}>
                  GREEN ENERGY
                </div>
              </div>
            </div>
            <p className="mb-2 font-dmsans text-sm italic leading-relaxed" style={{ color: "var(--footer-text)" }}>
              Powering India&apos;s Clean Energy Future
            </p>
            <p className="mb-5 font-dmsans text-[13px] font-light leading-[1.7]" style={{ color: "var(--footer-text)" }}>
              Trusted solar EPC company delivering reliable and sustainable
              energy solutions across India.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/rjsunsolgreenenergy?igsh=MXdzeW5obzA2cDE5Mg%3D%3D",
                  icon: Instagram,
                  label: "Instagram",
                  brand: "#E1306C",
                },
                {
                  href: "https://www.facebook.com/people/RJ-Sunsol-green-energy/61576281566315/?rdid=8fMgVAqWayhAcmp8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F185H6g7i4r%2F",
                  icon: Facebook,
                  label: "Facebook",
                  brand: "#1877F2",
                },
                {
                  href: CONTACT.whatsappUrl,
                  icon: MessageCircle,
                  label: "WhatsApp",
                  brand: "#25D366",
                },
              ].map((item, i) => {
                let bgHover: string;
                let borderHover: string;

                // Convert brand hex to rgba strings by hand for the known brand colors
                if (item.brand === "#E1306C") {
                  bgHover = "rgba(225,48,108,0.15)";
                  borderHover = "rgba(225,48,108,0.4)";
                } else if (item.brand === "#1877F2") {
                  bgHover = "rgba(24,119,242,0.15)";
                  borderHover = "rgba(24,119,242,0.4)";
                } else {
                  // WhatsApp #25D366
                  bgHover = "rgba(37,211,102,0.15)";
                  borderHover = "rgba(37,211,102,0.4)";
                }

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} (opens in new tab)`}
                    variants={socialIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: bgHover,
                      borderColor: borderHover,
                      color: item.brand,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="cursor-hover flex h-11 w-11 items-center justify-center rounded-[10px] border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    style={{ backgroundColor: "var(--bg-icon)", borderColor: "var(--footer-border)", color: "var(--footer-text)" }}
                  >
                    <item.icon size={18} aria-hidden />
                  </motion.a>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Col 2 — Quick Links */}
          <ScrollReveal
            variants={footerColumnVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="flex flex-col"
          >
            <h3 className="font-rajdhani text-[13px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>
              Quick Links
            </h3>
            <span className="mb-4 mt-1 block h-0.5 w-6" style={{ background: "var(--accent)" }} />
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link, i) => (
                <motion.li
                  key={link.href + link.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={linkFlashVariants}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 font-dmsans text-sm transition-all duration-200 hover:translate-x-1 cursor-hover [&:hover]:text-[var(--accent)]"
                    style={{ color: "var(--footer-text)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>›</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Col 3 — Services */}
          <ScrollReveal
            variants={footerColumnVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
            className="flex flex-col"
          >
            <h3 className="font-rajdhani text-[13px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>
              Our Services
            </h3>
            <span className="mb-4 mt-1 block h-0.5 w-6" style={{ background: "var(--accent)" }} />
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={linkFlashVariants}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 font-dmsans text-sm transition-all duration-200 hover:translate-x-1 cursor-hover [&:hover]:text-[var(--accent)]"
                    style={{ color: "var(--footer-text)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>›</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Col 4 — Contact */}
          <ScrollReveal
            variants={footerColumnVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.36 }}
            className="flex flex-col"
          >
            <h3 className="font-rajdhani text-[13px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>
              Get in Touch
            </h3>
            <span className="mb-4 mt-1 block h-0.5 w-6" style={{ background: "var(--accent)" }} />
            <ul className="space-y-0">
              <li className="flex items-center gap-3 border-b py-3" style={{ borderColor: "var(--footer-border)" }}>
                <Phone className="h-4 w-4 shrink-0" size={16} style={{ color: "var(--accent)" }} />
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="font-dmsans text-sm cursor-hover hover:opacity-90"
                  style={{ color: "var(--footer-text)" }}
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 border-b py-3" style={{ borderColor: "var(--footer-border)" }}>
                <Mail className="h-4 w-4 shrink-0" size={16} style={{ color: "var(--accent)" }} />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-dmsans text-sm cursor-hover hover:opacity-90 break-all break-words min-w-0 flex-1"
                  style={{ color: "var(--footer-text)" }}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 border-b py-3" style={{ borderColor: "var(--footer-border)" }}>
                <MapPin className="h-4 w-4 shrink-0" size={16} style={{ color: "var(--accent)" }} />
                <span className="font-dmsans text-sm" style={{ color: "var(--footer-text)" }}>
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Globe className="h-4 w-4 shrink-0" size={16} style={{ color: "var(--accent)" }} />
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dmsans text-sm cursor-hover hover:opacity-90"
                  style={{ color: "var(--footer-text)" }}
                >
                  {CONTACT.website}
                </a>
              </li>
            </ul>
            <div className="mt-5 mb-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact#get-quote"
                  className="cursor-hover block w-full rounded-[10px] border py-3.5 text-center font-rajdhani text-sm font-bold uppercase tracking-wider shadow-none transition-all hover:shadow-[0_8px_24px_rgba(var(--accent-rgb),0.4)]"
                  style={{
                    background: "var(--gradient-accent)",
                    color: "var(--btn-primary-text)",
                    borderColor: "var(--btn-primary-border)",
                  }}
                >
                  Get a Free Quote →
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-0 border-t py-6" style={{ borderColor: "var(--footer-border)", background: "var(--footer-bottom-bg)" }}>
        <div className="container-custom flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-dmsans text-xs" style={{ color: "var(--footer-text)" }}>
            © {new Date().getFullYear()} RJ Sunsol Green Energy. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <Link
              href="/privacy"
              className="font-dmsans text-xs underline hover:no-underline"
              style={{ color: "var(--footer-text)" }}
            >
              Privacy Policy
            </Link>
            <span className="font-dmsans text-xs" style={{ color: "var(--footer-text)", opacity: 0.6 }}>|</span>
            <Link
              href="/terms"
              className="font-dmsans text-xs underline hover:no-underline"
              style={{ color: "var(--footer-text)" }}
            >
              Terms of Use
            </Link>
            <span className="font-dmsans text-xs" style={{ color: "var(--footer-text)", opacity: 0.6 }}>|</span>
            <Link
              href="/cookies"
              className="font-dmsans text-xs underline hover:no-underline"
              style={{ color: "var(--footer-text)" }}
            >
              Cookie Policy
            </Link>
            <span className="font-dmsans text-xs md:ml-2" style={{ color: "var(--footer-text)" }}>
              Designed for a cleaner India ☀️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
