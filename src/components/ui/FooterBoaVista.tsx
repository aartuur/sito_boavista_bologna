import InstagramIcon from "@mui/icons-material/Instagram";

type LinkItem = { label: string; href: string };

type Props = {
  logoSrc?: string;
  brandLine1?: string;
  brandLine2?: string;
  links?: LinkItem[];
  ctaTitle?: string;
  ctaSub?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  addressTitle?: string;
  addressLine1?: string;
  addressLine2?: string;
  hoursLine1?: string;
  hoursLine2?: string;
  phone?: string;
  instagramHandle?: string;
  instagramHref?: string;
};

export default function FooterBoaVista({
  logoSrc = "logo.png",
  brandLine1 = "Cocktail Bar & Night",
  brandLine2 = "Experience",
  links = [
    { label: "Menu", href: "#menu" },
    { label: "Eventi", href: "#eventi" },
    { label: "Cocktail", href: "#cocktail" },
    { label: "Gallery", href: "#gallery" },
    { label: "Prenota", href: "#prenota" },
    { label: "Contatti", href: "#contatti" },
  ],
  ctaTitle = "PRENOTA IL TUO TAVOLO PER\nQUESTO WEEK-END",
  ctaSub = "Vivi l’esperienza Boavista",
  ctaButtonLabel = "PRENOTA ORA!",
  ctaButtonHref = "#prenota",
  addressTitle = "Via Cesare Battisti, 9b,\nBologna",
  addressLine1 = "",
  addressLine2 = "",
  hoursLine1 = "Giovedì - Domenica",
  hoursLine2 = "18:00 - 03:00",
  phone = "328 971 9176",
  instagramHandle = "@boavista_bologna",
  instagramHref = "https://instagram.com/boavista_bologna",
}: Props) {
  return (
    <footer className="w-screen bg-[#070411] border-t border-white/10">
      {/* TOP SEPARATOR (stacco dalla sezione sopra) */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-black/40 to-transparent blur-[2px]" />
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-[radial-gradient(ellipse_at_center,rgba(255,43,43,0.18),transparent_60%)]" />

      <div className="mx-auto w-screen max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_180px_1fr_260px] md:items-start">
          {/* BRAND */}
          <div className="flex items-center gap-5">
            <div className="relative grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-[16px] bg-white/5 ring-1 ring-white/10">
              <img
                src={logoSrc}
                alt="Boavista"
                className="h-[60px] w-[60px] object-contain"
                draggable={false}
              />
            </div>

            <div className="leading-tight">
              <div className="text-[12px] font-semibold tracking-[0.14em] text-white">
                BOAVISTA
              </div>
              <div className="mt-2 text-[12px] text-white/50">{brandLine1}</div>
              <div className="text-[12px] text-white/50">{brandLine2}</div>
            </div>
          </div>

          {/* LINKS */}
          <div className="md:border-l md:border-white/10 md:pl-8">
            <div className="mb-4 text-[12px] font-semibold tracking-[0.18em] text-white">
              LINK
            </div>

            <nav className="grid gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="group inline-flex w-fit items-center text-[13px] font-medium text-white/50 transition hover:text-white"
                >
                  {l.label}
                  <span className="ml-2 h-[2px] w-0 bg-[#ff2b2b] transition-all duration-200 group-hover:w-6" />
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="md:border-l md:border-white/10 md:px-10">
            <div className="rounded-[16px] border border-white/10 bg-white/5 px-6 py-6">
              <div className="text-center">
                <div className="text-[12px] tracking-wide text-white/50">
                  {ctaSub}
                </div>

                <div className="mt-3 whitespace-pre-line font-anton text-[22px] leading-[1.15] text-white md:text-[24px]">
                  {ctaTitle}
                </div>

                <a
                  href={ctaButtonHref}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-[10px] bg-[#ff2b2b] px-8 py-3 text-[13px] font-extrabold tracking-[0.14em] text-white transition hover:bg-[#e62525]"
                >
                  {ctaButtonLabel}
                </a>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="md:border-l md:border-white/10 md:pl-10">
            <div className="mb-4 text-[12px] font-semibold tracking-[0.18em] text-white">
              INFO
            </div>

            <div className="whitespace-pre-line text-[13px] font-semibold text-white">
              {addressTitle}
            </div>
            {addressLine1 ? (
              <div className="mt-1 text-[13px] text-white/50">
                {addressLine1}
              </div>
            ) : null}
            {addressLine2 ? (
              <div className="text-[13px] text-white/50">{addressLine2}</div>
            ) : null}

            <div className="mt-4 text-[13px] text-white/50">{hoursLine1}</div>
            <div className="text-[13px] text-white/50">{hoursLine2}</div>

            <div className="mt-4 text-[13px] font-semibold text-white">
              {phone}
            </div>

            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-white/50 transition hover:text-white"
            >
              <InstagramIcon sx={{ fontSize: 18, color: "white" }} />
              <span>{instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* bottom line */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-[12px] text-white/50 md:flex-row md:text-left">
          <div>
            © {new Date().getFullYear()} Boavista Bologna. Tutti i diritti
            riservati.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#cookies" className="transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
