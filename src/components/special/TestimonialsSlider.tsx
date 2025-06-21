import React from 'react';

const testimonials = [
  {
    name: "Anjali S.",
    feedback: "The hands-on projects were the best part. I felt confident in my interviews because I had real experience to talk about. The 1:1 mentorship was a game-changer for my career.",
    company: "Placed at Infosys",
    course: "Full-Stack Development",
    avatar: "👩‍💻",
    rating: 5
  },
  {
    name: "Mohit R.",
    feedback: "Best internship experience I ever had! The mock interviews were tough but incredibly helpful. I landed a job even before the program ended. Highly recommend to everyone.",
    company: "Now at Capgemini",
    course: "Ethical Hacking",
    avatar: "👨‍💻",
    rating: 5
  },
  {
    name: "Priya Sharma",
    feedback: "I came from a non-tech background and was worried, but the structured learning and constant support from mentors made it possible. Inlighn truly cares about student success.",
    company: "Working at TCS",
    course: "Data Analysis",
    avatar: "👩‍🔬",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    feedback: "The project-based approach helped me build a strong portfolio. The mentors were always available and the mock interviews prepared me perfectly for real job interviews.",
    company: "Software Engineer at Wipro",
    course: "Python Development",
    avatar: "👨‍🔧",
    rating: 5
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with Inlighn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50 dark:border-slate-700/50 hover:border-slate-200/50 dark:hover:border-slate-600/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-inlighn-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <div className="mb-6">
                  <p className="italic text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    "{t.feedback}"
                  </p>
                </div>
                
                {/* Avatar and Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-inlighn-accent to-purple-600 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      {t.name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {t.course}
                    </p>
                    <p className="text-sm font-medium text-inlighn-accent group-hover:text-purple-600 transition-colors">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-inlighn-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-100/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-inlighn-accent mb-2">500+</div>
            <p className="text-slate-600 dark:text-slate-300">Students Placed</p>
          </div>
          <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-100/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <p className="text-slate-600 dark:text-slate-300">Success Rate</p>
          </div>
          <div className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-100/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <p className="text-slate-600 dark:text-slate-300">Student Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
} 