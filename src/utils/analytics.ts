// Analytics tracking utilities for GA/GTM
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: (string | Date | Record<string, unknown>)[]) => void
  }
}

/**
 * Push event to Google Analytics / Tag Manager dataLayer
 * @param eventName - The event name for the dataLayer ('click', 'view', etc.)
 * @param eventParams - Parameters for the event
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  try {
    window.dataLayer = window.dataLayer || []

    // Always push to dataLayer for GTM to handle.
    // GTM will then be responsible for firing the GA4 tag with the dynamic event name.
    const dataLayerObject = {
      event: eventName, // This will be 'click' or 'view'
      ...eventParams
    }

    window.dataLayer.push(dataLayerObject)
    console.log('DataLayer Event Pushed for GTM:', dataLayerObject)
  } catch (error) {
    console.warn('Analytics tracking error:', error)
  }
}

/**
 * Track button click events
 * @param buttonContent - A descriptor for the button (camelCased from class name)
 * @param additionalData - Additional tracking data
 */
export function trackButtonClick(buttonContent: string, additionalData: Record<string, unknown> = {}) {
  trackEvent('click', { // Event name is 'click' to match GTM trigger
    page: 'futureDream',
    type: 'btn',
    action: 'click',
    content: buttonContent, // e.g., 'btnPrimary'
    ...additionalData
  })
}

/**
 * Track button view events (for impression tracking)
 * @param buttonContent - A descriptor for the button (camelCased from class name)
 * @param additionalData - Additional tracking data
 */
export function trackButtonView(buttonContent: string, additionalData: Record<string, unknown> = {}) {
    trackEvent('view', { // Event name is 'view' to match GTM trigger
    page: 'futureDream',
    type: 'btn',
    action: 'view',
    content: buttonContent, // e.g., 'btnPrimary'
    ...additionalData
  })
}
