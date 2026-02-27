# Color System Usage Examples

Contoh-contoh praktis cara menggunakan sistem warna di project.

## 1. Basic Usage - Brand Gradient

**File:** `src/app/components/Hero.tsx`

```tsx
import { COLORS } from "../constants/colors";

export function Hero() {
  return (
    <section
      style={{ backgroundImage: COLORS.gradients.brand }}
      className="min-h-screen"
    >
      {/* Content */}
    </section>
  );
}
```

## 2. Using Semantic Colors

**File:** `src/app/components/Button.tsx`

```tsx
import { getSemanticColor } from "../utils/colorUtils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "muted";
}

export function Button({ variant = "primary" }: ButtonProps) {
  const color = getSemanticColor(variant);

  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      Click me
    </button>
  );
}
```

## 3. Status Colors for Feedback

**File:** `src/app/components/Toast.tsx`

```tsx
import { useStatusColor } from "../utils/colorUtils";

interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

export function Toast({ type, message }: ToastProps) {
  const bgColor = useStatusColor(type);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "16px",
        borderRadius: "8px",
        color: "white",
      }}
    >
      {message}
    </div>
  );
}
```

## 4. Color with Opacity

**File:** `src/app/components/Card.tsx`

```tsx
import { colorWithOpacity } from "../utils/colorUtils";
import { COLORS } from "../constants/colors";

export function Card() {
  return (
    <div
      style={{
        backgroundColor: colorWithOpacity(COLORS.brand.indigo, 0.1),
        border: `1px solid ${colorWithOpacity(COLORS.brand.indigo, 0.2)}`,
        padding: "16px",
      }}
    >
      {/* Content */}
    </div>
  );
}
```

## 5. Dark Mode Aware Component

**File:** `src/app/components/ThemeAwareText.tsx`

```tsx
import { useSemanticColor, isDarkMode } from "../utils/colorUtils";

export function ThemeAwareText() {
  const textColor = useSemanticColor("primary");

  return (
    <p
      style={{
        color: textColor,
      }}
    >
      {isDarkMode() ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </p>
  );
}
```

## 6. Neutral Colors for Grays

**File:** `src/app/components/Divider.tsx`

```tsx
import { useNeutralColor } from "../utils/colorUtils";

export function Divider() {
  const borderColor = useNeutralColor(200); // Light border
  const mutedColor = useNeutralColor(500);  // Muted text

  return (
    <>
      <hr style={{ borderColor }} />
      <p style={{ color: mutedColor }}>Or continue with</p>
    </>
  );
}
```

## 7. Contrast Color Detection

**File:** `src/app/components/Badge.tsx`

```tsx
import { getContrastColor, COLORS } from "../utils/colorUtils";

export function Badge() {
  const bgColor = COLORS.brand.indigo;
  const textColor = getContrastColor(bgColor); // Returns black or white

  return (
    <span
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "4px 12px",
        borderRadius: "20px",
      }}
    >
      Premium
    </span>
  );
}
```

## 8. Color Shades & Tints

**File:** `src/app/components/Hover.tsx`

```tsx
import { createColorShade, createColorTint, COLORS } from "../utils/colorUtils";

export function HoverButton() {
  const normalColor = COLORS.brand.blue;
  const hoverColor = createColorShade(normalColor, 15); // Darker
  const activeColor = createColorShade(normalColor, 30); // Even darker

  return (
    <button
      style={{ backgroundColor: normalColor }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = normalColor)}
      onMouseDown={(e) => (e.currentTarget.style.backgroundColor = activeColor)}
      onMouseUp={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
    >
      Hover & Click
    </button>
  );
}
```

## 9. Using CSS Variables in Tailwind

**File:** `src/app/components/GradientSection.tsx`

```tsx
export function GradientSection() {
  return (
    <section style={{ backgroundImage: "var(--gradient-brand)" }} className="py-20">
      <div style={{ color: "var(--color-semantic-primary)" }}>
        Using CSS Variables
      </div>
    </section>
  );
}
```

## 10. Complete Themed Component

**File:** `src/app/components/CompletedExample.tsx`

```tsx
import {
  COLORS,
  getBrandGradient,
  getSemanticColor,
  getStatusColor,
} from "../constants/colors";
import {
  useStatusColor,
  isDarkMode,
  colorWithOpacity,
} from "../utils/colorUtils";

interface StatusIndicatorProps {
  status: "success" | "error" | "warning" | "info";
  label: string;
}

export function StatusIndicator({ status, label }: StatusIndicatorProps) {
  const isDark = isDarkMode();
  const bgColor = useStatusColor(status);
  const borderColor = colorWithOpacity(bgColor, 0.3);
  const primaryColor = getSemanticColor("primary", isDark);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        backgroundColor: colorWithOpacity(bgColor, 0.1),
        borderLeft: `4px solid ${bgColor}`,
        borderRadius: "8px",
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: bgColor,
        }}
      />
      <span style={{ color: primaryColor, fontWeight: "500" }}>
        {label} ({status})
      </span>
    </div>
  );
}
```

## 11. Gradient Buttons

**File:** `src/app/components/GradientButton.tsx`

```tsx
import { COLORS } from "../constants/colors";

interface GradientButtonProps {
  variant?: "primary" | "success" | "error" | "warning";
  children: React.ReactNode;
}

export function GradientButton({
  variant = "primary",
  children,
}: GradientButtonProps) {
  const gradientMap = {
    primary: COLORS.gradients.brand,
    success: COLORS.gradients.success,
    error: COLORS.gradients.error,
    warning: COLORS.gradients.warning,
  };

  return (
    <button
      style={{
        backgroundImage: gradientMap[variant],
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      {children}
    </button>
  );
}
```

## 12. Input with Brand Color

**File:** `src/app/components/TextInput.tsx`

```tsx
import { colorWithOpacity, useSemanticColor } from "../utils/colorUtils";

export function TextInput() {
  const primaryColor = useSemanticColor("primary");

  return (
    <input
      type="text"
      placeholder="Enter text"
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: `2px solid ${colorWithOpacity(primaryColor, 0.2)}`,
        fontSize: "16px",
        transition: "border-color 0.2s",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.borderColor = `${colorWithOpacity(primaryColor, 0.5)}`)
      }
      onBlur={(e) =>
        (e.currentTarget.style.borderColor = `${colorWithOpacity(primaryColor, 0.2)}`)
      }
    />
  );
}
```

---

## 📋 Checklist untuk Maintainability

- ✅ Selalu gunakan color constants, jangan hardcode
- ✅ Gunakan utility functions untuk kemudahan
- ✅ Test di dark mode
- ✅ Gunakan semantic colors untuk konteks yang jelas
- ✅ Gunakan status colors untuk feedback
- ✅ Document penggunaan warna di component
- ✅ Update COLOR_SYSTEM.md jika menambah kategori baru

---

## 🎨 Quick Reference

```typescript
// Import yang paling sering digunakan
import { COLORS, COLORS_DARK } from "../constants/colors";
import {
  useStatusColor,
  useSemanticColor,
  colorWithOpacity,
  isDarkMode,
} from "../utils/colorUtils";
```

## 📞 Tips

1. **Untuk warna solid:** Gunakan `COLORS.brand`, `COLORS.semantic`, atau `COLORS.status`
2. **Untuk gradients:** Gunakan `COLORS.gradients.*`
3. **Untuk opacity:** Gunakan `colorWithOpacity()` helper
4. **Untuk dark mode:** Gunakan `isDarkMode()` atau import `COLORS_DARK`
5. **Untuk hover/active states:** Gunakan `createColorShade()` atau `createColorTint()`
