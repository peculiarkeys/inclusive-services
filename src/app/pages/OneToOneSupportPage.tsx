import { motion } from "motion/react";
import { ArrowRight, User, Star, Shield, Target, GraduationCap, CheckCircle2, HelpingHand } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2000&auto=format&fit=crop";
const targetImg = "https://images.unsplash.com/photo-1603354350317-6f7aaaa2d173?q=80&w=1000&auto=format&fit=crop";

export function OneToOneSupportPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="One-to-One Support" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Individualized Care</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              One-to-One Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Individualized support for children and youth based on their unique emotional, physical, social, and developmental needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Introduction / Overview */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
              <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">The Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Tailored Guidance for Every Child
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Every child and youth requires a unique approach to thrive. Our one-to-one support services are designed to meet them exactly where they are. We pair children with dedicated support workers who serve as mentors, guides, and advocates.
            </p>
            <p>
              Whether a child needs help developing social skills, regulating their emotions, integrating into the community, or simply requires a consistent, positive role model, our specialized team is equipped to foster meaningful, lasting development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Areas of Support */}
      <section className="w-full px-6 md:px-12 pb-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
            <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">Key Focus Areas</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Goal Setting</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Working collaboratively to set and achieve personal, academic, and behavioral milestones.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Social Skills</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Developing the confidence and tools necessary to build healthy peer relationships and communicate effectively.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Life Skills</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Teaching practical, everyday skills that promote independence and self-sufficiency for youth.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Emotional Regulation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Providing strategies to manage big emotions in safe, healthy, and constructive ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who is this for? */}
      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden shadow-xl">
               <ImageWithFallback src={targetImg} alt="Child receiving one-to-one support" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who is this Support For?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              This service is highly adaptable, making it suitable for a wide range of situations. We often work with children and youth who:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Are transitioning between foster placements or returning home.",
                "Have experienced trauma and need a consistent, trusting adult presence.",
                "Require support integrating into community or recreational activities.",
                "Need assistance developing routines, structure, and positive habits.",
                "Struggle with behavioral challenges in school or at home."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#62B9AB] shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#074E80] text-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">Our Methodology</h2>
            <p className="text-white/80 text-lg">We use a trauma-informed, strengths-based approach to unlock every child's potential.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-2xl font-semibold mb-4">Assessment</h3>
              <p className="text-white/70 leading-relaxed">We start by understanding the unique strengths, interests, and needs of the child to create a personalized support plan.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-2xl font-semibold mb-4">Matching</h3>
              <p className="text-white/70 leading-relaxed">We carefully pair the child with a support worker whose personality, skills, and experience align with the child's needs.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-2xl font-semibold mb-4">Implementation</h3>
              <p className="text-white/70 leading-relaxed">Consistent, structured sessions are held to build trust, work on targeted goals, and measure progress over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits / Outcomes */}
      <section className="w-full px-6 md:px-12 py-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
            <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">The Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-12">
            The Impact of Consistent Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Star className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Increased Confidence</h3>
                <p className="text-gray-600 leading-relaxed">Children build self-esteem as they master new skills, overcome challenges, and receive consistent positive reinforcement.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <HelpingHand className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Better Integration</h3>
                <p className="text-gray-600 leading-relaxed">Youth become more comfortable and successful in integrating into schools, community groups, and recreational activities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Shield className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Enhanced Stability</h3>
                <p className="text-gray-600 leading-relaxed">Consistent support routines help minimize disruptions in placements and improve overall household harmony.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Target className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Actionable Progress</h3>
                <p className="text-gray-600 leading-relaxed">Caregivers receive regular updates and strategies, ensuring the child's progress is supported across all environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Philosophy / Quote */}
      <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-12 h-12 text-[#FF994F] mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-8">
            "Every child is one caring adult away from being a success story."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Core Belief</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Empower a Child Today</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Contact us to learn more about our One-to-One Support programs and how we can tailor our services to meet the specific needs of the child in your care.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Connect With Us</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
