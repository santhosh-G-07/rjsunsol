"use client";
import React from "react";

interface AnimatedGradientOverlayProps {
  variant?: "hero" | "section" | "subtle";
  speed?: number;
}

function AnimatedGradientOverlay({ 
  variant = "hero",
  speed = 15
}: AnimatedGradientOverlayProps) {
  const className = `animated-gradient-${variant}`;
  
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ animationDuration: `${speed}s` }}
    />
  );
}

export default React.memo(AnimatedGradientOverlay);
