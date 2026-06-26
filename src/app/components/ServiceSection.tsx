import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, HardHat, Truck, Hammer, Key, RefreshCw, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useNavigate } from "react-router";

const obembeImgs = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const architectureImgs = import.meta.glob("../../assets/architecture_designs/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const transcorpImgs = import.meta.glob("../../assets/furniture_projects/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const maitamaImgs = import.meta.glob("../../assets/maitama_project/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;
const furnitureImgs = import.meta.glob("../../assets/furnitures_and_furnishing/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" }) as Record<string, string>;

const getFirstImage = (record: Record<string, string>, offset = 0) => {
  const keys = Object.keys(record).sort();
  return keys.length > offset ? record[keys[offset]] : "";
};

const service1 = getFirstImage(architectureImgs, 1); // Engineering & Design
const service2 = getFirstImage(obembeImgs, 4); // Procurement
const service3 = getFirstImage(obembeImgs, 7); // Construction
const service4 = getFirstImage(maitamaImgs, 2); // Turnkey Solutions
const service5 = getFirstImage(transcorpImgs, 0); // Renovation & Rehabilitation
const service6 = getFirstImage(furnitureImgs, 1); // Maintenance & Facility

const services = [
  {
    title: "Engineering & Design",
    desc: "Our experienced team of engineers and designers utilize the latest tools and technologies to develop detailed engineering designs for your project.",
    img: service1,
    icon: HardHat,
    link: "/services/engineering-and-design"
  },
  {
    title: "Procurement",
    desc: "With our extensive network of suppliers and vendors, we manage the procurement process seamlessly. We source and procure high-quality materials.",
    img: service2,
    icon: Truck,
    link: "/services/procurement"
  },
  {
    title: "Construction",
    desc: "Our skilled construction team brings your project to life with unmatched craftsmanship. From site preparation to testing and commissioning.",
    img: service3,
    icon: Hammer,
    link: "/services/construction"
  },
  {
    title: "Turnkey Solutions",
    desc: "As an EPC contractor, we offer turnkey solutions, taking full responsibility for the entire project lifecycle, delivering ready-to-use conditions.",
    img: service4,
    icon: Key,
    link: "/services/turnkey-solutions"
  },
  {
    title: "Renovation & Rehabilitation",
    desc: "We specialize in renovation and rehabilitation projects, breathing new life into existing structures, modernizing outdated facilities.",
    img: service5,
    icon: RefreshCw,
    link: "/services/renovation-and-rehabilitation"
  },
  {
    title: "Maintenance & Facility",
    desc: "Beyond construction, we provide comprehensive maintenance and facility management services, maximizing lifespan and operational efficiency.",
    img: service6,
    icon: Settings,
    link: "/services/maintenance-and-facility-management"
  },
];

export function ServiceSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 md:py-[120px] px-6 md:px-[60px] bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto">
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <AnimatedSection className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6501]" />
              <span className="text-[#FF6501] text-sm font-semibold tracking-wider uppercase font-sans">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-[#111111] leading-[1.1] font-medium" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-2px" }}>
              Comprehensive services for your next bold vision.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex items-center gap-4 shrink-0">
            <Link
              to="/services"
              className="group flex items-center gap-3 bg-[#111111] hover:bg-[#FF6501] text-white px-7 py-4 rounded-full font-medium transition-colors text-sm"
            >
              Browse all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="group bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl rounded-[32px] p-4 cursor-pointer transition-all duration-300 flex flex-col h-full"
                  onClick={() => navigate(service.link)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] md:h-[260px] rounded-[24px] overflow-hidden mb-6 bg-gray-100">
                    <ImageWithFallback
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center group-hover:bg-[#FF6501] group-hover:border-[#FF6501] transition-colors duration-300 shadow-md">
                      <Icon className="w-5 h-5 text-[#FF6501] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2 pb-2 flex-1 flex flex-col">
                    <h3 className="text-[#111111] text-2xl font-medium mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#546478] text-[15px] leading-relaxed font-sans mb-6 flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-[#FF6501] transition-colors text-sm font-medium mt-auto">
                      Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}