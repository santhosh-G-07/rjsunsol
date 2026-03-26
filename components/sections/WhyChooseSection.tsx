 "use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layers,
  TrendingDown,
  Zap,
  BarChart3,
  Shield,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  {
    icon: "Layers",
    stat: "100% In-House",
    title: "End-to-End EPC",
    description:
      "Single-point responsibility from engineering and procurement through installation, commissioning, and O&M.",
  },
  {
    icon: "TrendingDown",
    stat: "↓ 40% Avg",
    title: "Lower Energy Costs",
    description:
      "Solar solutions engineered to slash electricity bills and hedge against rising grid tariffs.",
  },
  {
    icon: "Zap",
    stat: "Zero Downtime",
    title: "Seamless Integration",
    description:
      "Deploy solar within active industrial environments without a single day of operational disruption.",
  },
  {
    icon: "BarChart3",
    stat: "Predictable Output",
    title: "Consistent Performance",
    description:
      "Structured project management ensures dependable energy generation month after month.",
  },
  {
    icon: "Shield",
    stat: "Lifetime Support",
    title: "Lifecycle Maintenance",
    description:
      "Preventive O&M practices that maximize uptime and protect your asset for decades.",
  },
  {
    icon: "MapPin",
    stat: "113+ MW Live",
    title: "Proven Regional Scale",
    description:
      "Deep expertise across Tamil Nadu and Andhra Pradesh — terrain, grid, and regulation.",
  },
] as const;

export default function WhyChooseSection() {
  const primaryRef = useRef<HTMLDivElement | null>(null);
  const primaryImgRef = useRef<HTMLImageElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!primaryRef.current || !primaryImgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(primaryImgRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: primaryRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, primaryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-graphite py-[120px]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-[200px] -bottom-[300px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.07)_0%,transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-[400px] origin-left -rotate-[15deg] bg-[linear-gradient(to_right,rgba(var(--accent-rgb),0.3),transparent)]" />

      <div className="container-custom relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-18 max-w-[560px] text-left md:mb-[72px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              WHY CHOOSE US
            </span>
          </motion.div>

          <div className="mt-4">
            {["Built for Business", "Performance"].map((line, idx) => (
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
            className="mt-5 max-w-[520px] font-dmsans text-[17px] font-light leading-[1.75] text-silver"
          >
            Built for reliability, long-term value, and measurable business
            performance at every scale.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-[80px] lg:grid-cols-2 lg:items-center">
          {/* Left: image composition */}
          <div ref={primaryRef} className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            {/* Primary image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute left-0 top-0 h-full w-[85%] overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.15)] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            >
              <Image
                ref={primaryImgRef}
                src="/images/solar-farms_solar-farm-dusk.webp"
                alt="Solar farm at dusk"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(10,12,20,0.3)_0%,transparent_50%,rgba(10,12,20,0.4)_100%)]" />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
              className="absolute bottom-6 right-6 h-[40%] w-[52%] overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.4)] shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(var(--accent-rgb),0.12)]"
            >
              <Image
                src="/images/team_team-site.webp"
                alt="Solar installation team on site"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>

            {/* Cobalt glow */}
            <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.3)_0%,transparent_70%)] blur-[40px]" />

            {/* Experience badge */}
            <div className="absolute right-0 top-8">
              <motion.div
                className="relative rounded-2xl border px-5 py-4 backdrop-blur-2xl"
                style={{
                  background: "var(--bg-floating-card)",
                  borderColor: "var(--floating-card-border)",
                  boxShadow: "var(--shadow-floating-card)",
                }}
              >
                <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm bg-gradient-to-b from-cobalt to-cobalt-dark" />
                <div className="relative pl-3">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="font-bebas text-[36px] leading-none"
                    style={{ color: "var(--floating-card-text)" }}
                  >
                    13+
                  </motion.div>
                  <div className="mt-1 font-dmsans text-[12px] uppercase tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
                    Projects Completed
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((card, index) => (
              <FeatureCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardData {
  icon: string;
  stat: string;
  title: string;
  description: string;
}

const ICON_MAP = {
  Layers,
  TrendingDown,
  Zap,
  BarChart3,
  Shield,
  MapPin,
};

function FeatureCard({
  card,
  index,
}: {
  card: FeatureCardData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const IconComponent =
    ICON_MAP[card.icon as keyof typeof ICON_MAP];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.07 * index,
      }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-[16px] p-5 cursor-default"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        boxShadow: "var(--shadow-card)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-accent-hover)";
        el.style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-color)";
        el.style.boxShadow = "var(--shadow-card)";
      }}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--gradient-top-accent)" }}
      />

      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -top-[60px] -right-[60px] h-[160px] w-[160px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[12px] transition-colors duration-300 group-hover:bg-[var(--bg-icon-hover)]"
        style={{
          background: "var(--bg-icon)",
          border: "1px solid var(--border-accent)",
        }}
      >
        <IconComponent
          size={20}
          style={{ color: "var(--accent)" }}
        />
      </div>

      {/* Stat */}
      <div
        className="mb-1 font-bebas text-[13px] tracking-[0.12em]"
        style={{ color: "var(--accent)" }}
      >
        {card.stat}
      </div>

      {/* Title */}
      <div
        className="mb-2 font-rajdhani text-[16px] font-bold leading-tight group-hover:text-[var(--accent)] transition-colors duration-300"
        style={{ color: "var(--text-primary)" }}
      >
        {card.title}
      </div>

      {/* Description */}
      <div
        className="font-dmsans text-[13px] font-light leading-[1.65]"
        style={{ color: "var(--text-muted)" }}
      >
        {card.description}
      </div>
    </motion.div>
  );
}

