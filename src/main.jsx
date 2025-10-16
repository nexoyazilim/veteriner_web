import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { I18nProvider } from './i18n.jsx'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <I18nProvider initialLocale="tr">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>
)

