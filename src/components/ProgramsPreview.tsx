
import React from 'react';
import { Code, Database, Smartphone, Palette, Shield, TrendingUp } from 'lucide-react';

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analytics, ML, and data visualization',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android app development',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User experience and interface design',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security analysis and ethical hacking',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, SEM, and social media marketing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive programs designed to equip you with industry-relevant skills and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-slate-200"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className={`w-8 h-8 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className={`text-sm font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent hover:underline`}>
                    Learn More
                  </button>
                  <div className="text-slate-400 text-sm">
                    6-8 weeks
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
