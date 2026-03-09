import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-gray-light font-ui">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <Link href={ROUTES.about} className="hover:text-construction-orange transition-colors">About</Link>
          <Link href={ROUTES.howItWorks} className="hover:text-construction-orange transition-colors">How It Works</Link>
          <Link href={ROUTES.pilot} className="hover:text-construction-orange transition-colors">Pilot</Link>
          <Link href={ROUTES.team} className="hover:text-construction-orange transition-colors">Team</Link>
          <Link href={ROUTES.contact} className="hover:text-construction-orange transition-colors">Contact</Link>
        </nav>
        <p className="mt-6 text-sm text-gray-mid">© InfraLoop. Placeholder.</p>
      </div>
    </footer>
  );
}
