"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Image with loading skeleton. Always pass a meaningful `alt` for content images;
 * use alt="" only for purely decorative images.
 */
export default function ImageWithSkeleton(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const alt = props.alt ?? "";

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 animate-shimmer"
            style={{
              background: "linear-gradient(90deg, rgba(37, 40, 56, 0.8) 0%, rgba(45, 49, 72, 0.9) 50%, rgba(37, 40, 56, 0.8) 100%)",
              backgroundSize: "200% 100%",
            }}
          />
        )}
      </AnimatePresence>
      <Image
        {...props}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${props.className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
