import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  noBorder?: boolean;
};

export default function InfoRow({
  icon,
  title,
  children,
  noBorder = false,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
      className={[
        "pb-8",
        !noBorder ? "border-b border-white/10" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-5">
        <div className="mt-1 text-white">{icon}</div>

        <div>
          <div className="text-[15px] font-semibold tracking-wide text-white">
            {title}
          </div>
          <div className="mt-2 space-y-1 text-[15px] text-white/50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}