import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const heroImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCm2A0GC7z1oLleOGr0By6RO9P405kh8F168AwTLirL9BRhAGdD5Wi8ip3aImZs4H2G9iH8VJZ3kgIpfWtwf5gvXjOcCbyzv8NA9sXeGZ3asgSSsFtrq1AlzMvlrvh2BGHhO1Xkk81HJek5CjQ9WyNivLi0tmTkcqXply40BhJIFO-OxbtkjVEGYfyu6aWPGsgmFrfsdNVYusK5querb0Jjg9zkFe6wYdJzihQglyPZodOIYPZ5LAhFi9O3zDLxGNFk5aswdXdKSZw',
    '/assets/images/main_hero.webp',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBz8z2Tyl3Lh9jgPHHE1nuDTG29MeOWDcq5XleTJaCOtd_bbyobsjek9SOgGBJeOmwbZLfpMUr1iFAQilh6IlxXlaqgroO9GQ73903Uw4vE1BrsPFTaqrj1v7I3iCOLY_y4kFHQKTk4CL4cdd5UkX_VSD_XOkSbVx3d-dWhTIxVLmdJCQWPyx-dWCwADy0srOaXfF98owp3ZnY6WV7_FEjtslnTtrbVgU-qyzAjf0J6Pn6KpETBP1elPCBXeF_hu9VxsCQt6JUsp1c'
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
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">Your Pet's Health is Our Priority</h1>
                  <p className="text-lg md:text-xl font-light mb-8 text-white">Providing compassionate and comprehensive veterinary care for your beloved companions.</p>
                  <Link
                    to="/contact#booking-form"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold bg-primary text-background-dark rounded-full hover:bg-primary/90 transition-transform transform hover:scale-105"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>


      <section className="py-8 sm:py-16 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 ">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive Veterinary Services</h2>
              <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">From routine check-ups to specialized treatments, we offer a wide range of services to keep your pet healthy and happy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src="/assets/images/image_1.webp" alt="Preventative Care" className="w-full object-contain rounded-lg" />
                </div>
                <h3 className="text-xl font-bold">Preventative Care</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Regular wellness exams, vaccinations, and parasite prevention to ensure your pet's long-term health.</p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src="/assets/images/image_2.webp" alt="Diagnostics and Treatment" className="w-full object-contain rounded-lg" />
                </div>
                <h3 className="text-xl font-bold">Diagnostics &amp; Treatment</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Advanced diagnostic tools and treatment options for various medical conditions.</p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark flex flex-col items-start gap-4">
                <div className="w-full mt-2">
                  <img src="/assets/images/image_3.webp" alt="Surgery and Rehabilitation" className="w-full object-contain rounded-lg" />
                </div>
                <h3 className="text-xl font-bold">Surgery &amp; Rehabilitation</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Expert surgical procedures and post-operative care to aid in your pet's recovery.</p>
              </div>
            </div>
          </div>
      </section>
      <section className="py-16 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Caring Team</h2>
              <p className="mt-4 text-lg text-foreground-muted-light dark:text-foreground-muted-dark">Our experienced and compassionate team of veterinarians and staff are dedicated to providing the best possible care for your pets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. Emily Carter" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1qqTw3Jqo1x1S14jyncBWLs6KE2i2aK43ZCwMJleWW_YwweRLKi-BJ8hbqBIOhxLNy3Q4AxB3Z0dEouADIo2dVGYpj3b6ucVCZBOT3cqdrGpZEqH-yyscrxTW4jUYJIEZlhbP2FcBplqTv7Hz8ha1BlMi_85V0Sb-MyRY7PNVS9Jc2ZeTQIRtCTZbsPxK6000P3ud_ffRlxzvRlbuRGDCfF_gq18c_yHJhZ0hr9iIsucELLVS2mlvUI-BEf484htEraNLqv73Ejc" />
                </div>
                <h3 className="text-xl font-bold">Dr. Emily Carter</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Lead Veterinarian with over 15 years of experience in small animal care.</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Dr. David Lee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuVl_NGWJ2fFXLXtfoQm_eTcLcy4Urh4AfJ0UMxfYW4EFpmSSgCbRbTDlVdI6PgOyhrEZpS2eFBi-otVERAa9WMu4D3u0vzs36EH_49fypwKQipvcAjNt1sBSZDQQNdedcRnVALR71Fw8V6N9wKi5RlsDcZwrHt_ErbRniGzapDjU-wcEauHec39ApR4Fh3e5j4afCDnbvEDgLWaHoxkHM4o-OGTOge1uTSSL74ketxiukzhT710sMkhjlavrb2pB1sCtvfTgUoV0" />
                </div>
                <h3 className="text-xl font-bold">Dr. David Lee</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Specialist in feline medicine and surgery.</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img alt="Sarah Johnson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXeZPs6uw4fu3chxND4l6Qcu0t0Il4rdJYPtvQkXD7Zb4wouprnlRRpgY9N-V5jT1ntmIudiSFP74c2u-WRtwdRliWEdMpdKKLkg8d8F910g3pCWFSdHXAZr2b1SjDtcXtXveaRPvRq1d-N05XoBn7a8DFOQBEI6cDpwFaxVKmhMaEHGMH8wQ26lvKnfUmXnGSC6KcJguGGtaH42EWGsJoKIL3HhpPG4YH-NHCpBjWe6316d9cgXk7t8RWKUTDbbrSUMkR9A1KHaU" />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">Certified Veterinary Technician with a passion for animal welfare.</p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}