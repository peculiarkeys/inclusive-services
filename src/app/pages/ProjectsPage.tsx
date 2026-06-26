import { WorksHero } from "../components/WorksHero";
import { WorksTabbedSection } from "../components/WorksTabbedSection";
import { WorksFeatures } from "../components/WorksFeatures";
import { WorksAbout } from "../components/WorksAbout";
import { WorksPartners } from "../components/WorksPartners";
import { PhotoGallery } from "../components/PhotoGallery";

export function ProjectsPage() {
  return (
    <div className="w-full bg-white">
      <WorksHero />
      <WorksTabbedSection />
      <PhotoGallery />
      <WorksFeatures />
      <WorksAbout />
      <WorksPartners />
    </div>
  );
}
