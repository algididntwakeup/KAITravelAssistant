// src/components/AvailableTrains.jsx
import React from 'react';

function AvailableTrains({ trains }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Jadwal Kereta Tersedia
      </h3>
      <div className="space-y-4"> {/* Menambah space antar card */}
        
        {trains.map((train) => (
          <details
            key={train.name}
            // Styling card utama: shadow, rounded, border, dan ring saat 'open'
            className="group bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-blue-500 open:border-blue-500"
          >
            {/* Header dropdown yang bisa diklik */}
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 hover:bg-gray-50 transition-colors">
              <span className="text-lg font-semibold text-blue-800">{train.name}</span>
              <span className="transition-transform transform group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </summary>
            
            {/* Konten dropdown dengan background berbeda */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Jam Keberangkatan:</p>
              <div className="flex flex-wrap gap-2">
                {train.times.map((time) => (
                  <span
                    key={time}
                    // Badge jam keberangkatan dibuat lebih besar dan jelas
                    className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1.5 rounded-full"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default AvailableTrains;