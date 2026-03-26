"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface AdvancedParticlesProps {
  count?: number;
  interactive?: boolean;
}

function AdvancedParticles({ 
  count = 20, 
  interactive = true 
}: AdvancedParticlesProps) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  const adjustedCount = isMobile ? Math.floor(count / 2) : count;
  
  const particles = useMemo(
    () =>
      Array.from({ length: adjustedCount }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 5;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 30;
        const endY = startY - 20 - Math.random() * 40;
        
        return {
          id: i,
          size,
          duration,
          delay,
          startX,
          startY,
          endX,
          endY,
          opacity: 0.3 + Math.random() * 0.4,
          color: i % 3 === 0 ? "rgba(27, 79, 216, 0.6)" : 
                 i % 3 === 1 ? "rgba(51, 102, 255, 0.5)" : 
                 "rgba(192, 200, 216, 0.4)",
        };
      }),
    [adjustedCount]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            willChange: 'transform, opacity',
          }}
          initial={{
            x: `${p.startX}%`,
            y: `${p.startY}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [`${p.startX}%`, `${p.endX}%`, `${p.startX}%`],
            y: [`${p.startY}%`, `${p.endY}%`, `${p.startY}%`],
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={
            interactive
              ? {
                  scale: 2,
                  opacity: p.opacity * 1.5,
                  transition: { duration: 0.3 },
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default React.memo(AdvancedParticles);
