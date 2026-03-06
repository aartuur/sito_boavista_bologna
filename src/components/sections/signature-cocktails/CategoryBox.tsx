
type Props = {
  text: string;
};

export default function CategoryBox({ text }: Props) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full",
        "border border-white/14 bg-white/[0.06] px-4 py-2",
        "backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <span className="h-[10px] w-[10px] rounded-[3px] bg-red-600" />
      <span className="text-[11px] font-semibold tracking-[0.22em] text-white/85">
        {text}
      </span>
    </div>
  );
}