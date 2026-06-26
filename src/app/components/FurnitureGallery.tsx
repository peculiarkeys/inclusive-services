import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";


const rawImages = import.meta.glob("../../assets/furniture_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

interface FurnitureGalleryProps {
  columns?: 2 | 3;
}

export function FurnitureGallery({ columns = 3 }: FurnitureGalleryProps = {}) {
  const [visibleCount, setVisibleCount] = useState(10);


  if (galleryImages.length === 0) return null;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const visibleImages = galleryImages.slice(0, visibleCount);

  return (
    <section className="py-20 md:py-28 px-6 md:px-[60px] bg-white">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: "1.1", letterSpacing: "-1px" }}>
            Furniture Projects
          </h2>
          <p className="text-[#546478] mt-4 max-w-2xl mx-auto text-lg">
            A visual showcase of our bespoke furniture designs and installations.
          </p>
        </AnimatedSection>

        <div className={`columns-1 sm:columns-2 ${columns === 3 ? 'lg:columns-3' : ''} gap-6 space-y-6`}>
          {visibleImages.map((src, index) => (
            <AnimatedSection key={index} delay={(index % 6) * 0.1}>
              <div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-gray-200">
                <ImageWithFallback 
                  src={src} 
                  alt={`Furniture project ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">View</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {visibleCount < galleryImages.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-[#111111] text-white rounded-xl font-medium hover:bg-[#d16c49] transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
