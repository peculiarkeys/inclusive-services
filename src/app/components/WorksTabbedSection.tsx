import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/programs/*.jpeg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const rawFurnitureImages = import.meta.glob("../../assets/furniture_programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;


const sortedPaths = Object.keys(rawImages).sort();

const categories = [
  { id: "residential", label: "Residential programs", desc: "growing your dream home with precision and care.", stat: "120+", statDesc: "Homes Completed" },
  { id: "commercial", label: "Commercial Plazas", desc: "Modern workspaces planed for peak productivity.", stat: "45+", statDesc: "Plazas Built" },
  { id: "structural", label: "Structural & Civil", desc: "The backbone of major infrastructure developments.", stat: "80+", statDesc: "Heavy programs" },
  { id: "renovations", label: "Crisis Interventions & Fit-Out", desc: "Transforming existing spaces into modern marvels.", stat: "150+", statDesc: "Spaces Revamped" },
  { id: "furnitures", label: "Bespoke Furnitures", desc: "Crafting beautiful, functional pieces for your spaces.", stat: "200+", statDesc: "Pieces Installed" },

];

export function WorksTabbedSection() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  
  // Find the first image that belongs to this category (using a simple mock logic for the image)
  // We'll just use the first few sorted paths based on index for variety
  const categoryIndex = categories.findIndex(c => c.id === activeTab);
  
  let featuredImage;
  if (activeTab === "furnitures") {
    const furniturePaths = Object.keys(rawFurnitureImages).sort();
    featuredImage = furniturePaths.length > 0 ? rawFurnitureImages[furniturePaths[0]] : "";
  } else {
    featuredImage = rawImages[sortedPaths[categoryIndex % sortedPaths.length]];
  }

  return (
    <section className="py-20 md:py-28 px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: "1.1", letterSpacing: "-1px" }}>
            Explore a range of<br />
            <span className="italic font-light">support programs</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-[#eef2ef] rounded-[32px] p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-[400px]">
            
            {/* Left: Tabs */}
            <div className="lg:w-1/4 flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all  text-sm md:text-base ${
                    activeTab === cat.id 
                      ? "bg-white text-[#111111] shadow-sm" 
                      : "text-[#546478] hover:bg-white/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="lg:w-3/4 flex flex-col lg:flex-row gap-6 lg:gap-10"
              >
                {/* Middle: Featured Image & Desc */}
                <div className="flex-1 flex flex-col gap-6">
                  <p className="text-[#546478]  hidden lg:block ml-2">{activeCategory.label}</p>
                  <div className="w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden bg-gray-200">
                    <ImageWithFallback src={featuredImage} alt={activeCategory.label} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-[#111111] text-xl md:text-2xl  px-2">
                    {activeCategory.desc}
                  </h3>
                </div>

                {/* Right: Stat block */}
                <div className="lg:w-[280px] shrink-0 bg-[#e3e9e4] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <ArrowUpRight className="w-6 h-6 text-[#111111]" />
                  </div>
                  <div className="mt-16 lg:mt-0">
                    <div className="text-4xl md:text-5xl  text-[#111111] mb-2">{activeCategory.stat}</div>
                    <p className="text-[#546478] text-sm ">{activeCategory.statDesc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
