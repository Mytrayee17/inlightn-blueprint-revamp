import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoginHero from '@/components/auth/LoginHero';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <Navigation />
      <main className="min-h-screen">
        <LoginHero />
      </main>
      <Footer />
    </div>
  );
} 