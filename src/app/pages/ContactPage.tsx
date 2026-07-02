import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { ContactSection } from "../components/ContactSection";
import { FAQSection } from "../components/FAQSection";
import { ShieldCheck, Network, HandHeart, BookOpen } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop";

export function ContactPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Contact & Resources" 
        description="We're here to answer any questions you have. Reach out to our team to discuss your next support program."
        image={heroImg}
      />

      {/* Community & Referrals Section */}
      <section className="w-full max-w-[1440px] mx-auto pt-24 pb-12 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#348B93]" />
                <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">Community & Referrals</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
                We believe in the power of community.
              </h2>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
              <p>
                If we cannot provide the specific service your family needs, we will help you find someone who can. We actively maintain relationships with community partners to ensure you receive the best possible support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center shrink-0">
                <HandHeart className="w-7 h-7 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-2">Free Consultations</h3>
                <p className="text-gray-600 leading-relaxed text-sm">We offer free initial consultations to help families understand what services are available and how to access them.</p>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-2">Professional Referrals</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Connecting families with specialized legal, medical, or therapeutic resources in the community.</p>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center shrink-0">
                <Network className="w-7 h-7 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-2">Support Networks</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Providing information on local community programs, support groups, and resources tailored to your family's needs.</p>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#348B93]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111] mb-2">Agency Collaboration</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Working seamlessly alongside CAS, legal professionals, and schools to coordinate comprehensive care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-form">
        <ContactSection />
      </div>
      
      <FAQSection />
    </div>
  );
}
