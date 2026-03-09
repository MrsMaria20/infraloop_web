import PageSection from "@/components/layout/PageSection";
import Button from "@/components/ui/Button";
import { ROUTES, CTAS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <PageSection background="navy-deep">
        <h1 className="font-display text-4xl font-bold text-off-white">
          About
        </h1>
        <p className="mt-4 text-gray-light">
          Mission, waste stats, approach, values, timeline — placeholder.
        </p>
        <div className="mt-8">
          <Button href={ROUTES.team} variant="primary">
            {CTAS.meetTheTeam} →
          </Button>
        </div>
      </PageSection>
    </>
  );
}
