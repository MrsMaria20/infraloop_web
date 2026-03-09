import Card from "@/components/ui/Card";

export default function TeamGrid() {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-off-white">
        Team
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="font-ui font-medium text-off-white">Team member placeholder</div>
          <p className="mt-2 text-sm text-gray-light">Bio — placeholder.</p>
        </Card>
        <Card>
          <div className="font-ui font-medium text-off-white">Team member placeholder</div>
          <p className="mt-2 text-sm text-gray-light">Bio — placeholder.</p>
        </Card>
      </div>
    </section>
  );
}
