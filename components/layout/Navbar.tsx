"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Cpu,
  Wrench,
  ClipboardList,
  Activity,
  Home,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { NAV_LINKS, SERVICES_MEGA, CONTACT } from "@/lib/constants";
import { ASSET_PATHS } from "@/lib/site-images";

const iconMap = {
  Cpu,
  Wrench,
  ClipboardList,
  Activity,
  Home,
  Settings,
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [flapEnabled, setFlapEnabled] = useState(false); // md+ only (desktop + tablets)
  const [headerVisible, setHeaderVisible] = useState(true);

  const prevScrollYRef = useRef(0);
  const latestScrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Enable flap animation only for desktop/tablet widths.
    // Tailwind `md` breakpoint is 768px.
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setFlapEnabled(mq.matches);

    onChange();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
    } else {
      // Safari fallback
      mq.addListener(onChange);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", onChange);
      } else {
        // Safari fallback
        mq.removeListener(onChange);
      }
    };
  }, []);

  useEffect(() => {
    // Shared scroll logic:
    // - keep your existing `scrolled` styling
    // - flap header on scroll direction (desktop/tablet only)
    prevScrollYRef.current = window.scrollY;
    latestScrollYRef.current = window.scrollY;

    const commit = () => {
      rafRef.current = null;

      const curr = latestScrollYRef.current;
      const prev = prevScrollYRef.current;
      const delta = curr - prev;

      setScrolled(curr > 80);

      // Never flap while menus are open.
      // Also don't flap immediately near the top, otherwise it can clash
      // with hero/header overlays (like your "Trusted Solar..." pill).
      if (!flapEnabled || mobileOpen || servicesOpen || curr <= 80) {
        setHeaderVisible(true);
        prevScrollYRef.current = curr;
        return;
      }

      // Reduce jitter on tiny scroll movements.
      if (Math.abs(delta) >= 6) {
        setHeaderVisible(delta < 0); // up => visible, down => hidden
      }

      prevScrollYRef.current = curr;
    };

    const onScroll = () => {
      latestScrollYRef.current = window.scrollY;

      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(commit);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [flapEnabled, mobileOpen, servicesOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <motion.header
        initial={false}
        animate={{
          opacity: flapEnabled && !headerVisible ? 0 : 1,
          // Hinge/flap animation: rotate around the top edge (no glide).
          rotateX: flapEnabled && !headerVisible ? 90 : 0,
        }}
        // transition={{ duration: 0.35, ease: "easeInOut" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          // Pin exactly to the top edge so it behaves like a hinged window.
          transformOrigin: "50% 0%",
          perspective: 1000,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform, opacity",
          pointerEvents: flapEnabled && !headerVisible ? "none" : "auto",
        }}
        className="fixed left-0 right-0 top-0 z-[100] h-16 md:h-[76px] w-full overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-between gap-4 border-b border-transparent px-5 transition-[box-shadow] duration-500 ease-out md:gap-0 md:px-6 lg:px-8"
          animate={{
            background: scrolled ? "var(--navbar-bg)" : "rgba(0, 0, 0, 0.35)",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px)",
            borderBottomColor: scrolled ? "var(--navbar-border)" : "rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.4)"
              : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="container-custom flex w-full items-center justify-between gap-4 md:gap-0">
            {/* Logo */}
            <motion.div id="navbar-logo" className="shrink-0">
              <Link href="/" className="flex items-center gap-1 cursor-hover md:gap-2">
                {/* Logo sized to fit between top and bottom of the "R" in RJ SUNSOL (1em = cap height of that line) */}
                <span className="font-bebas text-[16px] leading-none md:text-[24px]" style={{ lineHeight: 1 }}>
                  <motion.span
                    id="navbar-logo-icon"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative inline-flex h-[1.35em] w-[1.35em] shrink-0 align-middle"
                  >
                    <Image
                      src={ASSET_PATHS.logo}
                      alt="RJ Sunsol Green Energy"
                      width={36}
                      height={36}
                      className="object-contain size-full"
                    />
                  </motion.span>
                </span>
                <div className="min-w-0">
                  <div className="font-bebas text-[16px] leading-tight tracking-[0.08em] md:text-[24px]">
                    <span className="text-cobalt">RJ</span>
                    <span className="text-off-white"> SUNSOL</span>
                  </div>
                  <div className="font-dmsans text-[7px] font-medium uppercase tracking-[0.2em] text-silver md:text-[9px] md:tracking-[0.25em]">
                    GREEN ENERGY
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Center nav — desktop only */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="relative"
                  onMouseEnter={() =>
                    item.label === "Services" ? setServicesOpen(true) : null
                  }
                  onMouseLeave={() =>
                    item.label === "Services" ? setServicesOpen(false) : null
                  }
                >
                  {item.label === "Services" ? (
                    <Link
                      href="/services"
                      className={`nav-link relative inline-block font-rajdhani text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-cobalt cursor-hover ${
                        pathname?.startsWith("/services") ? "text-cobalt" : "text-white"
                      }`}
                      aria-haspopup="true"
                    >
                      Services
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-link relative inline-block font-rajdhani text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-cobalt cursor-hover ${
                        item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
                          ? "text-cobalt"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mega dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  role="menu"
                  aria-label="Services menu"
                  initial={{ opacity: 0, y: -12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-1/2 top-full z-50 min-w-[480px] -translate-x-1/2 rounded-2xl border p-6 shadow-[0_24px_64px_rgba(0,0,0,0.6)] backdrop-blur-[24px]"
                  style={{
                    background: "var(--navbar-bg)",
                    borderColor: "var(--border-accent)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px var(--border-accent)",
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.04 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-3"
                  >
                    {SERVICES_MEGA.map((s) => {
                      const Icon = iconMap[s.icon as keyof typeof iconMap];
                      return (
                        <motion.div
                          key={s.slug}
                          variants={{
                            hidden: { opacity: 0, y: -12 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.2,
                                ease: "easeOut",
                              },
                            },
                          }}
                        >
                          <Link
                            href={`/services/${s.slug}`}
                            className="cursor-hover flex items-start gap-3 rounded-lg border-l-2 border-transparent bg-transparent p-2 transition-[background,border-color] duration-200 hover:border-[var(--border-accent-hover)] hover:bg-[var(--bg-card-hover)] [&_.icon-bg]:hover:bg-[var(--bg-icon-hover)]"
                          >
                            <span className="icon-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cobalt/15 text-cobalt transition-colors duration-200">
                              {Icon && <Icon size={18} />}
                            </span>
                            <div>
                              <div className="font-rajdhani text-[15px] font-semibold text-white">
                                {s.name}
                              </div>
                              <div className="font-dmsans text-[12px] text-text-muted">
                                {s.description}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right: WhatsApp + Get Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex shrink-0 items-center gap-4 md:gap-3"
            >
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp (opens in new tab)"
                className="cursor-hover hidden items-center gap-1 rounded-[10px] border border-[rgba(37,211,102,0.3)] bg-[rgba(37,211,102,0.1)] px-2.5 py-2 text-[#25D366] transition-colors duration-200 hover:bg-[rgba(37,211,102,0.2)] sm:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle size={20} aria-hidden />
              </a>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact#get-quote"
                  className="get-quote-btn cursor-hover relative block overflow-hidden rounded-[10px] border px-3 py-2 font-rajdhani text-[11px] font-bold uppercase tracking-wider md:px-5 md:py-2.5 md:text-[13px]"
                  style={{
                    background: "var(--btn-primary-bg)",
                    color: "var(--btn-primary-text)",
                    borderColor: "var(--btn-primary-border)",
                    boxShadow: "var(--shadow-button)",
                  }}
                >
                  Get Quote
                </Link>
              </motion.div>

              {/* Mobile hamburger */}
              <motion.button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((o) => !o)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
              >
                <motion.span
                  animate={{
                    rotate: mobileOpen ? 45 : 0,
                    y: mobileOpen ? 5 : 0,
                  }}
                  className="h-0.5 w-[18px] rounded-full bg-cobalt"
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  className="h-0.5 w-[18px] rounded-full bg-cobalt"
                />
                <motion.span
                  animate={{
                    rotate: mobileOpen ? -45 : 0,
                    y: mobileOpen ? -5 : 0,
                  }}
                  className="h-0.5 w-[18px] rounded-full bg-cobalt"
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-full flex-col lg:hidden"
              style={{
                backgroundColor: "var(--bg-primary)",
                backgroundImage:
                  "radial-gradient(600px circle at 0% 0%, rgba(var(--accent-rgb),0.08), transparent)",
              }}
            >
              <div className="flex items-center justify-between border-b border-graphite-light p-6">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={ASSET_PATHS.logo}
                      alt="RJ Sunsol Green Energy"
                      width={36}
                      height={36}
                    />
                    <div>
                      <div className="font-bebas text-lg tracking-wider">
                        <span className="text-cobalt">RJ</span>
                        <span className="text-off-white"> SUNSOL</span>
                      </div>
                      <div className="font-dmsans text-[8px] uppercase tracking-widest text-silver">
                        GREEN ENERGY
                      </div>
                    </div>
                  </div>
                </Link>
                <motion.button
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-graphite-light text-silver-light hover:border-cobalt hover:text-cobalt"
                >
                  <X size={20} />
                </motion.button>
              </div>
              <nav className="flex flex-1 flex-col gap-6 px-6 py-8 overflow-y-auto">
                {NAV_LINKS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="w-full border-b border-graphite-light pb-4 text-center"
                  >
                    {item.label === "Services" ? (
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="font-rajdhani text-3xl font-bold text-silver-light transition-colors hover:text-cobalt hover:translate-x-1 block"
                      >
                        Services
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-rajdhani text-3xl font-bold text-silver-light transition-colors hover:text-cobalt hover:translate-x-1 block"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="sticky bottom-0 space-y-4 border-t border-graphite-light px-6 py-4 bg-[var(--bg-primary)]">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp (opens in new tab)"
                  className="cursor-hover flex items-center justify-center gap-2 rounded-[10px] border border-[rgba(37,211,102,0.3)] bg-[rgba(37,211,102,0.1)] py-3 text-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                >
                  <MessageCircle size={20} aria-hidden /> WhatsApp
                </a>
                <Link
                  href="/contact#get-quote"
                  onClick={() => setMobileOpen(false)}
                  className="cursor-hover block rounded-[10px] bg-gradient-to-br from-cobalt to-cobalt-dark py-3 text-center font-rajdhani text-sm font-bold uppercase tracking-wider text-off-white"
                >
                  Get Quote
                </Link>
                <div className="font-dmsans text-[13px] text-text-muted text-center space-y-1">
                  <div>+91 70320 35976</div>
                  <div>{CONTACT.email}</div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
