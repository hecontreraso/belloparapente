/// <reference types="vite/client" />

// Extend Window interface for Meta Pixel
declare global {
  interface Window {
    fbq?: (action: string, eventName: string, parameters?: any) => void;
  }
}

export {};
