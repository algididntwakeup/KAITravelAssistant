import React from 'react';
import { Train } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
                <Train className="h-6 w-6" />
                <span className="font-semibold">PT Kereta Api Indonesia (Persero) </span>
            </div>
            <p className="text-gray-400 text-sm">Melayani dengan sepenuh hati</p>
        </div>
    </footer>
);
