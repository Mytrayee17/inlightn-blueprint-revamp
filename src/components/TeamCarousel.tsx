import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

// TODO: Define proper TypeScript interface for team member data
interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  linkedinUrl: string;
  bio: string;
}

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  // Real team data (execs or placeholders)
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO & Founder",
      photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b332c1ce?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/sarah-johnson",
      bio: "Former Google engineer with 15+ years in tech education and innovation. Passionate about democratizing access to quality tech education."
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CTO",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/michael-chen",
      bio: "Ex-Microsoft architect passionate about scalable learning platforms. Led development of our AI-powered curriculum system."
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Head of Education",
      photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/emily-rodriguez",
      bio: "Curriculum expert with PhD in Computer Science Education. Designed our industry-aligned learning paths."
    },
    {
      id: "4",
      name: "David Kim",
      role: "Lead Instructor",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/david-kim",
      bio: "Full-stack developer and certified AWS Solutions Architect. Mentored 500+ students to successful tech careers."
    },
    {
      id: "5",
      name: "Lisa Thompson",
      role: "Student Success Manager",
      photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/lisa-thompson",
      bio: "Career coach helping students transition into tech roles. Achieved 95% placement rate across all programs."
    },
    {
      id: "6",
      name: "Alex Martinez",
      role: "Head of Partnerships",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedinUrl: "https://linkedin.com/in/alex-martinez",
      bio: "Former recruiter at top tech companies. Built partnerships with 100+ companies for student placements."
    }
  ];

  // Auto-rotate every 8 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered, teamMembers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getVisibleMembers = () => {
    const startIndex = currentIndex * 4;
    return teamMembers.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-inlighn-neutral-800 mb-6 tracking-tight">
            Meet Our
            <span className="block bg-gradient-mesh bg-clip-text text-transparent animate-gradient-shift bg-size-200">
              Team
            </span>
          </h2>
          <p className="text-xl text-inlighn-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The passionate educators and industry experts who make Inlighn Tech 
            the leading platform for tech education.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Manual Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-inlighn-neutral-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-inlighn-neutral-600" />
          </button>

          {/* 4-Column Grid */}
          <div className="px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getVisibleMembers().map((member, index) => (
                <div key={member.id} className="relative h-96">
                  {/* 3D Flip Card */}
                  <div 
                    className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                      flippedCards.has(index) ? 'rotate-y-180' : ''
                    }`}
                    onClick={() => handleCardFlip(index)}
                  >
                    {/* Front of Card: Photo with name overlay */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="relative w-full h-full bg-gradient-to-br from-inlighn-primary to-inlighn-secondary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-inlighn-neutral-200 text-sm">
                            {member.role}
                          </p>
                        </div>
                        {/* Flip hint */}
                        <div className="absolute top-4 right-4 text-xs text-white/60 bg-black/20 px-2 py-1 rounded">
                          Click to flip
                        </div>
                      </div>
                    </div>

                    {/* Back of Card: Plain background, role + LinkedIn */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="w-full h-full bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-inlighn-neutral-800 mb-2">
                            {member.name}
                          </h3>
                          <p className="text-inlighn-primary font-semibold mb-4">
                            {member.role}
                          </p>
                          <p className="text-inlighn-neutral-600 text-sm leading-relaxed">
                            {member.bio}
                          </p>
                        </div>
                        
                        {/* LinkedIn icon */}
                        <div className="flex justify-center">
                          <a 
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-inlighn-primary rounded-full flex items-center justify-center text-white hover:bg-inlighn-primary-dark transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-inlighn-primary to-inlighn-secondary scale-125' 
                    : 'bg-inlighn-neutral-300 hover:bg-inlighn-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel; 