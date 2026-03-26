 "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGE_OVERLAY, HERO_MOTION } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function ServicesHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [...HERO_MOTION.parallaxScrollRange], [...HERO_MOTION.parallaxTransformRange]);

  return (
    <section className="relative min-h-screen h-screen overflow-hidden pt-[76px]" style={{ minHeight: "100vh" }}>
      {/* Background: parallax + Ken Burns (disabled when reduced motion) */}
      <div className="pointer-events-none absolute inset-0">
        {shouldReduceMotion ? (
          <ImageWithSkeleton
            src={ASSET_PATHS.sectionBgAbstract}
            alt="Abstract solar background"
            fill
            priority
            className="object-cover"
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
                src={ASSET_PATHS.sectionBgAbstract}
                alt="Abstract solar background"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.hero }}
        />
        <div className="hero-noise absolute inset-0" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-bottom-fade)" }} />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="container-custom">
          <div className="mx-auto max-w-[800px] text-center">
            {/* Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2"
                style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
              >
              <motion.span
                className="h-[6px] w-[6px] rounded-full bg-cobalt"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
                <span className="font-dmsans text-[12px] tracking-[0.18em]">
                WHAT WE OFFER
              </span>
            </motion.div>

            {/* Heading */}
            <div className="mt-6">
              {["End-to-End Solar", "EPC Services"].map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.15 * idx,
                  }}
                  className="overflow-hidden"
                >
                  <span
                    className={`block font-rajdhani text-[clamp(48px,6.5vw,80px)] font-bold leading-[0.95] tracking-[-0.02em] ${
                      idx === 1 ? "text-cobalt" : ""
                    }`}
                    style={idx === 1 ? undefined : { color: "var(--text-on-image)" }}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="mx-auto mt-6 max-w-[600px] font-dmsans text-[18px] font-light leading-[1.8]"
              style={{ color: "var(--text-on-image)" }}
            >
              From site assessment and system design to installation,
              commissioning, and lifetime maintenance — we deliver complete solar
              infrastructure under one roof.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}

