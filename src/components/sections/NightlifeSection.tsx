import NightlifeContent from "./night-life/NightLifeContent";
import NightlifeImageCard from "./night-life/NightLifeImageCard";

type Props = {
  imageUrl?: string;
};

export default function NightlifeSection({
  imageUrl = "/imgs/nightlife_section.png",
}: Props) {
  return (
    <section className="relative w-screen overflow-hidden bg-[#070411]" id="night-life">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <NightlifeContent />
          <NightlifeImageCard imageUrl={imageUrl} />
        </div>
      </div>
    </section>
  );
}