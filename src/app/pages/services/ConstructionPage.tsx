import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { HardHat, Hammer, Ruler, CheckCircle } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[20] || "";
const overviewImg = projectImages[21] || "";

export function ConstructionPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Construction",
        description: "Master craftsmanship and rigorous project management to bring your architectural vision into reality.",
        image: heroImg,
      }}
      overview={{
        title: "Building excellence from the ground up",
        description: "Our skilled construction team brings your project to life with unmatched craftsmanship and attention to detail. From site preparation and construction management to installation, testing, and commissioning, we ensure that every aspect of the construction process is executed to perfection. We pride ourselves on building safe, sustainable, and stunning structures.",
        image: overviewImg,
      }}
      features={{
        title: "Our Construction Capabilities",
        items: [
          {
            title: "General Contracting",
            description: "Complete oversight of the construction site, managing vendors and trades, and ensuring all project communication flows smoothly.",
            icon: HardHat,
          },
          {
            title: "Site Preparation",
            description: "Thorough excavation, grading, and foundation work to ensure a solid start to the building process.",
            icon: Ruler,
          },
          {
            title: "Structural Works",
            description: "Expert execution of concrete, steel, and masonry work, forming the robust skeleton of your building.",
            icon: Hammer,
          },
          {
            title: "Quality Control",
            description: "Continuous monitoring and rigorous testing throughout the construction phase to guarantee compliance with all codes and standards.",
            icon: CheckCircle,
          },
        ],
      }}
      process={{
        title: "The Build Process",
        items: [
          {
            step: "01",
            title: "Pre-Construction",
            description: "Site mobilization, securing permits, finalizing schedules, and establishing safety protocols.",
          },
          {
            step: "02",
            title: "Foundation & Structure",
            description: "Executing earthworks, laying foundations, and erecting the core structural framework of the building.",
          },
          {
            step: "03",
            title: "MEP & Interiors",
            description: "Installing mechanical, electrical, and plumbing systems, followed by interior framing, drywall, and finishing.",
          },
          {
            step: "04",
            title: "Commissioning",
            description: "Final testing of all systems, detailed walkthroughs, and handing over the keys to a finished, pristine building.",
          },
        ],
      }}
      stats={[
        { value: "2M+", label: "Sq Ft Built" },
        { value: "120+", label: "Completed Projects" },
        { value: "Zero", label: "Lost-Time Accidents" },
        { value: "100%", label: "Client Satisfaction" },
      ]}
      faqs={[
        {
          q: "Do you handle both commercial and residential construction?",
          a: "Yes, we have extensive experience in both commercial developments (offices, retail, industrial) and large-scale residential projects.",
        },
        {
          q: "How do you ensure site safety?",
          a: "Safety is our top priority. We implement rigorous safety protocols, conduct daily briefings, and ensure all personnel are highly trained and equipped with proper PPE.",
        },
        {
          q: "What happens if there are unforeseen delays?",
          a: "While we plan meticulously, weather or supply chain issues can occur. Our experienced project managers quickly adapt schedules and resources to mitigate delays and keep you constantly informed.",
        },
      ]}
    />
  );
}
