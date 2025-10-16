import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="block" aria-label="PetCare Clinic Home">
             <img src="/assets/images/site_logo.png" alt="PetCare Clinic Logo" className="h-35 w-auto" />
            </Link>
            <Link to="/" className="text-xl font-bold">PetCare Clinic</Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to={"/"} end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>Home</NavLink>
            <NavLink to={"/services"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>Services</NavLink>
            <NavLink to={"/about"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>About Us</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}>Contact</NavLink>
          </nav>
          <div className="flex items-center">
            <Link to="/contact#booking-form" className="hidden md:flex items-center justify-center rounded-full h-10 px-6 bg-primary text-foreground-dark text-sm font-bold hover:bg-primary/90 transition-colors">
              Book Appointment
            </Link>
            <button className="md:hidden text-foreground-light dark:text-foreground-dark" onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {open && (
          <div className="md:hidden py-3 border-t border-border-light dark:border-border-dark">
            <div className="flex flex-col gap-3">
              <NavLink to={"/"} end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to={"/services"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>Services</NavLink>
              <NavLink to={"/about"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>About Us</NavLink>
              <NavLink to={"/contact"} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

