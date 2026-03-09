import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";

const VALUE_PROPS = [
  {
    title: "Sell",
    description:
      "List surplus and leftover materials instead of sending them to the dump. Turn over-order and job leftovers into revenue.",
  },
  {
    title: "Save",
    description:
      "Source materials at a discount from other contractors. Reduce procurement costs and avoid full-price orders for small needs.",
  },
  {
    title: "Sustain",
    description:
      "Cut disposal costs and landfill volume. Support landfill diversion and sustainability reporting for your projects.",
  },
] as const;

export default function ValueProps() {
  return (
    <section className="relative bg-gray-pale py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading
          as="h2"
          className="font-display text-center text-navy-deep text-3xl md:text-4xl"
        >
          Sell · Save · Sustain
        </Heading>
        <p className="mx-auto mt-5 max-w-2xl text-center font-body text-base text-gray-dark md:text-lg md:leading-relaxed">
          Built for general contractors, subs, and teams that want to reduce
          waste and cost without the hassle.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {VALUE_PROPS.map((item) => (
            <Card key={item.title} className="flex flex-col bg-black/15 border-black/10 text-navy-deep">
              <h3 className="font-display text-xl font-bold tracking-tight text-construction-orange md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-gray-dark md:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
