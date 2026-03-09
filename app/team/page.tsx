import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";

export default function TeamPage() {
  return (
    <>
      <PageSection>
        <h1 className="font-display text-4xl font-bold text-navy-deep">
          Meet the Team
        </h1>
        <p className="mt-4 text-gray-dark">
          Founder bios, advisors, LinkedIn links, team photo — placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.contact} variant="primary">
            {CTAS.bookCall} →
          </Button>
        </div>
      </PageSection>
    </>
  );
}
