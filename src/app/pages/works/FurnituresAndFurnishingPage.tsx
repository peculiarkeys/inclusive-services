import { PageHero } from "../../components/PageHero";
import { FurnituresAndFurnishingGallery } from "../../components/FurnituresAndFurnishingGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/furnitures_and_furnishing/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function FurnituresAndFurnishingPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Furnitures and Furnishing program" 
        description="Explore our meticulously crafted furniture and complete furnishing solutions."
        image={heroImg}
      />
      <FurnituresAndFurnishingGallery columns={2} />
      <CTABanner />
    </div>
  );
}
