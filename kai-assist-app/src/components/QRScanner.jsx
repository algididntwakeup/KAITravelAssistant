// src/components/QRScanner.jsx
import React from 'react';
import { QrCode, AlertTriangle, CheckCircle } from 'lucide-react';

// Buat komponen kecil untuk Loading Spinner
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center text-center p-8">
    <svg className="animate-spin h-12 w-12 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="text-gray-600 font-semibold">Membaca QR Code...</p>
  </div>
);

export const QRScanner = ({ t, ticketData, simulateQRScan, isLoading, error }) => {
  const renderContent = () => {
    // 1. Jika sedang loading, tampilkan spinner
    if (isLoading) {
      return <LoadingSpinner />;
    }

    // 2. Jika ada data tiket (berhasil), tampilkan pesan sukses
    if (ticketData) {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
          <p className="font-semibold text-green-800">Tiket berhasil dipindai!</p>
        </div>
      );
    }

    // 3. Jika tidak ada apa-apa (tampilan awal)
    return (
      <div className="text-center">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
          <QrCode className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Arahkan kamera ke QR Code tiket Anda</p>
          <button
            onClick={simulateQRScan}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
          >
            Simulasi Scan QR
          </button>
        </div>
        {/* Tampilkan pesan error jika ada */}
        {error && (
            <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-lg flex items-center justify-center space-x-2">
                <AlertTriangle className="h-5 w-5"/>
                <span className="text-sm">{error}</span>
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <QrCode className="h-5 w-5 mr-2 text-blue-600" />
        {t.scanQR}
      </h2>
      {renderContent()}
    </div>
  );
};
