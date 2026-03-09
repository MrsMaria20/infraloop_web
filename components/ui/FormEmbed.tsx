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
      {children ?? <div className="rounded border border-white/20 bg-white/40 backdrop-blur-md p-8 text-center text-gray-mid shadow-[0_8px_32px_0_rgba(11,31,53,0.12)]">Form embed placeholder</div>}
    </div>
  );
}
