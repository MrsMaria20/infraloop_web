import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative rounded-lg border border-white/10 bg-white/15 backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2 ${className}`}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-construction-orange"
        aria-hidden
      />
      <div className="pl-5">{children}</div>
    </div>
  );
}
