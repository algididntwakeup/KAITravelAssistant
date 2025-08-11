import React from 'react';
import { MapPin } from 'lucide-react';

export const StationSelection = ({ t, selectedStation, setSelectedStation }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
      {t.selectStation}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        onClick={() => setSelectedStation('bandung')}
        className={`p-4 rounded-lg border-2 transition-all ${
          selectedStation === 'bandung'
            ? 'border-blue-600 bg-blue-50 text-blue-800'
            : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div className="text-left">
          <h3 className="font-semibold">{t.bandungStation}</h3>
          <p className="text-sm text-gray-600">Stasiun Pusat Bandung</p>
        </div>
      </button>
      <button
        onClick={() => setSelectedStation('kiaracondong')}
        className={`p-4 rounded-lg border-2 transition-all ${
          selectedStation === 'kiaracondong'
            ? 'border-blue-600 bg-blue-50 text-blue-800'
            : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div className="text-left">
          <h3 className="font-semibold">{t.kiaracondongStation}</h3>
          <p className="text-sm text-gray-600">Stasiun Kiaracondong</p>
        </div>
      </button>
    </div>
  </div>
);