type Props = {
  src: string;
  alt: string;
  className: string;
  label?: string;
};

export default function EventImageCard({
  src,
  alt,
  className,
  label,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
      className="group relative overflow-hidden rounded-[14px] border border-white/12 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.60)]"
    >
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

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.05)_0%,rgba(7,4,17,0.25)_55%,rgba(7,4,17,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-white/5 opacity-60" />

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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </div>
  );
}