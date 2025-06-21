import React from 'react';
import LoginForm from './LoginForm';
import LoginFooterCTA from './LoginFooterCTA';

export default function LoginHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-inlighn-accent rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      {/* Main content container */}
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome Back{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              👋
            </span>
          </h1>
          <p className="text-xl text-gray-200">
            Sign in to access your learning dashboard.
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <LoginForm />
        </div>

        {/* Footer CTA */}
        <div className="mt-8">
          <LoginFooterCTA />
        </div>
      </div>

      {/* TODO: Add Lottie or particle animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Placeholder for future animations */}
      </div>
    </section>
  );
} 