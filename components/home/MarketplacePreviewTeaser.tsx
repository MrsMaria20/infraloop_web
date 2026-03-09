import { ROUTES, CTAS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function MarketplacePreviewTeaser() {
  return (
    <section className="relative bg-off-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl bg-black/15 backdrop-blur-xl border border-black/10 rounded-2xl p-10 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2">
          <Heading
            as="h2"
            className="font-display text-navy-deep text-center text-3xl md:text-4xl"
          >
            See the platform
          </Heading>
          <p className="mt-6 font-body text-base leading-relaxed text-gray-dark text-center md:text-lg md:leading-loose">
            Get a visual sense of the marketplace: listing cards, search and
            filter, and how materials are presented. Preview only — no live
            marketplace yet.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={ROUTES.marketplacePreview} variant="secondary">
              {CTAS.requestEarlyAccess} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
