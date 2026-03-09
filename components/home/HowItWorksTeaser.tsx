import Link from "next/link";
import { ROUTES, CTAS } from "@/lib/constants";

export default function HowItWorksTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-display text-2xl font-bold text-off-white md:text-3xl">
          How It Works teaser
        </h2>
        <p className="mt-4 text-gray-light">
          Placeholder copy. Link below to full page.
        </p>
        <Link
          href={ROUTES.howItWorks}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded bg-construction-orange px-4 py-2 font-ui font-medium text-brand-black"
        >
          {CTAS.seeHowItWorks} →
        </Link>
      </div>
    </section>
  );
}
