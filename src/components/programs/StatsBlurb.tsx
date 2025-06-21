import React from 'react';

export default function StatsBlurb() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Inlighn</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center group">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Graduates Placed</h3>
            <p className="text-slate-600">Successfully placed in top tech companies</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center group">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Success Rate</h3>
            <p className="text-slate-600">Students who complete and get placed</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Partner Companies</h3>
            <p className="text-slate-600">Leading tech companies hiring our graduates</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center group">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                4.9
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Student Rating</h3>
            <p className="text-slate-600">Average rating from program graduates</p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Industry-Relevant Skills</h3>
            <p className="text-slate-600">Learn the latest technologies and tools used in the industry</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Expert Mentorship</h3>
            <p className="text-slate-600">Learn from industry professionals with years of experience</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Real Projects</h3>
            <p className="text-slate-600">Build a portfolio with real-world projects and case studies</p>
          </div>
        </div>
      </div>
    </section>
  );
} 