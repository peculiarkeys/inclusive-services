import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TranscorpHiltonPage } from "./pages/works/TranscorpHiltonPage";
import { ArchitectureEstatePage } from "./pages/works/ArchitectureEstatePage";
import { GolfCenterPage } from "./pages/works/GolfCenterPage";
import { FurnituresAndFurnishingPage } from "./pages/works/FurnituresAndFurnishingPage";
import { ModernCityJahiPage } from "./pages/works/ModernCityJahiPage";
import { AsokoroProjectPage } from "./pages/works/AsokoroProjectPage";
import { MaitamaProjectPage } from "./pages/works/MaitamaProjectPage";
import { ServicesPage } from "./pages/ServicesPage";
import { BlogPage } from "./pages/BlogPage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop"; // We need this to scroll up on route change
import { WhatsAppFloatingIcon } from "./components/WhatsAppFloatingIcon";

// Import new service pages
import { EngineeringDesignPage } from "./pages/services/EngineeringDesignPage";
import { ProcurementPage } from "./pages/services/ProcurementPage";
import { ConstructionPage } from "./pages/services/ConstructionPage";
import { TurnkeySolutionsPage } from "./pages/services/TurnkeySolutionsPage";
import { RenovationPage } from "./pages/services/RenovationPage";
import { MaintenancePage } from "./pages/services/MaintenancePage";

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
          <Route path="/works" element={<ProjectsPage />} />
          <Route path="/works/transcorp-hilton-renovation" element={<TranscorpHiltonPage />} />
          <Route path="/works/architecture-estate" element={<ArchitectureEstatePage />} />
          <Route path="/works/golf-center" element={<GolfCenterPage />} />
          <Route path="/works/furnitures-and-furnishing" element={<FurnituresAndFurnishingPage />} />
          <Route path="/works/modern-city-jahi" element={<ModernCityJahiPage />} />
          <Route path="/works/asokoro-project" element={<AsokoroProjectPage />} />
          <Route path="/works/maitama-project" element={<MaitamaProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/engineering-and-design" element={<EngineeringDesignPage />} />
          <Route path="/services/procurement" element={<ProcurementPage />} />
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/services/turnkey-solutions" element={<TurnkeySolutionsPage />} />
          <Route path="/services/renovation-and-rehabilitation" element={<RenovationPage />} />
          <Route path="/services/maintenance-and-facility-management" element={<MaintenancePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
