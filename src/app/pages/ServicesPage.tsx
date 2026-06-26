import { PageHero } from "../components/PageHero";
import { ServiceSection } from "../components/ServiceSection";
import { HowItWorks } from "../components/HowItWorks";
import { ProjectsSection } from "../components/ProjectsSection";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[25] || "";

export function ServicesPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Our Services" 
        description="Comprehensive construction and engineering solutions tailored to meet the exact demands of your project."
        image={heroImg}
      />
      <ServiceSection />
      <HowItWorks />
      <ProjectsSection />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
