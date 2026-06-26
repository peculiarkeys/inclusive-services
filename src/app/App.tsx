import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { BlogPage } from "./pages/BlogPage";
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/engineering-and-design" element={<EngineeringDesignPage />} />
          <Route path="/services/procurement" element={<ProcurementPage />} />
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/services/turnkey-solutions" element={<TurnkeySolutionsPage />} />
          <Route path="/services/renovation-and-rehabilitation" element={<RenovationPage />} />
          <Route path="/services/maintenance-and-facility-management" element={<MaintenancePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
