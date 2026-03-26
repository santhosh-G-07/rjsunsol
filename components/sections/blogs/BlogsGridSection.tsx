"use client";

import Image from "next/image";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BLOGS_DATA } from "@/lib/constants";

export default function BlogsGridSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      className="relative py-[80px] pb-[120px]"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-custom relative">
        {/* Section heading */}
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-[700px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              background: "var(--pill-bg)",
              borderColor: "var(--pill-border)",
              color: "var(--pill-text)",
            }}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-cobalt" />
            <span className="font-dmsans text-[12px] tracking-[0.14em]">
              ALL ARTICLES
            </span>
          </motion.div>
          <div className="mt-4">
            {["Solar Knowledge", "Worth Reading"].map((line, idx) => (
              <motion.div
                key={line}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={
                  headerInView
                    ? { clipPath: "inset(0% 0 0 0)" }
                    : {}
                }
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.12 * idx,
                }}
                className="overflow-hidden"
              >
                <span
                  className={`block font-rajdhani text-[clamp(36px,4.5vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] ${
                    idx === 1 ? "text-cobalt" : ""
                  }`}
                  style={
                    idx === 0 ? { color: "var(--text-primary)" } : undefined
                  }
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="mx-auto mt-4 max-w-[560px] font-dmsans text-[16px] font-light leading-[1.7]"
            style={{ color: "var(--text-muted)" }}
          >
            In-depth guides to help you make informed solar decisions.
          </motion.p>
        </div>

        {/* Grid — items-stretch so all cards in a row share the same height */}
        <div className="mx-auto grid max-w-[1000px] gap-8 md:grid-cols-2 md:items-stretch">
          {BLOGS_DATA.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  post,
  index,
}: {
  post: (typeof BLOGS_DATA)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="h-full min-h-0"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 * index,
      }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="group flex h-full min-h-0 flex-col cursor-pointer overflow-hidden rounded-[20px] border transition-[border-color,box-shadow] duration-300"
        style={{
          background: "var(--bg-card)",
          borderColor: hovered ? "var(--border-accent)" : "var(--border-color)",
          boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative h-[220px] overflow-hidden">
          <ImageWithSkeleton
            src={post.heroImage}
            alt={`Featured image for ${post.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span
            className="absolute left-4 top-4 rounded-full px-[14px] py-1 font-dmsans text-[11px] uppercase tracking-[0.1em]"
            style={{
              background: "var(--accent)",
              color: "var(--btn-primary-text)",
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Card body — flex-1 so all cards in a row match height; content clamped */}
        <div className="flex min-h-0 flex-1 flex-col p-6">
          <div className="mb-3 flex gap-4 font-dmsans text-[12px]">
            <span
              className="flex items-center gap-1.5"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={14} aria-hidden />
              {post.readTime}
            </span>
            <span
              className="flex items-center gap-1.5"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar size={14} aria-hidden />
              {post.date}
            </span>
          </div>

          <h2
            className="mb-2.5 font-rajdhani text-[20px] font-bold leading-tight transition-colors duration-200 line-clamp-2 group-hover:[color:var(--accent)]"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h2>

          <p
            className="min-h-0 flex-1 font-dmsans text-[14px] leading-[1.65] line-clamp-3"
            style={{ color: "var(--text-muted)" }}
          >
            {post.excerpt}
          </p>

          <span
            className="mt-4 flex shrink-0 items-center gap-1.5 font-rajdhani text-[14px] font-semibold uppercase tracking-[0.08em] transition-[gap] duration-200 group-hover:gap-2.5"
            style={{ color: "var(--accent)" }}
          >
            Read More
            <ArrowRight size={14} aria-hidden />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
