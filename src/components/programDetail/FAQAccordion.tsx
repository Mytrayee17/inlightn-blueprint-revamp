import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  faq: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faq.map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700/50">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full px-8 py-6 text-left hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold text-lg pr-4 text-slate-900 dark:text-white">{item.question}</div>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white ${openFAQ === i ? 'rotate-180' : ''}`} 
                />
              </button>
              {openFAQ === i && (
                <div className="px-8 pb-6">
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-md">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 