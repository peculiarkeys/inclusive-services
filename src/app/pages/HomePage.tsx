import { Hero } from "../components/Hero";
import { ServiceSection } from "../components/ServiceSection";
import { AboutSection } from "../components/AboutSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { HowItWorks } from "../components/HowItWorks";
import { IndustriesWeServe } from "../components/IndustriesWeServe";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Testimonials } from "../components/Testimonials";
import { CTABanner } from "../components/CTABanner";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <HowItWorks />
      <IndustriesWeServe />
      <Testimonials />
      <CTABanner />
    </>
  );
}
