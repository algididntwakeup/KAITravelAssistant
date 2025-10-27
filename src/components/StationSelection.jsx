// src/components/StationSelection.jsx
import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react'; // Import ChevronDown

export const StationSelection = ({ t, selectedStation, setSelectedStation }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
      {t.selectStation}
    </h2>
    
    {/* Wrapper untuk styling dropdown */}
    <div className="relative group">
      {/* Ikon di dalam dropdown */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600" />
      </div>

      {/* Dropdown <select> yang asli */}
      <select
        value={selectedStation}
        onChange={(e) => setSelectedStation(e.target.value)}
        // 'appearance-none' untuk menyembunyikan panah default browser
        className="w-full p-4 pl-12 pr-10 border-2 border-gray-200 rounded-lg appearance-none focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-gray-800 font-semibold text-lg"
      >
        <option value="bandung">
          {t.bandungStation}
        </option>
        <option value="kiaracondong">
          {t.kiaracondongStation}
        </option>
      </select>

      {/* Ikon panah chevron kustom */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <ChevronDown className="h-6 w-6 text-gray-400 group-focus-within:text-blue-600 transition-transform group-focus-within:rotate-180" />
      </div>
    </div>
  </div>
);