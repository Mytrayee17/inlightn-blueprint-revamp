import React from 'react';
import { programsData } from '@/data/programsData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedProgramsProps {
  currentSlug: string;
}

export default function RelatedPrograms({ currentSlug }: RelatedProgramsProps) {
  // Filter out the current program and get up to 3 other programs
  const relatedPrograms = programsData.filter(program => program.slug !== currentSlug).slice(0, 3);

  return (
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Explore Other Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPrograms.map((program) => (
            <Link
              key={program.slug}
              to={`/programs/${program.slug}`}
              className="group block bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700/50"
            >
              <div className="text-5xl mb-5">{program.icon}</div>
              <div className="font-bold text-xl mb-2 text-slate-900 dark:text-white transition-colors">
                {program.title}
              </div>
              <div className="text-md text-slate-600 dark:text-slate-300 mb-6 min-h-[50px]">
                {program.subtitle}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {program.pricing.cost}
                </div>
                <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transform transition-all duration-300">
                  View Program <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 