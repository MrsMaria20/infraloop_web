import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="bg-navy-deep py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="font-display text-2xl font-bold text-off-white md:text-3xl">
          CTA banner headline placeholder
        </h2>
        <p className="mt-4 text-gray-light">
          Secondary line placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.pilot} variant="primary">
            {CTAS.joinPilot} →
          </Button>
        </div>
      </div>
    </section>
  );
}
