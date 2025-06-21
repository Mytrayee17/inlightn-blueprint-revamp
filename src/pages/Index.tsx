
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrendingCarousel from '../components/TrendingCarousel';
import EventsBanner from '../components/EventsBanner';
import RegionSelect from '../components/RegionSelect';
import TopPicksGrid from '../components/TopPicksGrid';
import FeaturesGrid from '../components/FeaturesGrid';
import StatsSection from '../components/StatsSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PartnersMarquee from '../components/PartnersMarquee';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <TrendingCarousel />
      <EventsBanner />
      <RegionSelect />
      <TopPicksGrid />
      <FeaturesGrid />
      <StatsSection />
      <TestimonialsCarousel />
      <PartnersMarquee />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
