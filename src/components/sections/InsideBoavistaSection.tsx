type Props = {
  title?: string;
  subtitle?: string;
  images?: {
    leftTop: string;
    leftBottom: string;
    center: string;
    rightTop: string;
    rightBottom: string;
  };
};

function ImgCard({
  src,
  className = "",
  featured = false,
  label,
}: {
  src: string;
  className?: string;
  featured?: boolean;
  label?: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[14px] bg-white/5",
        featured ? "border border-red-600/70" : "border border-white/12",
        "shadow-[0_18px_55px_rgba(0,0,0,0.60)]",
        className,
      ].join(" ")}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
        draggable={false}
      />

      {/* overlay cinematografico (solo scuri, coerente) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.05)_0%,rgba(7,4,17,0.25)_55%,rgba(7,4,17,0.75)_100%)]" />

      {/* hairline highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />

      {/* label opzionale */}
      {label ? (
        <div className="absolute left-4 top-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#070411]/70 px-4 py-2 backdrop-blur">
            <span
              className={[
                "h-2 w-2 rounded-full",
                featured ? "bg-red-600" : "bg-white",
              ].join(" ")}
            />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/80">
              {label}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function InsideBoavistaSection({
  title = "Inside Boavista",
  subtitle = "Atmosfera, musica, energia.",
  images = {
    leftTop: "/imgs/gallery-1.png",
    leftBottom: "/imgs/gallery-2.png",
    center: "/imgs/gallery-3.png",
    rightTop: "/imgs/gallery-4.png",
    rightBottom: "/imgs/gallery-5.png",
  },
}: Props) {
  return (
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header coerente con hero */}
        <div className="text-center">
          <div className="mx-auto mb-3 h-[2px] w-14 bg-red-600" />
          <h2 className="font-anton text-[48px] leading-[1.02] text-white md:text-[56px]">
            {title}
          </h2>
          <p className="mt-3 text-[15px] tracking-wide text-white/50">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-white/12" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-7">
          {/* LEFT */}
          <div className="grid gap-6">
            <ImgCard
              src={images.leftTop}
              className="h-64 lg:h-72"
              label="ATMOSFERA"
            />
            <ImgCard
              src={images.leftBottom}
              className="h-56 lg:h-64"
              label="COCKTAIL"
            />
          </div>

          {/* CENTER FEATURED */}
          <ImgCard
            src={images.center}
            featured
            label="INSIDE"
            className="h-[520px] lg:h-[560px]"
          />

          {/* RIGHT */}
          <div className="grid gap-6">
            <ImgCard
              src={images.rightTop}
              className="h-64 lg:h-72"
              label="MUSICA"
            />
            <ImgCard
              src={images.rightBottom}
              className="h-56 lg:h-64"
              label="ENERGIA"
            />
          </div>
        </div>

        {/* footer microcopy opzionale */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/12" />
          <span className="text-[12px] tracking-[0.18em] text-white/50">
            GALLERY
          </span>
          <span className="h-px w-10 bg-white/12" />
        </div>
      </div>
    </section>
  );
}