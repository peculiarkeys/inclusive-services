import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, HardHat, Truck, Hammer, Key, RefreshCw, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useNavigate } from "react-router";
const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

const service1 = projectImages[0] || "";
const service2 = projectImages[1] || "";
const service3 = projectImages[2] || "";
const service4 = projectImages[3] || "";
const service5 = projectImages[4] || "";
const service6 = projectImages[5] || "";

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
    <section id="services" className="py-20 md:py-28 px-4 md:px-10 bg-[#161a16] rounded-t-[40px] mt-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <AnimatedSection className="max-w-[500px]">
            <p className="text-[#a0a59b] text-sm font-semibold tracking-wider uppercase mb-3">
              • Services
            </p>
            <h2 className="text-white leading-[1.1] font-medium" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
              Explore our wide<br />range of services
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="bg-[#2d4a32] hover:bg-[#233a27] text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
            >
              Get in touch
            </Link>
            <Link
              to="/services"
              className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
            >
              Browse all services
            </Link>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="group flex flex-col cursor-pointer h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigate(service.link)}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-gray-800">
                    <ImageWithFallback
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform bg-transparent">
                      <Icon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-white text-2xl font-medium mb-3 group-hover:text-[#2d4a32] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#a0a59b] text-[15px] leading-relaxed mb-4 flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-[#2d4a32] font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
        
        {/* Carousel indicators dummy */}
        <div className="flex justify-center items-center gap-2 mt-12 md:hidden">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
}