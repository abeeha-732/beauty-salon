import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TRANSFORMATIONS_DATA } from '../data/salonData';
import { Sparkles, ArrowRight, Award, Scissors, Clock } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface TransformationSectionProps {
  onOpenBooking: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenBooking }) => {
  const [activeTransIndex, setActiveTransIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100

  const currentTrans = TRANSFORMATIONS_DATA[activeTransIndex];

  return (
    <section id="transformations" className="py-24 md:py-36 lg:py-44 bg-gradient-to-b from-[#FAF4EE] via-[#F5EBE1] to-[#FAF4EE] relative overflow-hidden border-t border-[#CCBEB1]">
      
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFD3AC]/40 via-[#F5EBE1]/30 to-[#CCBEB1]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD3AC]/60 border border-[#CCBEB1] text-[#331C08] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Award size={14} className="text-[#664C36]" />
            <span>REAL CLIENT RESULTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-serif text-[#331C08] tracking-tight"
          >
            Before & After <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#664C36] via-[#85654A] to-[#331C08]">
              Master Transformations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#331C08]/80 font-normal leading-relaxed"
          >
            Drag the interactive slider below to inspect the precision color, texture, and radiance achieved in a single salon session.
          </motion.p>
        </div>

        {/* Transformation Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TRANSFORMATIONS_DATA.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTransIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTransIndex === idx
                  ? 'bg-[#664C36] text-white font-extrabold shadow-[0_6px_20px_rgba(102,76,54,0.3)]'
                  : 'bg-white border border-[#CCBEB1] text-[#331C08]/80 hover:bg-[#FFD3AC]/30 hover:text-[#331C08] shadow-sm'
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#CCBEB1] p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
          
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none bg-[#F5EBE1]">
            
            {/* After Image (Background) */}
            <img
              src={currentTrans.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#664C36] text-white font-black text-xs uppercase tracking-widest shadow-lg">
              AFTER
            </span>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentTrans.beforeImage}
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: '100%', height: '100%' }}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#331C08]/90 border border-white/30 text-[#FFD3AC] font-black text-xs uppercase tracking-widest shadow-lg">
                BEFORE
              </span>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-[#FFD3AC] shadow-[0_0_15px_rgba(102,76,54,0.5)] cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#331C08] border-2 border-[#FFD3AC] text-[#FFD3AC] flex items-center justify-center shadow-2xl">
                ↔
              </div>
            </div>

            {/* Interactive Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag before and after comparison slider"
            />
          </div>

          {/* Result Info Banner */}
          <div className="mt-6 p-6 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#664C36] font-bold uppercase tracking-widest">
                STYLIST: {currentTrans.stylistName} • DURATION: {currentTrans.duration}
              </span>
              <h3 className="text-lg font-bold font-serif text-[#331C08] mt-1">
                {currentTrans.title}
              </h3>
              <p className="text-xs text-[#331C08]/75 mt-1">
                {currentTrans.description}
              </p>
            </div>

            <AnimatedButton
              variant="gold-glow"
              size="md"
              icon={Sparkles}
              onClick={onOpenBooking}
            >
              Get This Look
            </AnimatedButton>
          </div>

        </div>

      </div>
    </section>
  );
};
