import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactHero() {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  const handleScheduleCall = () => {
    // Scroll to the contact form section
    const contactForm = document.querySelector('[data-section="contact-form"]');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-inlighn-accent rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Let's{' '}
              <span className="bg-gradient-to-r from-inlighn-accent to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Got a question? Reach out to our team. We're here to help you succeed in your tech journey.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleExplorePrograms}
              className="bg-inlighn-accent hover:bg-inlighn-accent-dark px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </button>
            <button 
              onClick={handleScheduleCall}
              className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Schedule a Call
            </button>
          </div>
          
          {/* Contact info preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-sm text-gray-300">Email us anytime</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm text-gray-300">Call us directly</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-sm text-gray-300">Live chat support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 