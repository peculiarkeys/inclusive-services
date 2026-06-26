import { Hero } from "../components/Hero";
import { ServiceSection } from "../components/ServiceSection";
import { AboutSection } from "../components/AboutSection";
import { HowItWorks } from "../components/HowItWorks";
import { ProjectsSection } from "../components/ProjectsSection";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <HowItWorks />
      <ProjectsSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
