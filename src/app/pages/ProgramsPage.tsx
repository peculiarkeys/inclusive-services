import { WorksHero } from "../components/WorksHero";
import { WorksTabbedSection } from "../components/WorksTabbedSection";
import { WorksFeatures } from "../components/WorksFeatures";
import { WorksAbout } from "../components/WorksAbout";
import { PhotoGallery } from "../components/PhotoGallery";
import { FurnitureGallery } from "../components/FurnitureGallery";

export function programsPage() {
  return (
    <div className="w-full bg-white">
      <WorksHero />
      <WorksTabbedSection />
      <PhotoGallery />
      <FurnitureGallery />
      <WorksFeatures />
      <WorksAbout />
    </div>
  );
}
