"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";
import { IMAGE_OVERLAY, HERO_MOTION } from "@/lib/constants";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/gallery-images.generated";
import { ASSET_PATHS } from "@/lib/site-images";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

const headlineLines = [
  { text: "Every Panel.", accent: false },
  { text: "Every Wire.", accent: false },
  { text: "Real Work.", accent: true },
];

export default function GalleryHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [...HERO_MOTION.parallaxScrollRange], [...HERO_MOTION.parallaxTransformRange]);
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        size: 3 + ((i * 7) % 4),
        color: i % 2 === 0 ? "bg-cobalt" : "bg-silver",
        top: `${10 + ((i * 7) % 70)}%`,
        left: `${5 + ((i * 13) % 90)}%`,
        reverse: i % 2 === 0,
        duration: 4 + ((i * 3) % 5),
      })),
    []
  );

  return (
    <section
      className="pt-16 md:pt-[76px]"
      style={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        {shouldReduceMotion ? (
          <ImageWithSkeleton
            src={ASSET_PATHS.galleryHeroAerial}
            alt="Gallery hero aerial view"
            fill
            priority
            quality={90}
            className="object-cover object-center"
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
                src={ASSET_PATHS.galleryHeroAerial}
                alt="Gallery hero aerial view"
                fill
                priority
                quality={90}
                className="object-cover object-center"
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

      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              opacity: 0.4,
            }}
            animate={{
              y: p.reverse ? [0, -30, 0] : [0, 30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div
        className="px-4 text-center"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="mx-auto max-w-[860px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2"
              style={{
                background: "var(--pill-bg)",
                borderColor: "var(--pill-border)",
                color: "var(--pill-text)",
              }}
            >
              <motion.span
                className="h-[6px] w-[6px] rounded-full bg-cobalt"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-dmsans text-[12px] tracking-[0.18em]">
                PROJECT GALLERY
              </span>
            </motion.div>

          <div className="mt-6 overflow-hidden">
            {headlineLines.map((line, idx) => (
              <motion.div
                key={line.text}
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
                  className="block font-rajdhani text-[clamp(52px,7vw,88px)] font-bold leading-[0.92] tracking-[-0.02em]"
                  style={
                    line.accent
                      ? { color: "var(--accent)" }
                      : { color: "var(--text-on-image)" }
                  }
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            className="mx-auto mt-7 max-w-[580px] font-dmsans text-[18px] font-light leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            No renders. No stock photos. These are real images from our sites —
            captured during active installation and commissioning across Tamil
            Nadu and Andhra Pradesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="mt-11 flex flex-wrap items-center justify-center gap-14"
          >
            <div className="flex flex-col items-center">
              <span className="font-bebas text-[36px]" style={{ color: "var(--accent)" }}>
                {GALLERY_IMAGES.length}
              </span>
              <span
                className="font-dmsans text-[11px] uppercase tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Photos
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bebas text-[36px]" style={{ color: "var(--accent)" }}>
                {GALLERY_CATEGORIES.length - 1}
              </span>
              <span
                className="font-dmsans text-[11px] uppercase tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Categories
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bebas text-[36px]" style={{ color: "var(--accent)" }}>
                100+ MW
              </span>
              <span
                className="font-dmsans text-[11px] uppercase tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Behind These Shots
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
