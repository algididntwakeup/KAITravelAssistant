import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

export const CurrentTimeDisplay = ({ currentTime }) => (
    <>
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
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center text-amber-800">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">
                    Halaman ini dapat disimpan untuk akses offline. Tekan Ctrl+D (PC) atau Cmd+D (Mac) untuk bookmark.
                </span>
            </div>
        </div>
    </>
);
