"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Wrench,
  ClipboardList,
  Activity,
  Home,
  Settings,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";

const HERO_IMAGE_BY_SLUG: Record<string, string> = Object.fromEntries(
  SERVICES_DATA.map((s) => [s.slug, s.heroImage]),
);

type Service = {
  slug: string;
  image: string;
  number: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  category: string;
  title: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    slug: "epc-services",
    image: HERO_IMAGE_BY_SLUG["epc-services"] ?? "/images/installation_hero-construction.webp",
    number: "01",
    icon: Cpu,
    category: "Engineering",
    title: "EPC Services",
    description:
      "Full-scope Engineering, Procurement, and Construction for utility and commercial solar projects — from concept to commissioning.",
    features: ["Site Assessment", "System Design", "Turnkey Delivery"],
  },
  {
    slug: "installation-commissioning",
    image:
      HERO_IMAGE_BY_SLUG["installation-commissioning"] ??
      "/images/installation_workers-install.webp",
    number: "02",
    icon: Wrench,
    category: "Installation",
    title: "Installation & Commissioning",
    description:
      "Precision installation by expert technicians ensuring seamless system integration, safety compliance, and peak performance.",
    features: ["Panel Mounting", "Electrical Works", "System Testing"],
  },
  {
    slug: "project-management",
    image:
      HERO_IMAGE_BY_SLUG["project-management"] ??
      "/images/civil-works_cable-laying-team.webp",
    number: "03",
    icon: ClipboardList,
    category: "Management",
    title: "Project Management",
    description:
      "Structured oversight across every project phase — ensuring timelines, quality benchmarks, and budgets are consistently met.",
    features: ["Timeline Control", "Quality Checks", "Risk Management"],
  },
  {
    slug: "service-maintenance",
    image: HERO_IMAGE_BY_SLUG["service-maintenance"] ?? "/images/scada-panel.webp",
    number: "04",
    icon: Activity,
    category: "Operations",
    title: "Service & Maintenance",
    description:
      "Reliable after-sales support with regular monitoring, preventive maintenance, and rapid issue resolution for peak uptime.",
    features: ["Preventive Care", "Performance Monitoring", "On-Site Support"],
  },
  {
    slug: "residential-rooftop",
    image:
      HERO_IMAGE_BY_SLUG["residential-rooftop"] ??
      "/images/installation_solar-panels-close.webp",
    number: "05",
    icon: Home,
    category: "Residential",
    title: "Residential Rooftop Solar",
    description:
      "Affordable, high-quality rooftop solar systems for homes — designed to cut electricity bills and deliver lasting value.",
    features: ["Custom Design", "Net Metering", "Warranty Support"],
  },
  {
    slug: "other-solar-services",
    image: HERO_IMAGE_BY_SLUG["other-solar-services"] ?? "/images/weather-station.webp",
    number: "06",
    icon: Settings,
    category: "Specialized",
    title: "Other Solar Services",
    description:
      "Specialized solar support including PMC, SCADA integration, weather monitoring, and technical consultancy for complex requirements.",
    features: ["PMC", "SCADA Setup", "Technical Consulting"],
  },
];

