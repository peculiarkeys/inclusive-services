import { Link } from "react-router";
import { Logo } from "./Header";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 px-6 md:px-[60px] border-t border-black/5">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left: logo + description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <Logo color="#111111" size={32} />
            </Link>
            <p className="text-[#546478] text-[15px] leading-relaxed max-w-sm">
              Obembe Construction is your trusted partner for engineering, procurement, and construction services built on integrity and excellence.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="flex items-center justify-center text-gray-600 hover:text-[#d16c49] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center text-gray-600 hover:text-[#d16c49] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center text-gray-600 hover:text-[#d16c49] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col gap-6 md:pl-10">
            <h4 className="text-[#111111] font-semibold tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/works" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-[#546478] hover:text-[#d16c49] transition-colors text-[15px] font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#111111] font-semibold tracking-wide uppercase text-sm">Get in Touch</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-[#546478]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d16c49] shrink-0 mt-0.5" />
                <span>Suite 09, First floor, Vicbalcon Towers Jabi.<br />Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d16c49] shrink-0" />
                <span>09044444303</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d16c49] shrink-0" />
                <span>info@obembeconstruction.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#546478] text-sm font-medium">
            &copy; {new Date().getFullYear()} Obembe Construction. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#546478] hover:text-[#111111] transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-[#546478] hover:text-[#111111] transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}