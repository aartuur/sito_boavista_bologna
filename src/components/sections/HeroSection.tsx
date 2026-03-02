import Button from "@mui/material/Button";

type Props = {
  backgroundUrl?: string;
};

export default function HeroBoaVista({
  backgroundUrl = "/imgs/hero_background.png",
}: Props) {
  return (
    <section className="relative w-screen overflow-hidden bg-[#070411]">
      <div className="relative min-h-[82vh] w-screen md:min-h-[92vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
          aria-hidden="true"
        />

        {/* Film overlays (solo nero + rosso) */}
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(1200px 760px at 50% 55%, rgba(0,0,0,.10) 0%, rgba(0,0,0,.32) 55%, rgba(0,0,0,.55) 100%)",
          }}
        />

        {/* Subtle top vignette for typography */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,4,17,.55) 0%, rgba(7,4,17,.10) 45%, rgba(7,4,17,.68) 100%)",
          }}
        />

        {/* Diagonal red brand panel (come il tuo, solo più pulito) */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            clipPath: "polygon(88% 0, 100% 0, 100% 100%, 45% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,43,43,.10) 0%, rgba(255,43,43,.16) 55%, rgba(255,43,43,.22) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl items-center justify-center px-6 text-center md:min-h-[92vh]">
          <div className="flex w-full flex-col items-center justify-center">
            {/* Eyebrow (coerenza sezioni) */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#ff2b2b]" />
              <span className="text-[12px] font-semibold tracking-[0.26em] text-white/50">
                COCKTAIL BAR • NIGHT EXPERIENCE
              </span>
            </div>

            <h1
              className="
                font-anton
                mx-auto
                uppercase
                text-white
                leading-[0.88]
                tracking-[0.06em]
                drop-shadow-[0_14px_34px_rgba(0,0,0,0.55)]
                text-[56px] sm:text-[92px] md:text-[122px] lg:text-[140px]
              "
            >
              BOAVISTA
              <span className="block md:inline"> </span>
              BOLOGNA
            </h1>

            <p
              className="
                mt-2
                font-allura
                text-white/95
                drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)]
                text-[28px] sm:text-[52px] md:text-[64px] lg:text-[76px]
              "
            >
              Cocktail Bar &amp; Night Experience
            </p>

            <div className="mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#ff2b2b",
                  "&:hover": { backgroundColor: "#e62525" },
                  "&:active": { backgroundColor: "#d91f1f" },
                  borderRadius: "10px",
                  padding: "15px 0",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "15px",
                  boxShadow: "0 14px 30px rgba(0,0,0,.40)",
                  outline: "2px solid transparent",
                  outlineOffset: "2px",
                  "&:focus-visible": {
                    outline: "2px solid rgba(255,255,255,.85)",
                  },
                }}
              >
                PRENOTA ORA
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "rgba(255,255,255,.95)",
                  borderColor: "rgba(255,255,255,.65)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,.95)",
                    backgroundColor: "rgba(255,255,255,.08)",
                  },
                  "&:active": {
                    backgroundColor: "rgba(255,255,255,.12)",
                  },
                  borderRadius: "10px",
                  padding: "15px 0",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "15px",
                  outline: "2px solid transparent",
                  outlineOffset: "2px",
                  "&:focus-visible": {
                    outline: "2px solid rgba(255,255,255,.85)",
                  },
                }}
              >
                EVENTI
              </Button>
            </div>

            {/* Micro note (optional, pro) */}
            <div className="mt-7 text-[12px] tracking-[0.18em] text-white/50">
              GIOVEDÌ — DOMENICA • 18:00 — 03:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}