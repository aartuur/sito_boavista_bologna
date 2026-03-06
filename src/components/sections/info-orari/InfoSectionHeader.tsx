type Props = {
  title: string;
  subtitle: string;
};

export default function InfoSectionHeader({ title, subtitle }: Props) {
  return (
    <div>
      <div
        className="h-[2px] w-16 bg-red-600"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      />
      <h2
        className="mt-6 font-anton text-[48px] leading-[1.02] text-white md:text-[56px]"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        {title}
      </h2>
      <p
        className="mt-3 text-[15px] tracking-wide text-white/50"
        data-aos="fade-up"
        data-aos-delay="140"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        {subtitle}
      </p>
    </div>
  );
}