import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { PackageSearch, ShieldCheck, Globe, TrendingDown } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[26] || "";
const overviewImg = projectImages[27] || "";

export function ProcurementPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Procurement",
        description: "Strategic sourcing and seamless supply chain management to keep your project on schedule and on budget.",
        image: heroImg,
      }}
      overview={{
        title: "Sourcing quality, delivering value",
        description: "With our extensive network of suppliers and vendors, we manage the procurement process seamlessly. We source and procure high-quality materials, equipment, and subcontracted services, ensuring timely delivery and cost-effective solutions. We handle the complexities of logistics so you don't have to.",
        image: overviewImg,
      }}
      features={{
        title: "Procurement Excellence",
        items: [
          {
            title: "Global Sourcing Network",
            description: "Access to a worldwide network of trusted manufacturers and suppliers, ensuring you get the best materials at competitive prices.",
            icon: Globe,
          },
          {
            title: "Quality Assurance",
            description: "Rigorous vetting of all suppliers and materials. We only procure products that meet our strict quality and safety standards.",
            icon: ShieldCheck,
          },
          {
            title: "Cost Reduction",
            description: "Leveraging our purchasing power and strategic negotiation skills to secure the best possible pricing, keeping your project under budget.",
            icon: TrendingDown,
          },
          {
            title: "Logistics Management",
            description: "End-to-end handling of shipping, customs clearance, warehousing, and site delivery, ensuring materials arrive exactly when needed.",
            icon: PackageSearch,
          },
        ],
      }}
      process={{
        title: "How We Procure",
        items: [
          {
            step: "01",
            title: "Needs Assessment",
            description: "Analyzing the project specifications to identify exact material, equipment, and service requirements.",
          },
          {
            step: "02",
            title: "Supplier Sourcing",
            description: "Identifying and evaluating potential suppliers, requesting quotes, and conducting competitive bidding.",
          },
          {
            step: "03",
            title: "Purchasing & Negotiation",
            description: "Negotiating contracts, finalizing purchase orders, and establishing delivery schedules.",
          },
          {
            step: "04",
            title: "Delivery & Inspection",
            description: "Coordinating logistics, receiving goods on-site, and conducting quality inspections before installation.",
          },
        ],
      }}
      stats={[
        { value: "500+", label: "Trusted Suppliers" },
        { value: "30%", label: "Average Cost Savings" },
        { value: "10k+", label: "Deliveries Managed" },
        { value: "99%", label: "On-Time Delivery" },
      ]}
      faqs={[
        {
          q: "How do you ensure the quality of materials?",
          a: "We have a rigorous pre-qualification process for all our vendors. Additionally, all materials undergo inspection upon delivery to the site before they are accepted.",
        },
        {
          q: "Can you procure specialized or custom equipment?",
          a: "Yes, our global sourcing team specializes in finding unique, custom-fabricated, or highly specialized equipment tailored to your specific project needs.",
        },
        {
          q: "How do you handle supply chain disruptions?",
          a: "We maintain contingency plans and alternative supplier relationships. By actively monitoring global supply chains, we can quickly pivot to prevent project delays.",
        },
      ]}
    />
  );
}
