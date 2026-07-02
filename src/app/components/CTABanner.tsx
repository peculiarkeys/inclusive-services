import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
const rawImages = import.meta.glob("../../assets/programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const programImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const bgImg = programImages[15] || "";
export function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="relative">
        <ImageWithFallback src={bgImg} alt="Toronto skyline" className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-[30px] py-[140px] md:py-[180px]">
          <AnimatedSection>
            <div className="max-w-[645px]">
              <h2 className="text-white mb-6" style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 500, lineHeight: "1.05", letterSpacing: "-2.3px" }}>
                Ready to Build Something That Lasts?
              </h2>
              <p className="text-white mb-10 max-w-[516px]" style={{ fontSize: "18px", lineHeight: "32.4px" }}>
                Whether it's a hotel, an office complex, or a program still living in your head — let's talk about how to make it real.
              </p>

              <Link to="/contact" className="inline-block">
                <motion.div
                  className="inline-flex items-center gap-1.5 bg-[#FF6501] text-white px-4 py-3 rounded-[10px] relative overflow-hidden cursor-pointer"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    boxShadow: "inset 0px -4px 4px 0px rgba(0,80,180,0.3), inset 0px 7px 16px 0px rgba(100,190,255,0.4)",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Get Started — Talk to Our Team</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
