import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the RJ Sunsol Green Energy website. Rules and conditions for using rjsunsol.com.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="bg-graphite min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-rajdhani text-3xl font-bold md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Terms of Use
          </h1>
          <p className="mt-2 font-dmsans text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 font-dmsans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website rjsunsol.com (the &quot;Site&quot;) operated by RJ Sunsol Green Energy, you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                2. Use of the Site
              </h2>
              <p>
                You may use the Site only for lawful purposes and in accordance with these Terms. You must not use the Site in any way that could damage, disable, or impair the Site or interfere with any other party&apos;s use of the Site. You may not attempt to gain unauthorized access to any part of the Site or any systems or networks connected to it.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                3. Content and Information
              </h2>
              <p>
                The content on the Site (including text, images, and other materials) is for general information only. It does not constitute professional advice. We strive to keep information accurate and up to date but do not warrant that all content is complete, current, or error-free. Reliance on any information on the Site is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                4. Intellectual Property
              </h2>
              <p>
                The Site and its content (including logos, design, and text) are owned by RJ Sunsol Green Energy or its licensors. You may not copy, reproduce, distribute, or create derivative works from the Site content without our prior written permission, except for personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                5. Links to Other Websites
              </h2>
              <p>
                The Site may contain links to third-party websites (e.g. WhatsApp, social media). We are not responsible for the content or practices of those sites. Your use of third-party sites is at your own risk and subject to their terms and policies.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, RJ Sunsol Green Energy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the Site, or from any content or conduct of any third party on the Site.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                7. Changes
              </h2>
              <p>
                We may update these Terms of Use from time to time. The &quot;Last updated&quot; date at the top will be revised. Continued use of the Site after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-rajdhani text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                8. Contact
              </h2>
              <p>
                For questions about these Terms of Use, contact us at{" "}
                <a href="mailto:rjsunsolgreenenergy2024@gmail.com" className="underline" style={{ color: "var(--accent)" }}>
                  rjsunsolgreenenergy2024@gmail.com
                </a>{" "}
                or +91 70320 35976.
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
