import React from "react";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion, type Variants } from "framer-motion";

type Props = {
  imageUrl?: string;
};

// ✅ FIX: cubic-bezier deve essere una tuple, non number[]
const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easePremium },
  },
};

const imageEnter: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: easePremium },
  },
};

export default function NightlifeSection({
  imageUrl = "/imgs/nightlife_section.png",
}: Props) {
  return (
    <section className="relative w-screen overflow-hidden bg-[#070411]">
      {/* Coerenza hero: atmosfera + taglio diagonale */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            className="max-w-xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            // AOS = macro reveal del blocco (non sui singoli item)
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="cubic-bezier(0.22,1,0.36,1)"
          >
            {/* micro label stile hero */}
            <motion.div className="inline-flex items-center gap-3" variants={item}>
              <motion.span
                className="h-[2px] w-10 bg-red-600 shadow-[0_0_18px_rgba(255,0,0,0.25)]"
                // micro “glow breathe”
                animate={{ opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
                COCKTAIL BAR • NIGHT EXPERIENCE
              </span>
            </motion.div>

            {/* titolo */}
            <motion.h2
              className="mt-6 font-anton text-[56px] leading-[0.98] text-white sm:text-[68px]"
              variants={item}
              // AOS solo per un accento diverso sul titolo
              data-aos="fade-up"
              data-aos-delay="80"
            >
              NIGHTLIFE NEL
              <br />
              CENTRO DI BOLOGNA
            </motion.h2>

            {/* secondario */}
            <motion.p
              className="mt-6 text-[20px] leading-[1.6] text-white/50"
              variants={item}
              data-aos="fade-up"
              data-aos-delay="140"
            >
              Cocktail, DJ Set ed atmosfera intensa.
            </motion.p>

            <motion.div className="mt-8 h-px w-full bg-white/10" variants={item} />

            <motion.p
              className="mt-8 text-[17px] leading-[1.9] text-white"
              variants={item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Boavista è il punto di riferimento per chi cerca energia, musica e
              cocktail nel cuore di Bologna. Un ambiente curato, moderno e
              pensato per vivere la notte senza compromessi.
            </motion.p>

            {/* CTA */}
            <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" variants={item}>
              <motion.a
                href="#prenota"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white shadow-[0_14px_40px_rgba(255,0,0,0.18)] transition hover:bg-red-500"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                PRENOTA ORA
              </motion.a>

              <motion.a
                href="#eventi"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white transition hover:border-white/35 hover:bg-white/5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                EVENTI
              </motion.a>
            </motion.div>

            {/* FEATURES */}
            <motion.div className="mt-12 space-y-5" variants={item}>
              <FeatureRow
                title="DJ SET"
                subtitle="ogni weekend"
                icon={<HeadphonesIcon sx={{ color: "white", fontSize: 26 }} />}
                aos="fade-up"
                aosDelay={0}
              />
              <FeatureRow
                title="SIGNATURE"
                subtitle="cocktails"
                icon={<LocalBarIcon sx={{ color: "white", fontSize: 26 }} />}
                aos="fade-up"
                aosDelay={80}
              />
              <FeatureRow
                title="OPEN"
                subtitle="18:00 - 03:00"
                icon={<AccessTimeIcon sx={{ color: "white", fontSize: 26 }} />}
                noBorder
                aos="fade-up"
                aosDelay={160}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative"
            variants={imageEnter}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            // AOS extra per “parallax feel” (senza vero parallax)
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-easing="cubic-bezier(0.22,1,0.36,1)"
          >
            <motion.div
              className="relative overflow-hidden rounded-[26px] border border-white/15 bg-black"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: easePremium }}
            >
              <motion.img
                src={imageUrl}
                alt="Nightlife"
                className="h-[520px] w-full object-cover"
                // “cinematic slow zoom”
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.9, ease: easePremium }}
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.15)_0%,rgba(7,4,17,0.55)_60%,rgba(7,4,17,0.92)_100%)]" />

              {/* info bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070411]/80 px-6 py-5 backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: easePremium, delay: 0.15 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[12px] font-semibold tracking-[0.22em] text-white/50">
                      BOAVISTA • BOLOGNA
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-white">
                      Cocktail Bar & Night Experience
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold tracking-[0.18em] text-white">
                      LIVE
                    </span>
                    <motion.span
                      className="h-2.5 w-2.5 rounded-full bg-red-600"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              className="mt-4 text-center text-[12px] tracking-wide text-white/50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: easePremium, delay: 0.1 }}
            >
              Prenotazione consigliata nei weekend
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  title,
  subtitle,
  icon,
  noBorder,
  aos = "fade-up",
  aosDelay = 0,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  noBorder?: boolean;
  aos?: string;
  aosDelay?: number;
}) {
  return (
    <motion.div
      className={[
        "group relative flex items-center justify-between rounded-xl px-4 py-4",
        "bg-white/0 hover:bg-white/[0.03] transition",
        !noBorder ? "border-b border-white/10" : "",
      ].join(" ")}
      // AOS per reveal singola row (stagger via delay)
      data-aos={aos}
      data-aos-delay={aosDelay}
      data-aos-duration="700"
      data-aos-easing="cubic-bezier(0.22,1,0.36,1)"
      // Framer per micro-interazioni (hover “premium”)
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25, ease: easePremium }}
    >
      {/* red marker */}
      <motion.div
        className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-red-600 shadow-[0_0_16px_rgba(255,0,0,0.35)]"
        initial={{ opacity: 0.85 }}
        whileHover={{ opacity: 1, scaleY: 1.15 }}
        transition={{ duration: 0.25, ease: easePremium }}
      />

      <div className="flex items-center gap-5 pl-3">
        <motion.div
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5"
          whileHover={{ rotate: -2, scale: 1.04 }}
          transition={{ duration: 0.25, ease: easePremium }}
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

      <motion.span
        className="text-white/50 transition group-hover:text-white"
        whileHover={{ x: 2, y: -1 }}
        transition={{ duration: 0.25, ease: easePremium }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
}