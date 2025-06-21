
import React from 'react';

const PartnersMarquee = () => {
  // TODO: Replace with actual partner company logos
  const partners = [
    { id: 1, name: 'Microsoft', logo: '🔷' },
    { id: 2, name: 'Google', logo: '🔴' },
    { id: 3, name: 'Amazon', logo: '🟠' },
    { id: 4, name: 'Netflix', logo: '🔴' },
    { id: 5, name: 'Meta', logo: '🔵' },
    { id: 6, name: 'Apple', logo: '⚫' },
    { id: 7, name: 'Tesla', logo: '🔴' },
    { id: 8, name: 'Spotify', logo: '🟢' },
    { id: 9, name: 'Uber', logo: '⚫' },
    { id: 10, name: 'Airbnb', logo: '🔴' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Industry Partners
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our graduates work at the world's leading technology companies
          </p>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          {/* TODO: Implement infinite scrolling marquee/slider */}
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
                /* TODO: grayscale → full-color transition on hover */
              >
                <div className="w-32 h-20 flex items-center justify-center bg-slate-50 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 grayscale group-hover:grayscale-0">
                  <span className="text-4xl">{partner.logo}</span>
                  {/* TODO: Replace with actual company logos */}
                </div>
                <p className="text-center mt-2 text-sm font-medium text-slate-600 group-hover:text-slate-800">
                  {partner.name}
                </p>
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-duplicate`}
                className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-slate-50 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 grayscale group-hover:grayscale-0">
                  <span className="text-4xl">{partner.logo}</span>
                </div>
                <p className="text-center mt-2 text-sm font-medium text-slate-600 group-hover:text-slate-800">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
