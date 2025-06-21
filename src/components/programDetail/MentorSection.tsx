import React from 'react';
import { Linkedin } from 'lucide-react';

interface MentorSectionProps {
  mentors: {
    name: string;
    role: string;
    photoUrl: string;
    linkedin: string;
  }[];
}

export default function MentorSection({ mentors }: MentorSectionProps) {
  return (
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Learn from Industry Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <a
              key={i}
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700/50 text-center"
            >
              <img
                src={mentor.photoUrl}
                alt={`Photo of ${mentor.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-white dark:border-slate-700 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="font-bold text-xl text-center mb-1 text-slate-900 dark:text-white">{mentor.name}</div>
              <div className="text-md text-slate-600 dark:text-slate-300 mb-4 text-center">{mentor.role}</div>
              <div className="flex items-center justify-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Linkedin size={16} className="mr-2" />
                View Profile
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 