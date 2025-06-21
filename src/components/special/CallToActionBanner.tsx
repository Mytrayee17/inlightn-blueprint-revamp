import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallToActionBanner() {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  const handleScheduleCall = () => {
    // Open contact page or scroll to contact section
    navigate('/contact');
  };

  return (
    <section className="bg-gradient-to-br from-inlighn-accent via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              Ready to Learn the{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Inlighn Way?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a rewarding tech career with our unique, hands-on learning model that goes beyond traditional education.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleExplorePrograms}
              className="group bg-white text-inlighn-accent px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <span className="flex items-center space-x-2">
                <span>Explore All Programs</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
            <button 
              onClick={handleScheduleCall}
              className="group border-2 border-white/50 hover:border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>Schedule a Call</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">📞</span>
              </span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-gray-200 mb-6">Trusted by students from top universities</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/70 font-semibold">IIT Delhi</div>
              <div className="text-white/70 font-semibold">BITS Pilani</div>
              <div className="text-white/70 font-semibold">NIT Trichy</div>
              <div className="text-white/70 font-semibold">DTU</div>
              <div className="text-white/70 font-semibold">NSIT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 