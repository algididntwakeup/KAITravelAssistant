import React from 'react';
import { Train, Globe } from 'lucide-react';

export const Header = ({ t, language, setLanguage }) => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Train className="h-8 w-8" />
        <h1 className="text-xl font-bold">{t.title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-lg transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm">{language === 'id' ? 'EN' : 'ID'}</span>
        </button>
      </div>
    </div>
  </header>
);