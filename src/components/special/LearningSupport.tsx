import React from 'react';

export default function LearningSupport() {
  const supportFeatures = [
    { 
      title: "Live, Interactive Sessions", 
      description: "Engage in real-time classes where you can ask questions and participate actively.",
      icon: '🎥',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: "Doubt Solving by Mentors", 
      description: "Get your questions answered by industry experts, not teaching assistants.",
      icon: '💬',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: "Project-Based Learning", 
      description: "Build real projects that form the core of your portfolio and practical skills.",
      icon: '💻',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: "Continuous Feedback Loop", 
      description: "Receive regular feedback on your tasks and projects to ensure you're on the right track.",
      icon: '🔄',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            A Learning Support System That{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Actually Supports You
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our ecosystem is designed to provide help and guidance at every step of your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {supportFeatures.map((feature, idx) => (
                <div key={idx} className="group flex items-start space-x-4 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg border border-slate-100/50 dark:border-slate-700/50">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.color} text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-inlighn-accent/10 to-purple-500/10 dark:from-inlighn-accent/20 dark:to-purple-500/20 p-6 rounded-2xl border border-inlighn-accent/20 dark:border-inlighn-accent/30">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">24/7 Support Available</h4>
              <p className="text-slate-600 dark:text-slate-300">Our mentors are available round the clock to help you succeed.</p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-slate-700/50">
              <div className="text-center space-y-6">
                <div className="text-8xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Interactive Learning Hub</h3>
                <p className="text-slate-600 dark:text-slate-300">Access live sessions, project workspaces, and mentor chat all in one place.</p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-2xl mb-2">📊</div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress Tracking</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-2xl mb-2">🤝</div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Peer Learning</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Mobile Access</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Goal Setting</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-inlighn-accent rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 