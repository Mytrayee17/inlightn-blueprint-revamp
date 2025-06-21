import React from 'react';

export default function EmbeddedMap() {
  const handleGetDirections = () => {
    // Open Google Maps directions
    const address = encodeURIComponent('2nd Floor, 2-14, New Gajuwaka, Visakhapatnam, Andhra Pradesh - 530026, India');
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handleViewOnGoogleMaps = () => {
    // Open Google Maps location
    const address = encodeURIComponent('2nd Floor, 2-14, New Gajuwaka, Visakhapatnam, Andhra Pradesh - 530026, India');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section className="bg-white dark:bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Find{' '}
            <span className="bg-gradient-to-r from-inlighn-accent to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Visit our office in Visakhapatnam or explore our location on the map below.
          </p>
        </div>

        {/* TODO: Replace with actual Google Maps iframe or embed */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 w-full rounded-3xl shadow-xl border border-slate-200 dark:border-slate-600 flex items-center justify-center">
            {/* Placeholder content */}
            <div className="text-center space-y-6 p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Interactive Map Coming Soon</h3>
              <p className="text-slate-700 dark:text-slate-200 max-w-md font-medium">
                We're working on integrating a live map to show our exact location in Visakhapatnam.
              </p>
              
              {/* Address display */}
              <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-600 shadow-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Our Location</h4>
                <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  2nd Floor, 2-14, New Gajuwaka<br />
                  Visakhapatnam, Andhra Pradesh - 530026<br />
                  India
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button 
                  onClick={handleGetDirections}
                  className="bg-inlighn-accent hover:bg-inlighn-accent-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base"
                >
                  Get Directions
                </button>
                <button 
                  onClick={handleViewOnGoogleMaps}
                  className="bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-500 hover:border-inlighn-accent text-slate-800 dark:text-slate-200 hover:text-inlighn-accent px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base"
                >
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-inlighn-accent rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        </div>

        {/* Additional location info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Reach</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-inlighn-accent mr-3">🚌</span>
                <span>Bus: Take any bus to New Gajuwaka</span>
              </li>
              <li className="flex items-start">
                <span className="text-inlighn-accent mr-3">🚗</span>
                <span>Car: 15 minutes from Visakhapatnam Railway Station</span>
              </li>
              <li className="flex items-start">
                <span className="text-inlighn-accent mr-3">🚶</span>
                <span>Walking: 5 minutes from New Gajuwaka Market</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Parking & Access</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Free parking available on premises</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Wheelchair accessible entrance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Security guard at reception</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 