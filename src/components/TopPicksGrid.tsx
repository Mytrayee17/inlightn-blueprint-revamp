import React from 'react';
import { Clock, Users, Star, Shield, Code, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopPicksGrid = () => {
  // TODO: Make this dynamic based on region or browsing history
  const topPicks = [
    {
      id: 1,
      title: 'Ethical Hacking Analyst',
      duration: '6 months',
      students: 245,
      rating: 4.8,
      highlights: ['Hands-on penetration testing', 'Industry certifications', 'Real security incidents'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50'
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      duration: '8 months',
      students: 180,
      rating: 4.9,
      highlights: ['MERN stack mastery', 'Deploy real applications', 'Code reviews by experts'],
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      id: 3,
      title: 'Data Scientist',
      duration: '7 months',
      students: 165,
      rating: 4.7,
      highlights: ['Machine learning projects', 'Business impact analysis', 'Kaggle competitions'],
      icon: Database,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50'
    },
    {
      id: 4,
      title: 'Cloud Architect',
      duration: '5 months',
      students: 95,
      rating: 4.8,
      highlights: ['AWS/Azure expertise', 'Scalable architectures', 'Cost optimization'],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Top Picks For You
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Personalized recommendations based on your region and interests
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {topPicks.map((pick) => (
            <div
              key={pick.id}
              className={`group relative ${pick.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-slate-100`}
              style={{ perspective: '1000px' }}
              /* TODO: Implement card flip on hover */
            >
              {/* Program Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${pick.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl`}>
                <pick.icon 
                  className="w-8 h-8 text-white drop-shadow-lg" 
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                />
              </div>

              {/* Front of Card */}
              <div className="front">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{pick.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pick.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pick.students} students</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{pick.rating}/5</span>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${pick.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>

              {/* Back of Card - TODO: Show on flip */}
              <div className="back absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <h4 className="font-bold mb-4">Why you'll love this:</h4>
                <ul className="space-y-2">
                  {pick.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm">• {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopPicksGrid;
