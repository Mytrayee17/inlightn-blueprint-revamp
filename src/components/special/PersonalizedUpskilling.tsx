import React from 'react';
import { useNavigate } from 'react-router-dom';

const upskillingAreas = [
  { 
    title: "Resume Building", 
    icon: '📄', 
    description: "Craft a professional resume that gets noticed by top recruiters.",
    gradient: 'from-blue-500 to-cyan-500',
    features: ['ATS Optimization', 'Industry Templates', 'Expert Review']
  },
  { 
    title: "Interview Prep", 
    icon: '💬', 
    description: "Mock interviews and expert feedback to help you succeed.",
    gradient: 'from-purple-500 to-pink-500',
    features: ['Technical Rounds', 'Behavioral Questions', 'Salary Negotiation']
  },
  { 
    title: "Hands-On Training", 
    icon: '💻', 
    description: "Practical skills development through real-world projects.",
    gradient: 'from-green-500 to-emerald-500',
    features: ['Live Projects', 'Code Reviews', 'Best Practices']
  },
  { 
    title: "Job Referrals", 
    icon: '🔗', 
    description: "Get access to our network of hiring partners and opportunities.",
    gradient: 'from-orange-500 to-red-500',
    features: ['Partner Companies', 'Direct Referrals', 'Career Guidance']
  }
];

export default function PersonalizedUpskilling() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/programs');
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white px-6 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Personalized{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Upskilling Model
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tailored support at every stage of your career development journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upskillingAreas.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2">
                  {item.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                      <span className="w-2 h-2 bg-inlighn-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={handleJoinUs}
            className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <p className="text-lg font-medium text-white">
              Ready to start your personalized journey?{' '}
              <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">Join us today!</span>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
} 