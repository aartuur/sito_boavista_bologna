import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "framer-motion";

type Cocktail = {
  name: string;
  imageUrl: string;
  ingredients: string;
  price: string;
  href?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items?: Cocktail[];
};

function CartIconBtn({ className = "" }: { className?: string }) {
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
        <ShoppingCartOutlinedIcon sx={{ fontSize: 21 }} className="transition duration-200 group-hover:scale-[1.06]" />
      </motion.span>

      <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
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

function CategoryBox({ text }: { text: string }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full",
        "border border-white/14 bg-white/[0.06] px-4 py-2",
        "backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <span className="h-[10px] w-[10px] rounded-[3px] bg-red-600" />
      <span className="text-[11px] font-semibold tracking-[0.22em] text-white/85">{text}</span>
    </div>
  );
}

function TitleWithUnderline({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const cls =
    size === "lg" ? "text-[28px] sm:text-[34px]" : size === "md" ? "text-[20px] sm:text-[22px]" : "text-[16px] sm:text-[18px]";

  return (
    <div className="inline-block max-w-full">
      <h3
        className={[
          "truncate font-semibold tracking-wide text-white",
          "drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]",
          cls,
        ].join(" ")}
      >
        {children}
      </h3>
      <div className="mt-3 h-[2px] w-full bg-red-500" />
    </div>
  );
}

function PricePill({ price }: { price: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-black/18 px-3 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      <span className="text-[13px] font-semibold tracking-wide text-white">{price}</span>
    </div>
  );
}

function FeaturedRibbon() {
  return (
    <div className="absolute left-5 top-5 overflow-hidden rounded-[14px] border border-white/14 bg-[#070411]/55 backdrop-blur-md">
      <div className="flex items-center gap-0">
        <div className="h-10 w-1.5 bg-red-600" />
        <div className="px-4 py-2">
          <span className="text-[11px] font-semibold tracking-[0.26em] text-white/85">FEATURED</span>
        </div>
      </div>
    </div>
  );
}

function PhotoCard({
  item,
  className = "",
  category,
  titleSize = "md",
  layout = "bottom",
  featured = false,
  index = 0,
}: {
  item: Cocktail;
  className?: string;
  category?: string;
  titleSize?: "sm" | "md" | "lg";
  layout?: "bottom" | "side";
  featured?: boolean;
  index?: number;
}) {
  const fromRight = index % 2 === 0;
  const initialX = fromRight ? 40 : -40;

  return (
    <motion.article
      className={[
        "group relative overflow-hidden rounded-[22px]",
        "border border-white/12 bg-white/[0.02]",
        "shadow-[0_24px_80px_rgba(0,0,0,0.60)]",
        "transition duration-300 hover:-translate-y-1 hover:border-white/18",
        className,
      ].join(" ")}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "linear", delay: index * 0.3 }}
    >
      <motion.img
        src={item.imageUrl}
        alt={item.name}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.6, ease: "linear" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(7,4,17,0.52))]" />

      {featured ? (
        <>
          <div className="pointer-events-none absolute inset-3 rounded-[18px] ring-1 ring-red-500/28" />
          <div
            className={[
              "pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12",
              "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]",
              "opacity-0 transition duration-700",
              "group-hover:translate-x-[260%] group-hover:opacity-100",
            ].join(" ")}
          />
          <FeaturedRibbon />
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,80,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.12),transparent_58%)]" />
          </div>
        </>
      ) : null}

      <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
        <div>{!featured && category ? <CategoryBox text={category} /> : null}</div>
        <CartIconBtn />
      </div>

      {layout === "bottom" ? (
        <div className="absolute inset-x-6 bottom-6">
          <TitleWithUnderline size={titleSize}>{item.name}</TitleWithUnderline>
          <p className="mt-3 line-clamp-2 text-[13.5px] leading-snug text-white/90 sm:text-[14px]">{item.ingredients}</p>
          <div className="mt-4">
            <PricePill price={item.price} />
          </div>
        </div>
      ) : (
        <div className="absolute bottom-5 left-5 right-5">
          <div className="grid grid-cols-[1fr_auto] items-end gap-4">
            <div className="min-w-0">
              <TitleWithUnderline size={titleSize}>{item.name}</TitleWithUnderline>
              <p className="mt-3 line-clamp-2 text-[13.5px] leading-snug text-white/90">{item.ingredients}</p>
            </div>
            <div className="text-right">
              <PricePill price={item.price} />
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </motion.article>
  );
}

export default function SignatureCocktailsSection({
  title = "Signature Cocktails",
  subtitle = "Classici rivisitati e creazioni Boavista",
  items = [
    { name: "Red Velvet", imageUrl: "/imgs/drink-1.png", ingredients: "Gin - Bitter - Vermouth Rosso", price: "10€" },
    { name: "Negroni Affumicato", imageUrl: "/imgs/drink-2.png", ingredients: "Gin - Bitter - Vermouth - Affumicatura a freddo", price: "10€" },
    { name: "Midnight Velvet", imageUrl: "/imgs/drink-3.png", ingredients: "Vodka - Liquore al caffè - Espresso - Sciroppo", price: "10€" },
    { name: "Crimson Highball", imageUrl: "/imgs/drink-4.png", ingredients: "Gin - Bitter Rosso - Soda", price: "10€" },
    { name: "Red District", imageUrl: "/imgs/drink-5.png", ingredients: "Gin - Aperitivo Rosso - Vermouth Dry - Soda", price: "10€" },
    { name: "Berry Spritz", imageUrl: "/imgs/drink-6.png", ingredients: "Frutti Rossi - Prosecco - Soda - Lamponi", price: "10€" },
  ],
}: Props) {
  const A = items[0];
  const B = items[1];
  const C = items[2];
  const D = items[3];
  const E = items[4];
  const F = items[5];

  return (
    <section className="relative w-screen overflow-hidden bg-[#070411] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_75%,rgba(255,0,80,0.07),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-center gap-10">
          <div className="hidden h-px flex-1 bg-white/12 md:block" />
          <div className="text-center">
            <div className="mx-auto mb-3 h-[2px] w-14 bg-red-600" />
            <h2 className="font-anton text-[46px] leading-[1.02] text-white md:text-[56px]">{title}</h2>
            <p className="mt-3 text-[15px] tracking-wide text-white/50">{subtitle}</p>
          </div>
          <div className="hidden h-px flex-1 bg-white/12 md:block" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {A ? (
            <div className="lg:col-span-7">
              <PhotoCard item={A} featured titleSize="lg" className="min-h-[520px]" layout="bottom" index={0} />
            </div>
          ) : null}

          <div className="grid gap-8 lg:col-span-5">
            {B ? <PhotoCard item={B} category="CLASSICO" className="min-h-[250px]" layout="side" index={1} /> : null}
            {C ? <PhotoCard item={C} category="SPECIAL" className="min-h-[250px]" layout="side" index={2} /> : null}
          </div>

          {D ? (
            <div className="lg:col-span-6">
              <PhotoCard item={D} category="HIGHBALL" className="min-h-[260px]" layout="side" index={3} />
            </div>
          ) : null}
          {E ? (
            <div className="lg:col-span-3">
              <PhotoCard item={E} category="RED" className="min-h-[260px]" layout="bottom" index={4} />
            </div>
          ) : null}
          {F ? (
            <div className="lg:col-span-3">
              <PhotoCard item={F} category="SPRITZ" className="min-h-[260px]" layout="bottom" index={5} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}