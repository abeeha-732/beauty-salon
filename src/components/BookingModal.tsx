import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, CheckCircle2, Sparkles, Phone, Mail, FileText, ArrowRight, ArrowLeft, ShieldCheck, Copy, Check } from 'lucide-react';
import { Service, Stylist, BookingState } from '../types';
import { SERVICES_DATA, STYLISTS_DATA } from '../data/salonData';
import { AnimatedButton } from './AnimatedButton';
import { formatPKR } from '../utils/formatters';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: Service | null;
  preSelectedStylist?: Stylist | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedStylist,
}) => {
  const [booking, setBooking] = useState<BookingState>({
    isOpen: true,
    selectedService: preSelectedService || SERVICES_DATA[0],
    selectedStylist: preSelectedStylist || STYLISTS_DATA[0],
    selectedDate: '2026-08-12',
    selectedTime: '10:00 AM',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
    step: 1,
  });

  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setBooking((prev) => ({ ...prev, selectedService: preSelectedService }));
    }
    if (preSelectedStylist) {
      setBooking((prev) => ({ ...prev, selectedStylist: preSelectedStylist }));
    }
  }, [preSelectedService, preSelectedStylist]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const nextDates = [
    { day: 'Wed', date: 'Aug 12', iso: '2026-08-12' },
    { day: 'Thu', date: 'Aug 13', iso: '2026-08-13' },
    { day: 'Fri', date: 'Aug 14', iso: '2026-08-14' },
    { day: 'Sat', date: 'Aug 15', iso: '2026-08-15' },
    { day: 'Sun', date: 'Aug 16', iso: '2026-08-16' },
  ];

  const handleConfirmBooking = () => {
    const randomCode = 'GULL-' + Math.floor(100000 + Math.random() * 900000);
    setBooking((prev) => ({
      ...prev,
      step: 5,
      confirmationCode: randomCode,
    }));
  };

  const copyCode = () => {
    if (booking.confirmationCode) {
      navigator.clipboard.writeText(booking.confirmationCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#331C08]/60 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-2xl w-full bg-white border border-[#CCBEB1] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-[#331C08]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/80 text-[#331C08] hover:text-[#664C36] border border-[#CCBEB1] z-20 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Step Progress Tracker */}
        {booking.step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-[#664C36] uppercase tracking-widest mb-2">
              <span>BOOKING STEP {booking.step} OF 4</span>
              <span>
                {booking.step === 1 && 'Select Service'}
                {booking.step === 2 && 'Select Stylist'}
                {booking.step === 3 && 'Choose Date & Time'}
                {booking.step === 4 && 'Your Details'}
              </span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    s <= booking.step ? 'bg-[#664C36]' : 'bg-[#CCBEB1]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: Select Service */}
        {booking.step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#331C08]">Select Your Treatment</h3>
            
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {SERVICES_DATA.map((service) => {
                const isSelected = booking.selectedService?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedService: service }))}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#FFD3AC]/40 border-[#664C36] text-[#331C08] shadow-sm'
                        : 'bg-white border-[#CCBEB1] text-[#331C08]/80 hover:border-[#664C36]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-[#664C36] uppercase font-bold tracking-widest">
                        {service.category}
                      </span>
                      <h4 className="text-base font-bold text-[#331C08]">{service.name}</h4>
                      <p className="text-xs text-[#331C08]/70 flex items-center gap-1 mt-0.5">
                        <Clock size={12} className="text-[#664C36]" /> {service.durationMinutes} Minutes
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-black font-serif text-[#664C36]">{formatPKR(service.price)}</span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#664C36] text-white flex items-center justify-center mt-1 ml-auto">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <AnimatedButton
              variant="gold-glow"
              size="lg"
              fullWidth
              icon={ArrowRight}
              onClick={() => setBooking((prev) => ({ ...prev, step: 2 }))}
            >
              Continue to Select Stylist
            </AnimatedButton>
          </div>
        )}

        {/* STEP 2: Select Stylist */}
        {booking.step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#331C08]">Choose Your Master Stylist</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STYLISTS_DATA.map((stylist) => {
                const isSelected = booking.selectedStylist?.id === stylist.id;
                return (
                  <div
                    key={stylist.id}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedStylist: stylist }))}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#FFD3AC]/40 border-[#664C36] text-[#331C08] shadow-sm'
                        : 'bg-white border-[#CCBEB1] text-[#331C08]/80 hover:border-[#664C36]'
                    }`}
                  >
                    <img
                      src={stylist.avatar}
                      alt={stylist.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#664C36]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#331C08]">{stylist.name}</h4>
                      <p className="text-[10px] text-[#664C36] font-semibold">{stylist.title}</p>
                      <span className="text-[10px] text-[#664C36] font-bold">★ {stylist.rating} Rating</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setBooking((prev) => ({ ...prev, step: 1 }))}
                className="p-3.5 rounded-full bg-white text-[#331C08] hover:bg-[#FFD3AC]/30 border border-[#CCBEB1] cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>

              <AnimatedButton
                variant="gold-glow"
                size="lg"
                fullWidth
                icon={ArrowRight}
                onClick={() => setBooking((prev) => ({ ...prev, step: 3 }))}
              >
                Continue to Date & Time
              </AnimatedButton>
            </div>
          </div>
        )}

        {/* STEP 3: Choose Date & Time */}
        {booking.step === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#331C08]">Select Date & Preferred Time</h3>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#664C36] block mb-3">AVAILABLE DATES:</label>
              <div className="grid grid-cols-5 gap-2">
                {nextDates.map((d) => (
                  <button
                    key={d.iso}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedDate: d.iso }))}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      booking.selectedDate === d.iso
                        ? 'bg-[#664C36] text-white font-black border-[#664C36]'
                        : 'bg-white border-[#CCBEB1] text-[#331C08]/80 hover:bg-[#FFD3AC]/30'
                    }`}
                  >
                    <span className="text-[10px] uppercase block font-bold">{d.day}</span>
                    <span className="text-xs font-bold">{d.date.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#664C36] block mb-3">AVAILABLE TIME SLOTS:</label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setBooking((prev) => ({ ...prev, selectedTime: t }))}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      booking.selectedTime === t
                        ? 'bg-[#664C36] text-white border-[#664C36]'
                        : 'bg-white border-[#CCBEB1] text-[#331C08]/80 hover:bg-[#FFD3AC]/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setBooking((prev) => ({ ...prev, step: 2 }))}
                className="p-3.5 rounded-full bg-white text-[#331C08] hover:bg-[#FFD3AC]/30 border border-[#CCBEB1] cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>

              <AnimatedButton
                variant="gold-glow"
                size="lg"
                fullWidth
                icon={ArrowRight}
                onClick={() => setBooking((prev) => ({ ...prev, step: 4 }))}
              >
                Continue to Guest Info
              </AnimatedButton>
            </div>
          </div>
        )}

        {/* STEP 4: Guest Contact Details */}
        {booking.step === 4 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-serif text-[#331C08]">Your Guest Details</h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#331C08] block mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Victoria Sterling"
                  value={booking.clientName}
                  onChange={(e) => setBooking((prev) => ({ ...prev, clientName: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#CCBEB1] text-[#331C08] text-sm focus:outline-none focus:border-[#664C36]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#331C08] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="victoria@example.com"
                    value={booking.clientEmail}
                    onChange={(e) => setBooking((prev) => ({ ...prev, clientEmail: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#CCBEB1] text-[#331C08] text-sm focus:outline-none focus:border-[#664C36]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#331C08] block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+92 300 8452872"
                    value={booking.clientPhone}
                    onChange={(e) => setBooking((prev) => ({ ...prev, clientPhone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#CCBEB1] text-[#331C08] text-sm focus:outline-none focus:border-[#664C36]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#331C08] block mb-1">Special Preferences / Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive scalp, tea preference, or bridal inquiry..."
                  value={booking.notes}
                  onChange={(e) => setBooking((prev) => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#CCBEB1] text-[#331C08] text-sm focus:outline-none focus:border-[#664C36]"
                />
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-[#FAF4EE] border border-[#CCBEB1] text-xs text-[#331C08] flex justify-between items-center">
              <div>
                <p className="font-bold">{booking.selectedService?.name}</p>
                <p className="text-[#331C08]/70">{booking.selectedDate} at {booking.selectedTime} with {booking.selectedStylist?.name}</p>
              </div>
              <span className="text-lg font-black text-[#664C36]">{booking.selectedService && formatPKR(booking.selectedService.price)}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setBooking((prev) => ({ ...prev, step: 3 }))}
                className="p-3.5 rounded-full bg-white text-[#331C08] hover:bg-[#FFD3AC]/30 border border-[#CCBEB1] cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>

              <AnimatedButton
                variant="gold-glow"
                size="lg"
                fullWidth
                icon={Sparkles}
                disabled={!booking.clientName || !booking.clientEmail}
                onClick={handleConfirmBooking}
              >
                Confirm & Reserve Appointment
              </AnimatedButton>
            </div>
          </div>
        )}

        {/* STEP 5: Confirmation Pass Ticket */}
        {booking.step === 5 && (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFD3AC]/60 border border-[#664C36] text-[#664C36] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#664C36] uppercase tracking-widest">APPOINTMENT RESERVED</span>
              <h3 className="text-3xl font-black font-serif text-[#331C08]">We Look Forward To Pampering You!</h3>
              <p className="text-xs text-[#331C08]/70">A confirmation receipt has been dispatched to {booking.clientEmail}</p>
            </div>

            {/* Confirmation Pass Ticket Box */}
            <div className="p-6 rounded-3xl bg-[#FAF4EE] border border-[#CCBEB1] text-left space-y-4 relative">
              <div className="flex items-center justify-between border-b border-[#CCBEB1] pb-4">
                <div>
                  <span className="text-[10px] text-[#331C08]/60 uppercase tracking-widest font-bold">CONFIRMATION CODE</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-mono font-bold text-[#664C36]">{booking.confirmationCode}</span>
                    <button
                      onClick={copyCode}
                      className="p-1.5 rounded-lg bg-white border border-[#CCBEB1] text-[#664C36] hover:bg-[#FFD3AC]/40 transition-colors cursor-pointer"
                      title="Copy Code"
                    >
                      {copiedCode ? <Check size={14} className="text-[#664C36]" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#331C08]/60 uppercase tracking-widest font-bold">TOTAL DUE</span>
                  <p className="text-lg font-black font-serif text-[#664C36]">{booking.selectedService && formatPKR(booking.selectedService.price)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#331C08]/60 font-bold block">SERVICE</span>
                  <span className="text-[#331C08] font-semibold">{booking.selectedService?.name}</span>
                </div>
                <div>
                  <span className="text-[#331C08]/60 font-bold block">MASTER STYLIST</span>
                  <span className="text-[#331C08] font-semibold">{booking.selectedStylist?.name}</span>
                </div>
                <div>
                  <span className="text-[#331C08]/60 font-bold block">DATE & TIME</span>
                  <span className="text-[#331C08] font-semibold">{booking.selectedDate} @ {booking.selectedTime}</span>
                </div>
                <div>
                  <span className="text-[#331C08]/60 font-bold block">GUEST</span>
                  <span className="text-[#331C08] font-semibold">{booking.clientName}</span>
                </div>
              </div>

            </div>

            <AnimatedButton
              variant="gold-glow"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Done & Return to Site
            </AnimatedButton>
          </div>
        )}

      </motion.div>
    </div>
  );
};
