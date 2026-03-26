"use client";

import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: { duration?: number; ease?: string; delay?: number };
  as?: keyof typeof motion;
  once?: boolean;
  amount?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ScrollReveal({
  children,
  className,
  variants = defaultVariants,
  transition,
  as = "div",
  once = true,
  amount = 0.1,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: amount,
    rootMargin: "0px 0px -40px 0px",
  });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </Component>
  );
}
