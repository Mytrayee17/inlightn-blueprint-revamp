
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const TopPicksGrid = () => {
  // TODO: Make this dynamic based on region or browsing history
  const topPicks = [
    {
      id: 1,
      title: 'Cybersecurity Analyst',
      duration: '6 months',
      students: 245,
      rating: 4.8,
      highlights: ['Hands-on penetration testing', 'Industry certifications', 'Real security incidents']
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      duration: '8 months',
      students: 180,
      rating: 4.9,
      highlights: ['MERN stack mastery', 'Deploy real applications', 'Code reviews by experts']
    },
    {
      id: 3,
      title: 'Data Scientist',
      duration: '7 months',
      students: 165,
      rating: 4.7,
      highlights: ['Machine learning projects', 'Business impact analysis', 'Kaggle competitions']
    },
    {
      id: 4,
      title: 'Cloud Architect',
      duration: '5 months',
      students: 95,
      rating: 4.8,
      highlights: ['AWS/Azure expertise', 'Scalable architectures', 'Cost optimization']
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
              className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ perspective: '1000px' }}
              /* TODO: Implement card flip on hover */
            >
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

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>

              {/* Back of Card - TODO: Show on flip */}
              <div className="back absolute inset-0 bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
          <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
            View All Programs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPicksGrid;
