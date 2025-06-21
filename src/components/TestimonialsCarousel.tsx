
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // TODO: Replace with actual testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Cybersecurity Analyst at Microsoft',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ce?w=150&h=150&fit=crop&crop=face',
      quote: 'The hands-on approach at Inlighn transformed my career. I went from zero cybersecurity knowledge to landing my dream job in just 6 months.'
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Full-Stack Developer at Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The mentorship quality is unmatched. My mentor guided me through real-world projects that directly landed me interviews at top tech companies.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Inlighn\'s data science program didn\'t just teach me algorithms - it taught me to think like a data scientist and solve real business problems.'
    }
  ];

  // Auto-rotate every 8 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Success Stories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from our graduates who are now thriving in top tech companies
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Manual Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>

          {/* 3D-Flip Cards Container */}
          <div className="px-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                }`}
                style={{ perspective: '1000px' }}
                /* TODO: Implement 3D-flip effect */
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  
                  {/* Testimonial Text */}
                  <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
