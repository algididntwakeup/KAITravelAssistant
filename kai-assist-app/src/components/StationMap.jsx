// src/components/StationMap.jsx
import React from 'react';
import { Navigation } from 'lucide-react';

export const StationMap = ({ t, ticketData, selectedStation, stationData }) => {
  
  const platformLayouts = {
    bandung: ['7', '6', '5', '4'],
    kiaracondong: ['6', '5', '4']
  };

  const currentPlatforms = platformLayouts[selectedStation] || [];
  const stationName = stationData[selectedStation]?.name || t.stationMap;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Navigation className="h-5 w-5 mr-2 text-blue-600" />
            Denah {stationName}
        </h2>
        <div className="bg-gray-50 rounded-lg p-4">
            {/* PERUBAHAN DI SINI:
                - h-auto diubah menjadi h-56 (lebih pendek)
                - max-w-lg dan mx-auto ditambahkan agar tidak terlalu lebar di desktop
            */}
            <svg viewBox="0 0 400 320" className="w-full h-56 max-w-lg mx-auto border rounded">
                <rect x="20" y="20" width="360" height="280" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="8"/>
                <rect x="180" y="10" width="40" height="20" fill="#3b82f6" rx="4"/>
                <text x="200" y="24" textAnchor="middle" className="text-xs fill-white font-semibold">MASUK</text>
                
                {currentPlatforms.map((platformNumber, index) => {
                  const yPos = 80 + (index * 50);
                  return (
                    <g key={platformNumber}>
                      <rect x="60" y={yPos} width="280" height="40" fill="#1e40af" rx="4"/>
                      <text x="200" y={yPos + 24} textAnchor="middle" className="text-sm fill-white font-semibold">
                        PERON {platformNumber}
                      </text>
                    </g>
                  );
                })}
                
                <circle cx="200" cy="50" r="8" fill="#ef4444" className="animate-pulse"/>
                <text x="200" y="70" textAnchor="middle" className="text-xs fill-red-600 font-semibold">ANDA DISINI</text>
                
                {ticketData && (
                    <>
                        <path d="M 200 58 L 200 140" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" className="animate-pulse"/>
                        <circle cx="200" cy="160" r="6" fill="#ef4444"/>
                        <text x="220" y="165" className="text-xs fill-red-600 font-semibold">PERON {ticketData.platform}</text>
                    </>
                )}
                
                <rect x="40" y="50" width="15" height="15" fill="#10b981" rx="2"/>
                <text x="58" y="62" className="text-xs fill-gray-700">Toilet</text>
                
                <rect x="320" y="50" width="15" height="15" fill="#f59e0b" rx="2"/>
                <text x="338" y="62" className="text-xs fill-gray-700">Kantin</text>
            </svg>
        </div>
    </div>
  );
};
