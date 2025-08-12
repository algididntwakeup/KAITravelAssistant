// src/App.jsx
import React, { useState, useEffect } from 'react';

// Import data terpusat
import { mockTicketData, stationData, text, facilitiesData, announcementsData } from './data/appData';

// Import semua komponen yang sudah kita pisah
import { Header } from './components/Header';
import { TimeWarningBanner } from './components/TimeWarningBanner';
import { CurrentTimeDisplay } from './components/CurrentTimeDisplay';
import { StationSelection } from './components/StationSelection';
import { QRScanner } from './components/QRScanner';
import { TicketInfo } from './components/TicketInfo';
import { StationMap } from './components/StationMap';
import { TimeReminder } from './components/TimeReminder';
import { FaceRecognition } from './components/FaceRecognition';
import { StationInfoHub } from './components/StationInfoHub';
import { ProcedureGuide } from './components/ProcedureGuide';
import { Footer } from './components/Footer';


const App = () => {
  // State management
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('id');
  const [selectedStation, setSelectedStation] = useState('bandung');
  const [ticketData, setTicketData] = useState(null);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true); 
  const [isLoading, setIsLoading] = useState(false); // <-- Buat animasi loding
  const [error, setError] = useState(null);       // <-- Tbiar ada error handling

  // Ambil teks terjemahan berdasarkan state bahasa
  const t = text[language];

  // Efek untuk update jam setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk simulasi scan QR
const simulateQRScan = () => {
    setIsLoading(true); // 1. Mulai loading
    setError(null);     // 2. Bersihkan error sebelumnya
    setTicketData(null); // 3. Bersihkan data tiket lama

    // 4. Simulasi jeda waktu untuk mengambil data (2 detik)
    setTimeout(() => {
      // 50% kemungkinan berhasil, 50% kemungkinan gagal (untuk simulasi)
      if (Math.random() > 0.5) {
        setTicketData(mockTicketData); // Berhasil: set data tiket
      } else {
        setError("QR Code tidak valid atau tidak dapat dibaca. Silakan coba lagi."); // Gagal: set pesan error
      }
      setIsLoading(false); // 6. Selesai loading
    }, 2000);
};

  // Logika untuk menampilkan peringatan waktu
  const getDepartureWarning = () => {
    if (!ticketData) return null;
    
    const now = new Date();
    // Gunakan waktu saat ini untuk perbandingan, bukan waktu yang di-hardcode
    const departure = new Date();
    const [hours, minutes] = ticketData.departure.split(':').map(Number);
    departure.setHours(hours, minutes, 0); 
    
    const diff = departure.getTime() - now.getTime();
    const diffMinutes = Math.floor(diff / (1000 * 60));
    
    if (diffMinutes <= 5 && diffMinutes > 0) return { type: 'critical', message: t.boarding5m };
    if (diffMinutes <= 15 && diffMinutes > 0) return { type: 'warning', message: t.boarding15m };
    if (diffMinutes <= 30 && diffMinutes > 0) return { type: 'info', message: t.boarding30m };
    if (diffMinutes <= 60 && diffMinutes > 0) return { type: 'normal', message: t.boarding1h };
    
    return null;
  };

  const warning = getDepartureWarning();

  // Render UI dengan menyusun komponen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <TimeWarningBanner warning={warning} />

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <CurrentTimeDisplay 
          currentTime={currentTime} 
          showOfflineNotice={showOfflineNotice}       
          setShowOfflineNotice={setShowOfflineNotice} 
        />
          <StationSelection t={t} selectedStation={selectedStation} setSelectedStation={setSelectedStation} />
        <StationInfoHub 
          t={t} 
          stationData={stationData} 
          selectedStation={selectedStation}
          facilities={facilitiesData} // Pass the new data as props
          announcements={announcementsData} // Pass the new data as props
        />
        <FaceRecognition t={t} />
        <QRScanner t={t} ticketData={ticketData} simulateQRScan={simulateQRScan} />
        <TicketInfo t={t} ticketData={ticketData} />
        <TimeReminder t={t} ticketData={ticketData} currentTime={currentTime} />
        <StationMap t={t} ticketData={ticketData} />
        <ProcedureGuide t={t} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
