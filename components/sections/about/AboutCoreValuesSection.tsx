"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Zap,
  Leaf,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We act with honesty and transparency in every project, partnership, and promise we make.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of engineering quality and project execution.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every solution we deliver moves India closer to a cleaner, more resilient energy future.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients' success is our success — we build long-term relationships, not just solar plants.",
  },
  {
    icon: Award,
    title: "Accountability",
    description:
      "We own our outcomes fully — from the first site assessment to the final handover.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously improve our methods, tools, and processes to deliver better results.",
  },
] as const;

export default function AboutCoreValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-graphite py-[120px]">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto mb-[72px] max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
              CORE VALUES
            </span>
          </motion.div>

          <div className="mt-5">
            {["The Principles That", "Guide Everything We Do"].map(
              (line, idx) => (
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
                    className={`block font-rajdhani text-[clamp(36px,4.5vw,54px)] font-bold leading-[1.02] tracking-[-0.02em] ${
                      idx === 1 ? "text-cobalt" : "text-off-white"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Flip cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FlipCard key={value.title} value={value} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueData {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  title: string;
  description: string;
}

interface FlipCardProps {
  value: ValueData;
  index: number;
  inView: boolean;
}

function FlipCard({ value, index, inView }: FlipCardProps) {
  const Icon = value.icon;
  const [isHovered, setIsHovered] = useState(false);
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const flipped = isTouchDevice ? cardInView : isHovered;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.08 * index,
      }}
      className="group h-[220px] cursor-pointer [perspective:1000px]"
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d] [transition:transform_0.6s_cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[20px] border px-6 py-8 [backface-visibility:hidden]" style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}>
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-cobalt/10">
            <Icon size={36} className="text-cobalt" />
          </div>
          <div className="font-rajdhani text-[20px] font-bold text-off-white text-center">
            {value.title}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-[20px] border px-6 py-7 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ background: "var(--flip-back-bg)", borderColor: "var(--flip-back-border)", color: "var(--flip-back-text)" }}>
          <p className="font-dmsans text-[14px] font-light leading-[1.7]">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

