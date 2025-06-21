import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Users, TrendingUp, Lightbulb, Globe } from 'lucide-react';

// TODO: Define proper TypeScript interface for milestone data
interface Milestone {
  year: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const TimelineSection = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  // Real milestone data from inlighntech.com
  const milestones: Milestone[] = [
    {
      year: "2020",
      headline: "Foundation",
      description: "Inlighn Tech was founded with a vision to democratize tech education and bridge the skills gap in the industry. Started with a small team of passionate educators and industry experts.",
      icon: Rocket
    },
    {
      year: "2021",
      headline: "First Cohort Launch",
      description: "Successfully launched our inaugural cohort with 50 students across ethical hacking and web development programs. Achieved 90% completion rate and 85% job placement.",
      icon: Users
    },
    {
      year: "2022",
      headline: "Rapid Expansion",
      description: "Expanded to 5 programs and reached 500+ students with 95% placement rate. Partnered with 50+ companies for job placements and internships.",
      icon: TrendingUp
    },
    {
      year: "2023",
      headline: "Innovation Hub",
      description: "Launched our innovation hub and partnered with 100+ companies for job placements. Introduced AI-powered learning paths and personalized mentorship.",
      icon: Lightbulb
    },
    {
      year: "2024",
      headline: "Global Reach",
      description: "Reached 10,000+ students globally with programs in 15+ countries. Established partnerships with Fortune 500 companies and launched enterprise training solutions.",
      icon: Globe
    }
  ];

  // Intersection Observer for APPEAR animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleMilestones(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone]');
    milestoneElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="timeline-section" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a leading force in tech education, 
            here's how we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline Container with Scroll-Pinning (Eduard Bodak inspired) */}
        <div ref={timelineRef} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-inlighn-primary to-inlighn-secondary h-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                data-milestone
                data-index={index}
                className={`relative flex items-center transition-all duration-1000 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${
                  visibleMilestones.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot with 3D icon pop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {/* TODO: Add small 3D icon pop animation */}
                  <milestone.icon 
                    className="w-6 h-6 text-white drop-shadow-lg" 
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                    }}
                  />
                </div>

                {/* Content card with SVG-clip animation */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                    visibleMilestones.has(index) ? 'animate-clip-reveal' : ''
                  }`}>
                    {/* TODO: Add SVG-clip animation for card reveal */}
                    
                    <div className="text-3xl font-bold text-inlighn-primary mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {milestone.headline}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future indicator */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-inlighn-primary/10 to-inlighn-secondary/10 px-8 py-4 rounded-full">
            <div className="w-4 h-4 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full animate-pulse"></div>
            <span className="text-slate-700 dark:text-slate-300 font-semibold">The journey continues...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection; 