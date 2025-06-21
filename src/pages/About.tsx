import React from 'react';
import AboutHero from '@/components/AboutHero';
import TimelineSection from '@/components/TimelineSection';
import ValuesGrid from '@/components/ValuesGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AchievementsSection from '@/components/AchievementsSection';
import AboutCTA from '@/components/AboutCTA';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Values Grid */}
      <ValuesGrid />
      
      {/* Testimonials Section */}
      <TestimonialsCarousel />
      
      {/* Achievements Section */}
      <AchievementsSection />
      
      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
};

export default About; 