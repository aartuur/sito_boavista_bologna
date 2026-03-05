import React, { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

type Props = {
  mapImage?: string;
};

function InfoRow({
  icon,
  title,
  children,
  noBorder,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <motion.div
      // SOLO animazione (nessun cambio design)
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 130, damping: 18 }}
      className={[
        "pb-8",
        !noBorder ? "border-b border-white/10" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-5">
        <motion.div
          // SOLO micro-interazione sull’icona (non altera layout)
          className="mt-1 text-white"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          {icon}
        </motion.div>

        <div>
          <div className="text-[15px] font-semibold tracking-wide text-white">
            {title}
          </div>
          <div className="mt-2 space-y-1 text-[15px] text-white/50">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function InfoOrariSection({
  mapImage = "/imgs/map.png",
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
    <section className="w-screen bg-[#070411] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            {/* Hero-like header */}
            <div>
              <motion.div
                // SOLO animazione della linea
                className="h-[2px] w-16 bg-red-600"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.h2
                // SOLO reveal (stessi testi/classi)
                className="mt-6 font-anton text-[48px] leading-[1.02] text-white md:text-[56px]"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Info & Orari
              </motion.h2>
              <motion.p
                // SOLO reveal (stessi testi/classi)
                className="mt-3 text-[15px] tracking-wide text-white/50"
                data-aos="fade-up"
                data-aos-delay="140"
                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Tutto quello che ti serve per raggiungerci.
              </motion.p>
            </div>

            <div className="mt-12 space-y-10">
              <InfoRow
                icon={<LocationOnOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Location"
              >
                <div>Centro di Bologna</div>
                <div>Via Cesare Battisti, 9b</div>
                <div>40123, BO</div>
              </InfoRow>

              <InfoRow
                icon={<AccessTimeOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Orari"
              >
                <div>Giovedì - Domenica</div>
                <div>18:00 - 03:00</div>
              </InfoRow>

              <InfoRow
                icon={<PhoneOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Contatti"
                noBorder
              >
                <div>+39 328 971 9176</div>
              </InfoRow>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            <motion.div
              // SOLO animazione wrapper card (non cambia className)
              className="relative overflow-hidden rounded-[16px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              data-aos="zoom-in"
              data-aos-delay="120"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <motion.img
                src={mapImage}
                alt="Mappa Boavista"
                className="h-[420px] w-full object-cover"
                draggable={false}
                // SOLO reveal immagine (no cambio className)
                initial={{ scale: 1.03 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />

              {/* overlay cinematografico coerente */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.10)_0%,rgba(7,4,17,0.45)_60%,rgba(7,4,17,0.85)_100%)]" />

              {/* bottom location label */}
              <motion.div
                // SOLO animazione label
                className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070411]/85 px-6 py-4 backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-[13px] tracking-[0.18em] text-white/50 text-center uppercase">
                  Via Cesare Battisti, 9b, BO
                </div>
              </motion.div>
            </motion.div>

            {/* CTA coerente con le altre sezioni */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-[13px] font-semibold tracking-[0.14em] text-white transition hover:bg-red-500"
              // SOLO animazioni
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              APRI SU GOOGLE MAPS
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}