import { motion } from "motion/react";
import { ArrowRight, Eye, ShieldCheck, Heart, UserCheck, Shield, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "/images/people-sharing-feelings-emotions-group-therapy-session_compressed.webp";
const targetImg = "/images/pexels-shvets-production-7176298_compressed.webp";

export function SupervisedVisitationPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Supervised Visitation Services" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Safe Connections</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Supervised Visitation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Providing a safe, structured, and emotionally supportive environment for children to maintain vital connections with their families.
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
              Protecting Bonds While Ensuring Safety
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              When families face complex transitions, maintaining the bond between parent and child is critical for emotional well-being. However, these interactions must sometimes be overseen to ensure the physical and emotional safety of the child.
            </p>
            <p>
              Our supervised visitation services offer a neutral, comfortable setting where parents and children can interact positively. Our trained supervisors remain unobtrusive yet highly observant, ready to guide interactions toward constructive outcomes while strictly adhering to court or agency mandates.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Areas of Support */}
      <section className="w-full px-6 md:px-12 pb-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
            <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">Key Services</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Observational Monitoring</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Unobtrusive but vigilant oversight by trained professionals to ensure all interactions remain appropriate and safe.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Community Visits</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Facilitating visits in safe, approved community locations like parks or recreational centers when appropriate.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Safe Exchanges</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Providing a neutral buffer during child drop-offs and pick-ups to prevent conflict between co-parents.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Detailed Reporting</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Comprehensive, objective documentation of visits for court, caseworkers, or therapeutic teams.
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
               <ImageWithFallback src={targetImg} alt="Parent and child interacting" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who Needs This Service?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Supervised visitation is highly beneficial for families undergoing complex legal or emotional challenges. This service is designed for:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Families working toward reunification after a child welfare intervention.",
                "High-conflict divorces where neutral oversight is mandated by the court.",
                "Situations involving allegations of abuse, neglect, or substance dependency.",
                "Parents seeking to rebuild a relationship with a child after a prolonged absence.",
                "Co-parents who need a safe, tension-free environment for child exchanges."
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
            <p className="text-white/80 text-lg">We balance the strict requirements of safety with the profound need for familial connection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Shield className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
              <p className="text-white/70 leading-relaxed">Our primary objective is physical and emotional safety. Supervisors are trained to intervene swiftly if interactions become harmful or violate court orders.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Eye className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Objective Observation</h3>
              <p className="text-white/70 leading-relaxed">We maintain a neutral stance, documenting interactions factually without bias to provide accurate reports for involved professionals.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Heart className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Trauma-Informed</h3>
              <p className="text-white/70 leading-relaxed">We understand that visits can be stressful. We structure the environment to minimize anxiety and encourage natural, positive bonding.</p>
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
            The Impact of Supervised Visits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Heart className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Maintained Bonds</h3>
                <p className="text-gray-600 leading-relaxed">Children stay connected to their parents, which is crucial for identity development and emotional stability during family crises.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Guaranteed Safety</h3>
                <p className="text-gray-600 leading-relaxed">Custodial parents and caregivers gain peace of mind knowing the child is protected from emotional distress or physical harm.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Eye className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Clear Documentation</h3>
                <p className="text-gray-600 leading-relaxed">Objective reporting provides courts and agencies with the reliable data they need to make informed decisions about the family's future.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <UserCheck className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Pathway to Reunification</h3>
                <p className="text-gray-600 leading-relaxed">Consistent, positive visits are often the most critical stepping stone toward eventual unsupervised visits and family reunification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Philosophy / Quote */}
      <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Eye className="w-12 h-12 text-[#FF994F] mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-8">
            "We believe that every child deserves a safe space to love and be loved, even when family dynamics are complicated."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Core Belief</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Need to Schedule a Visit?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Contact us to discuss your specific court mandates or agency requirements, and let us help you facilitate safe, meaningful family connections.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
