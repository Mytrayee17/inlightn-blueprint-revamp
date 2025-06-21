import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTimeline = () => {
    // TODO: Implement smooth scroll to TimelineSection
    const timelineSection = document.getElementById('timeline-section');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: Brand-blue gradient overlay (New Engen inspired) */}
      <div className="absolute inset-0 bg-gradient-to-br from-inlighn-primary via-inlighn-secondary to-inlighn-accent">
        {/* TODO: Add parallax layers on mouse-move (Eduard Bodak) */}
        {/* TODO: Add static hero image fallback for low-power devices */}
        <div className="absolute inset-0 bg-gradient-to-br from-inlighn-primary/80 via-inlighn-secondary/80 to-inlighn-accent/80"></div>
      </div>

      {/* Split Layout: Left text, Right parallax/3D canvas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left: Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Title with specified typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              We Provide Best Industry Services For You
            </h1>
            
            {/* Subtitle: Inlighn's mission statement */}
            <p className="text-xl md:text-2xl lg:text-3xl text-inlighn-neutral-100 leading-relaxed">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Cyber Security, Full Stack Development, Data Science, and Project Management.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={scrollToTimeline}
                className="group relative overflow-hidden bg-white text-inlighn-primary px-8 py-4 rounded-xl hover:bg-inlighn-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 text-lg font-semibold flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
                </span>
                {/* TODO: Add ripple effect on click (New Engen) */}
                <div className="absolute inset-0 bg-gradient-to-r from-inlighn-neutral-50 to-inlighn-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right: Parallax/3D Canvas */}
          <div className="relative h-full flex items-center justify-center">
            {/* Canvas Container with parallax effect */}
            <div className="relative w-full max-w-lg h-96 bg-gradient-to-br from-inlighn-neutral-100/20 to-inlighn-neutral-200/20 rounded-3xl p-2 shadow-2xl backdrop-blur-sm">
              {/* TODO: Add React Three Fiber canvas with parallax layers */}
              {/* TODO: Add mouse-move parallax effect (Eduard Bodak) */}
              <div className="w-full h-full bg-gradient-to-br from-inlighn-primary/10 to-inlighn-secondary/10 rounded-2xl overflow-hidden">
                <img 
                  src="https://blog.commlabindia.com/hubfs/Imported_Blog_Media/How-to-Optimize-Software-Training-with-Top-4-Blended-Learning-Formats.jpg"
                  alt="Blended Learning Formats"
                  className="w-full h-full object-cover rounded-2xl animate-float"
                />
              </div>
            </div>

            {/* Floating parallax elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-inlighn-accent to-inlighn-primary rounded-full animate-float opacity-60"></div>
            <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-gradient-to-r from-inlighn-secondary to-inlighn-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-16 w-12 h-12 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </div>
  );
};

export default AboutHero; 