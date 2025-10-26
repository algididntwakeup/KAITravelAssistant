// src/components/StationSelection.jsx
import React from 'react';
import { MapPin } from 'lucide-react';

export const StationSelection = ({ t, selectedStation, setSelectedStation, stationData }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
      {t.selectStation}
    </h2>
    
    {/* Mengganti tombol dengan dropdown (select) */}
    <select
      value={selectedStation}
      onChange={(e) => setSelectedStation(e.target.value)}
      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-blue-600 transition-all text-gray-800 font-semibold"
    >
      <option value="bandung">
        {t.bandungStation} (Stasiun Pusat Bandung)
      </option>
      <option value="kiaracondong">
        {t.kiaracondongStation} (Stasiun Kiaracondong)
      </option>
      {/* Catatan: Jika Anda ingin ini lebih dinamis, Anda bisa mem-passing 
        'stationData' dari App.jsx dan melakukan map seperti ini:
        {Object.keys(stationData).map(stationId => (
          <option key={stationId} value={stationId}>
            {stationData[stationId].name}
          </option>
        ))}
      */}
    </select>
  </div>
);