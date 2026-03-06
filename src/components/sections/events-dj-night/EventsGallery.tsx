import EventImageCard from "./EventImageCard";

type Props = {
  leftImage: string;
  rightTopImage: string;
  rightBottomImage: string;
};

export default function EventsGallery({
  leftImage,
  rightTopImage,
  rightBottomImage,
}: Props) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
      <div data-aos="fade-up" data-aos-delay="0">
        <EventImageCard
          src={leftImage}
          alt="Evento principale"
          label="HIGHLIGHT"
          className="h-80 w-full object-cover sm:h-96 lg:h-[440px]"
        />
      </div>

      <div className="grid gap-8">
        <div data-aos="fade-up" data-aos-delay="90">
          <EventImageCard
            src={rightTopImage}
            alt="Evento 1"
            label="DJ NIGHT"
            className="h-48 w-full object-cover sm:h-56 lg:h-[206px]"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="180">
          <EventImageCard
            src={rightBottomImage}
            alt="Evento 2"
            label="EVENTI"
            className="h-48 w-full object-cover sm:h-56 lg:h-[206px]"
          />
        </div>
      </div>
    </div>
  );
}