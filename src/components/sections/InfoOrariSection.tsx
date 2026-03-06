import { useEffect } from "react";
import AOS from "aos";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InfoSectionHeader from "./info-orari/InfoSectionHeader";
import InfoRow from "./info-orari/InfoRow";
import InfoMapCard from "./info-orari/InfoMapCard";

type Props = {
  mapImage?: string;
};

export default function InfoOrariSection({
  mapImage = "/imgs/map.png",
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
    <section className="w-screen bg-[#070411] py-24" id="info">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <InfoSectionHeader
              title="Info & Orari"
              subtitle="Tutto quello che ti serve per raggiungerci."
            />

            <div className="mt-12 space-y-10">
              <InfoRow
                icon={<LocationOnOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Location"
              >
                <div>Centro di Bologna</div>
                <div>Via Cesare Battisti, 9b</div>
                <div>40123, BO</div>
              </InfoRow>

              <InfoRow
                icon={<AccessTimeOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Orari"
              >
                <div>Giovedì - Domenica</div>
                <div>18:00 - 03:00</div>
              </InfoRow>

              <InfoRow
                icon={<PhoneOutlinedIcon sx={{ fontSize: 26 }} />}
                title="Contatti"
                noBorder
              >
                <div>+39 328 971 9176</div>
              </InfoRow>
            </div>
          </div>

          <div className="flex flex-col">
            <InfoMapCard
              mapImage={mapImage}
              address="Via Cesare Battisti, 9b, BO"
            />

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-[13px] font-semibold tracking-[0.14em] text-white transition hover:bg-red-500"
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true"
            >
              APRI SU GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}