import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="bg-graphite min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-rajdhani text-6xl md:text-8xl font-bold" style={{ color: "var(--accent)" }}>
          404
        </h1>
        <p className="mt-4 font-rajdhani text-xl md:text-2xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Page not found
        </p>
        <p className="mt-2 font-dmsans text-sm" style={{ color: "var(--text-muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border px-6 py-3 font-rajdhani text-sm font-semibold uppercase tracking-wider transition-colors"
          style={{
            background: "var(--gradient-accent)",
            color: "var(--btn-primary-text)",
            borderColor: "var(--border-accent-hover)",
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
