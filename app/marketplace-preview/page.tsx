import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";

export default function MarketplacePreviewPage() {
  return (
    <>
      <PageSection background="navy-deep">
        <h1 className="font-display text-4xl font-bold text-off-white">
          Marketplace Preview
        </h1>
        <p className="mt-4 text-gray-light">
          Annotated screenshots, listing cards, search/filter preview — placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.contact} variant="primary">
            {CTAS.requestEarlyAccess} →
          </Button>
        </div>
      </PageSection>
    </>
  );
}
