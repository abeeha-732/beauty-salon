import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS_DATA } from '../data/salonData';
import { Star, Quote, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 md:py-36 lg:py-44 bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE] relative overflow-hidden border-t border-[#CCBEB1]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FFD3AC]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#331C08] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <ShieldCheck size={14} className="text-[#664C36]" />
            <span>VERIFIED VIP CLIENT REVIEWS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-serif text-[#331C08] tracking-tight"
          >
            Loved By <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
              Discerning Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#331C08]/80 font-normal leading-relaxed"
          >
            Read authentic experiences from guests who trust GULL for their red-carpet moments and weekly self-care rituals.
          </motion.p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-[#CCBEB1] relative flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(102,76,54,0.18)] transition-all duration-300"
            >
              <Quote size={32} className="text-[#664C36]/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#664C36] text-[#664C36]" />
                  ))}
                </div>

                <p className="text-sm text-[#331C08] font-normal leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#CCBEB1]/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#664C36]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#331C08] flex items-center gap-1.5">
                      {review.author}
                      {review.verified && <ShieldCheck size={14} className="text-[#664C36]" />}
                    </h3>
                    <p className="text-[10px] text-[#664C36] font-bold">
                      {review.serviceName}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-[#331C08]/60 font-medium">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
