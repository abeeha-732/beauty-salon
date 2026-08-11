import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOOKBOOK_DATA } from '../data/salonData';
import { LookbookItem, ServiceCategory } from '../types';
import { Heart, Sparkles, Eye, X, Share2, Bookmark } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface LookbookSectionProps {
  onOpenBooking: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<LookbookItem | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    LOOKBOOK_DATA.forEach((item) => {
      initial[item.id] = item.likes;
    });
    return initial;
  });

  const categories: ServiceCategory[] = ['All', 'Hair & Balayage', 'Skin & Facial', 'Nail Artistry', 'Bridal & Gala'];

  const filteredItems = activeCategory === 'All'
    ? LOOKBOOK_DATA
    : LOOKBOOK_DATA.filter((i) => i.category === activeCategory);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="lookbook" className="py-24 md:py-36 lg:py-44 bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#331C08] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles size={14} className="text-[#664C36]" />
            <span>EDITORIAL GALLERY & STYLE LOOKBOOK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-serif text-[#331C08] tracking-tight"
          >
            Trending <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
              Style Inspiration
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#331C08]/80 font-normal leading-relaxed"
          >
            Explore real creations direct from our styling chairs. Tap any image for high-resolution details.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#664C36] text-white font-black shadow-[0_6px_20px_rgba(102,76,54,0.3)]'
                  : 'bg-white border border-[#CCBEB1] text-[#331C08]/80 hover:bg-[#FFD3AC]/30 hover:text-[#331C08] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -6 }}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#CCBEB1] shadow-xl cursor-pointer aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#331C08]/80 via-[#331C08]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Bar inside Card */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 border border-[#CCBEB1] text-[10px] font-bold text-[#664C36] backdrop-blur-md shadow-sm">
                  {item.category}
                </span>

                <button
                  onClick={(e) => handleLike(item.id, e)}
                  className="px-3 py-1 rounded-full bg-white/90 border border-[#CCBEB1] text-[#331C08] text-xs font-bold flex items-center gap-1.5 backdrop-blur-md hover:bg-[#FFD3AC] transition-colors"
                >
                  <Heart size={13} className="fill-[#664C36] text-[#664C36]" />
                  <span>{likesMap[item.id] || item.likes}</span>
                </button>
              </div>

              {/* Bottom Label inside Card */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-[10px] text-[#FFD3AC] font-bold uppercase tracking-widest">
                  STYLIST: {item.stylistName}
                </p>
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#FFD3AC] transition-colors mt-0.5">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#331C08]/60 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white border border-[#CCBEB1] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#331C08] hover:text-[#664C36] border border-[#CCBEB1] cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-square md:aspect-auto bg-[#F5EBE1]">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#664C36] text-xs font-bold uppercase">
                    {lightboxItem.category}
                  </span>

                  <h3 className="text-3xl font-black font-serif text-[#331C08] mt-4">
                    {lightboxItem.title}
                  </h3>

                  <p className="text-xs text-[#331C08]/80 mt-2">
                    Crafted by Lead Artist <span className="text-[#664C36] font-bold">{lightboxItem.stylistName}</span>
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {lightboxItem.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FAF4EE] border border-[#CCBEB1] text-[#664C36]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#331C08]/70 border-t border-[#CCBEB1]/50 pt-4">
                    <span>❤️ {likesMap[lightboxItem.id]} Client Approvals</span>
                    <span>100% Verified Salon Creation</span>
                  </div>

                  <AnimatedButton
                    variant="gold-glow"
                    size="lg"
                    fullWidth
                    icon={Sparkles}
                    onClick={() => {
                      setLightboxItem(null);
                      onOpenBooking();
                    }}
                  >
                    Request Similar Style
                  </AnimatedButton>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
