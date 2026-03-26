 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { IMAGE_OVERLAY } from "@/lib/constants";
import type { ServiceData } from "@/lib/constants";

interface Props {
  service: ServiceData;
}

export default function ServiceDetailHero({ service }: Props) {
  return (
    <section className="relative min-h-screen h-screen overflow-hidden pt-[76px]" style={{ minHeight: "100vh" }}>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.hero }}
        />
        <div className="hero-noise absolute inset-0" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-bottom-fade)" }} />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="container-custom">
          <div className="mx-auto max-w-[900px] text-center">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex items-center justify-center gap-2 font-dmsans text-[13px]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <Link
                href="/services"
                className="hover:text-off-white"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Services
              </Link>
              <ChevronRight size={14} className="text-cobalt" />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>{service.title}</span>
            </motion.nav>

            {/* Number + category pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="mb-5 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="rounded-lg border px-3 py-1 font-bebas text-[16px] text-cobalt" style={{ background: "var(--bg-pill)", borderColor: "var(--border-accent)" }}>
                {service.number}
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
              >
                <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
                <span className="font-dmsans text-[12px] tracking-[0.14em]">
                  {service.category}
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", y: 24 }}
              animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="overflow-hidden"
            >
              <h1
                className="block font-rajdhani text-[clamp(48px,6.5vw,80px)] font-bold leading-[0.95] tracking-[-0.02em]"
                style={{ color: "var(--text-on-image)" }}
              >
                {service.title}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="mt-4 font-dmsans text-[20px] font-light leading-[1.6]"
              style={{ color: "var(--text-on-image)" }}
            >
              {service.subtitle}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="/contact#get-quote"
                className="cursor-hover relative overflow-hidden rounded-[12px] border px-9 py-4 font-rajdhani text-[14px] font-bold uppercase tracking-[0.1em]"
                style={{
                  background: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                  borderColor: "var(--btn-primary-border)",
                  boxShadow: "var(--shadow-button)",
                }}
                whileHover={{ scale: 1.04, boxShadow: "var(--shadow-button-hover)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Quote
              </motion.a>
              <motion.a
                href="/services"
                className="cursor-hover inline-flex items-center gap-2 rounded-[12px] border border-[rgba(192,200,216,0.3)] bg-transparent px-8 py-4 font-rajdhani text-[14px] font-bold uppercase tracking-[0.1em] text-silver transition-colors hover:border-cobalt/60 hover:bg-cobalt/10 hover:text-off-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
