"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";

type Props = {
  backgroundUrl?: string;
  loading?: boolean;
};

export default function HeroBoaVista({
  backgroundUrl = "/imgs/hero_background.png",
  loading,
}: Props) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

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

  return (
    <section ref={sectionRef} className="relative w-screen overflow-hidden bg-[#070411]">
      <div className="relative min-h-[82vh] w-screen md:min-h-[92vh]">
        <HeroBackground
          backgroundUrl={backgroundUrl}
          bgY={bgY}
          bgScale={bgScale}
        />

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl items-center justify-center px-6 text-center md:min-h-[92vh]">
          <HeroContent loading={loading} />
        </div>
      </div>
    </section>
  );
}