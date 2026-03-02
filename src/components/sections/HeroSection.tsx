import * as React from "react";
import Button from "@mui/material/Button";

type Props = {
  backgroundUrl?: string;
};

export default function HeroBoaVista({
  backgroundUrl = "/public/imgs/hero_background.png",
}: Props) {
  return (
    <section className="relative w-screen overflow-hidden">
      <div className="relative min-h-[82vh] w-screen md:min-h-[92vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/18" aria-hidden="true" />

        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(1200px 700px at 35% 55%, rgba(0,0,0,.08) 0%, rgba(0,0,0,.18) 55%, rgba(0,0,0,.22) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            clipPath: "polygon(88% 0, 100% 0, 100% 100%, 45% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,60,60,.12) 0%, rgba(255,60,60,.18) 55%, rgba(255,60,60,.22) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl items-center justify-center px-6 text-center md:min-h-[92vh]">
          <div className="flex w-full flex-col items-center justify-center">
            <h1
              className="
                font-anton
                mx-auto
                whitespace-normal md:whitespace-nowrap
                uppercase
                text-white
                leading-[0.9]
                tracking-[0.06em]
                drop-shadow-[0_12px_26px_rgba(0,0,0,0.42)]
                text-[64px] sm:text-[96px] md:text-[124px] lg:text-[140px]
              "
            >
              BOAVISTA BOLOGNA
            </h1>

            <p
            className="
                font-allura
                text-white/95
                drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]
                text-[30px] sm:text-[54px] md:text-[66px] lg:text-[78px]
            "
            >
                Cocktail Bar &amp; Night Experience
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl">
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#ff2b2b",
                  "&:hover": { backgroundColor: "#e62525" },
                  borderRadius: "10px",
                  padding: "15px 0",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  boxShadow: "0 12px 24px rgba(0,0,0,.35)",
                }}
              >
                PRENOTA ORA
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "rgba(255,255,255,.95)",
                  borderColor: "rgba(255,255,255,.7)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,.98)",
                    backgroundColor: "rgba(255,255,255,.08)",
                  },
                  borderRadius: "10px",
                  padding: "15px 0",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                EVENTI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
