import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

export function PhotoGallery() {
  if (galleryImages.length === 0) return null;

  return (
    <section className="py-20 md:py-28 px-6 md:px-[60px] bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: "1.1", letterSpacing: "-1px" }}>
            Photo Gallery
          </h2>
          <p className="text-[#546478] mt-4 max-w-2xl mx-auto text-lg">
            A visual showcase of our completed projects and ongoing construction sites.
          </p>
        </AnimatedSection>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <AnimatedSection key={index} delay={(index % 6) * 0.1}>
              <div className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-gray-200">
                <ImageWithFallback 
                  src={src} 
                  alt={`Project image ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">View</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
