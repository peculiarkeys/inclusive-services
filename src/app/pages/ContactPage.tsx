import { PageHero } from "../components/PageHero";
import { ContactSection } from "../components/ContactSection";
import { FAQSection } from "../components/FAQSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[26] || "";

export function ContactPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Contact Us" 
        description="We're here to answer any questions you have. Reach out to our team to discuss your next construction project."
        image={heroImg}
      />
      <ContactSection />
      <FAQSection />
      <ProjectsSection />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
