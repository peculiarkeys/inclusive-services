import { PageHero } from "../../components/PageHero";
import { MaitamaProjectGallery } from "../../components/MaitamaProjectGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/maitama_project/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function MaitamaProjectPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Maitama Private Residential Development" 
        description="An 8-bedroom turnkey residential development in Maitama, Abuja."
        image={heroImg}
      />
      <MaitamaProjectGallery columns={2} />
      <CTABanner />
    </div>
  );
}
