// src/components/StationInfoHub.jsx
import React, { useState } from 'react';
import { StationMap } from './StationMap.jsx'; // Pastikan import StationMap
import AvailableTrains from './AvailableTrains.jsx'; // Import AvailableTrains
import { ProcedureGuide } from './ProcedureGuide.jsx'; // Import ProcedureGuide
// Komponen Facilities dan Announcements sepertinya belum ada di file terpisah,
// jadi saya akan buatkan versi sederhananya di sini.

// Komponen mini jika filenya belum dibuat
const Facilities = ({ facilities }) => (
    <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Fasilitas Stasiun</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.map(facility => (
                <div key={facility.name} className="bg-gray-50 p-4 rounded-lg text-center">
                    {/* Anda bisa menambahkan ikon di sini nanti */}
                    <p className="font-semibold text-gray-800">{facility.name}</p>
                </div>
            ))}
        </div>
    </div>
);

const Announcements = ({ announcements }) => (
    <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Pengumuman</h3>
        <div className="space-y-3">
            {announcements.map((ann, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                    ann.type === 'info' ? 'bg-blue-50 text-blue-800' :
                    ann.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                    'bg-green-50 text-green-800'
                }`}>
                    <p className="font-medium">{ann.message}</p>
                </div>
            ))}
        </div>
    </div>
);


// Komponen StationInfoHub utama yang sudah direvisi
export const StationInfoHub = ({ 
    t, 
    stationData, 
    selectedStation, 
    facilities, 
    announcements, 
    ticketData,
    availableTrains 
}) => {
  
  // State untuk menyimpan tab yang aktif
  const [activeTab, setActiveTab] = useState('info');

  // Mendapatkan data untuk stasiun yang dipilih dari props
  const currentStationData = stationData[selectedStation];
  const currentAvailableTrains = availableTrains[selectedStation];

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full mx-auto border border-gray-200">
      {/* Header */}
      <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {t.stationInfo} - {currentStationData.name}
          </h1>
          <p className="text-gray-500 mt-1">
            Informasi, denah, dan jadwal kereta untuk stasiun yang Anda pilih.
          </p>
      </div>

      {/* Navigasi Tab */}
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('info')}
            className={`whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm ${
              activeTab === 'info'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Info & Denah
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm ${
              activeTab === 'schedule'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Jadwal Kereta
          </button>
          <button
            onClick={() => setActiveTab('procedure')}
            className={`whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm ${
              activeTab === 'procedure'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Panduan
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm ${
              activeTab === 'facilities'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Fasilitas
          </button>
        </nav>
      </div>

      {/* Konten Tab */}
      <div className="py-6 space-y-6">
        {activeTab === 'info' && (
          <StationMap
            t={t}
            ticketData={ticketData}
            selectedStation={selectedStation}
            stationData={stationData}
          />
        )}
        
        {/* INI BAGIAN BARU (DROPDOWN JADWAL KERETA) */}
        {activeTab === 'schedule' && (
          <div>
            <AvailableTrains trains={currentAvailableTrains} />
            <p className="text-sm text-gray-500 mt-4">{t.platformInfoNotice}</p>
            <p className="text-sm text-gray-500 mt-1">{t.platformQuo}</p>
          </div>
        )}

        {activeTab === 'procedure' && (
          <ProcedureGuide t={t} />
        )}

        {activeTab === 'facilities' && (
          <div>
            <Facilities facilities={facilities} />
            <div className="mt-6">
              <Announcements announcements={announcements} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Jangan lupa export default jika App.jsx mengimpornya sebagai default
// export default StationInfoHub; 
// ato export const' jg gapapadah