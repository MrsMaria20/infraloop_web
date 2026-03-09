import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-light font-ui">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <Link href={ROUTES.about}>About</Link>
          <Link href={ROUTES.howItWorks}>How It Works</Link>
          <Link href={ROUTES.pilot}>Pilot</Link>
          <Link href={ROUTES.team}>Team</Link>
          <Link href={ROUTES.contact}>Contact</Link>
        </nav>
        <p className="mt-6 text-sm text-gray-mid">© InfraLoop. Placeholder.</p>
      </div>
    </footer>
  );
}
