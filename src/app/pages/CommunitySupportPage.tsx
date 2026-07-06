import { motion } from "motion/react";
import { ArrowRight, Users, BookOpen, HandHeart, PhoneCall, CheckCircle2, Link as LinkIcon, Network, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2000&auto=format&fit=crop";
const targetImg = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop";

export function CommunitySupportPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#1C3234] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Community Support" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Connection & Resources</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Community Support & Resources
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Connecting families to the right resources through outreach programs, free consultations, workshops, and comprehensive community referrals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Introduction / Overview */}
      <section className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#348B93]" />
              <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">The Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Bridging the Gap to Essential Care
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Navigating the vast array of social services, therapeutic programs, and community resources can be overwhelming for families. Our community support services are designed to cut through the confusion and connect you directly with the help you need.
            </p>
            <p>
              We believe that true healing and growth happen when families are deeply supported by their surrounding communities. From facilitating educational workshops to providing one-on-one resource navigation, we serve as your bridge to comprehensive care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Areas of Support */}
      <section className="w-full px-6 md:px-12 pb-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#348B93]" />
            <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">Key Offerings</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-6">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Resource Referrals</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Direct connections to local programs, food banks, housing assistance, and specialized therapeutic services.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Parenting Workshops</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Educational sessions focusing on trauma-informed care, behavior management, and family bonding.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Free Consultations</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Initial guidance sessions to help families assess their needs and map out a plan for seeking support.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#348B93] mb-6">
                <HandHeart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Outreach Programs</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Community-based initiatives designed to provide direct relief and support to vulnerable youth and families.
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
               <ImageWithFallback src={targetImg} alt="Community group discussion" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who Can We Help?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our community support network is open to anyone facing challenges in raising or caring for children and youth. We frequently assist:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Parents feeling overwhelmed by behavioral challenges or developmental diagnoses.",
                "New foster families trying to build a support network in their community.",
                "Families facing unexpected financial, housing, or food insecurity.",
                "Caregivers seeking to educate themselves on trauma-responsive parenting.",
                "Youth transitioning out of care who need help navigating adult services."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#348B93] shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#1C3234] text-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">How We Connect You</h2>
            <p className="text-white/80 text-lg">We don't just hand you a pamphlet; we actively help you navigate the system.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#348B93] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-2xl font-semibold mb-4">Listen & Assess</h3>
              <p className="text-white/70 leading-relaxed">We start with a conversation to truly understand your family's urgent needs, long-term goals, and current barriers.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#348B93] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-2xl font-semibold mb-4">Map Resources</h3>
              <p className="text-white/70 leading-relaxed">We leverage our extensive network of community partners to find the most appropriate, accessible services for you.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-[#348B93] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-2xl font-semibold mb-4">Facilitate Action</h3>
              <p className="text-white/70 leading-relaxed">We help you make the calls, fill out the forms, and take the necessary steps to actually secure the support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits / Outcomes */}
      <section className="w-full px-6 md:px-12 py-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#348B93]" />
            <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">The Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-12">
            The Power of Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Network className="w-8 h-8 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Stronger Support Networks</h3>
                <p className="text-gray-600 leading-relaxed">Families build lasting connections with local organizations and peer groups, reducing feelings of isolation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <BookOpen className="w-8 h-8 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Empowered Caregivers</h3>
                <p className="text-gray-600 leading-relaxed">Through workshops and education, parents and caregivers gain the knowledge and confidence to advocate for their children.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <HandHeart className="w-8 h-8 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Reduced Stress</h3>
                <p className="text-gray-600 leading-relaxed">Having a clear path to accessing basic needs and therapeutic services significantly lowers household anxiety.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Globe className="w-8 h-8 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Holistic Well-Being</h3>
                <p className="text-gray-600 leading-relaxed">By addressing environmental, social, and emotional needs simultaneously, the entire family system improves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Philosophy / Quote */}
      <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-[#FF994F] mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-8">
            "It takes a village to raise a child. Our job is to help you build, find, and connect with that village."
          </h3>
          <p className="text-[#348B93] font-semibold tracking-wide uppercase text-sm">Our Philosophy</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#1C3234] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Let Us Help You Connect</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Don't navigate the system alone. Reach out to schedule a free consultation and let us guide you to the resources your family deserves.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#348B93] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Find Resources Today</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
