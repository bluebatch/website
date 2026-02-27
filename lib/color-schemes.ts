export const colorSchemeMap = {
  white: { bg: "bg-white", text: "text-gray-900" },
  "gray-light": { bg: "bg-gray-50", text: "text-gray-900" },
  gray: { bg: "bg-gray-100", text: "text-gray-900" },
  dark: { bg: "bg-gray-900", text: "text-white" },
  primary: { bg: "bg-primary-600", text: "text-white" },
  "primary-dark": { bg: "bg-primary-800", text: "text-white" },
  "primary-darker": { bg: "bg-primary-900", text: "text-white" },
  "gradient-primary": {
    bg: "bg-gradient-to-br from-primary-900 to-primary-600",
    text: "text-white",
  },
  "gradient-primary-alt": {
    bg: "bg-gradient-to-br from-primary-500 to-primary-900",
    text: "text-white",
  },
  "gradient-primary-dark": {
    bg: "bg-gradient-to-br from-primary-700 to-primary-900",
    text: "text-white",
  },
  "gradient-dark": {
    bg: "bg-gradient-to-br from-gray-900 to-gray-800",
    text: "text-white",
  },
  "gradient-warm": {
    bg: "bg-gradient-to-br from-red-50 to-orange-50",
    text: "text-gray-900",
  },
  "gradient-cool": {
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    text: "text-gray-900",
  },
} as const;

export type ColorScheme = keyof typeof colorSchemeMap;
