# Color System Documentation

## Overview

Sistem warna yang reusable dan maintainable untuk portfolio website. Semua warna brand dipusatkan di satu tempat untuk kemudahan maintenance.

## File Lokasi

```
src/
├── constants/
│   └── colors.ts          ← Definisi warna (IMPORT DARI SINI)
├── styles/
│   └── theme.css          ← CSS Variables
└── app/
    ├── components/
    │   ├── Hero.tsx        ← Menggunakan COLORS constant
    │   └── ...
    └── pages/
        └── CaseStudy.tsx   ← Menggunakan COLORS constant
```

## Usage

### Di TypeScript/React Components

```tsx
import { COLORS } from "../constants/colors";

// Gunakan dalam style
style={{ backgroundImage: COLORS.gradients.brand }}

// Atau untuk gradient lain
style={{ backgroundImage: COLORS.gradients.brandToBlue }}
```

### Brand Colors

```typescript
COLORS.brand.indigo  // #4f46e5
COLORS.brand.blue    // #3b82f6
COLORS.brand.cyan    // #0ea5e9
```

### Gradients

```typescript
// Full gradient: Indigo → Blue → Cyan
COLORS.gradients.brand
// Result: linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #0ea5e9 100%)

// Indigo → Blue (untuk buttons, dll)
COLORS.gradients.brandToBlue
// Result: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)
```

### Utility Functions

```typescript
// Get gradient berdasarkan theme
getBrandGradient("brand", isDark)     // Returns gradient string
getBrandGradient("brandToBlue", isDark)

// Get single color berdasarkan theme
getBrandColor("indigo", isDark)       // Returns color hex
getBrandColor("blue", isDark)
getBrandColor("cyan", isDark)
```

## Dark Mode Support

Colors otomatis adjust berdasarkan `.dark` class:

```typescript
// Light Mode
COLORS.brand.indigo   // #4f46e5

// Dark Mode (tersimpan di COLORS_DARK)
COLORS_DARK.brand.indigo  // #818cf8
```

## CSS Variables (theme.css)

Untuk Tailwind styling, gunakan CSS variables:

```css
/* Light Mode */
--color-brand-indigo: #4f46e5;
--color-brand-blue: #3b82f6;
--color-brand-cyan: #0ea5e9;
--gradient-brand: linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #0ea5e9 100%);
```

## Current Implementation

### Hero.tsx
- ✅ Name gradient: `COLORS.gradients.brand`
- ✅ Stats gradient: `COLORS.gradients.brandToBlue`

### CaseStudy.tsx
- ✅ Title gradient: `COLORS.gradients.brand`
- ✅ CTA button: `COLORS.gradients.brandToBlue`
- ✅ Technologies bar: Tailwind classes (blue-500)

## Maintenance Guide

### Jika ingin ganti warna brand:

1. **Edit `/src/constants/colors.ts`**
   ```typescript
   export const COLORS = {
     brand: {
       indigo: "#NEW_COLOR_1",    // Ganti di sini
       blue: "#NEW_COLOR_2",
       cyan: "#NEW_COLOR_3",
     },
     // Gradients otomatis update
   }
   ```

2. **Edit `/src/styles/theme.css`** (untuk CSS variables)
   ```css
   :root {
     --color-brand-indigo: #NEW_COLOR_1;
     --color-brand-blue: #NEW_COLOR_2;
     --color-brand-cyan: #NEW_COLOR_3;
   }
   ```

3. **Selesai!** Semua components akan otomatis update

## Best Practices

✅ **DO:**
- Import dari `colors.ts` untuk semua warna brand
- Gunakan gradients yang sudah didefinisikan
- Update `colors.ts` jika ingin ganti warna

❌ **DON'T:**
- Hardcode hex colors di components
- Buat gradient strings baru di setiap component
- Forget to update dark mode colors

## Examples

### Example 1: Menambah Gradient Baru

```typescript
// Di colors.ts
gradients: {
  // ... existing gradients
  brandAccent: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)",
}

// Di component
style={{ backgroundImage: COLORS.gradients.brandAccent }}
```

### Example 2: Menggunakan Single Color

```typescript
// Di component
style={{ color: COLORS.brand.blue }}
// atau
className={`text-[${COLORS.brand.indigo}]`} // Tailwind
```

## Future Enhancements

- [ ] Add color variations (lighter, darker)
- [ ] Add semantic color tokens (success, warning, error)
- [ ] Create color theme variants (e.g., "ocean", "sunset")
- [ ] Add color accessibility checker
