import React from 'react';
import { Clock } from 'lucide-react';

export const TimeReminder = ({ t, ticketData, currentTime }) => {
    if (!ticketData) return null;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                {t.timeReminder}
            </h2>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-800">Waktu saat ini:</span>
                    <span className="font-semibold text-blue-900">{currentTime.toLocaleTimeString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                    <span className="text-indigo-800">Keberangkatan:</span>
                    <span className="font-semibold text-indigo-900">{ticketData.departure}</span>
                </div>
            </div>
        </div>
    );
};
