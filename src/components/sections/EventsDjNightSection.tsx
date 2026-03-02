
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
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-white/15 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
      <img src={src} alt={alt} className={className} draggable={false} />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}

export default function EventsDjNightSection({
  title = "Eventi & DJ Night",
  subtitle = "Ogni weekend, energia diversa.",
  leftImage = "/public/imgs/events/left.jpg",
  rightTopImage = "/public/imgs/events/right_top.jpg",
  rightBottomImage = "/public/imgs/events/right_bottom.jpg",
}: Props) {
  return (
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-center gap-10">
          <div className="hidden h-px flex-1 bg-white/15 md:block" />
          <div className="text-center">
            <h2 className="font-anton text-[48px] leading-[1.05] text-white md:text-[56px]">
              {title}
            </h2>
            <p className="mt-2 text-[15px] italic text-white/55">
              {subtitle}
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-white/15 md:block" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <Img
            src={leftImage}
            alt="Evento principale"
            className="h-80 w-full object-cover sm:h-95 lg:h-107.5"
          />

          <div className="grid gap-8">
            <Img
              src={rightTopImage}
              alt="Evento 1"
              className="h-47.5 w-full object-cover sm:h-52.5 lg:h-51.25"
            />
            <Img
              src={rightBottomImage}
              alt="Evento 2"
              className="h-47.5 w-full object-cover sm:h-52.5 lg:h-51.25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}