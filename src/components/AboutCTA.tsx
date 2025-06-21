import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  // Pulse animation every 5 seconds (New Engen inspired)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleViewPrograms = () => {
    // TODO: Scroll to Programs page
    window.location.href = '/programs';
  };

  return (
    <div className="py-24 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Parallax texture background (Eduard Bodak inspired) */}
      <div className="absolute inset-0 opacity-10">
        {/* TODO: Add parallax texture with subtle movement */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Ready to shape the
            <span className="block bg-gradient-to-r from-inlighn-accent to-yellow-300 bg-clip-text text-transparent">
              future with us?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Join thousands of students who have already taken the leap into tech. 
            Your future in technology starts here.
          </p>

          {/* CTA Button with pulse animation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleViewPrograms}
              className={`group relative overflow-hidden bg-gradient-to-r from-purple-800 to-yellow-600 text-white px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold text-lg ${
                isPulsing ? 'animate-pulse' : ''
              }`}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>View Programs</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              {/* TODO: Add ripple effect on press (New Engen) */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              <span>Schedule a Call</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-gray-300">
            <p className="text-lg mb-4">
              Next cohort starts in <span className="font-bold text-white">30 days</span>
            </p>
            <p className="text-sm opacity-80">
              Limited spots available • No upfront payment required
            </p>
          </div>
        </div>
      </div>

      {/* TODO: Add scroll behavior for smooth navigation */}
      {/* TODO: Integrate with analytics tracking */}
    </div>
  );
};

export default AboutCTA; 