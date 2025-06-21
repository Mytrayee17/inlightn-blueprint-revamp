import React, { useState, useEffect } from 'react';
import { ArrowDown, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // TODO: Add video background with code/data streams (New Engen style)
  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background (New Engen inspired) */}
      <div className="absolute inset-0 bg-gradient-code">
        {/* TODO: Add looping video of code/data streams */}
        {/* TODO: Dark mode toggle swaps to lighter video */}
        <div className="absolute inset-0 bg-gradient-to-br from-inlighn-primary/20 via-inlighn-secondary/20 to-inlighn-accent/20"></div>
      </div>

      {/* Split Layout (Eduard Bodak inspired) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Headline with tight letter-spacing (Micro inspired) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              
              <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
                 Bridge the Gap  Between Academic
              </span>
              <span className="block text-slate-700 dark:text-slate-200">
                Learning and
              </span>
              <span className="block text-inlighn-primary">
                Industry Needs
              </span>
            </h1>
            
            {/* Subhead with fade-slide-up animation */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-slide-up">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. 
              Master cutting-edge technologies through hands-on projects and expert mentorship.
            </p>

            {/* CTA Buttons with ripple effect (New Engen inspired) */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/programs" className="group relative overflow-hidden bg-gradient-to-r from-inlighn-primary to-inlighn-secondary text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="relative z-10 flex items-center space-x-2 text-lg font-semibold">
                  <span>Explore Programs</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                {/* TODO: Add ripple effect on click */}
                <div className="absolute inset-0 bg-gradient-to-r from-inlighn-secondary to-inlighn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link to="/contact" className="group relative overflow-hidden text-slate-700 dark:text-slate-200 hover:text-inlighn-primary px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-inlighn-primary transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <span className="relative z-10 flex items-center space-x-2 text-lg font-semibold">
                  <Play className="w-5 h-5" />
                  <span>Get Started</span>
                </span>
                {/* TODO: Add ripple effect on click */}
              </Link>
            </div>

            {/* Stats with count-up animation */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-inlighn-primary mb-2">
                  <span className="count-up" data-target="95">98</span>%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-inlighn-secondary mb-2">
                  <span className="count-up" data-target="500">1567</span>+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-inlighn-accent mb-2">
                  <span className="count-up" data-target="9">99</span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Programs</div>
              </div>
            </div>
          </div>

          {/* Right: E-Learning App Image */}
          <div className="relative h-full flex items-center justify-center">
            {/* Device frame mask */}
            <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-slate-100 dark:from-slate-800 to-slate-200 dark:to-slate-700 rounded-3xl p-2 shadow-2xl">
              {/* E-Learning App Image Container */}
              <div className="w-full h-full bg-gradient-to-br from-inlighn-primary/10 to-inlighn-secondary/10 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.ctfassets.net/xri6xnn81z4a/5aXtYuOYClNeEEe02Hzr7w/bdd9928ff3760cee5978b5c26d461190/e-learning_app.jpg"
                  alt="E-Learning App Interface"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating elements around the device */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-inlighn-accent to-inlighn-primary rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-inlighn-secondary to-inlighn-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
};

export default HeroSection;
