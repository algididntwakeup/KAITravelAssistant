import React from 'react';
import { Camera, QrCode } from 'lucide-react';

export const FaceRecognition = ({ t }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Camera className="h-5 w-5 mr-2 text-blue-600" />
            {t.faceRecognition}
        </h2>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-blue-800 mb-4">{t.frDescription}</p>
            <div className="flex items-center space-x-4">
                <QrCode className="h-12 w-12 text-blue-600" />
                <div>
                    <p className="text-sm text-blue-700">Scan QR untuk registrasi cepat</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 transition-colors">
                        {t.registerFR}
                    </button>
                </div>
            </div>
        </div>
    </div>
);