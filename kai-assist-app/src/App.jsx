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
// StationMap dan ProcedureGuide tidak perlu di-import di sini lagi
import { TimeReminder } from './components/TimeReminder';
import { FaceRecognition } from './components/FaceRecognition';
import { StationInfoHub } from './components/StationInfoHub';
import { Footer } from './components/Footer';


const App = () => {
  // ... (State management Anda tetap sama)
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('id');
  const [selectedStation, setSelectedStation] = useState('bandung');
  const [ticketData, setTicketData] = useState(null);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = text[language];

  // ... (useEffect dan fungsi Anda tetap sama)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
          facilities={facilitiesData}
          announcements={announcementsData}
          ticketData={ticketData} // <-- Kirim data tiket ke sini
        />

        <FaceRecognition t={t} />
        <QRScanner 
            t={t} 
            ticketData={ticketData} 
            simulateQRScan={simulateQRScan} 
            isLoading={isLoading}
            error={error}
        />
        <TicketInfo t={t} ticketData={ticketData} />
        <TimeReminder t={t} ticketData={ticketData} currentTime={currentTime} />
        
        {/* StationMap dan ProcedureGuide sudah dipindahkan */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
