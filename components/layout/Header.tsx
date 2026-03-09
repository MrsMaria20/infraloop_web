import Link from "next/link";
import { ROUTES, CTAS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/30 text-navy-deep font-ui shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={ROUTES.home} className="font-display text-xl font-bold text-navy-deep hover:text-construction-orange transition-colors">
          InfraLoop
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Main">
          <Link href={ROUTES.about} className="text-gray-dark hover:text-construction-orange transition-colors">About</Link>
          <Link href={ROUTES.howItWorks} className="text-gray-dark hover:text-construction-orange transition-colors">How It Works</Link>
          <Link href={ROUTES.pilot} className="text-gray-dark hover:text-construction-orange transition-colors">Pilot</Link>
          <Link href={ROUTES.team} className="text-gray-dark hover:text-construction-orange transition-colors">Team</Link>
          <Link href={ROUTES.contact} className="text-gray-dark hover:text-construction-orange transition-colors">Contact</Link>
          <Link
            href={ROUTES.pilot}
            className="min-h-[44px] min-w-[44px] items-center justify-center rounded bg-construction-orange px-4 py-2 font-medium text-white transition-colors hover:opacity-90"
          >
            {CTAS.joinPilot}
          </Link>
        </nav>
        <button
          type="button"
          className="min-h-[44px] min-w-[44px] md:hidden text-navy-deep"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
