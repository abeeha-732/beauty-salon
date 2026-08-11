import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/salonData';
import { AnimatedButton } from './AnimatedButton';
import { Clock, Check, Sparkles, Calendar, Info, Layers, ChevronRight, X, Search, SlidersHorizontal } from 'lucide-react';
import { formatPKR } from '../utils/formatters';

interface ServicesSectionProps {
  onSelectServiceToBook: (service: Service) => void;
  initialCategory?: ServiceCategory;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook, initialCategory = 'All' }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<Service | null>(null);

  React.useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories: ServiceCategory[] = [
    'All',
    'Hair & Balayage',
    'Skin & Facial',
    'Nail Artistry',
    'Spa & Body',
    'Bridal & Gala',
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE] relative overflow-hidden">
      
      {/* Background Subtle Color Orbs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#FFD3AC]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#CCBEB1]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#331C08] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles size={14} className="text-[#664C36]" />
            <span>EXQUISITE SERVICE MENU</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-serif text-[#331C08] tracking-tight"
          >
            Popular Beauty & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
              Transformative Rituals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#331C08]/80 font-normal leading-relaxed"
          >
            Every treatment is tailored by certified master artisans using cruelty-free, organic botanicals and state-of-the-art aesthetic technology.
          </motion.p>
        </div>

        {/* Search & Filter App UI Bar */}
        <div className="max-w-2xl mx-auto mb-10 relative">
          <div className="relative flex items-center bg-white border border-[#CCBEB1] rounded-2xl px-5 py-3 shadow-[0_8px_25px_rgba(102,76,54,0.06)] focus-within:border-[#664C36] transition-all">
            <Search size={18} className="text-[#664C36] shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Balayage, Diamond Facial, Chrome Gel...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-[#331C08] placeholder-[#331C08]/50 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full text-[#331C08]/50 hover:text-[#331C08]"
              >
                <X size={16} />
              </button>
            )}
            <div className="ml-2 p-2 rounded-xl bg-[#664C36] text-white shrink-0">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-16 md:mb-20">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white font-bold shadow-[0_6px_20px_rgba(102,76,54,0.3)]'
                    : 'text-[#331C08]/80 bg-white border border-[#CCBEB1] hover:bg-[#FFD3AC]/30 hover:text-[#331C08] shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-[#664C36] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white border border-[#CCBEB1] overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(102,76,54,0.06)] hover:shadow-[0_18px_40px_rgba(102,76,54,0.15)] transition-all duration-300"
              >
                {/* Image Header with Popular Tag */}
                <div className="relative h-60 overflow-hidden bg-[#F5EBE1]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#331C08]/50 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-widest text-[#664C36] shadow-sm">
                    {service.category}
                  </span>

                  {/* Popular Tag */}
                  {service.popularTag && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#664C36] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      {service.popularTag}
                    </span>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#331C08]/85 text-xs text-[#FFD3AC] backdrop-blur-md">
                    <Clock size={13} className="text-[#FFD3AC]" />
                    <span>{service.durationMinutes} min</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold font-serif text-[#331C08] group-hover:text-[#664C36] transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-xl font-black font-serif text-[#664C36] whitespace-nowrap">
                        {formatPKR(service.price)}
                      </span>
                    </div>

                    <p className="text-xs text-[#331C08]/75 font-normal leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Included Feature Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-[#CCBEB1]/50">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#331C08]/80">
                        <div className="w-4 h-4 rounded-full bg-[#FFD3AC]/60 text-[#664C36] flex items-center justify-center shrink-0">
                          <Check size={10} />
                        </div>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Actions: Quick Details & Animated Booking Button */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedServiceDetail(service)}
                      className="p-3 rounded-full bg-[#FAF4EE] hover:bg-[#FFD3AC]/40 text-[#331C08] border border-[#CCBEB1] transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Info size={16} />
                    </button>

                    <AnimatedButton
                      variant="gold-glow"
                      size="md"
                      fullWidth
                      icon={Calendar}
                      onClick={() => onSelectServiceToBook(service)}
                    >
                      Book Treatment
                    </AnimatedButton>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Service Detail Modal Popover (Dribbble Screen 2 Specs) */}
      <AnimatePresence>
        {selectedServiceDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#331C08]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-xl w-full bg-white border border-[#CCBEB1] rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 text-[#331C08] hover:text-[#664C36] border border-[#CCBEB1] shadow-sm cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#664C36] text-xs font-bold uppercase">
                  {selectedServiceDetail.category}
                </span>
                <span className="text-[#331C08]/70 text-xs flex items-center gap-1">
                  <Clock size={13} className="text-[#664C36]" />
                  {selectedServiceDetail.durationMinutes} Minutes
                </span>
              </div>

              <h3 className="text-2xl font-black font-serif text-[#331C08] mb-2">
                {selectedServiceDetail.name}
              </h3>

              <div className="text-3xl font-black font-serif text-[#664C36] mb-4">
                {formatPKR(selectedServiceDetail.price)}
              </div>

              {/* 3 Metrics Chips Bar */}
              <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-center">
                <div className="p-2">
                  <Clock size={18} className="mx-auto text-[#664C36] mb-1" />
                  <span className="block text-[11px] font-bold text-[#331C08]">{selectedServiceDetail.durationMinutes} Min</span>
                  <span className="text-[9px] text-[#331C08]/60 uppercase tracking-wider">Duration</span>
                </div>
                <div className="p-2 border-x border-[#CCBEB1]">
                  <Sparkles size={18} className="mx-auto text-[#664C36] mb-1" />
                  <span className="block text-[11px] font-bold text-[#331C08]">Expert</span>
                  <span className="text-[9px] text-[#331C08]/60 uppercase tracking-wider">Staff</span>
                </div>
                <div className="p-2">
                  <Layers size={18} className="mx-auto text-[#664C36] mb-1" />
                  <span className="block text-[11px] font-bold text-[#331C08]">Premium</span>
                  <span className="text-[9px] text-[#331C08]/60 uppercase tracking-wider">Product</span>
                </div>
              </div>

              <p className="text-sm text-[#331C08]/80 leading-relaxed mb-6">
                {selectedServiceDetail.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#331C08] mb-3">
                Treatment Inclusions & Guarantee:
              </h4>

              <ul className="space-y-2 mb-8">
                {selectedServiceDetail.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-[#331C08]/80">
                    <div className="w-5 h-5 rounded-full bg-[#FFD3AC]/60 text-[#664C36] flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <AnimatedButton
                  variant="gold-glow"
                  size="lg"
                  fullWidth
                  icon={Calendar}
                  onClick={() => {
                    const service = selectedServiceDetail;
                    setSelectedServiceDetail(null);
                    onSelectServiceToBook(service);
                  }}
                >
                  Reserve Treatment Now
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
