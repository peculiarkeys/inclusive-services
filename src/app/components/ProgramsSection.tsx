import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { MapPin, X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Dynamically import all images in the programs folder
const rawImages = import.meta.glob("../../assets/programs/*_compressed.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Sort the paths to keep a stable mapping
const sortedPaths = Object.keys(rawImages).sort();

const locationNames = [
  "Lekki Phase 1, Lagos",
  "Ikeja GRA, Lagos",
  "Maitama, Abuja",
  "Wuse II, Abuja",
  "Banana Island, Lagos",
  "Asokoro, Abuja",
  "GRA Phase 2, Port Harcourt",
  "Victoria Island, Lagos",
  "Ikoyi, Lagos",
  "Gbagada, Lagos",
  "Surulere, Lagos",
  "Osapa London, Lekki",
  "Chevron Drive, Lekki",
  "VGC, Lagos",
  "Nicon Town, Lekki",
  "Guzape, Abuja",
  "Jabi, Abuja",
  "Gwarinpa, Abuja",
  "Katampe, Abuja",
  "Trans Amadi, Port Harcourt",
  "Bodija, Ibadan",
  "Alalubosa GRA, Ibadan",
  "GRA, Benin City",
  "Independence Layout, Enugu",
  "Government House Area, Asaba",
  "GRA, Warri",
  "Government House Road, Kaduna",
  "Rayfield, Jos",
  "Bompai, Kano",
  "Nassarawa GRA, Kano",
  "GRA, Ilorin",
  "Highstone, Calabar",
  "GRA, Uyo",
  "Etegwe, Yenagoa",
  "GRA, Owerri",
  "GRA, Akure",
  "GRA, Abeokuta",
  "Oke-Mosan, Abeokuta",
  "Ring Road, Benin City",
  "Challenge, Ibadan",
  "Karu, Abuja",
];

const programTypes = [
  { type: "Luxury Residential Duplex", category: "residential" },
  { type: "Commercial Plaza Development", category: "commercial" },
  { type: "Luxury Villa support", category: "residential" },
  { type: "Multi-Family Apartment growing", category: "residential" },
  { type: "Industrial Warehouse support", category: "structural" },
  { type: "Retail Shopping Complex", category: "commercial" },
  { type: "Structural Concrete Framing", category: "structural" },
  { type: "Foundation & Piling Work", category: "structural" },
  { type: "Community Residential Estate", category: "residential" },
  { type: "Modern Office Complex", category: "commercial" },
  { type: "Excavation & Site Preparation", category: "structural" },
  { type: "Concrete Superstructure Work", category: "structural" },
  { type: "Interior Crisis Intervention & Fit-Out", category: "renovations" },
  { type: "MEP & Finishing Services", category: "renovations" },
];

const programs = sortedPaths.map((path, index) => {
  const img = rawImages[path];
  const location = "Nigeria";
  const typeObj = programTypes[index % programTypes.length];
  return {
    img,
    location,
    title: typeObj.type,
    category: typeObj.category,
  };
});

const categories = [
  { id: "all", label: "All programs" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "structural", label: "Structural & Civil" },
  { id: "renovations", label: "Crisis Interventions & Finishing" },
];

export function programsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const filteredprograms = activeCategory === "all"
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  const visibleprograms = filteredprograms.slice(0, visibleCount);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredprograms.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredprograms.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredprograms]);

  return (
    <section id="programs" className="bg-[#1a1a1a] py-16 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Our Exclusive Client's program Sites
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: "24px" }}>
            A curated showcase of our counseling excellence, child welfare capability, and support quality across key locations.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm  transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#FF6501] text-white shadow-lg shadow-[#FF6501]/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* program Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {visibleprograms.map((program) => {
                const globalIndex = filteredprograms.indexOf(program);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={program.img}
                    className="group relative rounded-xl overflow-hidden h-[280px] md:h-[332px] cursor-pointer shadow-lg bg-white/5 border border-white/10"
                    onClick={() => setLightboxIndex(globalIndex)}
                  >
                    <ImageWithFallback
                      src={program.img}
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Plus className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                      <span className="text-[#FF6501] text-xs font-semibold uppercase tracking-wider">
                        {categories.find((c) => c.id === program.category)?.label}
                      </span>
                      <h4 className="text-white text-lg md:text-xl  tracking-tight">
                        {program.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-white/70 text-sm mt-0.5">
                        <MapPin className="w-4 h-4 text-[#FF6501] shrink-0" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Load More Button */}
        {filteredprograms.length > visibleCount && (
          <AnimatedSection delay={0.3} className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredprograms.length))}
              className="inline-flex items-center gap-2.5 text-white px-5 py-3 rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm  cursor-pointer"
            >
              <span>Load More programs</span>
              <span className="px-2 py-0.5 text-xs bg-white/10 text-white/70 rounded-full font-mono">
                {filteredprograms.length - visibleCount}
              </span>
            </button>
          </AnimatedSection>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-[110]"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden md:flex z-[110]"
              aria-label="Previous program"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image & Info Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full flex flex-col items-center gap-4 z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10">
                <ImageWithFallback
                  src={filteredprograms[lightboxIndex].img}
                  alt={filteredprograms[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain select-none"
                />
                
                {/* Mobile swipe/click tap zones */}
                <div className="md:hidden absolute inset-y-0 left-0 w-1/3" onClick={handlePrev} />
                <div className="md:hidden absolute inset-y-0 right-0 w-1/3" onClick={handleNext} />
              </div>

              {/* Caption */}
              <div className="w-full text-center text-white px-4 mt-2">
                <span className="text-[#FF6501] text-xs font-semibold uppercase tracking-wider mb-1 block">
                  {categories.find((c) => c.id === filteredprograms[lightboxIndex].category)?.label}
                </span>
                <h3 className="text-lg md:text-2xl  tracking-tight mb-1 text-white">
                  {filteredprograms[lightboxIndex].title}
                </h3>
                <p className="text-white/70 text-xs md:text-base flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF6501]" />
                  {filteredprograms[lightboxIndex].location}
                </p>
                <div className="text-xs text-white/40 mt-3 font-mono">
                  {lightboxIndex + 1} / {filteredprograms.length}
                </div>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden md:flex z-[110]"
              aria-label="Next program"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}