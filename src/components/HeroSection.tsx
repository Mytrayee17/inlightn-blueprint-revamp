
import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background Placeholder - React Three Fiber integration point */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
        {/* TODO: Add React Three Fiber canvas with drifting low-poly shapes */}
        {/* Shapes: padlocks, code snippets, data points */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline + Subhead */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Immersive Tech Internships for
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
            Tomorrow's Innovators
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Master cutting-edge technologies through hands-on projects and expert mentorship
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2">
            <span className="text-lg font-semibold">Explore Programs</span>
            {/* TODO: Add smooth-scroll to Programs Preview */}
          </button>
          
          <button className="group text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-blue-600 transition-all duration-200 transform hover:scale-105 bg-white/50 backdrop-blur-sm flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span className="text-lg font-semibold">Watch Intro</span>
            {/* TODO: Open modal with Lottie-animated promo video */}
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          {/* TODO: Fade out once user starts scrolling */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
