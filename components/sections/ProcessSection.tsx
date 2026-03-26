 "use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  PenTool,
  Package,
  Wrench,
  Zap,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MapPin,
    title: "Assessment",
    description:
      "Understanding needs through site evaluations and feasibility analysis.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Technical plans maximizing performance, compliance, and cost-efficiency.",
  },
  {
    icon: Package,
    title: "Procurement",
    description:
      "High-quality materials via trusted vendors with assured delivery.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Precise, safe installation by expert technicians on strict timelines.",
  },
  {
    icon: Zap,
    title: "Commissioning",
    description:
      "System testing, validation, integration checks, and operator training.",
  },
  {
    icon: Activity,
    title: "O&M",
    description:
      "Lifecycle support ensuring uptime, preventive care, and asset longevity.",
  },
] as const;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const verticalLineRef = useRef<SVGLineElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        });
      }

      const vLine = verticalLineRef.current;
      if (vLine) {
        const total = 100;
        gsap.set(vLine, {
          strokeDasharray: total,
          strokeDashoffset: total,
        });
        gsap.to(vLine, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-graphite-mid py-[120px]"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="container-custom relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-20 max-w-[700px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              OUR PROCESS
            </span>
          </motion.div>

          <div className="mt-4">
            {["From Vision to Value:", "A Proven 6-Step Process"].map(
              (line, idx) => (
                <motion.div
                  key={line}
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={
                    headerInView
                      ? {
                          clipPath: "inset(0% 0 0 0)",
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.15 * idx,
                  }}
                  className="overflow-hidden"
                >
                  <span
                    className={`block font-rajdhani text-[clamp(36px,4.5vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] ${
                      idx === 1 ? "text-cobalt" : "text-off-white"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              ),
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-5 mx-auto max-w-[500px] font-dmsans text-[17px] font-light leading-[1.75] text-silver"
          >
            We deliver excellence through a systematic approach ensuring
            quality, efficiency, and long-term success at every stage.
          </motion.p>
        </div>

        {/* Desktop horizontal steps */}
        <div className="relative hidden lg:block">
          {/* Connecting SVG line */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 h-20 w-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M5 10 H95"
              fill="none"
              stroke="var(--timeline-line)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex gap-6">
            {steps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative lg:hidden">
          <svg
            className="pointer-events-none absolute left-[20px] top-0 bottom-0 h-full w-[2px]"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <line
              ref={verticalLineRef}
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="var(--timeline-line)"
              strokeWidth="2"
            />
          </svg>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <MobileProcessCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Step {
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

function ProcessCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
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
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.06 * index,
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
      }}
      whileHover={{
        y: -6,
        boxShadow: "var(--shadow-card-hover)",
        borderColor: "var(--border-accent-hover)",
      }}
      className="relative flex-1 rounded-[20px] border px-5 py-7 text-center"
      style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
    >
      {/* Watermark number */}
      <div className="pointer-events-none absolute left-1/2 top-[-20px] -translate-x-1/2 font-bebas text-[80px] text-cobalt opacity-[0.07]">
        {index + 1}
      </div>

      {/* Step badge */}
      <div className="absolute left-1/2 top-[-14px] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 font-dmsans text-[11px] font-bold" style={{ background: "var(--step-badge-bg)", color: "var(--step-badge-text)", borderColor: "var(--step-badge-border)" }}>
        {index + 1}
      </div>

      <div className="relative z-10 mt-4 flex flex-col items-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border text-cobalt" style={{ borderColor: "var(--border-accent)", background: "var(--bg-icon)" }}>
          <Icon size={22} />
        </div>
        <div className="mb-2 font-rajdhani text-[16px] font-bold text-off-white">
          {step.title}
        </div>
        <p className="font-dmsans text-[13px] leading-[1.6] text-text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function MobileProcessCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
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
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.06 * index,
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
      }}
      className="relative ml-[52px] rounded-[20px] border px-5 py-6"
      style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
    >
      {/* Timeline dot */}
      <div className="pointer-events-none absolute left-[-40px] top-6 h-[14px] w-[14px] rounded-full border-2 bg-cobalt shadow-[var(--shadow-glow)]" style={{ borderColor: "var(--step-badge-border)" }} />

      {/* Watermark number */}
      <div className="pointer-events-none absolute left-1/2 top-[-16px] -translate-x-1/2 font-bebas text-[64px] text-cobalt opacity-[0.07]">
        {index + 1}
      </div>

      {/* Step badge */}
      <div className="absolute left-1/2 top-[-12px] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 font-dmsans text-[11px] font-bold" style={{ background: "var(--step-badge-bg)", color: "var(--step-badge-text)", borderColor: "var(--step-badge-border)" }}>
        {index + 1}
      </div>

      <div className="relative z-10 mt-3 flex flex-col items-center text-center">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[14px] border text-cobalt" style={{ borderColor: "var(--border-accent)", background: "var(--bg-icon)" }}>
          <Icon size={20} />
        </div>
        <div className="mb-1 font-rajdhani text-[16px] font-bold text-off-white">
          {step.title}
        </div>
        <p className="font-dmsans text-[13px] leading-[1.6] text-text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

