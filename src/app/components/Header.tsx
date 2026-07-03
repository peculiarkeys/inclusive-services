import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import lightLogo from "/is-logo-1.png";
import darkLogo from "/is-logo.png";

function Logo({ size = 36, invert = false }: { color?: string; size?: number; invert?: boolean }) {
  return (
    <div className="flex gap-[8px] items-center">
      <img src={invert ? darkLogo : lightLogo} alt="Inclusive Social Services Logo" style={{ height: size, objectFit: "contain" }} />
    </div>
  );
}

export { Logo };

const servicesData = {
  "Therapeutic Services": [
    { title: "Therapy & Counselling", desc: "Individual & family sessions for stress, conflict, and emotional challenges.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", link: "/services" },
    { title: "One-to-One Support", desc: "Individualized support for children and youth based on their unique needs.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop", link: "/services" }
  ],
  "Assessments & Support": [
    { title: "Home Assessments", desc: "Professional, timely, and culturally sensitive home assessment reports.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", link: "/services" },
    { title: "Supervised Visitation", desc: "Safe, structured visitation services that maintain family connections.", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop", link: "/services" }
  ],
  "Family Transitions": [
    { title: "Adoption & Foster", desc: "Guidance and support for caregivers navigating adoption or foster care.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", link: "/adoption" },
    { title: "Divorce & Separation", desc: "Child-focused support to help families through separation transitions.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", link: "/divorce-support" }
  ],
  "Community Access": [
    { title: "Transportation", desc: "Reliable, safe transit for families to access essential services.", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop", link: "/services" },
    { title: "Community Support", desc: "Workshops, resources, and referrals tailored to your family's needs.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", link: "/contact" }
  ]
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<keyof typeof servicesData>("Therapeutic Services");

  // Mega menu close timeout
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent px-6 lg:px-12 pt-10 lg:pt-12 pb-6">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          {/* Left: Logo */}
          <div className="w-1/4 flex justify-start">
            <Link href="/" to="/" className="flex items-center shrink-0">
              <Logo size={48} invert={false} />
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav 
            className="hidden lg:flex flex-1 justify-center items-center gap-6"
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/" className="text-white hover:text-white/70 transition-colors text-[13px] font-medium whitespace-nowrap">Home</Link>
            
            {/* Services Mega Menu Toggle */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
            >
              <button className="text-white hover:text-white/70 transition-colors text-[13px] font-medium flex items-center gap-1.5 py-4 whitespace-nowrap">
                Services <ChevronDown className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex min-h-[360px]"
                  >
                     {/* Mega Menu Content */}
                     {/* Left Sidebar */}
                     <div className="w-[30%] border-r border-gray-100 p-6 flex flex-col text-left">
                        <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-4 px-4">Services</span>
                        <div className="flex flex-col gap-1">
                          {(Object.keys(servicesData) as Array<keyof typeof servicesData>).map(category => (
                            <button 
                              key={category}
                              onMouseEnter={() => setActiveCategory(category)}
                              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeCategory === category ? 'bg-gray-100 text-[#111]' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                     </div>
                     {/* Right Content */}
                     <div className="w-[70%] p-8 bg-white flex gap-6">
                        {servicesData[activeCategory].map((item, idx) => (
                          <Link key={idx} to={item.link} className="group flex-1 flex flex-col">
                            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 relative bg-gray-100">
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h4 className="text-[#111] font-semibold text-base mb-2 group-hover:text-[#348B93] transition-colors">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </Link>
                        ))}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link to="/contact" className="text-white hover:text-white/70 transition-colors text-[13px] font-medium whitespace-nowrap">Resources & Contact</Link>
            
          </nav>

          {/* Right CTA button */}
          <div className="hidden w-1/4 lg:flex justify-end items-center gap-6 shrink-0">
            <Link
              to="/about"
              className="text-white hover:text-white/70 transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white text-[#111] px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-[#111] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-white shrink-0" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            className="fixed top-[100px] left-4 right-4 z-40 lg:hidden overflow-hidden bg-white rounded-2xl shadow-xl border border-black/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-left">
              <Link to="/" className="text-[#111] hover:text-[#348B93] transition-colors py-2 text-base font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="text-[#111] hover:text-[#348B93] transition-colors py-2 text-base font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link to="/services" className="text-[#111] hover:text-[#348B93] transition-colors py-2 text-base font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link to="/contact" className="text-[#111] hover:text-[#348B93] transition-colors py-2 text-base font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Resources & Contact</Link>
              <Link to="/contact" className="mt-2 text-white bg-[#348B93] hover:bg-[#2a7076] transition-colors py-3 text-base font-medium rounded-full text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}