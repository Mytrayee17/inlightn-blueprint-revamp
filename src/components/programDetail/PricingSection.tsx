import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PricingSectionProps {
  pricing: {
    cost: string;
    duration: string;
    batch: string;
    originalPrice?: string;
  };
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/contact');
  };

  return (
    <div data-section="pricing" className="bg-slate-50 dark:bg-slate-900/50 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Course Fee &amp; Enrollment
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-center">
            {pricing.originalPrice && (
              <div className="text-xl text-slate-500 dark:text-slate-400 mb-2 line-through">
                {pricing.originalPrice}
              </div>
            )}
            <div className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              {pricing.cost}
            </div>
            <div className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              For {pricing.duration} • Next batch starts {pricing.batch}
            </div>
            <button
              onClick={handleApplyNow}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
            >
              Enroll Now
            </button>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Limited seats available. EMI options available.
            </div>
          </div>
        </div>
        {/* TODO: Add payment plans and installment options */}
      </div>
    </div>
  );
} 