"use client";
import { useEffect, useState } from "react";

export function usePerformanceMode() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const cores = navigator.hardwareConcurrency || 2;
      const memory = (navigator as any).deviceMemory || 4;
      
      setIsLowEnd(isMobile && (cores <= 4 || memory <= 4));
    };
    
    checkPerformance();
  }, []);

  return isLowEnd;
}
