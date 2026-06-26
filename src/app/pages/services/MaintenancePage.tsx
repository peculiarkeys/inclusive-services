import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { Settings, Wrench, ClipboardList, Activity } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[24] || "";
const overviewImg = projectImages[25] || "";

export function MaintenancePage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Maintenance & Facility Management",
        description: "Proactive care and efficient management to maximize the lifespan and performance of your property.",
        image: heroImg,
      }}
      overview={{
        title: "Preserving value, optimizing performance",
        description: "Beyond construction, we provide comprehensive maintenance and facility management services. Our team ensures the ongoing maintenance, repair, and optimization of your facility, maximizing its lifespan and operational efficiency. We treat your property as our own, ensuring it remains safe, functional, and pristine year after year.",
        image: overviewImg,
      }}
      features={{
        title: "Facility Management Solutions",
        items: [
          {
            title: "Preventative Maintenance",
            description: "Scheduled inspections and servicing of critical systems (HVAC, electrical, plumbing) to prevent costly breakdowns.",
            icon: Activity,
          },
          {
            title: "Reactive Repairs",
            description: "Rapid response teams available 24/7 to address unexpected emergencies, minimizing downtime and damage.",
            icon: Wrench,
          },
          {
            title: "Asset Management",
            description: "Comprehensive tracking of your building's physical assets, monitoring lifecycles and planning for timely replacements.",
            icon: ClipboardList,
          },
          {
            title: "Energy Optimization",
            description: "Continuous monitoring and adjustment of building systems to ensure optimal energy consumption and reduce utility costs.",
            icon: Settings,
          },
        ],
      }}
      process={{
        title: "Our Management Approach",
        items: [
          {
            step: "01",
            title: "Initial Audit",
            description: "A comprehensive baseline assessment of your facility's current condition and system performance.",
          },
          {
            step: "02",
            title: "Strategy Development",
            description: "Creating a customized maintenance schedule and standard operating procedures tailored to your building.",
          },
          {
            step: "03",
            title: "Implementation",
            description: "Deploying our trained facility managers and technicians to execute the preventative maintenance plan.",
          },
          {
            step: "04",
            title: "Reporting & Review",
            description: "Providing transparent, regular reports on facility health, work orders completed, and areas for improvement.",
          },
        ],
      }}
      stats={[
        { value: "24/7", label: "Emergency Support" },
        { value: "15%", label: "Avg Energy Savings" },
        { value: "500k+", label: "Sq Ft Managed" },
        { value: "99%", label: "Uptime Maintained" },
      ]}
      faqs={[
        {
          q: "Do you only manage buildings you have constructed?",
          a: "No, we offer our facility management services for any commercial, industrial, or large residential property, regardless of who originally built it.",
        },
        {
          q: "What is included in preventative maintenance?",
          a: "It includes routine inspections, filter changes, system calibrations, lubrication of moving parts, and safety checks for all major building systems (HVAC, elevators, fire suppression, etc.).",
        },
        {
          q: "How quickly do you respond to emergency repair requests?",
          a: "We offer tailored Service Level Agreements (SLAs). For critical emergencies, our rapid response teams can be on-site within hours, 24/7.",
        },
      ]}
    />
  );
}
