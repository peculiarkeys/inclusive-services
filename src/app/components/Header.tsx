import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.png";

// Import images for Mega Menu
const obembeImgs = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const architectureImgs = import.meta.glob("../../assets/architecture_designs/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const transcorpImgs = import.meta.glob("../../assets/furniture_projects/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const maitamaImgs = import.meta.glob("../../assets/maitama_project/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const furnitureImgs = import.meta.glob("../../assets/furnitures_and_furnishing/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const golfCenterImgs = import.meta.glob("../../assets/golf_center/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const modernCityJahiImgs = import.meta.glob("../../assets/modern_city_jahi/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const asokoroImgs = import.meta.glob("../../assets/asokoro_project/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;

const getFirstImage = (record: Record<string, string>, offset = 0) => {
  const keys = Object.keys(record).sort();
  return keys.length > offset ? record[keys[offset]] : "";
};

const worksMenu = [
  { title: "Transcorp Hilton Renovation", desc: "A comprehensive renovation and furniture installation project.", image: getFirstImage(transcorpImgs), link: "/works/transcorp-hilton-renovation" },
  { title: "Architectural Design Estate", desc: "A comprehensive architectural design and estate planning project in Abuja.", image: getFirstImage(architectureImgs), link: "/works/architecture-estate" },
  { title: "Golf Center Development", desc: "A showcase of our work and development for the Golf Center.", image: getFirstImage(golfCenterImgs), link: "/works/golf-center" },
  { title: "Furnitures and Furnishing", desc: "Explore our meticulously crafted furniture and complete furnishing solutions.", image: getFirstImage(furnitureImgs), link: "/works/furnitures-and-furnishing" },
  { title: "Modern City Jahi", desc: "A contemporary development reflecting modern architectural standards in Jahi.", image: getFirstImage(modernCityJahiImgs), link: "/works/modern-city-jahi" },
  { title: "Residential Development Asokoro", desc: "A luxury residential development project in Asokoro, Abuja.", image: getFirstImage(asokoroImgs), link: "/works/asokoro-project" },
  { title: "Maitama Private Residence", desc: "An 8-bedroom turnkey residential development in Maitama, Abuja.", image: getFirstImage(maitamaImgs), link: "/works/maitama-project" },
];

const servicesMenu = [
  { title: "Engineering & Design", desc: "Developing detailed engineering designs using the latest tools.", image: getFirstImage(architectureImgs, 1), link: "/services/engineering-and-design" },
  { title: "Procurement", desc: "Sourcing high-quality materials globally.", image: getFirstImage(obembeImgs, 4), link: "/services/procurement" },
  { title: "Construction", desc: "Bringing projects to life with unmatched craftsmanship.", image: getFirstImage(obembeImgs, 7), link: "/services/construction" },
  { title: "Turnkey Solutions", desc: "Taking full responsibility for the entire project lifecycle.", image: getFirstImage(maitamaImgs, 2), link: "/services/turnkey-solutions" },
  { title: "Renovation", desc: "Breathing new life into existing structures.", image: getFirstImage(transcorpImgs, 0), link: "/services/renovation-and-rehabilitation" },
  { title: "Maintenance & Facility", desc: "Maximizing lifespan and operational efficiency of your assets.", image: getFirstImage(furnitureImgs, 1), link: "/services/maintenance-and-facility-management" },
];

function Logo({ size = 36, invert = false }: { color?: string; size?: number; invert?: boolean }) {
  return (
    <div className="flex gap-[8px] items-center">
      <img src={logoImg} alt="Obembe Construction Logo" className={invert ? "brightness-0 invert" : ""} style={{ height: size, objectFit: "contain" }} />
    </div>
  );
}

export { Logo };

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(worksMenu[0]);
  const [hoveredService, setHoveredService] = useState(servicesMenu[0]);

  return (
    <>
      {/* Main pill nav */}
      <header className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-[1320px] bg-transparent px-2 md:px-8 py-3 flex items-center justify-between transition-all">
        {/* Logo */}
        <Link href="/" to="/" className="flex items-center shrink-0">
          <Logo color="#ffffff" size={32} invert={true} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 relative">
          <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About Us</Link>
          
          {/* Works Mega Menu */}
          <div className="relative group">
            <Link to="/works" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium py-6">
              Works <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[1000px]">
              <div className="bg-white rounded-[24px] shadow-2xl border border-black/5 p-6 flex gap-8 overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                {/* Links */}
                <div className="w-[45%] flex flex-col gap-2 pr-4 border-r border-gray-100">
                  <div className="flex items-center justify-between px-3 mb-3">
                    <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">Our Projects</span>
                    <Link to="/works" className="text-[12px] font-semibold text-[#FF6501] hover:underline flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                  {worksMenu.map(work => (
                    <Link 
                      to={work.link}
                      key={work.title}
                      onMouseEnter={() => setHoveredWork(work)}
                      className="px-3 py-3 rounded-xl text-[15px] font-medium text-[#111111]/70 hover:bg-[#FF6501]/10 hover:text-[#FF6501] transition-colors line-clamp-1"
                    >
                      {work.title}
                    </Link>
                  ))}
                </div>
                {/* Featured Image Right Panel */}
                <div className="w-[55%] relative rounded-[20px] overflow-hidden bg-gray-100 group/img flex-shrink-0 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={hoveredWork.image}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={hoveredWork.image} 
                      alt={hoveredWork.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-white font-medium text-2xl leading-tight mb-2">{hoveredWork.title}</h4>
                    <p className="text-white/70 text-base line-clamp-2 mb-4 font-sans">{hoveredWork.desc}</p>
                    <Link to={hoveredWork.link} className="inline-flex items-center gap-2 text-[#FF6501] text-sm font-semibold hover:text-white transition-colors">
                      Explore Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Mega Menu */}
          <div className="relative group">
            <Link to="/services" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium py-6">
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 w-[1000px]">
              <div className="bg-white rounded-[24px] shadow-2xl border border-black/5 p-6 flex gap-8 overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                {/* Links */}
                <div className="w-[45%] flex flex-col gap-2 pr-4 border-r border-gray-100">
                  <div className="flex items-center justify-between px-3 mb-3">
                    <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">Our Services</span>
                    <Link to="/services" className="text-[12px] font-semibold text-[#FF6501] hover:underline flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                  {servicesMenu.map(service => (
                    <Link 
                      to={service.link}
                      key={service.title}
                      onMouseEnter={() => setHoveredService(service)}
                      className="px-3 py-3 rounded-xl text-[15px] font-medium text-[#111111]/70 hover:bg-[#FF6501]/10 hover:text-[#FF6501] transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                {/* Featured Image Right Panel */}
                <div className="w-[55%] relative rounded-[20px] overflow-hidden bg-gray-100 group/img flex-shrink-0 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={hoveredService.image}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={hoveredService.image} 
                      alt={hoveredService.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-white font-medium text-2xl leading-tight mb-2">{hoveredService.title}</h4>
                    <p className="text-white/70 text-base line-clamp-2 mb-4 font-sans">{hoveredService.desc}</p>
                    <Link to={hoveredService.link} className="inline-flex items-center gap-2 text-[#FF6501] text-sm font-semibold hover:text-white transition-colors">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Blog</Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Contact</Link>
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#d16c49] text-white px-6 py-2.5 rounded-full hover:bg-[#b05b3e] transition-colors shadow-sm"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            className="fixed top-[80px] left-4 right-4 z-40 lg:hidden overflow-hidden bg-white rounded-2xl shadow-xl border border-black/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link to="/about" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
              
              <div className="flex flex-col gap-2">
                <span className="text-[#111111]/80 font-medium py-1">Works</span>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100 ml-2">
                  <Link to="/works" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>All Projects</Link>
                  {worksMenu.map(work => (
                    <Link key={work.title} to={work.link} className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>{work.title}</Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[#111111]/80 font-medium py-1">Services</span>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100 ml-2">
                  <Link to="/services" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>All Services</Link>
                  {servicesMenu.map(service => (
                    <Link key={service.title} to={service.link} className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>{service.title}</Link>
                  ))}
                </div>
              </div>

              <Link to="/blog" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#d16c49] text-white px-5 py-3 rounded-xl mt-2 text-base font-medium hover:bg-[#b05b3e]"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}