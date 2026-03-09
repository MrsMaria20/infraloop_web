import { type ReactNode } from "react";

type AccordionProps = {
  items: Array<{ title: string; content: ReactNode }>;
  className?: string;
};

export default function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border border-gray-dark rounded bg-navy-light p-4">
          <div className="font-ui font-medium">{item.title}</div>
          <div className="mt-2 text-gray-light text-sm">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
