import React from 'react';

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
}

export default function ProgramHero({ title, subtitle, description, icon, gradient }: ProgramHeroProps) {
  const handleApplyNow = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* TODO: Unique background image or 3D canvas per program */}
      {/* TODO: Framer Motion fade-in, parallax on scroll */}
      <div className="relative z-10 text-center py-20 w-full">
        <div className="text-6xl mb-6">{icon}</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-4xl mx-auto">
          {description}
        </p>
        <button 
          onClick={handleApplyNow}
          className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
} 