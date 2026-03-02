type Props = {
  title?: string;
  subtitle?: string;
  leftImage?: string;
  rightTopImage?: string;
  rightBottomImage?: string;
};

function Img({
  src,
  alt,
  className,
  label,
}: {
  src: string;
  alt: string;
  className: string;
  label?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[14px] border border-white/12 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.60)]">
      <img
        src={src}
        alt={alt}
        className={[
          className,
          "transition duration-500 ease-out will-change-transform",
          "group-hover:scale-[1.02]",
        ].join(" ")}
        draggable={false}
      />

      {/* cinematic overlay (solo scuri) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.05)_0%,rgba(7,4,17,0.25)_55%,rgba(7,4,17,0.75)_100%)]" />

      {/* top subtle highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-white/5 opacity-60" />

      {/* label */}
      {label ? (
        <div className="absolute left-4 top-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#070411]/70 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/80">
              {label}
            </span>
          </div>
        </div>
      ) : null}

      {/* bottom hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </div>
  );
}

export default function EventsDjNightSection({
  title = "Eventi & DJ Night",
  subtitle = "Ogni weekend, energia diversa.",
  leftImage = "/imgs/events-1.png",
  rightTopImage = "/imgs/events-2.png",
  rightBottomImage = "/imgs/events-3.png",
}: Props) {
  return (
    <section className="relative w-screen bg-[#070411] py-22">
      {/* pulizia: niente glow strani, solo profondità */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Header coerente con hero */}
        <div className="flex items-center justify-center gap-10">
          <div className="hidden h-px flex-1 bg-white/12 md:block" />

          <div className="text-center">
            <div className="mx-auto mb-3 h-[2px] w-14 bg-red-600" />
            <h2 className="font-anton text-[48px] leading-[1.02] text-white md:text-[58px]">
              {title}
            </h2>
            <p className="mt-3 text-[15px] tracking-wide text-white/50">
              {subtitle}
            </p>
          </div>

          <div className="hidden h-px flex-1 bg-white/12 md:block" />
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <Img
            src={leftImage}
            alt="Evento principale"
            label="HIGHLIGHT"
            className="h-80 w-full object-cover sm:h-96 lg:h-[440px]"
          />

          <div className="grid gap-8">
            <Img
              src={rightTopImage}
              alt="Evento 1"
              label="DJ NIGHT"
              className="h-48 w-full object-cover sm:h-56 lg:h-[206px]"
            />
            <Img
              src={rightBottomImage}
              alt="Evento 2"
              label="EVENTI"
              className="h-48 w-full object-cover sm:h-56 lg:h-[206px]"
            />
          </div>
        </div>

        {/* Micro footer line */}
        <div className="mt-10 flex items-center justify-center gap-3 text-white/50">
          <span className="h-px w-10 bg-white/12" />
          <span className="text-[12px] tracking-[0.18em]">
            PROGRAMMA AGGIORNATO OGNI SETTIMANA
          </span>
          <span className="h-px w-10 bg-white/12" />
        </div>
      </div>
    </section>
  );
}