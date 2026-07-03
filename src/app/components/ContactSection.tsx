import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#348B93]" />
              <span className="text-[#348B93] font-bold text-xs tracking-widest uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#111] leading-[1.1] mb-6 tracking-tight">
              Let's Start a<br/>Conversation
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Have a program in mind or need expert support advice? We're here to help. Reach out to us today and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Information (Left, 2 columns wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Main Info Card */}
            <div className="bg-[#111] text-white rounded-[40px] p-10 lg:p-12 flex flex-col justify-between h-full relative overflow-hidden group">
              {/* Abstract background shape */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-[#348B93]/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-12 tracking-tight">Contact<br/>Information</h3>
                
                <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#FF994F]" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">Call Us Directly</h4>
                      <p className="text-lg font-medium text-white">+1 (587) 894-3596</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#348B93]" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">Email Address</h4>
                      <p className="text-lg font-medium text-white break-all">info@inclusivesocialservices.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm font-medium mb-1">Office Location</h4>
                      <p className="text-base text-white leading-relaxed">Suite 09, First floor, Vicbalcon Towers Jabi.<br/>Abuja, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Working Hours Card */}
            <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#111]" />
              </div>
              <div>
                <h4 className="text-[#111] font-semibold text-lg mb-1">Working Hours</h4>
                <p className="text-gray-500 text-sm font-medium">Mon – Fri : 8:30 AM – 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right, 3 columns wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-3xl font-semibold text-[#111] mb-8 tracking-tight">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700 ml-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all text-base placeholder:text-gray-400"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all text-base placeholder:text-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all text-base placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all text-base placeholder:text-gray-400"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="service" className="text-sm font-medium text-gray-700 ml-1">Service Needed</label>
                <div className="relative">
                  <select 
                    id="service" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all appearance-none text-base text-gray-700 bg-transparent"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="counseling">Counseling</option>
                    <option value="child welfare">Child Welfare</option>
                    <option value="support">One-to-One Support</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#348B93]/20 focus:border-[#348B93] transition-all resize-none text-base placeholder:text-gray-400"
                  placeholder="Tell us about how we can help..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
                <button 
                  type="submit"
                  className="group flex-1 inline-flex items-center justify-center gap-3 bg-[#348B93] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#2a7076] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="hidden sm:flex items-center justify-center px-4 shrink-0">
                  <span className="text-gray-300 font-medium text-sm">OR</span>
                </div>

                <a 
                  href="https://wa.me/15878943596?text=Hello%20Inclusive Social Services%20support,%20I%20have%20an%20inquiry%20regarding%20a%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#20b858] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
