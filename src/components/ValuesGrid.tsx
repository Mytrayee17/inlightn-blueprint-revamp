import React, { useState, useEffect } from 'react';
import { Target, Rocket, Star, Users, BookOpen, Shield } from 'lucide-react';

// TODO: Define proper TypeScript interface for value data
interface Value {
  id: string;
  title: string;
  description: string;
  lottieUrl: string; // TODO: Replace with actual Lottie animation URL
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; // Properly typed icon component
}

const ValuesGrid = () => {
  const [visibleValues, setVisibleValues] = useState<Set<number>>(new Set());

  // Core values from "Why Choose INLIGHN TECH" section on live site
  const values: Value[] = [
    {
      id: "vision",
      title: "Our Vision",
      description: "To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators and leaders through hands-on, practical learning.",
      lottieUrl: "/lottie/vision.json",
      icon: Target
    },
    {
      id: "mission",
      title: "Our Mission",
      description: "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.",
      lottieUrl: "/lottie/mission.json",
      icon: Rocket
    },
    {
      id: "quality",
      title: "High Quality Resources",
      description: "Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and personalized mentorship, you'll gain the knowledge needed to succeed in today's tech industry.",
      lottieUrl: "/lottie/quality.json",
      icon: Star
    },
    {
      id: "instructors",
      title: "Expert Instructors",
      description: "Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge to help you succeed.",
      lottieUrl: "/lottie/instructors.json",
      icon: Users
    },
    {
      id: "portal",
      title: "Internship Portal Access",
      description: "Get separate portal access to all course materials and updates, allowing you to learn at your own pace and stay up-to-date with industry trends long after you've completed the program.",
      lottieUrl: "/lottie/portal.json",
      icon: BookOpen
    },
    {
      id: "practical",
      title: "Practical Learning",
      description: "Bridge the gap between academic learning and industry needs through hands-on projects, real-world applications, and industry-relevant curriculum that prepares you for actual job requirements.",
      lottieUrl: "/lottie/practical.json",
      icon: Shield
    }
  ];

  // Intersection Observer for Lottie animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleValues(prev => new Set([...prev, index]));
            // TODO: Trigger Lottie animation play
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const valueElements = document.querySelectorAll('[data-value]');
    valueElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 to-inlighn-accent/10 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            The Best Beneficial Side of
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              INLIGHN TECH
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between academic learning and industry needs, providing you with the skills, 
            experience, and connections to launch your tech career successfully.
          </p>
        </div>

        {/* 6-Column Grid (stacks to 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.id}
              data-value
              data-index={index}
              className={`group bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-100 dark:border-slate-700 ${
                visibleValues.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Lottie Icon Container (80×80px) */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-inlighn-primary/10 to-inlighn-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-2xl">
                {/* TODO: Add Lottie animation that plays once when scrolled into view */}
                {/* TODO: Integrate react-lottie for animated icons */}
                {/* TODO: Dark mode: invert icon color or swap to light Lottie variant */}
                <value.icon 
                  className="w-10 h-10 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary bg-clip-text text-transparent group-hover:animate-pulse drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-inlighn-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {value.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-inlighn-primary to-inlighn-secondary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            These values aren't just words on a page—they're the foundation of our culture 
            and the driving force behind every decision we make.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesGrid; 