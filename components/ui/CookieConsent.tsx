"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "rjsunsol-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[150] px-4 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.3)] md:px-6"
      style={{
        background: "var(--footer-bg)",
        borderTop: "1px solid var(--footer-border)",
      }}
    >
      <div className="container-custom flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <p className="font-dmsans text-sm text-center sm:text-left" style={{ color: "var(--footer-text)" }}>
          We use minimal cookies to remember your preferences. By continuing, you agree to our{" "}
          <Link
            href="/cookies"
            className="underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link-on-dark)]"
            style={{ color: "var(--link-on-dark)" }}
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cookies"
            className="font-rajdhani text-sm font-semibold uppercase tracking-wider underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link-on-dark)]"
            style={{ color: "var(--link-on-dark)" }}
          >
            Learn more about our Cookie Policy
          </Link>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg border px-4 py-2 font-rajdhani text-sm font-semibold uppercase tracking-wider transition-colors"
            style={{
              background: "var(--gradient-accent)",
              color: "var(--btn-primary-text)",
              borderColor: "var(--border-accent-hover)",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
