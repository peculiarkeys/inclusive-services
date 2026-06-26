import { PageHero } from "../components/PageHero";
import { BlogSection } from "../components/BlogSection";
import { FAQSection } from "../components/FAQSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { CTABanner } from "../components/CTABanner";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[27] || "";

export function BlogPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Our Blog & Insights" 
        description="Stay updated with the latest news, industry trends, and insights from Obembe Construction experts."
        image={heroImg}
      />
      <BlogSection />
      <FAQSection />
      <ProjectsSection />
      <AboutSection />
      <CTABanner />
    </div>
  );
}
