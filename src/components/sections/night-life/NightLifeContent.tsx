import HeadphonesIcon from "@mui/icons-material/Headphones";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import NightlifeFeatureRow from "./NightLifeFeatureRow";

const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NightlifeContent() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.65, ease: easePremium },
    },
  };

  return (
    <motion.div
      className="max-w-xl"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="inline-flex items-center gap-3" variants={item}>
        <motion.span className="h-[2px] w-10 bg-red-600 shadow-[0_0_18px_rgba(255,0,0,0.25)]" />
        <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
          COCKTAIL BAR • NIGHT EXPERIENCE
        </span>
      </motion.div>

      <motion.h2
        className="mt-6 font-anton text-[56px] leading-[0.98] text-white sm:text-[68px]"
        variants={item}
      >
        NIGHTLIFE NEL
        <br />
        CENTRO DI BOLOGNA
      </motion.h2>

      <motion.p
        className="mt-6 text-[20px] leading-[1.6] text-white/50"
        variants={item}
      >
        Cocktail, DJ Set ed atmosfera intensa.
      </motion.p>

      <motion.div className="mt-8 h-px w-full bg-white/10" variants={item} />

      <motion.p
        className="mt-8 text-[17px] leading-[1.9] text-white"
        variants={item}
      >
        Boavista è il punto di riferimento per chi cerca energia, musica e
        cocktail nel cuore di Bologna. Un ambiente curato, moderno e pensato
        per vivere la notte senza compromessi.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col gap-3 sm:flex-row"
        variants={item}
      >
        <motion.a
          href="#prenota"
          className="inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white shadow-[0_14px_40px_rgba(255,0,0,0.18)] transition hover:bg-red-500"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease: easePremium }}
        >
          PRENOTA ORA
        </motion.a>

        <motion.a
          href="#eventi"
          className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white transition hover:border-white/35 hover:bg-white/5"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease: easePremium }}
        >
          EVENTI
        </motion.a>
      </motion.div>

      <motion.div className="mt-12 space-y-5" variants={item}>
        <NightlifeFeatureRow
          title="DJ SET"
          subtitle="ogni weekend"
          icon={<HeadphonesIcon sx={{ color: "white", fontSize: 26 }} />}
          reduceMotion={!!reduceMotion}
        />
        <NightlifeFeatureRow
          title="SIGNATURE"
          subtitle="cocktails"
          icon={<LocalBarIcon sx={{ color: "white", fontSize: 26 }} />}
          reduceMotion={!!reduceMotion}
        />
        <NightlifeFeatureRow
          title="OPEN"
          subtitle="18:00 - 03:00"
          icon={<AccessTimeIcon sx={{ color: "white", fontSize: 26 }} />}
          noBorder
          reduceMotion={!!reduceMotion}
        />
      </motion.div>
    </motion.div>
  );
}