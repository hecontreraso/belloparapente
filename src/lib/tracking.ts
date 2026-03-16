// Google Ads Conversion Tracking
declare global {
  interface Window {
    gtag: any;
    fbq: any;
  }
}

/**
 * Reports a conversion to Google Ads
 * @param url Optional URL to redirect to after conversion
 * @returns false to prevent default link behavior
 */
export function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18017942070/oEboCI3ymYkcELb0z49D',
      'event_callback': callback
    });
  }
  
  return false;
}

/**
 * Track WhatsApp contact conversion
 * @param whatsappUrl The WhatsApp URL to redirect to
 */
export function trackWhatsAppConversion(whatsappUrl: string) {
  // Track Google Ads conversion
  gtag_report_conversion(whatsappUrl);
  
  // Track Facebook Pixel with InitiateContact event (more specific than Contact)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateContact', {
      content_name: 'WhatsApp Contact',
      content_category: 'Booking'
    });
  }
}

/**
 * Track Instagram click conversion  
 * @param instagramUrl The Instagram URL to redirect to
 */
export function trackInstagramConversion(instagramUrl: string) {
  // Track Google Ads conversion
  gtag_report_conversion(instagramUrl);
  
  // Track Facebook Pixel with ViewContent event (more appropriate for Instagram clicks)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Instagram Profile',
      content_category: 'Social Media'
    });
  }
}