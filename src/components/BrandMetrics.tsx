import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Scissors, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const BrandMetrics: React.FC = () => {
  const metrics = [
    {
      label: 'Years of Haute Artistry',
      value: '12+',
      icon: Award,
      accent: 'from-amber-400 to-yellow-600',
      description: 'Master stylists trained across Paris, Milan & Tokyo',
    },
    {
      label: 'Delighted VIP Clients',
      value: '18,500+',
      icon: Users,
      accent: 'from-rose-500 to-pink-600',
      description: '98% return rate & verified client satisfaction',
    },
    {
      label: 'Bespoke Treatments',
      value: '45+',
      icon: Scissors,
      accent: 'from-emerald-400 to-teal-600',
      description: 'Custom formulated hair, skin & nail therapies',
    },
    {
      label: 'Excellence Rating',
      value: '4.98★',
      icon: Sparkles,
      accent: 'from-purple-500 to-indigo-600',
      description: 'Over 1,800+ five-star Google & Yelp reviews',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F5EBE1] via-[#FAF4EE] to-[#F5EBE1] border-y border-[#CCBEB1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-3xl bg-white border border-[#CCBEB1] shadow-xl group hover:border-[#664C36] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#664C36] p-0.5 shadow-md mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#FAF4EE] rounded-2xl flex items-center justify-center text-[#664C36]">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="text-4xl lg:text-5xl font-black font-serif text-[#331C08] mb-2">
                  {metric.value}
                </div>

                <h3 className="text-base font-bold text-[#331C08] tracking-wide mb-1">
                  {metric.label}
                </h3>

                <p className="text-xs text-[#331C08]/75 font-normal leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
