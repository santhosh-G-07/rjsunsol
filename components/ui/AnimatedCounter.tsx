"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  unit?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix,
  unit,
  duration = 2.5,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!inView) return;

    const target = value;
    const totalMs = duration * 1000;

    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / totalMs, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(current);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, inView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1">
      <span>{display}</span>
      {unit && (
        <span className="text-[40px] leading-none text-silver align-baseline">
          {unit}
        </span>
      )}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

