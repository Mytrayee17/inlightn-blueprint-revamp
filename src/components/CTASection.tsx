import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary text-white overflow-hidden">
      {/* 3D Texture Background Placeholder */}
      <div className="absolute inset-0 opacity-20">
        {/* TODO: Add 3D texture background */}
        <div className="w-full h-full bg-gradient-to-br from-inlighn-dark/30 to-inlighn-secondary/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* CTA Content */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Bridge the Gap?
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of students who have already started their journey to success. 
          Your future in tech starts with a single step towards industry-ready skills.
        </p>

        {/* Pulsing CTA Button */}
        <Link to="/contact" className="group bg-gradient-to-r from-inlighn-accent to-yellow-500 text-inlighn-dark px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-inlighn-accent transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto animate-pulse">
          <span className="text-lg font-semibold">Get Started Today</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          {/* TODO: Add pulse animation every 5 seconds */}
        </Link>

        {/* Supporting Text */}
        <p className="text-white/60 mt-6">
          No application fee • Start immediately • Industry-focused curriculum
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-inlighn-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTASection;
