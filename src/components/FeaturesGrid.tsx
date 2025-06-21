import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesGrid = () => {
  const features = [
    {
      id: 1,
      title: 'Real-World Projects',
      description: 'Work on live projects that mirror industry challenges and build a portfolio that stands out to employers',
      color: 'from-inlighn-primary to-inlighn-accent',
      bgColor: 'bg-gradient-to-br from-inlighn-primary/10 to-inlighn-accent/10'
    },
    {
      id: 2,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals who provide personalized guidance and career insights',
      color: 'from-inlighn-secondary to-inlighn-primary',
      bgColor: 'bg-gradient-to-br from-inlighn-secondary/10 to-inlighn-primary/10'
    },
    {
      id: 3,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that validate your skills and enhance your professional credibility',
      color: 'from-inlighn-accent to-yellow-500',
      bgColor: 'bg-gradient-to-br from-inlighn-accent/10 to-yellow-500/10'
    },
    {
      id: 4,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to resources and support when you need it',
      color: 'from-inlighn-primary to-inlighn-secondary',
      bgColor: 'bg-gradient-to-br from-inlighn-primary/10 to-inlighn-secondary/10'
    },
    {
      id: 5,
      title: 'Job Assistance',
      description: 'Get comprehensive placement support including resume building, interview prep, and direct company connections',
      color: 'from-inlighn-secondary to-inlighn-accent',
      bgColor: 'bg-gradient-to-br from-inlighn-secondary/10 to-inlighn-accent/10'
    },
    {
      id: 6,
      title: 'Industry-Ready Skills',
      description: 'Master the latest tools and technologies that companies actually use in the real world',
      color: 'from-inlighn-accent to-inlighn-primary',
      bgColor: 'bg-gradient-to-br from-inlighn-accent/10 to-inlighn-primary/10'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Micro-inspired typography */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Why Choose
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Inlighn Tech?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between academic learning and industry needs, providing you with the skills, 
            experience, and connections to launch your tech career successfully.
          </p>
        </div>

        {/* 6-Column Grid with Micro-inspired spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover (Eduard Bodak inspired) */}
              <div className="absolute inset-0 bg-gradient-to-br from-inlighn-primary/5 to-inlighn-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container with Lottie animation placeholder */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-2xl`}>
                  {/* The container itself acts as the 3D icon */}
                </div>
                
                {/* Title with fade-up animation */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-inlighn-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description with fade-up animation */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator (New Engen inspired) */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full"></div>
                </div>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-inlighn-primary/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Link to="/programs" className="group relative overflow-hidden bg-gradient-to-r from-inlighn-primary to-inlighn-secondary text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <span className="relative z-10 text-lg font-semibold">
              Explore All Programs
            </span>
            {/* TODO: Add ripple effect on click */}
            <div className="absolute inset-0 bg-gradient-to-r from-inlighn-secondary to-inlighn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
