"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.96)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-5 top-5 z-[10000] flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-white/[0.18] cursor-pointer pointer-events-auto"
        style={{
          background: "rgba(255,255,255,0.08)",
          borderColor: "rgba(255,255,255,0.15)",
        }}
        aria-label="Close"
      >
        <X size={20} className="text-white" />
      </button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-5 top-1/2 z-[10000] flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border cursor-pointer pointer-events-auto"
        style={{
          background: "rgba(var(--accent-rgb), 0.12)",
          borderColor: "rgba(var(--accent-rgb), 0.3)",
        }}
        aria-label="Previous"
        whileHover={{
          scale: 1.1,
          background: "rgba(var(--accent-rgb), 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} className="text-white" />
      </motion.button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-5 top-1/2 z-[10000] flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border cursor-pointer pointer-events-auto"
        style={{
          background: "rgba(var(--accent-rgb), 0.12)",
          borderColor: "rgba(var(--accent-rgb), 0.3)",
        }}
        aria-label="Next"
        whileHover={{
          scale: 1.1,
          background: "rgba(var(--accent-rgb), 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} className="text-white" />
      </motion.button>

      <div
        className="absolute inset-0 flex items-center justify-center px-[80px] py-[72px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full h-full"
          style={{
            maxWidth: "min(88vw, 1280px)",
            maxHeight: "82vh",
          }}
        >
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 24,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full h-full overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(148,163,184,0.15)",
              background:
                "radial-gradient(circle at top, rgba(15,23,42,0.75) 0, rgba(15,23,42,0.4) 35%, transparent 70%)",
            }}
          >
            <Image
              src={current.src}
              alt={current.alt ?? "Gallery image"}
              fill
              className="object-contain"
              unoptimized={current.src.startsWith("data:")}
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border px-5 py-1.5 font-dmsans text-[13px]"
        style={{
          color: "rgba(255,255,255,0.45)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
