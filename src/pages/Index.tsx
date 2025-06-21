
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProgramsPreview from '../components/ProgramsPreview';
import KeyFeatures from '../components/KeyFeatures';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <ProgramsPreview />
      <KeyFeatures />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
