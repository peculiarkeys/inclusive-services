import { AnimatedSection } from "./AnimatedSection";
import { 
  Home, 
  Building2, 
  Factory, 
  Landmark, 
  GraduationCap, 
  HeartPulse, 
  Utensils, 
  Route, 
  Flame 
} from "lucide-react";

// Assign relevant icons and bento grid classes to industries
const industries = [
  { 
    name: "Residential", 
    desc: "Custom homes, luxury villas, and multi-family units designed with precision.", 
    icon: Home,
    className: "md:col-span-2 md:row-span-2" // Large Square
  },
  { 
    name: "Commercial", 
    desc: "Offices, retail, and mixed-use spaces.", 
    icon: Building2,
    className: "md:col-span-2 md:row-span-1" // Wide
  },
  { 
    name: "Industrial", 
    desc: "Warehouses and manufacturing facilities.", 
    icon: Factory,
    className: "md:col-span-1 md:row-span-1" // Small
  },
  { 
    name: "Government", 
    desc: "Public sector and municipal buildings.", 
    icon: Landmark,
    className: "md:col-span-1 md:row-span-1" // Small
  },
  { 
    name: "Education", 
    desc: "Schools, universities, and training centers.", 
    icon: GraduationCap,
    className: "md:col-span-2 md:row-span-1" // Wide
  },
  { 
    name: "Healthcare", 
    desc: "Hospitals, clinics, and research labs.", 
    icon: HeartPulse,
    className: "md:col-span-1 md:row-span-1" // Small
  },
  { 
    name: "Hospitality", 
    desc: "Hotels, resorts, and restaurants.", 
    icon: Utensils,
    className: "md:col-span-1 md:row-span-1" // Small
  },
  { 
    name: "Infrastructure", 
    desc: "Roads, bridges, and public works built to last.", 
    icon: Route,
    className: "md:col-span-2 md:row-span-1" // Wide
  },
  { 
    name: "Oil & Gas", 
    desc: "Specialized energy sector facilities.", 
    icon: Flame,
    className: "md:col-span-2 md:row-span-1" // Wide
  }
];

export function IndustriesWeServe() {
  return (
    <section className="py-20 md:py-[120px] px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-bold text-[#FF6501] uppercase tracking-widest mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-[#111111] mb-6 leading-[1.1] font-medium" style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px" }}>
            Expertise Across Every Sector
          </h2>
          <p className="text-gray-500 text-lg">
            Delivering excellence and specialized solutions tailored to the unique requirements of various industries.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i} 
                  className={`group relative flex flex-col justify-end p-6 md:p-8 rounded-[32px] overflow-hidden bg-[#f4f5f6] hover:bg-[#ebecee] transition-colors duration-300 cursor-pointer ${ind.className}`}
                >
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[#111111] group-hover:text-[#FF6501] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <h3 className="text-[#111111] font-semibold text-2xl mb-1.5 tracking-tight">
                      {ind.name}
                    </h3>
                    <p className="text-[#546478] text-[14px] leading-relaxed max-w-[90%]">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
