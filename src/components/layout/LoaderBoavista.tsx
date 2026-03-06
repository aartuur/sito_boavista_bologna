import { useEffect, useState } from "react";

type Props = {
  durationMs?: number;
  onFinish?: () => void;
};

export default function LoaderBoaVista({
  durationMs = 1700,
  onFinish,
}: Props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), durationMs);
    const t2 = setTimeout(() => onFinish?.(), durationMs + 450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [durationMs, onFinish]);

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] grid place-items-center",
        "bg-[#060714]",
        "transition-opacity duration-500",
        hide ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* atmosfera: solo profondità, niente robe che “distraggono” */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,46,0.10)_0%,rgba(6,7,20,0.72)_52%,rgba(0,0,0,0.96)_100%)]" />

      <div className="relative text-center">
        {/* BOAVISTA più piccolo e più “app-like” */}
        <div
          className="
            bvTitle
            text-[34px] md:text-[44px]
            font-extrabold tracking-[0.22em]
            select-none
          "
          aria-label="BOAVISTA"
        >
          BOAVISTA
        </div>

        {/* underline minimal */}
        <div className="mt-4 flex justify-center">
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 bg-[#ff002e] bvLine" />
          </div>
        </div>
      </div>

      <style>{`
        /* Testo: reveal + sheen interno (dentro le lettere, NON dietro) */
        .bvTitle{
          opacity: 0;
          transform: translateY(6px);
          filter: blur(6px);

          /* sheen inside text */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.75) 0%,
            rgba(255,255,255,0.75) 38%,
            rgba(255,0,46,0.95) 50%,
            rgba(255,255,255,0.75) 62%,
            rgba(255,255,255,0.75) 100%
          );
          background-size: 260% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          animation:
            bvReveal 520ms cubic-bezier(.2,.9,.2,1) forwards,
            bvSheen 1.25s ease-in-out 520ms infinite,
            bvSub 2.4s ease-in-out 520ms infinite;
        }

        @keyframes bvReveal{
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        /* luce che scorre DENTRO il testo */
        @keyframes bvSheen{
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* micro “sub” (molto leggero) */
        @keyframes bvSub{
          0%,100% { letter-spacing: 0.22em; }
          50% { letter-spacing: 0.245em; }
        }

        /* underline che “scorre” senza essere un progress bar SaaS */
        .bvLine{
          transform: translateX(-60%);
          animation: bvLine 1.1s ease-in-out infinite;
          box-shadow: 0 0 18px rgba(255,0,46,0.22);
        }

        @keyframes bvLine{
          0%   { transform: translateX(-65%); opacity: .55; }
          50%  { transform: translateX(35%);  opacity: 1; }
          100% { transform: translateX(125%); opacity: .55; }
        }
      `}</style>
    </div>
  );
}