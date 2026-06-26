import { AnimatedSection } from "./AnimatedSection";

export function WorksPartners() {
  const partners = [
    { name: "Dangote Cement", logo: "DC" },
    { name: "Julius Berger", logo: "JB" },
    { name: "Lafarge Africa", logo: "LA" },
    { name: "Cappa & D'Alberto", logo: "CD" },
    { name: "BUA Group", logo: "BUA" },
  ];

  return (
    <section className="py-12 md:py-16 px-6 md:px-[60px] bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        <AnimatedSection className="mb-10 text-center">
          <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
            Our Partners That Help Us Protect You
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="w-full">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-2 text-[#111111] hover:text-[#326B70] transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs tracking-tighter shrink-0">
                  {partner.logo}
                </div>
                <span className="font-medium text-sm tracking-wide">{partner.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
