
import React, { useState, useEffect } from 'react';

const EventsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // TODO: Replace with actual events data
  const events = [
    {
      id: 1,
      title: 'Next Live Cybersecurity Workshop',
      date: 'July 5, 2024',
      cta: 'Register Now'
    },
    {
      id: 2,
      title: 'Full-Stack Development Masterclass',
      date: 'July 12, 2024',
      cta: 'Join Free'
    },
    {
      id: 3,
      title: 'Data Science Career Fair',
      date: 'July 20, 2024',
      cta: 'Learn More'
    }
  ];

  useEffect(() => {
    // TODO: Auto-advance every 6 seconds
    // TODO: Pause on hover
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      {/* Sliding Banners */}
      <div className="relative h-20 flex items-center">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 flex items-center justify-between px-8 transition-transform duration-500 ${
              index === currentSlide ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            <div className="flex items-center space-x-6">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <span className="text-blue-100">—</span>
              <span className="text-blue-100">{event.date}</span>
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              {event.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-75 ease-linear"
          style={{ width: `${((currentSlide + 1) / events.length) * 100}%` }}
        />
        {/* TODO: Show slide duration progress */}
      </div>
    </section>
  );
};

export default EventsBanner;
