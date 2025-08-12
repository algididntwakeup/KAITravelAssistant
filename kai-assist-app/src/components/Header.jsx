// src/components/Header.jsx
import React from 'react';
import { Globe } from 'lucide-react'; 
import { KaiLogo } from './KaiLogo';

export const Header = ({ language, setLanguage }) => (
  <header className="bg-gradient-to-r from-indigo-800 to-purple-600 text-white p-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
      
      <div className="flex items-center gap-4">
        <KaiLogo className="h-8 w-auto" />
        
        {/* Garis pemisah ini sekarang akan hilang di layar kecil (di bawah 768px) */}
        <div className="w-px h-8 bg-white/30 hidden md:block" /> 
        
        {/* Judul ini sekarang akan hilang di layar kecil (di bawah 768px) */}
        <h1 className="text-xl font-semibold font-poppins tracking-wide hidden md:block">
          TravelAssistant
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm">{language === 'id' ? 'EN' : 'ID'}</span>
        </button>
      </div>
    </div>
  </header>
);
