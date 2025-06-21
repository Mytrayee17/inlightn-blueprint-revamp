import React from 'react';

export default function VerifyHero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center text-center bg-gradient-to-br from-inlighn-primary via-inlighn-blue to-inlighn-secondary text-white px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold">Verify Certificate</h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-200">
          Enter your certificate ID or registered email to verify its authenticity.
        </p>
        {/* TODO: Add 3D background / Lottie animation */}
        {/* TODO: Smooth scroll hint or bounce */}
      </div>
    </section>
  );
} 