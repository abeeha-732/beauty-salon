import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles, Star, Award, ShieldCheck, ArrowDown, Scissors, Heart, Play } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';
import heroBannerImage from '../assets/images/hero_salon_banner_1786466747325.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE]">
      
      {/* Warm Ambient Glow Layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-[#FFD3AC]/50 via-[#F5EBE1]/40 to-[#CCBEB1]/30 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#FFD3AC]/30 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute top-10 -right-20 w-[450px] h-[450px] bg-[#CCBEB1]/25 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#664C36_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mobile App Header Greeting, Headline, CTA, Special Promo */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            
            {/* App Greeting Bar & Live Availability Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-[#CCBEB1] text-xs font-bold uppercase tracking-widest text-[#331C08] shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>Open Today • 10 AM - 9 PM</span>
                <span className="text-[#CCBEB1]">|</span>
                <span className="text-emerald-700 font-bold">Gulberg III, Lahore</span>
              </motion.div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-xs font-bold text-[#331C08]">
                <span>Welcome Back, Beautiful!</span>
              </div>
            </div>

            {/* Expansive Display Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-[#331C08] font-serif">
                LUXURY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
                  BEAUTY & SALON
                </span>{' '}
                <br />
                EXPERIENCE
              </h1>
              <p className="text-lg sm:text-xl text-[#331C08]/80 font-normal leading-relaxed max-w-2xl pt-2">
                Discover bespoke hair styling, Parisian balayage, medical-grade skin therapy, and luxury nail artistry in a warm mocha sanctuary.
              </p>
            </motion.div>

            {/* Special Offer Banner Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-xl p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#331C08] via-[#4A2B10] to-[#331C08] text-white shadow-[0_12px_35px_rgba(51,28,8,0.25)] border border-[#664C36]/50 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-10 w-40 h-40 bg-[#FFD3AC]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFD3AC]/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#FFD3AC] border border-[#FFD3AC]/30">
                    Special Weekend Offer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#FFD3AC] leading-tight">
                    20% OFF On Hair Color
                  </h3>
                  <p className="text-xs text-[#CCBEB1] font-medium">Valid This Weekend ONLY • Book Early to Reserve Master Stylist</p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-2xl bg-[#FFD3AC] text-[#331C08] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </motion.div>

            {/* High Impact Animated CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 w-full sm:w-auto"
            >
              <AnimatedButton
                variant="gold-glow"
                size="lg"
                icon={Calendar}
                iconPosition="left"
                onClick={onOpenBooking}
                showSparkle
              >
                Book Appointment
              </AnimatedButton>

              <AnimatedButton
                variant="velvet-plum"
                size="lg"
                icon={Sparkles}
                onClick={onOpenQuiz}
              >
                AI Style Quiz
              </AnimatedButton>

              <a href="#services">
                <AnimatedButton
                  variant="glass-outline"
                  size="lg"
                  icon={Scissors}
                >
                  View Services
                </AnimatedButton>
              </a>
            </motion.div>

            {/* Trust Metrics & Ratings Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-[#CCBEB1]/80 w-full max-w-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#664C36] font-black text-2xl font-serif">
                  4.98 <Star size={18} className="fill-[#664C36] text-[#664C36]" />
                </div>
                <p className="text-xs text-[#331C08]/70 font-medium mt-0.5">1,850+ Reviews</p>
              </div>

              <div>
                <div className="text-2xl font-black text-emerald-800 font-serif">12+ Yrs</div>
                <p className="text-xs text-[#331C08]/70 font-medium mt-0.5">Master Artistry</p>
              </div>

              <div>
                <div className="text-2xl font-black text-[#664C36] font-serif">100%</div>
                <p className="text-xs text-[#331C08]/70 font-medium mt-0.5">Cruelty Free</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Impact Visual Showcase with Floating Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Frame with Warm Border */}
            <div className="relative rounded-3xl p-3 bg-white border border-[#CCBEB1] shadow-[0_20px_50px_rgba(102,76,54,0.12)]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#F5EBE1] group">
                <img
                  src={heroBannerImage}
                  alt="Gull Luxury Beauty Salon Interior"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#331C08]/80 via-[#331C08]/20 to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#CCBEB1] text-[#331C08] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest text-[#664C36] uppercase font-bold">THE SANCTUARY</span>
                      <h3 className="text-lg font-bold font-serif text-[#331C08]">VIP Private Beauty Suite</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] flex items-center justify-center text-[#664C36]">
                      <Sparkles size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Top Right Award */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 sm:-right-8 bg-white border border-[#CCBEB1] p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#664C36] flex items-center justify-center text-white font-bold">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#331C08]">Voted #1 Luxury Salon</p>
                <p className="text-[10px] text-[#331C08]/70">Haute Living Awards 2026</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Left Verified Client */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-[#CCBEB1] p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#331C08]">Instant Online Booking</p>
                <p className="text-[10px] text-[#331C08]/70">No waiting lines • Reserved chairs</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Down Arrow Scroll Prompt */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white border border-[#CCBEB1] text-[#664C36] hover:bg-[#FFD3AC]/40 transition-all duration-300 animate-bounce shadow-md"
        aria-label="Scroll Down to Services"
      >
        <ArrowDown size={18} />
      </a>

    </section>
  );
};
