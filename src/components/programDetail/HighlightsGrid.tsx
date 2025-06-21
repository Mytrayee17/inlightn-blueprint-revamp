import React from 'react';
import { CheckCircle, Users, Award, Clock, BookOpen, Target } from 'lucide-react';

interface HighlightsGridProps {
  highlights: string[];
}

export default function HighlightsGrid({ highlights }: HighlightsGridProps) {
  const getIcon = (highlight: string) => {
    const lowerHighlight = highlight.toLowerCase();
    if (lowerHighlight.includes('project')) return <BookOpen className="w-8 h-8 text-white" />;
    if (lowerHighlight.includes('job') || lowerHighlight.includes('assistance')) return <Users className="w-8 h-8 text-white" />;
    if (lowerHighlight.includes('certification') || lowerHighlight.includes('certificate')) return <Award className="w-8 h-8 text-white" />;
    if (lowerHighlight.includes('mentor')) return <Users className="w-8 h-8 text-white" />;
    if (lowerHighlight.includes('case') || lowerHighlight.includes('real')) return <Target className="w-8 h-8 text-white" />;
    if (lowerHighlight.includes('strategy') || lowerHighlight.includes('insight')) return <Target className="w-8 h-8 text-white" />;
    return <CheckCircle className="w-8 h-8 text-white" />;
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          What You'll Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700/50"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(highlight)}
              </div>
              <div className="font-bold text-lg text-slate-900 dark:text-white leading-relaxed">
                {highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 