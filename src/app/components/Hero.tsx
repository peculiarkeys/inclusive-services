"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

// Select a few images for the slider
const sliderImages = [
  projectImages[12],
  projectImages[2],
  projectImages[5],
  projectImages[8],
].filter(Boolean) as string[];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#f9f9f9] p-4 md:p-6">
      {/* Hero Container with Rounded Corners */}
      <div className="relative w-full h-[75vh] min-h-[450px] md:h-[90vh] md:min-h-[600px] rounded-[32px] overflow-hidden flex flex-col bg-[#2e1d13] shadow-lg">
        
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence>
            {sliderImages.map((src, index) => (
              index === currentImageIndex && (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 10, ease: "linear" }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <ImageWithFallback src={src} alt="Construction Site" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
                </motion.div>
              )
            ))}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 pointer-events-none" />
        </div>

        {/* Main Title Area (Bottom Left) */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white leading-[1.0] font-medium max-w-[900px] mb-8"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            We Build It. You Don't <br /> Have to Worry About It.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm shadow-md"
            >
              Talk to Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#projects"
              className="text-white border border-white/40 hover:bg-white/10 px-7 py-3.5 rounded-full font-semibold transition-colors text-sm backdrop-blur-sm"
            >
              See Our Work &rarr;
            </a>
          </motion.div>
        </div>

        {/* Bottom Right Floating Card */}
        <div className="absolute bottom-10 right-10 z-20 hidden lg:block max-w-[340px]">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl flex flex-col gap-4 text-left"
          >
            <div className="flex gap-4">
              <div className="w-24 h-16 rounded-xl overflow-hidden bg-gray-200">
                <img src={projectImages[13] || ""} alt="Video thumb" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Client" className="w-7 h-7 rounded-full border-2 border-white relative z-30" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-7 h-7 rounded-full border-2 border-white relative z-20" />
                  <img src="https://i.pravatar.cc/100?img=33" alt="Client" className="w-7 h-7 rounded-full border-2 border-white relative z-10" />
                </div>
                <div className="text-[12px] font-semibold text-[#111] mt-1.5 leading-none tracking-tight">200+ Clients</div>
                <div className="text-[11px] text-gray-500 mt-1 leading-none">100% Success Rate</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-medium pr-2">
              Our clients love us and are consistently satisfied with our construction delivery and management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}