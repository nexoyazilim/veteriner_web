import React, { useState, useEffect } from "react";
import { useI18n } from "../i18n.jsx";

export default function ReservationModal({ isOpen, onClose, onSubmit }) {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Modal açıldığında body scroll'unu kapat, kapandığında aç
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function - component unmount olduğunda scroll'u geri aç
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-[1px] bg-black/20 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg p-8 rounded-xl shadow-2xl space-y-6 border border-gray-200 relative"
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
          <h1 className="text-3xl font-bold text-gray-900">{t('reservation.title', 'Rezervasyon Yap')}</h1>
          <p className="text-gray-600 mt-2">{t('reservation.subtitle', 'Sizi ağırlamaktan memnuniyet duyarız. Lütfen formu doldurun.')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="sr-only" htmlFor="name">{t('reservation.nameLabel', 'Ad Soyad')}</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">person</span>
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('reservation.namePlaceholder', 'Ad Soyad')}
                  type="text"
                  required
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">{t('reservation.phoneLabel', 'Telefon Numarası')}</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">phone</span>
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('reservation.phonePlaceholder', 'Telefon Numarası')}
                  type="tel"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="sr-only" htmlFor="date">{t('reservation.dateLabel', 'Tarih')}</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                type="date"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="time">{t('reservation.timeLabel', 'Saat')}</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('reservation.timePlaceholder', 'Saat')}</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="guests">{t('reservation.guestsLabel', 'Kişi Sayısı')}</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('reservation.guestsPlaceholder', 'Kişi Sayısı')}</option>
                <option value="1">{t('reservation.guests1', '1 Kişi')}</option>
                <option value="2">{t('reservation.guests2', '2 Kişi')}</option>
                <option value="3">{t('reservation.guests3', '3 Kişi')}</option>
                <option value="4">{t('reservation.guests4', '4 Kişi')}</option>
                <option value="5+">{t('reservation.guests5plus', '5+ Kişi')}</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="sr-only" htmlFor="specialRequests">{t('reservation.requestsLabel', 'Özel İstekler')}</label>
            <textarea
              className="w-full p-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 transition-all duration-300"
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder={t('reservation.requestsPlaceholder', 'Özel istekler (opsiyonel)')}
              rows="4"
            />
          </div>
          
          <button
            className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 shadow-lg shadow-primary/20"
            type="submit"
          >
            {t('reservation.submit', 'Rezervasyonu Onayla')}
          </button>
        </form>
      </div>
    </div>
  );
}