 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { IMAGE_OVERLAY, SERVICES_DATA } from "@/lib/constants";
import type { ServiceData } from "@/lib/constants";

interface Props {
  service: ServiceData;
}

export default function ServiceStatsSection({ service }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section
        ref={ref}
        className="relative overflow-hidden py-[100px]"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={service.heroImage}
            alt={`Background for ${service.title} stats section`}
            fill
            className="object-cover opacity-[0.25]"
          />
          <div
            className="absolute inset-0"
            style={{ background: IMAGE_OVERLAY.section }}
          />
        </div>

        <div className="container-custom relative">
          <div className="hidden items-center justify-center md:flex">
            {service.stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                {index !== 0 && (
                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-graphite-light to-transparent" />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1 * index,
                  }}
                  className="flex flex-col items-center px-10 py-4 sm:px-6"
                >
                  <div className="font-bebas text-[80px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)]">
                    <AnimatedCounter
                      value={parseInt(stat.number, 10)}
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

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:hidden sm:gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
                className="flex flex-col items-center"
              >
                <div className="font-bebas text-[56px] leading-none text-cobalt drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.4)]">
                  <AnimatedCounter
                    value={parseInt(stat.number, 10)}
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

      {/* More Services row */}
      <div className="border-t border-graphite-light bg-graphite px-4 py-16">
        <h2 className="mb-6 text-center font-rajdhani text-[20px] font-semibold text-silver">
          Explore Our Other Services
        </h2>
        <div className="container-custom overflow-x-auto">
          <div className="flex justify-center gap-3 pb-2 md:flex-wrap">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="cursor-hover whitespace-nowrap rounded-full border border-graphite-light bg-graphite-mid px-6 py-2.5 font-rajdhani text-[14px] font-semibold text-silver transition-colors hover:border-cobalt hover:bg-cobalt/10 hover:text-off-white"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
