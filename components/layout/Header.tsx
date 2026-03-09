import Link from "next/link";
import { ROUTES, CTAS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-navy-deep text-off-white font-ui">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={ROUTES.home} className="font-display text-xl font-bold">
          InfraLoop
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Main">
          <Link href={ROUTES.about}>About</Link>
          <Link href={ROUTES.howItWorks}>How It Works</Link>
          <Link href={ROUTES.pilot}>Pilot</Link>
          <Link href={ROUTES.team}>Team</Link>
          <Link href={ROUTES.contact}>Contact</Link>
          <Link
            href={ROUTES.pilot}
            className="min-h-[44px] min-w-[44px] items-center justify-center rounded bg-construction-orange px-4 py-2 font-medium text-brand-black transition-colors hover:opacity-90"
          >
            {CTAS.joinPilot}
          </Link>
        </nav>
        {/* Hamburger placeholder — full implementation in Phase 1 */}
        <button
          type="button"
          className="min-h-[44px] min-w-[44px] md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
