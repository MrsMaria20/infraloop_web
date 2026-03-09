import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";
import Heading from "@/components/ui/Heading";

export default function CtaBanner() {
  return (
    <section className="bg-navy-deep py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Heading
          as="h2"
          className="font-display text-off-white text-3xl md:text-4xl lg:text-[2.5rem]"
        >
          Join the pilot program
        </Heading>
        <p className="mt-6 font-body text-base leading-relaxed text-gray-light md:text-lg md:leading-loose">
          Apply to join the pilot: share your role, company, region, and
          material types. We'll follow up with next steps.
        </p>
        <div className="mt-12">
          <Button
            href={ROUTES.pilot}
            variant="primary"
            className="min-w-[220px] px-8 py-3.5 md:min-w-[280px] md:px-10 md:py-4 text-base"
          >
            {CTAS.joinPilot} →
          </Button>
        </div>
      </div>
    </section>
  );
}
