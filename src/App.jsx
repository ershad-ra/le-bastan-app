import { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import MobileMenu from './components/Layout/MobileMenu';
import Footer from './components/Layout/Footer';
import SmartToast from './components/UI/SmartToast'; // <-- The new import

// Sections
import Hero from './components/Sections/Hero';
import HomeSection from './components/Sections/HomeSection';
import LogisticsSection from './components/Sections/LogisticsSection';
import AmenitiesSection from './components/Sections/AmenitiesSection';
import HeatingSection from './components/Sections/HeatingSection';
import EntertainmentSection from './components/Sections/EntertainmentSection';
import ExploreSection from './components/Sections/ExploreSection';
import RulesSection from './components/Sections/RulesSection';
import DocumentsSection from './components/Sections/DocumentsSection';
import ContactSection from './components/Sections/ContactSection';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 transition-colors duration-300 min-h-screen">
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(false)} />
      <Hero />
      <Navbar toggleMenu={() => setIsMobileMenuOpen(true)} />
      
      {/* The Smart Toast lives here! */}
      <SmartToast />

      <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-12">
        <HomeSection />
        <LogisticsSection />
        <AmenitiesSection />
        <HeatingSection />
        <EntertainmentSection />
        <ExploreSection />
        <RulesSection />
        <DocumentsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}