import { PageHero } from "../../components/PageHero";
import { ModernCityJahiGallery } from "../../components/ModernCityJahiGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/modern_city_jahi/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function ModernCityJahiPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Modern City Jahi" 
        description="A contemporary development reflecting modern architectural standards in Jahi."
        image={heroImg}
      />
      <ModernCityJahiGallery columns={2} />
      <CTABanner />
    </div>
  );
}
