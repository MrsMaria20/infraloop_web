import { ROUTES, CTAS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function HowItWorksTeaser() {
  return (
    <section className="border-y border-white/10 bg-charcoal py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl bg-white/15 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] hover:-translate-y-2">
          <Heading
            as="h2"
            className="font-display text-off-white text-center text-3xl md:text-4xl"
          >
            How it works
          </Heading>
          <p className="mt-6 font-body text-base leading-relaxed text-gray-light text-center md:text-lg md:leading-loose">
            Sellers list surplus materials. Buyers search and purchase at a
            discount. We cover seller and buyer workflows, accepted materials,
            and logistics — so you know what to expect before you join.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={ROUTES.howItWorks} variant="secondary">
              {CTAS.seeHowItWorks} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
