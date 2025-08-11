// src/components/Header.jsx
import React from 'react';
import { Globe } from 'lucide-react'; 
import { KaiLogo } from './KaiLogo';

export const Header = ({ language, setLanguage }) => (
  // Di sini perubahannya: kita gunakan warna bawaan Tailwind
  // from-indigo-800: Ungu kebiruan yang sangat gelap
  // to-purple-600: Ungu yang lebih cerah
  <header className="bg-gradient-to-l from-indigo-800 to-purple-600 text-white p-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
      
      <div className="flex items-center gap-4">
        <KaiLogo className="h-8 w-auto" />
        <div className="w-px h-8 bg-white/30" /> 
        <h1 className="text-xl font-regular font-poppins tracking-wide">
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
