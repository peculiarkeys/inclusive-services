import { PageHero } from "../../components/PageHero";
import { ArchitectureGallery } from "../../components/ArchitectureGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/architecture_designs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function ArchitectureEstatePage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Architectural Design Estate Project Abuja" 
        description="A comprehensive architectural design and estate planning project in Abuja."
        image={heroImg}
      />
      <ArchitectureGallery columns={2} />
      <CTABanner />
    </div>
  );
}
