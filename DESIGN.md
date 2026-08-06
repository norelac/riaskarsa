# Rias Karsa Design System Specification

## Overview

This document specifies the official UI/UX design system and visual guidelines for **Rias Karsa**—a community, certification, and directory platform for Makeup Artists (MUA), Freelance Models, and Clients.

Designed specifically for implementation using **Next.js (App Router)** and **Tailwind CSS**, this specification provides tokenized color palettes, typography standards, component state definitions, and layout responsive guidelines.

---

## 1. Design Tokens & Tailwind Configuration

All visual elements are mapped to semantic tokens. Use these definitions in your `tailwind.config.js` to ensure 100% design fidelity:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#625244', // Main CTA, active buttons, key focus
          hover: '#584A3D',   // Button hover state
          ring: '#6252441F',  // Focus ring glow (12% opacity)
        },
        background: '#FFFFFF', // Clean canvas background
        surface: '#FBF9F4',    // Card containers, panels, modals
        border: {
          DEFAULT: '#E8E2D6', // Subtle dividers and card borders
          hover: '#BEB9AF',   // Form input hover state
        },
        text: {
          main: '#1D1B1A',     // Primary reading copy & headlines
          muted: '#635E56',    // Subtitles, metadata, secondary copy
        },
        supporting: {
          dark: '#4E453E',
          medium: '#7C6A5B',
          light: '#D1C4BB',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(98, 82, 68, 0.05)',
        'elevated': '0 10px 30px -4px rgba(29, 27, 26, 0.08)',
      }
    },
  },
  plugins: [],
}
```

---

## 2. Typography & Hierarchy

Rias Karsa uses a dual-font system to combine traditional elegance with modern web readability:

* **Headline Font (Serif):** *Cormorant Garamond* or *Playfair Display*
  * Used for hero headlines, section titles, and brand statements.
* **Body Font (Sans-serif):** *Plus Jakarta Sans* or *Inter*
  * Used for UI buttons, body text, form controls, badges, and navigation links.

### Type Scale Matrix
| Role | Size (Desktop) | Size (Mobile) | Weight | Font Family | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | 48px / 3rem | 32px / 2rem | Bold (700) | Serif | 1.2 |
| **H2 Section Title**| 32px / 2rem | 24px / 1.5rem | SemiBold (600) | Serif | 1.3 |
| **H3 Card Header** | 22px / 1.375rem | 18px / 1.125rem | Medium (500) | Serif / Sans | 1.4 |
| **Body Primary** | 16px / 1rem | 14px / 0.875rem | Regular (400) | Sans-serif | 1.6 |
| **Body Muted / Metadata** | 14px / 0.875rem | 12px / 0.75rem | Regular (400) | Sans-serif | 1.5 |
| **Button / Badge Label** | 14px / 0.875rem | 13px / 0.8125rem | Medium (500) | Sans-serif | 1.0 |

---

## 3. Spacing & Rhythm System

All paddings, margins, and component dimensions adhere strictly to an **8px grid system**:

* `xs (4px)`: Tight inline icon gaps, badge vertical padding.
* `sm (8px)`: Compact button paddings, grid row gaps.
* `md (16px)`: Standard card padding, form input heights, default gaps.
* `lg (24px)`: Container padding, desktop card interiors, list gutters.
* `xl (32px)`: Section-to-section vertical separation (mobile).
* `2xl (64px - 80px)`: Section-to-section vertical separation (desktop).

---

## 4. Component Rules & States

### 4.1 Buttons

#### Primary Button (Main Action / Register)
* **Default:** Background `#625244`, Text `#FFFFFF`, Radius `8px`, Padding `12px 24px`.
* **Hover:** Background `#584A3D`.
* **Focus:** Background `#625244`, 3px Ring `#6252441F`.
* **Disabled:** Background `#625244` with 40% opacity, Cursor `not-allowed`.

#### Secondary Button (Explore / Outline)
* **Default:** Background `transparent`, Border `1px solid #E8E2D6`, Text `#1D1B1A`, Radius `8px`.
* **Hover:** Background `#1D1B1A0A` (4% black tint).
* **Focus:** Border `1px solid #625244`, 3px Ring `#6252441F`.
* **Disabled:** Text `#635E56`, Border `1px solid #E8E2D6` with 40% opacity.

#### Ghost / Navigation Links
* **Default:** Background `transparent`, Text `#635E56`, No border.
* **Hover:** Background `#1D1B1A06`, Text `#1D1B1A`.

---

### 4.2 Cards & Containers

* **Default Surface Card:**
  * Background: `#FBF9F4`
  * Border: `1px solid #E8E2D6`
  * Border Radius: `8px` (`md`)
  * Padding: `24px` (`lg`)
* **Elevated / Highlight Card:**
  * Background: `#FBF9F4`
  * Shadow: `0 4px 20px -2px rgba(98, 82, 68, 0.05)`
  * Border Radius: `8px` (`md`)
* **Large Modal / Panel Container:**
  * Background: `#FBF9F4`
  * Border Radius: `12px` (`lg`)

---

### 4.3 Form Inputs & Interactive Filters

* **Default State:** Background `#FBF9F4`, Border `1px solid #E8E2D6`, Text `#1D1B1A`, Radius `8px`.
* **Hover State:** Border `1px solid #BEB9AF`.
* **Focus State:** Border `1px solid #625244`, 3px Ring `#6252441F` (Outline highlight).
* **Error State:** Border `1px solid #EF4444`, 3px Ring `#EF44441F`.

---

## 5. Responsive Layout Breakpoints

To meet the 15% responsiveness criteria in competition scoring, layouts must adapt across three primary breakpoints:

1. **Mobile (`< 640px` - `sm`):**
   * Single-column vertical layout (`grid-cols-1`).
   * Hamburger slide-over drawer for main navigation.
   * Full-width CTA buttons (`w-full`).
2. **Tablet (`640px - 1023px` - `md`):**
   * 2-column grid layout for cards and features.
   * Horizontal scroll wrappers for image galleries.
3. **Desktop (`>= 1024px` - `lg/xl`):**
   * Multi-column grid (3-4 columns for MUA Directory & Open Call cards).
   * Floating/Sticky Filter bar for quick search.
   * Max content container width: `1280px` (`max-w-7xl mx-auto`).

---

## 6. Design Best Practices (Do's & Don'ts)

### Do's:
1. **Do** keep `#625244` reserved exclusively for primary interactive focus, main CTAs, and active navigation states.
2. **Do** maintain a clean distinction between the page background (`#FFFFFF`) and container surfaces (`#FBF9F4`).
3. **Do** preserve the elegant aesthetic by pairing serif headlines with generous line heights.

### Don'ts:
1. **Don't** introduce bright primary colors (e.g., pure blue or neon red) that conflict with the earth-tone palette.
2. **Don't** use multiple inconsistent shadow styles on the same screen section.
3. **Don't** reduce body copy text contrast below `#635E56` for accessibility compliance.
