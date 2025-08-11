import React from 'react';
import { QrCode } from 'lucide-react';

export const QRScanner = ({ t, ticketData, simulateQRScan }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <QrCode className="h-5 w-5 mr-2 text-blue-600" />
      {t.scanQR}
    </h2>
    {!ticketData ? (
      <div className="text-center">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
          <QrCode className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Arahkan kamera ke QR Code tiket Anda</p>
          <button
            onClick={simulateQRScan}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Simulasi Scan QR
          </button>
        </div>
      </div>
    ) : (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center text-green-800 mb-2">
          <QrCode className="h-5 w-5 mr-2" />
          <span className="font-semibold">Tiket berhasil dipindai!</span>
        </div>
      </div>
    )}
  </div>
);
