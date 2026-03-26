"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import type { ServiceData } from "@/lib/constants";

interface Props {
  service: ServiceData;
}

export default function ServiceFeaturesSection({ service }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-graphite-mid py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="container-custom relative">
        <div className="mx-auto mb-[72px] max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
              KEY FEATURES
            </span>
          </motion.div>

          <div className="mt-5">
            {["What's Included in", service.title].map((line, idx) => (
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
                  className={`block font-rajdhani text-[clamp(36px,4.5vw,54px)] font-bold leading-[1.02] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : "text-off-white"
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.keyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.06 * index,
              }}
              whileHover={{
                y: -6,
                backgroundColor: "rgba(var(--accent-rgb),0.05)",
                borderColor: "rgba(var(--accent-rgb),0.3)",
                boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
              }}
              className="group relative overflow-hidden rounded-[20px] border border-graphite-light bg-graphite px-7 py-8"
            >
              <div className="pointer-events-none absolute -right-2 top-[-8px] select-none font-bebas text-[64px] text-cobalt opacity-[0.06]">
                {index + 1}
              </div>
              <CheckCircle2
                size={24}
                className="mb-4 text-cobalt"
              />
              <h3 className="mb-2 font-rajdhani text-[18px] font-bold text-off-white">
                {feature.title}
              </h3>
              <p className="font-dmsans text-[14px] font-light leading-[1.7] text-text-muted">
                {feature.description}
              </p>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-cobalt to-cobalt-light transition-transform duration-300 ease-out group-hover:scale-y-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
