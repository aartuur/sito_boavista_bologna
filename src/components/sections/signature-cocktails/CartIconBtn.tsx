import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

export default function CartIconBtn({ className = "" }: Props) {
  return (
    <motion.button
      type="button"
      aria-label="Aggiungi al carrello"
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.18, ease: "linear" }}
      className={[
        "group relative grid h-11 w-11 place-items-center rounded-full",
        "overflow-hidden",
        "border border-white/16 bg-black/20 text-white/95 backdrop-blur-md",
        "shadow-[0_16px_40px_rgba(0,0,0,0.55)]",
        "transition duration-200",
        "hover:bg-black/35 hover:border-white/24",
        "active:scale-[0.96]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70",
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-red-500/35 opacity-70 transition group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_60%)]" />

      <motion.span className="relative z-10">
        <ShoppingCartOutlinedIcon
          sx={{ fontSize: 21 }}
          className="transition duration-200 group-hover:scale-[1.06]"
        />
      </motion.span>

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span
          className={[
            "absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12",
            "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]",
            "opacity-0 transition duration-700",
            "group-hover:translate-x-[250%] group-hover:opacity-100",
          ].join(" ")}
        />
      </span>
    </motion.button>
  );
}