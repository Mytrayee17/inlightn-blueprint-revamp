import React from 'react';

export default function ProgramsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-inlighn-primary via-inlighn-secondary to-inlighn-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-inlighn-accent to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-white to-inlighn-accent rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow text */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="text-sm font-medium text-white/80">Transform Your Career</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-inlighn-accent to-white bg-clip-text text-transparent">
            Launch Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-inlighn-accent via-yellow-400 to-inlighn-accent bg-clip-text text-transparent">
            Tech Career
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Master in-demand skills through our intensive internship programs. 
          Work on real projects, learn from industry experts, and land your dream job.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-inlighn-accent to-yellow-500 text-inlighn-dark font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Explore Programs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-inlighn-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50">
            <span className="flex items-center gap-2">
              <span>Watch Demo</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Graduates Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/60">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">9</div>
            <div className="text-white/60">Programs Available</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 