import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { PenTool, Layers, Compass, BarChart } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[22] || "";
const overviewImg = projectImages[23] || "";

export function EngineeringDesignPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Engineering & Design",
        description: "Innovative engineering and precise design solutions that form the foundation of every successful construction project.",
        image: heroImg,
      }}
      overview={{
        title: "Building the blueprint for success",
        description: "Our experienced team of engineers and designers utilize the latest tools and technologies to develop detailed engineering designs for your project. From conceptualization to feasibility studies and construction documentation, we ensure precise and efficient planning. We believe that a strong foundation in design leads to flawless execution in construction.",
        image: overviewImg,
      }}
      features={{
        title: "Why choose our design services?",
        items: [
          {
            title: "Advanced 3D Modeling",
            description: "We use state-of-the-art BIM technologies to create comprehensive 3D models, allowing for precise visualization before construction begins.",
            icon: Layers,
          },
          {
            title: "Feasibility Studies",
            description: "Thorough analysis of site conditions, environmental impact, and economic viability to ensure your project is set up for success from day one.",
            icon: Compass,
          },
          {
            title: "Structural Integrity",
            description: "Our structural engineering team ensures that every design meets the highest standards of safety, durability, and compliance.",
            icon: PenTool,
          },
          {
            title: "Cost Optimization",
            description: "Through smart design choices and value engineering, we optimize material usage and construction methods to save you money without compromising quality.",
            icon: BarChart,
          },
        ],
      }}
      process={{
        title: "Our Design Process",
        items: [
          {
            step: "01",
            title: "Concept & Planning",
            description: "Initial meetings to understand your vision, requirements, and project scope, leading to preliminary sketches and concepts.",
          },
          {
            step: "02",
            title: "Schematic Design",
            description: "Developing the concept into detailed architectural and engineering plans, including spatial arrangements and structural systems.",
          },
          {
            step: "03",
            title: "Design Development",
            description: "Refining the plans, selecting materials, and integrating mechanical, electrical, and plumbing (MEP) systems.",
          },
          {
            step: "04",
            title: "Construction Docs",
            description: "Finalizing all blueprints, specifications, and documentation required for bidding, permitting, and construction.",
          },
        ],
      }}
      stats={[
        { value: "150+", label: "Designs Completed" },
        { value: "40+", label: "Expert Engineers" },
        { value: "100%", label: "Code Compliance" },
        { value: "15+", label: "Years Experience" },
      ]}
      faqs={[
        {
          q: "What software do you use for engineering design?",
          a: "We utilize industry-leading software including AutoCAD, Revit, Civil 3D, and various BIM tools to ensure precise and collaborative design processes.",
        },
        {
          q: "Do you handle the permitting process?",
          a: "Yes, our team prepares all necessary documentation and works closely with local authorities to secure all required permits for your project.",
        },
        {
          q: "Can you modify existing plans?",
          a: "Absolutely. We often review, optimize, and update existing architectural or engineering plans to improve efficiency, reduce costs, or meet new regulatory standards.",
        },
      ]}
    />
  );
}
