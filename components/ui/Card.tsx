import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded border border-gray-dark bg-navy-light p-6 ${className}`}
    >
      {children}
    </div>
  );
}
