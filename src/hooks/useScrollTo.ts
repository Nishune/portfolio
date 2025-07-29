"use client";

export function smoothScrollTo(elementId: string) {
  const element = document.querySelector(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useScrollTo() {
  return { smoothScrollTo, scrollToTop };
}
