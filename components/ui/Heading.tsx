import { type ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function Heading({
  children,
  as: Tag = "h2",
  className = "",
}: HeadingProps) {
  const base = "font-display font-bold";
  const size = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-xl md:text-2xl",
  };
  return (
    <Tag className={`${base} ${size[Tag]} ${className}`}>{children}</Tag>
  );
}
