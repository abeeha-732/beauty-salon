import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, Menu, X, Calendar, Compass, Scissors, Star, Image, Award, HelpCircle } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Compass },
    { name: 'Services', href: '#services', icon: Scissors },
    { name: 'Transformations', href: '#transformations', icon: Award },
    { name: 'Stylists', href: '#stylists', icon: Star },
    { name: 'Lookbook', href: '#lookbook', icon: Image },
    { name: 'Reviews', href: '#reviews', icon: Star },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF4EE]/95 backdrop-blur-xl border-b border-[#CCBEB1]/70 py-3.5 shadow-[0_10px_30px_rgba(51,28,8,0.06)]'
          : 'bg-gradient-to-b from-[#FFD3AC]/40 via-[#FAF4EE]/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#664C36] via-[#85654A] to-[#FFD3AC] p-0.5 shadow-[0_0_15px_rgba(102,76,54,0.25)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#331C08] rounded-full flex items-center justify-center">
                <Sparkles size={18} className="text-[#FFD3AC] animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black tracking-[0.2em] text-[#331C08] font-serif">
                GULL
              </span>
              <span className="block text-[9px] tracking-[0.28em] text-[#664C36] uppercase -mt-1 font-bold">
                Luxury Beauty & Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#CCBEB1]/80 shadow-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1.5 rounded-full ${
                    isActive ? 'text-[#664C36]' : 'text-[#331C08]/70 hover:text-[#331C08]'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-[#664C36]' : 'text-[#CCBEB1]'} />
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-[#FFD3AC]/50 border border-[#CCBEB1]/80 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Style Quiz Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenQuiz}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#331C08] bg-[#FFD3AC]/50 hover:bg-[#FFD3AC] border border-[#CCBEB1] rounded-full flex items-center gap-1.5 transition-all shadow-sm"
            >
              <HelpCircle size={14} className="text-[#664C36]" />
              <span>Style Quiz</span>
            </motion.button>

            {/* Direct Phone Call Quick Link */}
            <a
              href="tel:+923008452872"
              className="p-2.5 rounded-full bg-white border border-[#CCBEB1] text-[#664C36] hover:bg-[#FAF4EE] transition-colors shadow-sm"
              title="Call Salon Hotline"
            >
              <Phone size={15} />
            </a>

            {/* Animated Primary Booking Button */}
            <AnimatedButton
              variant="gold-glow"
              size="sm"
              icon={Calendar}
              iconPosition="left"
              onClick={onOpenBooking}
              showSparkle
            >
              Book Visit
            </AnimatedButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <AnimatedButton
              variant="gold-glow"
              size="sm"
              icon={Calendar}
              onClick={onOpenBooking}
            >
              Book
            </AnimatedButton>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white border border-[#CCBEB1] text-[#331C08] shadow-sm"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAF4EE]/95 border-b border-[#CCBEB1] backdrop-blur-2xl px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-sm font-semibold tracking-wider text-[#331C08] hover:text-[#664C36] py-2 border-b border-[#CCBEB1]/40"
                  >
                    <Icon size={16} className="text-[#664C36]" />
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuiz();
                  }}
                  className="w-full py-3 text-xs font-bold tracking-widest text-[#331C08] bg-[#FFD3AC]/50 border border-[#CCBEB1] rounded-full flex items-center justify-center gap-2"
                >
                  <HelpCircle size={16} />
                  TAKE VIRTUAL STYLE QUIZ
                </button>

                <AnimatedButton
                  variant="gold-glow"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  Book Instant Appointment
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
