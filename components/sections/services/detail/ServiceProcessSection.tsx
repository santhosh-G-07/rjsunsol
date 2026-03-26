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
import type { ServiceData } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const STEP_ICONS = [
  MapPin,
  PenTool,
  Package,
  Wrench,
  Zap,
  Activity,
] as const;

interface Props {
  service: ServiceData;
}

export default function ServiceProcessSection({ service }: Props) {
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

  const steps = service.processSteps.map((title, i) => ({
    title,
    icon: STEP_ICONS[i] ?? MapPin,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-graphite py-[120px]"
    >
      <div className="container-custom relative">
        <div
          ref={headerRef}
          className="mx-auto mb-[72px] max-w-[700px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em] text-silver-light">
              HOW WE DO IT
            </span>
          </motion.div>

          <div className="mt-4">
            {["Our Step-by-Step", "Process"].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={
                  headerInView
                    ? { clipPath: "inset(0% 0 0 0)" }
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
                  className={`block font-rajdhani text-[clamp(36px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : "text-off-white"
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop horizontal steps */}
        <div className="relative hidden lg:block">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 h-20 w-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M5 10 H95"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex gap-6">
            {steps.map((step, index) => (
              <ProcessStepCard key={step.title} step={step} index={index} />
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
              stroke="var(--accent)"
              strokeWidth="2"
            />
          </svg>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <MobileProcessStepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: { title: string; icon: React.ComponentType<{ size?: number | string }> };
  index: number;
}

function ProcessStepCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
        boxShadow:
          "0 0 0 1px rgba(var(--accent-rgb),0.1), 0 20px 40px rgba(0,0,0,0.3)",
        borderColor: "rgba(var(--accent-rgb),0.4)",
      }}
      className="relative flex-1 rounded-[20px] border border-graphite-light bg-graphite-mid px-5 py-7 text-center"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-20px] -translate-x-1/2 font-bebas text-[80px] text-cobalt opacity-[0.07]">
        {index + 1}
      </div>
      <div className="absolute left-1/2 top-[-14px] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-graphite-mid bg-gradient-to-br from-cobalt to-cobalt-dark font-dmsans text-[11px] font-bold text-off-white">
        {index + 1}
      </div>
      <div className="relative z-10 mt-4 flex flex-col items-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.1)] text-cobalt">
          <Icon size={22} />
        </div>
        <div className="font-rajdhani text-[16px] font-bold text-off-white">
          {step.title}
        </div>
      </div>
    </motion.div>
  );
}

function MobileProcessStepCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
      className="relative ml-[52px] rounded-[20px] border border-graphite-light bg-graphite-mid px-5 py-6"
    >
      <div className="pointer-events-none absolute left-[-40px] top-6 h-[14px] w-[14px] rounded-full border-2 border-graphite-mid bg-cobalt shadow-[0_0_12px_rgba(var(--accent-rgb),0.6)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-16px] -translate-x-1/2 font-bebas text-[64px] text-cobalt opacity-[0.07]">
        {index + 1}
      </div>
      <div className="absolute left-1/2 top-[-12px] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-graphite-mid bg-gradient-to-br from-cobalt to-cobalt-dark font-dmsans text-[11px] font-bold text-off-white">
        {index + 1}
      </div>
      <div className="relative z-10 mt-3 flex flex-col items-center text-center">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[14px] border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.1)] text-cobalt">
          <Icon size={20} />
        </div>
        <div className="font-rajdhani text-[16px] font-bold text-off-white">
          {step.title}
        </div>
      </div>
    </motion.div>
  );
}
