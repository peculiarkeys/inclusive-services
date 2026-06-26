import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { AboutSection } from "../components/AboutSection";
import { ServiceSection } from "../components/ServiceSection";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[24] || "";

export function AboutPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* About Page Hero */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[85vh] min-h-[500px] rounded-[32px] overflow-hidden flex flex-col bg-[#1a1c18] shadow-lg mt-0">
          
          {/* Background image + overlay */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Construction Team" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-12 md:pb-20">
            
            {/* Reviews floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=11" alt="Reviewer" className="w-10 h-10 rounded-full border-[2px] border-[#222]" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Reviewer" className="w-10 h-10 rounded-full border-[2px] border-[#222]" />
                <img src="https://i.pravatar.cc/100?img=33" alt="Reviewer" className="w-10 h-10 rounded-full border-[2px] border-[#222]" />
              </div>
              <div>
                <div className="flex gap-1 mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                </div>
                <div className="text-white text-xs font-semibold tracking-wide">200+ Reviews</div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white leading-[1.05] font-medium max-w-[700px]"
                style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
              >
                Quality Construction & Building Solutions Provider
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-5 max-w-[340px]"
              >
                <p className="text-white/80 text-[15px] leading-relaxed font-medium">
                  We are a dedicated team committed to providing top-tier engineering and construction services, built to stand the test of time.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#d16c49] text-white px-7 py-4 rounded-xl font-medium hover:bg-[#b05b3e] transition-colors text-sm w-fit shadow-md">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section contains the stats row + about layout exactly from the design */}
      <AboutSection />
      
      {/* Service Section matching the bottom of the screenshot */}
      <ServiceSection />

      <CTABanner />
    </div>
  );
}
