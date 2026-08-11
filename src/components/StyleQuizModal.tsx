import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { Service } from '../types';
import { AnimatedButton } from './AnimatedButton';
import { formatPKR } from '../utils/formatters';

interface StyleQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: Service) => void;
}

export const StyleQuizModal: React.FC<StyleQuizModalProps> = ({ isOpen, onClose, onSelectService }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');
  const [vibe, setVibe] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setTime('');
    setVibe('');
  };

  // Basic recommendation logic
  const getRecommendedService = (): Service => {
    if (goal === 'skin') return SERVICES_DATA[3]; // Diamond Facial
    if (goal === 'nails') return SERVICES_DATA[5]; // Velvet Chrome Gel
    if (goal === 'spa') return SERVICES_DATA[7]; // Aromatherapy
    if (goal === 'bridal') return SERVICES_DATA[8]; // Royal Bridal
    return SERVICES_DATA[0]; // Balayage default
  };

  const recommended = getRecommendedService();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#331C08]/60 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-xl w-full bg-white border border-[#CCBEB1] rounded-3xl p-8 shadow-2xl overflow-hidden text-[#331C08]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/80 text-[#331C08] hover:text-[#664C36] border border-[#CCBEB1] cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-[#664C36]' : 'bg-[#CCBEB1]/40'
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#664C36] uppercase tracking-widest">STEP 1 OF 3</span>
              <h3 className="text-2xl font-bold font-serif text-[#331C08]">What is your main aesthetic goal today?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'hair', label: 'Dimensional Hair Color & Balayage' },
                { id: 'skin', label: 'Glass Skin & Hydra Facial Glow' },
                { id: 'nails', label: 'Velvet Chrome Nail Artistry' },
                { id: 'spa', label: 'Deep Relaxation & Spa Therapy' },
                { id: 'bridal', label: 'Gala & Bridal VIP Transformation' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setGoal(opt.id);
                    setStep(2);
                  }}
                  className="p-4 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-left text-xs font-semibold text-[#331C08] hover:border-[#664C36] hover:bg-[#FFD3AC]/40 transition-all cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#664C36] uppercase tracking-widest">STEP 2 OF 3</span>
              <h3 className="text-2xl font-bold font-serif text-[#331C08]">How much time do you have reserved?</h3>
            </div>

            <div className="space-y-3">
              {[
                { id: 'quick', label: 'Express Refresh (45 - 60 Mins)' },
                { id: 'signature', label: 'Signature Transformation (90 - 150 Mins)' },
                { id: 'full-day', label: 'Half-Day VIP Spa Retreat (3+ Hours)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTime(opt.id);
                    setStep(3);
                  }}
                  className="w-full p-4 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-left text-xs font-semibold text-[#331C08] hover:border-[#664C36] hover:bg-[#FFD3AC]/40 transition-all cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold text-[#664C36] uppercase tracking-widest">STEP 3 OF 3</span>
              <h3 className="text-2xl font-bold font-serif text-[#331C08]">What vibe best describes you?</h3>
            </div>

            <div className="space-y-3">
              {[
                { id: 'editorial', label: 'Red Carpet High-Fashion & Glamour' },
                { id: 'natural', label: 'Effortless Sun-Kissed Parisian Chic' },
                { id: 'bold', label: 'Modern Edgy & Statement Chrome' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setVibe(opt.id);
                    setStep(4);
                  }}
                  className="w-full p-4 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-left text-xs font-semibold text-[#331C08] hover:border-[#664C36] hover:bg-[#FFD3AC]/40 transition-all cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#664C36] p-0.5 mx-auto shadow-md">
              <div className="w-full h-full bg-[#FAF4EE] rounded-full flex items-center justify-center text-[#664C36]">
                <Sparkles size={28} />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#664C36]">PERFECT MATCH FOUND!</span>
              <h3 className="text-2xl font-black font-serif text-[#331C08]">{recommended.name}</h3>
              <p className="text-[#664C36] text-lg font-black font-serif">{formatPKR(recommended.price)}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-left text-xs text-[#331C08]">
              <p className="leading-relaxed">{recommended.description}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleReset}
                className="p-3.5 rounded-full bg-white text-[#331C08] hover:bg-[#FFD3AC]/30 border border-[#CCBEB1] cursor-pointer"
                title="Retake Quiz"
              >
                <RotateCcw size={16} />
              </button>

              <AnimatedButton
                variant="gold-glow"
                size="md"
                fullWidth
                icon={Calendar}
                onClick={() => {
                  onClose();
                  onSelectService(recommended);
                }}
              >
                Book Recommended Service
              </AnimatedButton>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};
