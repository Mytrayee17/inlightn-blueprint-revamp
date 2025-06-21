import React from 'react';

const PartnersMarquee = () => {
  const partners = [
    { id: 1, name: 'Microsoft', logo: '/logos/microsoft.svg' },
    { id: 2, name: 'Google', logo: '/logos/google.svg' },
    { id: 3, name: 'Amazon', logo: '/logos/amazon.svg' },
    { id: 4, name: 'Meta', logo: '/logos/meta.svg' },
    { id: 5, name: 'Apple', logo: '/logos/apple.svg' },
    { id: 6, name: 'Netflix', logo: '/logos/netflix.svg' },
    { id: 7, name: 'Tesla', logo: '/logos/tesla.svg' },
    { id: 8, name: 'Spotify', logo: '/logos/spotify.svg' },
    { id: 9, name: 'Uber', logo: '/logos/uber.svg' },
    { id: 10, name: 'Airbnb', logo: '/logos/airbnb.svg' },
    { id: 11, name: 'IBM', logo: '/logos/ibm.svg' },
    { id: 12, name: 'Oracle', logo: '/logos/oracle.svg' }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Industry Partners
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our graduates work at the world's leading technology companies
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 grayscale group-hover:grayscale-0">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-16 h-12 object-contain"
                  />
                </div>
                <p className="text-center mt-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white">
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
                <div className="w-32 h-20 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300 grayscale group-hover:grayscale-0">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-16 h-12 object-contain"
                  />
                </div>
                <p className="text-center mt-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white">
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
