import { AnimatedSection } from "./AnimatedSection";

const brands = ["HomeStars", "Angi", "BBB", "Google", "Yelp", "Homestars"];

export function BrandSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="mb-8">
          <p className="text-[#546478]" style={{ fontSize: "20px", lineHeight: "34px", letterSpacing: "-0.4px" }}>
            Excellence, Expertise, and Dedication
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-[32px] opacity-40 hover:opacity-70 transition-opacity"
                style={{ minWidth: "100px" }}
              >
                <span className="text-[#303447]" style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "-0.5px" }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}