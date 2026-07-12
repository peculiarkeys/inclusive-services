import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Heart, Users, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

const heroImage = "/images/family-counseling-session-home-with-therapist-pshycologist-showing-pictures-emotions-girl-african-american-father-european-mother.jpg";
const servicesImgs = [
  "/images/married-couple-having-problems-their-relationship-they-are-attending-pshycologist-advice (1).jpg",
  "/images/close-up-smiley-family-therapist.jpg",
  "/images/male-psychologist-taking-notes-couple-therapy-session-help-with-relationship-issues-counselor-giving-advice-explaining-marriage-problems-using-paper-psychoanalysis-close-up.jpg",
  "/images/full-shot-young-woman-undergoing-therapy.jpg"
];
const featureSideImage = "/images/people-sharing-feelings-emotions-group-therapy-session.jpg";
const programImgs = [
  "/images/psychologist-advising-group-patients.jpg",
  "/images/male-psychologist-taking-notes-couple-therapy-session-help-with-relationship-issues-counselor-giving-advice-explaining-marriage-problems-using-paper-psychoanalysis-close-up.jpg",
  "/images/psychology-therapy-psychiatry-mental-health-counseling-concept-candid-shot-nervous-self-conscious-young-male-glasses-telling-middle-aged-female-counselor-about-his-problems-work.jpg"
];
const communityImgs = [
  "/images/african-american-man-sharing-addiction-story-with-group-people-aa-therapy-meeting-adult-having-conversation-with-psychologist-patients-circle-rehabilitation-session.jpg",
  "/images/pexels-alex-green-5699467.jpg",
  "/images/pexels-shvets-production-7176137.jpg"
];

