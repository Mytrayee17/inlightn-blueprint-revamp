import React, { useState } from 'react';
import { ChevronDown, BookOpen, CheckCircle } from 'lucide-react';

interface CurriculumAccordionProps {
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}

export default function CurriculumAccordion({ curriculum }: CurriculumAccordionProps) {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          What You'll Learn
        </h2>
        <div className="space-y-6">
          {curriculum.map((mod, i) => (
            <div key={i} className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700/50">
              <button
                onClick={() => toggleModule(i)}
                className="w-full px-8 py-6 text-left bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/50 hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-600/50 dark:hover:to-slate-500/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-xl text-slate-900 dark:text-white">{mod.module}</div>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white ${openModule === i ? 'rotate-180' : ''}`} 
                />
              </button>
              {openModule === i && (
                <div className="px-8 py-6 bg-white dark:bg-slate-800/50">
                  <ul className="space-y-4">
                    {mod.lessons.map((lesson, j) => (
                      <li key={j} className="flex items-start text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 