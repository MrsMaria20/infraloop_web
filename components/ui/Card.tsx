import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative rounded-lg border border-white/20 bg-white/40 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_32px_0_rgba(11,31,53,0.12)] ${className}`}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-construction-orange"
        aria-hidden
      />
      <div className="pl-5">{children}</div>
    </div>
  );
}
