import React from "react";
import { useI18n } from "../i18n.jsx";

export default function SuccessModal({ isOpen, onClose, message }) {
  const { t } = useI18n();
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-[1px] bg-black/20 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl space-y-6 border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Çarpı butonu */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('reservation.successTitle', 'Rezervasyon Alındı!')}</h3>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {message}
          </p>
        </div>
        
        <button
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 shadow-lg shadow-primary/20"
          onClick={onClose}
        >
          {t('reservation.ok', 'Tamam')}
        </button>
      </div>
    </div>
  );
}