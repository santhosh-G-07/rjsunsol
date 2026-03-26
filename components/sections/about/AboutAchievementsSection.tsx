 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Zap, CheckCircle2, MapPin, Users } from "lucide-react";
import { IMAGE_OVERLAY } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";

const achievements = [
  {
    icon: Zap,
    value: 113,
    suffix: "+",
    unit: "MW",
    label: "Commissioned",
    sublabel: "Across Tamil Nadu and Andhra Pradesh",
  },
  {
    icon: CheckCircle2,
    value: 13,
    label: "Projects Completed",
    sublabel: "On time, on budget, every time",
  },
  {
    icon: MapPin,
    value: 5,
    label: "Regions Served",
    sublabel: "And expanding nationally",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Retention",
    sublabel: "Built on trust and consistent delivery",
  },
] as const;

export default function AboutAchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden py-[120px]">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src={ASSET_PATHS.sectionBgGround}
          alt="Section background"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.section }}
        />
        <div className="hero-noise absolute inset-0" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em]">
              ACHIEVEMENTS
            </span>
          </motion.div>

          <div className="mt-5">
            {["Numbers That", "Tell Our Story"].map((line, idx) => (
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

        {/* Achievement cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <AchievementCard
              key={item.label}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AchievementData {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  value: number;
  suffix?: string;
  unit?: string;
  label: string;
  sublabel: string;
}

interface AchievementCardProps {
  item: AchievementData;
  index: number;
  inView: boolean;
}

function AchievementCard({ item, index, inView }: AchievementCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 * index,
      }}
      whileHover={{
        y: -6,
        backgroundColor: "rgba(10,12,20,0.85)",
        borderColor: "rgba(var(--accent-rgb),0.5)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      }}
      className="relative rounded-[20px] border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(10,12,20,0.7)] px-7 py-10 text-center backdrop-blur-[24px]"
    >
      {/* Top accent line */}
      <div className="pointer-events-none absolute left-[20%] right-[20%] top-0 h-[2px] bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]" />

      {/* Icon */}
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[16px] border border-[rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.15)]">
        <Icon size={24} className="text-cobalt" />
      </div>

      {/* Number */}
      <div className="font-bebas text-[64px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.5)]">
        <AnimatedCounter value={item.value} suffix={item.suffix} unit={item.unit} />
      </div>

      {/* Label */}
      <div className="mt-2 font-rajdhani text-[14px] font-semibold uppercase tracking-[0.15em] text-text-muted">
        {item.label}
      </div>

      {/* Sublabel */}
      <div className="mt-2 font-dmsans text-[13px] font-light leading-[1.6] text-silver">
        {item.sublabel}
      </div>
    </motion.div>
  );
}

