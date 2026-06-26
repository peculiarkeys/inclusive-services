import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  q: string;
  a: string;
}

const defaultFaqs: FAQ[] = [
  {
    q: "What construction services do you offer?",
    a: "We offer a wide range of services, including Engineering and Design, Procurement, Construction, Turnkey Solutions, Renovation and Rehabilitation, and Maintenance and Facility Management.",
  },
  { q: "How long does it take to complete a project?", a: "" },
  { q: "Do you provide free estimates?", a: "" },
  { q: "How do I know if my building needs renovation?", a: "" },
  { q: "Are your services covered by a warranty?", a: "" },
];

interface FAQSectionProps {
  faqsData?: FAQ[];
}

export function FAQSection({ faqsData }: FAQSectionProps) {
  const faqs = faqsData || defaultFaqs;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-[60px] md:pb-[136px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Have any questions?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-[745px] mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="bg-[#f9f9f9] rounded-2xl overflow-hidden p-2">
                  <button
                    className={`w-full flex items-center justify-between gap-4 px-6 py-4 rounded-[10px] text-left transition-colors ${
                      isOpen ? "bg-[#FF6501] text-white" : "bg-white text-[#111111]"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "-0.2px", lineHeight: "32px" }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && faq.a && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pt-4 pb-5">
                          <p className="text-[#111111]" style={{ fontSize: "16px", lineHeight: "30.4px" }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}