"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, ArrowUpRight } from "lucide-react";
import { withBasePath } from "@/lib/site";

const highlights = [
  {
    image: withBasePath("/images/solar-farms_solar-farm-sunset.webp"),
    category: "Utility Scale",
    title: "Ground-Mount Solar Farm",
    description:
      "Large-scale ground-mount installation delivering reliable utility-grade solar power across Tamil Nadu's open terrain.",
    location: "Tamil Nadu",
  },
  {
    image: withBasePath("/images/civil-works_cable-laying-team.webp"),
    category: "Infrastructure",
    title: "Cable Laying & Civil Works",
    description:
      "Precision underground cable laying and civil infrastructure supporting multi-MW solar project execution.",
    location: "Andhra Pradesh",
  },
  {
    image: withBasePath("/images/installation_workers-install.webp"),
    category: "Installation",
    title: "Panel Installation at Scale",
    description:
      "Expert panel installation teams executing large module counts with precision and strict safety compliance.",
    location: "Tamil Nadu",
  },
  {
    image: withBasePath("/images/civil-works_trench-team.webp"),
    category: "Civil Works",
    title: "Trench & Foundation Works",
    description:
      "Structural foundation and trenching works ensuring long-term stability for ground-mount solar arrays.",
    location: "Andhra Pradesh",
  },
];

export default function ProjectsHighlightSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="bg-graphite py-[120px]">
      <div className="container-custom">
        <div className="mb-[72px] max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.16em]">
              PROJECT HIGHLIGHTS
            </span>
          </motion.div>

          <div className="mt-5">
            {["How We Deliver", "Every Project"].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                animate={
                  inView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}
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

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-5 max-w-[520px] font-dmsans text-[17px] font-light leading-[1.75] text-silver"
          >
            Our delivery approach is built on structured execution, transparent
            communication, and an obsession with quality at every stage.
          </motion.p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          {highlights.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                inView ? { opacity: 1, y: 0, scale: 1 } : {}
              }
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.12 * index,
              }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 32px 64px rgba(0,0,0,0.5), 0 0 0 2px rgba(var(--accent-rgb),0.3)",
              }}
              className="group relative h-[320px] cursor-pointer overflow-hidden rounded-[20px]"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.12 * index + 0.15,
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-[rgba(10,12,20,0.2)] to-[rgba(10,12,20,0.85)]"
                whileHover={{ 
                  background: "linear-gradient(to bottom, rgba(10,12,20,0.15), rgba(10,12,20,0.8))"
                }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span
                  className="mb-3 inline-block rounded-full border px-3.5 py-1.5 font-dmsans text-[11px] uppercase tracking-[0.1em]"
                  style={{
                    background: "var(--pill-bg)",
                    borderColor: "var(--pill-border)",
                    color: "var(--pill-text)",
                  }}
                >
                  {card.category}
                </span>
                <h3 className="mb-2 font-rajdhani text-[22px] font-bold text-off-white">
                  {card.title}
                </h3>
                <p className="font-dmsans text-[13px] font-light leading-[1.6] text-white/70">
                  {card.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-dmsans text-[12px] text-silver">
                    <MapPin size={14} />
                    {card.location}
                  </span>
                  <ArrowUpRight size={20} className="text-cobalt" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
