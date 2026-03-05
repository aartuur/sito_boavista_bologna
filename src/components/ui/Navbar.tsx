"use client";

import * as React from "react";

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
  tableLabel="Tavolo 7",
  logoSrc = "logo.png",
  onTableClick,
  activeHref,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const close = React.useCallback(() => setOpen(false), []);

  // ESC to close + lock scroll while open
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  // click outside to close
  React.useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  React.useEffect(() => {
    if (open) {
      // wait paint
      requestAnimationFrame(() => {
        panelRef.current?.focus();
      });
    } else {
      buttonRef.current?.focus();
    }
  }, [open]);

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
            onClick={() => setOpen(false)}
          >
            <img
              src={logoSrc}
              alt="Logo"
              className="h-16 w-16 object-contain"
              draggable={false}
            />
          </a>

          {/* nav desktop */}
          <nav className="hidden items-center gap-12 md:flex" aria-label="Primary">
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
                  <span
                    className={[
                      "absolute -bottom-2 left-0 h-[2px] w-full origin-left",
                      "bg-red-600 transition-transform duration-200",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* hamburger (mobile) */}
            <button
              ref={buttonRef}
              type="button"
              className="
                md:hidden inline-flex h-11 w-11 items-center justify-center
                rounded-[10px]
                border border-white/18 bg-white/5
                text-white
                transition
                hover:border-white/30 hover:bg-white/8
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]
              "
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-controls="boavista-mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[60]",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          className={[
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* panel */}
        <div
          id="boavista-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          ref={panelRef}
          tabIndex={-1}
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "bg-[#070411]/85 backdrop-blur-md",
            "border-l border-white/10",
            "transition-transform duration-200",
            open ? "translate-x-0" : "translate-x-full",
            "outline-none",
          ].join(" ")}
        >
          {/* header drawer */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-10 w-10 object-contain"
                draggable={false}
              />
              <span className="text-white/90 text-xs font-extrabold tracking-[0.18em] uppercase">
                BOAVISTA
              </span>
            </div>

            <button
              type="button"
              className="
                inline-flex h-10 w-10 items-center justify-center rounded-[10px]
                border border-white/18 bg-white/5 text-white
                hover:border-white/30 hover:bg-white/8
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]
              "
              aria-label="Chiudi"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="px-6 pb-6">
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {items.map((it) => {
                const isActive = activeHref ? activeHref === it.href : false;
                return (
                  <a
                    key={it.label}
                    href={it.href}
                    onClick={close}
                    className={[
                      "group relative rounded-xl px-4 py-3",
                      "text-[14px] font-extrabold tracking-[0.14em] uppercase",
                      isActive ? "text-white bg-white/6" : "text-white/90 hover:text-white hover:bg-white/5",
                      "transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]",
                    ].join(" ")}
                  >
                    <span className="relative">
                      {it.label}
                      <span
                        className={[
                          "absolute -bottom-2 left-0 h-[2px] w-full origin-left",
                          "bg-red-600 transition-transform duration-200",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  onTableClick?.();
                  close();
                }}
                className="
                  w-full relative inline-flex items-center justify-center gap-3
                  rounded-[12px]
                  border border-white/18 bg-white/5
                  px-5 py-3
                  text-[13px] font-extrabold tracking-[0.14em] uppercase text-white
                  transition
                  hover:border-white/30 hover:bg-white/8
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                  focus-visible:ring-offset-4 focus-visible:ring-offset-[#070411]
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#ff2b2b]" />
                {tableLabel}
              </button>
            </div>

            {/* opzionale: mini footer */}
            <div className="mt-6 text-[12px] tracking-[0.12em] text-white/50 uppercase">
              © BoaVista
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={[
          "absolute left-0 top-0 h-[2px] w-6 bg-white transition-transform duration-200",
          open ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[9px] h-[2px] w-6 bg-white transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[18px] h-[2px] w-6 bg-white transition-transform duration-200",
          open ? "translate-y-[-9px] -rotate-45" : "translate-y-0 rotate-0",
        ].join(" ")}
      />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}