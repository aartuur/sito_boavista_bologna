"use client";

import { motion, type MotionValue } from "framer-motion";

type Props = {
  backgroundUrl: string;
  bgY: MotionValue<string>;
  bgScale: MotionValue<number>;
};

export default function HeroBackground({
  backgroundUrl,
  bgY,
  bgScale,
}: Props) {
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          y: bgY,
          scale: bgScale,
        }}
        aria-hidden="true"
      />

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
    </>
  );
}