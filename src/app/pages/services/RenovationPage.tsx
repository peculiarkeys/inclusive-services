import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { RefreshCw, LayoutTemplate, Zap, PaintRoller } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[28] || "";
const overviewImg = projectImages[29] || "";

export function RenovationPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Renovation & Rehabilitation",
        description: "Transforming and modernizing existing structures to meet contemporary standards and new aesthetic visions.",
        image: heroImg,
      }}
      overview={{
        title: "Breathing new life into existing structures",
        description: "We specialize in renovation and rehabilitation projects, breathing new life into existing structures. Whether it's modernizing outdated facilities, retrofitting for energy efficiency, or restoring historical buildings, our team combines creativity, expertise, and meticulous planning to achieve exceptional results while minimizing disruption to ongoing operations.",
        image: overviewImg,
      }}
      features={{
        title: "Our Renovation Expertise",
        items: [
          {
            title: "Adaptive Reuse",
            description: "Converting old, obsolete buildings into functional, modern spaces that serve entirely new purposes.",
            icon: LayoutTemplate,
          },
          {
            title: "Energy Retrofitting",
            description: "Upgrading insulation, HVAC, and electrical systems to dramatically improve the energy efficiency of older buildings.",
            icon: Zap,
          },
          {
            title: "Historical Restoration",
            description: "Carefully preserving the historical integrity and architectural details of heritage buildings while updating their core systems.",
            icon: RefreshCw,
          },
          {
            title: "Interior Modernization",
            description: "Complete interior overhauls including new finishes, lighting, and spatial reconfigurations to create inspiring environments.",
            icon: PaintRoller,
          },
        ],
      }}
      process={{
        title: "Our Renovation Process",
        items: [
          {
            step: "01",
            title: "Site Assessment",
            description: "Detailed surveys of the existing structure to identify challenges, structural limitations, and opportunities.",
          },
          {
            step: "02",
            title: "Design & Permitting",
            description: "Creating a redesign plan that works with the existing framework and securing specialized renovation permits.",
          },
          {
            step: "03",
            title: "Safe Demolition",
            description: "Careful, phased demolition and removal of old materials while ensuring the structural stability of the remaining building.",
          },
          {
            step: "04",
            title: "Rebuild & Finish",
            description: "Executing the new construction, installing modern systems, and applying final premium finishes.",
          },
        ],
      }}
      stats={[
        { value: "80+", label: "Buildings Renovated" },
        { value: "40%", label: "Energy Savings" },
        { value: "100%", label: "Code Upgrades" },
        { value: "10+", label: "Heritage Projects" },
      ]}
      faqs={[
        {
          q: "Can you renovate a building while it is still occupied?",
          a: "Yes. We are experienced in phased renovations, allowing businesses to continue operating with minimal disruption while we work section by section.",
        },
        {
          q: "How do you handle hazardous materials like asbestos in old buildings?",
          a: "We conduct thorough pre-construction surveys. If hazardous materials are found, we work with certified abatement specialists to safely remove and dispose of them before proceeding.",
        },
        {
          q: "Is it cheaper to renovate or build new?",
          a: "It depends on the structural condition of the existing building and the desired outcome. Often, renovation is more cost-effective and environmentally friendly, but we can provide a comparative analysis for your specific property.",
        },
      ]}
    />
  );
}
