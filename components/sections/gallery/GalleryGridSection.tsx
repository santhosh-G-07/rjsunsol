"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { type LightboxImage } from "@/components/ui/Lightbox";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/gallery-images.generated";

const Lightbox = dynamic(() => import("@/components/ui/Lightbox"), { 
  ssr: false 
});

const CATEGORY_ASPECT: Record<string, string> = {
  "Solar Farms": "16/10",
  Installation: "4/5",
  "Civil Works": "4/3",
  Team: "16/9",
};

function getCategoryCount(category: string): number {
  if (category === "All") return GALLERY_IMAGES.length;
  return GALLERY_IMAGES.filter((img) => img.category === category).length;
}

export default function GalleryGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "120px 0px 120px 0px",
  });

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) setHasRevealed(true);
  }, [inView]);

  useEffect(() => {
    if (hasRevealed) return;
    const checkInView = () => {
      const el = sectionRef.current;
      if (!el || typeof window === "undefined") return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        setHasRevealed(true);
      }
    };
    const t = setTimeout(checkInView, 600);
    const interval = setInterval(checkInView, 350);
    const stop = setTimeout(() => clearInterval(interval), 3500);
    return () => {
      clearTimeout(t);
      clearTimeout(stop);
      clearInterval(interval);
    };
  }, [hasRevealed, sectionRef]);

  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const lightboxImages = useMemo<LightboxImage[]>(
    () => filteredImages.map((img) => ({
      src: img.src,
      alt: img.alt,
    })),
    [filteredImages]
  );

  const onClose = useCallback(() => setSelectedIndex(null), []);
  const onNext = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % filteredImages.length
    );
  }, [filteredImages.length]);
  const onPrev = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  return (
    <>
      <section
        ref={setSectionRef}
        className="py-24 pb-32"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="container-custom">
          <SectionHeading
            eyebrow="FULL PORTFOLIO"
            headingLine1="Captured On"
            headingLine2="Every Site"
            description="Browse by category or view everything at once. Click any image to open full screen."
          />

          <div className="mb-14 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count = getCategoryCount(cat);
              return (
                <motion.button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(cat)}
                  className="flex cursor-pointer items-center gap-2 rounded-full border px-6 py-2.5 font-rajdhani text-[14px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ease-out"
                  style={{
                    background: isActive ? "var(--gradient-accent)" : "var(--bg-card)",
                    borderColor: isActive ? "var(--border-accent-hover)" : "var(--border-color)",
                    color: isActive ? "var(--btn-primary-text)" : "var(--text-muted)",
                    boxShadow: isActive ? "var(--shadow-button)" : undefined,
                  }}
                >
                  {cat}
                  <span
                    className="flex h-[22px] w-[22px] items-center justify-center rounded-full font-dmsans text-[11px] font-bold"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.15)"
                        : "var(--bg-icon)",
                    }}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div
            id="gallery-grid"
            role="tabpanel"
            className="columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4"
            style={{ columnGap: 16 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={
                    hasRevealed
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.85, y: 20 }
                  }
                  exit={{ opacity: 0, scale: 0.85, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  style={{
                    breakInside: "avoid",
                    marginBottom: 16,
                    aspectRatio: CATEGORY_ASPECT[img.category] ?? "16/10",
                    borderColor: "var(--border-subtle)",
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border"
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedIndex(index)
                    }
                  }}
                  >
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to top, rgba(var(--accent-dark-rgb), 0.85) 0%, rgba(var(--accent-rgb), 0.2) 50%, transparent 100%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span
                      className="inline-block rounded-full border px-3.5 py-1 font-dmsans text-[11px] uppercase tracking-[0.1em] text-white"
                      style={{
                        background: "rgba(var(--accent-rgb), 0.25)",
                        borderColor: "rgba(var(--accent-rgb), 0.4)",
                      }}
                    >
                      {img.category}
                    </span>
                  </div>
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={22} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            images={lightboxImages}
            currentIndex={selectedIndex}
            onClose={onClose}
            onNext={onNext}
            onPrev={onPrev}
          />
        )}
      </AnimatePresence>
    </>
  );
}
