// src/components/AvailableTrains.jsx
import React from 'react';
import { Train, AlertCircle } from 'lucide-react';

export const AvailableTrains = ({ t, trains }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Train className="h-5 w-5 mr-2 text-blue-600" />
        {t.availableTrains}
      </h2>

      {/* Daftar Kereta dengan gaya "tag" */}
      <div className="flex flex-wrap gap-2 mb-4">
        {trains.map((trainName, index) => (
          <div 
            key={index} 
            className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full"
          >
            {trainName}
          </div>
        ))}
      </div>

      {/* Banner Informasi */}
      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg mt-6">
        <div className="flex">
          <div className="py-1">
            <AlertCircle className="h-5 w-5 text-blue-500 mr-3" />
          </div>
          <div>
            <p className="text-sm">{t.platformInfoNotice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
