import Image from "next/image";
import { ROUTES, CTAS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero_background.jpg"
        alt="Construction site background"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        aria-hidden
      />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Glass Container */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 max-w-3xl">
          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Marketplace for Surplus Construction Materials
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Turn leftover building materials into revenue instead of sending them to landfills.
          </p>
          
          {/* CTA Button */}
          <div className="mt-10">
            <Button
              href={ROUTES.pilot}
              variant="primary"
              className="text-base"
            >
              {CTAS.joinPilot} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
