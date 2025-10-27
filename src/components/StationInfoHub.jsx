// src/components/StationInfoHub.jsx
import React, { useState } from 'react';
import { StationMap } from './StationMap.jsx';
import AvailableTrains from './AvailableTrains.jsx';
import { ProcedureGuide } from './ProcedureGuide.jsx';

// Import ikon-ikon yang dibutuhkan dari lucide-react
import { 
    Map, 
    Clock, 
    ListChecks, 
    LayoutGrid, 
    Coffee, 
    ShoppingBag, 
    CreditCard, 
    Phone, 
    Landmark,
    Info,
    AlertTriangle,
    CheckCircle
} from 'lucide-react';

// === Komponen Inline Facilities (dengan Ikon) ===
// Mapping nama ikon dari data ke komponen ikon lucide
const facilityIcons = {
  Coffee: Coffee,
  ShoppingBag: ShoppingBag,
  CreditCard: CreditCard,
  Phone: Phone,
  Landmark: Landmark
};

const Facilities = ({ facilities }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
              <LayoutGrid className="w-6 h-6 mr-3 text-blue-600" />
              Fasilitas Stasiun
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {facilities.map(facility => {
                    const IconComponent = facilityIcons[facility.icon] || LayoutGrid; // Fallback icon
                    return (
                        <div 
                            key={facility.name} 
                            // Card untuk setiap fasilitas
                            className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center flex flex-col items-center justify-center transform hover:shadow-md hover:-translate-y-1 transition-all"
                        >
                            <IconComponent className="h-8 w-8 text-blue-700 mb-3" />
                            <p className="font-semibold text-blue-900">{facility.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
// === Akhir Komponen Facilities ===


// === Komponen Inline Announcements (dengan Ikon) ===
const announcementIcons = {
  info: <Info className="h-5 w-5 mr-3 flex-shrink-0" />,
  warning: <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />,
  success: <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
};

const Announcements = ({ announcements }) => (
    <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-5">Pengumuman Stasiun</h3>
        <div className="space-y-3">
            {announcements.map((ann, index) => (
                <div 
                    key={index} 
                    // Card untuk setiap pengumuman
                    className={`flex items-start p-4 rounded-lg shadow-sm border ${
                        ann.type === 'info' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                        ann.type === 'warning' ? 'bg-yellow-50 text-yellow-800 border-yellow-200' :
                        'bg-green-50 text-green-800 border-green-200'
                    }`}
                >
                    {announcementIcons[ann.type]}
                    <p className="font-medium">{ann.message}</p>
                </div>
            ))}
        </div>
    </div>
);
// === Akhir Komponen Announcements ===


// === Komponen StationInfoHub Utama ===
export const StationInfoHub = ({ 
    t, 
    stationData, 
    selectedStation, 
    facilities, 
    announcements, 
    ticketData,
    availableTrains 
}) => {
  
  const [activeTab, setActiveTab] = useState('info');
  const currentStationData = stationData[selectedStation];
  const currentAvailableTrains = availableTrains[selectedStation];

  // Helper untuk styling Tab
  const getTabClassName = (tabName) => {
    const isActive = activeTab === tabName;
    return `flex items-center gap-2 whitespace-nowrap py-4 px-4 border-b-4 font-semibold text-sm ${
      isActive
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    } transition-all`;
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full mx-auto border border-gray-100">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">
            {t.stationInfo} - {currentStationData.name}
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Informasi lengkap stasiun pilihan Anda.
          </p>
      </div>

      {/* Navigasi Tab dengan Ikon */}
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
          <button onClick={() => setActiveTab('info')} className={getTabClassName('info')}>
            <Map className="w-5 h-5" />
            <span>Info & Denah</span>
          </button>
          <button onClick={() => setActiveTab('schedule')} className={getTabClassName('schedule')}>
            <Clock className="w-5 h-5" />
            <span>Jadwal Kereta</span>
          </button>
          <button onClick={() => setActiveTab('procedure')} className={getTabClassName('procedure')}>
            <ListChecks className="w-5 h-5" />
            <span>Panduan</span>
          </button>
          <button onClick={() => setActiveTab('facilities')} className={getTabClassName('facilities')}>
            <LayoutGrid className="w-5 h-5" />
            <span>Fasilitas</span>
          </button>
        </nav>
      </div>

      {/* Konten Tab */}
      <div className="py-8 space-y-8"> {/* Memberi padding atas/bawah pada konten tab */}
        {activeTab === 'info' && (
          <StationMap
            t={t}
            ticketData={ticketData}
            selectedStation={selectedStation}
            stationData={stationData}
          />
        )}
        
        {activeTab === 'schedule' && (
          <div>
            <AvailableTrains trains={currentAvailableTrains} />
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">{t.platformInfoNotice}</p>
              <p className="text-sm text-yellow-700 mt-1">{t.platformQuo}</p>
            </div>
          </div>
        )}

        {activeTab === 'procedure' && (
          <ProcedureGuide t={t} />
        )}

        {activeTab === 'facilities' && (
          <div className="space-y-10">
            <Facilities facilities={facilities} />
            <Announcements announcements={announcements} />
          </div>
        )}
      </div>
    </div>
  );
}