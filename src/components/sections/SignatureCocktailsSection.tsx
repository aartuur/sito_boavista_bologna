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
    <article
      className="
        group relative aspect-square w-full overflow-hidden rounded-[18px]
        border border-white/12 bg-black/10
        shadow-[0_22px_70px_rgba(0,0,0,0.62)]
        transition duration-300 hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <img
        src={item.imageUrl}
        alt={item.name}
        draggable={false}
        className="
          absolute inset-0 h-full w-full object-cover
          transition duration-500 group-hover:scale-[1.06]
        "
      />

      {/* OVERLAY LIGHT */}
      <div className="absolute inset-0 bg-black/10" />

      {/* TOP: TITLE + CART */}
      <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="inline-block">
            <h3 className="max-w-[240px] truncate text-[20px] font-semibold tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              {item.name}
            </h3>
            <div className="mt-1 h-[2px] w-full bg-red-500" />
          </div>
        </div>

        <button
          type="button"
          aria-label="Aggiungi"
          className="
            grid h-10 w-10 shrink-0 place-items-center rounded-full
            border border-white/14 bg-black/25 text-white/90
            backdrop-blur-sm
            transition hover:bg-black/40 hover:border-white/22
            focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70
          "
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      {/* BOTTOM: GLASS PANEL (blur ridotto + immagine visibile sotto) */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-white/14
            bg-white/5
            backdrop-blur-[6px]
            shadow-[0_14px_40px_rgba(0,0,0,0.45)]
          "
        >
          {/* accent */}
          <div className="h-[2px] w-full bg-red-500/90" />

          <div className="px-4 py-4">
            {/* INGREDIENTS */}
            <p className="text-[14px] italic leading-snug text-white/92">
              {item.ingredients}
            </p>

            {/* PRICE + icons row (al posto di linea/boavista) */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-black/20 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span className="text-[14px] font-semibold tracking-wide text-white">
                  {item.price}
                </span>
              </div>

              {/* mini “signature” pills */}
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/18 bg-black/15 px-3 py-1 text-[12px] tracking-wide text-white/85">
                  Classico
                </span>
                <span className="rounded-full border border-white/18 bg-black/15 px-3 py-1 text-[12px] tracking-wide text-white/85">
                  Twist
                </span>
              </div>
            </div>
          </div>

          {/* subtle shine */}
          <div
            className="
              pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12
              bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]
              opacity-0 transition duration-500
              group-hover:translate-x-[260%] group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* HOVER highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.14),transparent_55%)]" />
      </div>
    </article>
  );
}

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
            <p className="mt-2 text-[15px] italic text-white/55">{subtitle}</p>
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