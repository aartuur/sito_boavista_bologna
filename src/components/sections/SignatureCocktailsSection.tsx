import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

function CocktailCard({ item }: { item: Cocktail }) {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-white/30 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-black/25" />
      <img
        src={item.imageUrl}
        alt={item.name}
        className="h-[220px] w-full object-cover"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="text-[13px] italic text-white/90">{item.name}</span>
        <span className="h-px w-10 bg-red-500/80" />
      </div>

      <button
        type="button"
        className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-[6px] border border-white/35 bg-black/20 text-white/85 backdrop-blur-[2px] hover:bg-black/35 transition"
        aria-label="Aggiungi"
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <div className="mx-auto w-[92%] rounded-[8px] border border-white/25 bg-black/35 px-3 py-2 text-center backdrop-blur-[2px]">
          <div className="text-[13px] italic text-white/90">
            {item.ingredients}
          </div>
        </div>
        <div className="pt-2 text-center text-[14px] italic text-white/90">
          {item.price}
        </div>
      </div>
    </div>
  );
}

export default function SignatureCocktailsSection({
  title = "Signature Cocktails",
  subtitle = "Classici rivisitati e creazioni Boavista",
  items = [
    {
      name: "Red Velvet",
      imageUrl: "/public/imgs/cocktails/red-velvet.jpg",
      ingredients: "Gin - Bitter - Vermouth Rosso",
      price: "10€",
    },
    {
      name: "Negroni Affumicato",
      imageUrl: "/public/imgs/cocktails/negroni-affumicato.jpg",
      ingredients: "Gin - Bitter - Vermouth - Affumicatura a freddo",
      price: "10€",
    },
    {
      name: "Midnight Velvet",
      imageUrl: "/public/imgs/cocktails/midnight-velvet.jpg",
      ingredients: "Vodka - Liquore al caffè - Espresso - Sciroppo",
      price: "10€",
    },
    {
      name: "Crimson Highball",
      imageUrl: "/public/imgs/cocktails/crimson-highball.jpg",
      ingredients: "Gin - Bitter Rosso - Soda",
      price: "10€",
    },
    {
      name: "Red District",
      imageUrl: "/public/imgs/cocktails/red-district.jpg",
      ingredients: "Gin - Aperitivo Rosso - Vermouth Dry - Soda",
      price: "10€",
    },
    {
      name: "Berry Spritz",
      imageUrl: "/public/imgs/cocktails/berry-spritz.jpg",
      ingredients: "Frutti Rossi - Prosecco - Soda - Lamponi",
      price: "10€",
    },
  ],
}: Props) {
  return (
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-center gap-10">
          <div className="hidden h-px flex-1 bg-white/20 md:block" />
          <div className="text-center">
            <h2 className="font-anton text-[48px] leading-[1.05] text-white md:text-[56px]">
              {title}
            </h2>
            <p className="mt-2 text-[15px] italic text-white/55">
              {subtitle}
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-white/20 md:block" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <CocktailCard key={it.name} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}