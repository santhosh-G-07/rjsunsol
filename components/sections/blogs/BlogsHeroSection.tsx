"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGE_OVERLAY, HERO_MOTION } from "@/lib/constants";
import { withBasePath } from "@/lib/site";
import AdvancedParticles from "@/components/ui/AdvancedParticles";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

const BLOGS_HERO_IMAGE = withBasePath("/images/solar-farms_solar-farm-golden.webp");

export default function BlogsHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [...HERO_MOTION.parallaxScrollRange], [...HERO_MOTION.parallaxTransformRange]);

  return (
    <section
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden pt-[76px]"
      style={{ minHeight: "100vh" }}
    >
      {/* Background: parallax + Ken Burns (disabled when reduced motion) */}
      <div className="pointer-events-none absolute inset-0">
        {shouldReduceMotion ? (
          <ImageWithSkeleton
            src={BLOGS_HERO_IMAGE}
            alt="Solar farm golden hour"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
            <motion.div
              className="absolute inset-0"
              style={{ willChange: "transform" }}
              initial={{ scale: 1 }}
              animate={{ scale: HERO_MOTION.kenBurnsScale }}
              transition={{
                duration: HERO_MOTION.kenBurnsDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <ImageWithSkeleton
                src={BLOGS_HERO_IMAGE}
                alt="Solar farm golden hour"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.hero }}
        />
        <div className="hero-noise absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-bottom-fade)" }}
        />
      </div>

      <AdvancedParticles count={16} interactive={false} />

      {/* Content */}
      <div className="container-custom relative z-10 mx-auto max-w-[800px] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
          style={{
            background: "var(--pill-bg)",
            borderColor: "var(--pill-border)",
            color: "var(--pill-text)",
          }}
        >
          <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
          <span className="font-dmsans text-[12px] tracking-[0.14em]">
            SOLAR INSIGHTS
          </span>
        </motion.div>

        <div className="mt-6 overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="overflow-hidden"
          >
            <span
              className="block font-rajdhani text-[clamp(52px,7vw,88px)] font-bold leading-[0.92] tracking-[-0.02em]"
              style={{ color: "var(--text-on-image)" }}
            >
              Ideas That
            </span>
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.22 }}
            className="overflow-hidden"
          >
            <span
              className="block font-rajdhani text-[clamp(52px,7vw,88px)] font-bold leading-[0.92] tracking-[-0.02em]"
              style={{ color: "var(--accent)" }}
            >
              Power Decisions.
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mx-auto mt-6 max-w-[560px] font-dmsans text-[17px] font-light leading-[1.75]"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Expert guides on commercial solar, EPC services, and clean energy
          adoption — written for businesses making real energy decisions.
        </motion.p>
      </div>
    </section>
  );
}
