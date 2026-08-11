import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, Send, Check } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const ContactFooter: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#FAF4EE] text-[#331C08] pt-24 pb-12 border-t border-[#CCBEB1] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#FFD3AC]/30 via-[#F5EBE1]/20 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#CCBEB1]/60">
          
          {/* Brand & Vision */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#664C36] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#FAF4EE] rounded-full flex items-center justify-center">
                  <Sparkles size={18} className="text-[#664C36]" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-[0.2em] text-[#331C08] font-serif">
                GULL
              </span>
            </div>

            <p className="text-xs text-[#331C08]/80 font-normal leading-relaxed max-w-sm">
              An expansive sanctuary of haute hair color, bespoke balayage, diamond skin therapies, and high-fashion nail artistry in the heart of Lahore.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#CCBEB1] flex items-center justify-center text-[#664C36] hover:bg-[#FFD3AC] transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#CCBEB1] flex items-center justify-center text-[#664C36] hover:bg-[#FFD3AC] transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#664C36]">EXPLORE</h4>
            <ul className="space-y-2 text-xs font-medium text-[#331C08]/80">
              <li><a href="#services" className="hover:text-[#664C36] transition-colors">Services & Pricing</a></li>
              <li><a href="#transformations" className="hover:text-[#664C36] transition-colors">Before & After</a></li>
              <li><a href="#stylists" className="hover:text-[#664C36] transition-colors">Master Stylists</a></li>
              <li><a href="#lookbook" className="hover:text-[#664C36] transition-colors">Style Lookbook</a></li>
              <li><a href="#reviews" className="hover:text-[#664C36] transition-colors">VIP Reviews</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#664C36]">HOURS & SANCTUARY</h4>
            <div className="space-y-3 text-xs text-[#331C08]/80">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#664C36] shrink-0 mt-0.5" />
                <span>M.M. Alam Road, Block C2, Gulberg III, Lahore, Pakistan</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#664C36] shrink-0" />
                <a href="tel:+923008452872" className="hover:text-[#664C36] font-bold">+92 300 8452872 • (042) 3578 2872</a>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#664C36] shrink-0 mt-0.5" />
                <span>Mon - Sat: 10:00 AM - 9:00 PM <br />Sunday: 11:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>

          {/* VIP Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#664C36]">VIP CLUB ACCESS</h4>
            <p className="text-xs text-[#331C08]/80 leading-relaxed">
              Subscribe for private invitations to seasonal beauty launches, secret gift upgrades, and master tips.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#CCBEB1] text-xs text-[#331C08] placeholder-[#331C08]/50 focus:outline-none focus:border-[#664C36]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded-xl bg-[#664C36] text-white font-bold hover:bg-[#331C08] transition-colors cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </div>

              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] text-[#664C36] font-bold flex items-center gap-1"
                >
                  <Check size={12} /> You are on the VIP Invitation list!
                </motion.p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#331C08]/60 gap-4">
          <p>© 2026 GULL Luxury Beauty & Hair Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#331C08]">Privacy Policy</a>
            <a href="#" className="hover:text-[#331C08]">Terms of Service</a>
            <a href="#" className="hover:text-[#331C08]">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
