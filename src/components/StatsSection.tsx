
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    graduates: 0,
    partners: 0,
    placement: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    graduates: 10000,
    partners: 500,
    placement: 95
  };

  // Intersection Observer for scroll-into-view trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Count-up animations
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervalIds: NodeJS.Timeout[] = [];

    Object.keys(targetCounts).forEach((key) => {
      const target = targetCounts[key as keyof typeof targetCounts];
      const increment = target / steps;
      let current = 0;

      const intervalId = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervalId);
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);

      intervalIds.push(intervalId);
    });

    return () => intervalIds.forEach(clearInterval);
  }, [isVisible]);

  const stats = [
    { 
      key: 'graduates', 
      label: 'Graduates', 
      suffix: '+',
      description: 'Students successfully placed in top companies'
    },
    { 
      key: 'partners', 
      label: 'Hiring Partners', 
      suffix: '+',
      description: 'Companies actively recruiting our graduates'
    },
    { 
      key: 'placement', 
      label: 'Placement Rate', 
      suffix: '%',
      description: 'Average placement success across all programs'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Impact
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful graduates who transformed their careers with Inlighn
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Count-up Number */}
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[stat.key as keyof typeof counts].toLocaleString()}{stat.suffix}
              </div>
              
              {/* Label */}
              <div className="text-xl font-semibold text-blue-100 mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-blue-200 text-sm leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
