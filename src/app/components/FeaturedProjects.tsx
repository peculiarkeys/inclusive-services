import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, MapPin } from "lucide-react";

const transcorpImgs = import.meta.glob("../../assets/furniture_projects/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const architectureImgs = import.meta.glob("../../assets/architecture_designs/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const golfCenterImgs = import.meta.glob("../../assets/golf_center/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const furnituresImgs = import.meta.glob("../../assets/furnitures_and_furnishing/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const modernCityJahiImgs = import.meta.glob("../../assets/modern_city_jahi/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const asokoroImgs = import.meta.glob("../../assets/asokoro_project/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const maitamaImgs = import.meta.glob("../../assets/maitama_project/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;

const getFirstImage = (record: Record<string, string>) => {
  const keys = Object.keys(record).sort();
  return keys.length > 0 ? record[keys[0]] : "";
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "architectural", label: "Architectural Design" },
  { id: "renovation", label: "Renovation" },
  { id: "furnishing", label: "Furnishing" },
];

const featuredProjectsList = [
  {
    title: "Transcorp Hilton Renovation",
    description: "A comprehensive renovation and furniture installation project.",
    image: getFirstImage(transcorpImgs),
    link: "/works/transcorp-hilton-renovation",
    category: "renovation",
    location: "Abuja",
  },
  {
    title: "Architectural Design Estate",
    description: "A comprehensive architectural design and estate planning project in Abuja.",
    image: getFirstImage(architectureImgs),
    link: "/works/architecture-estate",
    category: "architectural",
    location: "Abuja",
  },
  {
    title: "Golf Center Development",
    description: "A showcase of our work and development for the Golf Center.",
    image: getFirstImage(golfCenterImgs),
    link: "/works/golf-center",
    category: "architectural",
    location: "Nigeria",
  },
  {
    title: "Furnitures and Furnishing",
    description: "Explore our meticulously crafted furniture and complete furnishing solutions.",
    image: getFirstImage(furnituresImgs),
    link: "/works/furnitures-and-furnishing",
    category: "furnishing",
    location: "Nigeria",
  },
  {
    title: "Modern City Jahi",
    description: "A contemporary development reflecting modern architectural standards in Jahi.",
    image: getFirstImage(modernCityJahiImgs),
    link: "/works/modern-city-jahi",
    category: "residential",
    location: "Jahi, Abuja",
  },
  {
    title: "Residential Development Asokoro",
    description: "A luxury residential development project in Asokoro, Abuja.",
    image: getFirstImage(asokoroImgs),
    link: "/works/asokoro-project",
    category: "residential",
    location: "Asokoro, Abuja",
  },
  {
    title: "Maitama Private Residence",
    description: "An 8-bedroom turnkey residential development in Maitama, Abuja.",
    image: getFirstImage(maitamaImgs),
    link: "/works/maitama-project",
    category: "residential",
    location: "Maitama, Abuja",
  }
];

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects = activeCategory === "all"
    ? featuredProjectsList
    : featuredProjectsList.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#1a1a1a] py-16 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-sans" style={{ fontSize: "16px", lineHeight: "24px" }}>
            A curated showcase of our engineering excellence, procurement capability, and construction quality across our most ambitious recent works.
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
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

        {/* Project Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.link}
                >
                  <Link
                    to={project.link}
                    className="group relative rounded-xl overflow-hidden block h-[280px] md:h-[332px] cursor-pointer shadow-lg bg-white/5 border border-white/10"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FF6501] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                      <span className="text-[#FF6501] text-xs font-semibold uppercase tracking-wider">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <h4 className="text-white text-lg md:text-xl font-medium tracking-tight">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-white/70 text-sm mt-0.5">
                        <MapPin className="w-4 h-4 text-[#FF6501] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
