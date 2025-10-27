// src/components/Header.jsx
import React from 'react';
import { Globe } from 'lucide-react'; 
import { KaiLogo } from './KaiLogo';

export const Header = ({ language, setLanguage }) => (
  // === GANTI DI SINI ===
  // 1. Background jadi 'bg-white' (Putih)
  // 2. Default text jadi gelap 'text-gray-800'
  // 3. Shadow-lg biar "mengambang"
  // 4. Sticky tetap ada
  <header className="bg-white text-gray-800 p-4 shadow-lg sticky top-0 z-50">
  {/* ===================== */}

    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
      
      <div className="flex items-center gap-4">
        <KaiLogo className="h-8 w-auto" />
        {/* Garis pemisah kita ganti jadi abu-abu */}
        <div className="w-px h-8 bg-gray-300 hidden md:block" /> 
        
        {/* Teksnya kita kasih warna brand KAI */}
        <h1 className="text-xl font-semibold font-poppins tracking-wide hidden md:block">
          {/* Pakai 'indigo-800' untuk tiru biru tua KAI */}
          <span className="text-indigo-800">Travel</span>
          {/* Pakai 'orange-500' untuk tiru oranye KAI */}
          <span className="text-orange-500">Assistant</span>
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          // Tombol kita ganti jadi abu-abu muda biar kontras di background putih
          className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{language === 'id' ? 'EN' : 'ID'}</span>
        </button>
      </div>
    </div>
  </header>
);