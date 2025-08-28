// src/components/TrainSchedule.jsx
import React from 'react';
import { Clock, Train, MapPin } from 'lucide-react';

// Helper untuk menentukan warna berdasarkan tipe kereta
const getTypeColor = (type) => {
  switch (type) {
    case 'Eksekutif': return 'bg-purple-600';
    case 'Campuran': return 'bg-blue-600';
    case 'Ekonomi': return 'bg-orange-500';
    default: return 'bg-gray-500';
  }
};

export const TrainSchedule = ({ t, schedules, stationName, currentTime }) => {
  // Filter jadwal untuk hanya menampilkan kereta yang akan berangkat dalam 1 jam ke depan
  const upcomingTrains = schedules.filter(train => {
    const [hours, minutes] = train.time.split(':').map(Number);
    const trainTime = new Date();
    trainTime.setHours(hours, minutes, 0);

    const timeDiff = (trainTime.getTime() - currentTime.getTime()) / (1000 * 60);
    return timeDiff > 0 && timeDiff <= 60;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Clock className="h-5 w-5 mr-2 text-blue-600" />
        Jadwal Keberangkatan - {stationName}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Menampilkan kereta yang akan berangkat dalam 60 menit ke depan.
      </p>
      
      {upcomingTrains.length > 0 ? (
        <div className="space-y-3">
          {upcomingTrains.map((train, index) => (
            <div key={index} className="bg-gray-50 border-l-4 border-blue-500 rounded-r-lg p-4 flex items-center justify-between hover:bg-blue-50 transition-colors">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-700 mr-4">{train.time}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    <Train className="h-4 w-4 mr-2" />
                    {train.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="h-3 w-3 mr-1.5" />
                    Tujuan: {train.destination}
                  </p>
                </div>
              </div>
              <div className={`text-xs text-white font-semibold px-3 py-1 rounded-full ${getTypeColor(train.type)}`}>
                {train.type}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Tidak ada keberangkatan dalam 60 menit ke depan.</p>
        </div>
      )}
    </div>
  );
};
