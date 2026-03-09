import { type ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  /** Optional background: white, gray-pale, navy-deep */
  background?: "white" | "gray-pale" | "navy-deep";
};

const bgMap = {
  "white": "bg-white",
  "gray-pale": "bg-gray-pale",
  "navy-deep": "bg-navy-deep",
} as const;

export default function PageSection({
  children,
  className = "",
  background = "white",
}: PageSectionProps) {
  return (
    <section className={`py-16 md:py-24 lg:py-32 ${bgMap[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
