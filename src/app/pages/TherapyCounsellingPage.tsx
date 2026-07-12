import { motion } from "motion/react";
import { ArrowRight, Heart, Brain, Users, Sparkles, Smile, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const heroImg = "/images/african-american-man-sharing-addiction-story-with-group-people-aa-therapy-meeting-adult-having-conversation-with-psychologist-patients-circle-rehabilitation-session.jpg";
const targetImg = "/images/male-psychologist-taking-notes-couple-therapy-session-help-with-relationship-issues-counselor-giving-advice-explaining-marriage-problems-using-paper-psychoanalysis-close-up.jpg";

export function TherapyCounsellingPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full p-4 md:p-6 pb-0">
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-[40px] overflow-hidden flex flex-col bg-[#074E80] shadow-lg mt-0">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback src={heroImg} alt="Therapy and Counselling" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center text-center md:text-left pt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="bg-[#FF994F] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Professional Support</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white leading-[1.05] max-w-4xl font-semibold mb-6 text-5xl md:text-7xl tracking-tight"
            >
              Therapy & Counselling Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-xl leading-relaxed max-w-2xl font-medium"
            >
              Individual and family sessions designed to help you navigate stress, resolve conflict, and overcome emotional challenges in a safe and supportive environment.
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
              A Safe Space to Heal and Grow
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Life’s challenges can sometimes feel overwhelming, whether you are dealing with past trauma, relationship conflicts, or the daily stressors of parenting and family life. Our therapy and counselling services provide a confidential, non-judgmental space to explore your feelings and find constructive ways forward.
            </p>
            <p>
              We believe in an empathetic, evidence-based approach that empowers you to build resilience, improve communication, and restore emotional balance. Whether through individual sessions or family therapy, our goal is to support you every step of the way on your journey toward mental and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Areas of Support */}
      <section className="w-full px-6 md:px-12 pb-24 bg-[#f9f9f9]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#62B9AB]" />
            <span className="text-[#62B9AB] font-bold text-xs tracking-widest uppercase">What We Offer</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-8">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Individual Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                One-on-one sessions focusing on personal mental health challenges, anxiety, depression, and self-discovery.
              </p>
            </div>
            
            <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-8">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Family Counselling</h3>
              <p className="text-gray-600 leading-relaxed">
                Working with families to improve communication, resolve conflicts, and strengthen familial bonds in a guided setting.
              </p>
            </div>

            <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#f0f7f8] flex items-center justify-center text-[#62B9AB] mb-8">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111] mb-4">Trauma & Grief</h3>
              <p className="text-gray-600 leading-relaxed">
                Compassionate support for those navigating profound loss, trauma, or significant life-altering transitions.
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
               <ImageWithFallback src={targetImg} alt="Counselling session" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111] leading-tight mb-6">
              Who Can Benefit From Our Services?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our therapy and counselling services are tailored to meet the needs of children, adolescents, adults, and entire family units. If you are experiencing any of the following, our team is here to help:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Persistent feelings of sadness, anxiety, or emotional exhaustion.",
                "Difficulty managing major life transitions or family changes.",
                "Struggles with communication and conflict resolution at home.",
                "Children or teens acting out, withdrawing, or facing school challenges.",
                "Families needing support after separation, divorce, or loss."
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
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">Our Approach</h2>
            <p className="text-white/80 text-lg">We employ evidence-based therapeutic practices, ensuring that your care is customized, compassionate, and clinically sound.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 text-[#FF994F] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Evidence-Based</h3>
              <p className="text-white/70 leading-relaxed">We utilize proven therapeutic methodologies, including Cognitive Behavioral Therapy (CBT) and emotionally focused approaches.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-[#FF994F] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Client-Centered</h3>
              <p className="text-white/70 leading-relaxed">Your voice matters. We work collaboratively with you to set goals, honoring your unique experiences and perspectives.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-[#FF994F] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Culturally Sensitive</h3>
              <p className="text-white/70 leading-relaxed">Our practitioners provide inclusive care that respects diverse cultural backgrounds, values, and family structures.</p>
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
            What You Can Expect to Achieve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Smile className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Emotional Resilience</h3>
                <p className="text-gray-600 leading-relaxed">Develop the coping mechanisms needed to handle stress and bounce back from emotional difficulties with greater strength.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Users className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Stronger Relationships</h3>
                <p className="text-gray-600 leading-relaxed">Foster healthier, more supportive relationships through improved communication and mutual understanding.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Brain className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Mental Clarity</h3>
                <p className="text-gray-600 leading-relaxed">Untangle complex thoughts and feelings, allowing you to make clearer, more empowered decisions for your future.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                <Heart className="w-8 h-8 text-[#62B9AB]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#111] mb-3">Renewed Peace</h3>
                <p className="text-gray-600 leading-relaxed">Experience a profound sense of inner peace by resolving lingering conflicts and healing emotional wounds.</p>
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
            "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives."
          </h3>
          <p className="text-[#62B9AB] font-semibold tracking-wide uppercase text-sm">Our Guiding Principle</p>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="w-full bg-[#074E80] py-24 px-6 text-center text-white m-4 md:m-6 rounded-[40px] shadow-lg max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto mb-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Ready to Take the First Step?</h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Reach out to schedule a confidential consultation. Let us help you and your family find the path to healing and growth.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#62B9AB] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span>Book a Session</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
