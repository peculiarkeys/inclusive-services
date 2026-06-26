import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";


import logoImg from "../../assets/logo.png";

function Logo({ size = 36, invert = false }: { color?: string; size?: number; invert?: boolean }) {
  return (
    <div className="flex gap-[8px] items-center">
      <img src={logoImg} alt="Obembe Construction Logo" className={invert ? "brightness-0 invert" : ""} style={{ height: size, objectFit: "contain" }} />
    </div>
  );
}

export { Logo };

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Main pill nav */}
      <header className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-[1320px] bg-transparent px-2 md:px-8 py-3 flex items-center justify-between transition-all">
        {/* Logo */}
        <Link href="/" to="/" className="flex items-center shrink-0">
          <Logo color="#ffffff" size={32} invert={true} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About Us</Link>
          
          {/* Works Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium py-2">
              Works <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white rounded-xl shadow-lg border border-black/5 py-2 w-72 flex flex-col">
                <Link to="/works" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">All Projects</Link>
                <Link to="/works/transcorp-hilton-renovation" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Transcorp Hilton Renovation</Link>
                <Link to="/works/architecture-estate" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Architectural Design Estate Project</Link>
                <Link to="/works/golf-center" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Golf Center Development</Link>
                <Link to="/works/furnitures-and-furnishing" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Furnitures and Furnishing Project</Link>
                <Link to="/works/modern-city-jahi" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Modern City Jahi</Link>
                <Link to="/works/asokoro-project" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Residential Development Asokoro</Link>
                <Link to="/works/maitama-project" className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#d16c49] hover:bg-gray-50 transition-colors">Maitama Private Residence</Link>
              </div>
            </div>
          </div>

          <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Services</Link>
          <Link to="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Blog</Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Contact</Link>
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#d16c49] text-white px-6 py-2.5 rounded-full hover:bg-[#b05b3e] transition-colors shadow-sm"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            className="fixed top-[80px] left-4 right-4 z-40 lg:hidden overflow-hidden bg-white rounded-2xl shadow-xl border border-black/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link to="/about" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
              
              <div className="flex flex-col gap-2">
                <span className="text-[#111111]/80 font-medium py-1">Works</span>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100 ml-2">
                  <Link to="/works" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>All Projects</Link>
                  <Link to="/works/transcorp-hilton-renovation" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Transcorp Hilton Renovation</Link>
                  <Link to="/works/architecture-estate" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Architectural Design Estate Project</Link>
                  <Link to="/works/golf-center" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Golf Center Development</Link>
                  <Link to="/works/furnitures-and-furnishing" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Furnitures and Furnishing Project</Link>
                  <Link to="/works/modern-city-jahi" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Modern City Jahi</Link>
                  <Link to="/works/asokoro-project" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Residential Development Asokoro</Link>
                  <Link to="/works/maitama-project" className="text-[#111111]/60 hover:text-[#FF6501] transition-colors text-sm" onClick={() => setMobileOpen(false)}>Maitama Private Residence</Link>
                </div>
              </div>

              <Link to="/services" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link to="/blog" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#d16c49] text-white px-5 py-3 rounded-xl mt-2 text-base font-medium hover:bg-[#b05b3e]"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}