export default function ServicesCardsSection() {
  const debugId = useMemo(() => `svc-${Math.random().toString(16).slice(2, 8)}`, []);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    // Mobile can have small viewports; threshold 0.2 can delay forever.
    threshold: 0,
    rootMargin: "200px 0px 200px 0px",
    triggerOnce: true,
    onChange: (nextInView, entry) => {
      // eslint-disable-next-line no-console
      console.log("[ServicesCardsSection]", debugId, "inView:", nextInView, {
        time: typeof performance !== "undefined" ? Math.round(performance.now()) : undefined,
        intersectionRatio: entry?.intersectionRatio,
        boundingClientRect: entry?.boundingClientRect
          ? {
              top: Math.round(entry.boundingClientRect.top),
              height: Math.round(entry.boundingClientRect.height),
            }
          : undefined,
      });
    },
  });

  const setRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[ServicesCardsSection]", debugId, "mounted", {
      time: typeof performance !== "undefined" ? Math.round(performance.now()) : undefined,
    });
  }, [debugId]);

  return (
    <section ref={setRefs} className="bg-graphite py-24 pb-32 overflow-x-clip">
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
              OUR SERVICES
            </span>
          </motion.div>

          <div className="mt-5">
            {["Built for Every Stage of", "Your Solar Journey"].map(
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

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              debugId={debugId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  debugId: string;
}

function ServiceCard({ service, index, debugId }: ServiceCardProps) {
  const Icon = service.icon;

  const row = Math.floor(index / 2);
  const baseDelay = 0.1 * row;
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref: cardInViewRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "140px 0px 140px 0px",
  });

  useEffect(() => {
    const sync = () => setIsDesktop(window.innerWidth >= 1024);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  // Unified "ultra smooth premium" entry profile across devices.
  const flyX = isDesktop ? 120 : 0;
  const flyY = isDesktop ? 72 + index * 10 : 52 + index * 6;
  const flyRotate = isDesktop ? 4 : 2;
  const flyScale = isDesktop ? 0.95 : 0.96;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[ServicesCardsSection]", debugId, "card mounted", {
      slug: service.slug,
      index,
      image: service.image,
      time: typeof performance !== "undefined" ? Math.round(performance.now()) : undefined,
    });
  }, [debugId, index, service.image, service.slug]);

  return (
    <motion.div
      /**
       * IMPORTANT: Avoid "initially hidden" states (opacity: 0, clip-path, etc.)
       * for core content. On slower mobile devices, hydration can be delayed,
       * and Framer Motion will keep elements at their `initial` state until
       * JS runs — which looks like cards/images "appear late" or "never show".
       */
      ref={cardInViewRef}
      initial={false}
      animate={
        !shouldReduceMotion
          ? cardInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }
            : {
                opacity: 0.65,
                x: index % 2 === 0 ? -flyX : flyX,
                y: flyY,
                scale: flyScale,
                rotate: index % 2 === 0 ? -flyRotate : flyRotate,
                filter: "blur(0px)",
              }
          : undefined
      }
      transition={{
        ...(shouldReduceMotion
          ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
          : {
              type: "spring" as const,
              stiffness: isDesktop ? 145 : 130,
              damping: isDesktop ? 24 : 22,
              mass: 0.85,
            }),
        delay:
          (!shouldReduceMotion ? 0.04 : baseDelay) +
          0.05 * (index % 2),
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(var(--accent-rgb),0.08)",
        borderColor: "rgba(var(--accent-rgb),0.4)",
      }}
      whileTap={{ scale: 0.985 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-graphite-light bg-graphite-mid"
    >
      {/* Static ambient glow for a premium look without animation jitter. */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(var(--accent-rgb), 0.12), transparent 56%)",
          }}
        />
      )}
      <Link href={`/services/${service.slug}`} className="flex h-full flex-col">
        {/* Image area (no clip-path / no initial hidden state) */}
        <div className="relative h-[220px] min-h-[220px] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              onLoad={(e) => {
                const tag = "[ServicesCardsSection]";
                const img = e.currentTarget as HTMLImageElement;
                // eslint-disable-next-line no-console
                console.log(tag, debugId, "img onLoad", service.slug, service.image, {
                  naturalWidth: img.naturalWidth,
                  naturalHeight: img.naturalHeight,
                  currentSrc: img.currentSrc,
                  time: typeof performance !== "undefined" ? Math.round(performance.now()) : undefined,
                });
              }}
              onError={(e) => {
                const tag = "[ServicesCardsSection]";
                // eslint-disable-next-line no-console
                console.error(tag, debugId, "img onError", service.slug, service.image, e);
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-card-image)", opacity: 0.8 }}
            />
          </motion.div>

          {/* Number badge */}
          <div
            className="absolute left-4 top-4 rounded-[8px] border px-[10px] py-[4px] font-bebas text-[18px] backdrop-blur-[8px]"
            style={{
              background: "var(--bg-floating-card)",
              borderColor: "var(--floating-card-border)",
              color: "var(--accent)",
            }}
          >
            {service.number}
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col px-7 py-7">
          {/* Icon row */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10">
                <Icon size={20} className="text-cobalt" />
              </div>
              <span className="font-dmsans text-[11px] uppercase tracking-[0.1em] text-text-muted">
                {service.category}
              </span>
            </div>
          </div>

          <motion.h3
            initial={false}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }
            }
            transition={{
              duration: 0.35,
              ease: "easeOut",
              delay: baseDelay + 0.12 + 0.06 * (index % 2),
            }}
            className="mb-2 font-rajdhani text-[22px] font-bold text-off-white"
          >
            {service.title}
          </motion.h3>
          <p className="flex-1 font-dmsans text-[14px] font-light leading-[1.65] text-text-muted">
            {service.description}
          </p>

          {/* Bottom row */}
          <div className="mt-6 flex items-center justify-between border-t border-graphite-light pt-4">
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-[6px] bg-graphite px-[10px] py-[4px] font-dmsans text-[11px] text-text-muted"
                >
                  {feature}
                </span>
              ))}
            </div>
            <motion.span
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cobalt/10 text-cobalt"
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>
        </div>

        {/* Left accent bar */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-left scale-y-0 bg-gradient-to-b from-cobalt to-cobalt-light transition-transform duration-300 ease-out group-hover:scale-y-100" />
      </Link>
    </motion.div>
  );
}

