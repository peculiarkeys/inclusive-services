import { AnimatedSection } from "./AnimatedSection";
import { Medal, Lightbulb } from "lucide-react";
import { Logo } from "./Header";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

const img1 = projectImages[6] || "";
const img2 = projectImages[7] || "";

export function WorksAbout() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        
        <AnimatedSection className="flex flex-col items-center text-center mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Logo color="#111111" size={24} />
          </div>
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: "1.15", letterSpacing: "-1px" }}>
            Building Your Vision,<br />
            <span className="italic font-light">Today and Tomorrow.</span>
          </h2>
        </AnimatedSection>

        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
          
          {/* Left Side Info */}
          <div className="lg:w-[45%] flex flex-col gap-12">
            <AnimatedSection direction="left">
              <h3 className="text-[#111111] leading-tight font-medium" style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.5px" }}>
                We're best in <br />the Country
              </h3>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-lg">
              
              <AnimatedSection direction="left" delay={0.1} className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-medium text-[#111111] mb-1 tracking-tight">200+</div>
                <p className="text-[#546478] text-xs leading-relaxed">
                  Successfully completed projects across commercial, residential, and structural sectors.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2} className="flex flex-col gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-[#326B70]" />
                </div>
                <div>
                  <h4 className="text-[#111111] font-semibold text-[15px] mb-1">Unmatched Services</h4>
                  <p className="text-[#546478] text-xs leading-relaxed">
                    Delivering premium quality construction through rigorous standards and expert craftsmanship.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.3} className="flex flex-col gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#326B70]" />
                </div>
                <div>
                  <h4 className="text-[#111111] font-semibold text-[15px] mb-1">Innovative Solutions</h4>
                  <p className="text-[#546478] text-xs leading-relaxed">
                    Utilizing modern engineering techniques and sustainable materials for lasting structures.
                  </p>
                </div>
              </AnimatedSection>
              
            </div>
          </div>

          {/* Right Side Images */}
          <div className="lg:w-[50%] relative min-h-[400px] md:min-h-[500px]">
            <AnimatedSection delay={0.2} className="absolute left-0 top-0 w-[80%] h-[90%] rounded-3xl overflow-hidden shadow-2xl z-10">
              <ImageWithFallback src={img1} alt="Construction Site" className="w-full h-full object-cover" />
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.4} className="absolute right-0 bottom-0 w-[35%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-20 hidden md:block">
              <ImageWithFallback src={img2} alt="Engineer" className="w-full h-full object-cover" />
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
}
