import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Eye, Target, ShieldCheck, CheckCircle2 } from "lucide-react";
const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const aboutImg = projectImages[8] || "";
const stats = [
  { value: "9+", label: "Years Industry Experience" },
  { value: "200+", label: "Completed Projects" },
  { value: "150+", label: "Certified Construction" },
  { value: "98%", label: "Client Satisfaction Rating" },
];

export function AboutSection() {
  return (
    <section id="why-us" className="py-20 px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Stats Banner */}
        <div className="flex flex-wrap justify-between items-center py-8 border-b border-gray-100 mb-20 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center">
              <h3 className="text-[#111111] text-4xl md:text-5xl font-medium mb-2">
                {stat.value.replace('+', '')}
                <span className="text-[#d16c49]">+</span>
              </h3>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* About Us Content */}
        {/* Top Row: Labels and Headings */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left Col */}
          <div className="lg:w-1/4">
            <AnimatedSection>
              <p className="text-xs font-bold text-[#d16c49] uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#d16c49]"></span> ABOUT US
              </p>
              <p className="text-gray-500 text-sm leading-relaxed pr-4">
                You don't want a contractor. You want a partner who shows up, stays on budget, and hands you a finished building you're proud of.
              </p>
            </AnimatedSection>
          </div>
          
          {/* Right Col */}
          <div className="lg:w-3/4">
            <AnimatedSection delay={0.1}>
              <h2 className="text-[#111111] leading-[1.2] font-medium mb-6" style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}>
                Delivering <span className="text-[#326B70]">Superior Construction Solutions</span> for Every Project Type and Scale
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <p className="text-gray-500 max-w-2xl leading-relaxed text-[15px]">
                  Obembe Construction handles your project from design to delivery — engineering, procurement, and construction, all under one roof. No middlemen. No guesswork. Just a team that gets it done right.
                </p>
                <a href="/company" className="shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:bg-gray-50 transition-colors text-sm font-medium text-[#111111]">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Row: Images and Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[480px]">
          
          {/* Left Image */}
          <AnimatedSection delay={0.2} className="lg:w-[65%] relative rounded-3xl overflow-hidden h-[400px] lg:h-full">
            <ImageWithFallback src={aboutImg} alt="Construction Worker" className="w-full h-full object-cover" />
            
            {/* Floating labels */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-[#1A2024] text-white px-5 py-3.5 rounded-full flex items-center gap-3 shadow-xl backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-[#d16c49]" />
              <span className="text-sm font-medium tracking-wide">Certified Construction Team</span>
            </div>
            
            <div className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 bg-[#d16c49] text-white px-5 py-3.5 rounded-full flex items-center gap-3 shadow-xl hidden md:flex">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-sm font-medium tracking-wide">On-site Quality Inspection</span>
            </div>
          </AnimatedSection>

          {/* Right Cards */}
          <div className="lg:w-[35%] flex flex-col gap-6 h-full">
            
            {/* Vision Card */}
            <AnimatedSection delay={0.3} className="bg-[#326B70] flex-1 rounded-3xl p-8 flex flex-col justify-center shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-white" />
                <h3 className="text-white text-xl font-medium">Our Vision</h3>
              </div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                To be the most trusted and reliable construction partner in Nigeria, known for quality, integrity, and timely delivery of complex projects.
              </p>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection delay={0.4} className="bg-[#1A2024] flex-1 rounded-3xl p-8 flex flex-col justify-center shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#d16c49]" />
                <h3 className="text-white text-xl font-medium">Our Mission</h3>
              </div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                To deliver superior construction solutions through innovative engineering, seamless procurement, and flawless execution.
              </p>
            </AnimatedSection>

          </div>
        </div>

      </div>
    </section>
  );
}