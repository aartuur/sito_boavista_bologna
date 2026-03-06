type Props = {
  src: string;
  className?: string;
  featured?: boolean;
  label?: string;
};

export default function InsideBoavistaImageCard({
  src,
  className = "",
  featured = false,
  label,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
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

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.05)_0%,rgba(7,4,17,0.25)_55%,rgba(7,4,17,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />

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