const testimonials = [
  {
    text: "Inclusive Services completely transformed my family. The culturally responsive approach and guided programs are perfect for someone like me who needs structure to stay consistent.",
    name: "Sophie R.",
    role: "Foster Parent",
    img: "/images/pexels-alex-green-5699467.jpg",
  },
  {
    text: "The dedication of their social workers has been a game-changer for the families I represent. The flexibility of their online sessions ensures continuous support.",
    name: "Elena M.",
    role: "Case Worker",
    img: "/images/woman-asking-questions-interview.jpg",
  },
  {
    text: "The cultural responsiveness of their team made our adoption journey incredibly smooth. We felt understood and supported every step of the way.",
    name: "Marcus T.",
    role: "Adoptive Father",
    img: "/images/pexels-timur-weber-8560681.jpg",
  }
];

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="w-full bg-white flex flex-col items-center">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[100vh] md:min-h-[700px] md:h-[85vh] overflow-hidden flex flex-col justify-end pb-12 pt-[140px] md:pt-[100px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithFallback src={heroImage} alt="Hero Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10 md:bg-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col items-start text-white pt-32 md:pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mb-4 md:mb-6">
              Family Support That<br/>Puts Children First
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-10 leading-relaxed">
              We believe every child deserves safety, stability, and care. We provide practical guidance and professional support to help families navigate challenging times and create nurturing environments.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mt-6">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 bg-white text-[#111111] px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#111111] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="group inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all w-full sm:w-auto">
                <span>Explore Our Services</span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-12 mt-12 md:mt-24 text-white">
              <div>
                <h4 className="text-2xl font-semibold mb-1">10,000</h4>
                <p className="text-white/80 text-sm">Families Supported</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-1">5,000+</h4>
                <p className="text-white/80 text-sm">Monthly Sessions</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-1">95%</h4>
                <p className="text-white/80 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do (Services) Section */}
      <section id="services" className="w-full max-w-[1440px] mx-auto py-24 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
                <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#111] leading-[1.1] mb-6 tracking-tight">
                Flexible Support Services
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We provide flexible support services designed around the needs of children, youth, families, caregivers, and community partners.
              </p>
            </div>
            <Link to="/services" className="shrink-0 group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 2-Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Therapy & Counselling", desc: "Supportive counselling services for individuals and families experiencing stress, conflict, transition, or emotional challenges.", img: servicesImgs[0], link: "/therapy-and-counselling" },
              { title: "Home Assessments", desc: "Professional, timely, and culturally sensitive home assessment reports, including SAFE home studies and supplemental reports.", img: servicesImgs[1], link: "/home-assessments" },
              { title: "Supervised Visitation", desc: "Safe, structured, and supportive visitation services that help maintain family connections while prioritizing child safety.", img: servicesImgs[2], link: "/supervised-visitation" },
              { title: "One-to-One Support", desc: "Individualized support for children and youth based on their unique emotional, physical, social, and developmental needs.", img: servicesImgs[3], link: "/one-to-one-support" }
            ].map((item, idx) => (
              <Link to={item.link} key={idx} className="group relative h-[420px] rounded-[40px] overflow-hidden block shadow-sm hover:shadow-xl transition-shadow duration-500">
                <ImageWithFallback src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed max-w-md">{item.desc}</p>
                </div>
                
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-[#111] -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section (Bento Box Design) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full py-24 px-6 md:px-12 mt-12 max-w-[1440px] mx-auto bg-white"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12">
            <div className="flex items-center gap-3 lg:w-1/4 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#111]" />
              <span className="text-[#111] font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            
            <div className="lg:w-3/4 flex flex-col items-start lg:items-end">
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#111] leading-[1.1] mb-8 text-left lg:text-right w-full tracking-tight">
                Compassionate. <span className="inline-flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px] bg-[#62B9AB] text-white rounded-full mx-1 md:mx-2 align-middle -mt-2"><Heart className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" /></span> Professional. <br className="hidden md:block"/> Family- <span className="inline-flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px] bg-[#FF994F] text-white rounded-full mx-1 md:mx-2 align-middle -mt-2"><Users className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" /></span> Centered.
              </h2>
              <div className="flex flex-col md:flex-row items-start lg:items-center justify-end gap-8 w-full">
                <p className="text-gray-500 max-w-xl text-lg leading-relaxed text-left lg:text-right">
                  Families come to us during sensitive and often stressful moments. We approach every case with dignity, cultural awareness, and respect for each family’s unique story.
                </p>
              </div>
            </div>
          </div>

          {/* Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Culturally Responsive */}
            <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex flex-col relative overflow-hidden group min-h-[420px]">
              <div className="flex flex-wrap gap-2 mb-12 relative z-10">
                {["Respect", "Honor", "Cultural", "Support", "Responsive", "Diversity", "Background"].map((pill, i) => (
                  <span key={i} className="bg-white text-gray-600 text-[13px] font-medium px-4 py-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/50">{pill}</span>
                ))}
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-3xl font-semibold text-[#111] mb-4 leading-tight tracking-tight">Culturally<br/>Responsive</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We respect diversity, family structure, identity, culture, and lived experience.
                </p>
              </div>
            </div>

            {/* Card 2: Child-Focused */}
            <div className="bg-[#FF994F] rounded-[32px] p-8 flex flex-col justify-between text-white relative overflow-hidden group min-h-[420px]">
              <span className="text-white/90 text-sm font-medium relative z-10">Priority</span>
              <div className="relative z-10 mt-12">
                <h3 className="text-5xl font-semibold mb-4 leading-[1.1] tracking-tight">Child<br/>Focused</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  The safety, well-being, and healthy development of children guide everything we do.
                </p>
              </div>
            </div>

            {/* Card 3: Image Background (Collaborative) */}
            <div className="rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group min-h-[420px]">
              <ImageWithFallback src={featureSideImage} alt="Collaborative Service Delivery" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#074E80]/90 via-[#074E80]/30 to-transparent" />
              <span className="text-white/90 text-sm font-medium relative z-10">Partnership</span>
              <div className="relative z-10 mt-12">
                <h3 className="text-4xl font-semibold text-white mb-4 leading-[1.1] tracking-tight">Collaborative<br/>Delivery</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  We work with caregivers, child welfare professionals, and community partners for better outcomes.
                </p>
              </div>
            </div>

            {/* Card 4: Trauma-Informed */}
            <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group min-h-[420px]">
              <span className="text-gray-500 text-sm font-medium relative z-10">Our Approach</span>
              <div className="relative z-10 mt-12">
                <h3 className="text-4xl font-semibold text-[#111] mb-4 leading-[1.1] tracking-tight">Trauma<br/>Informed</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our services are delivered with awareness of trauma, stress, attachment, and emotional safety.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. Guided Programs Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1320px] mx-auto py-24 px-6"
      >
        <div className="flex flex-col items-center text-center mb-16 relative">
          <span className="text-[#62B9AB] font-semibold text-sm tracking-wider uppercase mb-3 absolute top-0 left-0 hidden md:block">Our Approach</span>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-6 mt-12 max-w-xl">Support Built Around Each Family</h2>
          <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
            No two families are the same. That is why we take time to understand the needs, strengths, risks, goals, and circumstances of each child and family. Our work is guided by individualized planning, evidence-informed practice, respectful communication, and a commitment to preserving family connection whenever it is safe and appropriate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Community Commitment", subtitle: "Helping families access the right resources through outreach and referrals.", img: programImgs[0] },
            { title: "Clear Documentation", subtitle: "Concise, professional reports when required for visitation or assessments.", img: programImgs[1] },
            { title: "Individualized Planning", subtitle: "Tailored approaches guided by evidence and respectful communication.", img: programImgs[2] }
          ].map((prog, idx) => (
            <div key={idx} className="relative rounded-[32px] overflow-hidden group h-[400px] md:h-[500px]">
              <ImageWithFallback src={prog.img} alt={prog.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">{prog.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{prog.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. CTA Banner Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1440px] mx-auto bg-[#62B9AB] text-white rounded-[40px] py-16 md:py-24 px-6 text-center relative overflow-hidden"
      >
        {/* Abstract background graphics would go here, using simple circles for now */}
        <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 border-[20px] md:border-[40px] border-white/5 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 md:w-96 h-64 md:h-96 border-[20px] md:border-[40px] border-white/5 rounded-full" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 max-w-2xl leading-tight">Let’s Support Your Family’s Next Step</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you are a caregiver, parent, professional, or community partner, we are here to help you understand the services available and how we can support your family’s needs.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-white text-[#62B9AB] px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Connect With Us</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

      {/* 6. Testimonials Slider Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1200px] mx-auto py-24 px-6 mb-12 flex flex-col items-center"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-[2px] bg-[#d4183d] transform -skew-x-12" />
            <span className="text-gray-600 font-semibold text-[11px] tracking-widest uppercase">WHAT CLIENTS SAY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] leading-tight mb-4">
            Honest Feedback<br/>From Valued People
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Real feedback from families and individuals who trusted our services to elevate their lives. Their words reflect the impact of our work.
          </p>
        </div>

        {/* Slider Body */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
          {/* Left Column: Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 flex-wrap justify-center">
            {testimonials.map((t, i) => (
              <button 
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`relative shrink-0 w-20 h-24 md:w-28 md:h-32 rounded-[24px] overflow-hidden transition-all duration-300 ${activeTestimonial === i ? 'ring-2 ring-[#d4183d] ring-offset-4 scale-105 z-10 opacity-100' : 'opacity-60 hover:opacity-100 scale-95'}`}
              >
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Right Column: Active Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_10px_50px_rgba(0,0,0,0.06)] w-full max-w-2xl relative overflow-hidden flex-1 min-h-[300px] flex flex-col justify-center">
            {/* Background Quote Mark */}
            <div className="absolute right-4 top-4 text-[120px] md:text-[240px] leading-none text-gray-50 font-serif opacity-70 select-none">
              "
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#111] leading-snug mb-8 max-w-xl">
                {testimonials[activeTestimonial].text}
              </h3>
              
              <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-semibold text-lg text-[#111] mb-1">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
                
                <div className="flex gap-1 pb-1">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 text-[#d4183d]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Below */}
        <div className="mt-16 text-center flex flex-col items-center">
          <p className="text-[#111] font-semibold mb-4 max-w-xs leading-tight">
            See how impactful support makes a difference?
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Schedule a Call</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

    </div>
  );
}
