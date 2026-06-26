import { PageHero } from "../../components/PageHero";
import { AsokoroProjectGallery } from "../../components/AsokoroProjectGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/asokoro_project/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function AsokoroProjectPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Residential Development Project Asokoro Abuja" 
        description="A prime residential development in the heart of Asokoro."
        image={heroImg}
      />
      <AsokoroProjectGallery columns={2} />
      <CTABanner />
    </div>
  );
}
