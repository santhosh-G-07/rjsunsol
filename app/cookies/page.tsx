import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for RJ Sunsol Green Energy. How we use cookies and similar technologies on rjsunsol.com.",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
  },
};

export default function CookiePolicyPage() {
  return (
    <main id="main-content" className="bg-graphite min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-rajdhani text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Cookie Policy
          </h1>
          <p className="mt-2 font-dmsans text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 font-dmsans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files that websites may place on your device when you visit. They are widely used to make sites work more efficiently, remember preferences, or understand how visitors use the site.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                2. How We Use Cookies
              </h2>
              <p>
                At present, our website rjsunsol.com does not use cookies for tracking, advertising, or analytics. We do not set any non-essential cookies. If we introduce cookies in the future (for example, to remember your preferences or to improve the site), we will update this policy and, where required by law, ask for your consent before placing non-essential cookies on your device.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                3. Cookie Consent
              </h2>
              <p>
                When you first visit our site, you may see a short message about our use of cookies and a way to accept or learn more. Your choice is stored locally in your browser so we do not show the message again on future visits. You can change your mind at any time by clearing your browser data or revisiting this page.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                4. Third-Party Cookies
              </h2>
              <p>
                Our site may link to third-party services (e.g. WhatsApp, Facebook, Instagram). Those services may use their own cookies when you interact with them. We do not control third-party cookies; please check their respective privacy and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                5. Your Choices
              </h2>
              <p>
                You can control or delete cookies through your browser settings. Blocking or deleting cookies may affect how some parts of our site or other websites work.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                6. More Information
              </h2>
              <p>
                For more about how we handle your information, see our{" "}
                <Link href="/privacy" className="underline" style={{ color: "var(--accent)" }}>
                  Privacy Policy
                </Link>
                . For questions about this Cookie Policy, contact us at{" "}
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
