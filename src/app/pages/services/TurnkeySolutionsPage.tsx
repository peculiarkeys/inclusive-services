import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";
import { Key, Lightbulb, UserCheck, Shield } from "lucide-react";

const rawImages = import.meta.glob("../../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const heroImg = projectImages[30] || "";
const overviewImg = projectImages[31] || "";

export function TurnkeySolutionsPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: "Turnkey Solutions",
        description: "Comprehensive EPC services. We handle everything from concept to completion, so you can focus on your business.",
        image: heroImg,
      }}
      overview={{
        title: "One point of contact, total peace of mind",
        description: "As an EPC contractor, we offer turnkey solutions, taking full responsibility for the entire project lifecycle. From design and procurement to construction and commissioning, we deliver the project in a ready-to-use condition. This approach minimizes the burden on you, allowing you to focus on your core business objectives while we handle the complexities of development.",
        image: overviewImg,
      }}
      features={{
        title: "The Turnkey Advantage",
        items: [
          {
            title: "Single Point of Responsibility",
            description: "No more mediating between designers, contractors, and vendors. We handle it all, providing you with a single point of contact.",
            icon: Key,
          },
          {
            title: "Accelerated Delivery",
            description: "By integrating design and construction phases, we significantly reduce project timelines and enable fast-track delivery.",
            icon: Lightbulb,
          },
          {
            title: "Guaranteed Costs",
            description: "Turnkey contracts often come with a fixed price or guaranteed maximum price, protecting you from unexpected cost overruns.",
            icon: Shield,
          },
          {
            title: "Stress-Free Experience",
            description: "We manage all permits, logistics, sub-contractors, and site issues, delivering a fully operational facility ready for immediate use.",
            icon: UserCheck,
          },
        ],
      }}
      process={{
        title: "Our Turnkey Process",
        items: [
          {
            step: "01",
            title: "Consultation & Scope",
            description: "Defining the project goals, budget, and timeline to establish a clear, comprehensive turnkey agreement.",
          },
          {
            step: "02",
            title: "Integrated Design",
            description: "Our in-house engineers and architects design the project while keeping construction efficiencies in mind.",
          },
          {
            step: "03",
            title: "Build & Procure",
            description: "Simultaneous procurement and construction phases to accelerate the schedule without sacrificing quality.",
          },
          {
            step: "04",
            title: "Handover",
            description: "Final commissioning, operational training for your staff, and handing over the keys to your new facility.",
          },
        ],
      }}
      stats={[
        { value: "50+", label: "Turnkey Projects" },
        { value: "100%", label: "Budget Adherence" },
        { value: "25%", label: "Faster Delivery" },
        { value: "1", label: "Point of Contact" },
      ]}
      faqs={[
        {
          q: "What does EPC mean?",
          a: "EPC stands for Engineering, Procurement, and Construction. It is a prominent form of contracting agreement in the construction industry where the contractor is responsible for all activities from design, procurement, construction, to commissioning and handover of the project to the End-User or Owner.",
        },
        {
          q: "Is a turnkey solution more expensive?",
          a: "While the initial contract value might seem higher, turnkey solutions often end up being more cost-effective due to streamlined processes, reduced project timelines, and the elimination of cost overruns typically caused by miscommunication between separate design and construction teams.",
        },
        {
          q: "Can I still have input on the design?",
          a: "Absolutely. We work closely with you during the initial planning and design phases to ensure the project meets your exact specifications before construction begins.",
        },
      ]}
    />
  );
}
