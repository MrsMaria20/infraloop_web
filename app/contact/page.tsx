import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import { CTAS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <PageSection>
        <h1 className="font-display text-4xl font-bold text-off-white">
          Contact / Demo
        </h1>
        <p className="mt-4 text-gray-light">
          Schedule a demo call or reach out by email. Calendly embed and direct email only — placeholder.
        </p>
        <div className="mt-8">
          <Button href="#calendly" variant="primary">
            {CTAS.scheduleDemo} →
          </Button>
        </div>
        <div id="calendly" className="mt-12">
          <CalendlyEmbed />
        </div>
        <p className="mt-8 text-gray-mid text-sm">
          Or email us at: [direct email placeholder]
        </p>
      </PageSection>
    </>
  );
}
