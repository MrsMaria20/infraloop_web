import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  const items = [
    { title: "FAQ item 1", content: "Placeholder answer." },
    { title: "FAQ item 2", content: "Placeholder answer." },
  ];
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy-deep">
        FAQ
      </h2>
      <Accordion items={items} className="mt-6" />
    </section>
  );
}
