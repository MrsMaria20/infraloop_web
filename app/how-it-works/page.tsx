import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";

export default function HowItWorksPage() {
  return (
    <>
      <PageSection background="navy-deep">
        <h1 className="font-display text-4xl font-bold text-off-white">
          How It Works
        </h1>
        <p className="mt-4 text-gray-light">
          Seller/buyer workflows, materials overview, FAQ, logistics — placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.pilot} variant="primary">
            {CTAS.startListing} →
          </Button>
        </div>
      </PageSection>
    </>
  );
}
