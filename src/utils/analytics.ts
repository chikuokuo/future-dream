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

    // For GTM, we push an object with an 'event' key.
    // gtag('event', ...) does this under the hood.
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams)
      console.log('GA4 Event Sent:', eventName, eventParams)
    } else {
        // Fallback for when gtag is not there, maybe push directly to dataLayer
        window.dataLayer.push({
            event: eventName,
            ...eventParams
        });
      console.warn('gtag is not defined. Pushed directly to dataLayer.')
    }
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
