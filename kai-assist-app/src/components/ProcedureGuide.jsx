import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ProcedureGuide = ({ t }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
            {t.procedure}
        </h2>
        <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                    <h3 className="font-semibold text-blue-800">{t.enterStation}</h3>
                    <p className="text-blue-700 text-sm">Tunjukkan tiket di gate masuk atau gunakan Face Recognition</p>
                </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                    <h3 className="font-semibold text-green-800">{t.checkTicket}</h3>
                    <p className="text-green-700 text-sm">Periksa informasi gerbong dan kursi pada tiket digital</p>
                </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                    <h3 className="font-semibold text-yellow-800">{t.findPlatform}</h3>
                    <p className="text-yellow-700 text-sm">Ikuti petunjuk ke peron sesuai denah stasiun</p>
                </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                    <h3 className="font-semibold text-purple-800">{t.boardTrain}</h3>
                    <p className="text-purple-700 text-sm">Naik kereta 15 menit sebelum keberangkatan</p>
                </div>
            </div>
        </div>
    </div>
);