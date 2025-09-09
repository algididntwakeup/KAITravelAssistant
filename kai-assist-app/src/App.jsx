// src/App.jsx
import React, { useState, useEffect } from 'react';

// Import data terpusat (dengan ekstensi file yang benar)
import { mockTicketData, stationData, text, facilitiesData, announcementsData, availableTrains } from './data/appData.js';

// Import semua komponen yang sudah kita pisah (dengan ekstensi file yang benar)
import { Header } from './components/Header.jsx';
import { TimeWarningBanner } from './components/TimeWarningBanner.jsx';
import { CurrentTimeDisplay } from './components/CurrentTimeDisplay.jsx';
import { StationSelection } from './components/StationSelection.jsx';
import { QRScanner } from './components/QRScanner.jsx';
import { TicketInfo } from './components/TicketInfo.jsx';
import { TimeReminder } from './components/TimeReminder.jsx';
import { FaceRecognition } from './components/FaceRecognition.jsx';
import { StationInfoHub } from './components/StationInfoHub.jsx';
import { Footer } from './components/Footer.jsx';

const App = () => {
  // State management
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('id');
  const [selectedStation, setSelectedStation] = useState('bandung');
  const [ticketData, setTicketData] = useState(null);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setIsLoading(true);
    setError(null);
    setTicketData(null);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setTicketData(mockTicketData);
      } else {
        setError("QR Code tidak valid atau tidak dapat dibaca. Silakan coba lagi.");
      }
      setIsLoading(false);
    }, 2000);
  };

  // Logika untuk menampilkan peringatan waktu
  const getDepartureWarning = () => {
    if (!ticketData) return null;
    const now = new Date();
    const departure = new Date();
    const [hours, minutes] = ticketData.departure.split(':').map(Number);
    departure.setHours(hours, minutes, 0); 
    const diffMinutes = Math.floor((departure.getTime() - now.getTime()) / (1000 * 60));
    if (diffMinutes <= 5 && diffMinutes > 0) return { type: 'critical', message: t.boarding5m };
    if (diffMinutes <= 15 && diffMinutes > 0) return { type: 'warning', message: t.boarding15m };
    if (diffMinutes <= 30 && diffMinutes > 0) return { type: 'info', message: t.boarding30m };
    if (diffMinutes <= 60 && diffMinutes > 0) return { type: 'normal', message: t.boarding1h };
    return null;
  };

  const warning = getDepartureWarning();

  // Render UI dengan menyusun komponen
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <TimeWarningBanner warning={warning} />

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <CurrentTimeDisplay 
          currentTime={currentTime} 
          showOfflineNotice={showOfflineNotice}       
          setShowOfflineNotice={setShowOfflineNotice} 
        />
        <FaceRecognition t={t} />
        <StationSelection t={t} selectedStation={selectedStation} setSelectedStation={setSelectedStation} />
        
        <StationInfoHub 
          t={t} 
          stationData={stationData} 
          selectedStation={selectedStation}
          facilities={facilitiesData}
          announcements={announcementsData}
          ticketData={ticketData}
          // Kirim data jadwal kereta ke StationInfoHub
          availableTrains={availableTrains}
        />

        <QRScanner 
            t={t} 
            ticketData={ticketData} 
            simulateQRScan={simulateQRScan} 
            isLoading={isLoading}
            error={error}
        />
        <TicketInfo t={t} ticketData={ticketData} />
        <TimeReminder t={t} ticketData={ticketData} currentTime={currentTime} />
        
      </main>

      <Footer />
    </div>
  );
};

export default App;
