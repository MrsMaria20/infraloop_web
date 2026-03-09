import StatBlock from "@/components/ui/StatBlock";

export default function StatsStrip() {
  return (
    <section className="border-y border-gray-dark bg-navy-light py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatBlock value="—" label="Placeholder stat 1" />
          <StatBlock value="—" label="Placeholder stat 2" />
          <StatBlock value="—" label="Placeholder stat 3" />
          <StatBlock value="—" label="Placeholder stat 4" />
        </div>
      </div>
    </section>
  );
}
