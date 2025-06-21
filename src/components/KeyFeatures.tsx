
import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Globe, Clock } from 'lucide-react';

const KeyFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    companies: 0,
    placement: 0,
    experience: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    students: 10000,
    companies: 500,
    placement: 95,
    experience: 5,
  };

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

  const features = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of experience',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get recognized certificates that matter to employers',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals and peers worldwide',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with lifetime access',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const stats = [
    { key: 'students', label: 'Students Trained', suffix: '+' },
    { key: 'companies', label: 'Partner Companies', suffix: '+' },
    { key: 'placement', label: 'Placement Rate', suffix: '%' },
    { key: 'experience', label: 'Years Experience', suffix: '+' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inlighn</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                  {counts[stat.key as keyof typeof counts].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
