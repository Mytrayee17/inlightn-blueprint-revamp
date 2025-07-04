import React from 'react';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsGrid from '@/components/programs/ProgramsGrid';
import FeaturedSpotlight from '@/components/programs/FeaturedSpotlight';
import StatsBlurb from '@/components/programs/StatsBlurb';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <ProgramsHero />
      <ProgramsGrid />
      <FeaturedSpotlight />
      <StatsBlurb />
      <ProgramsCTA />
    </div>
  );
} 