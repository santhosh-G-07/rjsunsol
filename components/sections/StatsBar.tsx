"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  unit?: string;
};

const stats: Stat[] = [
  { value: 113, suffix: "+", unit: "MW", label: "Commissioned" },
  { value: 30, suffix: "+", unit: "MW", label: "In Progress" },
  { value: 13, label: "Projects Completed" },
  { value: 5, label: "Regions Covered" },
];

export default function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative w-full border-y py-12 overflow-hidden"
      style={{ background: "var(--stats-bg)", borderColor: "var(--border-color)" }}
    >
      {/* Background cobalt glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(var(--accent-rgb),0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-custom">
        <div className="hidden items-center justify-center md:flex">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {index !== 0 && (
                <div className="h-16 w-px bg-[var(--border-color)]" style={{ background: "linear-gradient(to bottom, transparent, var(--border-color), transparent)" }} />
              )}
              <StatBlock
                index={index}
                inView={inView}
                value={stat.value}
                suffix={stat.suffix}
                unit={stat.unit}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* 2x2 grid on small screens, no dividers */}
        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:hidden sm:grid-cols-2">
          {stats.map((stat, index) => (
            <StatBlock
              key={stat.label}
              index={index}
              inView={inView}
              value={stat.value}
              suffix={stat.suffix}
              unit={stat.unit}
              label={stat.label}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatBlockProps {
  index: number;
  inView: boolean;
  value: number;
  suffix?: string;
  unit?: string;
  label: string;
  compact?: boolean;
}

function StatBlock({
  index,
  inView,
  value,
  suffix,
  unit,
  label,
  compact,
}: StatBlockProps) {
  const sizeClass = compact ? "font-bebas text-[56px] leading-none" : "font-bebas text-[72px] leading-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1 * index,
      }}
      className="relative flex flex-col items-center px-4"
    >
      <div className={sizeClass} style={{ color: "var(--stats-number)", textShadow: "var(--stats-text-shadow)" }}>
        <AnimatedCounter value={value} suffix={suffix} unit={unit} />
      </div>
      <div className="mt-1 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.15em] text-text-muted text-center">
        {label}
      </div>
    </motion.div>
  );
}

