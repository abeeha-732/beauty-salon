import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Search, 
  Calendar, 
  MapPin, 
  Tag, 
  Crown, 
  ChevronLeft, 
  Heart, 
  Sparkles, 
  Scissors, 
  Smile, 
  Sparkle,
  X,
  Phone,
  Clock,
  Star,
  CheckCircle2
} from 'lucide-react';
import { Service } from '../types';
import { formatPKR } from '../utils/formatters';

interface AppShowcaseSectionProps {
  onOpenBooking: () => void;
  onSelectCategory: (category: string) => void;
  onSelectServiceToBook: (service: Service) => void;
}

export const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({
  onOpenBooking,
  onSelectCategory,
  onSelectServiceToBook,
}) => {
  const [activeTab, setActiveTab] = useState<'Popular' | 'Trending' | 'Top Rated' | 'New'>('Popular');
  const [favorites, setFavorites] = useState<string[]>(['hair-smooth']);
  const [salonsModalOpen, setSalonsModalOpen] = useState(false);
  const [offersModalOpen, setOffersModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Sample Featured Services data directly from Dribbble UI shot
  const featuredServices = [
    {
      id: 'hair-smooth',
      name: 'Hair Smoothening',
      category: 'Hair',
      description: 'Frizz-free, silky & manageable hair.',
      priceUSD: 85,
      pricePKR: 8500,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400',
      tab: 'Popular'
    },
    {
      id: 'bridal-make',
      name: 'Bridal Makeup',
      category: 'Makeup',
      description: 'Radiant, long-lasting glam for your special day.',
      priceUSD: 150,
      pricePKR: 15000,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
      tab: 'Popular'
    },
    {
      id: 'hydra-glow',
      name: 'HydraFacial Glow',
      category: 'Skin Care',
      description: 'Deep pore hydro-extraction & 24K gold infusion.',
      priceUSD: 95,
      pricePKR: 9500,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400',
      tab: 'Trending'
    },
    {
      id: 'chrome-gel',
      name: 'Chrome Gel Nails',
      category: 'Nails',
      description: 'Structured Japanese gel with 3D chrome finish.',
      priceUSD: 45,
      pricePKR: 4500,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400',
      tab: 'Top Rated'
    }
  ];

  const categories = [
    { name: 'Hair', count: '12 Services', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=300' },
    { name: 'Makeup', count: '10 Services', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=300' },
    { name: 'Skin Care', count: '14 Services', image: 'https://images.unsplash.com/photo-1512290900673-7002fda0137b?auto=format&fit=crop&q=80&w=300' },
    { name: 'Nails', count: '16 Services', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=300' },
    { name: 'Spa & Wellness', count: '8 Services', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=300' },
    { name: 'Body Care', count: '9 Services', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=300' }
  ];

  return (
    <section id="app-showcase" className="py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden border-b border-[#E2DDD3]">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EBD8CD]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBD8CD] border border-[#D5C1B3] text-[#222421] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={14} className="text-[#2D3A2E]" />
            <span>EXCLUSIVE LUXURY SALON APP UI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif text-[#222421] tracking-tight">
            Book Your Perfect <br />
            <span className="text-[#2D3A2E] font-serif italic">Beauty Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#222421]/75 leading-relaxed">
            Experience our mobile app interface — designed for seamless appointment reservation, category browsing, and instant service curation.
          </p>
        </div>

        {/* 3 Mobile Screens Showcase Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* SCREEN 1: Home App Screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F3EFEA] border border-[#E2DDD3] rounded-[38px] p-5 shadow-[0_20px_50px_rgba(45,58,46,0.08)] flex flex-col justify-between min-h-[640px] relative overflow-hidden"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C89B3C] shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2.5 rounded-full bg-white border border-[#E2DDD3] text-[#222421] hover:bg-[#EBD8CD]/40 transition-colors relative cursor-pointer">
                    <Bell size={18} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#C89B3C] rounded-full" />
                  </button>
                  <button className="p-2.5 rounded-full bg-white border border-[#E2DDD3] text-[#222421] hover:bg-[#EBD8CD]/40 transition-colors cursor-pointer">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* Greeting */}
              <div className="mb-4">
                <span className="text-sm font-medium text-[#222421]/70 block">
                  Good Morning, <span className="font-script text-3xl text-[#C89B3C] font-normal leading-none align-middle ml-1">Ananya</span>
                </span>
                <h3 className="text-3xl font-black font-serif text-[#222421] tracking-tight mt-1 leading-tight">
                  Your Beauty, <br />
                  Our Priority
                </h3>
                <div className="w-8 h-0.5 bg-[#C89B3C] rounded-full my-2" />
                <p className="text-xs text-[#222421]/70 leading-relaxed font-normal">
                  Discover top salons and book your perfect beauty experience.
                </p>
              </div>

              {/* Hero Image Card */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] my-4 shadow-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
                  alt="Beauty Model"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222421]/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2D3A2E]">
                  ✧ VIP Salon Partner
                </span>
              </div>
            </div>

            {/* Bottom Quick Action Dock (Dark Forest Green) */}
            <div className="bg-[#2D3A2E] text-white rounded-2xl p-3 shadow-xl grid grid-cols-4 gap-1 text-center mt-2">
              <button 
                onClick={onOpenBooking}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[#EBD8CD]">
                  <Calendar size={15} />
                </div>
                <span className="text-[9px] font-bold tracking-tight text-[#EBD8CD]">Book</span>
              </button>

              <button 
                onClick={() => setSalonsModalOpen(true)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[#EBD8CD]">
                  <MapPin size={15} />
                </div>
                <span className="text-[9px] font-bold tracking-tight text-[#EBD8CD]">Find Salons</span>
              </button>

              <button 
                onClick={() => setOffersModalOpen(true)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[#EBD8CD]">
                  <Tag size={15} />
                </div>
                <span className="text-[9px] font-bold tracking-tight text-[#EBD8CD]">Offers</span>
              </button>

              <button 
                onClick={() => setMembershipModalOpen(true)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[#EBD8CD]">
                  <Crown size={15} />
                </div>
                <span className="text-[9px] font-bold tracking-tight text-[#EBD8CD]">VIP Club</span>
              </button>
            </div>
          </motion.div>


          {/* SCREEN 2: Categories Screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F3EFEA] border border-[#E2DDD3] rounded-[38px] p-5 shadow-[0_20px_50px_rgba(45,58,46,0.08)] flex flex-col justify-between min-h-[640px] relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 rounded-full bg-white border border-[#E2DDD3] text-[#222421] cursor-pointer">
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs font-bold text-[#222421] uppercase tracking-wider">Categories</span>
                <div className="w-8" />
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-3xl font-black font-serif text-[#222421] leading-tight">
                  What are you <span className="text-[#C89B3C]">✧</span> <br />
                  looking for today?
                </h3>
                <div className="w-8 h-0.5 bg-[#C89B3C] rounded-full mt-2" />
              </div>

              {/* Search Bar */}
              <div className="relative mb-5">
                <input
                  type="text"
                  placeholder="Search services or treatments..."
                  className="w-full pl-4 pr-10 py-3 rounded-2xl bg-white border border-[#E2DDD3] text-xs text-[#222421] placeholder-[#222421]/50 focus:outline-none focus:border-[#2D3A2E] shadow-sm"
                />
                <Search size={16} className="absolute right-3.5 top-3.5 text-[#222421]/50" />
              </div>

              {/* Categories Grid (2 Columns) */}
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat.name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      onSelectCategory(cat.name);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-3xl bg-[#EBD8CD]/40 border border-[#D5C1B3] flex flex-col items-center text-center group cursor-pointer hover:bg-[#EBD8CD] transition-all shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-2">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-xs font-bold text-[#222421] block">{cat.name}</span>
                    <span className="text-[10px] text-[#222421]/60 font-medium">{cat.count}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-3 text-center">
              <p className="text-[11px] text-[#222421]/60 font-medium">Click any category to filter live treatments</p>
            </div>
          </motion.div>


          {/* SCREEN 3: Featured Services Feed Screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F3EFEA] border border-[#E2DDD3] rounded-[38px] p-5 shadow-[0_20px_50px_rgba(45,58,46,0.08)] flex flex-col justify-between min-h-[640px] relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 rounded-full bg-white border border-[#E2DDD3] text-[#222421] cursor-pointer">
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs font-bold text-[#222421] uppercase tracking-wider">Featured</span>
                <button className="p-2 rounded-full bg-white border border-[#E2DDD3] text-[#222421] cursor-pointer">
                  <Heart size={18} />
                </button>
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-3xl font-black font-serif text-[#222421] leading-tight">
                  Featured <br />
                  Beauty Services <span className="text-[#C89B3C]">✧</span>
                </h3>
                <p className="text-xs text-[#222421]/70 mt-1">Handpicked services just for you</p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
                {(['Popular', 'Trending', 'Top Rated', 'New'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#2D3A2E] text-white shadow-sm'
                        : 'bg-[#EBD8CD]/60 text-[#222421] hover:bg-[#EBD8CD]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Service Items Horizontal Layout Feed */}
              <div className="space-y-3">
                {featuredServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-3 rounded-2xl bg-white border border-[#E2DDD3] flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#F3EFEA]">
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="text-xs font-bold text-[#222421]">{service.name}</h4>
                          <button
                            onClick={(e) => toggleFavorite(service.id, e)}
                            className="text-[#222421]/40 hover:text-rose-500 transition-colors ml-1 cursor-pointer"
                          >
                            <Heart
                              size={12}
                              className={favorites.includes(service.id) ? 'fill-rose-500 text-rose-500' : ''}
                            />
                          </button>
                        </div>
                        <p className="text-[10px] text-[#222421]/70 leading-tight line-clamp-1 mt-0.5">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs font-black font-serif text-[#2D3A2E]">
                            ${service.priceUSD} <span className="text-[10px] text-[#222421]/50 font-sans">({formatPKR(service.pricePKR)})</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBooking()}
                      className="px-3.5 py-1.5 rounded-full bg-[#EBD8CD] hover:bg-[#2D3A2E] hover:text-white text-[#222421] text-[10px] font-bold tracking-wider transition-colors shrink-0 cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 text-center">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-2xl bg-[#2D3A2E] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#222421] transition-colors cursor-pointer"
              >
                Instant Reservation
              </button>
            </div>
          </motion.div>

        </div>

      </div>


      {/* Find Salons Modal */}
      <AnimatePresence>
        {salonsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222421]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full bg-white border border-[#E2DDD3] rounded-3xl p-6 shadow-2xl"
            >
              <button
                onClick={() => setSalonsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EFEA] text-[#222421] hover:bg-[#EBD8CD] cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} className="text-[#2D3A2E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A2E]">SALON SANCTUARY LOCATION</span>
              </div>

              <h3 className="text-2xl font-black font-serif text-[#222421] mb-2">GULL Flagship Sanctuary</h3>
              <p className="text-xs text-[#222421]/70 mb-4">M.M. Alam Road, Block C2, Gulberg III, Lahore, Pakistan</p>

              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E2DDD3] space-y-3 text-xs mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#222421] flex items-center gap-1.5"><Clock size={14} className="text-[#2D3A2E]" /> Opening Hours:</span>
                  <span className="text-[#222421]/80">Mon - Sat: 10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#E2DDD3] pt-2">
                  <span className="font-bold text-[#222421] flex items-center gap-1.5"><Phone size={14} className="text-[#2D3A2E]" /> Direct Hotline:</span>
                  <a href="tel:+923008452872" className="text-[#2D3A2E] font-bold hover:underline">+92 300 8452872</a>
                </div>
                <div className="flex items-center justify-between border-t border-[#E2DDD3] pt-2">
                  <span className="font-bold text-[#222421] flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#2D3A2E]" /> Valet Parking:</span>
                  <span className="text-emerald-700 font-bold">Complimentary VIP Valet</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSalonsModalOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-2xl bg-[#2D3A2E] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#222421] cursor-pointer"
                >
                  Book Visit Here
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Special Offers Modal */}
      <AnimatePresence>
        {offersModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222421]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full bg-white border border-[#E2DDD3] rounded-3xl p-6 shadow-2xl"
            >
              <button
                onClick={() => setOffersModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EFEA] text-[#222421] hover:bg-[#EBD8CD] cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Tag size={20} className="text-[#C89B3C]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A2E]">EXCLUSIVE PROMOTIONS</span>
              </div>

              <h3 className="text-2xl font-black font-serif text-[#222421] mb-4">Special Weekend Beauty Offers</h3>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-2xl bg-[#EBD8CD]/40 border border-[#D5C1B3] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#2D3A2E] uppercase">COLOR PROMO</span>
                    <h4 className="text-sm font-bold text-[#222421]">20% OFF Parisian Balayage</h4>
                    <p className="text-[11px] text-[#222421]/70">Use Code: <span className="font-mono font-bold text-[#2D3A2E]">GULLBALAY20</span></p>
                  </div>
                  <button
                    onClick={() => {
                      setOffersModalOpen(false);
                      onOpenBooking();
                    }}
                    className="px-3.5 py-2 rounded-full bg-[#2D3A2E] text-white text-xs font-bold cursor-pointer"
                  >
                    Claim
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E2DDD3] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#2D3A2E] uppercase">GLOW PROMO</span>
                    <h4 className="text-sm font-bold text-[#222421]">Free Lip & Eye Collagen Mask</h4>
                    <p className="text-[11px] text-[#222421]/70">Included with any HydraFacial treatment</p>
                  </div>
                  <button
                    onClick={() => {
                      setOffersModalOpen(false);
                      onOpenBooking();
                    }}
                    className="px-3.5 py-2 rounded-full bg-[#EBD8CD] text-[#222421] font-bold text-xs cursor-pointer"
                  >
                    Claim
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* VIP Membership Perks Modal */}
      <AnimatePresence>
        {membershipModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222421]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full bg-white border border-[#E2DDD3] rounded-3xl p-6 shadow-2xl"
            >
              <button
                onClick={() => setMembershipModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EFEA] text-[#222421] hover:bg-[#EBD8CD] cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Crown size={20} className="text-[#C89B3C]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A2E]">GULL VIP CLUB</span>
              </div>

              <h3 className="text-2xl font-black font-serif text-[#222421] mb-2">VIP Membership Benefits</h3>
              <p className="text-xs text-[#222421]/70 mb-4">Enjoy priority bookings, secret upgrades, complimentary lounge champagne, and year-round discounts.</p>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-2xl bg-[#2D3A2E] text-white space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#EBD8CD]">DIAMOND TIER</span>
                    <span className="text-xs font-bold text-[#EBD8CD]">Rs. 25,000 / Mo</span>
                  </div>
                  <ul className="text-xs text-white/80 space-y-1">
                    <li>✓ 2 Free HydraFacials or Blowouts per Month</li>
                    <li>✓ 15% OFF All Additional Hair & Spa Services</li>
                    <li>✓ Priority Booking & Private Suite Access</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  setMembershipModalOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-2xl bg-[#2D3A2E] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Join VIP Club Now
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
