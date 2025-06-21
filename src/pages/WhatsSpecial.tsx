import React from 'react';
import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
import SpecialHero from '@/components/special/SpecialHero';
import FeatureGrid from '@/components/special/FeatureGrid';
import ExperienceJourney from '@/components/special/ExperienceJourney';
import LearningSupport from '@/components/special/LearningSupport';
import PersonalizedUpskilling from '@/components/special/PersonalizedUpskilling';
import TestimonialsSlider from '@/components/special/TestimonialsSlider';
import CallToActionBanner from '@/components/special/CallToActionBanner';

export default function WhatsSpecialPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <SpecialHero />
        <FeatureGrid />
        <ExperienceJourney />
        <LearningSupport />
        <PersonalizedUpskilling />
        <TestimonialsSlider />
        <CallToActionBanner />
      </main>
      <Footer />
    </div>
  );
} 