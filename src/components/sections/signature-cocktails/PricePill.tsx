
type Props = {
  price: string;
};

export default function PricePill({ price }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-black/18 px-3 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      <span className="text-[13px] font-semibold tracking-wide text-white">
        {price}
      </span>
    </div>
  );
}