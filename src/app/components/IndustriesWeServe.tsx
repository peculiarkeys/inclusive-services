import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import residentialImg from "../../assets/industries/residential.png";
import commercialImg from "../../assets/industries/commercial.png";
import industrialImg from "../../assets/industries/industrial.png";
import governmentImg from "../../assets/industries/government.png";
import educationImg from "../../assets/industries/education.png";
import healthcareImg from "../../assets/industries/healthcare.png";
import hospitalityImg from "../../assets/industries/hospitality.png";
import infrastructureImg from "../../assets/industries/infrastructure.png";
import oilGasImg from "../../assets/industries/oil_gas.png";

// Assign relevant images to industries
const industries = [
  { name: "Residential", desc: "Custom homes and multi-family units", image: residentialImg },
  { name: "Commercial", desc: "Offices, retail, and mixed-use spaces", image: commercialImg },
  { name: "Industrial", desc: "Warehouses and manufacturing facilities", image: industrialImg },
  { name: "Government", desc: "Public sector and municipal buildings", image: governmentImg },
  { name: "Education", desc: "Schools, universities, and training centers", image: educationImg },
  { name: "Healthcare", desc: "Hospitals, clinics, and research labs", image: healthcareImg },
  { name: "Hospitality", desc: "Hotels, resorts, and restaurants", image: hospitalityImg },
  { name: "Infrastructure", desc: "Roads, bridges, and public works", image: infrastructureImg },
  { name: "Oil & Gas", desc: "Specialized energy sector facilities", image: oilGasImg }
];

export function IndustriesWeServe() {
  return (
    <section className="py-20 md:py-[120px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-bold text-[#d16c49] uppercase tracking-widest mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-[#111111] mb-6 leading-[1.1] font-medium" style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px" }}>
            Expertise Across Every Sector
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {industries.map((ind, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group cursor-pointer flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm">
                  <ImageWithFallback 
                    src={ind.image} 
                    alt={ind.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="text-[#111111] font-semibold text-xl group-hover:text-[#326B70] transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-gray-500 text-[15px]">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
