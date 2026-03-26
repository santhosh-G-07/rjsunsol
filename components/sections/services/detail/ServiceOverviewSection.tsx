"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import type { ServiceData } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  service: ServiceData;
}

export default function ServiceOverviewSection({ service }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, imageRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-graphite py-[120px]">
      <div className="container-custom grid gap-[80px] lg:grid-cols-[1.1fr,1.1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
              {service.category}
            </span>
          </motion.div>

          <div className="mt-5">
            {["What We Do in", service.title].map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                animate={
                  inView
                    ? { clipPath: "inset(0% 0 0 0)", y: 0 }
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
                  className={`block font-rajdhani text-[clamp(36px,4vw,50px)] font-bold leading-[1.02] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : "text-off-white"
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="mt-6 font-dmsans text-[17px] font-light leading-[1.85] text-silver"
          >
            {service.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="mt-4 font-dmsans text-[15px] font-light leading-[1.85] text-text-muted"
          >
            {service.longDescription}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 border-y border-graphite-light py-6"
          >
            {service.stats.map((stat, index) => (
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
                      value={parseInt(stat.number, 10)}
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

        <div className="relative h-[360px] sm:h-[460px]">
          <div
            ref={imageRef}
            className="absolute inset-0 overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.15)] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          >
            <Image
              src={service.overviewImage}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,12,20,0)_0%,rgba(10,12,20,0.65)_100%)]" />
          </div>
          <div className="pointer-events-none absolute -bottom-5 -right-3 select-none font-bebas text-[160px] leading-none text-cobalt opacity-[0.06]">
            {service.number}
          </div>
        </div>
      </div>
    </section>
  );
}
