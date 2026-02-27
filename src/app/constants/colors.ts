/**
 * Brand Color Constants
 * Centralized color management for easy maintenance
 * Update colors here and they'll be reflected everywhere
 *
 * Structure:
 * - brand: Primary brand colors
 * - semantic: Semantic colors for different contexts
 * - status: Status/feedback colors (success, error, warning, info)
 * - neutral: Neutral grays for text, backgrounds, borders
 * - gradients: Brand gradient variations
 */

// ============================================================================
// LIGHT MODE COLORS
// ============================================================================

export const COLORS = {
  // Brand Colors
  brand: {
    indigo: "#4f46e5",
    blue: "#3b82f6",
    cyan: "#0ea5e9",
  },

  // Semantic Colors (for different UI contexts)
  semantic: {
    primary: "#4f46e5",        // Main actions, primary elements
    secondary: "#ede9fe",      // Secondary elements
    accent: "#0ea5e9",         // Accents, highlights
    muted: "#6b6888",          // Muted text, disabled states
  },

  // Status Colors (feedback & states)
  status: {
    success: "#10b981",        // Green - Success, valid
    error: "#ef4444",          // Red - Error, danger
    warning: "#f59e0b",        // Amber - Warning, caution
    info: "#3b82f6",           // Blue - Info, neutral
  },

  // Neutral Colors (grayscale)
  neutral: {
    50: "#fafaf9",             // Lightest
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",            // Darkest
  },

  // Gradients
  gradients: {
    // Full gradient: Indigo → Blue → Cyan
    brand: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #0ea5e9 100%)",
    // Indigo → Blue (for buttons, etc)
    brandToBlue: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
    // Alternative gradient
    primary: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
    // Success gradient
    success: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    // Error gradient
    error: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    // Warning gradient
    warning: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
} as const;

// ============================================================================
// DARK MODE COLORS
// ============================================================================

export const COLORS_DARK = {
  // Brand Colors (lighter for dark background)
  brand: {
    indigo: "#818cf8",
    blue: "#60a5fa",
    cyan: "#22d3ee",
  },

  // Semantic Colors
  semantic: {
    primary: "#818cf8",        // Primary in dark mode
    secondary: "#1e1b3a",      // Secondary in dark mode
    accent: "#22d3ee",         // Accent in dark mode
    muted: "#9d96c8",          // Muted text in dark mode
  },

  // Status Colors (lighter for dark background)
  status: {
    success: "#34d399",        // Lighter green
    error: "#f87171",          // Lighter red
    warning: "#fbbf24",        // Lighter amber
    info: "#60a5fa",           // Lighter blue
  },

  // Neutral Colors (inverse grayscale)
  neutral: {
    50: "#1c1917",             // Darkest
    100: "#292524",
    200: "#44403c",
    300: "#57534e",
    400: "#78716c",
    500: "#a8a29e",
    600: "#d6d3d1",
    700: "#e7e5e4",
    800: "#f5f5f4",
    900: "#fafaf9",            // Lightest
  },

  // Gradients
  gradients: {
    brand: "linear-gradient(135deg, #818cf8 0%, #60a5fa 50%, #22d3ee 100%)",
    brandToBlue: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
    primary: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
    success: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
    error: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
    warning: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get brand gradient based on theme
 * @param type - Gradient type: 'brand', 'brandToBlue', 'primary', 'success', 'error', 'warning'
 * @param isDark - Whether to use dark mode colors
 */
export const getBrandGradient = (
  type: "brand" | "brandToBlue" | "primary" | "success" | "error" | "warning" = "brand",
  isDark: boolean = false
): string => {
  return isDark ? COLORS_DARK.gradients[type] : COLORS.gradients[type];
};

/**
 * Get brand color by name
 * @param colorName - Color name: 'indigo', 'blue', 'cyan'
 * @param isDark - Whether to use dark mode colors
 */
export const getBrandColor = (
  colorName: "indigo" | "blue" | "cyan",
  isDark: boolean = false
): string => {
  return isDark ? COLORS_DARK.brand[colorName] : COLORS.brand[colorName];
};

/**
 * Get semantic color by name
 * @param colorName - Color name: 'primary', 'secondary', 'accent', 'muted'
 * @param isDark - Whether to use dark mode colors
 */
export const getSemanticColor = (
  colorName: "primary" | "secondary" | "accent" | "muted",
  isDark: boolean = false
): string => {
  return isDark ? COLORS_DARK.semantic[colorName] : COLORS.semantic[colorName];
};

/**
 * Get status color by name
 * @param statusName - Status name: 'success', 'error', 'warning', 'info'
 * @param isDark - Whether to use dark mode colors
 */
export const getStatusColor = (
  statusName: "success" | "error" | "warning" | "info",
  isDark: boolean = false
): string => {
  return isDark ? COLORS_DARK.status[statusName] : COLORS.status[statusName];
};

/**
 * Get neutral color by level
 * @param level - Neutral level: 50-900
 * @param isDark - Whether to use dark mode colors
 */
export const getNeutralColor = (
  level: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  isDark: boolean = false
): string => {
  return isDark ? COLORS_DARK.neutral[level] : COLORS.neutral[level];
};
