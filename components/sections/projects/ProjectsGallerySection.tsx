"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ZoomIn } from "lucide-react";
import { type LightboxImage } from "@/components/ui/Lightbox";
import { PROJECTS_GALLERY_IMAGES } from "@/lib/site-images";

const Lightbox = dynamic(() => import("@/components/ui/Lightbox"), { 
  ssr: false 
});

const lightboxImages: LightboxImage[] = PROJECTS_GALLERY_IMAGES.map((img) => ({
  src: img.src,
  alt: img.alt,
  width: img.width,
  height: img.height,
}));

export default function ProjectsGallerySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % lightboxImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);
  }, []);

  return (
    <>
      <section ref={ref} className="bg-graphite-mid py-[120px]">
        <div className="container-custom">
          <div className="mx-auto mb-[72px] max-w-[700px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ background: "var(--pill-bg)", borderColor: "var(--pill-border)", color: "var(--pill-text)" }}
            >
              <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
              <span className="font-dmsans text-[12px] tracking-[0.16em]">
                PROJECT GALLERY
              </span>
            </motion.div>

            <div className="mt-5">
              {["Our Work", "In the Field"].map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                  animate={
                    inView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}
                  }
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.12 * idx,
                  }}
                  className="overflow-hidden"
                >
                  <span
                    className={`block font-rajdhani text-[clamp(40px,5vw,58px)] font-bold leading-[1.02] tracking-[-0.02em] ${
                      idx === 1 ? "text-cobalt" : "text-off-white"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mt-5 font-dmsans text-[17px] font-light leading-[1.75] text-silver"
            >
              Real photos from real projects — every image tells the story of our
              team&apos;s dedication to quality solar delivery.
            </motion.p>
          </div>

          <div
            className="columns-2 gap-4 md:columns-3 lg:columns-4"
            style={{ columnGap: "16px" }}
          >
            {PROJECTS_GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.04 * index,
                }}
                variants={{ hover: {} }}
                whileHover="hover"
                style={{ breakInside: "avoid", marginBottom: "16px" }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06]"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-cobalt/25"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  initial="rest"
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    variants={{
                      rest: { scale: 0 },
                      hover: { scale: 1 },
                    }}
                    initial="rest"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ZoomIn size={32} className="text-white" />
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={lightboxImages}
            currentIndex={currentIndex}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </>
  );
}
