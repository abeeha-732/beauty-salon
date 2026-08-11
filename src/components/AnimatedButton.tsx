import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { LucideIcon, ArrowRight, Sparkles } from 'lucide-react';

export type ButtonVariant = 
  | 'gold-glow' 
  | 'jewel-emerald' 
  | 'velvet-plum' 
  | 'glass-outline' 
  | 'magnetic-dark'
  | 'border-beam';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  showSparkle?: boolean;
  showShimmer?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'gold-glow',
  size = 'md',
  icon: Icon = ArrowRight,
  iconPosition = 'right',
  showSparkle = false,
  showShimmer = true,
  fullWidth = false,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  // Size mapping
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-wider gap-2 rounded-full',
    md: 'px-6 py-3 text-sm tracking-wider gap-2.5 rounded-full',
    lg: 'px-8 py-4 text-base tracking-wider gap-3 rounded-full font-medium',
    xl: 'px-10 py-5 text-lg tracking-wider gap-3.5 rounded-full font-semibold',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 22,
  }[size];

  // Variant styling mapping with high color combinations matching Figma color palette
  const variantClasses = {
    'gold-glow': 'bg-[#664C36] hover:bg-[#331C08] text-white font-semibold shadow-[0_6px_25px_rgba(102,76,54,0.35)] hover:shadow-[0_8px_30px_rgba(51,28,8,0.45)] border border-[#CCBEB1]/50',
    'jewel-emerald': 'bg-gradient-to-r from-[#664C36] via-[#806147] to-[#664C36] text-white font-semibold shadow-[0_6px_25px_rgba(102,76,54,0.35)] border border-[#FFD3AC]/50',
    'velvet-plum': 'bg-[#FFD3AC]/60 hover:bg-[#FFD3AC] text-[#331C08] font-bold shadow-sm border border-[#CCBEB1]',
    'glass-outline': 'bg-white/90 backdrop-blur-md text-[#331C08] border border-[#CCBEB1] hover:bg-[#FAF4EE] hover:border-[#664C36] hover:text-[#664C36] shadow-sm',
    'magnetic-dark': 'bg-[#331C08] text-white border border-[#664C36] hover:bg-[#4A2B10] shadow-md',
    'border-beam': 'relative bg-white text-[#664C36] border border-[#CCBEB1] hover:bg-[#FAF4EE] shadow-[0_0_20px_rgba(255,211,172,0.4)]',
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.04, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative inline-flex items-center justify-center 
        uppercase transition-all duration-300 select-none overflow-hidden cursor-pointer
        ${sizeClasses}
        ${variantClasses}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Animated Shimmer Light Sweep Effect */}
      {showShimmer && !disabled && (
        <span className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </span>
      )}

      {/* Sparkle Icon if requested */}
      {showSparkle && (
        <motion.span
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative z-20 text-amber-300"
        >
          <Sparkles size={iconSizes} />
        </motion.span>
      )}

      {/* Left Icon */}
      {Icon && iconPosition === 'left' && (
        <motion.span
          className="relative z-20 transition-transform duration-300 group-hover:-translate-x-1"
        >
          <Icon size={iconSizes} />
        </motion.span>
      )}

      {/* Button Content Label */}
      <span className="relative z-20 whitespace-nowrap drop-shadow-sm flex items-center gap-2">
        {children}
      </span>

      {/* Right Icon */}
      {Icon && iconPosition === 'right' && (
        <motion.span
          className="relative z-20 transition-transform duration-300 group-hover:translate-x-1.5"
        >
          <Icon size={iconSizes} />
        </motion.span>
      )}

      {/* Subtle Glow Particle Overlay */}
      <span className="absolute inset-0 z-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
    </motion.button>
  );
};
