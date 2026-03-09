import { ROUTES, CTAS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function MarketplacePreviewTeaser() {
  return (
    <section className="relative bg-gradient-to-br from-white/50 via-gray-pale/30 to-white/50 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading
            as="h2"
            className="font-display text-navy-deep text-3xl md:text-4xl"
          >
            See the platform
          </Heading>
          <p className="mt-6 font-body text-base leading-relaxed text-gray-dark md:text-lg md:leading-loose">
            Get a visual sense of the marketplace: listing cards, search and
            filter, and how materials are presented. Preview only — no live
            marketplace yet.
          </p>
          <div className="mt-10">
            <Button href={ROUTES.marketplacePreview} variant="secondary">
              {CTAS.requestEarlyAccess} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
