import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative w-full p-4 md:p-6 pb-0">
      <div className="relative w-full h-[60vh] min-h-[350px] md:min-h-[400px] rounded-3xl md:rounded-[32px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
        
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-8 pt-28 md:pb-20 md:pt-40">
          <div className="flex flex-col gap-3 md:gap-4 max-w-[800px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.1] "
              style={{ fontSize: "clamp(32px, 8vw, 80px)" }}
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-[600px]"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
