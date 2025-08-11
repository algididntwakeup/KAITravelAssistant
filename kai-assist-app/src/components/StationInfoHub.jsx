import React from 'react';
import { Info, Car, Users, Clock } from 'lucide-react';

export const StationInfoHub = ({ t, stationData, selectedStation }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Info className="h-5 w-5 mr-2 text-blue-600" />
            {t.stationInfo}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                    <Car className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">{t.parking}</span>
                </div>
                <p className="text-green-700">{stationData[selectedStation].parking}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">{t.accessGate}</span>
                </div>
                <p className="text-blue-700">{stationData[selectedStation].gates}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-purple-800">{t.operationalHours}</span>
                </div>
                <p className="text-purple-700">{stationData[selectedStation].hours}</p>
            </div>
        </div>
    </div>
);
