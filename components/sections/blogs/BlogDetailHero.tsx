"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar } from "lucide-react";
import { IMAGE_OVERLAY, HERO_MOTION } from "@/lib/constants";
import type { BlogPost } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function BlogDetailHero({ post }: { post: BlogPost }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [...HERO_MOTION.parallaxScrollRange], [...HERO_MOTION.parallaxTransformRange]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden pt-[76px]"
      style={{ minHeight: "100vh" }}
    >
      {/* Background: parallax + Ken Burns (disabled when reduced motion) */}
      <div className="pointer-events-none absolute inset-0">
        {shouldReduceMotion ? (
          <ImageWithSkeleton
            src={post.heroImage}
            alt={`Hero image for article: ${post.title}`}
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
                src={post.heroImage}
                alt={`Hero image for article: ${post.title}`}
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

      {/* Content */}
      <div className="container-custom relative z-10 mx-auto max-w-[860px] px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block rounded-full px-4 py-2 font-dmsans text-[12px] uppercase tracking-[0.1em]"
          style={{
            background: "var(--pill-bg)",
            borderColor: "var(--pill-border)",
            color: "var(--pill-text)",
          }}
        >
          {post.category}
        </motion.span>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
            animate={
              inView
                ? { clipPath: "inset(0% 0 0 0)", y: 0 }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            }}
            className="mx-auto max-w-[800px] font-rajdhani text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ color: "var(--text-on-image)" }}
          >
            {post.title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-8 font-dmsans text-[14px]"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          <span className="flex items-center gap-2">
            <Clock size={14} aria-hidden />
            {post.readTime}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} aria-hidden />
            {post.date}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
