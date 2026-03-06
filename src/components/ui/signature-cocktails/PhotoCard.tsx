import { useEffect, useState } from "react";
import CartIconBtn from "./CartIconBtn";
import CategoryBox from "./CategoryBox";
import FeaturedRibbon from "./FeaturedRibbon";
import PricePill from "./PricePill";
import TitleWithUnderline from "../TitleWithUnderline";
import type { Cocktail } from "../../../models";

type Props = {
  item: Cocktail;
  className?: string;
  category?: string;
  titleSize?: "sm" | "md" | "lg";
  layout?: "bottom" | "side";
  featured?: boolean;
  index?: number;
};

export default function PhotoCard({
  item,
  className = "",
  category,
  titleSize = "md",
  layout = "bottom",
  featured = false,
  index = 0,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const aosAnimation = isMobile
    ? index % 2 === 0
      ? "fade-left"
      : "fade-right"
    : "fade-up";

  const aosDelay = index * 100;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[22px]",
        "border border-white/12 bg-white/[0.02]",
        "shadow-[0_24px_80px_rgba(0,0,0,0.60)]",
        className,
      ].join(" ")}
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
      data-aos-duration="600"
      data-aos-once="true"
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(7,4,17,0.52))]" />

      {featured ? (
        <>
          <div className="pointer-events-none absolute inset-3 rounded-[18px] ring-1 ring-red-500/28" />
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
          <p className="mt-3 line-clamp-2 text-[13.5px] leading-snug text-white/90 sm:text-[14px]">
            {item.ingredients}
          </p>
          <div className="mt-4">
            <PricePill price={item.price} />
          </div>
        </div>
      ) : (
        <div className="absolute bottom-5 left-5 right-5">
          <div className="grid grid-cols-[1fr_auto] items-end gap-4">
            <div className="min-w-0">
              <TitleWithUnderline size={titleSize}>{item.name}</TitleWithUnderline>
              <p className="mt-3 line-clamp-2 text-[13.5px] leading-snug text-white/90">
                {item.ingredients}
              </p>
            </div>
            <div className="text-right">
              <PricePill price={item.price} />
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </article>
  );
}