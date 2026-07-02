import { AnimatedSection } from "./AnimatedSection";
import { ShieldCheck, HardHat, TrendingUp } from "lucide-react";

export function WorksFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Peace of Mind Guaranteed",
      desc: "Our rigorous quality control ensures every program meets international standards.",
    },
    {
      icon: HardHat,
      title: "Always Covered",
      desc: "From child welfare to execution, we manage all risks and safety protocols on-site.",
    },
    {
      icon: TrendingUp,
      title: "Financial Stability",
      desc: "We stay within budget without compromising on the quality of our materials.",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-6 md:px-[60px] bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col gap-4 pt-10 md:pt-0 first:pt-0 md:px-8 first:pl-0 last:pr-0">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#326B70]" />
                  </div>
                  <h4 className="text-[#111111] font-semibold text-[15px]">{feature.title}</h4>
                </div>
                <p className="text-[#546478] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
