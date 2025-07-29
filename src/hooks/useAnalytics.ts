"use client";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Utility function to send events to Google Analytics
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", "button", `${buttonName} - ${location}`);
};

export const trackSectionView = (sectionName: string) => {
  trackEvent("view", "section", sectionName);
};

export const trackDownload = (fileName: string) => {
  trackEvent("download", "file", fileName);
};

export const trackContactForm = (action: "submit" | "success" | "error") => {
  trackEvent(action, "contact_form", action);
};

export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent("language_switch", "ui", `${fromLang}_to_${toLang}`);
};

export const trackThemeSwitch = (newTheme: string) => {
  trackEvent("theme_switch", "ui", newTheme);
};
