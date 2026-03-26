"use client";
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduce(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setShouldReduce(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return shouldReduce;
}
