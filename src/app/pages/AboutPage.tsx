import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "/images/people-sharing-feelings-emotions-group-therapy-session.jpg";
const sideImg = "/images/close-up-smiley-family-therapist.jpg";

export function AboutPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Support Team" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-24 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              About Inclusive Social Services
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg leading-relaxed max-w-2xl font-medium"
            >
              Inclusive Social Services was created to provide practical, compassionate, and professional support to families involved in the child welfare system, family transitions, or situations requiring additional care, guidance, and coordination.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
              <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Supporting Families. Strengthening Connections.
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Inclusive Social Services provides short-term and goal-focused support services for children, youth, caregivers, and families. Our work is rooted in the belief that families can thrive when they receive the right support, resources, and guidance at the right time.
            </p>
            <p>
              We support families facing stress, separation, child welfare involvement, adoption or foster care processes, parenting challenges, supervised visitation needs, transportation barriers, and other complex family situations.
            </p>
            <p className="font-medium text-[#111] text-xl mt-4">
              Our role is to help families build safety, stability, confidence, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Bento */}
      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#62B9AB] rounded-[40px] p-10 md:p-14 text-white flex flex-col h-full shadow-lg">
            <h3 className="text-sm tracking-widest uppercase font-bold mb-10 opacity-80">Our Mission</h3>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mt-auto">
              Our mission is to support children, youth, caregivers, and families by providing professional, culturally responsive, and child-focused services that promote safety, stability, healthy relationships, and family well-being.
            </p>
          </div>
          <div className="bg-[#FF994F] rounded-[40px] p-10 md:p-14 text-white flex flex-col h-full shadow-lg">
            <h3 className="text-sm tracking-widest uppercase font-bold mb-10 opacity-80">Our Vision</h3>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mt-auto">
              We envision communities where children are safe, families are supported, caregivers are empowered, and every family has access to inclusive services that respect their unique needs and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Goals & Core Values (White background container) */}
      <section className="bg-white rounded-t-[60px] py-24 px-6 md:px-12 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] w-full">
        <div className="max-w-[1320px] mx-auto">
          
          {/* Goals Grid */}
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-2 h-2 rounded-full bg-[#111]" />
              <span className="text-[#111] font-bold text-xs tracking-widest uppercase">Our Goals</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#62B9AB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#111]">Strengthen Family Capacity</h4>
                <p className="text-gray-500 leading-relaxed text-sm">We help caregivers build the skills, confidence, and support systems needed to provide safe and nurturing care.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#62B9AB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#111]">Promote Child Safety</h4>
                <p className="text-gray-500 leading-relaxed text-sm">We prioritize the emotional, physical, developmental, and relational needs of children and youth.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#62B9AB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#111]">Preserve Family Connection</h4>
                <p className="text-gray-500 leading-relaxed text-sm">Whenever safe and appropriate, we support children in maintaining meaningful relationships with parents, caregivers, siblings, and extended family.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#62B9AB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#111]">Support Stability During Transition</h4>
                <p className="text-gray-500 leading-relaxed text-sm">We assist families navigating separation, divorce, placement, reunification, adoption, foster care, and child welfare processes.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#62B9AB]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#111]">Connect Families to Resources</h4>
                <p className="text-gray-500 leading-relaxed text-sm">We help families access community services, referrals, workshops, and supports that meet their specific needs.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
            <div className="lg:w-1/3 sticky top-32">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-4">
                What Guides Our Work
              </h2>
              <p className="text-gray-500 text-lg">Our core values are the foundation of everything we do.</p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Confidentiality", desc: "We respect the privacy of every client and handle personal information with care and professionalism." },
                { title: "Respect", desc: "We treat every child, caregiver, family member, and stakeholder with dignity." },
                { title: "Inclusion", desc: "We welcome and support families of all cultures, identities, backgrounds, structures, and lived experiences." },
                { title: "Safety", desc: "We place the safety and well-being of children and vulnerable individuals at the centre of our work." },
                { title: "Collaboration", desc: "We believe stronger outcomes happen when families, professionals, and community partners work together." },
                { title: "Accountability", desc: "We provide reliable service, clear communication, and professional documentation when required." }
              ].map((val, i) => (
                <div key={i} className="bg-[#f9f9f9] p-8 rounded-[32px] hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-[#111] mb-3">{val.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Framework & Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#F5F5F5] rounded-[40px] p-10 md:p-14">
              <h3 className="text-3xl font-semibold text-[#111] mb-8">How We Work</h3>
              <p className="text-gray-600 mb-6 font-medium text-lg">Our services are guided by:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Individualized planning",
                  "Trauma-informed practice",
                  "Strength-based support",
                  "Culturally responsive service delivery",
                  "Evidence-informed practice",
                  "Respectful communication",
                  "Collaborative care",
                  "Child-focused decision-making"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#62B9AB] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative rounded-[40px] overflow-hidden group">
              <ImageWithFallback src={sideImg} alt="Family Support" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
                <Quote className="w-16 h-16 text-white/20 mb-6" />
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed max-w-lg">
                  "Families do not need judgment. They need support, guidance, safety, and the opportunity to grow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Let’s Support Your Family’s Next Step</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Whether you are a caregiver, parent, professional, or community partner, we are here to help you understand the services available and how we can support your family’s needs.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Contact Inclusive Social Services</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
