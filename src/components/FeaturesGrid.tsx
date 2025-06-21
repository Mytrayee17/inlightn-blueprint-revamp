
import React from 'react';
import { Award, Users, Wrench, HeadphonesIcon } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Certified Mentors',
      description: 'Learn from industry experts with proven track records and real-world experience',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Wrench,
      title: 'Hands-On Labs',
      description: 'Practice with cutting-edge tools and technologies in simulated environments',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      icon: Users,
      title: 'Real-World Projects',
      description: 'Build portfolio-worthy projects that solve actual business problems',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support system',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Inlighn?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to tech education
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-slate-50"
              /* TODO: Add Lottie micro-animations on scroll into view */
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon 
                  className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                  /* TODO: Add Lottie animation trigger */
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
