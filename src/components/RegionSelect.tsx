
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const RegionSelect = () => {
  const [selectedRegion, setSelectedRegion] = useState('Select Your Region');
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Replace with actual regions data
  const regions = [
    { id: 1, name: 'Bangalore', campuses: 3 },
    { id: 2, name: 'Hyderabad', campuses: 2 },
    { id: 3, name: 'Pune', campuses: 2 },
    { id: 4, name: 'Chennai', campuses: 1 },
    { id: 5, name: 'Mumbai', campuses: 2 }
  ];

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
    
    // TODO: Set context cookie for region
    // TODO: Customize "Top Picks" and "Upcoming Batches" based on region
    localStorage.setItem('selectedRegion', region);
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
          Choose Your Campus Location
        </h2>
        
        <div className="relative inline-block">
          {/* Dropdown Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-3 bg-white border-2 border-slate-200 hover:border-blue-500 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 min-w-64"
          >
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-slate-700 font-medium">{selectedRegion}</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-10">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionSelect(region.name)}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{region.name}</span>
                    <span className="text-sm text-slate-500">{region.campuses} campus{region.campuses > 1 ? 'es' : ''}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TODO: Alternative modal implementation for mobile */}
      </div>
    </section>
  );
};

export default RegionSelect;
