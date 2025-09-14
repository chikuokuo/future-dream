// Analytics tracking utilities for GA/GTM
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: (string | Date | Record<string, unknown>)[]) => void
  }
}

/**
 * Push event to Google Analytics / Tag Manager dataLayer
 * @param eventName - Event name for GA4 (e.g., 'button_click')
 * @param eventParams - Parameters for the event
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  try {
    // Ensure dataLayer and gtag exist
    window.dataLayer = window.dataLayer || []

    // Check if gtag is defined
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        page: 'futureDream',
        timestamp: new Date().toISOString(),
        ...eventParams
      })
      console.log('GA4 Event:', eventName, eventParams)
    } else {
      console.warn('gtag is not defined. Analytics event not sent.')
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error)
  }
}

/**
 * Track button click events
 * @param buttonClass - CSS class name of the button (in camelCase)
 * @param additionalData - Additional tracking data
 */
export function trackButtonClick(buttonClass: string, additionalData: Record<string, unknown> = {}) {
  const eventName = `click_${buttonClass}`

  trackEvent(eventName, {
    button_class: buttonClass,
    type: 'btn',
    ...additionalData
  })
}

/**
 * Track button view events (for impression tracking)
 * @param buttonClass - CSS class name of the button (in camelCase)
 * @param additionalData - Additional tracking data
 */
export function trackButtonView(buttonClass: string, additionalData: Record<string, unknown> = {}) {
  const eventName = `view_${buttonClass}`

  trackEvent(eventName, {
    button_class: buttonClass,
    type: 'btn',
    ...additionalData
  })
}
