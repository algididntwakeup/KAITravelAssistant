import React, { useState } from 'react';
import { Info, Car, Users, Clock, MapPin, Wifi, Coffee, ShoppingBag, CreditCard, Phone, AlertCircle, Star } from 'lucide-react';

const iconMap = {
    Wifi,
    Coffee,
    ShoppingBag,
    CreditCard,
    Phone
};

export const StationInfoHub = ({ t, stationData, selectedStation, facilities, announcements }) => {
    const [activeTab, setActiveTab] = useState('info');

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
            {/* Header with animated gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-lg p-4 mb-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 opacity-80"></div>
                <div className="relative z-10">
                    <h2 className="text-xl font-bold flex items-center">
                        <Info className="h-6 w-6 mr-3 animate-pulse" />
                        {t.stationInfo}
                        <div className="ml-auto flex items-center">
                            <Star className="h-5 w-5 text-yellow-300 mr-1" />
                            <span className="text-sm">4.8</span>
                        </div>
                    </h2>
                    <p className="text-blue-100 mt-1">Informasi lengkap stasiun kereta api</p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                {[
                    { id: 'info', label: 'Info Utama', icon: Info },
                    { id: 'facilities', label: 'Fasilitas', icon: Coffee },
                    { id: 'announcements', label: 'Pengumuman', icon: AlertCircle }
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
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'info' && (
                <div className="space-y-6 animate-fadeIn">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-transparent bg-clip-padding shadow-inner">
                        <div className="flex items-center mb-3">
                            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                            <span className="font-semibold text-gray-800">{t.stationType || 'Jenis Stasiun'}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <p className="text-green-800 font-medium flex items-center">
                                    🚉 Stasiun Selatan
                                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                </p>
                                <p className="text-green-600 text-sm mt-1">Untuk Kereta Lokal</p>
                                <div className="mt-2 text-xs text-green-500">● Aktif 24/7</div>
                            </div>
                            <div className="group bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <p className="text-blue-800 font-medium flex items-center">
                                    🚄 Stasiun Utara
                                    <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                </p>
                                <p className="text-blue-600 text-sm mt-1">Untuk Kereta Antar Kota</p>
                                <div className="mt-2 text-xs text-blue-500">● Aktif 24/7</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <div className="p-2 bg-green-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                                    <Car className="h-5 w-5 text-white" />
                                </div>
                                <span className="font-semibold text-green-800 ml-3">{t.parking}</span>
                            </div>
                            <p className="text-green-700 font-medium">{stationData[selectedStation].parking}</p>
                            <div className="mt-2 text-sm text-green-600">💰 Rp 5.000/jam</div>
                        </div>
                        <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <div className="p-2 bg-blue-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                                    <Users className="h-5 w-5 text-white" />
                                </div>
                                <span className="font-semibold text-blue-800 ml-3">{t.accessGate}</span>
                            </div>
                            <p className="text-blue-700 font-medium">{stationData[selectedStation].gates}</p>
                            <div className="mt-2 text-sm text-blue-600">🎫 Akses cepat tersedia</div>
                        </div>
                        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <div className="p-2 bg-purple-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                                    <Clock className="h-5 w-5 text-white" />
                                </div>
                                <span className="font-semibold text-purple-800 ml-3">{t.operationalHours}</span>
                            </div>
                            <p className="text-purple-700 font-medium">{stationData[selectedStation].hours}</p>
                            <div className="mt-2 text-sm text-purple-600">🕐 Selalu buka untuk Anda</div>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'facilities' && (
                <div className="animate-fadeIn">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Fasilitas Stasiun</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {facilities.map((facility, index) => {
                            const IconComponent = iconMap[facility.icon];
                            return(
                                <div 
                                    key={index}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                                        facility.available 
                                            ? 'bg-green-50 border-green-200 hover:border-green-300' 
                                            : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-center mb-2">
                                        <div className={`p-2 rounded-lg ${
                                            facility.available ? 'bg-green-500' : 'bg-gray-400'
                                        }`}>
                                            <IconComponent className="h-4 w-4 text-white" />
                                        </div>
                                        <span className={`ml-3 font-medium ${
                                            facility.available ? 'text-green-800' : 'text-gray-600'
                                        }`}>
                                            {facility.name}
                                        </span>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        facility.available 
                                            ? 'bg-green-100 text-green-700' 
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {facility.available ? '✓ Tersedia' : '✗ Tidak Tersedia'}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
            {activeTab === 'announcements' && (
                <div className="animate-fadeIn">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengumuman Terbaru</h3>
                    <div className="space-y-3">
                        {announcements.map((announcement, index) => (
                            <div 
                                key={index}
                                className={`p-4 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow ${
                                    announcement.type === 'info' ? 'bg-blue-50 border-blue-500' :
                                    announcement.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                                    'bg-green-50 border-green-500'
                                }`}
                            >
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
                                    }`}>
                                        {announcement.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};