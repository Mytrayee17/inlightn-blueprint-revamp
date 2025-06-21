
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
      {/* 3D Texture Background Placeholder */}
      <div className="absolute inset-0 opacity-20">
        {/* TODO: Add 3D texture background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* CTA Content */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Career?
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of students who have already started their journey to success. 
          Your future in tech starts with a single step.
        </p>

        {/* Pulsing CTA Button */}
        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto animate-pulse">
          <span className="text-lg font-semibold">Apply Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          {/* TODO: Add pulse animation every 5 seconds */}
        </button>

        {/* Supporting Text */}
        <p className="text-slate-400 mt-6">
          No application fee • Start immediately • Money-back guarantee
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTASection;
