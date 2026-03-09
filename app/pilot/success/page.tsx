import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";

export default function PilotSuccessPage() {
  return (
    <>
      <PageSection background="navy-deep">
        <h1 className="font-display text-4xl font-bold text-off-white">
          Application received
        </h1>
        <p className="mt-4 text-gray-light">
          Thank you for applying to the pilot. We will be in touch. Placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.home} variant="primary">
            Back to home
          </Button>
        </div>
      </PageSection>
    </>
  );
}
