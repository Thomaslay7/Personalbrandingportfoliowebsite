/**
 * Color Utility Functions
 * Helper functions untuk menggunakan color system lebih mudah di component
 */

import {
  COLORS,
  COLORS_DARK,
  getBrandGradient,
  getBrandColor,
  getSemanticColor,
  getStatusColor,
  getNeutralColor,
} from "../constants/colors";

/**
 * Get current theme (light or dark)
 * Detects dari .dark class di html element
 */
export const getCurrentTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

/**
 * Check if dark mode is active
 */
export const isDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
};

/**
 * Get color palette object untuk theme saat ini
 */
export const getCurrentColors = () => {
  return isDarkMode() ? COLORS_DARK : COLORS;
};

/**
 * Get brand gradient dengan auto-detect theme
 */
export const useBrandGradient = (
  type: "brand" | "brandToBlue" | "primary" | "success" | "error" | "warning" = "brand"
) => {
  return getBrandGradient(type, isDarkMode());
};

/**
 * Get brand color dengan auto-detect theme
 */
export const useBrandColor = (colorName: "indigo" | "blue" | "cyan") => {
  return getBrandColor(colorName, isDarkMode());
};

/**
 * Get semantic color dengan auto-detect theme
 */
export const useSemanticColor = (
  colorName: "primary" | "secondary" | "accent" | "muted"
) => {
  return getSemanticColor(colorName, isDarkMode());
};

/**
 * Get status color dengan auto-detect theme
 */
export const useStatusColor = (
  statusName: "success" | "error" | "warning" | "info"
) => {
  return getStatusColor(statusName, isDarkMode());
};

/**
 * Get neutral color dengan auto-detect theme
 */
export const useNeutralColor = (
  level: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
) => {
  return getNeutralColor(level, isDarkMode());
};

/**
 * Convert color to RGB for opacity
 * Contoh: colorToRgb("#4f46e5") → "79, 70, 229"
 */
export const colorToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 0, 0";
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(
    ", "
  );
};

/**
 * Create rgba color dengan opacity
 * Contoh: colorWithOpacity("#4f46e5", 0.5) → "rgba(79, 70, 229, 0.5)"
 */
export const colorWithOpacity = (hex: string, opacity: number): string => {
  return `rgba(${colorToRgb(hex)}, ${opacity})`;
};

/**
 * Get contrasting text color (black or white) untuk background color
 */
export const getContrastColor = (bgColor: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
  if (!result) return "#000000";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#ffffff";
};

/**
 * Lighten color by percentage
 */
export const lightenColor = (hex: string, percent: number): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

/**
 * Darken color by percentage
 */
export const darkenColor = (hex: string, percent: number): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  r = Math.max(0, Math.floor(r - r * (percent / 100)));
  g = Math.max(0, Math.floor(g - g * (percent / 100)));
  b = Math.max(0, Math.floor(b - b * (percent / 100)));

  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

/**
 * Create color shade (darker version)
 */
export const createColorShade = (hex: string, shadePercent: number = 20): string => {
  return darkenColor(hex, shadePercent);
};

/**
 * Create color tint (lighter version)
 */
export const createColorTint = (hex: string, tintPercent: number = 20): string => {
  return lightenColor(hex, tintPercent);
};
