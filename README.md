# 🐾 PetCare Clinic - Veteriner Web Sitesi

Modern, responsive ve çok dilli veteriner kliniği web sitesi. React ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Canlı Demo

[GitHub Pages'te Görüntüle](https://dogansenturk.github.io/veteriner_web/)

## ✨ Özellikler

- 🌍 **Çok Dilli Destek** - Türkçe ve İngilizce
- 📱 **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX** - Tailwind CSS ile şık tasarım
- 🖼️ **Hero Slider** - Otomatik geçişli görsel galerisi
- 📝 **Blog Sistemi** - Modal popup ile makale okuma
- 🏥 **Hizmet Sayfaları** - Detaylı veteriner hizmetleri
- 📞 **Randevu Formu** - İletişim ve randevu alma
- 🖼️ **Foto Galerisi** - Lightbox ile görsel galeri
- ⚡ **Hızlı Yükleme** - Lazy loading ve optimizasyon

## 🛠️ Kullanılan Teknolojiler

### Frontend Framework
- **React** `19.1.1` - Modern UI kütüphanesi
- **React Router DOM** `7.9.2` - Sayfa yönlendirme
- **Vite** `7.1.7` - Hızlı build tool

### Styling & UI
- **Tailwind CSS** `4.0.0` - Utility-first CSS framework
- **PostCSS** `8.5.6` - CSS işleme
- **Autoprefixer** `10.4.21` - CSS vendor prefix'leri

### Development Tools
- **@vitejs/plugin-react** `5.0.3` - React plugin for Vite
- **@tailwindcss/postcss** `4.1.14` - Tailwind PostCSS entegrasyonu

## 📁 Proje Yapısı

```
veteriner_web/
├── public/
│   ├── assets/
│   │   └── images/          # Tüm görseller
│   │       ├── hero/        # Hero slider görselleri
│   │       └── ...          # Diğer görseller
│   ├── favicon.svg          # Site ikonu
│   ├── 404.html            # GitHub Pages 404 sayfası
│   └── .nojekyll           # Jekyll devre dışı
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── Header.jsx      # Site başlığı
│   │   ├── Footer.jsx      # Site alt bilgisi
│   │   ├── Loading.jsx     # Yükleme animasyonu
│   │   ├── ReservationModal.jsx  # Randevu modal'ı
│   │   └── SuccessModal.jsx      # Başarı modal'ı
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx        # Ana sayfa
│   │   ├── Services.jsx    # Hizmetler
│   │   ├── Blog.jsx        # Blog
│   │   ├── Gallery.jsx     # Foto galerisi
│   │   ├── AboutUs.jsx     # Hakkımızda
│   │   ├── Contact.jsx     # İletişim
│   │   └── NotFound.jsx    # 404 sayfası
│   ├── locales/            # Çok dilli içerik
│   │   ├── tr.js           # Türkçe çeviriler
│   │   └── en.js           # İngilizce çeviriler
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollReveal.js
│   ├── utils/              # Yardımcı fonksiyonlar
│   │   └── urlHelper.js    # URL yardımcıları
│   ├── App.jsx             # Ana uygulama
│   ├── App.css             # Global stiller
│   ├── main.jsx            # Uygulama giriş noktası
│   ├── routes.jsx          # Route tanımları
│   └── i18n.jsx            # Çok dilli sistem
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── package.json            # Proje bağımlılıkları
├── vite.config.js          # Vite konfigürasyonu
├── tailwind.config.js      # Tailwind konfigürasyonu
├── postcss.config.js       # PostCSS konfigürasyonu
└── README.md               # Bu dosya
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/dogansenturk/veteriner_web.git
cd veteriner_web
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

### Build ve Deploy

**Production build:**
```bash
npm run build
```

**Preview:**
```bash
npm run preview
```

## 🌍 Çok Dilli Sistem

Proje, React Context API kullanarak çok dilli destek sağlar:

- **Türkçe (tr.js)** - Varsayılan dil
- **İngilizce (en.js)** - İkinci dil

Header'da dil değiştirici butonlar bulunur.

## 📱 Responsive Tasarım

- **Mobile First** yaklaşımı
- **Breakpoints:**
  - `sm:` 640px+
  - `md:` 768px+
  - `lg:` 1024px+
  - `xl:` 1280px+

## 🎨 Tasarım Sistemi

### Renkler
- **Primary:** Veteriner temasına uygun yeşil tonları
- **Background:** Beyaz/koyu tema desteği
- **Text:** Yüksek kontrast oranları

### Tipografi
- **Başlıklar:** Bold, büyük fontlar
- **Metin:** Okunabilir, orta boyut
- **Responsive:** Cihaza göre ölçeklenen fontlar

## 🖼️ Görsel Optimizasyonu

- **WebP formatı** - Daha küçük dosya boyutları
- **Lazy loading** - Performans optimizasyonu
- **Responsive images** - Cihaza uygun boyutlar

## 🚀 Deployment

### GitHub Pages
Otomatik deployment GitHub Actions ile:

1. Kod `main` branch'e push edilir
2. GitHub Actions build çalıştırır
3. `dist` klasörü GitHub Pages'e deploy edilir

### Manuel Deploy
```bash
npm run build
# dist/ klasörünü web sunucunuza yükleyin
```

## 📄 Sayfalar

- **Ana Sayfa** - Hero slider, hizmetler, ekip
- **Hizmetler** - Detaylı veteriner hizmetleri
- **Blog** - Makaleler ve ipuçları
- **Galeri** - Kliniğin fotoğrafları
- **Hakkımızda** - Ekip ve misyon
- **İletişim** - Randevu formu ve bilgiler

## 🔧 Geliştirme

### Yeni Sayfa Ekleme
1. `src/pages/` altında yeni component oluşturun
2. `src/routes.jsx`'e route ekleyin
3. `src/locales/` dosyalarına çevirileri ekleyin
4. Header/Footer'a navigasyon linki ekleyin

### Yeni Dil Ekleme
1. `src/locales/` altında yeni dil dosyası oluşturun
2. `src/i18n.jsx`'e dil desteği ekleyin
3. Header'a dil değiştirici buton ekleyin

## 📝 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Doğan Şentürk**
- GitHub: [@dogansenturk](https://github.com/dogansenturk)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için:
- GitHub Issues kullanın
- Email: [iletişim bilgileri]

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
