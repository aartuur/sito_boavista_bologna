import HeadphonesIcon from "@mui/icons-material/Headphones";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
  imageUrl?: string;
};

export default function NightlifeSection({
  imageUrl = "/imgs/nightlife_section.png",
}: Props) {
  return (
    <section className="w-screen bg-[#070411]">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-anton text-[56px] leading-[1.02] text-white sm:text-[66px]">
              Nightlife nel
              <br />
              Centro di Bologna
            </h2>

            <p className="mt-6 text-[20px] text-white/60">
              Cocktail, DJ Set ed atmosfera intensa.
            </p>

            <div className="mt-6 h-px w-full bg-white/10" />

            <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.8] text-white/80">
              Boavista è il punto di riferimento per
              chi cerca energia, musica e cocktail
              situati nel cuore di Bologna. Un ambiente
              curato, moderno e pensato per vivere
              la notte senza compromessi
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-1 bg-red-500" />
                  <span className="text-white text-[17px] font-medium">
                    DJ Set <span className="text-white/60">ogni weekend</span>
                  </span>
                </div>
                <HeadphonesIcon sx={{ color: "white", fontSize: 28 }} />
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-1 bg-red-500" />
                  <span className="text-white text-[17px] font-medium">
                    Signature <span className="text-white/60">Cocktails</span>
                  </span>
                </div>
                <LocalBarIcon sx={{ color: "white", fontSize: 28 }} />
              </div>

              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-1 bg-red-500" />
                  <span className="text-white text-[17px] font-medium">
                    Open <span className="text-white/60">18:00 - 03:00</span>
                  </span>
                </div>
                <AccessTimeIcon sx={{ color: "white", fontSize: 28 }} />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-purple-500/60 p-2">
              <img
                src={imageUrl}
                alt="Nightlife"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}