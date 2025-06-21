import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectsSectionProps {
  projects: {
    title: string;
    desc: string;
  }[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const handleViewDemo = (projectTitle: string) => {
    // In a real app, this would open the project demo
    alert(`Demo for ${projectTitle} would open here!`);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Real-World Projects You'll Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-xl mb-4 text-slate-900 dark:text-white">
                {project.title}
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {project.desc}
              </div>
              <button
                onClick={() => handleViewDemo(project.title)}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                <ExternalLink size={16} />
                View Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 