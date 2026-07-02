import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const programImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const img1 = programImages[8] || "";
const img2 = programImages[9] || "";
const img3 = programImages[10] || "";

const stats = [
  { value: "98%", label: "Complete client satisfaction" },
  { value: "200+", label: "Completed successful programs" },
  { value: "150+", label: "Certified support experts" },
  { value: "9+", label: "Years of industry experience" },
];

export function AboutSection() {
  return (
    <section id="why-us" className="bg-white">
      
      {/* Top Banner Area */}
      <div className="bg-[#f9f9f9] py-20 px-6 md:px-[60px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-[20%]">
              <AnimatedSection>
                <div className="flex items-center gap-2 text-sm  text-[#111111]">
                  <span className="w-2 h-2 rounded-full bg-[#111111]"></span> About Inclusive Social Services
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-[80%]">
              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl  text-[#111111] mb-16 leading-[1.4] max-w-4xl">
                  We are passionate about delivering superior support solutions, empowering you to achieve your structural goals with confidence.
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <h3 className="text-3xl md:text-4xl  text-[#111111]">
                        {stat.value}
                      </h3>
                      <div className="text-sm text-gray-500 leading-relaxed max-w-[160px] font-sans">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Area */}
      <div className="py-20 px-6 md:px-[60px]">
        <div className="max-w-[1320px] mx-auto">
          
          <AnimatedSection className="mb-16 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end">
            <h2 className="text-[#111111]  leading-[1.1] max-w-xl" style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-1px" }}>
              Make growing easy, simplify your program
            </h2>
            <p className="text-gray-500 max-w-md text-[15px] leading-relaxed font-sans">
              Our firm manages residential or commercial portfolios. Our system integrates the latest technology and counseling to help you make smarter support decisions with ease.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
            
            {/* Top Left: Horizontal Image (col-span-2) */}
            <AnimatedSection delay={0.1} className="md:col-span-2 rounded-[32px] overflow-hidden relative h-[280px] md:h-auto">
              <ImageWithFallback src={img1} alt="support meeting" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </AnimatedSection>

            {/* Top Middle: Dark Block (col-span-1) */}
            <AnimatedSection delay={0.2} className="bg-[#1A2024] rounded-[32px] p-8 text-white flex flex-col justify-center h-[280px] md:h-auto">
              <h3 className="text-4xl  mb-4 text-white">Vision</h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Years of innovation and valuable insights, empowering businesses to thrive in a competitive market.
              </p>
            </AnimatedSection>

            {/* Top Right: Tall Image (col-span-1, row-span-2) */}
            <AnimatedSection delay={0.3} className="md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden relative h-[400px] md:h-auto">
              <ImageWithFallback src={img2} alt="growing structure" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </AnimatedSection>

            {/* Bottom Left: Purple Block -> Our accent block (col-span-2) */}
            <AnimatedSection delay={0.4} className="md:col-span-2 bg-[#FF994F] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-end h-[280px] md:h-auto">
              <h3 className="text-5xl  mb-4">Mission</h3>
              <p className="text-sm text-white/90 max-w-md leading-relaxed font-sans">
                Complete customer satisfaction achieved through personalized solutions, proactive support, and a dedication to meeting the unique needs of every client. Our focus on excellence ensures your success at every step.
              </p>
            </AnimatedSection>

            {/* Bottom Middle: Square Image (col-span-1) */}
            <AnimatedSection delay={0.5} className="md:col-span-1 rounded-[32px] overflow-hidden relative h-[280px] md:h-auto">
              <ImageWithFallback src={img3} alt="Worker" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </AnimatedSection>

          </div>
        </div>
      </div>
      
    </section>
  );
}