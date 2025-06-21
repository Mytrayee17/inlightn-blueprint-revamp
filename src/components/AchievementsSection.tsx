import React from 'react';
import { Award, Shield, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: 'Incorporation Certificate',
      description: 'Ministry of Corporate Affairs Approved',
      icon: Shield,
      color: 'from-inlighn-primary to-inlighn-secondary'
    },
    {
      id: 2,
      title: 'Startup India Recognitions',
      description: 'Department for Promotion of Industry and Internal Trade Approved',
      icon: Award,
      color: 'from-inlighn-secondary to-inlighn-accent'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Interns Enrolled',
      icon: '👥'
    },
    {
      number: '100+',
      label: 'Projects Completed',
      icon: '📊'
    },
    {
      number: '95%',
      label: 'Satisfaction Rate',
      icon: '⭐'
    },
    {
      number: '20+',
      label: 'Top Instructors',
      icon: '👨‍🏫'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-inlighn-lightBg to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Recognized by government bodies and trusted by hundreds of students 
            for our commitment to quality education and industry-relevant training.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-inlighn-primary mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-2xl`}>
                <achievement.icon 
                  className="w-10 h-10 text-white drop-shadow-lg" 
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-inlighn-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            These recognitions validate our commitment to providing high-quality, 
            industry-relevant education that bridges the gap between academic learning and industry needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 