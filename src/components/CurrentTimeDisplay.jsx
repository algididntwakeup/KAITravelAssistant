// src/components/CurrentTimeDisplay.jsx
import React from 'react';
import { Clock, AlertCircle, X } from 'lucide-react'; // 1. Import ikon X

// 2. Terima props baru: showOfflineNotice dan setShowOfflineNotice
export const CurrentTimeDisplay = ({ currentTime, showOfflineNotice, setShowOfflineNotice }) => (
    <>


        {/* 3. Bungkus banner dengan kondisi. Banner hanya muncul jika showOfflineNotice bernilai true */}
        {showOfflineNotice && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4 text-amber-800">
                    {/* Bagian kiri: Ikon dan teks */}
                    <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                            Halaman ini dapat disimpan untuk akses offline. Tekan Ctrl+D (PC) atau Cmd+D (Mac) untuk bookmark.
                        </span>
                    </div>

                    {/* Bagian kanan: Tombol Close */}
                    <button 
                        onClick={() => setShowOfflineNotice(false)} // 4. Saat diklik, state diubah menjadi false
                        className="p-1 rounded-full hover:bg-amber-200/50 transition-colors"
                        aria-label="Tutup notifikasi"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        )}

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <p className="text-gray-300">Waktu Saat Ini</p>
            <p className="text-3xl font-bold">{currentTime.toLocaleTimeString('id-ID')}</p>
            <p className="text-gray-300">{currentTime.toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</p>
        </div>
    </>
);
