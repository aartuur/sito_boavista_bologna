"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";
import HeroActions from "./HeroActions";

type Props = {
  loading?: boolean;
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export default function HeroContent({ loading }: Props) {
  const revealDelay = 2;

  const textContainer = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          delayChildren: revealDelay,
          staggerChildren: 0.12,
        },
      },
    }),
    [revealDelay]
  );

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
    <motion.div
      className="flex w-full flex-col items-center justify-center"
      variants={textContainer}
      initial="hidden"
      animate={loading ? "hidden" : "show"}
    >
      <motion.div variants={textFade} className="mb-1 inline-flex items-center gap-3">
        <span className="h-[2px] w-10 bg-[#ff2b2b]" />
        <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
          COCKTAIL BAR • NIGHT EXPERIENCE
        </span>
      </motion.div>

      <motion.h1
        variants={titleFade}
        className="font-anton mx-auto uppercase  text-white drop-shadow-[0_14px_34px_rgba(0,0,0,0.55)] text-[56px] sm:text-[92px] md:text-[122px] lg:text-[140px]"
      >
        BOAVISTA <span className="block md:inline"> </span> BOLOGNA
      </motion.h1>

      <motion.p
        variants={textFade}
        className="font-allura text-white/95   leading-[0.88] tracking-[0.06em] drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)] text-[28px] sm:text-[52px] md:text-[64px] lg:text-[76px]"
      >
        Cocktail Bar<br/> &amp; Night Experience
      </motion.p>

      <motion.div
        variants={textFade}
        className="mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
      >
        <HeroActions />
      </motion.div>

      <motion.div
        variants={textFade}
        className="mt-7 text-[12px] tracking-[0.18em] text-white/50"
      >
        GIOVEDÌ — DOMENICA • 18:00 — 03:00
      </motion.div>
    </motion.div>
  );
}