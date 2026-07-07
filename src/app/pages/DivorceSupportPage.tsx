import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Route, Users, ShieldAlert, CheckCircle2, Target, Heart, Anchor, Smile } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop";
const targetImg = "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1000&auto=format&fit=crop";

export function DivorceSupportPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Divorce and Separation Support" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Family Transitions</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Divorce & Separation Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Separation and divorce are challenging transitions for any family. We provide child-focused support that helps families navigate these changes with stability and respect.
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
              Navigating Change Together
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              When a family transitions through separation or divorce, the impact is felt by everyone, especially children. Our support services are designed to minimize conflict, prioritize the emotional well-being of the children, and help parents establish a healthy foundation for the future.
            </p>
            <p>
              We focus on practical strategies that foster stability, improve communication, and ensure that both parents and children feel supported during a difficult time.
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
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Child-Focused Communication</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Helping parents develop healthy, constructive communication strategies that prioritize the emotional safety of the children.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Route className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Transition Planning</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Assisting families in creating consistent routines, clear schedules, and smooth transitions across households.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Coparenting Support</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Professional guidance on navigating co-parenting challenges, aligning on parenting styles, and making joint decisions.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Conflict Resolution</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Providing tools and strategies for de-escalating tension, minimizing conflict, and shielding children from disputes.
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
               <ImageWithFallback src={targetImg} alt="Parent holding child's hand" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who is this Support For?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our divorce and separation support services are designed to assist families at any stage of their transition. This includes:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Parents in the early stages of separation seeking guidance on how to tell their children.",
                "Co-parents struggling with communication and looking for mediation and tools.",
                "Families adjusting to new living arrangements and multi-household routines.",
                "Children and youth who need a neutral, supportive space to express their feelings.",
                "High-conflict situations requiring structured intervention to protect the children."
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
            <p className="text-white/80 text-lg">A neutral, forward-looking approach focused heavily on the well-being of the child and the stabilization of the family structure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-2xl font-semibold mb-4">Assessment</h3>
              <p className="text-white/70 leading-relaxed">Evaluating the family dynamics, immediate needs, and potential points of conflict to establish a baseline.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-2xl font-semibold mb-4">Planning</h3>
              <p className="text-white/70 leading-relaxed">Collaboratively designing transition plans, communication protocols, and structured routines across households.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#62B9AB] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-2xl font-semibold mb-4">Mediation & Support</h3>
              <p className="text-white/70 leading-relaxed">Ongoing sessions to resolve disputes neutrally and support the emotional adjustment of both children and parents.</p>
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
                <ShieldAlert className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Reduced Conflict</h3>
                <p className="text-gray-600 leading-relaxed">Lowering tension levels between co-parents minimizes the negative emotional impact on children.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Anchor className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Increased Stability</h3>
                <p className="text-gray-600 leading-relaxed">Clear routines and agreements create predictable, safe environments in both households.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Smile className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Healthier Children</h3>
                <p className="text-gray-600 leading-relaxed">Children whose parents seek support during separation report lower levels of anxiety and better school performance.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Target className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Effective Co-Parenting</h3>
                <p className="text-gray-600 leading-relaxed">Parents shift from adversaries to partners in parenting, improving long-term communication.</p>
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
            "A transition in the family structure doesn't have to mean the end of a family; it's the beginning of a new way of being a family."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Core Belief</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Find Support During Transition</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            You do not have to navigate this transition alone. Reach out to our team to learn how we can support you and your children through separation.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
