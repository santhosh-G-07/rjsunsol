"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { withBasePath } from "@/lib/site";

export default function AboutWhoWeAreSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="overflow-x-hidden bg-graphite py-[120px]">
      <div className="container-custom grid gap-[60px] lg:grid-cols-[1.6fr,1fr] lg:items-stretch">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
              WHO WE ARE
            </span>
          </motion.div>

          <div className="mt-5">
            {["India's Trusted Solar", "EPC Partner"].map((line, idx) => (
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
            ))}
          </div>

          <div className="mt-6 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-dmsans text-[16px] font-light leading-[1.85] text-silver"
            >
              RJ Sunsol Green Energy is a solar EPC company committed to
              delivering reliable, efficient, and sustainable solar energy
              solutions for businesses and homes across India.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="font-dmsans text-[16px] font-light leading-[1.85] text-silver"
            >
              We provide comprehensive end-to-end services — from procurement
              and installation to project management and long-term maintenance —
              helping our clients reduce energy costs and embrace clean energy
              at scale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="font-dmsans text-[16px] font-light leading-[1.85] text-silver"
            >
              Operating across Tamil Nadu and Andhra Pradesh with ambitions to
              expand nationally, we combine engineering expertise with hands-on
              execution to deliver projects that stand the test of time.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-6 border-y border-graphite-light py-6"
          >
            {[
              { value: 113, suffix: "+", label: "Energy Delivered", unit: "MW" },
              { value: 13, label: "Projects Completed" },
              { value: 5, suffix: "+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 pr-6 first:border-none md:border-l md:border-graphite-light md:first:border-l-0"
              >
                {index !== 0 && (
                  <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-cobalt to-transparent md:block" />
                )}
                <div className="flex items-baseline gap-2">
                  <div className="font-bebas text-[48px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.6)]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      unit={stat.unit}
                    />
                  </div>
                  <div className="font-rajdhani text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — crossfade card (fade + scale entrance, no horizontal overflow) */}
        <div className="min-h-[480px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.3,
            }}
            className="relative h-full min-h-[480px] w-full overflow-hidden rounded-[24px] border border-[var(--border-accent)] shadow-[var(--shadow-image)]"
          >
            {/* Image 1 — Solar farm (visible when !flipped) */}
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: flipped ? 0 : 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative h-full min-h-[480px] w-full overflow-hidden">
                <Image
                  src={withBasePath("/images/solar-farms_solar-farm-golden.webp")}
                  alt="Solar farm golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/55 px-4 py-1.5 font-dmsans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm"
                >
                  Our Projects
                </div>
              </div>
            </motion.div>

            {/* Image 2 — Team (visible when flipped) */}
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: flipped ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative h-full min-h-[480px] w-full overflow-hidden">
                <Image
                  src={withBasePath("/images/team_team-site.webp")}
                  alt="RJ Sunsol team on site"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
                  }}
                />
                <div
                  className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/55 px-4 py-1.5 font-dmsans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm"
                >
                  Our Team
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Indicator dots */}
          <div className="mt-4 flex justify-center gap-2">
            {[0, 1].map((i) => (
              <motion.button
                key={i}
                type="button"
                aria-label={i === 0 ? "Show Our Projects" : "Show Our Team"}
                onClick={() => setFlipped(i === 1)}
                animate={{
                  width: (i === 0 ? !flipped : flipped) ? 24 : 8,
                  backgroundColor:
                    (i === 0 ? !flipped : flipped)
                      ? "var(--accent)"
                      : "var(--border-color)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
