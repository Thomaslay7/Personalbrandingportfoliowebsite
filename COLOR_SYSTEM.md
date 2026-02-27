# Color System Documentation

Sistem warna yang **reusable, scalable, dan maintainable** untuk portfolio website Thomas Diky. Semua warna brand dipusatkan di satu tempat untuk kemudahan maintenance dan konsistensi visual.

---

## 📁 File Structure

```
src/
├── constants/
│   └── colors.ts           ← Definisi semua warna (IMPORT DARI SINI)
├── styles/
│   └── theme.css           ← CSS Variables untuk Tailwind
└── app/
    ├── components/
    │   ├── Hero.tsx        ← Menggunakan COLORS constants
    │   ├── CaseStudy.tsx   ← Menggunakan COLORS constants
    │   ├── ProjectCard.tsx ← Menggunakan COLORS constants
    │   └── ChatWidget.tsx  ← Menggunakan COLORS constants
    └── pages/
        └── ...
```

---

## 🎨 Color Categories

Sistem warna dibagi menjadi beberapa kategori untuk kemudahan penggunaan:

### 1. **Brand Colors** (Warna Utama Brand)
Warna primary yang mendefinisikan identitas brand

```typescript
COLORS.brand.indigo  // #4f46e5 (Light Mode)
COLORS.brand.blue    // #3b82f6 (Light Mode)
COLORS.brand.cyan    // #0ea5e9 (Light Mode)

// Dark mode versions
COLORS_DARK.brand.indigo  // #818cf8
COLORS_DARK.brand.blue    // #60a5fa
COLORS_DARK.brand.cyan    // #22d3ee
```

### 2. **Semantic Colors** (Warna Kontekstual)
Warna untuk konteks atau tujuan spesifik

```typescript
COLORS.semantic.primary   // #4f46e5 - Main actions, buttons, links
COLORS.semantic.secondary // #ede9fe - Secondary elements
COLORS.semantic.accent    // #0ea5e9 - Highlights, accents
COLORS.semantic.muted     // #6b6888 - Disabled, muted text
```

### 3. **Status Colors** (Feedback & State)
Warna untuk feedback dan status message

```typescript
COLORS.status.success  // #10b981 - Success, valid
COLORS.status.error    // #ef4444 - Error, danger
COLORS.status.warning  // #f59e0b - Warning, caution
COLORS.status.info     // #3b82f6 - Info, neutral
```

### 4. **Neutral Colors** (Grayscale)
Warna netral untuk background, text, borders

```typescript
COLORS.neutral[50]   // #fafaf9 - Lightest
COLORS.neutral[100]  // #f5f5f4
COLORS.neutral[200]  // #e7e5e4
COLORS.neutral[300]  // #d6d3d1
// ... sampai
COLORS.neutral[900]  // #1c1917 - Darkest
```

---

## 🎯 Usage Guide

### ✅ TypeScript/React Components (Recommended)

**Menggunakan Color Constants:**

```tsx
import { COLORS, getBrandGradient } from "../constants/colors";

function Hero() {
  return (
    <div 
      className="min-h-screen"
      style={{ backgroundImage: COLORS.gradients.brand }}
    >
      <button 
        style={{ color: COLORS.brand.indigo }}
      >
        Click me
      </button>
    </div>
  );
}
```

**Menggunakan Utility Functions:**

```tsx
import { getSemanticColor, getStatusColor, getNeutralColor } from "../constants/colors";

function StatusBadge({ status, isDark }) {
  const color = getStatusColor(status, isDark); // 'success' | 'error' | 'warning' | 'info'
  return <span style={{ color }}>{status}</span>;
}

function MutedText({ isDark }) {
  const color = getSemanticColor("muted", isDark);
  return <p style={{ color }}>Muted text</p>;
}

function NeutralBg({ isDark }) {
  const bgColor = getNeutralColor(100, isDark);
  return <div style={{ backgroundColor: bgColor }}>Background</div>;
}
```

### ✅ CSS Variables (Tailwind Classes)

**Untuk styling dengan Tailwind/CSS:**

```css
/* Light Mode - di theme.css */
:root {
  --color-brand-indigo: #4f46e5;
  --color-semantic-primary: #4f46e5;
  --color-status-success: #10b981;
  --color-neutral-50: #fafaf9;
  --gradient-brand: linear-gradient(...);
}

/* Dark Mode - di theme.css */
.dark {
  --color-brand-indigo: #818cf8;
  --color-semantic-primary: #818cf8;
  --color-status-success: #34d399;
  --color-neutral-50: #1c1917;
  --gradient-brand: linear-gradient(...);
}
```

