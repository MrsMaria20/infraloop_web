import Card from "@/components/ui/Card";

export default function ValueProps() {
  const items = [
    { title: "Sell", description: "Placeholder" },
    { title: "Save", description: "Placeholder" },
    { title: "Sustain", description: "Placeholder" },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-display text-2xl font-bold text-off-white md:text-3xl">
          Value propositions
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="font-ui text-lg font-medium text-off-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-light">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
