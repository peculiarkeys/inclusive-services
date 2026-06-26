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
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.link}
                >
                  <Link
                    to={project.link}
                    className="group relative rounded-[32px] overflow-hidden block h-[400px] md:h-[500px] lg:h-[600px] cursor-pointer shadow-lg bg-white/5 border border-white/10"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-[#FF6501] text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 block">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-2">
                        {project.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-white/60 text-sm md:text-base font-sans">
                          <MapPin className="w-4 h-4 text-[#FF6501]" />
                          <span>{project.location}</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FF6501] group-hover:border-[#FF6501] transition-colors duration-300">
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
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
