// src/components/FaceRecognition.jsx
import React from 'react';
import { Camera, ShieldCheck, ArrowRight } from 'lucide-react';

// Fungsi untuk mengarahkan pengguna ke halaman pendaftaran KAI Access
const redirectToKAI = () => {
  // Buka di tab baru
  window.open('https://landing-page-kai-access.vercel.app/', '_blank');
};

export const FaceRecognition = ({ t }) => (
  // Card utama dengan gradasi warna biru-ungu yang modern dan menarik
  <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 flex flex-col md:flex-row items-center gap-8">
    
    {/* Kolom Kiri: Ikon Besar sebagai Visual Utama */}
    <div className="flex-shrink-0">
      <div className="relative">
        {/* Lingkaran latar belakang untuk ikon */}
        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
        {/* Ikon Kamera di tengah dengan efek bayangan */}
        <Camera className="relative h-24 w-24 text-white drop-shadow-lg" />
      </div>
    </div>

    {/* Kolom Kanan: Teks Persuasif dan Tombol Aksi */}
    <div className="text-center md:text-left">
      {/* Tagline Keamanan */}
      <div className="flex items-center justify-center md:justify-start text-sm font-semibold text-cyan-300 mb-2">
        <ShieldCheck className="h-4 w-4 mr-2" />
        <span>Aman & Terverifikasi</span>
      </div>
      
      {/* Judul Utama yang Menarik Perhatian */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        {t.faceRecognition}
      </h2>
      
      {/* Deskripsi yang Menjelaskan Keuntungan */}
      <p className="text-blue-100 mb-6 max-w-lg">
        {t.frDescription}
      </p>
      
      {/* Tombol Call-to-Action (CTA) */}
      <button 
        onClick={redirectToKAI}
        className="group inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-300/50 active:scale-95"
      >
        <span>{t.registerFR}</span>
        {/* Ikon panah yang bergerak saat tombol di-hover */}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);
