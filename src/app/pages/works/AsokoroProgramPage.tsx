import { PageHero } from "../../components/PageHero";
import { AsokoroprogramGallery } from "../../components/AsokoroProgramGallery";
import { CTABanner } from "../../components/CTABanner";

const rawImages = import.meta.glob("../../../assets/asokoro_program/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paths = Object.keys(rawImages).sort();
const heroImg = paths.length > 0 ? rawImages[paths[0]] : "";

export function AsokoroprogramPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Residential Development program Asokoro Abuja" 
        description="A prime residential development in the heart of Asokoro."
        image={heroImg}
      />
      <AsokoroprogramGallery columns={2} />
      <CTABanner />
    </div>
  );
}
