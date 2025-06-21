import React from 'react';
import Navigation from '@/components/Navigation';
import AboutHero from '@/components/AboutHero';
import TimelineSection from '@/components/TimelineSection';
import ValuesGrid from '@/components/ValuesGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AchievementsSection from '@/components/AchievementsSection';
import AboutCTA from '@/components/AboutCTA';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <Navigation />
      
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About; 