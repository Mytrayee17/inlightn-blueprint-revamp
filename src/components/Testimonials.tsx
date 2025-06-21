
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer at Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: "Inlighn's web development program completely transformed my career. The hands-on projects and mentorship helped me land my dream job at Google.",
      rating: 5,
      program: 'Web Development',
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: "The data science curriculum is outstanding. Real-world projects and industry connections made all the difference in my job search.",
      rating: 5,
      program: 'Data Science',
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer at Adobe',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: "Amazing experience! The UI/UX program taught me not just design principles but also how to think like a user. Highly recommend!",
      rating: 5,
      program: 'UI/UX Design',
    },
    {
      name: 'David Park',
      role: 'Mobile Developer at Spotify',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: "The mobile development track is comprehensive and up-to-date. I went from zero to building production apps in just 8 weeks.",
      rating: 5,
      program: 'Mobile Development',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students</span> Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transformed their careers.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          
                          <blockquote className="text-lg md:text-xl text-slate-700 mb-6 italic leading-relaxed">
                            "{testimonial.content}"
                          </blockquote>
                          
                          <div>
                            <div className="font-bold text-slate-800 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-slate-600 mb-2">
                              {testimonial.role}
                            </div>
                            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {testimonial.program}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-600 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-600 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
