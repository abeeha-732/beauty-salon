import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STYLISTS_DATA } from '../data/salonData';
import { Stylist } from '../types';
import { Star, Instagram, Calendar, Sparkles, Award, CheckCircle, X } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface StylistsSectionProps {
  onSelectStylistToBook: (stylist: Stylist) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ onSelectStylistToBook }) => {
  const [activePortfolioStylist, setActivePortfolioStylist] = useState<Stylist | null>(null);

  return (
    <section id="stylists" className="py-24 md:py-36 lg:py-44 bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFD3AC]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#331C08] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Star size={14} className="fill-[#664C36] text-[#664C36]" />
            <span>WORLD-CLASS ARTISANS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-serif text-[#331C08] tracking-tight"
          >
            Meet Our Master <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
              Stylists & Aesthetic Directors
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#331C08]/80 font-normal leading-relaxed"
          >
            Handpicked international beauty directors dedicated to listening, consulting, and bringing your vision to life.
          </motion.p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS_DATA.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white border border-[#CCBEB1] overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(102,76,54,0.18)] transition-all duration-300"
            >
              {/* Avatar Section */}
              <div className="relative h-72 overflow-hidden bg-[#F5EBE1]">
                <img
                  src={stylist.avatar}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#331C08]/70 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 border border-[#CCBEB1] text-xs font-bold text-[#331C08] flex items-center gap-1 backdrop-blur-md shadow-sm">
                  <Star size={12} className="fill-[#664C36] text-[#664C36]" />
                  <span>{stylist.rating}</span>
                  <span className="text-[#331C08]/60 text-[10px]">({stylist.reviewsCount})</span>
                </div>

                {/* Experience Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#331C08]/80 text-[10px] font-bold uppercase text-[#FFD3AC] backdrop-blur-md">
                  {stylist.experienceYears} Yrs Experience
                </span>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#331C08] group-hover:text-[#664C36] transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs text-[#664C36] font-bold tracking-wide mt-0.5">
                    {stylist.title}
                  </p>
                  <p className="text-xs text-[#331C08]/75 mt-2 font-normal line-clamp-2">
                    {stylist.bio}
                  </p>
                </div>

                {/* Specialty Pill */}
                <div className="pt-2 border-t border-[#CCBEB1]/50">
                  <span className="text-[10px] text-[#331C08]/60 uppercase font-bold tracking-wider block mb-1">SPECIALTY:</span>
                  <span className="text-xs text-[#664C36] font-semibold">
                    {stylist.specialty}
                  </span>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => setActivePortfolioStylist(stylist)}
                    className="w-full py-2 text-xs font-bold uppercase tracking-wider text-[#331C08] bg-[#FFD3AC]/50 hover:bg-[#FFD3AC] border border-[#CCBEB1] rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles size={13} className="text-[#664C36]" />
                    View Portfolio
                  </button>

                  <AnimatedButton
                    variant="gold-glow"
                    size="sm"
                    fullWidth
                    icon={Calendar}
                    onClick={() => onSelectStylistToBook(stylist)}
                  >
                    Book With {stylist.name.split(' ')[0]}
                  </AnimatedButton>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Stylist Portfolio Lightbox Modal */}
      <AnimatePresence>
        {activePortfolioStylist && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#331C08]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-white border border-[#CCBEB1] rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActivePortfolioStylist(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 text-[#331C08] hover:text-[#664C36] border border-[#CCBEB1] cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={activePortfolioStylist.avatar}
                  alt={activePortfolioStylist.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#664C36]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#331C08]">
                    {activePortfolioStylist.name}
                  </h3>
                  <p className="text-xs text-[#664C36] font-semibold">
                    {activePortfolioStylist.title} • {activePortfolioStylist.instagramHandle}
                  </p>
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#331C08] mb-3">
                Selected Portfolio Showcase:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {activePortfolioStylist.portfolioImages.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-[#F5EBE1] border border-[#CCBEB1]">
                    <img
                      src={img}
                      alt="Portfolio sample"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              <AnimatedButton
                variant="gold-glow"
                size="lg"
                fullWidth
                icon={Calendar}
                onClick={() => {
                  const s = activePortfolioStylist;
                  setActivePortfolioStylist(null);
                  onSelectStylistToBook(s);
                }}
              >
                Book Appointment With {activePortfolioStylist.name}
              </AnimatedButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
