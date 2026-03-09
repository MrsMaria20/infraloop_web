import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded font-ui text-sm font-semibold uppercase tracking-wider transition-all duration-200 px-5 py-3 md:px-6 md:py-3";
  const variants = {
    primary:
      "bg-construction-orange text-white shadow-[0_2px_8px_0_rgba(224,123,42,0.25)] hover:shadow-[0_12px_40px_0_rgba(224,123,42,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-construction-orange",
    secondary:
      "bg-white/15 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/25 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.2)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-white/40",
  };
  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return <button type="button" className={styles}>{children}</button>;
}
