import React from 'react';

interface ToolsGridProps {
  tools: {
    name: string;
    iconUrl: string;
  }[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Tools &amp; Technologies You'll Master
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <img src={tool.iconUrl} alt={`${tool.name} logo`} className="w-12 h-12" />
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300 text-center font-semibold">{tool.name}</div>
            </div>
          ))}
        </div>
        {/* TODO: Animate in on scroll */}
      </div>
    </div>
  );
} 