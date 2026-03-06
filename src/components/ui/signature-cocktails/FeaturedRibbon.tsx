
export default function FeaturedRibbon() {
  return (
    <div className="absolute left-5 top-5 overflow-hidden rounded-[14px] border border-white/14 bg-[#070411]/55 backdrop-blur-md">
      <div className="flex items-center gap-0">
        <div className="h-10 w-1.5 bg-red-600" />
        <div className="px-4 py-2">
          <span className="text-[11px] font-semibold tracking-[0.26em] text-white/85">
            FEATURED
          </span>
        </div>
      </div>
    </div>
  );
}