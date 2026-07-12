import { motion } from "motion/react";
import { ArrowRight, Car, MapPin, Clock, ShieldCheck, Heart, UserCheck, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "/images/pexels-shvets-production-7176137.jpg";
const targetImg = "/images/pexels-shvets-production-7176029.jpg";

export function TransportationPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Transportation Services" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Safe Transit</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Reliable Transportation Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Safe, dependable, and supportive transit for children and families to access essential appointments, supervised visits, and community activities.
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
              Removing Barriers to Access
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Transportation shouldn't be the reason a family misses a crucial therapy session, a child misses a school day, or a parent misses a supervised visit. We provide reliable transportation services specifically designed for the unique needs of children, youth, and families in care.
            </p>
            <p>
              More than just a ride, our service provides a safe, supportive environment with trained professionals who understand the nuances of the child welfare system, ensuring that every journey is comfortable and stress-free.
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
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Supervised Visits</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Safe, scheduled transport between foster homes and visitation centers to maintain crucial family connections.
              </p>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Therapy & Medical</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Reliable transit to counselling, therapy, dental, and medical appointments to ensure continuity of care.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">School & Education</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Daily or weekly transport to ensure educational stability, even if a child is placed out of their original school district.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111] mb-3">Accompanied Transit</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Support workers accompany children during transit to provide emotional support and handle any behavioral needs.
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
               <ImageWithFallback src={targetImg} alt="Child entering vehicle" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who Needs This Service?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our transportation service is a critical resource for keeping families and support systems connected. It is heavily utilized by:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Foster parents balancing full-time work and their child's busy appointment schedule.",
                "Children needing to attend school in a different district to maintain educational stability.",
                "Families requiring neutral, third-party transport to supervised visitations.",
                "Youth needing safe transit to specialized therapy or community programs.",
                "Agencies needing reliable transport solutions for the children in their care."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#62B9AB] shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">Our Standard of Care</h2>
            <p className="text-white/80 text-lg">We prioritize safety, reliability, and emotional well-being on every single trip.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Shield className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Vetted Professionals</h3>
              <p className="text-white/70 leading-relaxed">All our drivers and accompanying staff undergo rigorous background checks, driving abstract reviews, and specialized child-welfare training.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Clock className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Punctuality</h3>
              <p className="text-white/70 leading-relaxed">We understand that court-ordered visits and medical appointments have strict timelines. We guarantee timely pick-ups and drop-offs.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm text-center">
              <Heart className="w-12 h-12 text-[#FF994F] mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Trauma-Informed Transit</h3>
              <p className="text-white/70 leading-relaxed">We recognize that transitions can trigger anxiety in children. Our staff are trained to create a calm, supportive environment in the vehicle.</p>
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
            More Than Just a Ride
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Heart className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Maintained Connections</h3>
                <p className="text-gray-600 leading-relaxed">Consistent transportation ensures that children do not miss scheduled visits with biological families, preserving vital bonds.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Educational Continuity</h3>
                <p className="text-gray-600 leading-relaxed">Children avoid the trauma of changing schools mid-year by getting reliable transport from their new placement to their home school.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <UserCheck className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Caregiver Relief</h3>
                <p className="text-gray-600 leading-relaxed">Foster parents experience significantly less burnout when they have reliable support for managing intense appointment schedules.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <MapPin className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Improved Health</h3>
                <p className="text-gray-600 leading-relaxed">Zero missed therapy or medical appointments means children get the consistent care they need to heal and grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Philosophy / Quote */}
      <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Car className="w-12 h-12 text-[#FF994F] mx-auto mb-8 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-8">
            "We believe that access to support, family, and education should never be hindered by logistics."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Commitment</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Need a Ride You Can Trust?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Contact us today to schedule reliable, safe, and supportive transportation for the children and youth in your care.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Schedule Transport</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
