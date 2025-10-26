import React from 'react';

// Komponen untuk menampilkan daftar kereta yang tersedia dalam format dropdown
function AvailableTrains({ trains }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Jadwal Kereta Tersedia
      </h3>
      <div className="space-y-3">
        {/* Melakukan iterasi untuk setiap kereta dan menampilkannya sebagai dropdown */}
        {trains.map((train) => (
          <details
            key={train.name}
            className="group bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
          >
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-gray-800">{train.name}</span>
              <span className="transition-transform transform group-open:rotate-180">
                <svg
                  className="w-5 h-5 text-gray-500"
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
            {/* Daftar jadwal keberangkatan */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Jam Keberangkatan:</p>
              <div className="flex flex-wrap gap-2">
                {train.schedule.map((time) => (
                  <span
                    key={time}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full"
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
