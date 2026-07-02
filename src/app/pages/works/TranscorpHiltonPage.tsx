import { PageHero } from "../../components/PageHero";
import { FurnitureGallery } from "../../components/FurnitureGallery";
import { CTABanner } from "../../components/CTABanner";

// We can just use the first image from furniture programs for the hero
const rawFurnitureImages = import.meta.glob("../../../assets/furniture_programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const furniturePaths = Object.keys(rawFurnitureImages).sort();
const heroImg = furniturePaths.length > 0 ? rawFurnitureImages[furniturePaths[0]] : "";

export function TranscorpHiltonPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Transcorp Hilton Crisis Intervention" 
        description="A comprehensive renovation and furniture installation program for the prestigious Transcorp Hilton."
        image={heroImg}
      />
      <FurnitureGallery columns={2} />
      <CTABanner />
    </div>
  );
}
