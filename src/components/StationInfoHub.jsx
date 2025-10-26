import React, { useState } from 'react';
import StationMap from './StationMap';
import Facilities from './Facilities';
import Announcements from './Announcements';
import appData from '../data/appData';

function StationInfoHub() {
  // State untuk menyimpan stasiun yang dipilih, defaultnya 'bandung'
  const [selectedStationId, setSelectedStationId] = useState('bandung');

  // Mendapatkan data stasiun yang dipilih dari appData
  const selectedStation = appData.stations[selectedStationId];

  // Fungsi untuk menangani perubahan pilihan di dropdown
  const handleStationChange = (event) => {
    setSelectedStationId(event.target.value);
  };

  // State untuk menyimpan tab yang aktif
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-4xl w-full mx-auto my-8 border border-gray-200">
      {/* Header dan Dropdown Pemilihan Stasiun */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Pusat Informasi Stasiun
          </h1>
          <p className="text-gray-500 mt-1">
            Pilih stasiun untuk melihat detail informasi.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <select
            value={selectedStationId}
            onChange={handleStationChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-sm"
            aria-label="Pilih Stasiun"
          >
            {/* Membuat opsi dropdown dari data stasiun */}
            {Object.keys(appData.stations).map((stationId) => (
              <option key={stationId} value={stationId}>
                {appData.stations[stationId].name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigasi Tab */}
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('info')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'info'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } mx-2`}
          >
            Info Utama
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'facilities'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } mx-2`}
          >
            Fasilitas
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'announcements'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } mx-2`}
          >
            Pengumuman & Panduan
          </button>
        </nav>
      </div>

      {/* Konten Tab */}
      <div className="py-6">
        {activeTab === 'info' && (
          <StationMap
            mapUrl={selectedStation.mapUrl}
            stationName={selectedStation.name}
            availableTrains={selectedStation.availableTrains}
          />
        )}
        {activeTab === 'facilities' && (
          <Facilities facilities={selectedStation.facilities} />
        )}
        {activeTab === 'announcements' && <Announcements />}
      </div>
    </div>
  );
}

export default StationInfoHub;
