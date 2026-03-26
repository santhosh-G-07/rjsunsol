"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LUXURY_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const BOUNCE_EASE: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
const UNBLUR_EASE: [number, number, number, number] = [0.33, 0.66, 0.66, 1];

const TITLE = "RJ SUNSOL";
const TAGLINE = "GREEN ENERGY";

export default function IntroAnimation() {
  const [done, setDone] = useState(false);
  const [blur, setBlur] = useState(25);
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [wrapperOpacity, setWrapperOpacity] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [taglineOpacity, setTaglineOpacity] = useState(0);
  const [lineOpacity, setLineOpacity] = useState(0);
  const [lineScale, setLineScale] = useState(0);
  const [introVariant, setIntroVariant] = useState<"classic" | "slide" | "bounce">("classic");
  const [showSkip, setShowSkip] = useState(true);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const variants: Array<"classic" | "slide" | "bounce"> = ["classic", "slide", "bounce"];
    setIntroVariant(variants[Math.floor(Math.random() * variants.length)]);

    const hasPlayed = window.sessionStorage.getItem("rjsunsol_intro_played") === "1";
    if (hasPlayed) {
      setDone(true);
      return;
    }
    window.sessionStorage.setItem("rjsunsol_intro_played", "1");

    // Lock body scroll for the duration of the intro.
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const addTimeout = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timeoutsRef.current.push(id);
    };

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Compressed luxury timeline for mobile (~1.2s total)
      addTimeout(() => {}, 0);
      addTimeout(() => {
        setTextOpacity(1);
      }, 40);
      addTimeout(() => {
        setTaglineOpacity(1);
      }, 120);
      addTimeout(() => {
        setLineOpacity(1);
        setLineScale(1);
      }, 350);
      addTimeout(() => {
        setLineOpacity(0);
      }, 650);
      addTimeout(() => {
        setTextOpacity(0);
        setTaglineOpacity(0);
      }, 750);
      addTimeout(() => {
        setBlur(0);
        setOverlayOpacity(0);
      }, 950);
      addTimeout(() => {
        setWrapperOpacity(0);
      }, 1150);
      addTimeout(() => {
        setDone(true);
        document.body.style.overflow = originalOverflow;
        clearAllTimeouts();
      }, 1250);
    } else {
      // Desktop / larger screens (~2.8s total)
      addTimeout(() => {}, 0);
      addTimeout(() => {
        setTextOpacity(1);
      }, 50);
      addTimeout(() => {
        setTaglineOpacity(1);
      }, 150);
      addTimeout(() => {
        setLineOpacity(1);
        setLineScale(1);
      }, 600);
      addTimeout(() => {
        setLineOpacity(0);
      }, 1300);
      addTimeout(() => {
        setTextOpacity(0);
        setTaglineOpacity(0);
      }, 1450);
      addTimeout(() => {
        setBlur(0);
        setOverlayOpacity(0);
      }, 1700);
      addTimeout(() => {
        setWrapperOpacity(0);
      }, 2350);
      addTimeout(() => {
        setDone(true);
        document.body.style.overflow = originalOverflow;
        clearAllTimeouts();
      }, 2800);
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      clearAllTimeouts();
    };
  }, []);

  const handleSkip = () => {
    // Immediately jump to the revealed state.
    clearAllTimeouts();
    setBlur(0);
    setOverlayOpacity(0);
    setWrapperOpacity(0);
    setTextOpacity(0);
    setTaglineOpacity(0);
    setLineOpacity(0);
    setDone(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  if (done) return null;

  // Responsive sizing approximations using clamp
  const titleFontSize = "clamp(36px, 5vw, 56px)";
  const taglineFontSize = "clamp(11px, 1.2vw, 14px)";
  const lineWidth = "min(240px, 60vw)";

  const titleContainerVariants =
    introVariant === "bounce"
      ? {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }
      : {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        };

  const letterVariants =
    introVariant === "slide"
      ? {
          hidden: { opacity: 0, y: 18 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: LUXURY_EASE },
          },
        }
      : introVariant === "bounce"
        ? {
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: BOUNCE_EASE },
            },
          }
        : {
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: LUXURY_EASE },
            },
          };

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "auto",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: wrapperOpacity }}
      transition={{ duration: 0.5, ease: UNBLUR_EASE }}
    >
      {/* Backdrop: solid black blurred screen (site hidden) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          background: "#000000",
          pointerEvents: "none",
        }}
        animate={{
          opacity: overlayOpacity,
        }}
        transition={{ duration: 0.9, ease: UNBLUR_EASE }}
      />

      {/* Dark green luxury tint overlay (subtle) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(26,58,46,0.12), rgba(13,40,24,0.18))",
          pointerEvents: "none",
        }}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: 0.9, ease: UNBLUR_EASE }}
      />

      {/* Subtle floating particles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        {Array.from({ length: 18 }).map((_, i) => {
          const duration = 4 + (i % 5);
          const reverse = i % 2 === 0;
          return (
            <motion.span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              style={{
                position: "absolute",
                width: 2,
                height: 2,
                borderRadius: 999,
                backgroundColor:
                  i % 3 === 0
                    ? "rgba(192,200,216,0.7)"
                    : i % 3 === 1
                      ? "rgba(27,79,216,0.9)"
                      : "rgba(148,163,184,0.5)",
                top: `${10 + ((i * 13) % 80)}%`,
                left: `${5 + ((i * 17) % 90)}%`,
              }}
              animate={{
                y: reverse ? [0, -14, 0] : [0, 14, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Centered content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          {/* RJ SUNSOL (per-letter animation) */}
          <motion.div
            initial="hidden"
            animate={textOpacity ? "visible" : "hidden"}
            variants={titleContainerVariants}
            style={{
              fontFamily: "var(--font-rajdhani), system-ui, sans-serif",
              fontSize: titleFontSize,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textShadow: "0 2px 12px rgba(27, 79, 216, 0.25)",
              display: "inline-block",
            }}
          >
            {TITLE.split("").map((ch, idx) => {
              const isSpace = ch === " ";
              const isRJ = idx <= 1 && !isSpace;
              const color = isSpace ? "#FFFFFF" : isRJ ? "#1B4FD8" : "#FFFFFF";
              return (
                <motion.span
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  variants={letterVariants}
                  style={{
                    display: "inline-block",
                    minWidth: isSpace ? 8 : undefined,
                    color,
                  }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </motion.div>

          {/* GREEN ENERGY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: taglineOpacity, y: taglineOpacity ? 0 : 15 }}
            transition={{ duration: 0.5, ease: BOUNCE_EASE }}
            style={{
              marginTop: 8,
              fontFamily: "var(--font-dmsans), system-ui, sans-serif",
              fontSize: taglineFontSize,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C0C8D8",
            }}
          >
            {TAGLINE}
          </motion.div>

          {/* Accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: lineOpacity, scaleX: lineScale }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            style={{
              margin: "18px auto 0",
              width: lineWidth,
              height: 1.5,
              borderRadius: 2,
              background:
                "linear-gradient(90deg, transparent, rgba(27, 79, 216, 0.8), transparent)",
              boxShadow:
                "0 0 20px rgba(27, 79, 216, 0.4), 0 0 40px rgba(27, 79, 216, 0.25)",
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>

      {/* Skip button (appears after 1s) */}
      {showSkip && !done && (
        <button
          type="button"
          onClick={handleSkip}
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            zIndex: 10000,
            padding: "6px 14px",
            borderRadius: 999,
            border: "1px solid rgba(192,200,216,0.5)",
            background: "rgba(0,0,0,0.6)",
            color: "#C0C8D8",
            fontFamily: "var(--font-dmsans), system-ui, sans-serif",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Skip Intro
        </button>
      )}
    </motion.div>
  );
}
