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
      {children ?? <div className="rounded-lg border border-white/10 bg-white/15 backdrop-blur-xl p-8 text-center text-gray-light shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2">Form embed placeholder</div>}
    </div>
  );
}
