import { motion } from "motion/react";
import { ArrowRight, Heart, Home, Users, Shield, CheckCircle2, Star, ShieldCheck, Target, Baby } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "/images/pexels-shvets-production-7176305.jpg";
const targetImg = "/images/pexels-shvets-production-7176305 (1).jpg";

export function AdoptionPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Adoption and Foster Care" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Specialized Support</span>
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
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Navigating the adoption or foster care process is a significant journey. We help families prepare for, manage, and thrive through placements and transitions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
              <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">The Overview</span>
            </div>
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

      {/* 3. Areas of Support Grid */}
      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
            <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">Key Focus Areas</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Placement Readiness</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Assessing family readiness, preparing the home environment, and building capacity to ensure caregivers are prepared.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Transition Support</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Helping children and caregivers adjust to new family dynamics and routines while building secure attachments.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Behavioural Guidance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Providing evidence-informed strategies and practical tools for managing trauma-responsive behaviours.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Kinship Care</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Specialized guidance and advocacy for relatives navigating the complexities of the child welfare system.
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
               <ImageWithFallback src={targetImg} alt="Family bonding" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who is this Support For?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We provide tailored guidance for all types of alternative care arrangements. Our services are ideal for:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Prospective adoptive parents navigating the home study process.",
                "New foster caregivers preparing their home for a first placement.",
                "Kinship caregivers seeking support and resources for family members.",
                "Families experiencing challenges adjusting to a new placement.",
                "Caregivers looking for strategies to manage trauma-related behaviors."
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
            <p className="text-white/80 text-lg">A trauma-informed approach that centers the well-being of the child while empowering the caregiver.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="text-white/70 leading-relaxed">Equipping caregivers with deep knowledge about trauma, attachment, and the welfare system.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-2xl font-semibold mb-4">Preparation</h3>
              <p className="text-white/70 leading-relaxed">Practical, actionable steps to ensure the physical environment and emotional climate are ready for a child.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-2xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-white/70 leading-relaxed">Continuous coaching and problem-solving to navigate challenges as they arise during the placement.</p>
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
            The Impact of Proper Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Placement Stability</h3>
                <p className="text-gray-600 leading-relaxed">Proper preparation significantly reduces the risk of placement breakdowns, providing essential stability for the child.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Heart className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Secure Attachments</h3>
                <p className="text-gray-600 leading-relaxed">Caregivers learn techniques that actively foster trust and help children build healthy, lasting attachments.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Baby className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Reduced Caregiver Burnout</h3>
                <p className="text-gray-600 leading-relaxed">By having a dedicated support system, caregivers experience less stress and feel more confident in their parenting abilities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Target className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Smoother Transitions</h3>
                <p className="text-gray-600 leading-relaxed">Both the child and the family experience less anxiety during the initial days and weeks of a new placement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Philosophy / Quote */}
      <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-[#FF994F] mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-8">
            "Family isn't defined only by last names or by blood; it's defined by commitment and by love."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Guiding Principle</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Need Support With Your Placement?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Reach out to our team to discuss your family's unique needs and discover how our specialized adoption and foster care services can help.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Connect With Our Specialists</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
