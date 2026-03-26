"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <main id="main-content" className="bg-graphite min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-rajdhani text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          Something went wrong
        </h1>
        <p className="mt-4 font-dmsans text-sm" style={{ color: "var(--text-muted)" }}>
          We couldn’t load this page. Please try again or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border px-5 py-2.5 font-rajdhani text-sm font-semibold uppercase tracking-wider transition-colors"
            style={{
              background: "var(--gradient-accent)",
              color: "var(--btn-primary-text)",
              borderColor: "var(--border-accent-hover)",
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border px-5 py-2.5 font-rajdhani text-sm font-semibold uppercase tracking-wider"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
