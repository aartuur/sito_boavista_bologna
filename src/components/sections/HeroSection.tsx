"use client";

import Button from "@mui/material/Button";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useMemo, useRef } from "react";

type Props = {
  backgroundUrl?: string;
  loading?: boolean; // 👈 arriva dal parent
};

export default function HeroBoaVista({
  backgroundUrl = "/imgs/hero_background.png",
  loading,
}: Props) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  // Parallax + zoom più visibili nello scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "18%"]
  );
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1.08, 1.28]
  );

  // Delay fisso 1.2s dopo che il loader finisce
  const revealDelay =2;

  const textContainer = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          delayChildren: revealDelay, // 👈 1.2s
          staggerChildren: 0.12,
        },
      },
    }),
    [revealDelay]
  );

  const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

  const textFade: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: EASE_OUT_EXPO },
    },
  };

  const titleFade: Variants = {
    hidden: { opacity: 0, y: 22, scale: 0.992, filter: "blur(16px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-screen overflow-hidden bg-[#070411]">
      <div className="relative min-h-[82vh] w-screen md:min-h-[92vh]">
        {/* Background image (parallax + zoom nello scroll) */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            y: bgY,
            scale: bgScale,
          }}
          aria-hidden="true"
        />

        {/* Film overlays */}
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(1200px 760px at 50% 55%, rgba(0,0,0,.10) 0%, rgba(0,0,0,.32) 55%, rgba(0,0,0,.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,4,17,.55) 0%, rgba(7,4,17,.10) 45%, rgba(7,4,17,.68) 100%)",
          }}
        />

        {/* Diagonal red brand panel (static) */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            clipPath: "polygon(88% 0, 100% 0, 100% 100%, 45% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,43,43,.10) 0%, rgba(255,43,43,.16) 55%, rgba(255,43,43,.22) 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(900px 420px at 80% 20%, rgba(255,43,43,.22) 0%, rgba(255,43,43,0) 65%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl items-center justify-center px-6 text-center md:min-h-[92vh]">
          <motion.div
            className="flex w-full flex-col items-center justify-center"
            variants={textContainer}
            initial="hidden"
            animate={loading ? "hidden" : "show"} // 👈 questo fa ripartire sempre dopo loader
          >
            <motion.div variants={textFade} className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#ff2b2b]" />
              <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
                COCKTAIL BAR • NIGHT EXPERIENCE
              </span>
            </motion.div>

            <motion.h1
              variants={titleFade}
              className="
                font-anton mx-auto uppercase text-white leading-[0.88] tracking-[0.06em]
                drop-shadow-[0_14px_34px_rgba(0,0,0,0.55)]
                text-[56px] sm:text-[92px] md:text-[122px] lg:text-[140px]
              "
            >
              BOAVISTA <span className="block md:inline"> </span> BOLOGNA
            </motion.h1>

            <motion.p
              variants={textFade}
              className="
                mt-2 font-allura text-white/95
                drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)]
                text-[28px] sm:text-[52px] md:text-[64px] lg:text-[76px]
              "
            >
              Cocktail Bar &amp; Night Experience
            </motion.p>

            <motion.div
              variants={textFade}
              className="mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <div className="w-full">
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "#ff2b2b",
                    "&:hover": { backgroundColor: "#e62525" },
                    "&:active": { backgroundColor: "#d91f1f" },
                    borderRadius: "10px",
                    padding: {
                      xs: "10px 0",   // mobile
                      sm: "15px 0",   // tablet+
                    },
                    fontSize: {
                      xs: "13px",
                      sm: "15px",
                    },
                    letterSpacing: {
                      xs: "0.08em",
                      sm: "0.12em",
                    },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    boxShadow: "0 14px 30px rgba(0,0,0,.40)",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    "&:focus-visible": { outline: "2px solid rgba(255,255,255,.85)" },
                  }}
                >
                  PRENOTA ORA
                </Button>
              </div>

              <div className="w-full">
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "rgba(255,255,255,.95)",
                    borderColor: "rgba(255,255,255,.65)",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,.95)",
                      backgroundColor: "rgba(255,255,255,.08)",
                    },
                    "&:active": { backgroundColor: "rgba(255,255,255,.12)" },
                    borderRadius: "10px",
                    padding: {
                      xs: "10px 0",
                      sm: "15px 0",
                    },
                    fontSize: {
                      xs: "13px",
                      sm: "15px",
                    },
                    letterSpacing: {
                      xs: "0.08em",
                      sm: "0.12em",
                    },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    "&:focus-visible": { outline: "2px solid rgba(255,255,255,.85)" },
                  }}
                >
                  EVENTI
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={textFade}
              className="mt-7 text-[12px] tracking-[0.18em] text-white/50"
            >
              GIOVEDÌ — DOMENICA • 18:00 — 03:00
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}