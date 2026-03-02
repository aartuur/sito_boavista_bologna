import HeadphonesIcon from "@mui/icons-material/Headphones";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
  imageUrl?: string;
};

export default function NightlifeSection({
  imageUrl = "/imgs/nightlife_section.png",
}: Props) {
  return (
    <section className="relative w-screen overflow-hidden bg-[#070411]">
      {/* Coerenza hero: atmosfera + taglio diagonale */}
      <div className="pointer-events-none absolute inset-0">
        {/* vignette */}
        {/* diagonal soft overlay (solo rosso/nero) */}
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* micro label stile hero */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600 shadow-[0_0_18px_rgba(255,0,0,0.25)]" />
              <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
                COCKTAIL BAR • NIGHT EXPERIENCE
              </span>
            </div>

            {/* titolo “hero-like”: grande, compatto, alto contrasto */}
            <h2 className="mt-6 font-anton text-[56px] leading-[0.98] text-white sm:text-[68px]">
              NIGHTLIFE NEL
              <br />
              CENTRO DI BOLOGNA
            </h2>

            {/* secondario a 50% come richiesto */}
            <p className="mt-6 text-[20px] leading-[1.6] text-white/50">
              Cocktail, DJ Set ed atmosfera intensa.
            </p>

            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-8 text-[17px] leading-[1.9] text-white">
              Boavista è il punto di riferimento per chi cerca energia, musica e
              cocktail nel cuore di Bologna. Un ambiente curato, moderno e
              pensato per vivere la notte senza compromessi.
            </p>

            {/* CTA coerenti con hero (rosso + outline) */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#prenota"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white shadow-[0_14px_40px_rgba(255,0,0,0.18)] transition hover:-translate-y-[1px] hover:bg-red-500"
              >
                PRENOTA ORA
              </a>
              <a
                href="#eventi"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-white transition hover:border-white/35 hover:bg-white/5"
              >
                EVENTI
              </a>
            </div>

            {/* FEATURES: pulite, club, con linea rossa e micro glow */}
            <div className="mt-12 space-y-5">
              <FeatureRow
                title="DJ SET"
                subtitle="ogni weekend"
                icon={<HeadphonesIcon sx={{ color: "white", fontSize: 26 }} />}
              />
              <FeatureRow
                title="SIGNATURE"
                subtitle="cocktails"
                icon={<LocalBarIcon sx={{ color: "white", fontSize: 26 }} />}
              />
              <FeatureRow
                title="OPEN"
                subtitle="18:00 - 03:00"
                icon={<AccessTimeIcon sx={{ color: "white", fontSize: 26 }} />}
                noBorder
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-black">
              <img
                src={imageUrl}
                alt="Nightlife"
                className="h-[520px] w-full object-cover"
              />

              {/* overlay scuro elegante per leggibilità */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.15)_0%,rgba(7,4,17,0.55)_60%,rgba(7,4,17,0.92)_100%)]" />

              {/* info bar */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070411]/80 px-6 py-5 backdrop-blur">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[12px] font-semibold tracking-[0.22em] text-white/50">
                      BOAVISTA • BOLOGNA
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-white">
                      Cocktail Bar & Night Experience
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold tracking-[0.18em] text-white">
                      LIVE
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-[12px] tracking-wide text-white/50">
              Prenotazione consigliata nei weekend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  title,
  subtitle,
  icon,
  noBorder,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <div
      className={[
        "group relative flex items-center justify-between rounded-xl px-4 py-4",
        "bg-white/0 hover:bg-white/[0.03] transition",
        !noBorder ? "border-b border-white/10" : "",
      ].join(" ")}
    >
      {/* red marker */}
      <div className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 bg-red-600 shadow-[0_0_16px_rgba(255,0,0,0.35)]" />

      <div className="flex items-center gap-5 pl-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5">
          {icon}
        </div>
        <div className="leading-tight">
          <p className="text-[16px] font-semibold tracking-wide text-white">
            {title} <span className="text-white/50">{subtitle}</span>
          </p>
          <p className="mt-1 text-[13px] text-white/50">
            Suono potente, vibe intensa, servizio curato
          </p>
        </div>
      </div>

      <span className="text-white/50 transition group-hover:text-white">↗</span>
    </div>
  );
}
