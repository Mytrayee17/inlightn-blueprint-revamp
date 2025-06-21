import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Real testimonials from Inlighn Tech about page
  const testimonials = [
    {
      id: 1,
      name: 'Mirunalini R',
      role: 'Data Analyst Intern',
      company: 'Inlighn Tech',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ce?w=150&h=150&fit=crop&crop=face',
      quote: 'During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills.',
      rating: 5,
      backContent: 'Mirunalini gained hands-on experience with industry-standard tools and real business intelligence projects, developing a strong foundation in data analysis and visualization.'
    },
    {
      id: 2,
      name: 'Surendra Kumar',
      role: 'Data Science Intern',
      company: 'Inlighn Tech (India)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization, and AI Models. Working on real-world datasets helped me apply my knowledge in a practical way. The structured guidance and expert mentorship improved my problem-solving and analytical skills. ✅ Thanks to this experience.',
      rating: 5,
      backContent: 'Surendra worked with real-world datasets and AI models, developing practical machine learning skills that prepared him for industry challenges.'
    },
    {
      id: 3,
      name: 'Vignesh',
      role: 'Business Analyst Intern',
      company: 'Inlighn Tech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'I interned in Business Analysis at INLIGHN TECH, where I gained hands-on experience in Market Research, Business Intelligence, and Financial Analysis. The training and projects provided deep insights into business strategies, and I developed strong analytical and problem-solving skills. The experience was incredibly valuable for my career.',
      rating: 5,
      backContent: 'Vignesh developed expertise in market research and business intelligence, gaining practical insights into business strategy and financial analysis.'
    },
    {
      id: 4,
      name: 'Hariharan Rajendaran',
      role: 'Full-Stack Developer Intern',
      company: 'Inlighn Tech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'At INLIGHN TECH, I completed my Full-Stack Development internship, where I worked on React, Node.js, MongoDB, and API development. I built web applications from scratch, which helped me understand both frontend and backend development. The real-world exposure and expert guidance made me industry-ready.',
      rating: 5,
      backContent: 'Hariharan built complete web applications from scratch, mastering both frontend and backend technologies with real-world project experience.'
    },
    {
      id: 5,
      name: 'Sumit Vishwas',
      role: 'Python Developer Intern',
      company: 'Inlighn Tech',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      quote: 'My Python Development internship at INLIGHN TECH gave me hands-on experience with Django, Flask, Web Scraping, and Automation. I worked on projects that enhanced my programming skills and helped me understand backend development better. The structured learning path made a big difference in my confidence and abilities.',
      rating: 5,
      backContent: 'Sumit mastered Django, Flask, and automation tools through hands-on projects, building confidence in backend development and programming.'
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
    setIsFlipped(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-inlighn-accent/5 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Micro-inspired typography */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            What Our
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Interns Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our interns who have gained hands-on experience and practical skills 
            that prepared them for successful tech careers.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Manual Controls with New Engen inspired styling */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </button>

          {/* 3D-Flip Cards Container */}
          <div className="px-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                }`}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Flip Card (Eduard Bodak inspired) */}
                <div 
                  className={`relative w-full h-96 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={handleCardClick}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-slate-100 dark:border-slate-700 overflow-y-auto">
                      {/* Quote Icon with gradient */}
                      <div className="w-16 h-16 bg-gradient-to-br from-inlighn-primary/10 to-inlighn-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                        <Quote className="w-8 h-8 text-inlighn-primary" />
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-inlighn-warning text-inlighn-warning" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text with fade-slide-up animation */}
                      <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic animate-fade-slide-up">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full mr-4 overflow-hidden ring-2 ring-inlighn-primary/20">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.name}</h4>
                          <p className="text-slate-600 dark:text-slate-300">{testimonial.role}</p>
                          <p className="text-inlighn-primary font-semibold">{testimonial.company}</p>
                        </div>
                      </div>

                      {/* Click hint */}
                      <div className="absolute bottom-4 right-4 text-xs text-slate-400 dark:text-slate-500">
                        Click to flip
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-inlighn-primary to-inlighn-secondary rounded-3xl p-8 lg:p-10 shadow-xl h-full text-white overflow-y-auto">
                      <h3 className="text-2xl font-bold mb-4">More About {testimonial.name}</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        {testimonial.backContent}
                      </p>
                      
                      {/* Company logo placeholder */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm opacity-80">
                          Graduate of Inlighn Tech
                        </div>
                        <div className="text-2xl font-bold">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsFlipped(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-inlighn-primary scale-125' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
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
