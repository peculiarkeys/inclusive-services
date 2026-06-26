import { AnimatedSection } from "./AnimatedSection";

export function WhyItMatters() {
  return (
    <section className="bg-[#111111] text-white py-16 md:py-24 px-6 md:px-[60px] relative overflow-hidden">
      {/* Decorative accent element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF6501]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <span className="text-[#FF6501] text-sm uppercase tracking-[2px] font-semibold mb-3 block">
                The Single Point of Accountability
              </span>
              <h2 className="text-white mb-6" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-1.5px" }}>
                Why It Matters
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:w-1/2">
            <AnimatedSection delay={0.1}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                Most construction projects fail because too many hands are in the pot — one company designs, another procures, a third builds, and nobody's fully accountable.
              </p>
              <div className="w-12 h-[2px] bg-[#FF6501] my-8" />
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                With Obembe, it's one team, one number to call, one company responsible for getting your project right.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
