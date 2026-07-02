import { motion } from "motion/react";
import { ArrowRight, Heart, Home, Users, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop";

export function AdoptionPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden flex flex-col bg-[#1C3234] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Adoption and Foster Care" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20 text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Specialized Support</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Adoption & Foster Care Guidance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg leading-relaxed max-w-2xl font-medium"
            >
              Navigating the adoption or foster care process is a significant and often complex journey. We help families prepare for, manage, and thrive through placements and transitions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Empowering Caregivers, Supporting Children
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Whether you are preparing to welcome a child into your home, currently navigating a placement, or providing kinship care, our specialized support services offer the practical guidance and emotional support you need.
            </p>
            <p>
              We understand the unique challenges of building attachments, managing transitions, and working within the child welfare system. Our role is to ensure families are equipped, confident, and supported at every stage of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Support Grid */}
      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#348B93]" />
            <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">Areas of Support</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Placement Readiness</h3>
              <p className="text-gray-600 leading-relaxed">
                Assessing family readiness, preparing the home environment, and building capacity to ensure caregivers are fully prepared for a new placement.
              </p>
            </div>
            
            {/* Box 2 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Transition Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping children and caregivers adjust to new family dynamics, routines, and expectations while building secure attachments.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Behavioural Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing evidence-informed strategies and practical tools for managing trauma-responsive behaviours in a supportive, empathetic manner.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Kinship Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized guidance and advocacy for relatives and extended family members navigating the complexities of the child welfare system.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#1C3234] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Need Support With Your Placement?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Reach out to our team to discuss your family's unique needs and discover how our specialized adoption and foster care services can help.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#348B93] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Connect With Our Specialists</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
