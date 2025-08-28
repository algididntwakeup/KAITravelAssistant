// src/components/StationInfoHub.jsx
import React, { useState } from 'react';
import { Info, Car, Users, Clock, MapPin, Wifi, Coffee, ShoppingBag, CreditCard, Phone, AlertCircle, Landmark } from 'lucide-react';

import { AvailableTrains } from './AvailableTrains';
import { StationMap } from './StationMap';
import { ProcedureGuide } from './ProcedureGuide';

const iconMap = {
    Wifi, Coffee, ShoppingBag, CreditCard, Phone, Landmark, Car, Users, Clock
};

const colorStyles = {
    // ... (objek colorStyles tetap sama)
    green: { gradient: 'from-green-50 to-green-100 border-green-200', bg: 'bg-green-500', text: 'text-green-800', textMedium: 'text-green-700' },
    blue: { gradient: 'from-blue-50 to-blue-100 border-blue-200', bg: 'bg-blue-500', text: 'text-blue-800', textMedium: 'text-blue-700' },
    purple: { gradient: 'from-purple-50 to-purple-100 border-purple-200', bg: 'bg-purple-500', text: 'text-purple-800', textMedium: 'text-purple-700' },
    orange: { gradient: 'from-orange-50 to-orange-100 border-orange-200', bg: 'bg-orange-500', text: 'text-orange-800', textMedium: 'text-orange-700' },
    gray: { gradient: 'from-gray-50 to-gray-100 border-gray-200', bg: 'bg-gray-400', text: 'text-gray-600', textMedium: 'text-gray-500' }
};

export const StationInfoHub = ({ t, stationData, selectedStation, facilities, announcements, ticketData, availableTrains }) => {
    const [activeTab, setActiveTab] = useState('info');
    const currentStation = stationData[selectedStation];

    const allFacilities = [
        { name: t.parking, icon: 'Car', detail: currentStation.parking, available: true, subDetail: '💰 Rp 5.000/jam', color: 'green' },
        { name: t.accessGate, icon: 'Users', detail: currentStation.gates, available: true, subDetail: '🎫 Akses cepat tersedia', color: 'orange' },
        { name: t.operationalHours, icon: 'Clock', detail: currentStation.hours, available: true, subDetail: '🕐 Selalu buka untuk Anda', color: 'purple' },
        ...facilities.map(f => ({ ...f, color: f.available ? 'green' : 'gray' }))
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
            {/* ... (Header Komponen tetap sama) ... */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-80"></div>
                <div className="relative z-10">
                    <h2 className="text-xl font-bold flex items-center">
                        <Info className="h-6 w-6 mr-3 animate-pulse" />
                        {t.stationInfo}
                    </h2>
                    <p className="text-blue-100 mt-1">Informasi lengkap stasiun kereta api</p>
                </div>
            </div>

            {/* Navigasi Tab */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                {[
                    { id: 'info', label: 'Info Utama', icon: Info },
                    { id: 'facilities', label: 'Fasilitas', icon: Coffee },
                    // Tambahkan 'shortLabel' untuk versi mobile
                    { id: 'announcements', label: 'Pengumuman & Panduan', shortLabel: 'Info', icon: AlertCircle }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === tab.id 
                                ? 'bg-white text-blue-600 shadow-md transform scale-105' 
                                : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                        }`}
                    >
                        <tab.icon className="h-4 w-4 mr-2" />
                        {/* Logika untuk menampilkan label yang berbeda */}
                        <span className="hidden sm:inline">{tab.label}</span>
                        <span className="sm:hidden">{tab.shortLabel || tab.label}</span>
                    </button>
                ))}
            </div>

            {/* ... (Konten Tab tetap sama) ... */}
            {activeTab === 'info' && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-transparent bg-clip-padding shadow-inner">
                        <div className="flex items-center mb-3">
                            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                            <span className="font-semibold text-gray-800">{t.stationType || 'Jenis Stasiun'}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="group bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <p className="text-green-800 font-medium flex items-center">🚉 Stasiun Selatan <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span></p>
                                <p className="text-green-600 text-sm mt-1">Untuk Kereta Lokal</p>
                                <div className="mt-2 text-xs text-green-500">● Aktif 24/7</div>
                            </div>
                            <div className="group bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <p className="text-blue-800 font-medium flex items-center">🚄 Stasiun Utara <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span></p>
                                <p className="text-blue-600 text-sm mt-1">Untuk Kereta Antar Kota</p>
                                <div className="mt-2 text-xs text-blue-500">● Aktif 24/7</div>
                            </div>
                        </div>
                    </div>
                              <AvailableTrains 
                                        t={t}
                                        trains={availableTrains[selectedStation]}
                                    />
                    <StationMap t={t} ticketData={ticketData} />
                </div>
            )}
            
            {activeTab === 'facilities' && (
                 <div className="animate-fadeIn">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Semua Fasilitas Stasiun</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allFacilities.map((facility, index) => {
                            const IconComponent = iconMap[facility.icon];
                            const styles = colorStyles[facility.color] || colorStyles.gray;
                            return (
                                <div key={index} className={`group bg-gradient-to-br rounded-xl p-5 border hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                                    facility.available ? styles.gradient : colorStyles.gray.gradient
                                }`}>
                                    <div className="flex items-center mb-3">
                                        <div className={`p-2 rounded-lg shadow-md group-hover:scale-110 transition-transform ${facility.available ? styles.bg : colorStyles.gray.bg}`}>
                                            {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
                                        </div>
                                        <span className={`font-semibold ml-3 ${facility.available ? styles.text : colorStyles.gray.text}`}>{facility.name}</span>
                                    </div>
                                    <p className={`font-medium ${facility.available ? styles.textMedium : colorStyles.gray.textMedium}`}>{facility.detail || (facility.available ? 'Tersedia' : 'Tidak Tersedia')}</p>
                                    {facility.subDetail && <div className="mt-2 text-sm text-gray-500">{facility.subDetail}</div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {activeTab === 'announcements' && (
                <div className="animate-fadeIn space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengumuman Terbaru</h3>
                        <div className="space-y-3">
                            {announcements.map((announcement, index) => (
                                <div key={index} className={`p-4 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow ${
                                    announcement.type === 'info' ? 'bg-blue-50 border-blue-500' :
                                    announcement.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                                    'bg-green-50 border-green-500'
                                }`}>
                                    <div className="flex items-start">
                                        <AlertCircle className={`h-5 w-5 mt-0.5 mr-3 ${
                                            announcement.type === 'info' ? 'text-blue-600' :
                                            announcement.type === 'warning' ? 'text-yellow-600' :
                                            'text-green-600'
                                        }`} />
                                        <p className={`text-sm ${
                                            announcement.type === 'info' ? 'text-blue-800' :
                                            announcement.type === 'warning' ? 'text-yellow-800' :
                                            'text-green-800'
                                        }`}>{announcement.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="border-gray-200" />
                    <ProcedureGuide t={t} />
                </div>
            )}
        </div>
    );
};
