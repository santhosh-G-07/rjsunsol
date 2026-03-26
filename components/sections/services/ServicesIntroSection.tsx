"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ServicesIntroSection() {
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
    <section ref={ref} className="bg-graphite py-24 pb-24">
      <div className="container-custom grid gap-[80px] lg:grid-cols-[1.1fr,1.1fr] lg:items-center">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
              OUR APPROACH
            </span>
          </motion.div>

          <div className="mt-5">
            {["Single Partner.", "Total Accountability."].map((line, idx) => (
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
                  className={`block font-rajdhani text-[clamp(36px,4vw,52px)] font-bold leading-[1.02] tracking-[-0.02em] ${
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
              We believe the best solar projects come from unified
              responsibility. As your single EPC partner, we own every stage —
              eliminating coordination gaps, delays, and accountability voids
              that arise when multiple vendors are involved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="font-dmsans text-[16px] font-light leading-[1.85] text-silver"
            >
              Our team of engineers, procurement specialists, site supervisors,
              and O&amp;M technicians work as one — ensuring your project is
              delivered on time, within budget, and built to last.
            </motion.p>
          </div>

          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {[
              "ISO-Aligned Processes",
              "On-Time Delivery",
              "Lifecycle Support",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] px-[18px] py-2 font-rajdhani text-[13px] font-semibold uppercase tracking-[0.06em] text-cobalt"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right image with overlay card */}
        <div className="relative h-[360px] sm:h-[460px]">
          <div
            ref={imageRef}
            className="absolute inset-0 overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.15)] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/installation_mounting-structure.webp"
              alt="Mounting structure installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,12,20,0)_0%,rgba(10,12,20,0.65)_100%)]" />
          </div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-6 right-6 rounded-[16px] border px-[22px] py-[18px] backdrop-blur-[20px]"
            style={{
              background: "var(--bg-floating-card)",
              borderColor: "var(--floating-card-border)",
              boxShadow: "var(--shadow-floating-card)",
            }}
          >
            <div className="absolute left-0 top-[18%] bottom-[18%] w-[3px] rounded-r-sm bg-gradient-to-b from-cobalt to-cobalt-light" />
            <div className="pl-4">
              <div className="font-bebas text-[36px] leading-none" style={{ color: "var(--floating-card-text)" }}>
                6 Core Services
              </div>
              <div className="mt-1 font-dmsans text-[12px]" style={{ color: "var(--text-muted)" }}>
                Delivered under one roof
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

