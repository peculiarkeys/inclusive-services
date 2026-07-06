import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop";

const services = [
  {
    title: "Therapy & Counselling",
    desc: "A safe space to work through stress, conflict, trauma, grief, parenting challenges, separation, and emotional difficulties.",
    target: "Families experiencing stress, conflict, trauma, or major transitions.",
    link: "/therapy-and-counselling",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Home Assessments",
    desc: "Professional, timely, and culturally sensitive home assessment reports including SAFE home studies.",
    target: "Adoption, foster care, kinship care, and placement planning.",
    link: "/contact",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "One-to-One Support",
    desc: "Individualized support for children and youth based on their unique emotional, physical, social, and developmental needs.",
    target: "Children needing emotional support, routine-building, or social skills.",
    link: "/one-to-one-support",
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Supervised Visitation",
    desc: "Safe, structured, and supportive visitation services that help maintain family connections while prioritizing child safety.",
    target: "High-conflict situations, court-related visitation, or reunification planning.",
    link: "/contact",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Transportation Services",
    desc: "Safe and reliable transportation for children and families to attend appointments, visits, and community activities.",
    target: "Caregivers needing support getting to schools, therapy, or visits.",
    link: "/transportation",
    img: "https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Adoption & Foster Care",
    desc: "Guidance for caregivers and families navigating adoption, foster care, kinship care, or placement readiness.",
    target: "Prospective adoptive parents, foster caregivers, and kinship families.",
    link: "/adoption",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Divorce & Separation",
    desc: "Support for families going through separation, with a child-focused approach to communication and stability.",
    target: "Families experiencing separation, parenting conflict, or transitions.",
    link: "/divorce-support",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Community Support",
    desc: "Helping families access the right resources through outreach programs, free consultations, workshops, and referrals.",
    target: "Families looking for information, parenting resources, or community support.",
    link: "/community-support",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
  }
];

export function ServicesPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden flex flex-col bg-[#1C3234] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Support Team" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Services for Children, Youth, & Families
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg leading-relaxed max-w-2xl font-medium"
            >
              Practical, professional, and compassionate support for families navigating child welfare, family transitions, counselling, and care coordination.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#348B93]" />
              <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Support That Meets Families Where They Are
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Every family’s situation is different. Some families need emotional support. Some need transportation. Others need supervised visits, home assessments, divorce support, or guidance through adoption and foster care. 
            </p>
            <p>
              Our services are designed to be flexible, respectful, and responsive to the unique needs of each child and family.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="w-full px-6 md:px-12 pb-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((item, idx) => (
            <Link to={item.link} key={idx} className="group relative h-[420px] rounded-[40px] overflow-hidden block shadow-sm hover:shadow-xl transition-shadow duration-500">
              <ImageWithFallback src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end">
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/90 text-base leading-relaxed max-w-md mb-4">{item.desc}</p>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mt-2">
                  <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider block mb-1">Helpful For</span>
                  <p className="text-white text-sm leading-snug">{item.target}</p>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-lg">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-[#111] -rotate-45 group-hover:rotate-0 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="w-full bg-[#348B93] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Not Sure Which Service You Need?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            You do not need to have everything figured out before reaching out. Contact us and we will help you understand which service may best fit your situation.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-white text-[#348B93] px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Speak With Our Team</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
