import { PageHero } from "../PageHero";
import { Testimonials } from "../Testimonials";
import { CTABanner } from "../CTABanner";
import { FAQSection, FAQ } from "../FAQSection";
import { AnimatedSection } from "../AnimatedSection";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServicePageProps {
  hero: {
    title: string;
    description: string;
    image: string;
  };
  overview: {
    title: string;
    description: string;
    image: string;
  };
  features: {
    title: string;
    items: ServiceFeature[];
  };
  process: {
    title: string;
    items: ServiceProcessStep[];
  };
  stats: ServiceStat[];
  faqs: FAQ[];
}

export function ServicePageTemplate({
  hero,
  overview,
  features,
  process,
  stats,
  faqs,
}: ServicePageProps) {
  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* 1. Hero Section */}
      <PageHero
        title={hero.title}
        description={hero.description}
        image={hero.image}
      />

      {/* 2. Overview Section (Text + Image) */}
      <section className="py-20 md:py-28 px-4 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-[#111111] text-3xl md:text-5xl  mb-6 leading-tight">
              {overview.title}
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              {overview.description}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden">
              <ImageWithFallback
                src={overview.image}
                alt={overview.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Features Bento Grid */}
      <section className="py-20 md:py-28 px-4 md:px-10 bg-[#161a16] text-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl  mb-4">{features.title}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.items.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection
                  key={idx}
                  delay={idx * 0.1}
                  className={`bg-white/5 border border-white/10 rounded-[24px] p-8 md:p-10 ${
                    idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <Icon className="w-10 h-10 text-[#FF994F]" />
                  </div>
                  <h3 className="text-2xl  mb-4">{feature.title}</h3>
                  <p className="text-[#a0a59b] leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Cards */}
      <section className="py-20 md:py-28 px-4 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-[#111111] text-3xl md:text-5xl  mb-4">{process.title}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.items.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="bg-[#f9f9f9] border border-gray-100 p-8 rounded-[24px] h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#FF6501] font-semibold text-5xl mb-6 opacity-30">
                    {item.step}
                  </div>
                  <h3 className="text-[#111111] text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Grid */}
      <section className="py-20 bg-[#FF6501] px-4 md:px-10 text-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="text-5xl md:text-6xl font-semibold mb-2">{stat.value}</div>
              <div className="text-white/80  uppercase tracking-wider text-sm">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. FAQ */}
      <FAQSection faqsData={faqs} />

      {/* 8. CTA */}
      <CTABanner />
    </div>
  );
}
