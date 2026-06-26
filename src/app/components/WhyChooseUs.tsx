import { AnimatedSection } from "./AnimatedSection";
import { Users, CheckCircle, Clock, ShieldCheck, Truck, Coins, Leaf, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const centerImg = projectImages[4] || "";

const leftReasons = [
  {
    title: "Experienced Professionals",
    desc: "Highly skilled engineers, architects, and builders with decades of experience.",
    icon: <Users className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "Quality Assurance",
    desc: "We never compromise on materials or craftsmanship, ensuring lasting durability.",
    icon: <CheckCircle className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "On-Time Delivery",
    desc: "Rigorous project management ensures we hit our deadlines without excuses.",
    icon: <Clock className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "Safety First",
    desc: "Strict protocols to protect our workers, clients, and the community.",
    icon: <ShieldCheck className="w-5 h-5 text-[#326B70]" />
  }
];

const rightReasons = [
  {
    title: "Modern Equipment",
    desc: "State-of-the-art machinery and technology to improve efficiency and precision.",
    icon: <Truck className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "Cost-Effective Solutions",
    desc: "We optimize processes to deliver exceptional value, keeping you within budget.",
    icon: <Coins className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "Sustainable Construction",
    desc: "Eco-friendly practices and materials to minimize environmental impact.",
    icon: <Leaf className="w-5 h-5 text-[#326B70]" />
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates and open lines of communication so you're never in the dark.",
    icon: <MessageSquare className="w-5 h-5 text-[#326B70]" />
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-[120px] px-6 md:px-[60px] bg-[#fbfaf8]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-bold text-[#326B70] uppercase tracking-widest mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="text-[#111111] mb-6 leading-[1.1] font-medium" style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px" }}>
            A Partner You Can Rely On
          </h2>
          <p className="text-gray-500 text-lg">
            We don't just build structures; we build trust. Here is why clients consistently choose Obembe Construction for their most critical projects.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {leftReasons.map((reason, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {reason.icon}
                    <h3 className="text-[17px] font-semibold text-[#111111]">{reason.title}</h3>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed pl-8">
                    {reason.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Center Image */}
          <AnimatedSection delay={0.3} className="hidden lg:block w-[400px] h-[640px] rounded-[32px] overflow-hidden relative shadow-md">
            <ImageWithFallback src={centerImg} alt="Construction Quality" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
          </AnimatedSection>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {rightReasons.map((reason, i) => (
              <AnimatedSection key={i} delay={0.4 + (i * 0.1)}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {reason.icon}
                    <h3 className="text-[17px] font-semibold text-[#111111]">{reason.title}</h3>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed pl-8">
                    {reason.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
