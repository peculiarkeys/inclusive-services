import { AnimatedSection } from "./AnimatedSection";
import { ArrowUpRight, Wind, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const feat1 = projectImages[9] || "";
const feat2 = projectImages[10] || "";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-[120px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-auto lg:auto-rows-[1fr]">
          
          {/* Card 1: Left Tall */}
          <AnimatedSection className="lg:col-span-1 lg:row-span-2 relative rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-[500px] group cursor-pointer" delay={0.1}>
            <ImageWithFallback 
              src={feat1} 
              alt="Excellence" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-medium mb-2 leading-tight">Excellence</h3>
                <p className="text-white/80 text-sm max-w-[200px]">We don't cut corners. Every project is built to the highest standard, every time.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#111111] flex flex-shrink-0 items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </AnimatedSection>

          {/* Heading spans col 2-3 */}
          <AnimatedSection className="lg:col-span-2 flex items-center justify-center text-center p-6 lg:p-10" delay={0.2}>
            <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-1.5px" }}>
              Our Values
            </h2>
          </AnimatedSection>

          {/* Card 4: Right Tall */}
          <AnimatedSection className="lg:col-span-1 lg:row-span-2 relative rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-[500px] group cursor-pointer" delay={0.5}>
            <ImageWithFallback 
              src={feat2} 
              alt="Quality" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-medium mb-2 leading-tight">Built to Last</h3>
                <p className="text-white/80 text-sm max-w-[200px]">Spaces designed for comfort, utility, and absolute structural safety.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#111111] flex flex-shrink-0 items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: Square Middle Left */}
          <AnimatedSection className="lg:col-span-1 bg-[#f9f9f9] rounded-[24px] p-8 flex flex-col justify-between min-h-[250px] relative group cursor-pointer" delay={0.3}>
            <div>
              <h3 className="text-2xl font-medium text-[#111111] mb-2 leading-tight">Integrity</h3>
              <p className="text-[#111111]/70 text-sm mt-4">What we say is what we do. No surprises, no excuses.</p>
            </div>
            <div className="flex justify-between items-end mt-8">
              <span className="px-4 py-2 border border-[#111111]/10 rounded-full text-sm font-medium text-[#111111]">
                Read more
              </span>
              <div className="w-10 h-10 rounded-full bg-[#111111] flex flex-shrink-0 items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3: Square Middle Right */}
          <AnimatedSection className="lg:col-span-1 bg-[#f9f9f9] rounded-[24px] p-8 flex flex-col justify-between min-h-[250px] relative group cursor-pointer" delay={0.4}>
            <div>
              <Wind className="w-8 h-8 text-[#111111] mb-6" />
              <h3 className="text-2xl font-medium text-[#111111] leading-tight">Collaboration</h3>
            </div>
            <div className="flex justify-between items-end mt-8">
              <p className="text-[#111111]/70 text-sm max-w-[220px]">We work with you, not around you, from the first conversation to the final walkthrough.</p>
              <div className="w-10 h-10 rounded-full bg-[#111111] flex flex-shrink-0 items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}