"use client";

import Image from "next/image";
import { MARQUEE_ROW1, MARQUEE_ROW2 } from "@/lib/site-images";

export default function PhotoMarquee() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "var(--marquee-bg)" }}>
      <div className="container-custom relative">
        <div className="text-center">
          <div className="font-rajdhani text-[13px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--marquee-label)" }}>
            OUR WORK IN ACTION
          </div>
          <div className="mt-3 h-px w-12 mx-auto bg-cobalt" style={{ background: "var(--marquee-label)" }} />
        </div>

        <div className="mt-12 group">
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
            {/* Row 1 */}
            <div className="marquee-row flex gap-2 py-2">
              {[...MARQUEE_ROW1, ...MARQUEE_ROW1].map((img, idx) => (
                <MarqueeImage key={`r1-${idx}-${img.src}`} src={img.src} alt={img.alt} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="marquee-row marquee-row-reverse mt-4 flex gap-2 py-2">
              {[...MARQUEE_ROW2, ...MARQUEE_ROW2].map((img, idx) => (
                <MarqueeImage key={`r2-${idx}-${img.src}`} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MarqueeImageProps {
  src: string;
  alt: string;
}

function MarqueeImage({ src, alt }: MarqueeImageProps) {
  return (
    <div className="relative mx-2 h-[180px] w-[280px] flex-shrink-0 overflow-hidden rounded-[16px] border" style={{ borderColor: "var(--border-subtle)" }}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 280px"
        className="object-cover"
      />
    </div>
  );
}

