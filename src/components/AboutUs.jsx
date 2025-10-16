import React from 'react'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <section className="mb-24">
          <div className="relative rounded-xl overflow-hidden mb-8 h-80">
            <img
              alt="A collage of happy pets and caring vets at the clinic"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH4Hdmi0Ph1prHONLqB3aaaZ52NuKkN-nPla8t1j0S83wGEYxtg-LW7YUI5LV43bYKswNt-DdJurVhADkM525AIT_H291z9snDIiEizoGqUQED8zllvEm8D0eMw5x-BmXEXDZKEVSA2JMJZ6h5E3-IObmhArQKvmOU_TgexiizAeLjMOPKRKt8dSKvizY-X5Me_NsYjVQdYYmhpfaGHiKIfDCQhi1QcCiaeVY18-N8YGaU83otT-2dtVRrGTKa6Dujv_gY7ccG6Wc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-extrabold text-white">Our Story</h1>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-foreground-muted-light dark:text-foreground-muted-dark">
            Founded in 2010 by Dr. Emily Carter, PetCare Clinic began as a small, family-run practice with a big heart for animals. Dr. Carter's vision was to create a place
            where pets and their owners felt like part of an extended family. Over the years, we've grown, adding more services and expanding our team, but our core values
            remain the same: compassion, expertise, and a genuine love for animals.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              alt="A candid shot of a vet laughing with a dog"
              className="rounded-lg object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWEPPxNBMA7AJ8Oldb4jS1ng4pMxXKZKhiZaIf87gJvTpp4RaIkEhwCnmsAFEhmWaTecPfFiILcs7RhFznQPzg44InKjNde7nJ5APyMeTx4J83Og4sAL3x3j43KMUTOczAKCvwSNLSmy2IKJL0VXjrlvajJn25JZZXHtPDx2RUEfSQ67JHsx-OLXQkTjk0iuxj-vZdAjWwxE780GAIFLujxKYyoyJtexoftaevXysz9nsr0oTcuTuC5jveGpUlp9xzZeVBLHijY5c"
            />
            <img
              alt="A happy cat being examined by a vet"
              className="rounded-lg object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJfZonB7PNav4fd_2AM-XbYPQ3nAcXXHpKMZVJmQTpmNHQm83c0qp8nCRVZti2vAnIQassPChFynEjZwsgW_GLw247u61wQKzHAV8KEYy0rlkUB_U8PDKgdD50_PpA26b-9cSky4NVpUUZCbKrkFOyQpHoC1nFBZo0S1cKvN4evCMnBp_hfF1B_hr9KoqIm0VOz9iStgTZ99g4SuuPeyBsuz_BVSVsXqgd-rR-l-PHmMsXaU46V6Srp5N5Xcisqg_VcWV8dEY5Kjc"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-foreground-light dark:text-foreground-dark">Our Values</h2>
          <p className="text-lg leading-relaxed text-foreground-muted-light dark:text-foreground-muted-dark mb-8">
            At PetCare Clinic, we believe in providing the highest standard of care, treating every pet as if they were our own. We're committed to continuous learning and
            staying at the forefront of veterinary medicine. Our approach is always gentle, patient, and tailored to the individual needs of each animal. We value open
            communication with pet owners, ensuring they're fully informed and involved in their pet's care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-primary">Compassion</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Every pet is treated with the gentle kindness they deserve.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-primary">Expertise</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Our team is dedicated to continuous learning and advanced care.</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-primary">Partnership</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">We work with you to ensure your pet's lifelong health and happiness.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground-light dark:text-foreground-dark">Our Team</h2>
          <p className="text-lg leading-relaxed text-foreground-muted-light dark:text-foreground-muted-dark mb-12">
            Meet the dedicated professionals who make PetCare Clinic a special place. Each member brings unique skills and a shared passion for animal welfare. From our
            experienced veterinarians to our caring support staff, we're all committed to providing exceptional care and support to your pets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <img
                  alt="Dr. Emily Carter"
                  className="w-full h-auto aspect-square object-cover rounded-full mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVXHVtpZ4KtPobLMgi6tQ1AMXiCfUr5ZaqGdkVgXSKoW2Skeqg3M5uJn42j2yWeryDZfmEqkfzLT_ZZug5k_xtqdOHsbkuSKfD61EdBpq-gW9kZpUsIovObEla_4f2S02g4Bi_xCXBa_aVxZ1i71LAQoq80PpUAuwZK2nV7wla9VjOXMyrjbSbNAkdRqVNCCaIdirhevho2Tgpf8zjKXkSlZtNvXYaSVlGAJrn9T8Ah0WSlQ4Jqi8MmH0wzEtPc5YtYg-SZUduCfo"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. Emily Carter</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Founder &amp; Veterinarian</p>
            </div>
            <div className="text-center group">
              <img
                alt="Dr. David Lee"
                className="w-full h-auto aspect-square object-cover rounded-full mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACm_ob2drZtfmuS-IVFzvnx7b6vYftXO1is_5fue22fr2zVwgmIzO8-baX-jHC7RWPwCCH7fr-_l1T_ybiysyk2bleYjYtALTlq6jF3petQzeEgAexw6dSyJLGmhkLHFiMOyg51pi-iW9NfDxdm7NNFxtzg5aSN-FpQRP0amxQecFTCUl3hVtq6iLtyRSAoY6LIP5Aow5fp_yWV-mkUJ2Mg4jl22LyXhuk-JQ2qo9FbqSgh_MQarZRFsktR8-rDNXKU4xLEQfVTyA"
              />
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Dr. David Lee</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Veterinarian</p>
            </div>
            <div className="text-center group">
              <img
                alt="Sarah Johnson"
                className="w-full h-auto aspect-square object-cover rounded-full mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxrO-UCOTa9YS1YoY3UU5X7NGFCQjNCntro8Dk4WBvN-xE_iC1wvZVehkF2JuOaxHQnrQpWutAAXjKTy1_fVx10jItuZQxpl1z0Q6VdSbj_mjQKxDGRYJKL4RKIKj0_8YQZyYlo8on59C9N30fFIroIB7EI4N06xLqhXIsJWI8ayoVgm7k8E81UoasPSNUf4_ZskO-RI2Qb9gQH9-fX9ZaW6HKpUK1_AmeGgEaeCzaZMVxYI9oW0CdBNpj7aG7YiWQOUmWBYXXBWQ"
              />
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Sarah Johnson</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Veterinary Technician</p>
            </div>
            <div className="text-center group">
              <img
                alt="Mark Williams"
                className="w-full h-auto aspect-square object-cover rounded-full mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPeacex5pcNd5o6fL9lU0AZXkbkpU74WMCj6zmi7pwN2zsxMWwvKg4yNN3Vu1OOunk87U_93Sgf70OgbCV65Wq1q-EzQZNxrkXIXHtJaZvISVc3PITVf2B3-S-nqBcovaPajR9egHcX8HOhIM_gGNrTHshVF1P8o5EnMNPqv3TcAShhilDGwpdwG-AAJ7baoYXqVejW8_XoUH1DDkxl_FTth57-5cmunJaWuLGjIJmvHNxVaYu7b1Oxx2RyVHFDpUNHjRldxepoZI"
              />
              <h3 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">Mark Williams</h3>
              <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Clinic Coordinator</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}