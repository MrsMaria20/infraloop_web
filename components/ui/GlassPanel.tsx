import { type ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  hover?: boolean;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export default function GlassPanel({
  children,
  variant = "light",
  hover = false,
  className = "",
  rounded = "lg",
}: GlassPanelProps) {
  const roundedMap = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const variantStyles = {
    light: "bg-white/15 border-white/10 text-off-white",
    dark: "bg-black/15 border-black/10 text-navy-deep",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2"
    : "";

  return (
    <div
      className={`backdrop-blur-xl border p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] ${roundedMap[rounded]} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
