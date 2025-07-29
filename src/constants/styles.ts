// Common CSS classes used throughout the application
export const COMMON_CLASSES = {
  // Containers
  pageContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  contentContainer: "max-w-4xl mx-auto",
  sectionContainer: "py-20 px-4 sm:px-6 lg:px-8",

  // Cards
  card: "bg-white dark:bg-gray-700 rounded-lg shadow-lg",
  cardPadding: "p-6",

  // Buttons
  buttonBase:
    "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg",
  buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
  buttonSecondary:
    "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800",

  // Text
  heading: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white",
  subheading: "text-xl font-semibold text-gray-900 dark:text-white",
  bodyText: "text-gray-600 dark:text-gray-300",

  // Layout
  flexCenter: "flex items-center justify-center",
  gridResponsive: "grid grid-cols-1 lg:grid-cols-2 gap-8",

  // Effects
  hoverScale: "transition-all duration-300 hover:scale-110",
  smoothTransition: "transition-colors duration-200",
} as const;

// Common animation durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
