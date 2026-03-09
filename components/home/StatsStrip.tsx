import StatBlock from "@/components/ui/StatBlock";

const STRIP_ITEMS = [
  { value: "Pilot", label: "Program open for applicants" },
  { value: "Construction", label: "Built for contractors & subs" },
  { value: "Surplus", label: "Sell & buy materials" },
  { value: "Waste", label: "Reduce disposal & cost" },
] as const;

export default function StatsStrip() {
  return (
    <section
      className="border-b border-white/10 bg-navy-deep pt-[3px] pb-14 md:pb-16"
      aria-label="Key points"
    >
      <div className="h-[3px] w-full bg-construction-orange" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-14 lg:px-8">
        <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
            {STRIP_ITEMS.map((item) => (
              <StatBlock
                key={item.label}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
