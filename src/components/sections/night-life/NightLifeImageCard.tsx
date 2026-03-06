import { motion, type Variants, useReducedMotion } from "framer-motion";

type Props = {
  imageUrl: string;
};

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NightlifeImageCard({ imageUrl }: Props) {
  const reduceMotion = useReducedMotion();

  const imageEnter: Variants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 14, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.8, ease: easePremium },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={imageEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-[26px] border border-white/15 bg-black"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: easePremium }}
      >
        <motion.img
          src={imageUrl}
          alt="Nightlife"
          className="h-[520px] w-full object-cover"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.7, ease: easePremium }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.15)_0%,rgba(7,4,17,0.55)_60%,rgba(7,4,17,0.92)_100%)]" />

        <motion.div
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070411]/80 px-6 py-5 backdrop-blur"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: easePremium, delay: 0.1 }}
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
              <motion.span className="h-2.5 w-2.5 rounded-full bg-red-600" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-4 text-center text-[12px] tracking-wide text-white/50"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.55, ease: easePremium, delay: 0.06 }}
      >
        Prenotazione consigliata nei weekend
      </motion.p>
    </motion.div>
  );
}