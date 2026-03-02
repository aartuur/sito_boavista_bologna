type NavItem = {
  label: string;
  href: string;
};

type Props = {
  items?: NavItem[];
  logoSrc?: string;
  tableLabel?: string;
  onTableClick?: () => void;

  /** opzionale: per evidenziare link attivo */
  activeHref?: string;
};

export default function NavbarBoaVista({
  items = [
    { label: "Menu", href: "#menu" },
    { label: "Eventi", href: "#eventi" },
    { label: "Cocktail", href: "#cocktail" },
    { label: "Gallery", href: "#gallery" },
    { label: "Prenota", href: "#prenota" },
    { label: "Contatti", href: "#contatti" },
  ],
  logoSrc = "logo.png",
  tableLabel = "TAVOLO 7",
  onTableClick,
  activeHref,
}: Props) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="relative">
        {/* background glass, coerente */}
        <div className="pointer-events-none absolute inset-0 bg-[#070411]/55 backdrop-blur-md" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative mx-auto flex h-[84px] w-full max-w-7xl items-center justify-between px-6">
          {/* logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]"
            aria-label="Home"
          >
            <img
              src={logoSrc}
              alt="Logo"
              className="h-16 w-16 object-contain"
              draggable={false}
            />
            {/* opzionale: se vuoi testo brand accanto al logo */}
            {/* <span className="hidden sm:block font-anton text-[18px] tracking-[0.12em] text-white">BOAVISTA</span> */}
          </a>

          {/* nav */}
          <nav
            className="hidden items-center gap-12 md:flex"
            aria-label="Primary"
          >
            {items.map((it) => {
              const isActive = activeHref ? activeHref === it.href : false;
              return (
                <a
                  key={it.label}
                  href={it.href}
                  className={[
                    "group relative text-[16px] font-semibold tracking-[0.12em] uppercase",
                    isActive ? "text-white" : "text-white/90 hover:text-white",
                    "transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]",
                  ].join(" ")}
                >
                  {it.label}

                  {/* underline nightclub (rosso) */}
                  <span
                    className={[
                      "absolute -bottom-2 left-0 h-[2px] w-full origin-left",
                      "bg-red-600 transition-transform duration-200",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA tavolo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onTableClick}
              className="
    relative inline-flex items-center gap-3
    rounded-[10px]
    border border-white/18 bg-white/5
    px-5 py-2.5
    text-[13px] font-extrabold tracking-[0.14em] uppercase text-white
    transition
    hover:border-white/30 hover:bg-white/8
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]
  "
            >
              <span className="h-2 w-2 rounded-full bg-[#ff2b2b]" />
              {tableLabel}
            </button>

            {/* mobile: se vuoi hamburger in futuro, qui è il punto giusto */}
          </div>
        </div>
      </div>
    </header>
  );
}
