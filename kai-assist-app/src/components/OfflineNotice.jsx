import React from 'react';
import { WifiOff } from 'lucide-react';

export default function OfflineNotice() {
  return (
    <div className="p-4 bg-red-200 text-red-800 rounded shadow-md m-4 flex items-center gap-2">
      <WifiOff /> <span>Anda sedang offline</span>
    </div>
  );
}
