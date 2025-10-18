/**
 * URL Helper utilities for the PetCare Clinic application
 */

/**
 * Get the base URL for the application
 * @returns {string} The base URL
 */
export const getBaseUrl = () => {
  return import.meta.env.BASE_URL || '/'
}

/**
 * Get the full URL for a given path
 * @param {string} path - The path to append to base URL
 * @returns {string} The full URL
 */
export const getFullUrl = (path) => {
  const baseUrl = getBaseUrl()
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${cleanBase}/${cleanPath}`
}

/**
 * Get the asset URL for images and other static assets
 * @param {string} assetPath - The asset path (e.g., '/assets/images/logo.png')
 * @returns {string} The full asset URL
 */
export const getAssetUrl = (assetPath) => {
  // For production builds, Vite handles asset URLs automatically
  if (import.meta.env.PROD) {
    return assetPath
  }
  // For development, return as is
  return assetPath
}

/**
 * Check if the current environment is production
 * @returns {boolean} True if production, false otherwise
 */
export const isProduction = () => {
  return import.meta.env.PROD
}

/**
 * Check if the current environment is development
 * @returns {boolean} True if development, false otherwise
 */
export const isDevelopment = () => {
  return import.meta.env.DEV
}

/**
 * Get the current page URL
 * @returns {string} The current page URL
 */
export const getCurrentUrl = () => {
  return window.location.href
}

/**
 * Get the current page path
 * @returns {string} The current page path
 */
export const getCurrentPath = () => {
  return window.location.pathname
}

/**
 * Navigate to a specific URL
 * @param {string} url - The URL to navigate to
 * @param {boolean} newTab - Whether to open in a new tab
 */
export const navigateTo = (url, newTab = false) => {
  if (newTab) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}

/**
 * Scroll to top of the page
 * @param {boolean} smooth - Whether to use smooth scrolling
 */
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto'
  })
}

/**
 * Scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {boolean} smooth - Whether to use smooth scrolling
 */
export const scrollToElement = (elementId, smooth = true) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start'
    })
  }
}
