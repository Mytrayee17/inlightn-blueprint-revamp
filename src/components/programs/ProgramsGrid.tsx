import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'business-analyst',
    title: 'Business Analyst Internship Program',
    subtitle: 'Gain practical business analysis skills by working on real projects',
    description: 'Learn to bridge the gap between business needs and technical solutions through hands-on projects and industry mentorship.',
    duration: '8 weeks',
    price: '₹49,999',
    features: ['Live Projects', 'Job Assistance', 'Industry Certification'],
    icon: '📊',
    slug: 'business-analyst',
    rating: 5
  },
  {
    id: 'frontend',
    title: 'Front-End Development Internship',
    subtitle: 'Kickstart your journey into web development',
    description: 'Master modern frontend technologies and build responsive, interactive web applications.',
    duration: '10 weeks',
    price: '₹54,999',
    features: ['Real Projects', 'Portfolio Building', 'Modern Tech Stack'],
    icon: '🌐',
    slug: 'frontend',
    rating: 5
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking with Kali Linux',
    subtitle: 'Gain practical skills in cybersecurity and ethical hacking',
    description: 'Learn offensive and defensive security techniques using industry-standard tools and methodologies.',
    duration: '12 weeks',
    price: '₹59,999',
    features: ['Live Projects', 'Certification', 'Expert Mentorship'],
    icon: '🔐',
    slug: 'ethical-hacking',
    rating: 5
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development Internship',
    subtitle: 'Master web development from the ground up',
    description: 'Build complete web applications using the latest technologies and frameworks.',
    duration: '12 weeks',
    price: '₹59,999',
    features: ['Real Projects', 'Portfolio Building', 'Industry Mentorship'],
    icon: '💻',
    slug: 'fullstack',
    rating: 5
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Internship Program',
    subtitle: 'Build a strong foundation in artificial intelligence',
    description: 'Learn data analysis, machine learning algorithms, and AI fundamentals through hands-on projects.',
    duration: '10 weeks',
    price: '₹54,999',
    features: ['ML Projects', 'Data Visualization', 'Industry Tools'],
    icon: '🤖',
    slug: 'ai-ml',
    rating: 5
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Internship',
    subtitle: 'Learn how to collect, clean, analyze, and visualize data',
    description: 'Transform raw data into actionable insights for business decision-making.',
    duration: '8 weeks',
    price: '₹44,999',
    features: ['BI Tools', 'SQL Mastery', 'Dashboard Creation'],
    icon: '📈',
    slug: 'data-analyst',
    rating: 5
  },
  {
    id: 'offensive-cybersecurity',
    title: 'Offensive Cyber Security Internship',
    subtitle: 'Dive deep into the world of ethical hacking',
    description: 'Master penetration testing, vulnerability assessment, and security auditing techniques.',
    duration: '12 weeks',
    price: '₹59,999',
    features: ['Live Projects', 'Certification', 'Expert Mentorship'],
    icon: '🛡️',
    slug: 'offensive-cybersecurity',
    rating: 5
  },
  {
    id: 'data-science',
    title: 'Data Science Internship',
    subtitle: 'Master the fundamentals of data science',
    description: 'Learn statistical analysis, machine learning, and data visualization through real-world projects.',
    duration: '10 weeks',
    price: '₹54,999',
    features: ['ML Projects', 'Data Visualization', 'Industry Tools'],
    icon: '📊',
    slug: 'data-science',
    rating: 5
  },
  {
    id: 'web-development',
    title: 'Web Development Internship',
    subtitle: 'Learn to build dynamic, responsive websites',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks to create professional web applications.',
    duration: '8 weeks',
    price: '₹44,999',
    features: ['Real Projects', 'Portfolio Building', 'Modern Tech Stack'],
    icon: '🌐',
    slug: 'web-development',
    rating: 5
  }
];

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-inlighn-lightBg to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-inlighn-primary to-inlighn-secondary bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our carefully crafted internship programs designed to launch your tech career
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-inlighn-primary/5 to-inlighn-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header with Icon and Rating */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="text-3xl">{program.icon}</div>
                <div className="flex items-center">
                  {[...Array(program.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-inlighn-primary transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-inlighn-secondary font-medium text-sm mb-3">{program.subtitle}</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{program.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-inlighn-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Price and Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-inlighn-primary">{program.price}</div>
                  <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{program.duration}</div>
                </div>
                
                {/* CTA Button */}
                <Link
                  to={`/programs/${program.slug}`}
                  className="block w-full bg-gradient-to-r from-inlighn-primary to-inlighn-secondary text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:from-inlighn-secondary hover:to-inlighn-primary hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-inlighn-accent/0 to-inlighn-accent/0 group-hover:from-inlighn-accent/5 group-hover:to-inlighn-accent/10 transition-all duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 