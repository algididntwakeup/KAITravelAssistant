// src/components/AvailableTrains.jsx
import React from 'react';
import { Train, AlertCircle, Clock } from 'lucide-react';

export const AvailableTrains = ({ t, trains }) => {
  // Pemeriksaan keamanan jika data kereta tidak ada
  if (!trains || trains.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-500">
        Informasi jadwal tidak tersedia untuk stasiun ini.
      </div>
    );
  }

  return (
    
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Train className="h-5 w-5 mr-2 text-blue-600" />
        {t.availableTrains}
      </h2>
      
      {/* Banner Informasi */}
      <div className="bg-red-50 border-l-4 border-red-400 text-red-800 p-4 rounded-r-lg mt-6">
        <div className="flex">
          <div className="py-1">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
          </div>
          <div>
            <p className="text-sm">{t.platformInfoNotice}</p>
          </div>
        </div>
      </div>
      {/* Banner Informasi tambahan */}
      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg mt-3 mb-6">
        <div className="flex">
          <div className="py-1">
            <AlertCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
          </div>
          <div>
            <p className="text-sm">{t.platformQuo}</p>
          </div>
        </div>
      </div>


      {/* Daftar Kereta dengan jadwal */}
      <div className="space-y-4 mb-4">
        {trains.map((train, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 transition-shadow hover:shadow-md"
          >
            <p className="font-semibold text-gray-800">{train.name}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
              {train.times.map((time) => (
                <span 
                  key={time}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};