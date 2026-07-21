import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { ContactSection } from "../components/ContactSection";
import { FAQSection } from "../components/FAQSection";
import { ShieldCheck, Network, HandHeart, BookOpen } from "lucide-react";

const heroImg = "/images/woman-asking-questions-interview_compressed.webp";

export function ContactPage() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <PageHero 
        title="Contact Us" 
        description="We're here to answer any questions you have. Reach out to our team to discuss your next support program."
        image={heroImg}
      />

      <div id="contact-form">
        <ContactSection />
      </div>
    </div>
  );
}
