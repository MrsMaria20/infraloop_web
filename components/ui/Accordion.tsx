import { type ReactNode } from "react";

type AccordionProps = {
  items: Array<{ title: string; content: ReactNode }>;
  className?: string;
};

export default function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border border-white/20 rounded bg-white/40 backdrop-blur-md p-4 shadow-[0_4px_16px_0_rgba(11,31,53,0.1)]">
          <div className="font-ui font-medium text-navy-deep">{item.title}</div>
          <div className="mt-2 text-gray-dark text-sm">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
