import React from 'react';

const features = [
  { 
    title: "Real-time Project Exposure", 
    desc: "Gain hands-on experience by working on live tasks and real-world projects, just like in a real job environment.",
    icon: '💼',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: "Mock Interviews", 
    desc: "Practice with domain experts and receive personalized feedback to ace real interviews with confidence.",
    icon: '💬',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: "Resume & Portfolio Building", 
    desc: "Get professional help crafting a standout tech resume and building a portfolio that impresses recruiters.",
    icon: '📄',
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    title: "1:1 Mentor Support", 
    desc: "Receive personal guidance, solve doubts, and get career advice from dedicated industry professionals.",
    icon: '🧑‍🏫',
    gradient: 'from-orange-500 to-red-500'
  },
  { 
    title: "Verified Certificate", 
    desc: "Earn a proof of internship experience with online validation that you can share on LinkedIn and resumes.",
    icon: '✅',
    gradient: 'from-indigo-500 to-purple-500'
  },
  { 
    title: "Doubt Resolution", 
    desc: "Ask questions anytime and get real, timely answers from mentors, not bots or community forums.",
    icon: '❓',
    gradient: 'from-teal-500 to-blue-500'
  }
];

export default function FeatureGrid() {
  return (
    <section data-section="feature-grid" className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Inlighn?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're more than just a course. We're a comprehensive career launchpad designed to transform your learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50 dark:border-slate-700/50 hover:border-slate-200/50 dark:hover:border-slate-600/50"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {item.desc}
              </p>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 