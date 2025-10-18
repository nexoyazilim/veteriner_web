import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useI18n } from '../i18n.jsx'
import logoImage from '/assets/images/site_logo.png'

export default function Header() {
  const { t, locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])
  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 lg:gap-3 lg:ml-2">
            <Link to="/" className="block" aria-label="PetCare Clinic Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img src={logoImage} alt="PetCare Clinic Logo" className="h-10 sm:h-12 lg:h-14 w-auto" />
            </Link>
            <Link to="/" className="text-base sm:text-lg lg:text-xl font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Veteriner Klinik</Link>
          </div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <NavLink to={"/"} end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_home')}</NavLink>
            <NavLink to={"/services"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_services')}</NavLink>
            <NavLink to={"/blog"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_blog')}</NavLink>
            <NavLink to={"/gallery"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_gallery')}</NavLink>
            <NavLink to={"/about"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_about')}</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>{t('nav_contact')}</NavLink>
          </nav>
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 lg:gap-2">
              <button 
                onClick={() => setLocale('tr')} 
                className={`px-1.5 lg:px-2 py-1 text-xs font-medium rounded transition-colors ${locale === 'tr' ? 'bg-primary text-foreground-dark' : 'text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLocale('en')} 
                className={`px-1.5 lg:px-2 py-1 text-xs font-medium rounded transition-colors ${locale === 'en' ? 'bg-primary text-foreground-dark' : 'text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary'}`}
              >
                EN
              </button>
            </div>
            <Link to="/contact#booking-form" className="hidden lg:flex items-center justify-center rounded-full h-8 lg:h-10 px-4 lg:px-6 bg-primary text-white text-xs lg:text-sm font-semibold hover:bg-primary/90 transition-colors">
              {t('book_appointment')}
            </Link>
            <button className="lg:hidden text-foreground-light dark:text-foreground-dark" onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden py-3 border-t border-border-light dark:border-border-dark text-center">
            <div className="flex flex-col gap-3">
              <NavLink to={"/"} end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_home')}</NavLink>
              <NavLink to={"/services"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_services')}</NavLink>
              <NavLink to={"/blog"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_blog')}</NavLink>
              <NavLink to={"/gallery"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_gallery')}</NavLink>
              <NavLink to={"/about"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_about')}</NavLink>
              <NavLink to={"/contact"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>{t('nav_contact')}</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

