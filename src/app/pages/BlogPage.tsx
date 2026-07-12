import { PageHero } from "../components/PageHero";
import { BlogSection } from "../components/BlogSection";
import { FAQSection } from "../components/FAQSection";
import { programsSection } from "../components/ProgramsSection";
import { AboutSection } from "../components/AboutSection";
import { CTABanner } from "../components/CTABanner";

const rawImages = import.meta.glob("../../assets/programs/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const programImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = "/images/pexels-rdne-9064323.jpg";

export function BlogPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Our Blog & Insights" 
        description="Stay updated with the latest news, industry trends, and insights from Inclusive Social Services experts."
        image={heroImg}
      />
      <BlogSection />
      <FAQSection />
      <programsSection />
      <AboutSection />
      <CTABanner />
    </div>
  );
}
