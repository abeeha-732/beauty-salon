import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { BrandMetrics } from './components/BrandMetrics';
import { ServicesSection } from './components/ServicesSection';
import { TransformationSection } from './components/TransformationSection';
import { StylistsSection } from './components/StylistsSection';
import { LookbookSection } from './components/LookbookSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFooter } from './components/ContactFooter';
import { StyleQuizModal } from './components/StyleQuizModal';
import { BookingModal } from './components/BookingModal';
import { QuickBookFloatingButton } from './components/QuickBookFloatingButton';
import { Service, Stylist, ServiceCategory } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<Service | null>(null);
  const [selectedStylistForBooking, setSelectedStylistForBooking] = useState<Stylist | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ServiceCategory>('All');

  const handleOpenBookingWithService = (service: Service) => {
    setSelectedServiceForBooking(service);
    setSelectedStylistForBooking(null);
    setBookingOpen(true);
  };

  const handleOpenBookingWithStylist = (stylist: Stylist) => {
    setSelectedStylistForBooking(stylist);
    setSelectedServiceForBooking(null);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedServiceForBooking(null);
    setSelectedStylistForBooking(null);
    setBookingOpen(true);
  };

  const handleSelectCategoryFromApp = (categoryName: string) => {
    if (categoryName.toLowerCase().includes('hair')) setSelectedCategoryFilter('Hair & Balayage');
    else if (categoryName.toLowerCase().includes('makeup')) setSelectedCategoryFilter('Bridal & Gala');
    else if (categoryName.toLowerCase().includes('skin')) setSelectedCategoryFilter('Skin & Facial');
    else if (categoryName.toLowerCase().includes('nail')) setSelectedCategoryFilter('Nail Artistry');
    else if (categoryName.toLowerCase().includes('spa')) setSelectedCategoryFilter('Spa & Body');
    else if (categoryName.toLowerCase().includes('body')) setSelectedCategoryFilter('Spa & Body');
    else setSelectedCategoryFilter('All');
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#222421] selection:bg-[#EBD8CD] selection:text-[#222421]">
      
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        onOpenQuiz={() => setQuizOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Expansive Content */}
      <main className="relative">
        {/* Expansive Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenGeneralBooking}
          onOpenQuiz={() => setQuizOpen(true)}
        />

        {/* Dribbble UI App Showcase Section */}
        <AppShowcaseSection
          onOpenBooking={handleOpenGeneralBooking}
          onSelectCategory={handleSelectCategoryFromApp}
          onSelectServiceToBook={handleOpenBookingWithService}
        />

        {/* High-Contrast Brand Metrics */}
        <BrandMetrics />

        {/* Services & Treatment Collection */}
        <ServicesSection
          onSelectServiceToBook={handleOpenBookingWithService}
          initialCategory={selectedCategoryFilter}
        />

        {/* Before & After Transformations Slider */}
        <TransformationSection
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Master Stylists & Aesthetic Directors */}
        <StylistsSection
          onSelectStylistToBook={handleOpenBookingWithStylist}
        />

        {/* Editorial Style Lookbook */}
        <LookbookSection
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Expansive Contact & Footer */}
      <ContactFooter />

      {/* Interactive Style Recommendation Quiz Modal */}
      <StyleQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectService={(service) => {
          setQuizOpen(false);
          handleOpenBookingWithService(service);
        }}
      />

      {/* Step-by-Step Booking Engine Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preSelectedService={selectedServiceForBooking}
        preSelectedStylist={selectedStylistForBooking}
      />

      {/* Quick Floating Animated Booking Button */}
      <QuickBookFloatingButton
        onOpenBooking={handleOpenGeneralBooking}
      />

    </div>
  );
}
