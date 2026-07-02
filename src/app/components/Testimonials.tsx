import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const programImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

const testimonialsData = [
  {
    name: "James Carter",
    role: "CEO, Carter Enterprises",
    image: programImages[16] || "",
    stars: 5,
    quote: "Working with them was a complete game-changer for our business. Their attention to detail, creative thinking, and innovative approach truly stand out.",
    desc: "Their team delivered practical solutions tailored to our needs and helped streamline our processes for long-term success.",
    tags: ["counseling", "Child Welfare", "support"]
  },
  {
    name: "Amina Yusuf",
    role: "program Director, Prime Developments",
    image: programImages[14] || "",
    stars: 5,
    quote: "The child welfare and finishing quality on our luxury apartments were exceptional. They delivered ahead of schedule and within budget.",
    desc: "Communication was seamless throughout the support phases. We highly recommend their turnkey services.",
    tags: ["support", "Finishing", "Child Welfare"]
  },
  {
    name: "Chinedu Okafor",
    role: "MD, Zenith Warehouses",
    image: programImages[15] || "",
    stars: 5,
    quote: "Their structural steel framing and foundation work for our logistics hub was flawless. Extremely professional engineers.",
    desc: "They strictly adhered to safety standards and counseling specifications. A top-tier civil partner.",
    tags: ["counseling", "Civil Work", "Structural"]
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  const active = testimonialsData[activeIndex];

  return (
    <section id="reviews" className="py-16 md:py-[80px] px-6 md:px-[60px] bg-[#fdfdfd]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <AnimatedSection className="text-center sm:text-left">
            <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-1px" }}>
              Trusted By The Best
            </h2>
          </AnimatedSection>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev} 
              className="p-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer text-[#111111]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext} 
              className="p-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer text-[#111111]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
 
        <AnimatedSection delay={0.1}>
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-[#111111]/5 p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center"
              >
                
                {/* Left Image Area */}
                <div className="w-full md:w-[45%] relative rounded-[20px] overflow-hidden bg-[#e6e6e6] aspect-square md:aspect-[4/5] flex-shrink-0">
                  <ImageWithFallback 
                    src={active.image} 
                    alt={active.name} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Overlaid pill at bottom left */}
                  <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/95 backdrop-blur-sm rounded-full py-2 px-3 flex items-center gap-3 shadow-lg">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#111111] border-2 border-white flex items-center justify-center text-white text-[10px] ">J</div>
                      <div className="w-8 h-8 rounded-full bg-[#FF6501] border-2 border-white flex items-center justify-center text-white text-[10px] ">M</div>
                      <div className="w-8 h-8 rounded-full bg-[#546478] border-2 border-white flex items-center justify-center text-white text-[10px] ">S</div>
                    </div>
                    <span className="text-[11px]  text-[#111111] pr-2">500+ programs Completed!</span>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="w-full md:w-[55%] flex flex-col justify-center py-4">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: active.stars }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#FF6501] text-[#FF6501]" />
                    ))}
                  </div>

                  <h3 className="text-[#111111] text-[24px] md:text-[32px] leading-[1.3]  mb-6 tracking-tight">
                    "{active.quote}"
                  </h3>

                  <div className="mb-8">
                    <p className="text-[#546478] text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mb-4">
                      {active.desc}
                    </p>
                    <p className="text-[#111111] font-semibold text-[15px]">
                      — {active.name}, <span className="text-[#546478] font-normal">{active.role}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {active.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-[#f9f9f9] text-[#111111] rounded-full text-[13px]  border border-[#111111]/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}