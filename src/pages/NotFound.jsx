import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-foreground-muted-light dark:text-foreground-muted-dark mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-foreground-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-4">
            Popüler Sayfalar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/services" 
              className="p-4 bg-white dark:bg-background-dark/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">🏥</div>
              <div className="text-sm font-medium">Hizmetlerimiz</div>
            </Link>
            <Link 
              to="/about" 
              className="p-4 bg-white dark:bg-background-dark/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">👨‍⚕️</div>
              <div className="text-sm font-medium">Hakkımızda</div>
            </Link>
            <Link 
              to="/blog" 
              className="p-4 bg-white dark:bg-background-dark/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="text-sm font-medium">Blog</div>
            </Link>
            <Link 
              to="/gallery" 
              className="p-4 bg-white dark:bg-background-dark/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">📸</div>
              <div className="text-sm font-medium">Galeri</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
