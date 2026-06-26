import { WhyItMatters } from "../components/WhyItMatters";
import { FeaturesSection } from "../components/FeaturesSection";
import { CTABanner } from "../components/CTABanner";

export function WhyChooseUsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <WhyItMatters />
      <FeaturesSection />
      <CTABanner />
    </div>
  );
}
