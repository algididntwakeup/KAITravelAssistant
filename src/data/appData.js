// src/data/appData.js

// Data tiket tiruan untuk simulasi
export const mockTicketData = {
  passengerName: "John Doe",
  trainName: "Parahyangan",
  trainNumber: "KA 06",
  car: "EKS 1",
  seat: "5A",
  platform: "2",
  departure: "14:30",
  arrival: "17:45",
  from: "Bandung",
  to: "Gambir",
  date: "11 Agustus 2025"
};

// Data informasi stasiun
export const stationData = {
  bandung: {
    name: "Stasiun Bandung",
    parking: "Tersedia 200 slot",
    gates: "Gate A, B, C",
    hours: "04:00 - 23:00",
    platforms: ["1", "2", "3", "4"]
  },
  kiaracondong: {
    name: "Stasiun Kiaracondong",
    parking: "Tersedia 150 slot",
    gates: "Gate 1, 2",
    hours: "05:00 - 22:00",
    platforms: ["1", "2", "3"]
  }
};

// Teks terjemahan untuk multibahasa
export const text = {
  id: {
    title: "Travel Assistant",
    scanQR: "Pindai Tiket QR",
    ticketInfo: "Informasi Tiket",
    stationMap: "Denah Stasiun",
    faceRecognition: "Boarding Tanpa Repot, Cukup dengan Wajah Anda!",
    timeReminder: "Pengingat Waktu",
    stationInfo: "Info Stasiun",
    procedure: "Panduan Prosedur",
    selectStation: "Pilih Stasiun",
    bandungStation: "Stasiun Bandung",
    kiaracondongStation: "Stasiun Kiaracondong",
    passengerName: "Nama Penumpang",
    trainName: "Nama Kereta",
    car: "Gerbong",
    seat: "Kursi",
    platform: "Peron",
    departure: "Keberangkatan",
    registerFR: "Daftar Sekarang & Nikmati Kemudahannya",
    frDescription: "Lewati antrean panjang dan lupakan KTP. Daftar sekali, nikmati kemudahan boarding selamanya dengan teknologi pemindai wajah.",
    parking: "Parkir",
    accessGate: "Gate Akses",
    operationalHours: "Jam Operasional",
    boarding1h: "1 Jam menuju keberangkatan",
    boarding30m: "30 Menit menuju keberangkatan",
    boarding15m: "15 Menit menuju keberangkatan",
    boarding5m: "5 Menit menuju keberangkatan - Segera ke peron!",
    stepByStep: "Panduan Langkah demi Langkah",
    enterStation: "Masuk Stasiun",
    checkTicket: "Periksa Tiket",
    findPlatform: "Cari Peron",
    boardTrain: "Naik Kereta",
    availableTrains: "Kereta yang Tersedia",
    platformInfoNotice: "Untuk informasi peron dan jam keberangkatan yang lebih akurat, harap tanyakan petugas di stasiun.",
    platformQuo : "*Merupakan jadwal kereta tambahan"
  },
  en: {
    title: "Travel Assistant",
    scanQR: "Scan QR Ticket",
    ticketInfo: "Ticket Information",
    stationMap: "Station Map",
    faceRecognition: "Effortless Boarding, With Face Recognition!",
    timeReminder: "Time Reminder",
    stationInfo: "Station Info",
    procedure: "Procedure Guide",
    selectStation: "Select Station",
    bandungStation: "Bandung Station",
    kiaracondongStation: "Kiaracondong Station",
    passengerName: "Passenger Name",
    trainName: "Train Name",
    car: "Car",
    seat: "Seat",
    platform: "Platform",
    departure: "Departure",
    registerFR: "Register Now & Enjoy the Convenience",
    frDescription: "Skip the long queues and forget your ID card. Register once, enjoy seamless boarding forever with face scanning technology.",
    parking: "Parking",
    accessGate: "Access Gate",
    operationalHours: "Operating Hours",
    boarding1h: "1 Hour to departure",
    boarding30m: "30 Minutes to departure",
    boarding15m: "15 Minutes to departure",
    boarding5m: "5 Minutes to departure - Head to platform now!",
    stepByStep: "Step by Step Guide",
    enterStation: "Enter Station",
    checkTicket: "Check Ticket",
    findPlatform: "Find Platform",
    boardTrain: "Board Train",
    availableTrains: "Available Trains",
    platformInfoNotice: "For platform and departure time information, please ask the staff at the station.",
    platformQuo : "*Additional train schedule"
  }
};

export const facilitiesData = [
    { icon: 'Coffee', name: 'Kafe/Resto', available: true },
    { icon: 'ShoppingBag', name: 'Toko', available: true },
    { icon: 'CreditCard', name: 'ATM', available: true },
    { icon: 'Phone', name: 'Charging Station', available: true },
    { icon: 'Landmark', name: 'Mushola', available: true }
];

export const announcementsData = [
    { type: 'info', message: 'Layanan kereta api berjalan normal hari ini' },
    { type: 'warning', message: 'Pemeliharaan eskalator Lt.2 jam 14:00-16:00' },
    { type: 'success', message: 'Promo tiket weekend - diskon 20%!' }
];

export const availableTrains = {
  bandung: [
    { name: 'Parahyangan', times: ['05:00', '06:35','10:25*', '11:05', '13:05', '19:25'] },
    { name: 'Lodaya', times: ['06:30', '10:10*', '18:40', '21:15*'] },
    { name: 'Argo Wilis', times: ['07:00'] },
    { name: 'Cikuray', times: ['08:08', '20:55'] },
    { name: 'Malabar', times: ['09:30', '18:10'] },
    { name: 'Harina', times: ['09:50', '21:35'] },
    { name: 'Papandayan', times: ['09:54', '14:54'] },
    { name: 'Pangandaran', times: ['11:53', '21:54'] },
    { name: 'Ciremai', times: ['16:55'] },
    { name: 'Turangga', times: ['17:40'] },
    { name: 'Mutiara Selatan', times: ['20:00'] },
  ],
  kiaracondong: [
    { name: 'Pasundan', times: ['05:50', '10:15'] },
    { name: 'Kutojaya Selatan', times: ['08:00', '20:45'] },
    { name: 'Serayu', times: ['09:00', '21:00'] },
    { name: 'Papandayan', times: ['09:54', '14:54'] },
    { name: 'Pangandaran', times: ['11:53', '21:54'] },
  ]
};
