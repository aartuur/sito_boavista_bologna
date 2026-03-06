import React from "react";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function TitleWithUnderline({
  children,
  size = "md",
}: Props) {
  const cls =
    size === "lg"
      ? "text-[28px] sm:text-[34px]"
      : size === "md"
        ? "text-[20px] sm:text-[22px]"
        : "text-[16px] sm:text-[18px]";

  return (
    <div className="inline-block max-w-full">
      <h3
        className={[
          "truncate font-semibold tracking-wide text-white",
          "drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]",
          cls,
        ].join(" ")}
      >
        {children}
      </h3>
      <div className="mt-3 h-[2px] w-full bg-red-500" />
    </div>
  );
}