import React from 'react';
import { Bell } from 'lucide-react';

export const TimeWarningBanner = ({ warning }) => {
  if (!warning) return null;

  return (
    <div className={`p-3 text-center text-white font-semibold ${
      warning.type === 'critical' ? 'bg-red-600 animate-pulse' :
      warning.type === 'warning' ? 'bg-orange-500' :
      warning.type === 'info' ? 'bg-yellow-500' : 'bg-blue-500'
    }`}>
      <div className="flex items-center justify-center space-x-2">
        <Bell className="h-5 w-5" />
        <span>{warning.message}</span>
      </div>
    </div>
  );
};