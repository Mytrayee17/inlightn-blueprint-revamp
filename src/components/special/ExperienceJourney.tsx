import React from 'react';

const steps = [
  { 
    title: "Fill the Form", 
    description: "Start by telling us about your interests, goals, and current skill level.",
    icon: '📝',
    duration: '5 min'
  },
  { 
    title: "Get Shortlisted", 
    description: "Our team reviews your application and matches you with the perfect program.",
    icon: '✅',
    duration: '24-48 hours'
  },
  { 
    title: "Attend Orientation", 
    description: "Join a live session to understand the program structure and meet your mentors.",
    icon: '🎯',
    duration: '1 hour'
  },
  { 
    title: "Enroll & Learn", 
    description: "Begin your learning journey with access to all materials and live sessions.",
    icon: '📚',
    duration: 'Ongoing'
  },
  { 
    title: "Work on Projects", 
    description: "Apply your skills to real-world tasks and build a portfolio of projects.",
    icon: '💻',
    duration: '8-12 weeks'
  },
  { 
    title: "Get Certified", 
    description: "Receive your verified certificate upon successful completion of the program.",
    icon: '🏆',
    duration: 'Immediate'
  }
];

export default function ExperienceJourney() {
  return (
    <section className="bg-white dark:bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Your Journey with{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Inlighn
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A structured path from application to certification, designed for your success.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-inlighn-accent to-purple-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-inlighn-accent to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      <span className="text-sm font-medium text-inlighn-accent bg-inlighn-accent/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 