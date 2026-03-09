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
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded font-ui px-4 py-2";
  const variants = {
    primary: "bg-construction-orange text-brand-black hover:opacity-90",
    secondary: "border border-gray-dark text-off-white hover:bg-navy-light",
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
