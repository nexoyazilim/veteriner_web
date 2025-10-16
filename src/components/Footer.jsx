import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/assets/images/site_logo.png" alt="PetCare Clinic Logo" className="block h-[96px] sm:h-[112px] md:h-[128px] w-auto max-h-none shrink-0" />
              <span className="text-lg sm:text-xl font-bold">PetCare Clinic</span>
            </Link>
            <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
              Şefkatli ve kapsamlı veteriner bakımı.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-3">Gezinme</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <NavLink to="/" end className="hover:text-primary">Home</NavLink>
              <NavLink to="/services" className="hover:text-primary">Services</NavLink>
              <NavLink to="/about" className="hover:text-primary">About Us</NavLink>
              <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-3">İletişim</h4>
            <ul className="text-sm space-y-2 text-foreground-muted-light dark:text-foreground-muted-dark">
              <li>Tel: +90 555 555 55 55</li>
              <li>E-posta: info@petcare.clinic</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-3">Bizi takip edin</h4>
            <div className="flex gap-4">
              <a className="hover:text-primary" href="#" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.9-2.42-.84.5-1.78.86-2.79 1.07A4.48 4.48 0 0 0 12 8.76a4.49 4.49 0 0 0 .1 1C7.8 9.6 4.1 7.64 1.7 4.79a4.5 4.5 0 0 0 1.4 6 4.48 4.48 0 0 1-2-.55v.05c0 2.2 1.56 4.03 3.64 4.44a4.52 4.52 0 0 1-2 .08c.58 1.8 2.26 3.1 4.25 3.14A9 9 0 0 1 1.5 19.94a12.6 12.6 0 0 0 6.8 2c8.15 0 12.6-6.75 12.6-12.6 0-.2 0-.38-.05-.56.86-.62 1.6-1.4 2.16-2.24z"></path></svg>
              </a>
              <a className="hover:text-primary" href="#" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.69 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85C2.15 3.855 3.666 2.31 6.92 2.163 8.185 2.105 8.565 2.093 12 2.093m0-2.093c-3.264 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.28-.072 1.683-.072 4.947s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.683.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.683.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0  0 0 0 2.88z"></path></svg>
              </a>
              <a className="hover:text-primary" href="#" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 18H5V9h3v9zm-1.5-9.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75S7.47 8.75 6.5 8.75zM19 18h-3v-4.74c0-1.42-.6-2.5-1.99-2.5-1.07 0-1.7.72-1.99 1.42-.1.25-.13.6-.13 1v4.82h-3V9h3v1.34c.43-.8 1.52-1.59 3.26-1.59 2.38 0 4.18 1.56 4.18 4.89V18z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">© {year} PetCare Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

