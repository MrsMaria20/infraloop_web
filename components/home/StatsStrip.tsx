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
      className="border-b border-white/30 bg-white/70 backdrop-blur-sm pt-[3px] pb-14 md:pb-16"
      aria-label="Key points"
    >
      <div className="h-[3px] w-full bg-construction-orange" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-14 lg:px-8">
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
    </section>
  );
}
