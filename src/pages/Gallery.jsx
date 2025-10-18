import React, { useState, useEffect } from 'react'
import { useI18n } from '../i18n.jsx'
import image1 from '/assets/images/image_1.webp'
import image2 from '/assets/images/image_2.webp'
import image3 from '/assets/images/image_3.webp'
import image4 from '/assets/images/image_4.webp'
import aboutHero from '/assets/images/hero/about_hero.webp'
import servicesHero from '/assets/images/hero/services_hero.webp'
import mainHero from '/assets/images/hero/main_hero.webp'
import blogHero from '/assets/images/hero/blog_hero.webp'

const images = [
  image1,
  image2,
  image3,
  image4,
  aboutHero,
  servicesHero,
  mainHero,
  blogHero,
]

export default function Gallery() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t('gallery_title')}</h1>
        <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">{t('gallery_subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((src, idx) => (
          <button key={src} className="group relative aspect-square overflow-hidden rounded-lg bg-background-light dark:bg-background-dark shadow hover:shadow-lg transition-shadow" onClick={() => setActive(idx)}>
            <img src={src} alt={`Gallery ${idx + 1}`} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-black font-bold shadow" onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className="relative w-full max-h-[80vh] overflow-auto rounded-lg bg-background-light dark:bg-background-dark p-2">
              <img src={images[active]} alt="Preview" className="mx-auto max-h-[76vh] w-auto object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


