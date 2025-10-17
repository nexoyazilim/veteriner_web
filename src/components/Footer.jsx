import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gradient-to-br from-background-light to-background-light/80 dark:from-background-dark dark:to-background-dark/80 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 text-center">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-4 mb-6 mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
                <img src="/assets/images/site_logo.png" alt="PetCare Clinic Logo" className="relative h-16 w-16 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">PetCare Clinic</h3>
                <p className="text-sm text-primary font-medium">Your Pet's Health Partner</p>
              </div>
            </Link>
            <p className="text-foreground-muted-light dark:text-foreground-muted-dark leading-relaxed mb-6">
              Providing compassionate and comprehensive veterinary care for your beloved companions. 
              We're committed to ensuring your pet's health and happiness.
            </p>
            <div className="flex gap-4 justify-center">
              <a className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300" href="#" aria-label="Facebook">
                <svg className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300" href="#" aria-label="Instagram">
                <svg className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85C2.15 3.855 3.666 2.31 6.92 2.163 8.185 2.105 8.565 2.093 12 2.093m0-2.093c-3.264 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.28-.072 1.683-.072 4.947s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.683.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.683.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                </svg>
              </a>
              <a className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300" href="#" aria-label="Twitter">
                <svg className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground-light dark:text-foreground-dark mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
              <nav className="space-y-3">
                <NavLink to="/" end className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">Home</NavLink>
                <NavLink to="/services" className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">Services</NavLink>
                <NavLink to="/about" className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">About Us</NavLink>
              </nav>
              <nav className="space-y-3">
                <NavLink to="/blog" className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">Blog</NavLink>
                <NavLink to="/contact" className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">Contact</NavLink>
                <a href="#" className="block text-foreground-muted-light dark:text-foreground-muted-dark hover:text-primary transition-colors">Emergency</a>
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground-light dark:text-foreground-dark mb-6">Get In Touch</h4>
            <div className="space-y-4 max-w-sm mx-auto">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">Phone</p>
                  <p className="text-foreground-muted-light dark:text-foreground-muted-dark">+90 555 555 55 55</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">Email</p>
                  <p className="text-foreground-muted-light dark:text-foreground-muted-dark">info@petcare.clinic</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">Address</p>
                  <p className="text-foreground-muted-light dark:text-foreground-muted-dark">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border-light dark:border-border-dark">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
              <p>© {year} PetCare Clinic. All rights reserved.</p>
              <div className="hidden md:block w-px h-4 bg-border-light dark:bg-border-dark"></div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground-muted-light dark:text-foreground-muted-dark">
              <span>Made with</span>
              <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>for pets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}