import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'
import mainHeroImage from '/assets/images/hero/main_hero.webp'
import mainHero2Image from '/assets/images/hero/main_hero_2.webp'
import mainHero3Image from '/assets/images/hero/main_hero_3.webp'
import image1 from '/assets/images/image_1.webp'
import image2 from '/assets/images/image_2.webp'
import image3 from '/assets/images/image_3.webp'

export default function Home() {
  const { t } = useI18n()
  const heroImages = [
    mainHeroImage,
    mainHero2Image,
    mainHero3Image,
  ]
  const [heroIndex, setHeroIndex] = useState(0)
  

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  
  return (
    <>
      <section
          className="relative h-[550px] bg-background-dark text-foreground-light"
        >
          {/* Crossfade image stack */}
          <div className="absolute inset-0">
            {heroImages.map((src, idx) => (
              <div
                key={src}
                aria-hidden={heroIndex !== idx}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${heroIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url("${src}")` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="relative z-10 h-full">
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
              <div className="h-full flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">{t('hero_title')}</h1>
                  <p className="text-lg md:text-xl font-light mb-8 text-white">{t('hero_subtitle')}</p>
                  <Link
                    to="/contact#booking-form"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold bg-primary text-background-dark rounded-full hover:bg-primary/90 transition-transform transform hover:scale-105"
                  >
                    {t('book_appointment')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>


      <section className="py-8 sm:py-16 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 ">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('services_title')}</h2>
              <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">{t('services_subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src={image1} alt={t('service_preventative_title')} className="w-full object-contain rounded-lg" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('service_preventative_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('service_preventative_desc')}</p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src={image2} alt={t('service_diagnostics_title')} className="w-full object-contain rounded-lg" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('service_diagnostics_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('service_diagnostics_desc')}</p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src={image3} alt={t('service_surgery_title')} className="w-full object-contain rounded-lg" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('service_surgery_title')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('service_surgery_desc')}</p>
              </div>
            </div>
          </div>
      </section>
      <section className="py-16 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('team_title')}</h2>
              <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">{t('team_subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt={t('team_emily_name')} className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1qqTw3Jqo1x1S14jyncBWLs6KE2i2aK43ZCwMJleWW_YwweRLKi-BJ8hbqBIOhxLNy3Q4AxB3Z0dEouADIo2dVGYpj3b6ucVCZBOT3cqdrGpZEqH-yyscrxTW4jUYJIEZlhbP2FcBplqTv7Hz8ha1BlMi_85V0Sb-MyRY7PNVS9Jc2ZeTQIRtCTZbsPxK6000P3ud_ffRlxzvRlbuRGDCfF_gq18c_yHJhZ0hr9iIsucELLVS2mlvUI-BEf484htEraNLqv73Ejc" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('team_emily_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('team_emily_desc')}</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt={t('team_david_name')} className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuVl_NGWJ2fFXLXtfoQm_eTcLcy4Urh4AfJ0UMxfYW4EFpmSSgCbRbTDlVdI6PgOyhrEZpS2eFBi-otVERAa9WMu4D3u0vzs36EH_49fypwKQipvcAjNt1sBSZDQQNdedcRnVALR71Fw8V6N9wKi5RlsDcZwrHt_ErbRniGzapDjU-wcEauHec39ApR4Fh3e5j4afCDnbvEDgLWaHoxkHM4o-OGTOge1uTSSL74ketxiukzhT710sMkhjlavrb2pB1sCtvfTgUoV0" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('team_david_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('team_david_desc')}</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt={t('team_sarah_name')} className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXeZPs6uw4fu3chxND4l6Qcu0t0Il4rdJYPtvQkXD7Zb4wouprnlRRpgY9N-V5jT1ntmIudiSFP74c2u-WRtwdRliWEdMpdKKLkg8d8F910g3pCWFSdHXAZr2b1SjDtcXtXveaRPvRq1d-N05XoBn7a8DFOQBEI6cDpwFaxVKmhMaEHGMH8wQ26lvKnfUmXnGSC6KcJguGGtaH42EWGsJoKIL3HhpPG4YH-NHCpBjWe6316d9cgXk7t8RWKUTDbbrSUMkR9A1KHaU" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold">{t('team_sarah_name')}</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">{t('team_mike_desc')}</p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}