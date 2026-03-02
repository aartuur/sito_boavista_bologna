import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

type Props = {
  mapImage?: string;
};

export default function InfoOrariSection({
  mapImage = "/public/imgs/map.jpg",
}: Props) {
  return (
    <section className="w-screen bg-[#070411] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-anton text-[48px] leading-[1.05] text-white md:text-[56px]">
              Info & Orari
            </h2>

            <div className="mt-3 h-0.5 w-24 bg-red-600" />

            <div className="mt-10 space-y-8">
              <div className="border-b border-white/10 pb-6">
                <div className="flex items-start gap-4">
                  <LocationOnOutlinedIcon
                    sx={{ color: "white", fontSize: 26 }}
                  />
                  <div>
                    <div className="text-white text-[16px] font-medium">
                      Centro di Bologna
                    </div>
                    <div className="mt-1 text-white/60 text-[15px]">
                      Via Cesare Battisti, 9b, 40123, BO
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-white/10 pb-6">
                <div className="flex items-start gap-4">
                  <AccessTimeOutlinedIcon
                    sx={{ color: "white", fontSize: 26 }}
                  />
                  <div>
                    <div className="text-white text-[16px] font-medium">
                      Orari
                    </div>
                    <div className="mt-1 text-white/60 text-[15px]">
                      Giovedì - Domenica
                    </div>
                    <div className="text-white/60 text-[15px]">
                      18:00 - 03:00
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <PhoneOutlinedIcon
                    sx={{ color: "white", fontSize: 26 }}
                  />
                  <div>
                    <div className="text-white text-[16px] font-medium">
                      Contatti
                    </div>
                    <div className="mt-1 text-white/60 text-[15px]">
                      +39 328 971 9176
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img
                src={mapImage}
                alt="Mappa"
                className="h-80 w-full object-cover opacity-80"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full max-w-md items-center justify-center rounded-full border border-red-600 px-8 py-3 text-[14px] font-semibold tracking-[0.12em] text-red-600 transition hover:bg-red-600 hover:text-black"
            >
              APRI SU GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}