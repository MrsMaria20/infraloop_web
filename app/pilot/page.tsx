import PageSection from "@/components/layout/PageSection";
import FormEmbed from "@/components/ui/FormEmbed";

export default function PilotPage() {
  return (
    <>
      <PageSection>
        <h1 className="font-display text-4xl font-bold text-navy-deep">
          Join the Pilot Program
        </h1>
        <p className="mt-4 text-gray-dark">
          Pilot application form (Tally embed) — placeholder.
        </p>
        <div className="mt-8">
          <FormEmbed />
        </div>
      </PageSection>
    </>
  );
}
