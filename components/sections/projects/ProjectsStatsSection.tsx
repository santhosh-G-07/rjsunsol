 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { IMAGE_OVERLAY } from "@/lib/constants";
import { withBasePath } from "@/lib/site";

const stats = [
  { value: 113, suffix: "+", unit: "MW", label: "Commissioned" },
  { value: 13, label: "Projects Completed" },
  { value: 30, suffix: "+", unit: "MW", label: "Currently In Progress" },
  { value: 5, label: "Regions Covered" },
];

export default function ProjectsStatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden border-y border-graphite-light py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={withBasePath("/images/solar-farms_solar-farm-golden.webp")}
          alt="Solar farm at golden hour, projects section background"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.section }}
        />
      </div>

      <div className="relative container-custom">
        <div className="hidden items-center justify-center md:flex">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {index !== 0 && (
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-graphite-light to-transparent" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, y: 0, scale: 1 } : undefined
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
                className="flex flex-col items-center px-10 sm:px-4"
              >
                <div className="font-bebas text-[72px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    unit={stat.unit}
                  />
                </div>
                <div className="mt-1 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              className="flex flex-col items-center"
            >
              <div className="font-bebas text-[56px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  unit={stat.unit}
                />
              </div>
              <div className="mt-1 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
