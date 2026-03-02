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
  logoSrc = "/public/logo.png",
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
    <footer className="w-screen bg-[#070411]">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_160px_1fr_240px] md:items-center">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="h-23 w-23 overflow-hidden bg-[#ff2b2b]">
              <img
                src={logoSrc}
                alt="Boavista"
                className="h-full w-full object-contain p-2"
                draggable={false}
              />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.02em] text-white/80">
                {brandLine1}
              </div>
              <div className="text-[11px] tracking-[0.02em] text-white/80">
                {brandLine2}
              </div>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-6">
            <nav className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[12px] text-white/85 hover:text-white transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:border-l md:border-white/10 md:px-8">
            <div className="text-center">
              <div className="text-[12px] italic text-white/55">{ctaSub}</div>
              <div className="mt-2 whitespace-pre-line font-anton text-[22px] leading-[1.2] tracking-[0.02em] text-white md:text-[24px]">
                {ctaTitle}
              </div>
              <a
                href={ctaButtonHref}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[#ff2b2b] px-8 py-2.5 text-[12px] font-semibold tracking-[0.08em] text-white hover:bg-[#e62525] transition"
              >
                {ctaButtonLabel}
              </a>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-8">
            <div className="whitespace-pre-line text-[12px] font-semibold text-white/90">
              {addressTitle}
            </div>
            {addressLine1 ? (
              <div className="text-[12px] text-white/70">{addressLine1}</div>
            ) : null}
            {addressLine2 ? (
              <div className="text-[12px] text-white/70">{addressLine2}</div>
            ) : null}

            <div className="mt-3 text-[12px] text-white/70">{hoursLine1}</div>
            <div className="text-[12px] text-white/70">{hoursLine2}</div>

            <div className="mt-3 text-[12px] text-white/90">{phone}</div>

            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[12px] text-white/80 hover:text-white transition"
            >
              <InstagramIcon sx={{ fontSize: 18 }} />
              <span>{instagramHandle}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/10" />
      </div>
    </footer>
  );
}