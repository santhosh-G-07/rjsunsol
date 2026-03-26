import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for RJ Sunsol Green Energy. How we handle information when you use our website and contact form.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="bg-graphite min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-rajdhani text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <p className="mt-2 font-dmsans text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 font-dmsans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                1. Introduction
              </h2>
              <p>
                RJ Sunsol Green Energy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website rjsunsol.com. This Privacy Policy explains how we handle information when you visit our site or use our contact form. We do not collect, store, or process your personal data on our own servers.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                2. Information We Do Not Collect on This Website
              </h2>
              <p>
                Our website does not use a database to store your personal information. We do not run analytics or tracking scripts that collect your browsing behaviour. We do not use cookies for advertising or profiling.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                3. Contact Form
              </h2>
              <p>
                When you use the &quot;Contact&quot; or &quot;Get a Quote&quot; form on our site, the information you enter (such as name, phone number, email, location, project type, and message) is not sent to our servers. Instead, the form opens WhatsApp with a pre-filled message. The data is transmitted directly from your device to WhatsApp. Any information you choose to send via WhatsApp is then subject to WhatsApp&apos;s privacy policy and our internal business practices for handling inquiries.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                4. Cookies
              </h2>
              <p>
                Our website does not use cookies for tracking or advertising. If we introduce cookies in the future (for example, for essential site functionality), we will update this policy and, where required by law, seek your consent.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                5. Third-Party Services
              </h2>
              <p>
                Our site may link to third-party services (e.g. WhatsApp, social media). We do not control their privacy practices. Please refer to their respective privacy policies when you leave our site.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                6. Your Rights
              </h2>
              <p>
                Since we do not store your data on this website, there is no personal data held by us through the site to access, correct, or delete. For any inquiries you have sent via WhatsApp or other channels, you may contact us to request information or deletion of records we hold in our business operations.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                7. Contact Us
              </h2>
              <p>
                For questions about this Privacy Policy or our practices, contact us at{" "}
                <a href="mailto:rjsunsolgreenenergy2024@gmail.com" className="underline" style={{ color: "var(--accent)" }}>
                  rjsunsolgreenenergy2024@gmail.com
                </a>{" "}
                or call +91 70320 35976.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-block font-rajdhani text-sm font-semibold uppercase tracking-wider underline"
              style={{ color: "var(--accent)" }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
