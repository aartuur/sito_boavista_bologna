
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
  bordered = false,
}: {
  src: string;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-xs bg-black/20",
        bordered ? "border border-purple-500/70" : "border border-white/20",
        className,
      ].join(" ")}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
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
        <div className="text-center">
          <h2 className="font-anton text-[48px] leading-[1.05] text-white md:text-[56px]">
            {title}
          </h2>
          <p className="mt-2 text-[15px] italic text-white/55">{subtitle}</p>
        </div>

        <div className="mt-8 h-px w-full bg-white/15" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-7">
          <div className="grid gap-6">
            <ImgCard src={images.leftTop} className="h-65 lg:h-72.5" />
            <ImgCard
              src={images.leftBottom}
              className="h-55 lg:h-62.5"
            />
          </div>

          <ImgCard
            src={images.center}
            bordered
            className="h-130 lg:h-140"
          />

          <div className="grid gap-6">
            <ImgCard src={images.rightTop} className="h-65 lg:h-72.5" />
            <ImgCard
              src={images.rightBottom}
              className="h-55 lg:h-62.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}