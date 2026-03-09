import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import HowItWorksTeaser from "@/components/home/HowItWorksTeaser";
import StatsStrip from "@/components/home/StatsStrip";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorksTeaser />
      <StatsStrip />
      <CtaBanner />
    </>
  );
}
