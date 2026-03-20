declare global {
  interface Window {
    gtag: any;
  }
}

export function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof url != "undefined") {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18017942070/hh8XCPzhgYwcELb0z49D",
      value: 1.0,
      currency: "COP",
      event_callback: callback,
    });
  }

  return false;
}

export function trackWhatsAppConversion(whatsappUrl: string) {
  gtag_report_conversion();

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
}

export function trackInstagramConversion(instagramUrl: string) {
  gtag_report_conversion();

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Instagram Profile",
      content_category: "Social Media",
    });
  }
}
