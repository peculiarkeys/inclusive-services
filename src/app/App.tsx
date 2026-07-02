import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { programsPage } from "./pages/programsPage";
import { TranscorpHiltonPage } from "./pages/works/TranscorpHiltonPage";
import { ArchitectureEstatePage } from "./pages/works/ArchitectureEstatePage";
import { GolfCenterPage } from "./pages/works/GolfCenterPage";
import { FurnituresAndFurnishingPage } from "./pages/works/FurnituresAndFurnishingPage";
import { ModernCityJahiPage } from "./pages/works/ModernCityJahiPage";
import { AsokoroprogramPage } from "./pages/works/AsokoroprogramPage";
import { MaitamaprogramPage } from "./pages/works/MaitamaprogramPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AdoptionPage } from "./pages/AdoptionPage";
import { DivorceSupportPage } from "./pages/DivorceSupportPage";
import { BlogPage } from "./pages/BlogPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop"; // We need this to scroll up on route change
import { WhatsAppFloatingIcon } from "./components/WhatsAppFloatingIcon";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans">
      <ScrollToTop />
      <WhatsAppFloatingIcon />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<programsPage />} />
          <Route path="/works/transcorp-hilton-renovation" element={<TranscorpHiltonPage />} />
          <Route path="/works/architecture-estate" element={<ArchitectureEstatePage />} />
          <Route path="/works/golf-center" element={<GolfCenterPage />} />
          <Route path="/works/furnitures-and-furnishing" element={<FurnituresAndFurnishingPage />} />
          <Route path="/works/modern-city-jahi" element={<ModernCityJahiPage />} />
          <Route path="/works/asokoro-program" element={<AsokoroprogramPage />} />
          <Route path="/works/maitama-program" element={<MaitamaprogramPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/divorce-support" element={<DivorceSupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
