import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

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
          {[
            { label: "About Us", href: "/about" },
            { label: "Works", href: "/works" },
            { label: "Services", href: "/services" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
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
              {[
                { label: "About Us", href: "/about" },
                { label: "Works", href: "/works" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[#111111]/80 hover:text-[#FF6501] transition-colors py-1 text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
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