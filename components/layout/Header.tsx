import Link from "next/link";
import { ROUTES, CTAS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-charcoal/90 backdrop-blur-xl border-b border-white/10 text-off-white font-ui shadow-lg sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={ROUTES.home} className="font-display text-xl font-bold text-off-white hover:text-construction-orange transition-colors">
          InfraLoop
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Main">
          <Link href={ROUTES.about} className="text-gray-light hover:text-construction-orange hover:-translate-y-0.5 transition-all duration-200">About</Link>
          <Link href={ROUTES.howItWorks} className="text-gray-light hover:text-construction-orange hover:-translate-y-0.5 transition-all duration-200">How It Works</Link>
          <Link href={ROUTES.pilot} className="text-gray-light hover:text-construction-orange hover:-translate-y-0.5 transition-all duration-200">Pilot</Link>
          <Link href={ROUTES.team} className="text-gray-light hover:text-construction-orange hover:-translate-y-0.5 transition-all duration-200">Team</Link>
          <Link href={ROUTES.contact} className="text-gray-light hover:text-construction-orange hover:-translate-y-0.5 transition-all duration-200">Contact</Link>
          <Link
            href={ROUTES.pilot}
            className="min-h-[44px] min-w-[44px] items-center justify-center rounded bg-construction-orange px-4 py-2 font-medium text-white transition-all duration-200 hover:shadow-[0_8px_24px_0_rgba(224,123,42,0.4)] hover:-translate-y-1"
          >
            {CTAS.joinPilot}
          </Link>
        </nav>
        <button
          type="button"
          className="min-h-[44px] min-w-[44px] md:hidden text-off-white"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
