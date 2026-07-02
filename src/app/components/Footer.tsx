import { Link } from "react-router";
import { Logo } from "./Header";
import { Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand & Description (4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <Logo size={80} invert={true} />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Supporting children, youth, caregivers, and families with compassionate, culturally responsive, and professional social services.
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-[#348B93] hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-[#348B93] hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-[#348B93] hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links (3 columns) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <h4 className="text-[#111111] font-semibold text-base">Quick Links</h4>
          <ul className="flex flex-col gap-3.5">
            <li><Link to="/" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Home</Link></li>
            <li><Link to="/about" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">About Us</Link></li>
            <li><Link to="/services" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Services</Link></li>

            <li><Link to="/contact" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Resources & Contact</Link></li>
          </ul>
        </div>

        {/* Services (3 columns) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <h4 className="text-[#111111] font-semibold text-base">Services</h4>
          <ul className="flex flex-col gap-3.5">
            <li><Link to="/services/therapy" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Therapy & Counselling</Link></li>
            <li><Link to="/services/assessments" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Home Assessments</Link></li>
            <li><Link to="/services/support" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">One-to-One Support</Link></li>
            <li><Link to="/services/visitation" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Supervised Visitation</Link></li>
            <li><Link to="/services/transportation" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Transportation Services</Link></li>
            <li><Link to="/adoption" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Adoption & Foster Care Guidance</Link></li>
            <li><Link to="/divorce-support" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Divorce & Separation Support</Link></li>
            <li><Link to="/contact" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">Community Support</Link></li>
          </ul>
        </div>

        {/* Contact (2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-[#111111] font-semibold text-base">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#348B93] mt-0.5 shrink-0" />
              <a href="tel:09044444303" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium">0904 444 4303</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#348B93] mt-0.5 shrink-0" />
              <a href="mailto:info@inclusivesocialservices.com" className="text-gray-500 hover:text-[#348B93] transition-colors text-sm font-medium break-all">info@inclusivesocialservices.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#348B93] mt-0.5 shrink-0" />
              <span className="text-gray-500 text-sm font-medium leading-relaxed">Suite 09, First floor, Vicbalcon Towers Jabi, Abuja</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-[1320px] mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Inclusive Social Services. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-[#111111] transition-colors text-sm font-medium">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-[#111111] transition-colors text-sm font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}