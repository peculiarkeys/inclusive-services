import { AnimatedSection } from "./AnimatedSection";

const steps = [
  { num: "1", title: "Our Vision", desc: "Obembe Construction was founded with a vision to transform the construction industry and deliver exceptional projects that shape communities and drive progress." },
  { num: "2", title: "Our Journey", desc: "Our journey began with a small team of industry professionals who shared a common vision: to create a construction company that prioritizes quality." },
  { num: "3", title: "Our Commitment", desc: "From the very beginning, we focused on building strong relationships with our clients, delivering tailored solutions that exceed expectations." },
  { num: "4", title: "Our Mission", desc: "To deliver exceptional construction solutions that exceed client expectations, foster sustainable development, and positively impact communities." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f9f9f9] py-16 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Get To Know Us
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#111111]/50 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-8">
                  {/* Number circle */}
                  <div
                    className="w-16 h-16 bg-[#FF6501] rounded-full flex items-center justify-center text-white"
                    style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-1.8px" }}
                  >
                    {step.num}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-[#111111] mb-3" style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36.4px", letterSpacing: "-0.5px" }}>
                      {step.title}
                    </h4>
                    <p className="text-[#111111]/80" style={{ fontSize: "16px", lineHeight: "30.4px" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}