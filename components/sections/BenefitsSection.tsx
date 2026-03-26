 "use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Home,
  CheckCircle2,
  BarChart2,
  Zap,
  Shield,
  Wrench,
  Headphones,
} from "lucide-react";
import { useRef } from "react";
import { IMAGE_OVERLAY } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";
import AdvancedParticles from "@/components/ui/AdvancedParticles";

const businessBenefits = [
  "Lower electricity costs and stable energy planning",
  "Reduce carbon footprint and meet ESG goals",
  "Faster ROI with expert project management",
  "Professional O&M for long-term reliability",
] as const;

const homeBenefits = [
  "Slash electricity bills with solar power",
  "Energy independence and reliable backup",
  "Durable systems built for efficiency",
  "Contribute to a greener future",
] as const;

const afterSalesCards = [
  {
    icon: BarChart2,
    title: "Performance Check-Ups",
    description: "Routine inspections keeping solar output at its best.",
  },
  {
    icon: Zap,
    title: "Quick Issue Resolution",
    description:
      "Fast response to service requests ensuring minimal downtime.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description:
      "Scheduled care extending system life and maintaining efficiency.",
  },
  {
    icon: Wrench,
    title: "On-Site Technician Support",
    description:
      "Expert technicians available for hands-on service whenever needed.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Assistance",
    description:
      "Easy access to support for queries and guidance anytime.",
  },
] as const;

export default function BenefitsSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-[120px]">
      {/* Background image with parallax and Ken Burns */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 h-[120%] w-full"
        >
          <motion.div
            className="absolute inset-0"
            style={{ willChange: 'transform' }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src={ASSET_PATHS.sunsetPanelsWide}
              alt="Solar panels at sunset"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </motion.div>
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: IMAGE_OVERLAY.section }}
        />
        <div className="hero-noise absolute inset-0" />
      </div>

      {/* Advanced particles */}
      <AdvancedParticles count={16} interactive={false} />

      <div className="container-custom relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-18 max-w-[700px] text-center md:mb-[72px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.08)] px-4 py-2"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              SOLAR BENEFITS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-4 font-rajdhani text-[clamp(40px,5vw,60px)] font-bold leading-[1.05] text-off-white"
          >
            Switch to Solar with Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-5 mx-auto max-w-[520px] font-dmsans text-[17px] font-light leading-[1.7] text-silver"
          >
            From industries to households — cut costs, gain energy independence,
            and embrace clean energy.
          </motion.p>
        </div>

        {/* Two benefit panels */}
        <div className="mx-auto mb-20 grid max-w-[1000px] gap-8 md:grid-cols-2">
          {/* Businesses */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative overflow-hidden rounded-[20px] border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-dark-rgb),0.25)] px-8 py-10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-[24px]"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt/15 text-cobalt">
                <Building2 size={20} />
              </div>
              <div className="text-xl">🏭</div>
            </div>
            <h3 className="mt-4 font-rajdhani text-[24px] font-bold text-off-white">
              For Businesses &amp; Industries
            </h3>
            <p className="mt-2 font-dmsans text-[14px] font-light text-silver">
              Large-scale solar delivering ROI, sustainability, and cost
              control.
            </p>
            <div className="mt-6 space-y-3">
              {businessBenefits.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 text-left"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-[2px] flex-shrink-0 text-cobalt"
                  />
                  <p className="font-dmsans text-[14px] leading-[1.6] text-silver-light">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Homes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.15,
            }}
            className="relative overflow-hidden rounded-[20px] border border-[rgba(192,200,216,0.15)] bg-[rgba(26,29,39,0.75)] px-8 py-10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-[24px]"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(to_right,transparent,rgba(248,249,252,0.7),transparent)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt/15 text-cobalt">
                <Home size={20} />
              </div>
              <div className="text-xl">🏠</div>
            </div>
            <h3 className="mt-4 font-rajdhani text-[24px] font-bold text-off-white">
              For Homes &amp; Households
            </h3>
            <p className="mt-2 font-dmsans text-[14px] font-light text-silver">
              Affordable rooftop solar making clean energy accessible for every
              family.
            </p>
            <div className="mt-6 space-y-3">
              {homeBenefits.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 text-left"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-[2px] flex-shrink-0 text-cobalt"
                  />
                  <p className="font-dmsans text-[14px] leading-[1.6] text-silver-light">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* After-sales support */}
        <div className="text-center">
          <h3 className="font-rajdhani text-[32px] font-bold text-off-white">
            After-Sales Support
          </h3>
          <p className="mt-3 mb-12 mx-auto max-w-[520px] font-dmsans text-[16px] font-light leading-[1.7] text-silver">
            Professional care keeping your solar system performing at its best,
            year after year.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {afterSalesCards.map((card, index) => (
              <AfterSalesCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AfterSalesCardData {
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  description: string;
}

interface AfterSalesCardProps {
  card: AfterSalesCardData;
  index: number;
}

function AfterSalesCard({ card, index }: AfterSalesCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
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
        duration: 0.5,
        ease: "easeOut",
        delay: 0.08 * index,
      }}
      whileHover={{
        y: -6,
        backgroundColor: "rgba(var(--accent-rgb),0.1)",
        borderColor: "rgba(var(--accent-rgb),0.3)",
      }}
      className="group rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(26,29,39,0.6)] px-5 py-7 text-center backdrop-blur-[16px]"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[16px] bg-cobalt/15 text-cobalt shadow-none transition-shadow group-hover:shadow-[0_0_24px_rgba(var(--accent-rgb),0.4)]">
        <Icon size={22} />
      </div>
      <div className="font-rajdhani text-[16px] font-semibold text-off-white">
        {card.title}
      </div>
      <p className="mt-2 font-dmsans text-[13px] leading-[1.6] text-text-muted">
        {card.description}
      </p>
    </motion.div>
  );
}

