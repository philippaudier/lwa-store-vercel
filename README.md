# LWA Store

A modern, minimalist e-commerce front-end for the LWA brand. Built with React, Vite, TypeScript, and TailwindCSS v4.

## ✨ Features

- **7 Pages**: Home, Shop, Product Detail, About, Presentation, Lookbook, Pricing
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Product Filtering & Sorting**: Category filters and price sorting on Shop page
- **Tag-based Lookbook**: Filter lookbook items by style tags
- **Modern UI**: Clean, minimalist design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **No Backend**: All data stored in local TypeScript files

## 🚀 Quick Start

### Prerequisites

- **Node.js 20.19+ or 22.12+** (required for Vite 7.x)
- npm 9.x or higher

### Installation

```bash
# Clone or navigate to the project
cd lwa-store

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
lwa-store/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   │   └── home/            # Home page specific components
│   ├── pages/               # All page components
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── About.tsx
│   │   ├── Presentation.tsx
│   │   ├── Lookbook.tsx
│   │   └── Pricing.tsx
│   ├── data/                # Static data files
│   │   ├── products.ts      # Product catalog (19 items)
│   │   ├── lookbook.ts      # Lookbook items (12 items)
│   │   └── pricing.ts       # Pricing tiers (4 tiers)
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── context/             # React Context (Theme)
│   │   └── ThemeContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.ts
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & theme variables
├── public/                  # Static assets
└── README.md
```

## 🎨 Customization Guide

### Editing Product Data

**File**: `src/data/products.ts`

```typescript
{
  id: 'c1',
  name: 'Essential Tee',
  price: 35,
  category: 'clothes', // 'clothes' | 'gloves' | 'keychains' | 'accessories'
  description: 'Your product description here',
  image: 'gradient-1', // gradient-1 through gradient-6
  isNew: true,
  isLimited: false,
  sizes: ['S', 'M', 'L', 'XL'],
  relatedProducts: ['c2', 'c3', 'a1'], // Product IDs
}
```

### Editing Lookbook Items

**File**: `src/data/lookbook.ts`

```typescript
{
  id: 'l1',
  title: 'Urban Essentials',
  caption: 'Your caption here',
  image: 'gradient-1',
  tags: ['Streetwear', 'Minimal'], // Used for filtering
}
```

### Editing Pricing Tiers

**File**: `src/data/pricing.ts`

```typescript
{
  id: 'basics',
  name: 'Basics',
  description: 'Essential pieces for everyday wear',
  priceRange: '€10 - €40',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  highlighted: false, // Set to true for the "popular" badge
}
```

### Customizing Theme Colors

**File**: `src/index.css`

Edit the CSS variables in the `:root` and `.dark` selectors:

```css
:root {
  --color-accent: 99 102 241; /* Light mode accent color */
  /* ... other colors */
}

.dark {
  --color-accent: 129 140 248; /* Dark mode accent color */
  /* ... other colors */
}
```

### Modifying Navigation

**File**: `src/components/layout/Header.tsx`

Edit the `navLinks` array:

```typescript
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  // Add or remove links here
];
```

### Replacing Gradient Placeholders with Real Images

In the data files, replace `image: 'gradient-1'` with actual image URLs:

```typescript
image: '/images/product-1.jpg'
// or
image: 'https://your-cdn.com/image.jpg'
```

## 🛠 Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool
- **TypeScript 5.9** - Type safety
- **TailwindCSS 4.1** - Styling (no config file needed!)
- **React Router 7.9** - Client-side routing
- **Lucide React** - Icon library

## 🎯 Brand Info

- **Brand Name**: LWA
- **Style**: Modern, minimalist, slightly streetwear/creative
- **Products**: Clothes, gloves, keychains, accessories
- **Color Palette**:
  - Accent: Indigo (#6366F1 light, #818CF8 dark)
  - Secondary: Violet (#8B5CF6 light, #A78BFA dark)

## 📝 Notes

- **No Backend**: This is a front-end prototype. All data is stored locally in TypeScript files.
- **Cart**: The cart icon is a placeholder. No actual cart functionality is implemented.
- **Newsletter**: The newsletter form is front-end only (shows a success message).
- **Add to Cart**: Shows a toast notification but doesn't persist data.

## 🐛 Troubleshooting

### Node.js Version Error

If you see errors about Node.js version, you need Node.js 20.19+ or 22.12+:

```bash
# Using nvm (recommended)
nvm install 20
nvm use 20
```

### Port Already in Use

If port 5173 is already in use:

```bash
# Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

## 📄 License

This is a prototype project. All rights reserved.

---

**Made with ❤️ for LWA**
    tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
