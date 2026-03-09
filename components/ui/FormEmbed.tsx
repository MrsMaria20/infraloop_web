import { type ReactNode } from "react";

type FormEmbedProps = {
  children?: ReactNode;
  /** Min height for embed container (e.g. form iframe). */
  minHeight?: string;
  className?: string;
};

export default function FormEmbed({
  children,
  minHeight = "600px",
  className = "",
}: FormEmbedProps) {
  return (
    <div
      className={`w-full min-w-0 ${className}`}
      style={{ minHeight }}
    >
      {children ?? <div className="rounded border border-gray-dark bg-navy-light p-8 text-center text-gray-mid">Form embed placeholder</div>}
    </div>
  );
}
