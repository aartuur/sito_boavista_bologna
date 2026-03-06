type Props = {
  mapImage: string;
  address: string;
};

export default function InfoMapCard({ mapImage, address }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-[16px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      data-aos="zoom-in"
      data-aos-delay="120"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <img
        src={mapImage}
        alt="Mappa Boavista"
        className="h-[420px] w-full object-cover"
        draggable={false}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,4,17,0.10)_0%,rgba(7,4,17,0.45)_60%,rgba(7,4,17,0.85)_100%)]" />

      <div
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070411]/85 px-6 py-4 backdrop-blur"
        data-aos="fade-up"
        data-aos-delay="180"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="text-center text-[13px] uppercase tracking-[0.18em] text-white/50">
          {address}
        </div>
      </div>
    </div>
  );
}