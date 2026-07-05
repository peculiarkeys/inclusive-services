import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, HardHat, Truck, Hammer, Key, RefreshCw, Settings } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useNavigate } from "react-router";

const obembeImgs = import.meta.glob("../../assets/*") as Record<string, string>;
const architectureImgs = import.meta.glob("../../assets/*") as Record<string, string>;
const transcorpImgs = import.meta.glob("../../assets/*") as Record<string, string>;
const maitamaImgs = import.meta.glob("../../assets/*") as Record<string, string>;
const furnitureImgs = import.meta.glob("../../assets/*") as Record<string, string>;

const getFirstImage = (record: Record<string, string>, offset = 0) => {
  const keys = Object.keys(record).sort();
  return keys.length > offset ? record[keys[offset]] : "";
};

const services = [
  {
    title: "Individual Counseling",
    desc: "Developing detailed counseling plans using the latest tools.",
    img: getFirstImage(architectureImgs, 1),
    icon: HardHat,
    link: "/services",
    className: "md:col-span-2 md:row-span-1" // Wide
  },
  {
    title: "Child Welfare",
    desc: "Sourcing high-quality materials globally.",
    img: getFirstImage(obembeImgs, 4),
    icon: Truck,
    link: "/services",
    className: "md:col-span-1 md:row-span-1" // Square
  },
  {
    title: "support",
    desc: "Bringing programs to life with unmatched craftsmanship and rigorous standards.",
    img: getFirstImage(obembeImgs, 7),
    icon: Hammer,
    link: "/services",
    className: "md:col-span-1 md:row-span-2" // Tall
  },
  {
    title: "Community Programs",
    desc: "Taking full responsibility for the entire program lifecycle.",
    img: getFirstImage(maitamaImgs, 2),
    icon: Key,
    link: "/services",
    className: "md:col-span-1 md:row-span-1" // Square
  },
  {
    title: "Crisis Intervention",
    desc: "Breathing new life into existing structures.",
    img: getFirstImage(transcorpImgs, 0),
    icon: RefreshCw,
    link: "/services",
    className: "md:col-span-1 md:row-span-1" // Square
  },
  {
    title: "Group Support & Facility",
    desc: "Maximizing lifespan and operational efficiency of your assets.",
    img: getFirstImage(furnitureImgs, 1),
    icon: Settings,
    link: "/services",
    className: "md:col-span-2 md:row-span-1" // Wide
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
            <h2 className="text-[#111111] leading-[1.1] " style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-2px" }}>
              Comprehensive services for your next bold vision.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex items-center gap-4 shrink-0">
            <Link
              to="/services"
              className="group flex items-center gap-3 bg-[#111111] hover:bg-[#FF6501] text-white px-7 py-4 rounded-full  transition-colors text-sm"
            >
              Browse all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Bento Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[300px] gap-4 md:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 ${service.className}`}
                  onClick={() => navigate(service.link)}
                >
                  <ImageWithFallback
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-[#FF6501] group-hover:border-[#FF6501] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl md:text-3xl  mb-2 tracking-tight group-hover:text-[#FF6501] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* The description smoothly expands on hover on non-touch devices */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-white/80 text-[15px] leading-relaxed font-sans mt-2">
                          {service.desc}
                        </p>
                        <div className="flex items-center gap-2 text-[#FF6501] text-sm  mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                          Explore Service <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}