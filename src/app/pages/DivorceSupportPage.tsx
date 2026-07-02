import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Route, Users, ShieldAlert } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop";

export function DivorceSupportPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden flex flex-col bg-[#1C3234] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Divorce and Separation Support" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20 text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Family Transitions</span>
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
              className="text-white/90 text-lg leading-relaxed max-w-2xl font-medium"
            >
              Separation and divorce are challenging transitions for any family. We provide child-focused support that helps families navigate these changes with stability and respect.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
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
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Child-Focused Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping parents develop healthy, constructive communication strategies that prioritize the needs and emotional safety of the children.
              </p>
            </div>
            
            {/* Box 2 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Route className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Transition Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Assisting families in creating consistent routines, clear schedules, and smooth transitions across households to provide stability.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Coparenting Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional guidance on navigating co-parenting challenges, aligning on parenting styles, and making joint decisions effectively.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-8">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Conflict Resolution</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing tools and strategies for de-escalating tension, minimizing conflict, and shielding children from adult disputes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#1C3234] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Find Support During Transition</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            You do not have to navigate this transition alone. Reach out to our team to learn how we can support you and your children through separation.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#348B93] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
