"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface SectionHeadingProps {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
}

function SectionHeading({
  eyebrow,
  headingLine1,
  headingLine2,
  description,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="mx-auto mb-14 max-w-[700px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
        style={{
          borderColor: "rgba(var(--accent-rgb),0.35)",
          background: "rgba(var(--accent-rgb),0.12)",
        }}
      >
        <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
        <span className="font-dmsans text-[12px] tracking-[0.16em] text-silver-light">
          {eyebrow}
        </span>
      </motion.div>

      <div className="mt-5">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
          animate={inView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.12,
          }}
          className="overflow-hidden"
        >
          <span
            className="block font-rajdhani text-[clamp(40px,5vw,58px)] font-bold leading-[1.02] tracking-[-0.02em]"
            style={{ color: "var(--text-primary)" }}
          >
            {headingLine1}
          </span>
        </motion.div>
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
          animate={inView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
          }}
          className="overflow-hidden"
        >
          <span
            className="block font-rajdhani text-[clamp(40px,5vw,58px)] font-bold leading-[1.02] tracking-[-0.02em]"
            style={{ color: "var(--accent)" }}
          >
            {headingLine2}
          </span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="mt-5 font-dmsans text-[17px] font-light leading-[1.75]"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </motion.p>
    </div>
  );
}

export default React.memo(SectionHeading);
