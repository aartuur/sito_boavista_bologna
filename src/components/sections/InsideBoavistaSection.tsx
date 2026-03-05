import React, { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  subtitle?: string;
  images?: {
    leftTop: string;
    leftBottom: string;
    center: string;
    rightTop: string;
    rightBottom: string;
  };
};

function ImgCard({
  src,
  className = "",
  featured = false,
  label,
}: {
  src: string;
  className?: string;
  featured?: boolean;
  label?: string;
}) {
  return (
    <motion.div
      // SOLO animazioni
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 130, damping: 18 }}
      whileHover={{ scale: 1.01 }}
      className={[
        "group relative overflow-hidden rounded-[14px] bg-white/5",
        featured ? "border border-red-600/70" : "border border-white/12",
        "shadow-[0_18px_55px_rgba(0,0,0,0.60)]",
        className,
      ].join(" ")}
      style={{ willChange: "transform" }}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
        draggable={false}
      />

      {/* overlay cinematografico (solo scuri, coerente) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.05)_0%,rgba(7,4,17,0.25)_55%,rgba(7,4,17,0.75)_100%)]" />

      {/* hairline highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />

      {/* label opzionale */}
      {label ? (
        <motion.div
          // SOLO animazioni label (non cambia stile)
          className="absolute left-4 top-4"
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#070411]/70 px-4 py-2 backdrop-blur">
            <span
              className={[
                "h-2 w-2 rounded-full",
                featured ? "bg-red-600" : "bg-white",
              ].join(" ")}
            />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/80">
              {label}
            </span>
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default function InsideBoavistaSection({
  title = "Inside Boavista",
  subtitle = "Atmosfera, musica, energia.",
  images = {
    leftTop: "/imgs/gallery-1.png",
    leftBottom: "/imgs/gallery-2.png",
    center: "/imgs/gallery-3.png",
    rightTop: "/imgs/gallery-4.png",
    rightBottom: "/imgs/gallery-5.png",
  },
}: Props) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header coerente con hero */}
        <div
          className="text-center"
          // SOLO AOS (nessuna modifica stile)
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <motion.div
            className="mx-auto mb-3 h-[2px] w-14 bg-red-600"
            initial={{ scaleX: 0, transformOrigin: "center" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.h2
            className="font-anton text-[48px] leading-[1.02] text-white md:text-[56px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-3 text-[15px] tracking-wide text-white/50"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          // SOLO reveal riga separatore
          className="mt-10 h-px w-full bg-white/12"
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-7">
          {/* LEFT */}
          <div className="grid gap-6">
            <div data-aos="fade-up" data-aos-delay="0">
              <ImgCard
                src={images.leftTop}
                className="h-64 lg:h-72"
                label="ATMOSFERA"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="80">
              <ImgCard
                src={images.leftBottom}
                className="h-56 lg:h-64"
                label="COCKTAIL"
              />
            </div>
          </div>

          {/* CENTER FEATURED */}
          <div data-aos="zoom-in" data-aos-delay="120">
            <ImgCard
              src={images.center}
              featured
              label="INSIDE"
              className="h-[520px] lg:h-[560px]"
            />
          </div>

          {/* RIGHT */}
          <div className="grid gap-6">
            <div data-aos="fade-up" data-aos-delay="40">
              <ImgCard
                src={images.rightTop}
                className="h-64 lg:h-72"
                label="MUSICA"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <ImgCard
                src={images.rightBottom}
                className="h-56 lg:h-64"
                label="ENERGIA"
              />
            </div>
          </div>
        </div>

        {/* footer microcopy opzionale */}
        <motion.div
          // SOLO animazione entrata footer
          className="mt-10 flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="160"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="h-px w-10 bg-white/12" />
          <span className="text-[12px] tracking-[0.18em] text-white/50">
            GALLERY
          </span>
          <span className="h-px w-10 bg-white/12" />
        </motion.div>
      </div>
    </section>
  );
}