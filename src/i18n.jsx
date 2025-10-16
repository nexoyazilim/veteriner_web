import React, { createContext, useContext, useMemo, useState } from 'react'
import tr from './locales/tr.js'
import en from './locales/en.js'

const I18nContext = createContext(null)

const DEFAULT_LOCALE = 'tr'

const messages = { tr, en }

export function I18nProvider({ children, initialLocale }) {
  const [locale, setLocale] = useState(initialLocale || DEFAULT_LOCALE)

  const value = useMemo(() => {
    const dict = messages[locale] || messages[DEFAULT_LOCALE]
    const t = (key) => dict[key] ?? key
    return { locale, setLocale, t }
  }, [locale])

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

