import React from 'react';
import { Train } from 'lucide-react';

export const TicketInfo = ({ t, ticketData }) => {
    if (!ticketData) return null;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Train className="h-5 w-5 mr-2 text-blue-600" />
                {t.ticketInfo}
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-blue-100 text-sm">{t.passengerName}</p>
                        <p className="font-semibold text-lg">{ticketData.passengerName}</p>
                    </div>
                    <div>
                        <p className="text-blue-100 text-sm">{t.trainName}</p>
                        <p className="font-semibold">{ticketData.trainName} ({ticketData.trainNumber})</p>
                    </div>
                    <div>
                        <p className="text-blue-100 text-sm">{t.car} / {t.seat}</p>
                        <p className="font-semibold">{ticketData.car} - {ticketData.seat}</p>
                    </div>
                    <div>
                        <p className="text-blue-100 text-sm">{t.platform}</p>
                        <p className="font-semibold text-2xl">{ticketData.platform}</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-blue-100 text-sm">{t.departure}</p>
                        <p className="font-semibold text-xl">{ticketData.departure} - {ticketData.date}</p>
                        <p className="text-blue-100">{ticketData.from} → {ticketData.to}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};