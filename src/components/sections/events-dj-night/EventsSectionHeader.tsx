type Props = {
  title: string;
  subtitle: string;
};

export default function EventsSectionHeader({ title, subtitle }: Props) {
  return (
    <div
      className="flex items-center justify-center gap-10"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
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
  );
}