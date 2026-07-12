import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const rawImages = import.meta.glob("../../assets/programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const programImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = "/images/family-counseling-session-home-with-therapist-pshycologist-showing-pictures-emotions-girl-african-american-father-european-mother.jpg";
export function WorksHero() {
  return (
    <section className="relative w-full p-4 md:p-6 pb-0">
      <div className="relative w-full h-[85vh] min-h-[600px] rounded-[32px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg">
        
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={heroImg} alt="support Family" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* Top Navbar Space (simulated for layout since header is absolute) */}
        
        {/* Scroll indicator (Left side) */}
        <div className="absolute left-6 md:left-10 bottom-12 z-20 flex flex-col items-center gap-2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <ChevronDown className="w-3 h-3 text-white" />
          </motion.div>
          <span className="text-white/60 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Scroll Down
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-16 md:px-24 h-full flex flex-col justify-center items-end pb-10">
          <div className="flex flex-col gap-6 max-w-[600px] text-right">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white "
              style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: "1.1", letterSpacing: "-1px" }}
            >
              Showcasing <br/>
              <span className="italic font-light">Our Masterpieces</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-end"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 text-white/90 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-all text-sm ">
                Get started with a small step <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
