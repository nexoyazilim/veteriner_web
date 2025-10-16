import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Services from './pages/Services.jsx'

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

