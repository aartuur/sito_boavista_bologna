import { useEffect } from "react";
import AOS from "aos";
import InsideBoavistaGallery from "./inside-boavista/InsideBoavistaGallery";

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
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <div className="mx-auto mb-3 h-[2px] w-14 bg-red-600" />
          <h2 className="font-anton text-[48px] leading-[1.02] text-white md:text-[56px]">
            {title}
          </h2>
          <p className="mt-3 text-[15px] tracking-wide text-white/50">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-white/12" />

        <InsideBoavistaGallery images={images} />

        <div
          className="mt-10 flex items-center justify-center gap-3"
        >
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