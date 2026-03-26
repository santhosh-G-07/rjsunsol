 "use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Factory,
  Building2,
  GraduationCap,
  Heart,
  Home,
  Leaf,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Optimize energy costs with large-scale solar infrastructure.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description:
      "Reliable solar for offices, retail spaces, and hospitality.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Sustainable energy for schools, colleges, and universities.",
  },
  {
    icon: Heart,
    title: "Healthcare Facilities",
    description:
      "Stable, dependable power for hospitals and medical centers.",
  },
  {
    icon: Home,
    title: "Residential Communities",
    description:
      "Customized rooftop solar for homes and housing developments.",
  },
  {
    icon: Leaf,
    title: "Agriculture & Farming",
    description:
      "Solar solutions for irrigation, farming, and rural energy needs.",
  },
] as const;

export default function IndustriesSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });

  return (
    <section className="relative overflow-hidden bg-graphite-mid py-[120px]">
      {/* Background grid (same as process) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="container-custom relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-18 max-w-[700px] text-center md:mb-[72px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              WHO WE SERVE
            </span>
          </motion.div>

          <div className="mt-4">
            {["Solar Solutions for", "Every Sector"].map((line, idx) => (
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
        </div>

        {/* Grid of industry cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Industry {
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  description: string;
}

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

function IndustryCard({ industry, index }: IndustryCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = industry.icon;

  const row = index < 3 ? 0 : 1;
  const baseDelay = row === 0 ? 0 : 0.15;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.92, clipPath: "inset(0 0 100% 0)" }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              clipPath: "inset(0 0 0% 0)"
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: baseDelay + 0.08 * (index % 3),
      }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(var(--accent-rgb),0.1)",
        borderColor: "rgba(var(--accent-rgb),0.35)",
        backgroundColor: "rgba(var(--accent-rgb),0.04)",
      }}
      className="group relative cursor-pointer overflow-hidden rounded-[20px] border border-graphite-light bg-graphite px-7 py-9 text-center"
    >
      {/* Arc decoration */}
      <div className="pointer-events-none absolute -right-[30px] -top-[30px] h-[100px] w-[100px] rounded-full border border-[rgba(var(--accent-rgb),0.1)] transition-colors duration-200 group-hover:border-[rgba(var(--accent-rgb),0.3)]" />

      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.1)] text-cobalt shadow-none transition-all duration-200 group-hover:border-[rgba(var(--accent-rgb),0.5)] group-hover:bg-[rgba(var(--accent-rgb),0.2)] group-hover:shadow-[0_0_24px_rgba(var(--accent-rgb),0.3)] mx-auto"
      >
        <Icon size={32} />
      </motion.div>

      <h3 className="mb-2 font-rajdhani text-[18px] font-bold text-off-white">
        {industry.title}
      </h3>
      <p className="font-dmsans text-[13px] font-light leading-[1.65] text-text-muted">
        {industry.description}
      </p>
    </motion.div>
  );
}

