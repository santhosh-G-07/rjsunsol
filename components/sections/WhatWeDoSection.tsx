 "use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Package,
  Wrench,
  ClipboardList,
  Activity,
  Zap,
  ChevronRight,
} from "lucide-react";

import { ASSET_PATHS } from "@/lib/site-images";

gsap.registerPlugin(ScrollTrigger);

const capabilityItems = [
  {
    icon: Cpu,
    title: "Engineering & System Design",
    description:
      "Data-driven designs maximizing system efficiency and long-term output.",
  },
  {
    icon: Package,
    title: "Procurement & Supply Chain",
    description:
      "Strategic sourcing from trusted certified manufacturers and partners.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "Disciplined execution ensuring seamless integration and performance.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Structured oversight across planning, coordination, and quality.",
  },
  {
    icon: Activity,
    title: "Operation & Maintenance",
    description:
      "Lifecycle support ensuring consistent performance and stability.",
  },
  {
    icon: Zap,
    title: "Turnkey Solar Solutions",
    description:
      "Complete solar infrastructure under a single accountable partner.",
  },
] as const;

export default function WhatWeDoSection() {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, imageContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-graphite py-[120px]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.08)_0%,transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-[linear-gradient(to_right,transparent,rgba(var(--accent-rgb),0.1),transparent)]" />

      <div className="container-custom relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-20 max-w-[700px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              OUR CAPABILITIES
            </span>
          </motion.div>

          <div className="mt-4">
            {["Complete Solar Power", "Solutions"].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={
                  headerInView
                    ? {
                        clipPath: "inset(0% 0 0 0)",
                      }
                    : {}
                }
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.15 * idx,
                }}
                className="overflow-hidden"
              >
                <span
                  className={`block font-rajdhani text-[clamp(40px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : "text-off-white"
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-5 mx-auto max-w-[520px] font-dmsans text-[17px] font-light leading-[1.75] text-silver"
          >
            We offer full-scope solar energy solutions — from energy procurement
            and installation to commissioning, O&amp;M, and long-term asset
            support.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          {/* Left: Parallax image + stat card */}
          <div
            ref={imageContainerRef}
            className="relative h-[320px] sm:h-[440px] lg:h-[580px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.15)] shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <Image
                ref={imageRef}
                src={ASSET_PATHS.sectionBgGround}
                alt="Solar ground installation"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(10,12,20,0.7)_100%)]" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-7 left-7 max-w-[320px] rounded-2xl border px-6 py-5 backdrop-blur-2xl"
              style={{
                background: "var(--bg-floating-card)",
                borderColor: "var(--floating-card-border)",
                boxShadow: "var(--shadow-floating-card)",
              }}
            >
              <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm bg-gradient-to-b from-cobalt to-cobalt-dark" />
              <div className="relative pl-3">
                <div className="font-bebas text-[48px] leading-none drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)]" style={{ color: "var(--floating-card-text)" }}>
                  100+ MW
                </div>
                <div className="mt-1 font-dmsans text-[12px] uppercase tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
                  Delivered across Tamil Nadu &amp; Andhra Pradesh
                </div>
              </div>
            </motion.div>

            {/* Decorative corner element */}
            <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-tr-[12px] border-t-2 border-r-2 border-cobalt/60 opacity-40" />
          </div>

          {/* Right: capability cards */}
          <div className="flex flex-col gap-3">
            {capabilityItems.map((item, index) => (
              <CapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CapabilityItem {
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  description: string;
}

interface CapabilityCardProps {
  item: CapabilityItem;
  index: number;
}

function CapabilityCard({ item, index }: CapabilityCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.08 * index,
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
      className="capability-card relative flex cursor-pointer items-center gap-4 rounded-2xl border border-graphite-light bg-graphite-mid px-5 py-4"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.1)] text-cobalt transition-colors">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <div className="font-rajdhani text-[16px] font-semibold text-off-white">
          {item.title}
        </div>
        <div className="mt-1 font-dmsans text-[13px] leading-[1.5] text-text-muted">
          {item.description}
        </div>
      </div>
      <motion.div
        className="ml-auto flex h-8 w-8 items-center justify-center text-text-muted"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <ChevronRight size={16} />
      </motion.div>
    </motion.div>
  );
}

