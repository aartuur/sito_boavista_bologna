import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PhotoCard from "../ui/signature-cocktails/PhotoCard";
import type { SignatureCocktailsSectionProps } from "../../models";

export default function SignatureCocktailsSection({
  title = "Signature Cocktails",
  subtitle = "Classici rivisitati e creazioni Boavista",
  items = [
    {
      name: "Red Velvet",
      imageUrl: "/imgs/drink-1.png",
      ingredients: "Gin - Bitter - Vermouth Rosso",
      price: "10€",
    },
    {
      name: "Negroni Affumicato",
      imageUrl: "/imgs/drink-2.png",
      ingredients: "Gin - Bitter - Vermouth - Affumicatura a freddo",
      price: "10€",
    },
    {
      name: "Midnight Velvet",
      imageUrl: "/imgs/drink-3.png",
      ingredients: "Vodka - Liquore al caffè - Espresso - Sciroppo",
      price: "10€",
    },
    {
      name: "Crimson Highball",
      imageUrl: "/imgs/drink-4.png",
      ingredients: "Gin - Bitter Rosso - Soda",
      price: "10€",
    },
    {
      name: "Red District",
      imageUrl: "/imgs/drink-5.png",
      ingredients: "Gin - Aperitivo Rosso - Vermouth Dry - Soda",
      price: "10€",
    },
    {
      name: "Berry Spritz",
      imageUrl: "/imgs/drink-6.png",
      ingredients: "Frutti Rossi - Prosecco - Soda - Lamponi",
      price: "10€",
    },
  ],
}: SignatureCocktailsSectionProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const [A, B, C, D, E, F] = items;

  return (
    <section className="relative w-screen overflow-hidden bg-[#070411] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_75%,rgba(255,0,80,0.07),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div
          className="flex items-center justify-center gap-10"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="hidden h-px flex-1 bg-white/12 md:block" />
          <div className="text-center">
            <div className="mx-auto mb-3 h-[2px] w-14 bg-red-600" />
            <h2 className="font-anton text-[46px] leading-[1.02] text-white md:text-[56px]">
              {title}
            </h2>
            <p className="mt-3 text-[15px] tracking-wide text-white/50">
              {subtitle}
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-white/12 md:block" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {A ? (
            <div className="lg:col-span-7">
              <PhotoCard
                item={A}
                featured
                titleSize="lg"
                className="min-h-[520px]"
                layout="bottom"
                index={0}
              />
            </div>
          ) : null}

          <div className="grid gap-8 lg:col-span-5">
            {B ? (
              <PhotoCard
                item={B}
                category="CLASSICO"
                className="min-h-[250px]"
                layout="side"
                index={1}
              />
            ) : null}

            {C ? (
              <PhotoCard
                item={C}
                category="SPECIAL"
                className="min-h-[250px]"
                layout="side"
                index={2}
              />
            ) : null}
          </div>

          {D ? (
            <div className="lg:col-span-6">
              <PhotoCard
                item={D}
                category="HIGHBALL"
                className="min-h-[260px]"
                layout="side"
                index={3}
              />
            </div>
          ) : null}

          {E ? (
            <div className="lg:col-span-3">
              <PhotoCard
                item={E}
                category="RED"
                className="min-h-[260px]"
                layout="bottom"
                index={4}
              />
            </div>
          ) : null}

          {F ? (
            <div className="lg:col-span-3">
              <PhotoCard
                item={F}
                category="SPRITZ"
                className="min-h-[260px]"
                layout="bottom"
                index={5}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}