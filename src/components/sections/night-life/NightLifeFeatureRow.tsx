import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  noBorder?: boolean;
  reduceMotion: boolean;
};

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NightlifeFeatureRow({
  title,
  subtitle,
  icon,
  noBorder = false,
  reduceMotion,
}: Props) {
  return (
    <motion.div
      className={[
        "group relative flex items-center justify-between rounded-xl px-4 py-4",
        "bg-white/0 hover:bg-white/[0.03] transition",
        !noBorder ? "border-b border-white/10" : "",
      ].join(" ")}
      whileHover={reduceMotion ? undefined : { x: 2 }}
      transition={{ duration: 0.2, ease: easePremium }}
    >
      <motion.div className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-red-600 shadow-[0_0_16px_rgba(255,0,0,0.35)]" />

      <div className="flex items-center gap-5 pl-3">
        <motion.div
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.2, ease: easePremium }}
        >
          {icon}
        </motion.div>

        <div className="leading-tight">
          <p className="text-[16px] font-semibold tracking-wide text-white">
            {title} <span className="text-white/50">{subtitle}</span>
          </p>
          <p className="mt-1 text-[13px] text-white/50">
            Suono potente, vibe intensa, servizio curato
          </p>
        </div>
      </div>

      <motion.span className="text-white/50 transition group-hover:text-white">
        ↗
      </motion.span>
    </motion.div>
  );
}