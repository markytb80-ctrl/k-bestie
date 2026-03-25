/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ReportDetailPage from "./pages/ReportDetailPage";
import KidExperiencePage from "./pages/KidExperiencePage";
import SafetyPage from "./pages/SafetyPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import InstitutionalPage from "./pages/InstitutionalPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-coral/20 selection:text-coral bg-peach/10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/report-detail" element={<ReportDetailPage />} />
            <Route path="/kid-experience" element={<KidExperiencePage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/institutional" element={<InstitutionalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
