"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Zap } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To deliver reliable, affordable, and sustainable solar solutions for every home and business — enabling India's transition to clean energy.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To create a cleaner, greener future powered by renewable energy — where every home and business thrives on sustainable power.",
  },
  {
    icon: Zap,
    title: "Our Edge",
    description:
      "End-to-end EPC expertise, disciplined execution, and lifecycle support that sets the benchmark for solar project delivery across India.",
  },
] as const;

export default function AboutValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-graphite-mid py-[120px]">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mx-auto mb-[72px] max-w-[700px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em]">
              WHAT DRIVES US
            </span>
          </motion.div>

          <div className="mt-5">
            {["Our Core", "Values"].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                animate={
                  inView
                    ? {
                        clipPath: "inset(0% 0 0 0)",
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.12 * idx,
                }}
                className="overflow-hidden"
              >
                <span
                  className={`block font-rajdhani text-[clamp(40px,5vw,58px)] font-bold leading-[1.02] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : "text-off-white"
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((card, index) => (
            <GlassCard key={card.title} card={card} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardData {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  title: string;
  description: string;
}

interface GlassCardProps {
  card: CardData;
  index: number;
  inView: boolean;
}

function GlassCard({ card, index, inView }: GlassCardProps) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15 * index,
      }}
      whileHover={{
        y: -8,
        boxShadow: "var(--shadow-card-hover)",
        borderColor: "var(--border-accent-hover)",
        backgroundColor: "var(--bg-card-hover)",
      }}
      className="group relative overflow-hidden rounded-[20px] border px-9 py-12 text-center backdrop-blur-[20px]"
      style={{ background: "var(--bg-glass)", borderColor: "var(--border-glass)" }}
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute -top-[60px] left-1/2 h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.25)_0%,transparent_70%)] blur-[30px]" />

      {/* Top accent line */}
      <div className="pointer-events-none absolute left-[20%] right-[20%] top-0 h-[2px]" style={{ background: "var(--gradient-top-accent)" }} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mb-7 flex h-20 w-20 items-center justify-center rounded-[20px] border mx-auto text-cobalt"
        style={{ borderColor: "var(--border-accent)", background: "var(--bg-icon)" }}
      >
        <Icon size={36} className="text-cobalt" />
      </motion.div>

      <h3 className="mb-4 font-rajdhani text-[24px] font-bold text-off-white">
        {card.title}
      </h3>
      <p className="font-dmsans text-[15px] font-light leading-[1.8] text-silver">
        {card.description}
      </p>
    </motion.div>
  );
}

