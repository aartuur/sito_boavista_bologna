import InsideBoavistaImageCard from "./InsideBoavistaImageCard";

type Props = {
  images: {
    leftTop: string;
    leftBottom: string;
    center: string;
    rightTop: string;
    rightBottom: string;
  };
};

export default function InsideBoavistaGallery({ images }: Props) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-7">
      <div className="grid gap-6">
        <div data-aos="fade-up" data-aos-delay="0">
          <InsideBoavistaImageCard
            src={images.leftTop}
            className="h-64 lg:h-72"
            label="ATMOSFERA"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="80">
          <InsideBoavistaImageCard
            src={images.leftBottom}
            className="h-56 lg:h-64"
            label="COCKTAIL"
          />
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="120">
        <InsideBoavistaImageCard
          src={images.center}
          featured
          label="INSIDE"
          className="h-[520px] lg:h-[560px]"
        />
      </div>

      <div className="grid gap-6">
        <div data-aos="fade-up" data-aos-delay="40">
          <InsideBoavistaImageCard
            src={images.rightTop}
            className="h-64 lg:h-72"
            label="MUSICA"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <InsideBoavistaImageCard
            src={images.rightBottom}
            className="h-56 lg:h-64"
            label="ENERGIA"
          />
        </div>
      </div>
    </div>
  );
}