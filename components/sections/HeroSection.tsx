 "use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { IMAGE_OVERLAY, HERO_MOTION } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";
import AdvancedParticles from "@/components/ui/AdvancedParticles";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

const headlineLines = ["Powering India’s", "Clean Energy", "Future."];

const MOBILE_BREAKPOINT = 768;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [heroBgSrc, setHeroBgSrc] = useState<string>(ASSET_PATHS.heroBgAerial);

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () =>
      setHeroBgSrc(mq.matches ? ASSET_PATHS.heroBgAerialMobile : ASSET_PATHS.heroBgAerial);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [...HERO_MOTION.parallaxScrollRange], [...HERO_MOTION.parallaxTransformRange]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: 3 + ((i * 7) % 4), // 3–6px
        color: i % 2 === 0 ? "bg-cobalt" : "bg-silver",
        top: `${10 + ((i * 7) % 70)}%`,
        left: `${5 + ((i * 13) % 90)}%`,
        reverse: i % 2 === 0,
        duration: 4 + ((i * 3) % 5), // 4–8s
      })),
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-[76px]">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Layer 1 – parallax image with Ken Burns (disabled when reduced motion) */}
        {shouldReduceMotion ? (
          <div className="absolute inset-0">
            <ImageWithSkeleton
              src={heroBgSrc}
              alt="Solar farm aerial view"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ) : (
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 will-change-transform"
          >
            <motion.div
              className="absolute inset-0"
              style={{ willChange: 'transform' }}
              initial={{ scale: 1 }}
              animate={{ scale: HERO_MOTION.kenBurnsScale }}
              transition={{
                duration: HERO_MOTION.kenBurnsDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ImageWithSkeleton
                src={heroBgSrc}
                alt="Solar farm aerial view"
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Layer 2 – cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.hero }}
        />

        {/* Layer 3 – noise texture via CSS class */}
        <div className="hero-noise absolute inset-0" />

        {/* Layer 4 – bottom fade */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-bottom-fade)" }}
        />
      </div>

      {/* Advanced particle system */}
      <AdvancedParticles count={24} interactive={true} />

      {/* Original floating particles (kept for layering) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
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

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex min-h-[calc(100vh_-_76px)] flex-col items-center justify-center"
      >
        <div className="container-custom flex w-full flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left content */}
          <motion.div
            className="relative max-w-[680px] pl-[clamp(24px,8vw,120px)]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow pill */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="hero-pill relative mb-6 inline-flex max-w-[280px] items-center gap-2 rounded-full border px-4 py-2 cursor-default sm:max-w-none"
              style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
            >
              <motion.span
                className="h-[6px] w-[6px] rounded-full bg-cobalt"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-dmsans text-[13px] tracking-[0.04em]">
                Trusted Solar EPC Company — 100+ MW Delivered
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="mb-7 font-rajdhani text-[clamp(38px,7vw,88px)] font-bold leading-[0.95] tracking-[-0.02em]"
            >
              {headlineLines.map((line, index) => {
                const isSecond = index === 1;
                return (
                  <motion.div
                    key={line}
                    initial={{
                      clipPath: "inset(100% 0 0 0)",
                      y: 20,
                    }}
                    animate={{
                      clipPath: "inset(0% 0 0 0)",
                      y: 0,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.15 * index,
                    }}
                    className="overflow-hidden"
                  >
                    <span
                      className={isSecond ? "inline-block text-cobalt drop-shadow-[var(--shadow-glow)]" : "inline-block"}
                      style={isSecond ? undefined : { color: "var(--text-on-image)" }}
                    >
                      {line}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="mb-10 max-w-[520px] font-dmsans text-[clamp(16px,1.4vw,18px)] font-light leading-[1.75]"
              style={{ color: "var(--text-on-image)" }}
            >
              Full-scope solar EPC solutions — from engineering and procurement
              to installation, commissioning, and long-term O&amp;M — across
              Tamil Nadu, Andhra Pradesh, and beyond.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="mb-12 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="/contact#get-quote"
                className="hero-primary-cta cursor-hover relative overflow-hidden rounded-[12px] border px-9 py-4 font-rajdhani text-[14px] font-bold uppercase tracking-[0.1em]"
                style={{
                  background: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                  borderColor: "var(--btn-primary-border)",
                  boxShadow: "var(--shadow-button)",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "var(--shadow-button-hover)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Free Quote
              </motion.a>

              <motion.a
                href="/projects"
                className="cursor-hover inline-flex items-center gap-2 rounded-[12px] border bg-transparent px-8 py-4 font-rajdhani text-[14px] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-[var(--btn-secondary-hover-bg)]"
                style={{ color: "var(--btn-secondary-text)", borderColor: "var(--btn-secondary-border)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore Our Projects</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 6 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content – floating cards (desktop) */}
          <div className="relative hidden w-[380px] lg:block">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(var(--accent-rgb),0.25) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Cable trench card — above-the-fold LCP candidate: eager load + high priority */}
            <motion.div
              className="hero-card absolute left-0 top-10 h-[220px] w-[300px] overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border-accent)", boxShadow: "var(--shadow-image)" }}
              animate={
                active === 1
                  ? {
                      zIndex: 2,
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      zIndex: 1,
                      scale: 0.92,
                      rotate: -4,
                      opacity: 0.7,
                      x: 40,
                      y: -20,
                    }
              }
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <Image
                src="/images/solar-farms_solar-farm-golden.webp"
                alt="Cable trench work"
                fill
                fetchPriority="high"
                sizes="(max-width: 1024px) 50vw, 320px"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>

            {/* Workers install card (badge lives here) */}
            <motion.div
              className="hero-card absolute left-0 top-20 h-[220px] w-[300px] overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border-accent)", boxShadow: "var(--shadow-card-hover)" }}
              animate={
                active === 0
                  ? {
                      zIndex: 2,
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      zIndex: 1,
                      scale: 0.92,
                      rotate: 4,
                      opacity: 0.7,
                      x: -40,
                      y: -20,
                    }
              }
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <Image
                src="/images/solar-farms_solar-farm-road.webp"
                alt="Workers installing solar panels"
                fill
                sizes="(max-width: 1024px) 50vw, 320px"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />

              {/* Info badge */}
              <div
                className="pointer-events-auto absolute bottom-4 left-4 rounded-[10px] border px-3.5 py-2.5 backdrop-blur-xl"
                style={{
                  background: "var(--bg-floating-card)",
                  borderColor: "var(--floating-card-border)",
                  boxShadow: "var(--shadow-floating-card)",
                }}
              >
                <div className="font-rajdhani text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--accent)" }}>
                  ⚡ Active Projects
                </div>
                <div className="font-dmsans text-[11px]" style={{ color: "var(--text-muted)" }}>
                  Tamil Nadu &amp; Andhra Pradesh
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust indicators bar – centered */}
        <div className="mt-8 flex w-full justify-center px-4 lg:mt-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-0 rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-5 py-4 backdrop-blur-md"
          >
            {[
              { value: "100+ MW", label: "Completed" },
              { value: "13", label: "Projects Done" },
              { value: "5", label: "Regions Served" },
            ].map((stat, idx) => (
              <div key={stat.label} className="flex items-center">
                {idx !== 0 && (
                  <div className="mx-3 h-7 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}
                <div className="px-3 text-left">
                  <div className="font-bebas text-[22px] text-cobalt">
                    {stat.value}
                  </div>
                  <div className="font-dmsans text-[12px] uppercase tracking-[0.05em] text-text-muted">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

