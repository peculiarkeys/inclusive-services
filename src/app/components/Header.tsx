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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
            <Link to="/about" className="text-white hover:text-white/70 transition-colors text-[13px] font-medium whitespace-nowrap">About Us</Link>
            
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
                    className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex"
                  >
                     {/* Mega Menu Content */}
                     <div className="w-1/3 bg-[#F5F5F5] p-8 border-r border-gray-100 flex flex-col text-left">
                        <h3 className="text-lg font-semibold text-[#111] mb-3">Our Services</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">Explore our range of culturally responsive support and therapy programs tailored for your family.</p>
                        <Link to="/services" className="mt-auto text-[#348B93] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                          View All <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                     </div>
                     <div className="w-2/3 p-8 grid grid-cols-2 gap-x-6 gap-y-5 text-left">
                        <Link to="/services/therapy" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Therapy & Counselling</h4>
                          <p className="text-gray-500 text-xs leading-snug">Individual & family sessions.</p>
                        </Link>
                        <Link to="/services/assessments" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Home Assessments</h4>
                          <p className="text-gray-500 text-xs leading-snug">Professional & sensitive reports.</p>
                        </Link>
                        <Link to="/services/support" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">One-to-One Support</h4>
                          <p className="text-gray-500 text-xs leading-snug">Individualized youth support.</p>
                        </Link>
                        <Link to="/services/visitation" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Supervised Visitation</h4>
                          <p className="text-gray-500 text-xs leading-snug">Safe and structured visits.</p>
                        </Link>
                        <Link to="/services/transportation" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Transportation</h4>
                          <p className="text-gray-500 text-xs leading-snug">Reliable transit for families.</p>
                        </Link>
                        <Link to="/adoption" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Adoption & Foster</h4>
                          <p className="text-gray-500 text-xs leading-snug">Guidance for caregivers.</p>
                        </Link>
                        <Link to="/divorce-support" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Divorce & Separation</h4>
                          <p className="text-gray-500 text-xs leading-snug">Child-focused support.</p>
                        </Link>
                        <Link to="/contact" className="group">
                          <h4 className="text-[#111] font-semibold text-sm group-hover:text-[#348B93] transition-colors mb-0.5">Community Support</h4>
                          <p className="text-gray-500 text-xs leading-snug">Workshops & referrals.</p>
                        </Link>
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
              to="/login"
              className="text-white hover:text-white/70 transition-colors text-sm font-medium"
            >
              Log In
            </Link>
            <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white text-[#111] px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Sign Up</span>
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
              <Link to="/contact" className="mt-2 text-white bg-[#348B93] hover:bg-[#2a7076] transition-colors py-3 text-base font-medium rounded-full text-center" onClick={() => setMobileOpen(false)}>Sign Up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}