**Di HTML/Component:**

```html
<!-- Menggunakan CSS variable -->
<div style="background-color: var(--color-brand-indigo)">
  Primary Brand Color
</div>

<div style="background-image: var(--gradient-brand)">
  Brand Gradient
</div>
```

---

## 🎨 Gradients

Tersedia beberapa preset gradients untuk berbagai kebutuhan:

```typescript
// Brand Gradients
COLORS.gradients.brand           // Indigo → Blue → Cyan (full)
COLORS.gradients.brandToBlue     // Indigo → Blue
COLORS.gradients.primary         // Alternative primary

// Status Gradients
COLORS.gradients.success         // Green gradient
COLORS.gradients.error           // Red gradient
COLORS.gradients.warning         // Amber gradient
```

---

## 🌙 Dark Mode Support

Sistem secara otomatis menyesuaikan warna berdasarkan mode:

```typescript
import { COLORS, COLORS_DARK, getBrandGradient } from "../constants/colors";

function MyComponent({ isDark }) {
  // Option 1: Pilih object berdasarkan mode
  const colors = isDark ? COLORS_DARK : COLORS;
  
  // Option 2: Gunakan utility function
  const gradient = getBrandGradient("brand", isDark);
  
  return <div style={{ backgroundImage: gradient }} />;
}
```

**CSS Variables otomatis:**

Ketika `.dark` class ditambahkan ke `<html>` atau parent element, semua CSS variables otomatis berubah ke dark mode versions.

---

## 📝 Implementation Checklist

Ketika menambah component atau feature baru:

- [ ] Import `COLORS` dari `src/app/constants/colors.ts`
- [ ] Gunakan color constants, **jangan hardcode warna**
- [ ] Untuk gradients, gunakan `COLORS.gradients.*`
- [ ] Untuk feedback colors, gunakan `COLORS.status.*`
- [ ] Test di light dan dark mode
- [ ] Update dokumentasi ini jika menambah kategori warna baru

---

## 🔄 How to Change Colors

### ✏️ Mengubah Brand Color (Semua tempat otomatis update)

**1. Edit `/src/app/constants/colors.ts`:**

```typescript
export const COLORS = {
  brand: {
    indigo: "#NEW_INDIGO", // Update di sini
    blue: "#NEW_BLUE",     // Update di sini
    cyan: "#NEW_CYAN",     // Update di sini
  },
  // ... rest of colors
};

export const COLORS_DARK = {
  brand: {
    indigo: "#NEW_INDIGO_DARK",
    // ...
  },
  // ...
};
```

**2. Update CSS Variables di `/src/styles/theme.css`:**

```css
:root {
  --color-brand-indigo: #NEW_INDIGO;
  --color-brand-blue: #NEW_BLUE;
  --color-brand-cyan: #NEW_CYAN;
}

.dark {
  --color-brand-indigo: #NEW_INDIGO_DARK;
  --color-brand-blue: #NEW_BLUE_DARK;
  --color-brand-cyan: #NEW_CYAN_DARK;
}
```

**3. ✅ Done!** Semua component otomatis update.

### ✏️ Mengubah Status Colors

Edit `COLORS.status` dan `COLORS_DARK.status` di `colors.ts`, dan CSS variables di `theme.css`.

### ✏️ Menambah Warna Baru

1. Tambah ke `COLORS` dan `COLORS_DARK` di `colors.ts`
2. Tambah CSS variable di `theme.css`
3. Tambah utility function jika diperlukan
4. Update dokumentasi ini

---

## 📚 Current Implementation

### Components Menggunakan Sistem Warna:

- ✅ **Hero.tsx** - Brand gradients, semantic colors
- ✅ **CaseStudy.tsx** - Status colors, gradients
- ✅ **ProjectCard.tsx** - Brand colors, semantic colors
- ✅ **ChatWidget.tsx** - Primary colors, status colors
- ✅ **Footer.tsx** - Brand colors
- ✅ **Contact.tsx** - Semantic colors

---

## 🚀 Pro Tips

1. **Selalu gunakan constants**, jangan hardcode warna
2. **Gunakan semantic colors** untuk konteks yang jelas (primary, secondary, muted)
3. **Gunakan status colors** untuk feedback (success, error, warning)
4. **Test dark mode** setiap kali menambah feature
5. **Dokumentasikan** penggunaan warna di component

---

## 📞 Questions?

Referensikan file `/src/app/constants/colors.ts` untuk melihat semua color options dan struktur lengkapnya.

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
