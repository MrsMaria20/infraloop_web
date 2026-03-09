import { type ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  /** Optional background: navy-light, gray-pale, etc. */
  background?: "navy-light" | "gray-pale" | "brand-black";
};

const bgMap = {
  "navy-light": "bg-navy-light",
  "gray-pale": "bg-gray-pale",
  "brand-black": "bg-brand-black",
} as const;

export default function PageSection({
  children,
  className = "",
  background = "brand-black",
}: PageSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgMap[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  );
}
