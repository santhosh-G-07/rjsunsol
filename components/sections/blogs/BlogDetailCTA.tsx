"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import type { BlogPost } from "@/lib/constants";

export default function BlogDetailCTA({ post }: { post: BlogPost }) {
  return (
    <section
      className="border-t px-6 py-[60px]"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mx-auto max-w-[680px] text-center">
        <div
          className="font-bebas text-[120px] leading-none opacity-[0.15]"
          style={{ color: "var(--accent)", marginBottom: "-20px" }}
          aria-hidden
        >
          “
        </div>

        <p
          className="mb-8 font-rajdhani text-[22px] font-semibold italic leading-[1.5]"
          style={{ color: "var(--text-primary)" }}
        >
          {post.cta}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl px-6 py-3 font-rajdhani text-[14px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{
              background: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Get a Free Quote
          </Link>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-6 py-3 font-rajdhani text-[14px] font-semibold uppercase tracking-wider transition-colors hover:opacity-90"
            style={{
              borderColor: "var(--border-accent)",
              color: "var(--text-secondary)",
            }}
          >
            WhatsApp Us
          </a>
        </div>

        <Link
          href="/blogs"
          className="mt-8 inline-flex items-center gap-2 font-dmsans text-[14px] transition-colors hover:opacity-80"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={16} aria-hidden />
          Back to all articles
        </Link>
      </div>
    </section>
  );
}
