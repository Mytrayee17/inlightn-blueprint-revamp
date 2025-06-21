import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingCarousel = () => {
  // TODO: Replace with actual trending programs data
  const trendingPrograms = [
    { id: 1, title: 'Ethical Hacking Fundamentals', icon: '🔒', seatsLeft: 12 },
    { id: 2, title: 'Full-Stack Development', icon: '💻', seatsLeft: 8 },
    { id: 3, title: 'Data Science Bootcamp', icon: '📊', seatsLeft: 15 },
    { id: 4, title: 'Cloud Architecture', icon: '☁️', seatsLeft: 5 },
    { id: 5, title: 'AI/ML Fundamentals', icon: '🤖', seatsLeft: 20 }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trending Programs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of students in our most popular internship programs
          </p>
        </div>

        {/* Horizontal Slider Container */}
        <div className="relative">
          {/* TODO: Implement infinite loop slider */}
          {/* TODO: Add drag-to-swipe support on touch */}
          
          {/* Navigation Controls */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-6 overflow-hidden px-12">
            {trendingPrograms.map((program) => (
              <div
                key={program.id}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                /* TODO: Add 3D-tilt on hover effect */
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {program.seatsLeft} seats left
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
