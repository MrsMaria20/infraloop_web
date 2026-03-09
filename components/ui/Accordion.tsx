import { type ReactNode } from "react";

type AccordionProps = {
  items: Array<{ title: string; content: ReactNode }>;
  className?: string;
};

export default function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border border-white/10 rounded-lg bg-white/15 backdrop-blur-xl p-4 shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] hover:-translate-y-1">
          <div className="font-ui font-medium text-off-white">{item.title}</div>
          <div className="mt-2 text-gray-light text-sm">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
