 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";
import AdvancedParticles from "@/components/ui/AdvancedParticles";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-[120px] pb-[160px]">
      {/* Background image with Ken Burns (slow zoom) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ willChange: "transform" }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={ASSET_PATHS.sectionBgNight}
            alt="Night solar background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(8,12,28,0.4) 0%, rgba(8,12,28,0.6) 100%)",
          }}
        />
      </div>

      {/* Advanced particles */}
      <AdvancedParticles count={20} interactive={false} />

      {/* Original floating particles (kept for layering) */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        {Array.from({ length: 8 }).map((_, i) => {
          const size = 3 + ((i * 5) % 6); // 3–8px
          const top = `${10 + ((i * 11) % 70)}%`;
          const left = `${5 + ((i * 17) % 90)}%`;
          const opacity = 0.15 + ((i * 3) % 20) / 100; // 0.15–0.35
          const reverse = i % 2 === 0;

          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-silver"
              style={{ width: size, height: size, top, left, opacity }}
              animate={{
                y: reverse ? [0, -24, 0] : [0, 24, 0],
                x: reverse ? [0, 12, 0] : [0, -12, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 font-bebas text-[18px] uppercase tracking-[0.3em] text-white/60"
          >
            READY TO GO SOLAR?
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            {["Let's Build Your Solar", "Plant Today."].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.15 * idx,
                }}
              >
                <span
                  className={`block font-rajdhani text-[clamp(36px,6vw,72px)] font-bold leading-[1] tracking-[-0.02em] text-off-white ${
                    idx === 1
                      ? "drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.8)]"
                      : ""
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="mt-6 font-dmsans text-[18px] font-light leading-[1.7] text-white/80"
          >
            Get a free consultation and custom quote from India&apos;s trusted
            solar EPC experts.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="/contact#get-quote"
              className="cta-primary cursor-hover relative overflow-hidden rounded-[14px] border-2 px-11 py-[18px] font-rajdhani text-[15px] font-bold uppercase tracking-[0.1em] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              style={{
                background: "var(--cta-btn-bg)",
                color: "var(--cta-btn-text)",
                borderColor: "var(--cta-btn-border)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Your Free Quote
            </motion.a>

            <motion.a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover inline-flex items-center gap-2 rounded-[14px] border border-white/35 px-9 py-[18px] font-rajdhani text-[15px] font-bold uppercase tracking-[0.1em] text-off-white"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              <span>WhatsApp Us Now</span>
            </motion.a>
          </motion.div>

          {/* Contact line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[14px] font-dmsans tracking-[0.05em] text-white/60"
          >
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="cursor-hover transition-colors hover:text-white/90"
            >
              {CONTACT.phone}
            </a>
            <span className="hidden text-white/40 sm:inline-block">·</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="cursor-hover transition-colors hover:text-white/90"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

