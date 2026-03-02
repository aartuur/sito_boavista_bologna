type NavItem = {
  label: string;
  href: string;
};

type Props = {
  items?: NavItem[];
  logoSrc?: string;
  tableLabel?: string;
  onTableClick?: () => void;
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
  logoSrc = "/public/logo.png",
  tableLabel = "TAVOLO 7",
  onTableClick,
}: Props) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-black/35 backdrop-blur-sm" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/20" />

        <div className="relative mx-auto flex h-22 w-full max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center" aria-label="Home">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-17 w-17 object-contain"
              draggable={false}
            />
          </a>

          <nav className="hidden items-center gap-14 md:flex">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="text-[18px] font-semibold tracking-[0.06em] text-white/90 hover:text-white transition duration-200"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              type="button"
              onClick={onTableClick}
              className="rounded-[12px] border border-white/40 px-6 py-2.5 text-[14px] font-semibold tracking-[0.1em] text-white/95 hover:border-white hover:bg-white/10 transition"
            >
              {tableLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}