import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';

interface QuickBookFloatingButtonProps {
  onOpenBooking: () => void;
}

export const QuickBookFloatingButton: React.FC<QuickBookFloatingButtonProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenBooking}
            className="group relative px-5 py-3.5 rounded-full bg-[#664C36] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-[0_8px_30px_rgba(102,76,54,0.4)] border border-[#FFD3AC] cursor-pointer overflow-hidden"
          >
            {/* Pulsing ring behind */}
            <span className="absolute inset-0 rounded-full bg-[#FFD3AC]/40 animate-ping -z-10" />

            {/* Shimmer sweep */}
            <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <Calendar size={18} className="text-[#FFD3AC]" />
            <span className="drop-shadow-sm font-extrabold tracking-wider">Instant Book</span>
            <Sparkles size={14} className="text-[#FFD3AC] animate-pulse" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
