import { useEffect } from "react";
import AOS from "aos";
import EventsSectionHeader from "./events-dj-night/EventsSectionHeader";
import EventsGallery from "./events-dj-night/EventsGallery";

type Props = {
  title?: string;
  subtitle?: string;
  leftImage?: string;
  rightTopImage?: string;
  rightBottomImage?: string;
};

export default function EventsDjNightSection({
  title = "Eventi & DJ Night",
  subtitle = "Ogni weekend, energia diversa.",
  leftImage = "/imgs/events-1.png",
  rightTopImage = "/imgs/events-2.png",
  rightBottomImage = "/imgs/events-3.png",
}: Props) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 900,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-screen bg-[#070411] py-22" id="eventi">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <EventsSectionHeader title={title} subtitle={subtitle} />

        <EventsGallery
          leftImage={leftImage}
          rightTopImage={rightTopImage}
          rightBottomImage={rightBottomImage}
        />

        <div
          className="mt-10 flex items-center justify-center gap-3 text-white/50"

        >
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