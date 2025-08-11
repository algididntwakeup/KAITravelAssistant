import React from 'react';
import { Navigation } from 'lucide-react';

export const StationMap = ({ t, ticketData }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Navigation className="h-5 w-5 mr-2 text-blue-600" />
            {t.stationMap}
        </h2>
        <div className="bg-gray-50 rounded-lg p-4">
            <svg viewBox="0 0 400 300" className="w-full h-64 border rounded">
                <rect x="20" y="20" width="360" height="260" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="8"/>
                <rect x="180" y="10" width="40" height="20" fill="#3b82f6" rx="4"/>
                <text x="200" y="24" textAnchor="middle" className="text-xs fill-white font-semibold">MASUK</text>
                <rect x="60" y="80" width="280" height="40" fill="#1e40af" rx="4"/>
                <text x="200" y="104" textAnchor="middle" className="text-sm fill-white font-semibold">PERON 1</text>
                <rect x="60" y="140" width="280" height="40" fill="#1e40af" rx="4"/>
                <text x="200" y="164" textAnchor="middle" className="text-sm fill-white font-semibold">PERON 2</text>
                <rect x="60" y="200" width="280" height="40" fill="#1e40af" rx="4"/>
                <text x="200" y="224" textAnchor="middle" className="text-sm fill-white font-semibold">PERON 3</text>
                <circle cx="200" cy="50" r="8" fill="#ef4444" className="animate-pulse"/>
                <text x="200" y="70" textAnchor="middle" className="text-xs fill-red-600 font-semibold">ANDA DISINI</text>
                {ticketData && (
                    <>
                        <path d="M 200 58 L 200 140" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" className="animate-pulse"/>
                        <circle cx="200" cy="160" r="6" fill="#ef4444"/>
                        <text x="220" y="165" className="text-xs fill-red-600 font-semibold">PERON {ticketData.platform}</text>
                    </>
                )}
                <rect x="40" y="50" width="15" height="15" fill="#10b981" rx="2"/>
                <text x="58" y="62" className="text-xs fill-gray-700">Toilet</text>
                <rect x="320" y="50" width="15" height="15" fill="#f59e0b" rx="2"/>
                <text x="338" y="62" className="text-xs fill-gray-700">Kantin</text>
            </svg>
        </div>
    </div>
);
